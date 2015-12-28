"use strict";

import {Calendar, views} from "./FC.js";
import DayConfig from "./day/Config.js";
import WeekConfig from "./week/Config.js";
import CalendarMixin from "./CalendarMixin.js";

/* Register new views to view configuration */
views.resourceDay = DayConfig;
views.resourceWeek = WeekConfig;

/* Mixin common interfaces to Calendar(fullcalendar's Calendar) */
Calendar.mixin(CalendarMixin);
