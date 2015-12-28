"use strict";

import {Calendar} from "../FC.js";
import ResourceDayView from "./ResourceDayView.js"

/**
 *
 */
export default {
	type: "agenda",
	"class": ResourceDayView,
	"defaults": {
		"buttonText": "rsday"
	},
	duration: { days: 1 }
}
