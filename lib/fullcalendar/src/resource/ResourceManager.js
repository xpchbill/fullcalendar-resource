
var ResourceManager = FC.ResourceManager = Class.extend(Emitter, {

	resources: null,
	resourcesMap: null,
	defferred: null,

	constructor: function(calendar) {
		this.calendar = calendar;
		this.reset();
	},

	reset: function(){
		this.resources = [];
    this.resourcesMap = {};
	},

	fetchResources: function(){
		var dtd = $.Deferred();
		if(!this.resources.length){
			this.setResources(this.calendar.options['resources'] || []);
			dtd.reject();
		}else{
			dtd.resolve();
		}

		return dtd;
	},

	getResourceById: function(id) {
    return this.resourcesMap[id];
  },

	getResources: function() {
		return this.resources;
  },

	setResources: function(resources) {
		this.reset();
		$.each(resources, function(i, rsc){
			var _rsc = this.createResource($.extend({}, rsc));
			this.resources.push(_rsc);
		}.bind(this));
		//this.calendar.trigger('resourcesSet', null, this.resources);
		return this.resources;
  },

	createResource: function(resource){
		resource.id = resource.id ? resource.id : '';
		this.resourcesMap[resource.id] = resource;
		return resource;
	},

	addResource: function(resource){
		var _rsc = this.createResource(resource);
		this.resources.push(_rsc);
		this.trigger('add', _rsc);
	},

	removeResource: function(resource){

		this.trigger('remove', _rsc);
	},

	getEventResourceId: function(event){
		return String(event[this.getEventResourceField()] || '');
	}


});
