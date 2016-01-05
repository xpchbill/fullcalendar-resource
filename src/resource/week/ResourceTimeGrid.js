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
    let rsTable = this.view.headContainerEl.find(".fc-scroll-bars table");
    rsTable.parent().width(rsTable.width());
  }

}
