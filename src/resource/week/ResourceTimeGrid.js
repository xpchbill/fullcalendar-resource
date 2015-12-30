"use strict";

import {TimeGrid} from "../FC.js";
import HeaderParser from "./temps/header/HeaderParser.js";
import TimeGridParser from "./temps/timegrid/TimeGridParser.js";
import SkeletonWraper from "./temps/SkeletonWraper.html";
import Intro from "./temps/Intro.html";
import ResourceGridMixin from "../common/ResourceGridMixin.js";

export default class ResourceTimeGrid extends TimeGrid {

  renderHtml(){
    let parser = new TimeGridParser(this);
    return parser.parse();
    // console.log(parser.parse());
    // return super.renderHtml();
  }

  /**
   * Render the header parts.
   * @override
   * @return {String} Header Html.
   */
  renderHeadHtml() {
    let parser = new HeaderParser(this);
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

  /**
   * @override
   * @return {String} HTML string
   */
  renderSegTable(segs) {
    // let tableEl = $(SegTable({
    //   isRTL: this.isRTL
    // },{
    //   intro: Intro({}, {
    //     axisStyle: this.view.axisStyleAttr()
    //   })
    // }));
    // return tableEl;
    return super.renderSegTable(segs);
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
