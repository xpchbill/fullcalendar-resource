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
    this.rsEmptyArray = new Array(this.ds.getAllowedResourcesCount());
    this.limitColWidthAttr = this.ds.getLimitColWidthAttr();
    this.totalColIterator = new Array(this.ds.getTotalColCount());
    this.rsHtmlIterator = this.getRsHtmlIterator();
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
    return this.ds.getAllowedResourcesCount() > 0;
  }

  getRsHtmlIterator() {
    let resources = this.ds.getAllowedResources();
    let rsHtmlIterator = [];
    resources.forEach((rs) => {
      rsHtmlIterator.push({
        resource: rs,
        rsHtml: "<b>" + rs.title + "</b>"
      });
    });
    return rsHtmlIterator;
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

  getAllowedResources() {
    let resources = this.ds.getAllowedResources();
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

  getColspan() {
    let daysPerRow = this.ds.daysPerRow;
    return daysPerRow > 1 ? "colspan='" + daysPerRow + "'" : "";
  }

  dateFormat() {
    return htmlEscape(this.format("ddd"));
  }

}
