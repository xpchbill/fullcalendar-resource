"use strict";

export default class Registor {

  constructor(uniqueName, prefix) {
    this.memberMap = {};
    this.nextIndex = 0;
    this.prefix = prefix ? prefix : "registor-";
    this.uniqueName = uniqueName ? uniqueName : "uniqueId-";
  }

  register(obj) {
    let id = obj[this.uniqueName];
    if (id == null) {
      id = (this.prefix + this.nextIndex++);
      obj[this.uniqueName] = id;
    }
    this.memberMap[id] = obj;
  }

  unregister(obj) {
    let id = obj[this.uniqueName];
    if (id == null) {
      return;
    }

    if (this.memberMap[id]) {
      delete this.memberMap[id];
    }

    try {
      delete obj[this.uniqueName];
    } catch (ex) {
      throw new Error("Can't delete the Attribute [" + this.uniqueName + "]");
    }
  }

  createUnique(obj) {
    let id = obj[this.uniqueName];
    if (id != null) {
      return id;
    }
    id = (this.prefix + this.nextIndex++);
    return obj[this.uniqueName] = id;
  }

  getMember(unique) {
    return this.memberMap[unique] || null;
  }

  getMembers() {
    return Object.keys(this.memberMap).map((k) => this.memberMap[k]);
  }

  destory() {
    this.memberMap = {};
    this.nextIndex = 0;
  }

}
