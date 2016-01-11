"use strict";

import {TimeGrid} from "../../FC.js";
import ObjectAssign from "object-assign";

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

  queryHit(leftOffset, topOffset) {
    let hit = super.queryHit(leftOffset, topOffset);
    return ObjectAssign(hit, {
      evtMouseX: leftOffset,
      evtMouseY: topOffset
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
    if (this.getAllowedResourcesColCount()) {
      span.resourceId = this.getResourceByCol(hit.col).id;
    }
    ObjectAssign(span, hit);
    return span;
  }

  computeSelection(startSpan, endSpan) {

    let startSpanStartTime = startSpan.start.time(),
        endSpanStartTime = endSpan.start.time(),
        startSpanEndTime = startSpan.end.time(),
        endSpanEndTime = endSpan.end.time();

    let startTime = startSpanStartTime,
        endTime = endSpanEndTime;

    let isInvertSection = startSpanStartTime - endSpanStartTime > 0;
    if(!isInvertSection){
      startTime = startSpanStartTime;
      endTime = endSpanEndTime;
    }else{
      startTime = endSpanStartTime;
      endTime = startSpanEndTime;
    }

    let startCol = Math.min(startSpan.col, endSpan.col),
        endCol = Math.max(startSpan.col, endSpan.col);

    let segs = [];
    for(let col = startCol; col <= endCol; col++){
      let dayIndex = this.getDayIndexByCol(col),
          dayDate = this.dayDates[dayIndex];
      segs.push({
        col: col,
        isStart: true,
        isEnd: true,
        start: dayDate.clone().time(startTime),
        end: dayDate.clone().time(endTime),
        resource: this.getResourceByCol(col)
      });
    }

    if(this.view.opt("selectWireframeShow")){
      if(!this.selectionWireFrameEl){
        this.createSelectionWireFrame();
      }
      this.updateSelectionWireFrame(startSpan, endSpan);
    }

    return segs;
  }

  renderSelection(segs) {
    this.renderHighlight(segs);
    return segs;
  }

  renderHighlight(segs) {
    this.renderFill('highlight', segs);
  }

  createSelectionWireFrame() {
    this.selectionWireFrameEl = $("<div>").css({
      "position": "absolute",
      "background": "#7FCEFF",
      "border": "1px solid #000000",
      "overflow": "hidden",
      "opacity": 0.75,
      "zIndex": 2
    });
    this.el.append(this.selectionWireFrameEl);
  }

  updateSelectionWireFrame(startSpan, endSpan) {
    let origin = this.selectionWireFrameEl.offsetParent().offset();
    let left = startSpan.evtMouseX > endSpan.evtMouseX ? endSpan.evtMouseX : startSpan.evtMouseX,
        top = startSpan.evtMouseY > endSpan.evtMouseY ? endSpan.evtMouseY : startSpan.evtMouseY;
    this.selectionWireFrameEl.css({
      "top": (top - origin.top) + "px",
      "left": (left - origin.left) + "px",
      "width": Math.abs(startSpan.evtMouseX - endSpan.evtMouseX) + "px",
      "height": Math.abs(startSpan.evtMouseY - endSpan.evtMouseY) + "px"
    }).show();
  }

  destroy() {
    this.selectionWireFrameEl = null;
  }

}
