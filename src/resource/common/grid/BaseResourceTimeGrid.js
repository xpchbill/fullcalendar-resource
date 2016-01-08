"use strict";

import {TimeGrid} from "../../FC.js";

export default class BaseResourceTimeGrid extends TimeGrid{

  /**
   * @override
   * @param  {Object} Span
   * @return {Array} Segs
   */
  spanToSegs(span) {
    let segs = this.sliceRangeByTimes(span);
    segs.forEach((sg) => {
      sg.col = sg.dayIndex;
    });
    return segs;
  }

  /**
   * Add resourse id to Span.
   * @override
   * @param  {Object} hit
   * @return {Object} Span
   */
  getHitSpan(hit) {
    let span = super.getHitSpan(hit);
    if (this.getAllowedResourcesColCount()) {
      span.resourceId = this.getResourceByCol(hit.col).id;
    }
    return span;
  }
}
