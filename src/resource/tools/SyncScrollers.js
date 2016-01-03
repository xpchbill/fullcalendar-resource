"use strict";


import {Emitter} from "../FC.js";

export default class SyncScrollers {

  constructor(type, elements) {
    this.type = type;
    this.init(elements);
  }

  static hasScrollbar(el, direction) {
    if(direction === "y") {
        return el.scrollHeight > el.clientHeight;
    }else if(direction === "x") {
        return el.scrollWidth > el.clientWidth;
    }else{
      return el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight;
    }
 }

  init(elements) {
    this.scrollers = [];
    elements.forEach((el) => {
      let _scroller = new Scroller(el);
      this.scrollers.push(_scroller);
      _scroller.on("scroll", this.onScroll.bind(this));
    });
  }

  onScroll(scroller, scrollTop, scrollLeft) {
    this.scrollers.forEach((scr) => {
      if(scr !== scroller){
        switch (this.type) {
          case 'x':
            scr.scrollLeft(scrollLeft);
            break;
          case 'y':
            scr.scrollTop(scrollTop);
            break;
        }
      }
    });
  }

}

class Scroller extends Emitter {

  constructor(el) {
    super(el);
    this.el = el;
    this.addEvents();
  }

  addEvents() {
    this.el.on("scroll", this.onScroll.bind(this));
  }

  onScroll(event) {
    let scrollTop = this.el.scrollTop(),
        scrollLeft = this.el.scrollLeft();
    this.trigger('scroll', this, scrollTop, scrollLeft);
  }

  scrollTop(top) {
    this.el.scrollTop(top);
  }

  scrollLeft(left) {
    this.el.scrollLeft(left);
  }

}
