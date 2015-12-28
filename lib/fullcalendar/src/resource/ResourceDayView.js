
var ResourceDayView = FC.ResourceDayView = ResourceView.extend({

  timeGridClass: ResourceTimeGrid,

  dayGridClass: ResourceDayGrid,

	instantiateTimeGrid: function() {
		return new this.timeGridClass(this);
	},

	renderResources: function(resources){
		this.timeGrid.setResources(resources);
    if (this.dayGrid) {
      return this.dayGrid.setResources(resources);
    }
	}

});
