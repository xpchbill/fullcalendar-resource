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
    this.rsIterator = this.getRsIterator();
    this.widgetHeaderClass = this.view.widgetHeaderClass;
    this.limitColWidthAttr = this.getLimitColWidthAttr();
    this.totalColIterator = new Array(this.view.calendar.getResourcesCount());
  }

  /**
   * Parse Header.html
   * @override
   * @return {String} HTML
   */
  parse() {
    return Header(this);
  }

  hasResources() {
    return this.ds.getAllowedResourcesColCount() > 0;
  }

  getResourceHtml() {
    let resourceHtml = this.resource.title;
    if($.isFunction(this.render)){
      let retrunHtml = this.render(this.resource, this.isAllowed);
      resourceHtml = retrunHtml ? retrunHtml : resourceHtml;
    }
    return resourceHtml;
  }

  getLimitColWidthAttr() {
    let limitColWidth = this.view.opt("limitHeaderWidth");
    return limitColWidth ? "width=" + limitColWidth : "";
  }

  getRsIterator() {
    let returnResources = [],
        resources = this.view.calendar.getResources();
    resources.forEach((rs) => {
      returnResources.push({
        resource: rs,
        render: this.view.opt("renderRsHeaderItem"),
        isAllowed: this.view.calendar.isAllowedResource(rs)
      });
    });

    if(this.isRTL){
      returnResources = returnResources.reverse();
    }
    return returnResources;
  }

  dateFormat() {
    return htmlEscape(this.format("ddd"));
  }

}
