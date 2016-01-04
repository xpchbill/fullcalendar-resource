"use strict";

import ResourceWeekView from "./ResourceWeekView.js"

/**
 * Configuration of resource week view.
 */
export default {
	type: 'agenda',
	'class': ResourceWeekView,
	"defaults": {
		"buttonText": "rsweek"
	},
	duration: { day: 1 }
}
