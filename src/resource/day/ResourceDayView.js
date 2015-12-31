"use strict";

import {matchCellWidths} from "../FC.js";
import ResourceView from "../common/ResourceView.js";
import ResourceTimeGrid from "./ResourceTimeGrid.js";
import ResourceDayGrid from "./ResourceDayGrid.js";
import SkeletonParser from "./temps/skeleton/SkeletonParser.js";

export default class ResourceDayView extends ResourceView {

  /**
   * @constructor
   * @param  {*} ...args [calendar, type, options, intervalDuration]
   */
  constructor(...args) {
    super(...args);
    //Skeleton
  }

  renderSkeletonHtml() {
    let skeletonParser = new SkeletonParser(this);
    console.log(skeletonParser.parse());
    return skeletonParser.parse()
      // return super.renderSkeletonHtml();
  }

  renderDates() {
    this.el.addClass("fc-resource-view").html(this.renderSkeletonHtml());
    this.renderHead();
    this.setGridElement();
    this.timeGrid.renderDates();
    if (this.dayGrid) {
      this.dayGrid.renderDates();
    }
  }

  renderHead() {
    this.headContainerEl =
      this.el.find(".fc-header-output")
      .html(this.timeGrid.renderHeadHtml());
    this.headRowEl = this.headContainerEl.find(".fc-row");
  }

  unrenderDates() {
    this.timeGrid.unrenderDates();
  }

  setGridElement() {
    this.timeGrid.setElement(this.el.find('tbody .fc-time-grid-output'));
    this.timeGrid.setSlatsLabelEl(this.el.find('tbody .fc-slats-labels'));
    if (this.dayGrid) {
      this.dayGrid.setElement(this.el.find('tbody .fc-day-grid-output'));
    }
  }

  // updateWidth() {
  // 	this.axisWidth = matchCellWidths(this.el.find('.fc-slats-labels tr'));
  // }

  axisStyleAttr() {
    let fixedAxisWidth = this.opt("fixedAxisWidth");
    if (fixedAxisWidth) {
      return 'style="width:' + fixedAxisWidth + 'px"';
    }
    if (this.axisWidth !== null) {
      return 'style="width:' + this.axisWidth + 'px"';
    }
    return "";
  }

  updateWidth() {
    super.updateWidth();
    this.timeGrid.updateWidth();
  }

  setHeight(totalHeight, isAuto) {
    this.timeGrid.setHeight(totalHeight, isAuto);
    if (this.dayGrid) {
      //this.dayGrid.setHeight(totalHeight, isAuto);
    }
  }

  /**
   * @override
   * @return {Class} Instance of ResourceTimeGrid.
   */
  instantiateTimeGrid() {
    return new ResourceTimeGrid(this);
  }

  /**
   * @override
   * @return {Class} Instance of ResourceDayGrid.
   */
  instantiateDayGrid() {
    return new ResourceDayGrid(this);
  }

  /**
   * Render resources after fetching data from rsManager.
   * @override
   * @param  {Array} resources [description]
   */
  renderResources(resources) {
    this.timeGrid.renderResources();
    if (this.dayGrid) {
      this.dayGrid.renderResources();
    }
  }

}
