
var ResourceTimeGrid = FC.ResourceTimeGrid = TimeGrid.extend(agendaTimeGridMethods, ResourceGrid, {

	getHitSpan: function(hit) {
    var span;
		span = TimeGrid.prototype.getHitSpan.apply(this, arguments);
    if (this.resourceCnt) {
      span.resourceId = this.getColResource(hit.col).id;
    }
    return span;
  },

	spanToSegs: function(span){
		var copy, genericSegs, i, j, k, len, len1, ref, resourceCnt, resourceIndex, resourceObj, resourceSegs, seg;


		genericSegs = this.sliceRangeByTimes(span);

    resourceCnt = this.resourceCnt;

    if (!resourceCnt) {
      for (i = 0, len = genericSegs.length; i < len; i++) {
        seg = genericSegs[i];
        seg.col = seg.dayIndex;
      }
      return genericSegs;
    } else {
      resourceSegs = [];
      for (j = 0, len1 = genericSegs.length; j < len1; j++) {
        seg = genericSegs[j];
        for (resourceIndex = k = 0, ref = resourceCnt; k < ref; resourceIndex = k += 1) {
          resourceObj = this.resources[resourceIndex];
          if (!span.resourceId || span.resourceId === resourceObj.id) {
            copy = $.extend({}, seg);
            copy.col = this.indicesToCol(resourceIndex, seg.dayIndex);
            resourceSegs.push(copy);
          }
        }
      }
      return resourceSegs;
    }
	},

  renderHeadIntroHtml: function(){
    var view = this.view;
    var weekText;

    if (view.opt('weekNumbers')) {
      weekText = this.start.format(view.opt('smallWeekFormat'));

      return '' +
        '<th class="fc-axis fc-week-number ' + view.widgetHeaderClass + '" ' + view.axisStyleAttr() + '>' +
          '<span>' + // needed for matchCellWidths
            htmlEscape(weekText) +
          '</span>' +
        '</th>';
    }
    else {
      return '<th class="fc-axis ' + view.widgetHeaderClass + '" ' + view.axisStyleAttr() + '><a href="#">删除</a></th>';
    }
  }

});
