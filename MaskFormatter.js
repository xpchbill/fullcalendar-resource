import take from 'lodash/take';
import takeRight from 'lodash/takeRight';
import sortBy from 'lodash/sortBy';
import repeat from 'lodash/repeat';

class CharDescriptor {
  constructor(char, isNew) {
    this.char = char;
    this.isNew = isNew; // Indicate this character is new added by user input.
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
        const addedChars = comparedCharsList.splice(positionRange[0], distance);

        const needFillNextChars = !prevValue || prevValue === template ||
                                  (
                                    template[positionRange[0]] === promptChar &&
                                    comparedCharsList[positionRange[0]] === promptChar
                                  );

        value = needFillNextChars ? [].concat(
          take(comparedCharsList, positionRange[0]),
          takeRight(comparedCharsList, (comparedCharsList.length - positionRange[0]))
            .map((char) => {
              if (char === promptChar) {
                return addedChars.shift();
              }
              return char;
            })
        ).join('') : comparedCharsList.join('');
      }
    }

    return value.split('').map((char, i) =>
        new CharDescriptor(
          char,
          i >= positionRange[0] && i < positionRange[1]
        )
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

    const finalString = template.split('').reduce((formatedString, templateChar, i) => {
      if (templateChar === promptChar) {
        const noMatchedChar = CharDescriptorList.every((charDescriptor) => {
          const { char, isPicked, isRejected } = charDescriptor;

          if (isPicked || isRejected) {
            return true;
          }

          if (char === promptChar && showPrompt) {
            formatedString += promptChar;
            charDescriptor.isPicked = true;
            return false;
          } else if (mask[i].test(char)) {
            formatedString += char;
            charDescriptor.isPicked = true;
            return false;
          }

          charDescriptor.isRejected = true;
          console.log(`MaskFormatter: Abandon character '${char}'`);

          return true;
        });

        if (showPrompt && noMatchedChar) {
          formatedString += templateChar;
        }

        return formatedString;
      }

      const isParseCharDescriptorDone =
              CharDescriptorList.every(
                charDescriptor => charDescriptor.isPicked || charDescriptor.isRejected
              );

      if (isParseCharDescriptorDone && !showPrompt) {
        return formatedString;
      }

      formatedString += templateChar;

      return formatedString;
    }, '');

    return {
      value: finalString,
      caretPosition: this.getCaretPosition()
    };
  }

  getCaretPosition() {
    // ...
  }
}
