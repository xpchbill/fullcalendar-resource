"use strict";

import {TimeGrid, CoordCache, isInt, htmlEscape, divideDurationByDuration} from "../FC.js";
import HeaderParser from "./temps/header/HeaderParser.js";
import TimeGridParser from "./temps/timegrid/TimeGridParser.js";
import SlatsLabel from "./temps/timegrid/SlatsLabel.html";
import EventSkeleton from "../common/temps/EventSkeleton.html";
import ResourceGridMixin from "../common/ResourceGridMixin.js";
import ObjectAssign from "object-assign";

export default class ResourceTimeGrid extends TimeGrid {

  renderDates() {
    this.el.html(this.renderHtml());
    this.slatsLabelEl.html(this.renderSlatsLabel());
    this.colEls = this.el.find('.fc-day');
    this.slatEls = this.slatsLabelEl.find('.fc-slats-output tr');

    this.colCoordCache = new CoordCache({
      els: this.colEls,
      isHorizontal: true
    });
    this.slatCoordCache = new CoordCache({
      els: this.slatEls,
      isVertical: true
    });
  }

  updateWidth() {
    let bgWidth = this.el.children(".fc-bg").children("table").outerWidth();
    this.el.width(bgWidth);
    this.view.headContainerEl.width(bgWidth);
    return bgWidth;
  }

  setHeight(totalHeight, isAuto) {
    this.el.parent(".fc-scroll-bars").height(totalHeight);
    this.slatsLabelEl.find(".fc-scroll-bars").height(totalHeight);
  }

  renderHtml() {
    let parser = new TimeGridParser(this);
    return parser.parse();
  }

  /**
   * Render the header parts.
   * @override
   * @return {String} Header Html.
   */
  renderHeadHtml() {
    let parser = new HeaderParser(this);
    return this.headerGrid = $(parser.parse());
  }

  setSlatsLabelEl(el) {
    this.slatsLabelEl = el;
  }

  renderSlatsLabel() {
    return SlatsLabel({
      slatCellsIterator: this.getSlatCells(),
      widgetContentClass: this.view.widgetContentClass,
      getSlatDateFormate() {
        return htmlEscape(this.date.format(this.labelFormat));
      }
    }, {
      axisStyle: this.view.axisStyleAttr()
    });
  }

  getSlatCells() {
    let maxTime = this.maxTime;
    let minTime = this.minTime;
    let slotTime = moment.duration(+minTime);
    let slatCells = [];

    while (slotTime < maxTime) {
      let slotDate = this.start.clone().time(slotTime);
      let isLabeled = isInt(divideDurationByDuration(slotTime, this.labelInterval));
      slatCells.push({
        date: slotDate,
        isLabeled: isLabeled,
        labelFormat: this.labelFormat
      });
      slotTime.add(this.slotDuration);
    }
    return slatCells;
  }

  /**
   * Compute actual rendered grid column count.
   * @override DayTableMixin.computeColCnt
   * @return {Number}
   */
  computeColCnt() {
    return this.getRenderedColCount();
  }

  bookendCells(){}

  renderSegTable(segs) {
    let tableEl = $(EventSkeleton({
      className: "content",
      limitColWidthAttr: this.getLimitColWidthAttr(),
      totalColIterator: new Array(this.getTotalColCount())
    })).children("table");

    let trEl = $("<tr>");
    let segCols = this.groupSegCols(segs);

    this.computeSegVerticals(segs);
    for (let col = 0; col < segCols.length; col++) {
      let colSegs = segCols[col];
      this.placeSlotSegs(colSegs);
      let containerEl = $('<div class="fc-event-container"/>');
      for (let i = 0; i < colSegs.length; i++) {
        let seg = colSegs[i];
        seg.el.css(this.generateSegPositionCss(seg));
        if (seg.bottom - seg.top < 30) {
          seg.el.addClass('fc-short');
        }
        containerEl.append(seg.el);
      }
      trEl.append($('<td/>').append(containerEl));
    }
    tableEl.children("tbody").append(trEl);

    return tableEl;
  }

  renderFill(type, segs, className) {
    if (segs.length) {

      segs = this.renderFillSegEls(type, segs);
      let segCols = this.groupSegCols(segs);

      let className = className || type.toLowerCase();
      let skeletonEl = $(EventSkeleton({
        className: className,
        limitColWidthAttr: this.getLimitColWidthAttr(),
        totalColIterator: new Array(this.getTotalColCount())
      }));

      let trEl = $('<tr>');

      for (let col = 0; col < segCols.length; col++) {
        let colSegs = segCols[col];
        let tdEl = $('<td/>').appendTo(trEl);

        if (colSegs.length) {
          let containerEl = $('<div class="fc-' + className + '-container"/>').appendTo(tdEl);
          let dayDate = this.getCellDate(0, col); // row=0

          for (let i = 0; i < colSegs.length; i++) {
            let seg = colSegs[i];
            containerEl.append(
              seg.el.css({
                top: this.computeDateTop(seg.start, dayDate),
                bottom: -this.computeDateTop(seg.end, dayDate) // the y position of the bottom edge
              })
            );
          }
        }
      }
      skeletonEl.find("tbody").append(trEl);
      this.el.append(skeletonEl);
      this.elsByFill[type] = skeletonEl;
    }
    return segs;
  }

  /**
   * @override
   * @return {Array} Segs
   */
  renderFgEvents(events) {
    let calendar = this.view.calendar;

    let rsEvents = [];
    events.forEach((evt) => {
      let rsId = evt['resourceId'];
      if (rsId && calendar.getAllowedResourceById(rsId)) {
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
    let rsCount = this.getAllowedResourcesColCount();
    let segs = this.sliceRangeByTimes(span);

    if (!rsCount || this.view.type !== "resourceDay") {
      segs.forEach((sg) => {
        sg.col = sg.dayIndex;
      });
      return segs;
    } else {
      let rsSegs = [];
      segs.forEach((sg) => {
        let resources = this.getAllowedResources();
        resources.forEach((rs, i) => {
          if (!span.resourceId || span.resourceId === rs.id) {
            let newSeg = ObjectAssign({}, sg);
            newSeg.col = this.getColByRsAndDayIndex(i, sg.dayIndex);
            rsSegs.push(newSeg);
          }
        });
      });
      return rsSegs;
    }
  }

  rerenderHeader() {
    this.view.headContainerEl.html("");
    this.view.renderHead();
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

ObjectAssign(ResourceTimeGrid.prototype, ResourceGridMixin)
