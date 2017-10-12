import take from 'lodash/take';
import takeRight from 'lodash/takeRight';
import sortBy from 'lodash/sortBy';
import repeat from 'lodash/repeat';
import reverse from 'lodash/reverse';

class CharDescriptor {
  constructor(char) {
    this.char = char;
    this.isPicked = false; // Indicate this character has been picked out.
    this.isRejected = false; // Indicate this character cannot meet the mask rule.
  }
}

export default class MaskFormatter {
  constructor({ mask = [], promptChar = '_', showPrompt = false, keepPosition = false }) {
    this.mask = mask;
    this.promptChar = promptChar;
    this.showPrompt = showPrompt;
    this.keepPosition = keepPosition;
    this.template = this.getTemplate();
  }

  getTemplate() {
    const { mask, promptChar } = this;
    return mask.map(char => ((char instanceof RegExp) ? promptChar : char)).join('') || '';
  }

  createDescriptorList(value, prevValue = '', caretPosition) {
    const { mask, promptChar, showPrompt, keepPosition, template } = this;
    const distance = value.length - prevValue.length;
    const caretPositionBeforeChange = caretPosition +
            (distance > 0 ? (-distance) : Math.abs(distance));
    const positionRange = sortBy([caretPosition, caretPositionBeforeChange]);

    if (keepPosition && showPrompt) {
      value = prevValue ? value : value + template;
      const charsList = value.split('');
      if (distance < 0) {
        value = charsList.map((char, index) => {
          if (index === positionRange[0] - 1) {
            char += repeat(promptChar, Math.abs(distance)).split('').map((_char, i) => {
              const templateChar = template.split('')[index + i + 1];
              return templateChar;
            }).join('');
          }
          return char;
        }).join('');
      } else if (distance > 0) {
        const comparedCharsList = value.split('');
        let enteredChars = comparedCharsList.splice(positionRange[0], distance);

        const needFillNextChars = !prevValue || prevValue === template ||
                                  (
                                    template[positionRange[0]] === promptChar &&
                                    comparedCharsList[positionRange[0]] === promptChar
                                  );

        value = needFillNextChars ? [].concat(
          take(comparedCharsList, positionRange[0]),
          takeRight(comparedCharsList, (comparedCharsList.length - positionRange[0]))
            .map((char, i) => {
              if (!mask[positionRange[0] + i].test) {
                return char;
              }

              const isPromptChar = enteredChars.length && char === promptChar;
              const isMeetMaskRule = mask[positionRange[0] + i].test(enteredChars[0]);

              // If the entered char cannot match the mask RegExp with corresponding index,
              // give up this char.
              if (isPromptChar && !isMeetMaskRule) {
                enteredChars.shift();
              }

              // If the entered char can meet the mask RegExp with corresponding index,
              // using the entered char to replace placehoder position('_')
              if (isPromptChar && isMeetMaskRule) {
                return enteredChars.shift();
              }

              // If char already is specific input char, clean entered chars.
              if (char !== promptChar) {
                enteredChars = [];
              }

              return char;
            })
        ).join('') : comparedCharsList.join('');
      }
    }

    return value.split('').map(char =>
        new CharDescriptor(char)
      ).filter((charDescriptor, i) => {
        const char = charDescriptor.char;

        if (char !== promptChar) {
          const shouldOffset = i >= positionRange[0] && prevValue.length === mask.length;
          return char !== this.template[(shouldOffset) ? i - distance : i];
        }
        return true;
      });
  }

  execute(value = '', prevValue = '', caretPosition = 0) {
    const { mask, promptChar, showPrompt, template } = this;
    const CharDescriptorList = this.createDescriptorList(value, prevValue, caretPosition);

    const nextValue = template.split('').reduce((returnString, templateChar, i) => {
      if (templateChar === promptChar) {
        const noMatchedChar = CharDescriptorList.every((charDescriptor) => {
          const { char, isPicked, isRejected } = charDescriptor;

          if (isPicked || isRejected) {
            return true;
          }

          if (char === promptChar && showPrompt) {
            returnString += promptChar;
            charDescriptor.isPicked = true;
            return false;
          } else if (mask[i].test(char)) {
            returnString += char;
            charDescriptor.isPicked = true;
            return false;
          }

          charDescriptor.isRejected = true;
          console.log(`MaskFormatter: Abandon character '${char}'`);

          return true;
        });

        if (showPrompt && noMatchedChar) {
          returnString += templateChar;
        }

        return returnString;
      }

      const isParseCharDescriptorDone =
              CharDescriptorList.every(
                charDescriptor => charDescriptor.isPicked || charDescriptor.isRejected
              );

      if (isParseCharDescriptorDone && !showPrompt) {
        return returnString;
      }

      returnString += templateChar;

      return returnString;
    }, '');

    return {
      value: nextValue,
      caretPosition: this.getCaretPosition(value, prevValue, nextValue, caretPosition)
    };
  }

  getCaretPosition(value = '', prevValue = '', nextValue, caretPosition = 0) {
    const { mask, promptChar, template } = this;

    const inputCharsList = value.split('');
    const nextCharsList = nextValue.split('');
    const distance = value.length - prevValue.length;

    if (distance > 0 && nextValue === prevValue) {
      return caretPosition - distance;
    }

    let leftChars = [];
    if (distance < 0 && caretPosition === value.length) {
      leftChars = nextCharsList;
    } else {
      leftChars = take(inputCharsList, caretPosition)
                    .filter(char => nextValue.indexOf(char) !== -1);
    }
    const targetChar = leftChars[leftChars.length - 1];

    let countForTargetChar = [].concat(
      leftChars.filter(char => char === targetChar),
      take(mask, template.indexOf(promptChar))
        .filter(
          (char, i) => char === targetChar && inputCharsList[i] !== char
        )
    ).length;

    let nextCaretPosition = 0;

    nextCharsList.every((char, i) => {
      if (!countForTargetChar) {
        return false;
      }
      if (char === targetChar) {
        countForTargetChar -= 1;
        nextCaretPosition = i + 1;
      }
      return true;
    });

    if (distance > 0) {
      takeRight(mask, (mask.length - nextCaretPosition)).every((m, i) => {
        if (m.test) {
          nextCaretPosition += i;
          return false;
        }
        return true;
      });
    }

    if (distance < 0) {
      reverse(take(mask, nextCaretPosition)).every((m, i) => {
        if (m.test) {
          nextCaretPosition -= i;
          return false;
        }
        return true;
      });
    }

    return nextCaretPosition;
  }
}
