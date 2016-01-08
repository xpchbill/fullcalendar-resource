"use strict";

/* Hold modules of fullCalendar as es6 modules */

/* Business modules */
export let FC = $.fullCalendar;

export let Emitter = FC.Emitter;

export let Calendar = FC.Calendar;

export let Grid = FC.Grid;

export let DayGrid = FC.DayGrid;

export let TimeGrid = FC.TimeGrid;

export let DayTableMixin = FC.DayTableMixin;

export let View = FC.View;

export let views = FC.views;

export let AgendaView = FC.AgendaView;

export let MonthView = FC.MonthView;

/* util modules */
export let htmlEscape = FC.htmlEscape;
export let moment = FC.moment;
export let isInt = FC.isInt;
export let divideDurationByDuration = FC.divideDurationByDuration;
export let CoordCache = FC.CoordCache;
export function matchCellWidths(els) {
  var maxInnerWidth = 0;
  els.find('> *').each(function(i, innerEl) {
    var innerWidth = $(innerEl).outerWidth();
    if (innerWidth > maxInnerWidth) {
      maxInnerWidth = innerWidth;
    }
  });
  maxInnerWidth++;
  els.width(maxInnerWidth);
  return maxInnerWidth;
}
