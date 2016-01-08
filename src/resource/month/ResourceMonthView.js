"use strict";

import "./month.less";

import BaseResourceMonthView from "../common/view/BaseResourceMonthView.js";
import ResourceDayGrid from "./ResourceDayGrid.js";
import SkeletonParser from "./temps/skeleton/SkeletonParser.js";
import HeaderParser from "./temps/header/HeaderParser.js";

export default class ResourceMonthView extends BaseResourceMonthView {

  constructor(...args) {
    super(...args);
  }

  /**
   * @override
   * @return {Class} Instance of ResourceDayGrid.
   */
  instantiateDayGrid() {
    return new ResourceDayGrid(this);
  }

  renderDates() {
    super.renderDates();
    this.el.addClass("fc-resource-month-view");
  }

  renderSkeletonHtml() {
    let skeletonParser = new SkeletonParser(this);
    return skeletonParser.parse();
  }

  /**
   * @override
   */
	renderHead() {
		super.renderHead();
    let rsContainerEl = this.el.find(".fc-head-resources-container");
    let headerParser = new HeaderParser(this);
    rsContainerEl.append(headerParser.parse());

	}

  /**
   * Render resources after fetching data from rsManager.
   * @override
   * @param  {Array} resources [description]
   */
  renderResources(resources) {
    if (resources) {
      let index = this.opt("defaultResourcesIndex");
      this.calendar.setAllowedResources([resources[index ? index : 0]]);
    }
  }

}
