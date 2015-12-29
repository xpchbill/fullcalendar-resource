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

  getCurrentResource() {
    return this.rsManager.getCurrentResource();
  }

}
