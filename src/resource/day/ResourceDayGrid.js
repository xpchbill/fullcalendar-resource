"use strict";

import {DayGrid, htmlEscape} from "../FC.js";
import DayGridParser from "./temps/daygrid/DayGridParser.js";
import SkeletonWraper from "./temps/SkeletonWraper.html";
import Intro from "./temps/Intro.html";
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
    // console.log(parser.parse());
    // return super.renderDayRowHtml(row, isRigid);
  }

  /**
   * Compute actual rendered grid column count.
   * @override DayTableMixin.computeColCnt
   * @return {Number}
   */
  computeColCnt() {
    return this.getResourcesColCount();
  }

  bookendCells(trEl) {
    let tds = trEl.children("td");
    let skWraper = $(SkeletonWraper({
      isRTL: this.isRTL
    },{
      intro: Intro({}, {
        axisStyle: this.view.axisStyleAttr()
      })
    }));
    skWraper.find(".fc-skeleton-wraper").eq(0).append(tds);
    trEl.append(skWraper);
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
          if(!span.resourceId || span.resourceId === rs.id){
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
