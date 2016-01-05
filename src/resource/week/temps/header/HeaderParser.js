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
    this.resources = this.getResources();
    this.widgetHeaderClass = this.view.widgetHeaderClass;
    this.rsEmptyArray = new Array(this.ds.getAllowedResourcesCount());
    this.limitColWidthAttr = this.getLimitColWidthAttr();
    this.totalColIterator = new Array(this.ds.getTotalColCount());
  }

  /**
   * Parse Header.html
   * @override
   * @return {String} HTML
   */
  parse() {
    return Header(this, {
      resourceHtml: this.getResourceHtml()
    });
  }

  hasDayRow() {
    return this.ds.daysPerRow > 1 || !this.hasResources();
  }

  hasResources() {
    return this.ds.getAllowedResourcesCount() > 0;
  }

  getResourceHtml() {
    let resourceHtml = "{{title}}";
    let renderRsHeaderItem = this.view.opt("renderRsHeaderItem");
    if($.isFunction(renderRsHeaderItem)){
      let retrunHtml = renderRsHeaderItem();
      if(retrunHtml){
        resourceHtml = retrunHtml;
      }
    }
    return resourceHtml;
  }

  getLimitColWidthAttr() {
    let limitColWidth = this.view.opt("limitHeaderWidth");
    return limitColWidth ? "width=" + limitColWidth : "";
  }

  getResources() {
    let resources = this.view.calendar.getResources();
    if(this.isRTL){
      let revsResources = [];
      resources.reverse();
      resources.forEach((rsc) => {
        revsResources.push(rsc);
      });
      resources.reverse();
      return revsResources;
    }
    return resources;
  }

  dateFormat() {
    return htmlEscape(this.format("ddd"));
  }

}
