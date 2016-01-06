"use strict";

import TimeGrid from "../day/ResourceTimeGrid.js";
import HeaderParser from "./temps/header/HeaderParser.js";

export default class ResourceTimeGrid extends TimeGrid {
  /**
   * Render the header parts.
   * @override
   * @return {String} Header Html.
   */
  renderHeadHtml() {
    let parser = new HeaderParser(this);
    return this.headerGrid = $(parser.parse());
  }

  updateWidth() {
    let headContainerEl = this.view.headContainerEl;
    let rsTable = headContainerEl.find(".fc-scroll-bars table");
    rsTable.parent().width(rsTable.width());
    this.view.el.find(".fc-scollbar-actor-output").width(rsTable.width());

    let bgWidth = this.el.parent(".fc-scroll-bars").width() - 21;
    this.el.width(bgWidth);
    this.view.headContainerEl.width(bgWidth);
    headContainerEl.find(".fc-header-split-dates table").width(bgWidth);
    return bgWidth;
  }

}
