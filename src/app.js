"use strict";

import "./app.less";

export function App(){

  $('#calendar').fullCalendar({
    header: {
      left: 'today prev,next title',
      center: '',
      right: 'resourceDay,resourceWeek,agendaWeek,month,agendaDay'
    },
    views: {
      resourceDay: {
        renderRsHeaderItem: function(resource, isAllowed) {
          return "<div style='margin:15px 0px;'>" +
          "<span style='background:orange;padding:1px 4px;font-size:10px;color:#fff;border-radius:3px;'>E</span> " +
          resource.title +
          "</div>";
        }
      },
      resourceWeek: {
        renderRsHeaderItem: function(resource, isAllowed) {
          return "<div style='margin:15px 0px;'>" +
          "<span style='background:orange;padding:1px 4px;font-size:10px;color:#fff;border-radius:3px;'>E</span> " +
          resource.title +
          "</div>";
        }
      }
    },
    contentHeight: 550,
    businessHours: false,
    // minTime: "06:00:00",
    // maxTime: "20:00:00",
    slotDuration: '00:30:00',
    allDaySlot: false,
    defaultView: 'resourceDay',
    defaultDate: '2015-12-14',
    editable: true,
    selectable: true,
    eventLimit: true, // allow "more" link when too many events
    /*columnFormat: {
      month: 'ddd',
      week: 'ddd d.',
      day: 'dddd d. M'
    },*/
    resources: [
      { id: 'a', title: 'Resource A' },
      { id: 'b', title: 'Resource B' },
      { id: 'c', title: 'Resource C' },
      { id: 'd', title: 'Resource D' },
      { id: 'e', title: 'Resource E' },
      { id: 'f', title: 'Resource F' },
      { id: 'g', title: 'Resource G' },
      { id: 'h', title: 'Resource H' },
      { id: 'i', title: 'Resource I' },
      { id: 'j', title: 'Resource J' },
      { id: 'k', title: 'Resource K' },
      { id: 'l', title: 'Resource L' },
      { id: 'm', title: 'Resource M' },
      { id: 'n', title: 'Resource N' },
      { id: 'o', title: 'Resource O' },
      { id: 'p', title: 'Resource P' },
      { id: 'q', title: 'Resource Q' },
      { id: 's', title: 'Resource S' }
    ],
    events: [
      { id: '1', resourceId: 'a', start: '2015-12-14T08:00:00', end: '2015-12-14T14:00:00', title: 'event 1' },
      { id: '2', resourceId: 'b', start: '2015-12-14T09:00:00', end: '2015-12-14T14:00:00', title: 'event 2', color: '#257e4a' },
      { id: '3', resourceId: 'a', start: '2015-12-14T12:00:00', end: '2015-12-14T06:00:00', title: 'event 3' },
      { id: '4', resourceId: 'c', start: '2015-12-14T07:30:00', end: '2015-12-14T09:30:00', title: 'event 4' },
      { id: '5', resourceId: 's', start: '2015-12-14T08:00:00', end: '2015-12-14T09:30:00', title: 'event 5' },
      { id: '6', resourceId: 'd', start: '2015-12-15T10:00:00', end: '2015-12-15T15:00:00', title: 'event 6' },
      { id: '7', resourceId: 'f', start: '2015-12-14T09:00:00', end: '2015-12-14T11:00:00', title: 'event 7', color: '#257e4a' },
      { id: '8', resourceId: 'a', start: '2015-12-14', end: '2015-12-16', title: 'event 8', color: '#257e4a' }
    ],
    select: function(start, end, jsEvent, view, resource) {
      console.log(
        'select',
        start.format(),
        end.format(),
        resource ? resource.id : '(no resource)'
      );
    }
  });
}
App();
