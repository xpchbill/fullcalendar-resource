"use strict";

import {AgendaView} from "../../FC.js";
import {BaseResourceViewMixin} from "./BaseResourceView.js";
import ObjectAssign from "object-assign";

export default class BaseResourceAgendaView extends AgendaView{

  /**
   * Gain rsManager instance from Calendar.
   * @constructor
   * @param  {*} ...args [calendar, type, options, intervalDuration]
   */
  constructor(...args) {
    super(...args);
    this.rsManager = this.calendar.rsManager;
    this.addResourceListener();
  }

  renderDates() {
    this.el.addClass("fc-resource-view");
  }

}
ObjectAssign(BaseResourceAgendaView.prototype, BaseResourceViewMixin);
