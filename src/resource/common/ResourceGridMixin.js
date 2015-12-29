"use strict";

import {Grid, DayTableMixin, htmlEscape} from "../FC.js";

/* Extract common methods between ResourceDayGrid and ResourceTimeGrid */
export default {
  /**
   * Render resources by call DayTableMixin.updateDayTableCols.
   * For rendering Grid columns by resources.
   * Call it after fetch resources.
   */
  renderResources() {
    DayTableMixin.updateDayTableCols.call(this);
  },

  /**
   * Get resources.
   * @return {Array} resources
   */
  getResources() {
    let calendar = this.view.calendar;
    return calendar.getResources();
  },

  /**
   * Get resources count.
   * @return {Number}
   */
  getResourcesCount() {
    let resources = this.getResources();
    return resources.length;
  },

  /**
   * Add resource id to the span(Moment).
   * @override Grid.events.js
   * @param  {Moment} span  Instance of Moment
   * @param  {Object} event
   * @return {Class}
   */
  transformEventSpan(span, event) {
    return span.resourceId = event['resourceId'];
  },

  /**
   * Get resource by column number.
   * @param  {Number} col
   * @return {Object} resource
   */
  getResourceByCol(col) {
    let resources = this.getResources();
    return resources[this.getResourceIndexByCol(col)];
  },

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
  },

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
  },

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
  },

  /**
   * @override DayTableMixin.getColDayIndex.
   * @param  {Number} col
   * @return {Number}
   */
  getColDayIndex(col) {
    return this.getDayIndexByCol(col);
  },

  /**
   * Compute actual rendered grid column count by rousources
   * and daysPerRow(duration configuration).
   * @override DayTableMixin.computeColCnt
   * @return {Number}
   */
  getResourcesColCount(){
    let rsCount = this.getResourcesCount();
    return (rsCount || 1) * this.daysPerRow;
  },

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

}
