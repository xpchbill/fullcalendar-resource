"use strict";

import {htmlEscape} from "../../FC.js";
import TempParser from "../../tools/TempParser.js";
import Header from "./Header.html";
import Intro from "./Intro.html";

export default class HeaderParser extends TempParser{

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
    this.daysMoment = this.ds.dayDates;
    this.resources = this.getResources();
    this.widgetHeaderClass = this.view.widgetHeaderClass;
    this.rsEmptyArray = new Array(this.ds.getResourcesCount());
  }

  /**
   * Parse Header.html
   * @override
   * @return {String} HTML
   */
  parse() {
    return Header(this, {
      intro: this.getIntro(),
      colspan: this.getColspan()
    });
  }

  getIntro() {
    return Intro(this);
  }

  hasDayRow() {
    return this.ds.daysPerRow > 1 || !this.hasResources();
  }

  hasResources() {
    return this.ds.getResourcesCount() > 0;
  }

  getResources() {
    let resources = this.ds.getResources();
    if(this.isRTL){
      let revsResources = [];
      resources.reverse();
      resources.forEach((rsc) => {
        revsResources.push(rsc);
      });
      resources.reverse();
      return revsResources;
    }
    console.log(resources);
    return resources;
  }

  getColspan() {
    let daysPerRow = this.ds.daysPerRow;
    return daysPerRow > 1 ? "colspan='" + daysPerRow + "'" : "";
  }

  getRowspan() {
    return this.hasResources() ? "rowspan=2" : "";
  }

  dateFormat() {
    return htmlEscape(this.format("ddd"));
  }

}
