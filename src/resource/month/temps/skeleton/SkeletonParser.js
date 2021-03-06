"use strict";

import {htmlEscape, isInt, divideDurationByDuration} from "../../../FC.js";
import TempParser from "../../../tools/TempParser.js";
import Skeleton from "./Skeleton.html";

export default class SkeletonParser extends TempParser{

  /**
   * Us this.ds to organize parse data.
   * @constructor
   * @override
   * @param  {Object?Class}
   */
  constructor(monthView) {
    super(monthView);
    this.widgetHeaderClass = this.ds.widgetHeaderClass;
    this.widgetContentClass = this.ds.widgetContentClass;
  }

  /**
   * Parse Header.html
   * @override
   * @return {String} HTML
   */
  parse() {
    return Skeleton(this);
  }

}
