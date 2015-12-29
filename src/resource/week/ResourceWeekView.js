"use strict";

import ResourceView from "../common/ResourceView.js";
import ResourceTimeGrid from "./ResourceTimeGrid.js";
import ResourceDayGrid from "./ResourceDayGrid.js";

export default class ResourceWeekView extends ResourceView{

  /**
   * @constructor
   * @param  {*} ...args [calendar, type, options, intervalDuration]
   */
  constructor(...args){
    super(...args);
  }

  /**
   * @override
   * @return {Class} Instance of ResourceTimeGrid.
   */
	instantiateTimeGrid() {
		return new ResourceTimeGrid(this);
	}

  /**
   * @override
   * @return {Class} Instance of ResourceDayGrid.
   */
  instantiateDayGrid() {
    return new ResourceDayGrid(this);
	}

  /**
   * Render resources after fetching data from rsManager.
   * @override
   * @param  {Array} resources [description]
   */
	renderResources(){
		this.timeGrid.renderResources();
    if (this.dayGrid) {
      this.dayGrid.renderResources();
    }
	}

}
