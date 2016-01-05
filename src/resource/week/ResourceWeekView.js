"use strict";

import ResourceDayView from "../day/ResourceDayView.js";

export default class ResourceWeekView extends ResourceDayView {

  /**
   * @constructor
   * @param  {*} ...args [calendar, type, options, intervalDuration]
   */
  constructor(...args) {
      super(...args);
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
}
