"use strict";

import ResourceWeekView from "./ResourceWeekView.js"

/**
 * Configuration of resource week view.
 */
export default {
	type: 'agenda',
	'class': ResourceWeekView,
	"defaults": {
		"defaultResourcesIndex": 0,
    "fixedAxisWidth": 50,
		"buttonText": "rsweek"
	},
	duration: { week: 1 }
}
