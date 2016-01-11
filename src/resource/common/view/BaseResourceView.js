"use strict";

import {View, createProtoMixinObject} from "../../FC.js";
import SyncScrollers from "../../tools/SyncScrollers.js";

export default class BaseResourceView extends View{

  /**
   * Fetch resources before rendering view.
   * @override
   * @param  {Moment} date
   * @return {Object}  Return Jquery Deferred Object for fullcalendar.js
   */
  displayView(date) {
    let dfd = $.Deferred();
    super.displayView(date);

    let fetchingStatus = this.rsManager.fetchingStatus;
    if (!fetchingStatus.done && !fetchingStatus.doing) {
      fetchingStatus.promise.then((resources) => {
        this.renderResources(resources);
        this.redisplay();
        dfd.resolve();
      });
      this.rsManager.fetch();
    }

    if (fetchingStatus.done) {
      this.renderResources(this.calendar.getResources());
      super.displayView(date);
      dfd.resolve();
    }
    return dfd;
  }

  /**
   * Call super.displayEvents after fetching resources.
   * @override
   * @param  {Array} events
   */
  displayEvents(events) {
    let fetchingStatus = this.rsManager.fetchingStatus;
    fetchingStatus.promise.then(() => {
      super.displayEvents(events);
    });
  }

  addResourceListener() {
    this.calendar.rsManager.on('add', this.addResourceSuccessful.bind(this));
    this.calendar.rsManager.on('delete', this.deleteResourceSuccessful.bind(this));
  }

  addResourceSuccessful(resource) {
    this.redisplay(true);
  }

  deleteResourceSuccessful(resource) {
    this.redisplay(true);
  }

  redisplay(remainScrollPosition) {
    let position;
    if(this !== this.calendar.view){
      return;
    }
    if(remainScrollPosition && this.timeGrid){
      let scrollBar = this.timeGrid.el.parent(".fc-scroll-bars");
      position = SyncScrollers.getScrollPosition(scrollBar);
    }
    if (this.isSkeletonRendered) {
      let wasEventsRendered = this.isEventsRendered;
      this.clearEvents();
      this.clearView();
      this.renderResources();
      super.displayView();
      if (wasEventsRendered) {
        let events = this.calendar.clientEvents();
        this.displayEvents(events);
      }
    }
    if(remainScrollPosition && this.timeGrid){
      let scrollBar = this.timeGrid.el.parent(".fc-scroll-bars");
      SyncScrollers.scrollToPosition(scrollBar, position);
    }
    return position;
  }

  /**
   * Add argument resource to this.trigger call.
   * @override
   * @param  {Moment} span
   * @param  {Object} event
   */
  triggerSelect(segs, ev) {
    if(this.timeGrid && this.timeGrid.hideWireFrame){
      this.timeGrid.hideWireFrame();
    }
    this.trigger(
      'select',
      null,
      segs,
      ev
    );
  }

  destroy() {
    if(this.dayGrid && this.dayGrid.destroy){
      this.dayGrid.destroy();
    }
    if(this.timeGrid && this.timeGrid.destroy){
      this.timeGrid.destroy();
    }
  }

}

export let BaseResourceViewMixin = createProtoMixinObject(BaseResourceView.prototype, [
  "displayView",
  "displayEvents",
  "addResourceListener",
  "addResourceSuccessful",
  "deleteResourceSuccessful",
  "redisplay",
  "triggerSelect",
  "destroy"
]);
