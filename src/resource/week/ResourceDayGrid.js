"use strict";

import {DayGrid, htmlEscape} from "../FC.js";
import Intro from "./temps/Intro.html";
import ResourceGridMixin from "../common/ResourceGridMixin.js";

export default class ResourceDayGrid extends DayGrid {

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

Object.assign(ResourceDayGrid.prototype, ResourceGridMixin);
