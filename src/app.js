"use strict";

import "./app.less";

export class App{

	constructor() {

	    $('#calendar').fullCalendar({
	      header: {
	        left: 'today prev,next title',
	        center: '',
	        right: 'resourceDay,resourceWeek,agendaWeek,month,agendaDay'
	      },
				// views: {
				// 	resourceWeek2: {
				// 		type: 'agenda',
				// 		duration: { weeks: 2 }
				// 	}
				// },
				views: {
					resourceDay: {
						renderRsHeaderItem: function() {
							return "<div style='margin:15px 0px;'>" +
								"<span style='background:orange;padding:1px 4px;font-size:10px;color:#fff;border-radius:3px;'>E</span>" +
								" {{resource.title}}</div>";
						}
					},
					resourceWeek: {
						renderRsHeaderItem: function() {
							return "<div style='margin:15px 0px;'>" +
								"<span style='background:orange;padding:1px 4px;font-size:10px;color:#fff;border-radius:3px;'>E</span>" +
								" {{resource.title}}</div>";
						}
					}
				},
	      contentHeight: 600,
	      minTime: "06:00:00",
	      // maxTime: "20:00:00",
	      slotDuration: '00:30:00',
	      allDaySlot: true,
	      defaultView: 'resourceWeek',
	      defaultDate: '2015-12-14',
	      editable: true,
	      selectable: true,
	      eventLimit: true, // allow "more" link when too many events
	      /*columnFormat: {
	        month: 'ddd',
	        week: 'ddd d.',
	        day: 'dddd d. M'
	      },*/
	      resources: [{
	        id: 'a',
	        title: 'Resource A'
	      }, {
	        id: 'b',
	        title: 'Resource B',
	        eventColor: 'green'
	      }, {
	        id: 'c',
	        title: 'Resource C',
	        eventColor: 'orange'
	      }, {
	        id: 'd',
	        title: 'Resource D',
	        eventColor: 'red'
	      }, {
	        id: 'e',
	        title: 'Resource E',
	        eventColor: 'orange',
	        children: [{
	          id: 'r',
	          title: 'Resource R',
	          eventColor: 'orange'
	        }]
	      }, {
	        id: 'f',
	        title: 'Resource F',
	        eventColor: 'red'
	      }, {
	        id: 'g',
	        title: 'Resource G',
	        eventColor: 'green'
	      }, {
	        id: 'h',
	        title: 'Resource H',
	        eventColor: 'orange'
	      }, {
	        id: 'i',
	        title: 'Resource I',
	        eventColor: 'orange'
	      }, {
	        id: 'm',
	        title: 'Resource M',
	        eventColor: 'orange'
	      }, {
	        id: 'n',
	        title: 'Resource N',
	        eventColor: 'orange'
	      }, {
	        id: 'o',
	        title: 'Resource O',
	        eventColor: 'orange'
	      }, {
	        id: 'p',
	        title: 'Resource P',
	        eventColor: 'red'
	      }, {
	        id: 'q',
	        title: 'Resource Q',
	        eventColor: 'orange'
	      }, {
	        id: 's',
	        title: 'Resource S',
	        eventColor: 'orange'
	      }],
	      events: [{
	        id: '1',
	        resourceId: 'a',
	        start: '2015-12-14T08:00:00',
	        end: '2015-12-14T14:00:00',
	        title: 'event 1'
	      }, {
	        id: '2',
	        resourceId: 'b',
	        start: '2015-12-14T09:00:00',
	        end: '2015-12-14T14:00:00',
	        title: 'event 2',
	        color: '#257e4a'
	      }, {
	        id: '3',
	        resourceId: 'a',
	        start: '2015-12-14T12:00:00',
	        end: '2015-12-14T06:00:00',
	        title: 'event 3'
	      }, {
	        id: '4',
	        resourceId: 'c',
	        start: '2015-12-14T07:30:00',
	        end: '2015-12-14T09:30:00',
	        title: 'event 4'
	      }, {
	        id: '5',
	        resourceId: 'c',
	        start: '2015-12-14T08:00:00',
	        end: '2015-12-14T09:30:00',
					rendering: 'background',
	        title: 'event 5'
	      }, {
	        id: '6',
	        resourceId: 'd',
	        start: '2015-12-15T10:00:00',
	        end: '2015-12-15T15:00:00',
	        title: 'event 6'
	      }, {
	        id: '7',
	        resourceId: 'c',
	        start: '2015-12-14T09:00:00',
	        end: '2015-12-14T11:00:00',
	        title: 'event 7',
					rendering: 'background',
	        color: '#257e4a'
	      }, {
	        id: '8',
	        resourceId: 'a',
	        start: '2015-12-14',
	        end: '2015-12-16',
	        title: 'event 8',
	        color: '#257e4a'
	      }/*, {
	        id: '9',
	        resourceId: 'a',
	        start: '2015-12-14',
	        end: '2015-12-15',
	        title: 'event 2',
	        color: '#257e4a'
	      }, {
	        id: '10',
	        resourceId: 'a',
	        start: '2015-12-14',
	        end: '2015-12-15',
	        title: 'event 2',
	        color: '#257e4a'
	      }, {
	        id: '11',
	        resourceId: 'a',
	        start: '2015-12-14',
	        end: '2015-12-15',
	        title: 'event 2',
	        color: '#257e4a'
	      }, {
	        id: '12',
	        resourceId: 'a',
	        start: '2015-12-14',
	        end: '2015-12-15',
	        title: 'event 2',
	        color: '#257e4a'
	      }, {
	        id: '13',
	        resourceId: 'a',
	        start: '2015-12-14',
	        end: '2015-12-15',
	        title: 'event 2',
	        color: '#257e4a'
	      }, {
	        id: '14',
	        resourceId: 'a',
	        start: '2015-12-14',
	        end: '2015-12-15',
	        title: 'event 2',
	        color: '#257e4a'
	      }*/],
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
}
new App();
