"use strict";

import {Calendar, views} from "./FC.js";
import ResourceManager from "./common/ResourceManager.js";

export default {

  initialize() {
    this.rsManager = new ResourceManager(this);
  },

  getResources() {
    return this.rsManager.getResources() || [];
  },

  getResourcesCount() {
    let resources = this.getResources();
    return resources.length;
  },

  addResource(resource) {
    return this.rsManager.addResource(resource);
  },

  removeResourceById(id) {
    let resource = this.rsManager.getResourceById(id);
    return this.deleteResource(resource);
  },

  deleteResource(resource) {
    return this.rsManager.deleteResource(resource);
  },

  setAllowedResources(resources) {
    return this.rsManager.setAllowedResources(resources);
  },

  getAllowedResources() {
    return this.rsManager.getAllowedResources();
  },

  addAllowedResource(resource) {
    return this.rsManager.addAllowedResource(resource);
  },

  removeAllowedResource(resource) {
    return this.rsManager.addAllowedResource(resource);
  }

}
