"use strict";

import {DayGrid} from "../FC.js";
import {BaseResourceGridMixin} from "../common/grid/BaseResourceGrid.js";
import ObjectAssign from "object-assign";

export default class ResourceDayGrid extends DayGrid {

}

ObjectAssign(ResourceDayGrid.prototype, BaseResourceGridMixin);
