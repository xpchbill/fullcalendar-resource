"use strict";

import {matchCellWidths} from "../FC.js";
import ResourceView from "../common/ResourceView.js";
import ResourceTimeGrid from "./ResourceTimeGrid.js";
import ResourceDayGrid from "./ResourceDayGrid.js";
import SkeletonParser from "./temps/skeleton/SkeletonParser.js";
import SyncScrollers from "../tools/SyncScrollers.js";

export default class ResourceDayView extends ResourceView {

  /**
   * @constructor
   * @param  {*} ...args [calendar, type, options, intervalDuration]
   */
  constructor(...args) {
    super(...args);
  }

  renderSkeletonHtml() {
    let skeletonParser = new SkeletonParser(this);
    return skeletonParser.parse()
  }

  renderDates() {
    this.el.addClass("fc-resource-view").html(this.renderSkeletonHtml());
    this.renderHead();
    this.setGridElement();
    this.timeGrid.renderDates();
    if (this.dayGrid) {
      this.dayGrid.renderDates();
    }
    this.syncScroll();
  }

  renderHead() {
    this.headContainerEl =
      this.el.find(".fc-header-output")
      .append(this.timeGrid.renderHeadHtml());
    this.headRowEl = this.headContainerEl.find(".fc-row");
  }

  unrenderDates() {
    this.timeGrid.unrenderDates();
  }

  setGridElement() {
    this.timeGrid.setElement(this.el.find('tbody .fc-time-grid-output'));
    this.timeGrid.setSlatsLabelEl(this.el.find('tbody .fc-slats-labels-container'));
    if (this.dayGrid) {
      this.dayGrid.setElement(this.el.find('tbody .fc-day-grid-output'));
    }
  }

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

  updateSize(isResize) {
    super.updateSize(isResize);
    let timeGridScrollEl = this.timeGrid.el.parent(".fc-scroll-bars");
    let timeGridHasScrollBar = SyncScrollers.hasScrollbar(timeGridScrollEl[0], "y");
    this.el[timeGridHasScrollBar ? "addClass" : "removeClass"]("time-grid-has-scrollbar");
  }

  updateWidth() {
    super.updateWidth();
    let width = this.timeGrid.updateWidth();
    if (this.dayGrid) {
      this.dayGrid.updateWidth(width);
    }
  }

  setHeight(totalHeight, isAuto) {
    this.timeGrid.setHeight(totalHeight, isAuto);
    if (this.dayGrid) {
      //this.dayGrid.setHeight(totalHeight, isAuto);
    }
  }

  syncScroll() {
    let headerScrollEl= this.headContainerEl.parent(".fc-scroll-bars").css("padding-right", "21px"),
        timeGridScrollEl = this.timeGrid.el.parent(".fc-scroll-bars");

    let scrollersX = [timeGridScrollEl, headerScrollEl];
    if(this.dayGrid){
      let dayGridScrollEl = this.dayGrid.el.parent(".fc-scroll-bars");
      scrollersX.push(dayGridScrollEl);
    }
    let _syncScrollersX = new SyncScrollers("x", scrollersX);

    let slatsLabelScrollEl = this.timeGrid.slatsLabelEl.find(".fc-scroll-bars");
    let _syncScrollersY = new SyncScrollers("y", [timeGridScrollEl, slatsLabelScrollEl]);
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
    if(resources){
      this.calendar.setAllowedResources(resources);
    }
    this.timeGrid.renderResources();
    if (this.dayGrid) {
      this.dayGrid.renderResources();
    }
  }

  addResourceSuccessful(resource) {
    this.calendar.addAllowedResource(resource);
    super.addResourceSuccessful();
  }

  deleteResourceSuccessful(resource) {
    this.calendar.removeAllowedResource(resource);
    super.deleteResourceSuccessful();
  }

}
