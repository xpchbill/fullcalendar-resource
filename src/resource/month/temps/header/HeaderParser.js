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
  constructor(monthView) {
    super(monthView);
    this.rsIterator = this.getRsIterator();
    this.limitColWidthAttr = this.getLimitColWidthAttr();
    this.totalColIterator = new Array(this.ds.calendar.getResourcesCount());
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
    return this.ds.calendar.getAllowedResources().length > 0;
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
    let limitColWidth = this.ds.opt("limitHeaderWidth");
    return limitColWidth ? "width=" + limitColWidth : "";
  }

  getRsIterator() {
    let returnResources = [],
        resources = this.ds.calendar.getResources();
    resources.forEach((rs) => {
      returnResources.push({
        resource: rs,
        render: this.ds.opt("renderRsHeaderItem"),
        isAllowed: this.ds.calendar.isAllowedResource(rs)
      });
    });
    return returnResources;
  }

}
