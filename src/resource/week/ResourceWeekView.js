"use strict";

import "./week.less";

import ResourceDayView from "../day/ResourceDayView.js";
import ResourceTimeGrid from "./ResourceTimeGrid.js";
import ResourceDayGrid from "./ResourceDayGrid.js";
import SkeletonParser from "./temps/skeleton/SkeletonParser.js";
import SyncScrollers from "../tools/SyncScrollers.js";

export default class ResourceWeekView extends ResourceDayView {

  /**
   * @constructor
   * @param  {*} ...args [calendar, type, options, intervalDuration]
   */
  constructor(...args) {
    super(...args);
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

  renderDates() {
    super.renderDates();
    this.el.addClass("fc-resource-week-view");
    this.addHeaderEvent();
  }

  renderSkeletonHtml() {
    let skeletonParser = new SkeletonParser(this);
    return skeletonParser.parse()
  }

  syncScroll() {
    super.syncScroll();
    let headerScrollEl = this.headContainerEl.find(".fc-scroll-bars");
    if(SyncScrollers.hasScrollbar(headerScrollEl[0], "x")){
      let actorScrollEl = this.el.find(".fc-scollbar-actor .fc-scroll-bars");
      let _syncScrollersX = new SyncScrollers("x", [headerScrollEl, actorScrollEl]);
    }
  }

  addHeaderEvent() {
    let headerGrid = this.timeGrid.headerGrid,
        rsCells = headerGrid.find(".fc-rs-cell");
    rsCells.on("click", this.onAllowResource.bind(this));
  }

  onAllowResource(evt) {
    let rsCellEl = $(evt.currentTarget),
        rsId = rsCellEl.attr("rs-cell-id");
    this.calendar.toggleAllowResourceById(rsId);
    this.redisplay(true);
  }

  redisplay(remainScrollPosition) {
    let position;
    if(remainScrollPosition){
      let scrollBar = this.el.find(".fc-scollbar-actor .fc-scroll-bars");
      position = SyncScrollers.getScrollPosition(scrollBar);
    }
    super.redisplay(remainScrollPosition);
    if(remainScrollPosition){
      let scrollBar = this.el.find(".fc-scollbar-actor .fc-scroll-bars");
      SyncScrollers.scrollToPosition(scrollBar, position);
    }
  }

  /**
   * Render resources after fetching data from rsManager.
   * @override
   * @param  {Array} resources [description]
   */
  renderResources(resources) {
    if (resources) {
      let index = this.opt("defaultResourcesIndex");
      this.calendar.setAllowedResources([resources[index ? index : 0]]);
    }
    this.timeGrid.renderResources();
    if (this.dayGrid) {
      this.dayGrid.renderResources();
    }
  }

  addResourceSuccessful(resource) {
    this.redisplay(true);
  }

  deleteResourceSuccessful(resource) {
    this.redisplay(true);
  }
}
