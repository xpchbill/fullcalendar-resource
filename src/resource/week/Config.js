"use strict";

import ResourceWeekView from "./ResourceWeekView.js"

export default {
	type: 'agenda',
	'class': ResourceWeekView,
	"defaults": {
		"buttonText": "rsweek"
	},
	duration: { days: 2 }
}
