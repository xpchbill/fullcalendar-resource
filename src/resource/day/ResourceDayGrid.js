"use strict";

import {DayGrid, htmlEscape} from "../FC.js";
import DayGridParser from "./temps/daygrid/DayGridParser.js";
import EventSkeleton from "../common/temps/EventSkeleton.html";
import ResourceGridMixin from "../common/ResourceGridMixin.js";

export default class ResourceDayGrid extends DayGrid {

  /**
   * @override
   * @param  {Number}  row
   * @param  {Boolean} isRigid
   * @return {String} HTML string.
   */
  renderDayRowHtml(row, isRigid) {
    let parser = new DayGridParser(this);
    return parser.parse();
  }

  /**
   * Compute actual rendered grid column count.
   * @override DayTableMixin.computeColCnt
   * @return {Number}
   */
  computeColCnt() {
    return this.getResourcesColCount();
  }

  updateWidth() {
    let bgWidth = this.el.find(".fc-bg > table").outerWidth();
    this.el.width(bgWidth);
  }

  bookendCells(){}

  renderFillRow(type, seg, className) {
    let colCnt = this.colCnt;
    let startCol = seg.leftCol;
    let endCol = seg.rightCol + 1;

    className = className || type.toLowerCase();

    let skeletonEl = $(EventSkeleton({
      className: className,
      limitColWidthAttr: this.getLimitColWidthAttr(),
      totalColIterator: new Array(this.getTotalColCount())
    }));

    let trEl = $("<tr>");

    if (startCol > 0) {
      trEl.append('<td colspan="' + startCol + '"/>');
    }
    trEl.append(
      seg.el.attr('colspan', endCol - startCol)
    );
    if (endCol < colCnt) {
      trEl.append('<td colspan="' + (colCnt - endCol) + '"/>');
    }
    skeletonEl.find("tbody").append(trEl);;

    return skeletonEl;
  }

  /**
   * @override
   * @param  {Object} Span
   * @return {Array} Segs
   */
  spanToSegs(span) {
    let rsCount = this.getResourcesCount();
    let segs = this.sliceRangeByRow(span);

    if (!rsCount) {
      segs.forEach((sg) => {
        sg.leftCol = this.isRTL ? seg.lastRowDayIndex : sg.firstRowDayIndex;
        sg.rightCol = this.isRTL ? seg.firstRowDayIndex : sg.lastRowDayIndex;
      });
      return segs;
    } else {
      let rsSegs = [];
      segs.forEach((sg) => {
        let resources = this.getResources();
        resources.forEach((rs, i) => {
          if (!span.resourceId || span.resourceId === rs.id) {
            let newSeg = Object.assign({}, sg);
            newSeg.leftCol = this.getColByRsAndDayIndex(i, this.isRTL ? seg.lastRowDayIndex : sg.firstRowDayIndex);
            newSeg.rightCol = this.getColByRsAndDayIndex(i, this.isRTL ? seg.firstRowDayIndex : sg.lastRowDayIndex);
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
Object.assign(ResourceDayGrid.prototype, ResourceGridMixin);
