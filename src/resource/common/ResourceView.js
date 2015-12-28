"use strict";

import {AgendaView} from "../FC.js";

export default class ResourceView extends AgendaView{

  /**
   * Gain rsManager instance from Calendar.
   * @constructor
   * @param  {*} ...args [calendar, type, options, intervalDuration]
   */
  constructor(...args) {
    super(...args);
    this.rsManager = this.calendar.rsManager;
  }

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
      fetchingStatus.promise.then(() => {
        this.renderResources();
        this.redisplay();
        dfd.resolve();
      });
      this.rsManager.fetch();
    }

    if (fetchingStatus.done) {
      this.renderResources();
      //super.displayView(date);
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
