
var ResourceDayGrid = FC.ResourceDayGrid = DayGrid.extend(ResourceGrid, {

	__classname: 'ResourceDayGrid',

  getHitSpan: function(hit) {
    var span;
    span = DayGrid.prototype.getHitSpan.apply(this, arguments);
    if (this.resourceCnt) {
      span.resourceId = this.getColResource(hit.col).id;
    }
    return span;
  }

});
