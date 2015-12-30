"use strict";

import ResourceDayView from "./ResourceDayView.js"

/**
 * Configuration of resource day view.
 */
export default {
	type: "agenda",
	"class": ResourceDayView,
	"defaults": {
		"buttonText": "rsday"
	},
	duration: { days: 2 }
}
