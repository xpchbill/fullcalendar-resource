var ResourceGrid = FC.ResourceGrid = Grid.extend({

  resourceCnt: 0,

  transformEventSpan: function(span, event) {
    return span.resourceId = event['resourceId'];
  },

  renderFgEvents: function(events) {
    var calendar, event;
    calendar = this.view.calendar;

    //Grid.prototype.renderFgEvents.call(this, events);

    return Grid.prototype.renderFgEvents.call(this, (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = events.length; i < len; i++) {
        event = events[i];
        if (event['resourceId']) {
          results.push(event);
        }
      }
      return results;
    })());

  },

  getColResource: function(col) {
    return this.resources[this.getColResourceIndex(col)];
  },

  getColResourceIndex: function(col) {
    if (this.isRTL) {
      col = this.colCnt - 1 - col;
    }
    return Math.floor(col / this.daysPerRow);
  },

  indicesToCol: function(resourceIndex, dayIndex) {
    var col;
    col = resourceIndex * this.daysPerRow + dayIndex;
    if (this.isRTL) {
      col = this.colCnt - 1 - col;
    }
    return col;
  },

  getColDayIndex: function(col) {
    if (this.isRTL) {
      col = this.colCnt - 1 - col;
    }
    return col % this.daysPerRow;
  },

  setResources: function(resources) {
    this.resources = resources || [];
    this.resourceCnt = this.resources.length;
    this.updateDayTableCols();
  },

  updateDayTableCols: function() {
    return FC.DayTableMixin.updateDayTableCols.call(this);
  },

  computeColCnt: function() {
    return (this.resourceCnt || 1) * this.daysPerRow;
  },

  renderHeadDateCellsHtml: function(repeat, colspan) {
    var date, dayIndex, htmls, i, j, k, ref, ref1;

    htmls = [];

    return htmls.join('');
  },

  computeSelectionSpan: function(startSpan, endSpan) {
    var selectionSpan;
    if (!this.allowCrossResource && startSpan.resourceId !== endSpan.resourceId) {
      return;
    }
    selectionSpan = Grid.prototype.computeSelectionSpan.apply(this, arguments);
    if (selectionSpan) {
      selectionSpan.resourceId = startSpan.resourceId;
    }
    return selectionSpan;
  },

  /* render header parts  */

  renderHeadTrHtml: function() {
    if (!this.resourceCnt) {
      return FC.DayTableMixin.renderHeadTrHtml.call(this);
    } else {
      if (this.daysPerRow > 1) {
        return this.renderHeadResourceTrHtml(1, this.daysPerRow) + this.renderHeadDateTrHtml(this.resourceCnt);
      } else {
        return this.renderHeadResourceTrHtml();
      }
    }
  },
  renderHeadDateTrHtml: function(repeat, colspan) {
    return '<tr>' + (this.isRTL ? '' : this.renderHeadIntroHtml()) + this.renderHeadDateCellsHtml(repeat, colspan) + (this.isRTL ? this.renderHeadIntroHtml() : '') + '</tr>';
  },
  renderHeadDateCellsHtml: function(repeat, colspan) {
    var date, dayIndex, htmls, i, j, k, ref, ref1;
    if (repeat == null) {
      repeat = 1;
    }
    if (colspan == null) {
      colspan = 1;
    }
    htmls = [];
    for (i = j = 0, ref = repeat; j < ref; i = j += 1) {
      for (dayIndex = k = 0, ref1 = this.daysPerRow; k < ref1; dayIndex = k += 1) {
        date = this.dayDates[dayIndex].clone();
        htmls.push(this.renderHeadDateCellHtml(date, colspan));
      }
    }
    if (this.isRTL) {
      htmls.reverse();
    }
    return htmls.join('');
  },
  renderHeadResourceTrHtml: function(repeat, colspan) {
    return '<tr>' + (this.isRTL ? '' : this.renderHeadIntroHtml()) + this.renderHeadResourceCellsHtml(repeat, colspan) + (this.isRTL ? this.renderHeadIntroHtml() : '') + '</tr>';
  },
  renderHeadResourceCellsHtml: function(repeat, colspan) {
    var htmls, i, j, k, len, ref, ref1, resource;
    if (repeat == null) {
      repeat = 1;
    }
    if (colspan == null) {
      colspan = 1;
    }
    htmls = [];
    for (i = j = 0, ref = repeat; j < ref; i = j += 1) {
      ref1 = this.resources;
      for (k = 0, len = ref1.length; k < len; k++) {
        resource = ref1[k];
        htmls.push(this.renderHeadResourceCellHtml(resource, colspan));
      }
    }
    if (this.isRTL) {
      htmls.reverse();
    }
    return htmls.join('');
  },
  renderHeadResourceCellHtml: function(resource, colspan) {
    if (colspan == null) {
      colspan = 1;
    }
    return '<th class="fc-resource-cell"' + (colspan > 1 ? ' colspan="' + colspan + '"' : '') + '>' + htmlEscape(resource.title) + '</th>';
  },
  processHeadResourceEls: function(containerEl) {
    return containerEl.find('.fc-resource-cell').each((function(_this) {
      return function(col, node) {
        var resource;
        resource = _this.getColResource(col);
        return _this.view.trigger('resourceRender', resource, resource, $(node));
      };
    })(this));
  }

});
