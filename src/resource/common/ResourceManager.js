"use strict";

import {Emitter} from "../FC.js";
import ObjectAssign from "object-assign";
import Registor from "../tools/Registor.js";

export default class ResourceManager extends Emitter{

  constructor(calendar) {
    super(calendar);
    this.calendar = calendar;
    this.registor = new Registor("id", "rsId-");
    this._reset();
  }

  fetch() {
    let fetchingStatus = this.fetchingStatus;

    fetchingStatus.start();
    setTimeout(() => {
      this.setResources(this.calendar.options["resources"] || []);
      fetchingStatus.end(this.getResources());
    }, 500);

  }

  reFetch() {
    this._reset();
    this.fetch();
  }

  getCurrentResource() {
    let currentResource,
        resources = this.getResources();
    if(this.calendar.view.type != "resourceDay"){
      currentResource = this.currentResource ? this.currentResource : resources[0];
    }else{
      currentResource = null;
    }
    return currentResource;
  }

  setCurrentResource(resourceId) {
    let resource = this.getResourceById(resourceId);
    this.currentResource = resource;
    this.trigger("currentResourceChange", resource);
  }

  getResourceById(id) {
    return this.registor.getMember(id);
  }

  getResources() {
    return this.resources;
  }

  setResources(resources) {
    //this._reset();
    resources.forEach((rsc) => {
      this.registor.register(rsc);
    });
    this.resources = this.registor.getMembers();
  }

  addResource(resource) {
    this.registor.register(resource);
    this.resources = this.registor.getMembers();
    this.trigger("add", resource);
  }

  deleteResource(resource, noTrigger) {
    if(!resource.id || !this.registor.getMember(resource.id)){
      return;
    }
    this.registor.unregister(resource);
    this.resources = this.registor.getMembers();
    if(!noTrigger){
      this.trigger("delete", resource);
    }
  }

  getEventResourceId(event) {
    return String(event[this.getEventResourceField()] || '');
  }

  _reset() {
    this.resources = [];
    this.currentResource = null;
    this.registor.destory();
    this.fetchingStatus = new FetchingStatus();
  }
}

class FetchingStatus {

  constructor(){
    this.defer = $.Deferred();
    this.promise = this.defer.promise();
    this.doing = false;
    this.done = false;
  }

  start(){
    this.doing = true;
  }

  end(resources){
    this.doning = false;
    this.done = true;
    this.defer.resolve(resources);
  }

}
