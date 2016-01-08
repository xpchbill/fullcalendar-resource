"use strict";

import {Grid, DayTableMixin, htmlEscape} from "../../FC.js";
import HeadIntro from "./temps/HeadIntro.html";
import NumberIntro from "./temps/NumberIntro.html";
import BgIntro from "./temps/BgIntro.html";
import Intro from "./temps/Intro.html";

/* Extract common methods between ResourceDayGrid and ResourceTimeGrid */
export default class BaseResourceGrid extends Grid{

  renderHeadIntroHtml() {
    let view = this.view;
    return view.weekNumbersVisible ? HeadIntro({
      widgetHeaderClass: view.widgetHeaderClass,
      weekNumberStyleAttr: view.weekNumberStyleAttr(),
      weekNumberTitle: () => {
        htmlEscape(view.opt('weekNumberTitle'))
      }
    }) : "";
  }

  renderNumberIntroHtml(row) {
    let view = this.view;
    return view.weekNumbersVisible ? NumberIntro({
      weekNumberStyleAttr: view.weekNumberStyleAttr(),
      getCellDate: this.getCellDate(row, 0).format('w')
    }) : "";
  }

  renderBgIntroHtml() {
    let view = this.view;
    return view.weekNumbersVisible ? BgIntro({
      widgetContentClass: view.widgetContentClass,
      weekNumberStyleAttr: view.weekNumberStyleAttr()
    }) : "";
  }

  renderIntroHtml() {
    let view = this.view;
    return view.weekNumbersVisible ? Intro({
      weekNumberStyleAttr: view.weekNumberStyleAttr()
    }) : "";
  }

  /**
   * Render resources by call DayTableMixin.updateDayTableCols.
   * For rendering Grid columns by resources.
   * Call it after fetch resources.
   */
  renderResources() {
    DayTableMixin.updateDayTableCols.call(this);
  }

  /**
   * Get resources.
   * @return {Array} resources
   */
  getAllowedResources() {
    let calendar = this.view.calendar;
    return calendar.getAllowedResources();
  }

  /**
   * Get resources count.
   * @return {Number}
   */
  getAllowedResourcesCount() {
    let resources = this.getAllowedResources();
    return resources.length;
  }

  getAllowedResourcesColCount() {
    return this.view.type === "resourceWeek" ? 1 : this.getAllowedResourcesCount();
  }

  /**
   * Add resource id to the span(Moment).
   * @override Grid.events.js
   * @param  {Moment} span  Instance of Moment
   * @param  {Object} event
   * @return {Class}
   */
  transformEventSpan(span, event) {
    return span.resourceId = event['resourceId'];
  }

  /**
   * Get resource by column number.
   * @param  {Number} col
   * @return {Object} resource
   */
  getResourceByCol(col) {
    let resources = this.getAllowedResources();
    return resources[this.getResourceIndexByCol(col)];
  }

  /**
   * Get resource index by col and daysPerRow(duration configuration).
   * {this.colCnt} is from DayTableMixin.
   * @param  {Number} col
   * @return {Number}
   */
  getResourceIndexByCol(col) {
    if (this.isRTL) {
      col = this.colCnt - 1 - col;
    }
    return Math.floor(col / this.daysPerRow);
  }

  /**
   * Get grid column num by resource index and day index.
   * @param  {Number} resourceIndex
   * @param  {Number} dayIndex
   * @return {Number}
   */
  getColByRsAndDayIndex(resourceIndex, dayIndex) {
    var col;
    col = resourceIndex * this.daysPerRow + dayIndex;
    if (this.isRTL) {
      col = this.colCnt - 1 - col;
    }
    return col;
  }

  /**
   * get day index by grid column num.
   * @param  {Number} col
   * @return {Number}
   */
  getDayIndexByCol(col) {
    if (this.isRTL) {
      col = this.colCnt - 1 - col;
    }
    return col % this.daysPerRow;
  }

  /**
   * @override DayTableMixin.getColDayIndex.
   * @param  {Number} col
   * @return {Number}
   */
  getColDayIndex(col) {
    return this.getDayIndexByCol(col);
  }

  /**
   * Compute actual rendered grid column count by rousources
   * and daysPerRow(duration configuration).
   * @override DayTableMixin.computeColCnt
   * @return {Number}
   */
  getRenderedColCount(){
    let rsCount = this.getAllowedResourcesColCount();
    return (rsCount || 1) * this.daysPerRow;
  }

  /**
   * Compute the allowed selection span on grid.
   * Don't allow selecting span accross resources.
   * @override Grid.prototype.computeSelectionSpan
   * @param  {Object} startSpan
   * @param  {Object} endSpan
   * @return {Object}
   */
  computeSelectionSpan(startSpan, endSpan) {
    var selectionSpan;
    if (startSpan.resourceId !== endSpan.resourceId) {
      return;
    }
    selectionSpan = Grid.prototype.computeSelectionSpan.apply(this, arguments);
    if (selectionSpan) {
      selectionSpan.resourceId = startSpan.resourceId;
    }
    return selectionSpan;
  }

  getTotalColCount() {
    let resourceCount = this.getAllowedResourcesColCount(),
        daysCount = this.dayDates.length;
    return resourceCount ? resourceCount * daysCount: daysCount;
  }

  getLimitColWidthAttr() {
    let limitColWidth = this.view.opt("limitColWidth");
    return limitColWidth ? "width=" + limitColWidth : "";
  }

}

export let BaseResourceGridMixin = {
    renderHeadIntroHtml: BaseResourceGrid.prototype.renderHeadIntroHtml,
    renderNumberIntroHtml: BaseResourceGrid.prototype.renderNumberIntroHtml,
    renderBgIntroHtml: BaseResourceGrid.prototype.renderBgIntroHtml,
    renderIntroHtml: BaseResourceGrid.prototype.renderIntroHtml,
    renderResources: BaseResourceGrid.prototype.renderResources,
    getAllowedResources: BaseResourceGrid.prototype.getAllowedResources,
    getAllowedResourcesCount: BaseResourceGrid.prototype.getAllowedResourcesCount,
    getAllowedResourcesColCount: BaseResourceGrid.prototype.getAllowedResourcesColCount,
    transformEventSpan: BaseResourceGrid.prototype.transformEventSpan,
    getResourceByCol: BaseResourceGrid.prototype.getResourceByCol,
    getResourceIndexByCol: BaseResourceGrid.prototype.getResourceIndexByCol,
    getColByRsAndDayIndex: BaseResourceGrid.prototype.getColByRsAndDayIndex,
    getDayIndexByCol: BaseResourceGrid.prototype.getDayIndexByCol,
    getColDayIndex: BaseResourceGrid.prototype.getColDayIndex,
    getRenderedColCount: BaseResourceGrid.prototype.getRenderedColCount,
    computeSelectionSpan: BaseResourceGrid.prototype.computeSelectionSpan,
    getTotalColCount: BaseResourceGrid.prototype.getTotalColCount,
    getLimitColWidthAttr: BaseResourceGrid.prototype.getLimitColWidthAttr
}
