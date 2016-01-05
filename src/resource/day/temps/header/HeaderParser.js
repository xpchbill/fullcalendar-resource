"use strict";

import {htmlEscape} from "../../../FC.js";
import TempParser from "../../../tools/TempParser.js";
import Header from "./Header.html";

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
    this.daysMoment = this.ds.dayDates;
    this.resources = this.getAllowedResources();
    this.widgetHeaderClass = this.view.widgetHeaderClass;
    this.rsEmptyArray = new Array(this.ds.getAllowedResourcesColCount());
    this.limitColWidthAttr = this.ds.getLimitColWidthAttr();
    this.totalColIterator = new Array(this.ds.getTotalColCount());
  }

  /**
   * Parse Header.html
   * @override
   * @return {String} HTML
   */
  parse() {
    return Header(this, {
      resourceHtml: this.getResourceHtml(),
      colspan: this.getColspan()
    });
  }

  hasDayRow() {
    return this.ds.daysPerRow > 1 || !this.hasResources();
  }

  hasResources() {
    return this.ds.getAllowedResourcesColCount() > 0;
  }

  getResourceHtml() {
    let resourceHtml = "{{resource.title}}";
    let renderRsHeaderItem = this.view.opt("renderRsHeaderItem");
    if($.isFunction(renderRsHeaderItem)){
      let retrunHtml = renderRsHeaderItem();
      if(retrunHtml){
        resourceHtml = retrunHtml;
      }
    }
    return resourceHtml;
  }

  getAllowedResources() {
    let returnResources = [],
        resources = this.view.calendar.getResources();
    resources.forEach((rs) => {
      returnResources.push({
        resource: rs,
        isAllowed: true
      });
    });

    if(this.isRTL){
      returnResources = returnResources.reverse();
    }
    return returnResources;
  }

  getColspan() {
    let daysPerRow = this.ds.daysPerRow;
    return daysPerRow > 1 ? "colspan='" + daysPerRow + "'" : "";
  }

  dateFormat() {
    return htmlEscape(this.format("ddd"));
  }

}
