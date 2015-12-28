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
    var calendar, event;
    calendar = this.view.calendar;

    let rsEvents = [];
    events.forEach((evt) => {
      if (evt['resourceId']) {
        rsEvents.push(evt);
      }
    });

    return super.renderFgEvents(rsEvents);
  }

  /**
   * @override
   * @param  {Object} Span
   * @return {Array} Segs
   */
  spanToSegs(span) {
    let rsCount = this.getResourcesCount();
    let segs = this.sliceRangeByTimes(span);

    if (!rsCount) {
      segs.forEach((sg) => {
        sg.col = sg.dayIndex;
      });
      return segs;
    } else {
      let rsSegs = [];
      segs.forEach((sg) => {
        let resources = this.getResources();
        resources.forEach((rs, i) => {
          if(!span.resourceId || span.resourceId === rs.id){
            let newSeg = Object.assign({}, sg);
            newSeg.col = this.getColByRsAndDayIndex(i, sg.dayIndex);
            rsSegs.push(newSeg);
          }
        });
      });
      return rsSegs;
    }
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
