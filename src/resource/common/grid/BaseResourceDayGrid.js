"use strict";

import {DayGrid} from "../../FC.js";

export default class BaseResourceDayGrid extends DayGrid{

  /**
   * @override
   * @param  {Object} Span
   * @return {Array} Segs
   */
  spanToSegs(span) {
    let segs = this.sliceRangeByRow(span);
    segs.forEach((sg) => {
      sg.leftCol = this.isRTL ? seg.lastRowDayIndex : sg.firstRowDayIndex;
      sg.rightCol = this.isRTL ? seg.firstRowDayIndex : sg.lastRowDayIndex;
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
