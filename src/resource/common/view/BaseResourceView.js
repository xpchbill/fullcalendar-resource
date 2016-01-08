"use strict";

import {View} from "../../FC.js";
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
  triggerSelect(span, ev) {
    this.trigger(
      'select',
      null,
      this.calendar.applyTimezone(span.start),
      this.calendar.applyTimezone(span.end),
      ev,
      this, this.rsManager.getResourceById(span.resourceId)
    );
  }
}

export let BaseResourceViewMixin = {
  displayView: BaseResourceView.prototype.displayView,
  displayEvents: BaseResourceView.prototype.displayEvents,
  addResourceListener: BaseResourceView.prototype.addResourceListener,
  addResourceSuccessful: BaseResourceView.prototype.addResourceSuccessful,
  deleteResourceSuccessful: BaseResourceView.prototype.deleteResourceSuccessful,
  redisplay: BaseResourceView.prototype.redisplay,
  triggerSelect: BaseResourceView.prototype.triggerSelect
}
