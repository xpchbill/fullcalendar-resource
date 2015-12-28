
var ResourceView = FC.ResourceView = AgendaView.extend({

	constructor: function() {
		AgendaView.apply(this, arguments); // call the super-constructor
		this.createListeners();
	},

	createListeners: function(){
		this.calendar.resourceManager
				.on('add', this.addResource.bind(this))
				.on('remove', this.removeResource.bind(this));
	},

	addResource: function(){

	},

	removeResource: function(){

	},

	triggerSelect: function(span, ev) {
    var resourceManager = this.calendar.resourceManager;
    return this.trigger('select', null, this.calendar.applyTimezone(span.start), this.calendar.applyTimezone(span.end), ev, this, resourceManager.getResourceById(span.resourceId));
  },

	displayView: function(date){
		// AgendaView.prototype.displayView.apply(this, arguments);
		// this.displayResources();
		// return $.when(AgendaView.prototype.displayView.apply(this, arguments)).then(function(){
		// 	return this.displayResources();
    // }.bind(this));
		var reourceManager = this.calendar.resourceManager;
		reourceManager.fetchResources();
		this.renderResources(reourceManager.getResources());

		AgendaView.prototype.displayView.apply(this, arguments);
	},

	displayEvents: function(events){
		AgendaView.prototype.displayEvents.apply(this, arguments);
	},

	displayResources: function(){
		var reourceManager = this.calendar.resourceManager;
		// var resources = reourceManager.setResources(calendar.options['resources'] || []);
		// this.renderResources(resources);
		return $.when(reourceManager.fetchResources()).done(function(){
			this.renderResources(reourceManager.getResources());
			this.redisplay();
		}.bind(this)).fail(function(){
			this.redisplay();
    }.bind(this));
	}

});
