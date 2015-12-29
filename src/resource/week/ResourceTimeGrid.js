"use strict";

import {TimeGrid} from "../FC.js";
import Intro from "./temps/Intro.html";
import ResourceGridMixin from "../common/ResourceGridMixin.js";

export default class ResourceTimeGrid extends TimeGrid {

  /**
   * @override
   * @return {String} HTML
   */
  renderBgIntroHtml() {
    return Intro({
      widgetContentClass: this.view.widgetContentClass
    },{
      axisStyle: this.view.axisStyleAttr()
    });
  }

  /**
   * @override
   * @return {String} HTML
   */
  renderIntroHtml() {
    return Intro({}, {
      axisStyle: this.view.axisStyleAttr()
    });
  }

  /**
   * @override
   * @return {Array} Segs
   */
  renderFgEvents(events) {
    let calendar = this.view.calendar;

    let rsEvents = [];
    events.forEach((evt) => {
      let currentResource = calendar.getCurrentResource();
      if (evt['resourceId'] == currentResource.id) {
        rsEvents.push(evt);
      }
    });

    return super.renderFgEvents(rsEvents);
  }

  /**
   * Add resourse id to Span.
   * @override
   * @param  {Object} hit
   * @return {Object} Span
   */
  getHitSpan(hit) {
    let span = super.getHitSpan(hit);
    if (this.getResourcesCount()) {
      span.resourceId = this.getResourceByCol(hit.col).id;
    }
    return span;
  }

}

Object.assign(ResourceTimeGrid.prototype, ResourceGridMixin)
