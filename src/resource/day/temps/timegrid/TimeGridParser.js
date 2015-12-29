"use strict";

import {htmlEscape, isInt, divideDurationByDuration} from "../../../FC.js";
import TempParser from "../../../tools/TempParser.js";
import TimeGrid from "./TimeGrid.html";
import BgIntro from "./BgIntro.html";

export default class TimeGridParser extends TempParser{

  /**
   * Us this.ds to organize parse data.
   * @constructor
   * @override
   * @param  {Object?Class}
   */
  constructor(rsGridContext) {
    super(rsGridContext);
    this.view = this.ds.view;
    this.isRTL = this.ds.isRTL;
    this.widgetContentClass = this.view.widgetContentClass;
    this.bgCellsIterator = this.getBgCells();
    this.slatCellsIterator = this.getSlatCells();
  }

  /**
   * Parse Header.html
   * @override
   * @return {String} HTML
   */
  parse() {
    return TimeGrid(this, {
      bgintro: this.getBgIntro(),
      axisStyle: this.view.axisStyleAttr()
    });
  }

  getBgIntro() {
    return BgIntro({
      axisStyle: this.view.axisStyleAttr(),
      widgetContentClass: this.widgetContentClass
    });
  }

  getBgCells() {
    let colCnt = this.ds.colCnt,
        bgCells = [];

    for(let col = 0; col < colCnt; col++){
      let date = this.ds.getCellDate(0, col);
      let classes = this.ds.getDayClasses(date);
      classes.unshift("fc-day", this.view.widgetContentClass);
      bgCells.push({
        date: date,
        classes: classes.join(" ")
      });
    }
    return bgCells;
  }

  getSlatCells() {
    let maxTime = this.ds.maxTime;
    let minTime = this.ds.minTime;
    let slotTime = moment.duration(+minTime);
    let slatCells = [];

    while (slotTime < maxTime) {
      let slotDate = this.ds.start.clone().time(slotTime);
      let isLabeled = isInt(divideDurationByDuration(slotTime, this.ds.labelInterval));
      slatCells.push({
        date: slotDate,
        isLabeled: isLabeled,
        labelFormat: this.ds.labelFormat
      });
      slotTime.add(this.ds.slotDuration);
    }
    return slatCells;
  }

  getSlatDateFormate() {
    return htmlEscape(this.date.format(this.labelFormat));
  }

  getFormatDate() {
    return this.date.format('YYYY-MM-DD');
  }

}
