/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(2);

	var _FC = __webpack_require__(3);

	var _Config = __webpack_require__(4);

	var _Config2 = _interopRequireDefault(_Config);

	var _Config3 = __webpack_require__(37);

	var _Config4 = _interopRequireDefault(_Config3);

	var _Config5 = __webpack_require__(49);

	var _Config6 = _interopRequireDefault(_Config5);

	var _CalendarMixin = __webpack_require__(58);

	var _CalendarMixin2 = _interopRequireDefault(_CalendarMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* Register new views to view configuration */
	_FC.views.resourceDay = _Config2.default;
	_FC.views.resourceWeek = _Config4.default;
	_FC.views.resourceMonth = _Config6.default;

	/* Mixin common interfaces to Calendar(fullcalendar's Calendar) */
	_FC.Calendar.mixin(_CalendarMixin2.default);

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/* Hold modules of fullCalendar as es6 modules */

	/* Business modules */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.matchCellWidths = matchCellWidths;
	exports.createProtoMixinObject = createProtoMixinObject;
	var FC = exports.FC = $.fullCalendar;

	var Emitter = exports.Emitter = FC.Emitter;

	var Calendar = exports.Calendar = FC.Calendar;

	var Grid = exports.Grid = FC.Grid;

	var DayGrid = exports.DayGrid = FC.DayGrid;

	var TimeGrid = exports.TimeGrid = FC.TimeGrid;

	var DayTableMixin = exports.DayTableMixin = FC.DayTableMixin;

	var View = exports.View = FC.View;

	var views = exports.views = FC.views;

	var AgendaView = exports.AgendaView = FC.AgendaView;

	var MonthView = exports.MonthView = FC.MonthView;

	/* util modules */
	var htmlEscape = exports.htmlEscape = FC.htmlEscape;
	var moment = exports.moment = FC.moment;
	var isInt = exports.isInt = FC.isInt;
	var divideDurationByDuration = exports.divideDurationByDuration = FC.divideDurationByDuration;
	var CoordCache = exports.CoordCache = FC.CoordCache;
	function matchCellWidths(els) {
	  var maxInnerWidth = 0;
	  els.find('> *').each(function (i, innerEl) {
	    var innerWidth = $(innerEl).outerWidth();
	    if (innerWidth > maxInnerWidth) {
	      maxInnerWidth = innerWidth;
	    }
	  });
	  maxInnerWidth++;
	  els.width(maxInnerWidth);
	  return maxInnerWidth;
	}
	function createProtoMixinObject(protoObject, protos) {
	  var movedObject = {};
	  protos.forEach(function (pro) {
	    if (protoObject[pro]) {
	      movedObject[pro] = protoObject[pro];
	    }
	  });
	  return movedObject;
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ResourceDayView = __webpack_require__(5);

	var _ResourceDayView2 = _interopRequireDefault(_ResourceDayView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Configuration of resource day view.
	 */
	exports.default = {
	  "type": "agenda",
	  "class": _ResourceDayView2.default,
	  "defaults": {
	    "fixedAxisWidth": 50,
	    "limitColWidth": 190,
	    "buttonText": "rsday"
	  },
	  duration: {
	    "days": 2
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(6);

	var _FC = __webpack_require__(3);

	var _BaseResourceAgendaView = __webpack_require__(7);

	var _BaseResourceAgendaView2 = _interopRequireDefault(_BaseResourceAgendaView);

	var _ResourceTimeGrid = __webpack_require__(11);

	var _ResourceTimeGrid2 = _interopRequireDefault(_ResourceTimeGrid);

	var _ResourceDayGrid = __webpack_require__(28);

	var _ResourceDayGrid2 = _interopRequireDefault(_ResourceDayGrid);

	var _SkeletonParser = __webpack_require__(32);

	var _SkeletonParser2 = _interopRequireDefault(_SkeletonParser);

	var _SyncScrollers = __webpack_require__(9);

	var _SyncScrollers2 = _interopRequireDefault(_SyncScrollers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ResourceDayView = (function (_BaseResourceAgendaVi) {
	  _inherits(ResourceDayView, _BaseResourceAgendaVi);

	  /**
	   * @constructor
	   * @param  {*} ...args [calendar, type, options, intervalDuration]
	   */

	  function ResourceDayView() {
	    var _Object$getPrototypeO;

	    _classCallCheck(this, ResourceDayView);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ResourceDayView)).call.apply(_Object$getPrototypeO, [this].concat(args)));
	  }

	  _createClass(ResourceDayView, [{
	    key: "renderSkeletonHtml",
	    value: function renderSkeletonHtml() {
	      var skeletonParser = new _SkeletonParser2.default(this);
	      return skeletonParser.parse();
	    }
	  }, {
	    key: "renderDates",
	    value: function renderDates(emitFromChildView) {
	      _get(Object.getPrototypeOf(ResourceDayView.prototype), "renderDates", this).call(this);
	      if (!emitFromChildView) {
	        this.el.addClass("fc-resource-day-view");
	      }
	      this.el.html(this.renderSkeletonHtml());
	      this.renderHead();
	      this.setGridElement();
	      this.timeGrid.renderDates();
	      if (this.dayGrid) {
	        this.dayGrid.renderDates();
	      }
	    }
	  }, {
	    key: "renderHead",
	    value: function renderHead() {
	      this.headContainerEl = this.el.find(".fc-header-output").append(this.timeGrid.renderHeadHtml());
	      this.headRowEl = this.headContainerEl.find(".fc-row");
	    }
	  }, {
	    key: "unrenderDates",
	    value: function unrenderDates() {
	      this.timeGrid.unrenderDates();
	    }
	  }, {
	    key: "setGridElement",
	    value: function setGridElement() {
	      this.timeGrid.setElement(this.el.find('tbody .fc-time-grid-output'));
	      this.timeGrid.setSlatsLabelEl(this.el.find('tbody .fc-slats-labels-container'));
	      if (this.dayGrid) {
	        this.dayGrid.setElement(this.el.find('tbody .fc-day-grid-output'));
	      }
	    }
	  }, {
	    key: "axisStyleAttr",
	    value: function axisStyleAttr() {
	      var fixedAxisWidth = this.opt("fixedAxisWidth");
	      if (fixedAxisWidth) {
	        return 'style="width:' + fixedAxisWidth + 'px"';
	      }
	      if (this.axisWidth !== null) {
	        return 'style="width:' + this.axisWidth + 'px"';
	      }
	      return "";
	    }
	  }, {
	    key: "updateSize",
	    value: function updateSize(isResize) {
	      _get(Object.getPrototypeOf(ResourceDayView.prototype), "updateSize", this).call(this, isResize);
	      var timeGridScrollEl = this.timeGrid.el.parent(".fc-scroll-bars");
	      var timeGridHasScrollBar = _SyncScrollers2.default.hasScrollbar(timeGridScrollEl[0], "y");
	      this.el[timeGridHasScrollBar ? "addClass" : "removeClass"]("time-grid-has-scrollbar");
	      this.syncScroll();
	    }
	  }, {
	    key: "updateWidth",
	    value: function updateWidth() {
	      _get(Object.getPrototypeOf(ResourceDayView.prototype), "updateWidth", this).call(this);
	      var width = this.timeGrid.updateWidth();
	      if (this.dayGrid) {
	        this.dayGrid.updateWidth(width);
	      }
	    }
	  }, {
	    key: "setHeight",
	    value: function setHeight(totalHeight, isAuto) {
	      this.timeGrid.setHeight(totalHeight, isAuto);
	      if (this.dayGrid) {
	        //this.dayGrid.setHeight(totalHeight, isAuto);
	      }
	    }
	  }, {
	    key: "syncScroll",
	    value: function syncScroll() {
	      var timeGridScrollEl = this.timeGrid.el.parent(".fc-scroll-bars");

	      if (_SyncScrollers2.default.hasScrollbar(timeGridScrollEl[0], "x")) {
	        var headerScrollEl = this.headContainerEl.parent(".fc-scroll-bars").css("padding-right", "21px");
	        var scrollersX = [timeGridScrollEl, headerScrollEl];
	        if (this.dayGrid) {
	          var dayGridScrollEl = this.dayGrid.el.parent(".fc-scroll-bars");
	          scrollersX.push(dayGridScrollEl);
	        }
	        var _syncScrollersX = new _SyncScrollers2.default("x", scrollersX);
	      }

	      if (_SyncScrollers2.default.hasScrollbar(timeGridScrollEl[0], "y")) {
	        var slatsLabelScrollEl = this.timeGrid.slatsLabelEl.find(".fc-scroll-bars");
	        var _syncScrollersY = new _SyncScrollers2.default("y", [timeGridScrollEl, slatsLabelScrollEl]);
	      }
	    }

	    /**
	     * @override
	     * @return {Class} Instance of ResourceTimeGrid.
	     */

	  }, {
	    key: "instantiateTimeGrid",
	    value: function instantiateTimeGrid() {
	      return new _ResourceTimeGrid2.default(this);
	    }

	    /**
	     * @override
	     * @return {Class} Instance of ResourceDayGrid.
	     */

	  }, {
	    key: "instantiateDayGrid",
	    value: function instantiateDayGrid() {
	      return new _ResourceDayGrid2.default(this);
	    }

	    /**
	     * Render resources after fetching data from rsManager.
	     * @override
	     * @param  {Array} resources [description]
	     */

	  }, {
	    key: "renderResources",
	    value: function renderResources(resources) {
	      if (resources) {
	        this.calendar.setAllowedResources(resources);
	      }
	      this.timeGrid.renderResources();
	      if (this.dayGrid) {
	        this.dayGrid.renderResources();
	      }
	    }
	  }, {
	    key: "addResourceSuccessful",
	    value: function addResourceSuccessful(resource) {
	      this.calendar.addAllowedResource(resource);
	      _get(Object.getPrototypeOf(ResourceDayView.prototype), "addResourceSuccessful", this).call(this);
	    }
	  }, {
	    key: "deleteResourceSuccessful",
	    value: function deleteResourceSuccessful(resource) {
	      this.calendar.removeAllowedResource(resource);
	      _get(Object.getPrototypeOf(ResourceDayView.prototype), "deleteResourceSuccessful", this).call(this);
	    }
	  }]);

	  return ResourceDayView;
	})(_BaseResourceAgendaView2.default);

	exports.default = ResourceDayView;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _BaseResourceView = __webpack_require__(8);

	var _objectAssign = __webpack_require__(10);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseResourceAgendaView = (function (_AgendaView) {
	  _inherits(BaseResourceAgendaView, _AgendaView);

	  /**
	   * Gain rsManager instance from Calendar.
	   * @constructor
	   * @param  {*} ...args [calendar, type, options, intervalDuration]
	   */

	  function BaseResourceAgendaView() {
	    var _Object$getPrototypeO;

	    _classCallCheck(this, BaseResourceAgendaView);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(BaseResourceAgendaView)).call.apply(_Object$getPrototypeO, [this].concat(args)));

	    _this.rsManager = _this.calendar.rsManager;
	    _this.addResourceListener();
	    return _this;
	  }

	  _createClass(BaseResourceAgendaView, [{
	    key: "renderDates",
	    value: function renderDates() {
	      this.el.addClass("fc-resource-view");
	    }
	  }]);

	  return BaseResourceAgendaView;
	})(_FC.AgendaView);

	exports.default = BaseResourceAgendaView;

	(0, _objectAssign2.default)(BaseResourceAgendaView.prototype, _BaseResourceView.BaseResourceViewMixin);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BaseResourceViewMixin = undefined;

	var _FC = __webpack_require__(3);

	var _SyncScrollers = __webpack_require__(9);

	var _SyncScrollers2 = _interopRequireDefault(_SyncScrollers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseResourceView = (function (_View) {
	  _inherits(BaseResourceView, _View);

	  function BaseResourceView() {
	    _classCallCheck(this, BaseResourceView);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseResourceView).apply(this, arguments));
	  }

	  _createClass(BaseResourceView, [{
	    key: "displayView",

	    /**
	     * Fetch resources before rendering view.
	     * @override
	     * @param  {Moment} date
	     * @return {Object}  Return Jquery Deferred Object for fullcalendar.js
	     */
	    value: function displayView(date) {
	      var _this2 = this;

	      var dfd = $.Deferred();
	      _get(Object.getPrototypeOf(BaseResourceView.prototype), "displayView", this).call(this, date);

	      var fetchingStatus = this.rsManager.fetchingStatus;
	      if (!fetchingStatus.done && !fetchingStatus.doing) {
	        fetchingStatus.promise.then(function (resources) {
	          _this2.renderResources(resources);
	          _this2.redisplay();
	          dfd.resolve();
	        });
	        this.rsManager.fetch();
	      }

	      if (fetchingStatus.done) {
	        this.renderResources(this.calendar.getResources());
	        _get(Object.getPrototypeOf(BaseResourceView.prototype), "displayView", this).call(this, date);
	        dfd.resolve();
	      }
	      return dfd;
	    }

	    /**
	     * Call super.displayEvents after fetching resources.
	     * @override
	     * @param  {Array} events
	     */

	  }, {
	    key: "displayEvents",
	    value: function displayEvents(events) {
	      var _this3 = this;

	      var fetchingStatus = this.rsManager.fetchingStatus;
	      fetchingStatus.promise.then(function () {
	        _get(Object.getPrototypeOf(BaseResourceView.prototype), "displayEvents", _this3).call(_this3, events);
	      });
	    }
	  }, {
	    key: "addResourceListener",
	    value: function addResourceListener() {
	      this.calendar.rsManager.on('add', this.addResourceSuccessful.bind(this));
	      this.calendar.rsManager.on('delete', this.deleteResourceSuccessful.bind(this));
	    }
	  }, {
	    key: "addResourceSuccessful",
	    value: function addResourceSuccessful(resource) {
	      this.redisplay(true);
	    }
	  }, {
	    key: "deleteResourceSuccessful",
	    value: function deleteResourceSuccessful(resource) {
	      this.redisplay(true);
	    }
	  }, {
	    key: "redisplay",
	    value: function redisplay(remainScrollPosition) {
	      var position = undefined;
	      if (this !== this.calendar.view) {
	        return;
	      }
	      if (remainScrollPosition && this.timeGrid) {
	        var scrollBar = this.timeGrid.el.parent(".fc-scroll-bars");
	        position = _SyncScrollers2.default.getScrollPosition(scrollBar);
	      }
	      if (this.isSkeletonRendered) {
	        var wasEventsRendered = this.isEventsRendered;
	        this.clearEvents();
	        this.clearView();
	        this.renderResources();
	        _get(Object.getPrototypeOf(BaseResourceView.prototype), "displayView", this).call(this);
	        if (wasEventsRendered) {
	          var events = this.calendar.clientEvents();
	          this.displayEvents(events);
	        }
	      }
	      if (remainScrollPosition && this.timeGrid) {
	        var scrollBar = this.timeGrid.el.parent(".fc-scroll-bars");
	        _SyncScrollers2.default.scrollToPosition(scrollBar, position);
	      }
	      return position;
	    }

	    /**
	     * Add argument resource to this.trigger call.
	     * @override
	     * @param  {Moment} span
	     * @param  {Object} event
	     */

	  }, {
	    key: "triggerSelect",
	    value: function triggerSelect(segs, ev) {
	      if (this.timeGrid && this.timeGrid.hideWireFrame) {
	        this.timeGrid.hideWireFrame();
	      }
	      this.trigger('select', null, segs, ev);
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      if (this.dayGrid && this.dayGrid.destroy) {
	        this.dayGrid.destroy();
	      }
	      if (this.timeGrid && this.timeGrid.destroy) {
	        this.timeGrid.destroy();
	      }
	    }
	  }]);

	  return BaseResourceView;
	})(_FC.View);

	exports.default = BaseResourceView;
	var BaseResourceViewMixin = exports.BaseResourceViewMixin = (0, _FC.createProtoMixinObject)(BaseResourceView.prototype, ["displayView", "displayEvents", "addResourceListener", "addResourceSuccessful", "deleteResourceSuccessful", "redisplay", "triggerSelect", "destroy"]);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SyncScrollers = (function () {
	  function SyncScrollers(type, elements) {
	    _classCallCheck(this, SyncScrollers);

	    this.type = type;
	    this.init(elements);
	  }

	  _createClass(SyncScrollers, [{
	    key: "init",
	    value: function init(elements) {
	      var _this = this;

	      this.scrollers = [];
	      elements.forEach(function (el) {
	        var _scroller = new Scroller(el);
	        _this.scrollers.push(_scroller);
	        _scroller.on("scroll", _this.onScroll.bind(_this));
	      });
	    }
	  }, {
	    key: "onScroll",
	    value: function onScroll(scroller, scrollTop, scrollLeft) {
	      var _this2 = this;

	      this.scrollers.forEach(function (scr) {
	        if (scr !== scroller) {
	          switch (_this2.type) {
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
	  }], [{
	    key: "hasScrollbar",
	    value: function hasScrollbar(el, direction) {
	      if (direction === "y") {
	        return el.scrollHeight > el.clientHeight;
	      } else if (direction === "x") {
	        return el.scrollWidth > el.clientWidth;
	      } else {
	        return el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight;
	      }
	    }
	  }, {
	    key: "getScrollPosition",
	    value: function getScrollPosition(el) {
	      return {
	        left: el.scrollLeft(),
	        top: el.scrollTop()
	      };
	    }
	  }, {
	    key: "scrollToPosition",
	    value: function scrollToPosition(el, position) {
	      el.scrollTop(position.top);
	      el.scrollLeft(position.left);
	    }
	  }]);

	  return SyncScrollers;
	})();

	exports.default = SyncScrollers;

	var Scroller = (function (_Emitter) {
	  _inherits(Scroller, _Emitter);

	  function Scroller(el) {
	    _classCallCheck(this, Scroller);

	    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Scroller).call(this, el));

	    _this3.el = el;
	    _this3.addEvents();
	    return _this3;
	  }

	  _createClass(Scroller, [{
	    key: "addEvents",
	    value: function addEvents() {
	      this.el.on("scroll", this.onScroll.bind(this));
	    }
	  }, {
	    key: "onScroll",
	    value: function onScroll(event) {
	      var scrollTop = this.el.scrollTop(),
	          scrollLeft = this.el.scrollLeft();
	      this.trigger('scroll', this, scrollTop, scrollLeft);
	    }
	  }, {
	    key: "scrollTop",
	    value: function scrollTop(top) {
	      this.el.scrollTop(top);
	    }
	  }, {
	    key: "scrollLeft",
	    value: function scrollLeft(left) {
	      this.el.scrollLeft(left);
	    }
	  }]);

	  return Scroller;
	})(_FC.Emitter);

/***/ },
/* 10 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _BaseResourceGrid = __webpack_require__(12);

	var _BaseResourceTimeGrid2 = __webpack_require__(20);

	var _BaseResourceTimeGrid3 = _interopRequireDefault(_BaseResourceTimeGrid2);

	var _HeaderParser = __webpack_require__(21);

	var _HeaderParser2 = _interopRequireDefault(_HeaderParser);

	var _TimeGridParser = __webpack_require__(24);

	var _TimeGridParser2 = _interopRequireDefault(_TimeGridParser);

	var _SlatsLabel = __webpack_require__(26);

	var _SlatsLabel2 = _interopRequireDefault(_SlatsLabel);

	var _EventSkeleton = __webpack_require__(27);

	var _EventSkeleton2 = _interopRequireDefault(_EventSkeleton);

	var _objectAssign = __webpack_require__(10);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ResourceTimeGrid = (function (_BaseResourceTimeGrid) {
	  _inherits(ResourceTimeGrid, _BaseResourceTimeGrid);

	  function ResourceTimeGrid() {
	    _classCallCheck(this, ResourceTimeGrid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ResourceTimeGrid).apply(this, arguments));
	  }

	  _createClass(ResourceTimeGrid, [{
	    key: "renderDates",
	    value: function renderDates() {
	      this.el.html(this.renderHtml());
	      this.slatsLabelEl.html(this.renderSlatsLabel());
	      this.colEls = this.el.find('.fc-day');
	      this.slatEls = this.slatsLabelEl.find('.fc-slats-output tr');

	      this.colCoordCache = new _FC.CoordCache({
	        els: this.colEls,
	        isHorizontal: true
	      });
	      this.slatCoordCache = new _FC.CoordCache({
	        els: this.slatEls,
	        isVertical: true
	      });
	    }
	  }, {
	    key: "updateWidth",
	    value: function updateWidth() {
	      var bgWidth = this.el.children(".fc-bg").children("table").outerWidth();
	      this.el.width(bgWidth);
	      this.view.headContainerEl.width(bgWidth);
	      return bgWidth;
	    }
	  }, {
	    key: "setHeight",
	    value: function setHeight(totalHeight, isAuto) {
	      this.el.parent(".fc-scroll-bars").height(totalHeight);
	      this.slatsLabelEl.find(".fc-scroll-bars").height(totalHeight);
	    }
	  }, {
	    key: "renderHtml",
	    value: function renderHtml() {
	      var parser = new _TimeGridParser2.default(this);
	      return parser.parse();
	    }

	    /**
	     * Render the header parts.
	     * @override
	     * @return {String} Header Html.
	     */

	  }, {
	    key: "renderHeadHtml",
	    value: function renderHeadHtml() {
	      var parser = new _HeaderParser2.default(this);
	      return this.headerGrid = $(parser.parse());
	    }
	  }, {
	    key: "setSlatsLabelEl",
	    value: function setSlatsLabelEl(el) {
	      this.slatsLabelEl = el;
	    }
	  }, {
	    key: "renderSlatsLabel",
	    value: function renderSlatsLabel() {
	      return (0, _SlatsLabel2.default)({
	        slatCellsIterator: this.getSlatCells(),
	        widgetContentClass: this.view.widgetContentClass,
	        getSlatDateFormate: function getSlatDateFormate() {
	          return (0, _FC.htmlEscape)(this.date.format(this.labelFormat));
	        }
	      }, {
	        axisStyle: this.view.axisStyleAttr()
	      });
	    }
	  }, {
	    key: "getSlatCells",
	    value: function getSlatCells() {
	      var maxTime = this.maxTime;
	      var minTime = this.minTime;
	      var slotTime = moment.duration(+minTime);
	      var slatCells = [];

	      while (slotTime < maxTime) {
	        var slotDate = this.start.clone().time(slotTime);
	        var isLabeled = (0, _FC.isInt)((0, _FC.divideDurationByDuration)(slotTime, this.labelInterval));
	        slatCells.push({
	          date: slotDate,
	          isLabeled: isLabeled,
	          labelFormat: this.labelFormat
	        });
	        slotTime.add(this.slotDuration);
	      }
	      return slatCells;
	    }
	  }, {
	    key: "renderSegTable",
	    value: function renderSegTable(segs) {
	      var tableEl = $((0, _EventSkeleton2.default)({
	        className: "content",
	        limitColWidthAttr: this.getLimitColWidthAttr(),
	        totalColIterator: new Array(this.getTotalColCount())
	      })).children("table");

	      var trEl = $("<tr>");
	      var segCols = this.groupSegCols(segs);

	      this.computeSegVerticals(segs);
	      for (var col = 0; col < segCols.length; col++) {
	        var colSegs = segCols[col];
	        this.placeSlotSegs(colSegs);
	        var containerEl = $('<div class="fc-event-container"/>');
	        for (var i = 0; i < colSegs.length; i++) {
	          var seg = colSegs[i];
	          seg.el.css(this.generateSegPositionCss(seg));
	          if (seg.bottom - seg.top < 30) {
	            seg.el.addClass('fc-short');
	          }
	          containerEl.append(seg.el);
	        }
	        trEl.append($('<td/>').append(containerEl));
	      }
	      tableEl.children("tbody").append(trEl);

	      return tableEl;
	    }
	  }, {
	    key: "renderFill",
	    value: function renderFill(type, segs, className) {
	      if (segs.length) {

	        segs = this.renderFillSegEls(type, segs);
	        var segCols = this.groupSegCols(segs);

	        var _className = className || type.toLowerCase();
	        var skeletonEl = $((0, _EventSkeleton2.default)({
	          className: _className,
	          limitColWidthAttr: this.getLimitColWidthAttr(),
	          totalColIterator: new Array(this.getTotalColCount())
	        }));

	        var trEl = $('<tr>');

	        for (var col = 0; col < segCols.length; col++) {
	          var colSegs = segCols[col];
	          var tdEl = $('<td/>').appendTo(trEl);

	          if (colSegs.length) {
	            var containerEl = $('<div class="fc-' + _className + '-container"/>').appendTo(tdEl);
	            var dayDate = this.getCellDate(0, col); // row=0

	            for (var i = 0; i < colSegs.length; i++) {
	              var seg = colSegs[i];
	              containerEl.append(seg.el.css({
	                top: this.computeDateTop(seg.start, dayDate),
	                bottom: -this.computeDateTop(seg.end, dayDate) // the y position of the bottom edge
	              }));
	            }
	          }
	        }
	        skeletonEl.find("tbody").append(trEl);
	        this.el.append(skeletonEl);
	        this.elsByFill[type] = skeletonEl;
	      }
	      return segs;
	    }

	    /**
	     * @override
	     * @param  {Object} Span
	     * @return {Array} Segs
	     */

	  }, {
	    key: "spanToSegs",
	    value: function spanToSegs(span) {
	      var _this2 = this;

	      var rsCount = this.getAllowedResourcesColCount();
	      var segs = this.sliceRangeByTimes(span);
	      var rsSegs = [];
	      if (rsCount && this.view.type === "resourceDay") {
	        segs.forEach(function (sg) {
	          var resources = _this2.getAllowedResources();
	          resources.forEach(function (rs, i) {
	            if (!span.resourceId || span.resourceId === rs.id) {
	              var newSeg = (0, _objectAssign2.default)({}, sg);
	              newSeg.col = _this2.getColByRsAndDayIndex(i, sg.dayIndex);
	              rsSegs.push(newSeg);
	            }
	          });
	        });
	      } else {
	        rsSegs = _get(Object.getPrototypeOf(ResourceTimeGrid.prototype), "spanToSegs", this).call(this, span);
	      }

	      return rsSegs;
	    }
	  }]);

	  return ResourceTimeGrid;
	})(_BaseResourceTimeGrid3.default);

	exports.default = ResourceTimeGrid;

	(0, _objectAssign2.default)(ResourceTimeGrid.prototype, _BaseResourceGrid.BaseResourceGridMixin);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BaseResourceGridMixin = undefined;

	var _FC = __webpack_require__(3);

	var _HeadIntro = __webpack_require__(13);

	var _HeadIntro2 = _interopRequireDefault(_HeadIntro);

	var _NumberIntro = __webpack_require__(17);

	var _NumberIntro2 = _interopRequireDefault(_NumberIntro);

	var _BgIntro = __webpack_require__(18);

	var _BgIntro2 = _interopRequireDefault(_BgIntro);

	var _Intro = __webpack_require__(19);

	var _Intro2 = _interopRequireDefault(_Intro);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/* Extract common methods between ResourceDayGrid and ResourceTimeGrid */

	var BaseResourceGrid = (function (_Grid) {
	  _inherits(BaseResourceGrid, _Grid);

	  function BaseResourceGrid() {
	    _classCallCheck(this, BaseResourceGrid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseResourceGrid).apply(this, arguments));
	  }

	  _createClass(BaseResourceGrid, [{
	    key: "renderHeadIntroHtml",
	    value: function renderHeadIntroHtml() {
	      var view = this.view;
	      return view.weekNumbersVisible ? (0, _HeadIntro2.default)({
	        widgetHeaderClass: view.widgetHeaderClass,
	        weekNumberStyleAttr: view.weekNumberStyleAttr(),
	        weekNumberTitle: function weekNumberTitle() {
	          (0, _FC.htmlEscape)(view.opt('weekNumberTitle'));
	        }
	      }) : "";
	    }
	  }, {
	    key: "renderNumberIntroHtml",
	    value: function renderNumberIntroHtml(row) {
	      var view = this.view;
	      return view.weekNumbersVisible ? (0, _NumberIntro2.default)({
	        weekNumberStyleAttr: view.weekNumberStyleAttr(),
	        getCellDate: this.getCellDate(row, 0).format('w')
	      }) : "";
	    }
	  }, {
	    key: "renderBgIntroHtml",
	    value: function renderBgIntroHtml() {
	      var view = this.view;
	      return view.weekNumbersVisible ? (0, _BgIntro2.default)({
	        widgetContentClass: view.widgetContentClass,
	        weekNumberStyleAttr: view.weekNumberStyleAttr()
	      }) : "";
	    }
	  }, {
	    key: "renderIntroHtml",
	    value: function renderIntroHtml() {
	      var view = this.view;
	      return view.weekNumbersVisible ? (0, _Intro2.default)({
	        weekNumberStyleAttr: view.weekNumberStyleAttr()
	      }) : "";
	    }

	    /**
	     * Render resources by call DayTableMixin.updateDayTableCols.
	     * For rendering Grid columns by resources.
	     * Call it after fetch resources.
	     */

	  }, {
	    key: "renderResources",
	    value: function renderResources() {
	      _FC.DayTableMixin.updateDayTableCols.call(this);
	    }

	    /**
	     * Get resources.
	     * @return {Array} resources
	     */

	  }, {
	    key: "getAllowedResources",
	    value: function getAllowedResources() {
	      var calendar = this.view.calendar;
	      return calendar.getAllowedResources();
	    }

	    /**
	     * Get resources count.
	     * @return {Number}
	     */

	  }, {
	    key: "getAllowedResourcesCount",
	    value: function getAllowedResourcesCount() {
	      var resources = this.getAllowedResources();
	      return resources.length;
	    }
	  }, {
	    key: "getAllowedResourcesColCount",
	    value: function getAllowedResourcesColCount() {
	      return this.view.type === "resourceWeek" ? 1 : this.getAllowedResourcesCount();
	    }

	    /**
	     * Add resource id to the span(Moment).
	     * @override Grid.events.js
	     * @param  {Moment} span  Instance of Moment
	     * @param  {Object} event
	     * @return {Class}
	     */

	  }, {
	    key: "transformEventSpan",
	    value: function transformEventSpan(span, event) {
	      return span.resourceId = event['resourceId'];
	    }

	    /**
	     * Get resource by column number.
	     * @param  {Number} col
	     * @return {Object} resource
	     */

	  }, {
	    key: "getResourceByCol",
	    value: function getResourceByCol(col) {
	      var resources = this.getAllowedResources();
	      return resources[this.getResourceIndexByCol(col)];
	    }

	    /**
	     * Get resource index by col and daysPerRow(duration configuration).
	     * {this.colCnt} is from DayTableMixin.
	     * @param  {Number} col
	     * @return {Number}
	     */

	  }, {
	    key: "getResourceIndexByCol",
	    value: function getResourceIndexByCol(col) {
	      if (this.isRTL) {
	        col = this.colCnt - 1 - col;
	      }
	      return Math.floor(col / this.daysPerRow);
	    }
	  }, {
	    key: "getResourceIndexById",
	    value: function getResourceIndexById(id) {
	      var index = undefined,
	          resources = this.getAllowedResources();
	      resources.forEach(function (rs, i) {
	        if (rs.id === id) {
	          index = i;
	        }
	      });
	      return index;
	    }

	    /**
	     * Get grid column num by resource index and day index.
	     * @param  {Number} resourceIndex
	     * @param  {Number} dayIndex
	     * @return {Number}
	     */

	  }, {
	    key: "getColByRsAndDayIndex",
	    value: function getColByRsAndDayIndex(resourceIndex, dayIndex) {
	      var col;
	      col = resourceIndex * this.daysPerRow + dayIndex;
	      if (this.isRTL) {
	        col = this.colCnt - 1 - col;
	      }
	      return col;
	    }

	    /**
	     * get day index by grid column num.
	     * @param  {Number} col
	     * @return {Number}
	     */

	  }, {
	    key: "getDayIndexByCol",
	    value: function getDayIndexByCol(col) {
	      if (this.isRTL) {
	        col = this.colCnt - 1 - col;
	      }
	      return col % this.daysPerRow;
	    }

	    /**
	     * @override DayTableMixin.getColDayIndex.
	     * @param  {Number} col
	     * @return {Number}
	     */

	  }, {
	    key: "getColDayIndex",
	    value: function getColDayIndex(col) {
	      return this.getDayIndexByCol(col);
	    }
	  }, {
	    key: "getDayIndexBySpan",
	    value: function getDayIndexBySpan(span) {
	      var _this2 = this;

	      var dayIndex = 0;
	      this.dayDates.forEach(function (dayDate, index) {
	        if (span.start >= dayDate.clone().time(_this2.minTime) && span.start <= dayDate.clone().time(_this2.maxTime)) {
	          dayIndex = index;
	        }
	      });
	      return dayIndex;
	    }

	    /**
	     * Compute actual rendered grid column count by rousources
	     * and daysPerRow(duration configuration).
	     * @override DayTableMixin.computeColCnt
	     * @return {Number}
	     */

	  }, {
	    key: "getRenderedColCount",
	    value: function getRenderedColCount() {
	      var rsCount = this.getAllowedResourcesColCount();
	      return (rsCount || 1) * this.daysPerRow;
	    }

	    /**
	     * Compute the allowed selection span on grid.
	     * Don't allow selecting span accross resources.
	     * @override Grid.prototype.computeSelectionSpan
	     * @param  {Object} startSpan
	     * @param  {Object} endSpan
	     * @return {Object}
	     */

	  }, {
	    key: "computeSelectionSpan",
	    value: function computeSelectionSpan(startSpan, endSpan) {
	      var selectionSpan;

	      selectionSpan = _get(Object.getPrototypeOf(BaseResourceGrid.prototype), "computeSelectionSpan", this).call(this, startSpan, endSpan);
	      if (selectionSpan) {
	        selectionSpan.resourceId = startSpan.resourceId;
	      }
	      return selectionSpan;
	    }

	    /**
	     * @override
	     * @return {Array} Segs
	     */

	  }, {
	    key: "renderFgEvents",
	    value: function renderFgEvents(events) {
	      var calendar = this.view.calendar;

	      var rsEvents = [];
	      events.forEach(function (evt) {
	        var rsId = evt['resourceId'];
	        if (rsId && calendar.getAllowedResourceById(rsId)) {
	          rsEvents.push(evt);
	        }
	      });

	      return _get(Object.getPrototypeOf(BaseResourceGrid.prototype), "renderFgEvents", this).call(this, rsEvents);
	    }

	    /**
	     * Compute actual rendered grid column count.
	     * @override DayTableMixin.computeColCnt
	     * @return {Number}
	     */

	  }, {
	    key: "computeColCnt",
	    value: function computeColCnt() {
	      return this.getRenderedColCount();
	    }
	  }, {
	    key: "bookendCells",
	    value: function bookendCells() {}
	  }, {
	    key: "getTotalColCount",
	    value: function getTotalColCount() {
	      var resourceCount = this.getAllowedResourcesColCount(),
	          daysCount = this.dayDates.length;
	      return resourceCount ? resourceCount * daysCount : daysCount;
	    }
	  }, {
	    key: "getLimitColWidthAttr",
	    value: function getLimitColWidthAttr() {
	      var limitColWidth = this.view.opt("limitColWidth");
	      return limitColWidth ? "width=" + limitColWidth : "";
	    }

	    // updateDayTable() {
	    //   let calendar = this.view.calendar;
	    //   this.dayDates = [
	    //     calendar.moment("2015-12-14"),
	    //     calendar.moment("2015-12-17"),
	    //     calendar.moment("2015-12-19")
	    //   ];
	    // 	this.dayIndices = [0, 1, 2];
	    // 	this.daysPerRow = 3;
	    // 	this.rowCnt = 1;
	    //
	    // 	this.updateDayTableCols();
	    // }

	  }]);

	  return BaseResourceGrid;
	})(_FC.Grid);

	exports.default = BaseResourceGrid;
	var BaseResourceGridMixin = exports.BaseResourceGridMixin = (0, _FC.createProtoMixinObject)(BaseResourceGrid.prototype, ["renderHeadIntroHtml", "renderNumberIntroHtml", "renderBgIntroHtml", "renderIntroHtml", "renderResources", "getAllowedResources", "getAllowedResourcesCount", "getAllowedResourcesColCount", "transformEventSpan", "getResourceByCol", "getResourceIndexByCol", "getResourceIndexById", "getColByRsAndDayIndex", "getDayIndexByCol", "getColDayIndex", "getDayIndexBySpan", "getRenderedColCount", "computeSelectionSpan", "renderFgEvents", "computeColCnt", "bookendCells", "getTotalColCount", "getLimitColWidthAttr" /*,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  "updateDayTable"*/
	]);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<th class=\"fc-week-number ");t.b(t.v(t.f("widgetHeaderClass",c,p,0)));t.b("\" ");t.b(t.t(t.f("weekNumberStyleAttr",c,p,0)));t.b(">");t.b("\n" + i);t.b("  <span>");t.b(t.v(t.f("weekNumberTitle",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("</th>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<th class=\"fc-week-number {{widgetHeaderClass}}\" {{{weekNumberStyleAttr}}}>\n  <span>{{weekNumberTitle}}</span>\n</th>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	// This file is for use with Node.js. See dist/ for browser files.

	var Hogan = __webpack_require__(15);
	Hogan.Template = __webpack_require__(16).Template;
	Hogan.template = Hogan.Template;
	module.exports = Hogan;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	(function (Hogan) {
	  // Setup regex  assignments
	  // remove whitespace according to Mustache spec
	  var rIsWhitespace = /\S/,
	      rQuot = /\"/g,
	      rNewline =  /\n/g,
	      rCr = /\r/g,
	      rSlash = /\\/g,
	      rLineSep = /\u2028/,
	      rParagraphSep = /\u2029/;

	  Hogan.tags = {
	    '#': 1, '^': 2, '<': 3, '$': 4,
	    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
	    '{': 10, '&': 11, '_t': 12
	  };

	  Hogan.scan = function scan(text, delimiters) {
	    var len = text.length,
	        IN_TEXT = 0,
	        IN_TAG_TYPE = 1,
	        IN_TAG = 2,
	        state = IN_TEXT,
	        tagType = null,
	        tag = null,
	        buf = '',
	        tokens = [],
	        seenTag = false,
	        i = 0,
	        lineStart = 0,
	        otag = '{{',
	        ctag = '}}';

	    function addBuf() {
	      if (buf.length > 0) {
	        tokens.push({tag: '_t', text: new String(buf)});
	        buf = '';
	      }
	    }

	    function lineIsWhitespace() {
	      var isAllWhitespace = true;
	      for (var j = lineStart; j < tokens.length; j++) {
	        isAllWhitespace =
	          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
	          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
	        if (!isAllWhitespace) {
	          return false;
	        }
	      }

	      return isAllWhitespace;
	    }

	    function filterLine(haveSeenTag, noNewLine) {
	      addBuf();

	      if (haveSeenTag && lineIsWhitespace()) {
	        for (var j = lineStart, next; j < tokens.length; j++) {
	          if (tokens[j].text) {
	            if ((next = tokens[j+1]) && next.tag == '>') {
	              // set indent to token value
	              next.indent = tokens[j].text.toString()
	            }
	            tokens.splice(j, 1);
	          }
	        }
	      } else if (!noNewLine) {
	        tokens.push({tag:'\n'});
	      }

	      seenTag = false;
	      lineStart = tokens.length;
	    }

	    function changeDelimiters(text, index) {
	      var close = '=' + ctag,
	          closeIndex = text.indexOf(close, index),
	          delimiters = trim(
	            text.substring(text.indexOf('=', index) + 1, closeIndex)
	          ).split(' ');

	      otag = delimiters[0];
	      ctag = delimiters[delimiters.length - 1];

	      return closeIndex + close.length - 1;
	    }

	    if (delimiters) {
	      delimiters = delimiters.split(' ');
	      otag = delimiters[0];
	      ctag = delimiters[1];
	    }

	    for (i = 0; i < len; i++) {
	      if (state == IN_TEXT) {
	        if (tagChange(otag, text, i)) {
	          --i;
	          addBuf();
	          state = IN_TAG_TYPE;
	        } else {
	          if (text.charAt(i) == '\n') {
	            filterLine(seenTag);
	          } else {
	            buf += text.charAt(i);
	          }
	        }
	      } else if (state == IN_TAG_TYPE) {
	        i += otag.length - 1;
	        tag = Hogan.tags[text.charAt(i + 1)];
	        tagType = tag ? text.charAt(i + 1) : '_v';
	        if (tagType == '=') {
	          i = changeDelimiters(text, i);
	          state = IN_TEXT;
	        } else {
	          if (tag) {
	            i++;
	          }
	          state = IN_TAG;
	        }
	        seenTag = i;
	      } else {
	        if (tagChange(ctag, text, i)) {
	          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
	                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
	          buf = '';
	          i += ctag.length - 1;
	          state = IN_TEXT;
	          if (tagType == '{') {
	            if (ctag == '}}') {
	              i++;
	            } else {
	              cleanTripleStache(tokens[tokens.length - 1]);
	            }
	          }
	        } else {
	          buf += text.charAt(i);
	        }
	      }
	    }

	    filterLine(seenTag, true);

	    return tokens;
	  }

	  function cleanTripleStache(token) {
	    if (token.n.substr(token.n.length - 1) === '}') {
	      token.n = token.n.substring(0, token.n.length - 1);
	    }
	  }

	  function trim(s) {
	    if (s.trim) {
	      return s.trim();
	    }

	    return s.replace(/^\s*|\s*$/g, '');
	  }

	  function tagChange(tag, text, index) {
	    if (text.charAt(index) != tag.charAt(0)) {
	      return false;
	    }

	    for (var i = 1, l = tag.length; i < l; i++) {
	      if (text.charAt(index + i) != tag.charAt(i)) {
	        return false;
	      }
	    }

	    return true;
	  }

	  // the tags allowed inside super templates
	  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

	  function buildTree(tokens, kind, stack, customTags) {
	    var instructions = [],
	        opener = null,
	        tail = null,
	        token = null;

	    tail = stack[stack.length - 1];

	    while (tokens.length > 0) {
	      token = tokens.shift();

	      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
	        throw new Error('Illegal content in < super tag.');
	      }

	      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
	        stack.push(token);
	        token.nodes = buildTree(tokens, token.tag, stack, customTags);
	      } else if (token.tag == '/') {
	        if (stack.length === 0) {
	          throw new Error('Closing tag without opener: /' + token.n);
	        }
	        opener = stack.pop();
	        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
	          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
	        }
	        opener.end = token.i;
	        return instructions;
	      } else if (token.tag == '\n') {
	        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
	      }

	      instructions.push(token);
	    }

	    if (stack.length > 0) {
	      throw new Error('missing closing tag: ' + stack.pop().n);
	    }

	    return instructions;
	  }

	  function isOpener(token, tags) {
	    for (var i = 0, l = tags.length; i < l; i++) {
	      if (tags[i].o == token.n) {
	        token.tag = '#';
	        return true;
	      }
	    }
	  }

	  function isCloser(close, open, tags) {
	    for (var i = 0, l = tags.length; i < l; i++) {
	      if (tags[i].c == close && tags[i].o == open) {
	        return true;
	      }
	    }
	  }

	  function stringifySubstitutions(obj) {
	    var items = [];
	    for (var key in obj) {
	      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
	    }
	    return "{ " + items.join(",") + " }";
	  }

	  function stringifyPartials(codeObj) {
	    var partials = [];
	    for (var key in codeObj.partials) {
	      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
	    }
	    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
	  }

	  Hogan.stringify = function(codeObj, text, options) {
	    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
	  }

	  var serialNo = 0;
	  Hogan.generate = function(tree, text, options) {
	    serialNo = 0;
	    var context = { code: '', subs: {}, partials: {} };
	    Hogan.walk(tree, context);

	    if (options.asString) {
	      return this.stringify(context, text, options);
	    }

	    return this.makeTemplate(context, text, options);
	  }

	  Hogan.wrapMain = function(code) {
	    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
	  }

	  Hogan.template = Hogan.Template;

	  Hogan.makeTemplate = function(codeObj, text, options) {
	    var template = this.makePartials(codeObj);
	    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
	    return new this.template(template, text, this, options);
	  }

	  Hogan.makePartials = function(codeObj) {
	    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
	    for (key in template.partials) {
	      template.partials[key] = this.makePartials(template.partials[key]);
	    }
	    for (key in codeObj.subs) {
	      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
	    }
	    return template;
	  }

	  function esc(s) {
	    return s.replace(rSlash, '\\\\')
	            .replace(rQuot, '\\\"')
	            .replace(rNewline, '\\n')
	            .replace(rCr, '\\r')
	            .replace(rLineSep, '\\u2028')
	            .replace(rParagraphSep, '\\u2029');
	  }

	  function chooseMethod(s) {
	    return (~s.indexOf('.')) ? 'd' : 'f';
	  }

	  function createPartial(node, context) {
	    var prefix = "<" + (context.prefix || "");
	    var sym = prefix + node.n + serialNo++;
	    context.partials[sym] = {name: node.n, partials: {}};
	    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
	    return sym;
	  }

	  Hogan.codegen = {
	    '#': function(node, context) {
	      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
	                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
	                      't.rs(c,p,' + 'function(c,p,t){';
	      Hogan.walk(node.nodes, context);
	      context.code += '});c.pop();}';
	    },

	    '^': function(node, context) {
	      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
	      Hogan.walk(node.nodes, context);
	      context.code += '};';
	    },

	    '>': createPartial,
	    '<': function(node, context) {
	      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
	      Hogan.walk(node.nodes, ctx);
	      var template = context.partials[createPartial(node, context)];
	      template.subs = ctx.subs;
	      template.partials = ctx.partials;
	    },

	    '$': function(node, context) {
	      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
	      Hogan.walk(node.nodes, ctx);
	      context.subs[node.n] = ctx.code;
	      if (!context.inPartial) {
	        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
	      }
	    },

	    '\n': function(node, context) {
	      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
	    },

	    '_v': function(node, context) {
	      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
	    },

	    '_t': function(node, context) {
	      context.code += write('"' + esc(node.text) + '"');
	    },

	    '{': tripleStache,

	    '&': tripleStache
	  }

	  function tripleStache(node, context) {
	    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
	  }

	  function write(s) {
	    return 't.b(' + s + ');';
	  }

	  Hogan.walk = function(nodelist, context) {
	    var func;
	    for (var i = 0, l = nodelist.length; i < l; i++) {
	      func = Hogan.codegen[nodelist[i].tag];
	      func && func(nodelist[i], context);
	    }
	    return context;
	  }

	  Hogan.parse = function(tokens, text, options) {
	    options = options || {};
	    return buildTree(tokens, '', [], options.sectionTags || []);
	  }

	  Hogan.cache = {};

	  Hogan.cacheKey = function(text, options) {
	    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
	  }

	  Hogan.compile = function(text, options) {
	    options = options || {};
	    var key = Hogan.cacheKey(text, options);
	    var template = this.cache[key];

	    if (template) {
	      var partials = template.partials;
	      for (var name in partials) {
	        delete partials[name].instance;
	      }
	      return template;
	    }

	    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
	    return this.cache[key] = template;
	  }
	})( true ? exports : Hogan);


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	var Hogan = {};

	(function (Hogan) {
	  Hogan.Template = function (codeObj, text, compiler, options) {
	    codeObj = codeObj || {};
	    this.r = codeObj.code || this.r;
	    this.c = compiler;
	    this.options = options || {};
	    this.text = text || '';
	    this.partials = codeObj.partials || {};
	    this.subs = codeObj.subs || {};
	    this.buf = '';
	  }

	  Hogan.Template.prototype = {
	    // render: replaced by generated code.
	    r: function (context, partials, indent) { return ''; },

	    // variable escaping
	    v: hoganEscape,

	    // triple stache
	    t: coerceToString,

	    render: function render(context, partials, indent) {
	      return this.ri([context], partials || {}, indent);
	    },

	    // render internal -- a hook for overrides that catches partials too
	    ri: function (context, partials, indent) {
	      return this.r(context, partials, indent);
	    },

	    // ensurePartial
	    ep: function(symbol, partials) {
	      var partial = this.partials[symbol];

	      // check to see that if we've instantiated this partial before
	      var template = partials[partial.name];
	      if (partial.instance && partial.base == template) {
	        return partial.instance;
	      }

	      if (typeof template == 'string') {
	        if (!this.c) {
	          throw new Error("No compiler available.");
	        }
	        template = this.c.compile(template, this.options);
	      }

	      if (!template) {
	        return null;
	      }

	      // We use this to check whether the partials dictionary has changed
	      this.partials[symbol].base = template;

	      if (partial.subs) {
	        // Make sure we consider parent template now
	        if (!partials.stackText) partials.stackText = {};
	        for (key in partial.subs) {
	          if (!partials.stackText[key]) {
	            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
	          }
	        }
	        template = createSpecializedPartial(template, partial.subs, partial.partials,
	          this.stackSubs, this.stackPartials, partials.stackText);
	      }
	      this.partials[symbol].instance = template;

	      return template;
	    },

	    // tries to find a partial in the current scope and render it
	    rp: function(symbol, context, partials, indent) {
	      var partial = this.ep(symbol, partials);
	      if (!partial) {
	        return '';
	      }

	      return partial.ri(context, partials, indent);
	    },

	    // render a section
	    rs: function(context, partials, section) {
	      var tail = context[context.length - 1];

	      if (!isArray(tail)) {
	        section(context, partials, this);
	        return;
	      }

	      for (var i = 0; i < tail.length; i++) {
	        context.push(tail[i]);
	        section(context, partials, this);
	        context.pop();
	      }
	    },

	    // maybe start a section
	    s: function(val, ctx, partials, inverted, start, end, tags) {
	      var pass;

	      if (isArray(val) && val.length === 0) {
	        return false;
	      }

	      if (typeof val == 'function') {
	        val = this.ms(val, ctx, partials, inverted, start, end, tags);
	      }

	      pass = !!val;

	      if (!inverted && pass && ctx) {
	        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
	      }

	      return pass;
	    },

	    // find values with dotted names
	    d: function(key, ctx, partials, returnFound) {
	      var found,
	          names = key.split('.'),
	          val = this.f(names[0], ctx, partials, returnFound),
	          doModelGet = this.options.modelGet,
	          cx = null;

	      if (key === '.' && isArray(ctx[ctx.length - 2])) {
	        val = ctx[ctx.length - 1];
	      } else {
	        for (var i = 1; i < names.length; i++) {
	          found = findInScope(names[i], val, doModelGet);
	          if (found !== undefined) {
	            cx = val;
	            val = found;
	          } else {
	            val = '';
	          }
	        }
	      }

	      if (returnFound && !val) {
	        return false;
	      }

	      if (!returnFound && typeof val == 'function') {
	        ctx.push(cx);
	        val = this.mv(val, ctx, partials);
	        ctx.pop();
	      }

	      return val;
	    },

	    // find values with normal names
	    f: function(key, ctx, partials, returnFound) {
	      var val = false,
	          v = null,
	          found = false,
	          doModelGet = this.options.modelGet;

	      for (var i = ctx.length - 1; i >= 0; i--) {
	        v = ctx[i];
	        val = findInScope(key, v, doModelGet);
	        if (val !== undefined) {
	          found = true;
	          break;
	        }
	      }

	      if (!found) {
	        return (returnFound) ? false : "";
	      }

	      if (!returnFound && typeof val == 'function') {
	        val = this.mv(val, ctx, partials);
	      }

	      return val;
	    },

	    // higher order templates
	    ls: function(func, cx, partials, text, tags) {
	      var oldTags = this.options.delimiters;

	      this.options.delimiters = tags;
	      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
	      this.options.delimiters = oldTags;

	      return false;
	    },

	    // compile text
	    ct: function(text, cx, partials) {
	      if (this.options.disableLambda) {
	        throw new Error('Lambda features disabled.');
	      }
	      return this.c.compile(text, this.options).render(cx, partials);
	    },

	    // template result buffering
	    b: function(s) { this.buf += s; },

	    fl: function() { var r = this.buf; this.buf = ''; return r; },

	    // method replace section
	    ms: function(func, ctx, partials, inverted, start, end, tags) {
	      var textSource,
	          cx = ctx[ctx.length - 1],
	          result = func.call(cx);

	      if (typeof result == 'function') {
	        if (inverted) {
	          return true;
	        } else {
	          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
	          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
	        }
	      }

	      return result;
	    },

	    // method replace variable
	    mv: function(func, ctx, partials) {
	      var cx = ctx[ctx.length - 1];
	      var result = func.call(cx);

	      if (typeof result == 'function') {
	        return this.ct(coerceToString(result.call(cx)), cx, partials);
	      }

	      return result;
	    },

	    sub: function(name, context, partials, indent) {
	      var f = this.subs[name];
	      if (f) {
	        this.activeSub = name;
	        f(context, partials, this, indent);
	        this.activeSub = false;
	      }
	    }

	  };

	  //Find a key in an object
	  function findInScope(key, scope, doModelGet) {
	    var val;

	    if (scope && typeof scope == 'object') {

	      if (scope[key] !== undefined) {
	        val = scope[key];

	      // try lookup with get for backbone or similar model data
	      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
	        val = scope.get(key);
	      }
	    }

	    return val;
	  }

	  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
	    function PartialTemplate() {};
	    PartialTemplate.prototype = instance;
	    function Substitutions() {};
	    Substitutions.prototype = instance.subs;
	    var key;
	    var partial = new PartialTemplate();
	    partial.subs = new Substitutions();
	    partial.subsText = {};  //hehe. substext.
	    partial.buf = '';

	    stackSubs = stackSubs || {};
	    partial.stackSubs = stackSubs;
	    partial.subsText = stackText;
	    for (key in subs) {
	      if (!stackSubs[key]) stackSubs[key] = subs[key];
	    }
	    for (key in stackSubs) {
	      partial.subs[key] = stackSubs[key];
	    }

	    stackPartials = stackPartials || {};
	    partial.stackPartials = stackPartials;
	    for (key in partials) {
	      if (!stackPartials[key]) stackPartials[key] = partials[key];
	    }
	    for (key in stackPartials) {
	      partial.partials[key] = stackPartials[key];
	    }

	    return partial;
	  }

	  var rAmp = /&/g,
	      rLt = /</g,
	      rGt = />/g,
	      rApos = /\'/g,
	      rQuot = /\"/g,
	      hChars = /[&<>\"\']/;

	  function coerceToString(val) {
	    return String((val === null || val === undefined) ? '' : val);
	  }

	  function hoganEscape(str) {
	    str = coerceToString(str);
	    return hChars.test(str) ?
	      str
	        .replace(rAmp, '&amp;')
	        .replace(rLt, '&lt;')
	        .replace(rGt, '&gt;')
	        .replace(rApos, '&#39;')
	        .replace(rQuot, '&quot;') :
	      str;
	  }

	  var isArray = Array.isArray || function(a) {
	    return Object.prototype.toString.call(a) === '[object Array]';
	  };

	})( true ? exports : Hogan);


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<td class=\"fc-week-number\" ");t.b(t.t(t.f("weekNumberStyleAttr",c,p,0)));t.b(">");t.b("\n" + i);t.b("  <span>");t.b(t.v(t.f("weekNumberTitle",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("</td>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<td class=\"fc-week-number\" {{{weekNumberStyleAttr}}}>\n  <span>{{weekNumberTitle}}</span>\n</td>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<td class=\"fc-week-number ");t.b(t.v(t.f("widgetContentClass",c,p,0)));t.b("\">");t.b("\n" + i);t.b("  <span>");t.b(t.v(t.f("weekNumberTitle",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("</td>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<td class=\"fc-week-number {{widgetContentClass}}\">\n  <span>{{weekNumberTitle}}</span>\n</td>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<td class=\"fc-week-number\" ");t.b(t.t(t.f("weekNumberStyleAttr",c,p,0)));t.b("></td>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<td class=\"fc-week-number\" {{{weekNumberStyleAttr}}}></td>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _objectAssign = __webpack_require__(10);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseResourceTimeGrid = (function (_TimeGrid) {
	  _inherits(BaseResourceTimeGrid, _TimeGrid);

	  function BaseResourceTimeGrid() {
	    _classCallCheck(this, BaseResourceTimeGrid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseResourceTimeGrid).apply(this, arguments));
	  }

	  _createClass(BaseResourceTimeGrid, [{
	    key: "spanToSegs",

	    /**
	     * @override
	     * @param  {Object} Span
	     * @return {Array} Segs
	     */
	    value: function spanToSegs(span) {
	      var segs = this.sliceRangeByTimes(span);
	      segs.forEach(function (sg) {
	        sg.col = sg.dayIndex;
	      });
	      return segs;
	    }
	  }, {
	    key: "queryHit",
	    value: function queryHit(leftOffset, topOffset) {
	      var hit = _get(Object.getPrototypeOf(BaseResourceTimeGrid.prototype), "queryHit", this).call(this, leftOffset, topOffset);
	      return hit ? (0, _objectAssign2.default)(hit, {
	        evtMouseX: leftOffset,
	        evtMouseY: topOffset
	      }) : hit;
	    }

	    /**
	     * Add resourse id to Span.
	     * @override
	     * @param  {Object} hit
	     * @return {Object} Span
	     */

	  }, {
	    key: "getHitSpan",
	    value: function getHitSpan(hit) {
	      var span = _get(Object.getPrototypeOf(BaseResourceTimeGrid.prototype), "getHitSpan", this).call(this, hit);
	      if (this.getAllowedResourcesColCount()) {
	        span.resourceId = this.getResourceByCol(hit.col).id;
	      }
	      (0, _objectAssign2.default)(span, hit);
	      return span;
	    }
	  }, {
	    key: "computeSelection",
	    value: function computeSelection(startSpan, endSpan) {

	      var startSpanStartTime = startSpan.start.time(),
	          endSpanStartTime = endSpan.start.time(),
	          startSpanEndTime = startSpan.end.time(),
	          endSpanEndTime = endSpan.end.time();

	      var startTime = startSpanStartTime,
	          endTime = endSpanEndTime;

	      var isInvertSection = startSpanStartTime - endSpanStartTime > 0;
	      if (!isInvertSection) {
	        startTime = startSpanStartTime;
	        endTime = endSpanEndTime;
	      } else {
	        startTime = endSpanStartTime;
	        endTime = startSpanEndTime;
	      }

	      var startCol = Math.min(startSpan.col, endSpan.col),
	          endCol = Math.max(startSpan.col, endSpan.col);

	      var segs = [];
	      for (var col = startCol; col <= endCol; col++) {
	        var dayIndex = this.getDayIndexByCol(col),
	            dayDate = this.dayDates[dayIndex];
	        segs.push({
	          col: col,
	          isStart: true,
	          isEnd: true,
	          start: dayDate.clone().time(startTime),
	          end: dayDate.clone().time(endTime),
	          resource: this.getResourceByCol(col)
	        });
	      }

	      if (this.view.opt("selectWireframeShow")) {
	        if (!this.selectionWireFrameEl) {
	          this.createSelectionWireFrame();
	        }
	        this.updateSelectionWireFrame(startSpan, endSpan);
	      }

	      return segs;
	    }
	  }, {
	    key: "renderSelection",
	    value: function renderSelection(segs) {
	      this.renderHighlight(segs);
	      return segs;
	    }
	  }, {
	    key: "renderHighlight",
	    value: function renderHighlight(segs) {
	      this.renderFill('highlight', segs);
	    }
	  }, {
	    key: "createSelectionWireFrame",
	    value: function createSelectionWireFrame() {
	      this.selectionWireFrameEl = $("<div>").addClass("selection-wireframe").css("position", "absolute");
	      this.el.append(this.selectionWireFrameEl);
	    }
	  }, {
	    key: "updateSelectionWireFrame",
	    value: function updateSelectionWireFrame(startSpan, endSpan) {
	      var origin = this.selectionWireFrameEl.offsetParent().offset();
	      var left = startSpan.evtMouseX > endSpan.evtMouseX ? endSpan.evtMouseX : startSpan.evtMouseX,
	          top = startSpan.evtMouseY > endSpan.evtMouseY ? endSpan.evtMouseY : startSpan.evtMouseY;
	      this.selectionWireFrameEl.css({
	        "top": top - origin.top + "px",
	        "left": left - origin.left + "px",
	        "width": Math.abs(startSpan.evtMouseX - endSpan.evtMouseX) + "px",
	        "height": Math.abs(startSpan.evtMouseY - endSpan.evtMouseY) + "px",
	        "visibility": "visible"
	      });
	    }
	  }, {
	    key: "unrenderHighlight",
	    value: function unrenderHighlight() {
	      _get(Object.getPrototypeOf(BaseResourceTimeGrid.prototype), "unrenderHighlight", this).call(this);
	      this.hideWireFrame();
	    }
	  }, {
	    key: "hideWireFrame",
	    value: function hideWireFrame() {
	      if (this.selectionWireFrameEl) {
	        this.selectionWireFrameEl.css("visibility", "hidden");
	      }
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      if (this.selectionWireFrameEl) {
	        this.selectionWireFrameEl.remove();
	        this.selectionWireFrameEl = null;
	      }
	    }
	  }]);

	  return BaseResourceTimeGrid;
	})(_FC.TimeGrid);

	exports.default = BaseResourceTimeGrid;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _TempParser2 = __webpack_require__(22);

	var _TempParser3 = _interopRequireDefault(_TempParser2);

	var _Header = __webpack_require__(23);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HeaderParser = (function (_TempParser) {
	  _inherits(HeaderParser, _TempParser);

	  /**
	   * Us this.ds to organize parse data.
	   * @constructor
	   * @override
	   * @param  {Object?Class}
	   */

	  function HeaderParser(rsGridContext) {
	    _classCallCheck(this, HeaderParser);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderParser).call(this, rsGridContext));

	    _this.view = _this.ds.view;
	    _this.daysMoment = _this.ds.dayDates;
	    _this.resources = _this.getAllowedResources();
	    _this.widgetHeaderClass = _this.view.widgetHeaderClass;
	    _this.rsEmptyArray = new Array(_this.ds.getAllowedResourcesColCount());
	    _this.limitColWidthAttr = _this.ds.getLimitColWidthAttr();
	    _this.totalColIterator = new Array(_this.ds.getTotalColCount());
	    return _this;
	  }

	  /**
	   * Parse Header.html
	   * @override
	   * @return {String} HTML
	   */

	  _createClass(HeaderParser, [{
	    key: "parse",
	    value: function parse() {
	      return (0, _Header2.default)(this, {
	        colspan: this.getColspan()
	      });
	    }
	  }, {
	    key: "hasDayRow",
	    value: function hasDayRow() {
	      return this.ds.daysPerRow > 1 || !this.hasResources();
	    }
	  }, {
	    key: "hasResources",
	    value: function hasResources() {
	      return this.ds.getAllowedResourcesColCount() > 0;
	    }
	  }, {
	    key: "getResourceHtml",
	    value: function getResourceHtml() {
	      var resourceHtml = this.resource.title;
	      if ($.isFunction(this.render)) {
	        var retrunHtml = this.render(this.resource, this.isAllowed);
	        resourceHtml = retrunHtml ? retrunHtml : resourceHtml;
	      }
	      return resourceHtml;
	    }
	  }, {
	    key: "getAllowedResources",
	    value: function getAllowedResources() {
	      var _this2 = this;

	      var returnResources = [],
	          resources = this.view.calendar.getResources();
	      resources.forEach(function (rs) {
	        returnResources.push({
	          resource: rs,
	          isAllowed: true,
	          render: _this2.view.opt("renderRsHeaderItem")
	        });
	      });

	      if (this.isRTL) {
	        returnResources = returnResources.reverse();
	      }
	      return returnResources;
	    }
	  }, {
	    key: "getColspan",
	    value: function getColspan() {
	      var daysPerRow = this.ds.daysPerRow;
	      return daysPerRow > 1 ? "colspan='" + daysPerRow + "'" : "";
	    }
	  }, {
	    key: "dateFormat",
	    value: function dateFormat() {
	      return (0, _FC.htmlEscape)(this.format("ddd"));
	    }
	  }]);

	  return HeaderParser;
	})(_TempParser3.default);

	exports.default = HeaderParser;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TempParser = (function () {

	  /**
	   * TempParse organizes parse data form any Object or Class.
	   * @constructor
	   * @param  {Object?Class} dataSourct
	   */

	  function TempParser(dataSource) {
	    _classCallCheck(this, TempParser);

	    this.ds = dataSource;
	  }
	  /**
	   * Abstract method.
	   * Use Mustaches as template parser.
	   * @param  {Function} template
	   */

	  _createClass(TempParser, [{
	    key: "parse",
	    value: function parse(template) {}
	  }]);

	  return TempParser;
	})();

	exports.default = TempParser;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"fc-row fc-widget-header\">");t.b("\n" + i);t.b("  <table>");t.b("\n" + i);t.b("    <colgroup>");t.b("\n" + i);if(t.s(t.f("totalColIterator",c,p,1),c,p,0,88,133,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <col ");t.b(t.v(t.f("limitColWidthAttr",c,p,0)));t.b("></col>");t.b("\n" + i);});c.pop();}t.b("    </colgroup>");t.b("\n" + i);t.b("    <thead>");t.b("\n" + i);if(t.s(t.f("hasResources",c,p,1),c,p,0,204,345,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <tr>");t.b("\n" + i);if(t.s(t.f("resources",c,p,1),c,p,0,236,314,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <th class=\"fc-rs-cell\" ");t.b(t.rp("<colspan0",c,p,""));t.b(">");t.b(t.t(t.f("getResourceHtml",c,p,0)));t.b("</th>");t.b("\n" + i);});c.pop();}t.b("      </tr>");t.b("\n" + i);});c.pop();}if(t.s(t.f("hasDayRow",c,p,1),c,p,0,381,787,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <tr>");t.b("\n" + i);if(t.s(t.f("rsEmptyArray",c,p,1),c,p,0,416,564,"{{ }}")){t.rs(c,p,function(c,p,t){if(t.s(t.f("daysMoment",c,p,1),c,p,0,438,542,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <th class=\"fc-rs-day-header ");t.b(t.v(t.f("widgetHeaderClass",c,p,0)));t.b(" fc-");t.b(t.v(t.f("dateFormat",c,p,0)));t.b("\">");t.b(t.v(t.f("dateFormat",c,p,0)));t.b("</th>");t.b("\n" + i);});c.pop();}});c.pop();}if(!t.s(t.f("hasResources",c,p,1),c,p,1,0,0,"")){if(t.s(t.f("daysMoment",c,p,1),c,p,0,627,731,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <th class=\"fc-rs-day-header ");t.b(t.v(t.f("widgetHeaderClass",c,p,0)));t.b(" fc-");t.b(t.v(t.f("dateFormat",c,p,0)));t.b("\">");t.b(t.v(t.f("dateFormat",c,p,0)));t.b("</th>");t.b("\n" + i);});c.pop();}};t.b("      </tr>");t.b("\n" + i);});c.pop();}t.b("    </thead>");t.b("\n" + i);t.b("  </table>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<colspan0":{name:"colspan", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"fc-row fc-widget-header\">\n  <table>\n    <colgroup>\n    {{#totalColIterator}}\n      <col {{limitColWidthAttr}}></col>\n    {{/totalColIterator}}\n    </colgroup>\n    <thead>\n    {{#hasResources}}\n      <tr>\n      {{#resources}}\n        <th class=\"fc-rs-cell\" {{>colspan}}>{{{getResourceHtml}}}</th>\n      {{/resources}}\n      </tr>\n    {{/hasResources}}\n    {{#hasDayRow}}\n      <tr>\n      {{#rsEmptyArray}}\n      {{#daysMoment}}\n        <th class=\"fc-rs-day-header {{widgetHeaderClass}} fc-{{dateFormat}}\">{{dateFormat}}</th>\n      {{/daysMoment}}\n      {{/rsEmptyArray}}\n      {{^hasResources}}\n      {{#daysMoment}}\n        <th class=\"fc-rs-day-header {{widgetHeaderClass}} fc-{{dateFormat}}\">{{dateFormat}}</th>\n      {{/daysMoment}}\n      {{/hasResources}}\n      </tr>\n    {{/hasDayRow}}\n    </thead>\n  </table>\n</div>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _TempParser2 = __webpack_require__(22);

	var _TempParser3 = _interopRequireDefault(_TempParser2);

	var _TimeGrid = __webpack_require__(25);

	var _TimeGrid2 = _interopRequireDefault(_TimeGrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TimeGridParser = (function (_TempParser) {
	  _inherits(TimeGridParser, _TempParser);

	  /**
	   * Us this.ds to organize parse data.
	   * @constructor
	   * @override
	   * @param  {Object?Class}
	   */

	  function TimeGridParser(rsGridContext) {
	    _classCallCheck(this, TimeGridParser);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TimeGridParser).call(this, rsGridContext));

	    _this.view = _this.ds.view;
	    _this.widgetContentClass = _this.view.widgetContentClass;
	    _this.bgCellsIterator = _this.getBgCells();
	    _this.slatCellsIterator = _this.ds.getSlatCells();
	    _this.limitColWidthAttr = _this.ds.getLimitColWidthAttr();
	    _this.totalColIterator = new Array(_this.ds.getTotalColCount());
	    return _this;
	  }

	  /**
	   * Parse Header.html
	   * @override
	   * @return {String} HTML
	   */

	  _createClass(TimeGridParser, [{
	    key: "parse",
	    value: function parse() {
	      return (0, _TimeGrid2.default)(this);
	    }
	  }, {
	    key: "getBgCells",
	    value: function getBgCells() {
	      var colCnt = this.ds.colCnt,
	          bgCells = [];

	      for (var col = 0; col < colCnt; col++) {
	        var date = this.ds.getCellDate(0, col);
	        var classes = this.ds.getDayClasses(date);
	        classes.unshift("fc-day", this.view.widgetContentClass);
	        bgCells.push({
	          date: date,
	          classes: classes.join(" ")
	        });
	      }
	      return bgCells;
	    }
	  }, {
	    key: "getSlatDateFormate",
	    value: function getSlatDateFormate() {
	      return (0, _FC.htmlEscape)(this.date.format(this.labelFormat));
	    }
	  }, {
	    key: "getFormatDate",
	    value: function getFormatDate() {
	      return this.date.format('YYYY-MM-DD');
	    }
	  }]);

	  return TimeGridParser;
	})(_TempParser3.default);

	exports.default = TimeGridParser;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"fc-bg\">\r");t.b("\n" + i);t.b("	<table>\r");t.b("\n" + i);t.b("		<colgroup>\r");t.b("\n" + i);if(t.s(t.f("totalColIterator",c,p,1),c,p,0,68,111,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("		  <col ");t.b(t.v(t.f("limitColWidthAttr",c,p,0)));t.b("></col>\r");t.b("\n" + i);});c.pop();}t.b("		</colgroup>\r");t.b("\n" + i);t.b("		<tr>\r");t.b("\n" + i);if(t.s(t.f("bgCellsIterator",c,p,1),c,p,0,179,247,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("			<td class=\"");t.b(t.v(t.f("classes",c,p,0)));t.b("\" data-date=\"");t.b(t.v(t.f("getFormatDate",c,p,0)));t.b("\"></td>\r");t.b("\n" + i);});c.pop();}t.b("		</tr>\r");t.b("\n" + i);t.b("	</table>\r");t.b("\n" + i);t.b("</div>\r");t.b("\n" + i);t.b("<div class=\"fc-slats fc-slats-lines\">\r");t.b("\n" + i);t.b("	<table>\r");t.b("\n" + i);if(t.s(t.f("slatCellsIterator",c,p,1),c,p,0,370,481,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("		<tr ");if(!t.s(t.f("isLabeled",c,p,1),c,p,1,0,0,"")){t.b("class=\"fc-minor\"");};t.b(">\r");t.b("\n" + i);t.b("			<td class=\"");t.b(t.v(t.f("widgetContentClass",c,p,0)));t.b("\"></td>\r");t.b("\n" + i);t.b("		</tr>\r");t.b("\n" + i);});c.pop();}t.b("	</table>\r");t.b("\n" + i);t.b("</div>\r");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"fc-bg\">\r\n\t<table>\r\n\t\t<colgroup>\r\n\t\t{{#totalColIterator}}\r\n\t\t  <col {{limitColWidthAttr}}></col>\r\n\t\t{{/totalColIterator}}\r\n\t\t</colgroup>\r\n\t\t<tr>\r\n\t\t{{#bgCellsIterator}}\r\n\t\t\t<td class=\"{{classes}}\" data-date=\"{{getFormatDate}}\"></td>\r\n\t\t{{/bgCellsIterator}}\r\n\t\t</tr>\r\n\t</table>\r\n</div>\r\n<div class=\"fc-slats fc-slats-lines\">\r\n\t<table>\r\n\t\t{{#slatCellsIterator}}\r\n\t\t<tr {{^isLabeled}}class=\"fc-minor\"{{/isLabeled}}>\r\n\t\t\t<td class=\"{{widgetContentClass}}\"></td>\r\n\t\t</tr>\r\n\t\t{{/slatCellsIterator}}\r\n\t</table>\r\n</div>\r\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"fc-row fc-scroll\" ");t.b(t.rp("<axisStyle0",c,p,""));t.b(">\r");t.b("\n" + i);t.b("	<div class=\"fc-scroll-bars fc-no-scroll-bars fc-scroll-hide\">\r");t.b("\n" + i);t.b("		<div class=\"fc-slats-labels fc-slats-output ");t.b(t.v(t.f("widgetContentClass",c,p,0)));t.b("\">\r");t.b("\n" + i);t.b("			<table>\r");t.b("\n" + i);if(t.s(t.f("slatCellsIterator",c,p,1),c,p,0,221,414,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("					<tr ");if(!t.s(t.f("isLabeled",c,p,1),c,p,1,0,0,"")){t.b("class=\"fc-minor\"");};t.b(">\r");t.b("\n" + i);t.b("						<td class=\"fc-time ");t.b(t.v(t.f("widgetContentClass",c,p,0)));t.b("\">");if(t.s(t.f("isLabeled",c,p,1),c,p,0,342,377,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("<span>");t.b(t.v(t.f("getSlatDateFormate",c,p,0)));t.b("</span>");});c.pop();}t.b("</td>\r");t.b("\n" + i);t.b("					</tr>\r");t.b("\n" + i);});c.pop();}t.b("			</table>\r");t.b("\n" + i);t.b("		</div>\r");t.b("\n" + i);t.b("	</div>\r");t.b("\n" + i);t.b("</div>\r");t.b("\n");return t.fl(); },partials: {"<axisStyle0":{name:"axisStyle", partials: {}, subs: {  }}}, subs: {  }}, "<div class=\"fc-row fc-scroll\" {{>axisStyle}}>\r\n\t<div class=\"fc-scroll-bars fc-no-scroll-bars fc-scroll-hide\">\r\n\t\t<div class=\"fc-slats-labels fc-slats-output {{widgetContentClass}}\">\r\n\t\t\t<table>\r\n\t\t\t\t{{#slatCellsIterator}}\r\n\t\t\t\t\t<tr {{^isLabeled}}class=\"fc-minor\"{{/isLabeled}}>\r\n\t\t\t\t\t\t<td class=\"fc-time {{widgetContentClass}}\">{{#isLabeled}}<span>{{getSlatDateFormate}}</span>{{/isLabeled}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t{{/slatCellsIterator}}\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"fc-");t.b(t.v(t.f("className",c,p,0)));t.b("-skeleton\">");t.b("\n" + i);t.b("  <table>");t.b("\n" + i);t.b("    <colgroup>");t.b("\n" + i);if(t.s(t.f("totalColIterator",c,p,1),c,p,0,92,141,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <col ");t.b(t.v(t.f("limitColWidthAttr",c,p,0)));t.b("></col>");t.b("\n" + i);});c.pop();}t.b("    </colgroup>");t.b("\n" + i);t.b("    <tbody></tbody>");t.b("\n" + i);t.b("  </table>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"fc-{{className}}-skeleton\">\n  <table>\n    <colgroup>\n      {{#totalColIterator}}\n        <col {{limitColWidthAttr}}></col>\n      {{/totalColIterator}}\n    </colgroup>\n    <tbody></tbody>\n  </table>\n</div>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _BaseResourceGrid = __webpack_require__(12);

	var _BaseResourceDayGrid2 = __webpack_require__(29);

	var _BaseResourceDayGrid3 = _interopRequireDefault(_BaseResourceDayGrid2);

	var _DayGridParser = __webpack_require__(30);

	var _DayGridParser2 = _interopRequireDefault(_DayGridParser);

	var _EventSkeleton = __webpack_require__(27);

	var _EventSkeleton2 = _interopRequireDefault(_EventSkeleton);

	var _objectAssign = __webpack_require__(10);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ResourceDayGrid = (function (_BaseResourceDayGrid) {
	  _inherits(ResourceDayGrid, _BaseResourceDayGrid);

	  function ResourceDayGrid() {
	    _classCallCheck(this, ResourceDayGrid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ResourceDayGrid).apply(this, arguments));
	  }

	  _createClass(ResourceDayGrid, [{
	    key: "renderDayRowHtml",

	    /**
	     * @override
	     * @param  {Number}  row
	     * @param  {Boolean} isRigid
	     * @return {String} HTML string.
	     */
	    value: function renderDayRowHtml(row, isRigid) {
	      var parser = new _DayGridParser2.default(this);
	      return parser.parse();
	    }
	  }, {
	    key: "updateWidth",
	    value: function updateWidth(width) {
	      //let bgWidth = this.el.find(".fc-bg > table").outerWidth();
	      this.el.width(width);
	    }
	  }, {
	    key: "renderFillRow",
	    value: function renderFillRow(type, seg, className) {
	      var colCnt = this.colCnt;
	      var startCol = seg.leftCol;
	      var endCol = seg.rightCol + 1;

	      className = className || type.toLowerCase();

	      var skeletonEl = $((0, _EventSkeleton2.default)({
	        className: className,
	        limitColWidthAttr: this.getLimitColWidthAttr(),
	        totalColIterator: new Array(this.getTotalColCount())
	      }));

	      var trEl = $("<tr>");

	      if (startCol > 0) {
	        trEl.append('<td colspan="' + startCol + '"/>');
	      }
	      trEl.append(seg.el.attr('colspan', endCol - startCol));
	      if (endCol < colCnt) {
	        trEl.append('<td colspan="' + (colCnt - endCol) + '"/>');
	      }
	      skeletonEl.find("tbody").append(trEl);;

	      return skeletonEl;
	    }

	    /**
	     * @override
	     * @param  {Object} Span
	     * @return {Array} Segs
	     */

	  }, {
	    key: "spanToSegs",
	    value: function spanToSegs(span) {
	      var _this2 = this;

	      var rsCount = this.getAllowedResourcesColCount();
	      var segs = this.sliceRangeByRow(span);

	      var rsSegs = [];
	      if (rsCount && this.view.type === "resourceDay") {
	        segs.forEach(function (sg) {
	          var resources = _this2.getAllowedResources();
	          resources.forEach(function (rs, i) {
	            if (!span.resourceId || span.resourceId === rs.id) {
	              var newSeg = (0, _objectAssign2.default)({}, sg);
	              newSeg.leftCol = _this2.getColByRsAndDayIndex(i, _this2.isRTL ? seg.lastRowDayIndex : sg.firstRowDayIndex);
	              newSeg.rightCol = _this2.getColByRsAndDayIndex(i, _this2.isRTL ? seg.firstRowDayIndex : sg.lastRowDayIndex);
	              rsSegs.push(newSeg);
	            }
	          });
	        });
	      } else {
	        rsSegs = _get(Object.getPrototypeOf(ResourceDayGrid.prototype), "spanToSegs", this).call(this, span);
	      }
	      return rsSegs;
	    }
	  }]);

	  return ResourceDayGrid;
	})(_BaseResourceDayGrid3.default);

	exports.default = ResourceDayGrid;

	(0, _objectAssign2.default)(ResourceDayGrid.prototype, _BaseResourceGrid.BaseResourceGridMixin);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _objectAssign = __webpack_require__(10);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseResourceDayGrid = (function (_DayGrid) {
	  _inherits(BaseResourceDayGrid, _DayGrid);

	  function BaseResourceDayGrid() {
	    _classCallCheck(this, BaseResourceDayGrid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseResourceDayGrid).apply(this, arguments));
	  }

	  _createClass(BaseResourceDayGrid, [{
	    key: "spanToSegs",

	    /**
	     * @override
	     * @param  {Object} Span
	     * @return {Array} Segs
	     */
	    value: function spanToSegs(span) {
	      var _this2 = this;

	      var segs = this.sliceRangeByRow(span);
	      segs.forEach(function (sg) {
	        sg.leftCol = _this2.isRTL ? seg.lastRowDayIndex : sg.firstRowDayIndex;
	        sg.rightCol = _this2.isRTL ? seg.firstRowDayIndex : sg.lastRowDayIndex;
	      });
	      return segs;
	    }

	    /**
	     * Add resourse id to Span.
	     * @override
	     * @param  {Object} hit
	     * @return {Object} Span
	     */

	  }, {
	    key: "getHitSpan",
	    value: function getHitSpan(hit) {
	      var span = _get(Object.getPrototypeOf(BaseResourceDayGrid.prototype), "getHitSpan", this).call(this, hit);
	      if (this.getAllowedResourcesColCount()) {
	        span.resourceId = this.getResourceByCol(hit.col).id;
	      }
	      (0, _objectAssign2.default)(span, hit);
	      return span;
	    }
	  }, {
	    key: "computeSelection",
	    value: function computeSelection(startSpan, endSpan) {
	      var startCol = Math.min(startSpan.col, endSpan.col),
	          endCol = Math.max(startSpan.col, endSpan.col);
	      var segs = [];
	      for (var col = startCol; col <= endCol; col++) {
	        var dayIndex = this.getDayIndexByCol(col),
	            dayDate = this.dayDates[dayIndex];
	        segs.push({
	          col: col,
	          isStart: true,
	          isEnd: true,
	          row: 0,
	          firstRowDayIndex: 0,
	          lastRowDayIndex: 0,
	          leftCol: col,
	          rightCol: col,
	          start: dayDate.clone(),
	          end: dayDate.clone().add(1, "day"),
	          resource: this.getResourceByCol(col)
	        });
	      }
	      return segs;
	    }
	  }, {
	    key: "renderSelection",
	    value: function renderSelection(segs) {
	      this.renderHighlight(segs);
	      return segs;
	    }
	  }, {
	    key: "renderHighlight",
	    value: function renderHighlight(segs) {
	      this.renderFill('highlight', segs);
	    }
	  }]);

	  return BaseResourceDayGrid;
	})(_FC.DayGrid);

	exports.default = BaseResourceDayGrid;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _TempParser2 = __webpack_require__(22);

	var _TempParser3 = _interopRequireDefault(_TempParser2);

	var _DayGrid = __webpack_require__(31);

	var _DayGrid2 = _interopRequireDefault(_DayGrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DayGridParser = (function (_TempParser) {
	  _inherits(DayGridParser, _TempParser);

	  /**
	   * Us this.ds to organize parse data.
	   * @constructor
	   * @override
	   * @param  {Object?Class}
	   */

	  function DayGridParser(rsGridContext) {
	    _classCallCheck(this, DayGridParser);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DayGridParser).call(this, rsGridContext));

	    _this.view = _this.ds.view;
	    _this.widgetContentClass = _this.view.widgetContentClass;
	    _this.bgCellsIterator = _this.getBgCells();
	    _this.limitColWidthAttr = _this.ds.getLimitColWidthAttr();
	    _this.totalColIterator = new Array(_this.ds.getTotalColCount());
	    return _this;
	  }

	  /**
	   * Parse Header.html
	   * @override
	   * @return {String} HTML
	   */

	  _createClass(DayGridParser, [{
	    key: "parse",
	    value: function parse() {
	      return (0, _DayGrid2.default)(this);
	    }
	  }, {
	    key: "getBgCells",
	    value: function getBgCells() {
	      var colCnt = this.ds.colCnt,
	          bgCells = [];

	      for (var col = 0; col < colCnt; col++) {
	        var date = this.ds.getCellDate(0, col);
	        var classes = this.ds.getDayClasses(date);
	        classes.unshift("fc-day", this.view.widgetContentClass);
	        bgCells.push({
	          date: date,
	          classes: classes.join(" ")
	        });
	      }
	      return bgCells;
	    }
	  }, {
	    key: "getFormatDate",
	    value: function getFormatDate() {
	      return this.date.format('YYYY-MM-DD');
	    }
	  }]);

	  return DayGridParser;
	})(_TempParser3.default);

	exports.default = DayGridParser;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"fc-row fc-week ");t.b(t.v(t.f("widgetContentClass",c,p,0)));t.b(" fc-rigid\">\r");t.b("\n" + i);t.b("	<div class=\"fc-bg\">\r");t.b("\n" + i);t.b("		<table>\r");t.b("\n" + i);t.b("			<colgroup>\r");t.b("\n" + i);if(t.s(t.f("totalColIterator",c,p,1),c,p,0,134,178,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("				<col ");t.b(t.v(t.f("limitColWidthAttr",c,p,0)));t.b("></col>\r");t.b("\n" + i);});c.pop();}t.b("			</colgroup>\r");t.b("\n" + i);t.b("			<tr>\r");t.b("\n" + i);if(t.s(t.f("bgCellsIterator",c,p,1),c,p,0,249,319,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("				<td class=\"");t.b(t.v(t.f("classes",c,p,0)));t.b("\" data-date=\"");t.b(t.v(t.f("getFormatDate",c,p,0)));t.b("\"></td>\r");t.b("\n" + i);});c.pop();}t.b("			</tr>\r");t.b("\n" + i);t.b("		</table>\r");t.b("\n" + i);t.b("	</div>\r");t.b("\n" + i);t.b("	<div class=\"fc-content-skeleton\">\r");t.b("\n" + i);t.b("		<table>\r");t.b("\n" + i);t.b("			<colgroup>\r");t.b("\n" + i);if(t.s(t.f("totalColIterator",c,p,1),c,p,0,458,502,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("				<col ");t.b(t.v(t.f("limitColWidthAttr",c,p,0)));t.b("></col>\r");t.b("\n" + i);});c.pop();}t.b("			</colgroup>\r");t.b("\n" + i);t.b("		</table>\r");t.b("\n" + i);t.b("	</div>\r");t.b("\n" + i);t.b("</div>\r");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"fc-row fc-week {{widgetContentClass}} fc-rigid\">\r\n\t<div class=\"fc-bg\">\r\n\t\t<table>\r\n\t\t\t<colgroup>\r\n\t\t\t{{#totalColIterator}}\r\n\t\t\t\t<col {{limitColWidthAttr}}></col>\r\n\t\t\t{{/totalColIterator}}\r\n\t\t\t</colgroup>\r\n\t\t\t<tr>\r\n\t\t\t{{#bgCellsIterator}}\r\n\t\t\t\t<td class=\"{{classes}}\" data-date=\"{{getFormatDate}}\"></td>\r\n\t\t\t{{/bgCellsIterator}}\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n\t<div class=\"fc-content-skeleton\">\r\n\t\t<table>\r\n\t\t\t<colgroup>\r\n\t\t\t{{#totalColIterator}}\r\n\t\t\t\t<col {{limitColWidthAttr}}></col>\r\n\t\t\t{{/totalColIterator}}\r\n\t\t\t</colgroup>\r\n\t\t</table>\r\n\t</div>\r\n</div>\r\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _TempParser2 = __webpack_require__(22);

	var _TempParser3 = _interopRequireDefault(_TempParser2);

	var _Skeleton = __webpack_require__(33);

	var _Skeleton2 = _interopRequireDefault(_Skeleton);

	var _HeaderIntro = __webpack_require__(34);

	var _HeaderIntro2 = _interopRequireDefault(_HeaderIntro);

	var _DayIntro = __webpack_require__(35);

	var _DayIntro2 = _interopRequireDefault(_DayIntro);

	var _TimeIntro = __webpack_require__(36);

	var _TimeIntro2 = _interopRequireDefault(_TimeIntro);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SkeletonParser = (function (_TempParser) {
	  _inherits(SkeletonParser, _TempParser);

	  /**
	   * Us this.ds to organize parse data.
	   * @constructor
	   * @override
	   * @param  {Object?Class}
	   */

	  function SkeletonParser(rsGridContext) {
	    _classCallCheck(this, SkeletonParser);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SkeletonParser).call(this, rsGridContext));

	    _this.isRTL = _this.ds.isRTL;
	    _this.widgetHeaderClass = _this.ds.widgetHeaderClass;
	    _this.widgetContentClass = _this.ds.widgetContentClass;
	    return _this;
	  }

	  /**
	   * Parse Header.html
	   * @override
	   * @return {String} HTML
	   */

	  _createClass(SkeletonParser, [{
	    key: "parse",
	    value: function parse() {
	      return (0, _Skeleton2.default)(this, {
	        headerIntor: this.getHeaderIntro(),
	        dayIntro: this.getDayIntro(),
	        timeIntro: this.getTimeIntro(),
	        axisStyle: this.ds.axisStyleAttr()
	      });
	    }
	  }, {
	    key: "getHeaderIntro",
	    value: function getHeaderIntro() {
	      return (0, _HeaderIntro2.default)({
	        axisStyle: this.ds.axisStyleAttr(),
	        widgetContentClass: this.widgetHeaderClass
	      });
	    }
	  }, {
	    key: "getDayIntro",
	    value: function getDayIntro() {
	      return (0, _DayIntro2.default)({
	        axisStyle: this.ds.axisStyleAttr(),
	        widgetContentClass: this.widgetContentClass
	      });
	    }
	  }, {
	    key: "getTimeIntro",
	    value: function getTimeIntro() {
	      return (0, _TimeIntro2.default)({
	        axisStyle: this.ds.axisStyleAttr(),
	        widgetContentClass: this.widgetContentClass
	      });
	    }
	  }, {
	    key: "getBgCells",
	    value: function getBgCells() {
	      var colCnt = this.ds.colCnt,
	          bgCells = [];

	      for (var col = 0; col < colCnt; col++) {
	        var date = this.ds.getCellDate(0, col);
	        var classes = this.ds.getDayClasses(date);
	        classes.unshift("fc-day", this.widgetContentClass);
	        bgCells.push({
	          date: date,
	          classes: classes.join(" ")
	        });
	      }
	      return bgCells;
	    }
	  }, {
	    key: "getFormatDate",
	    value: function getFormatDate() {
	      return this.date.format('YYYY-MM-DD');
	    }
	  }]);

	  return SkeletonParser;
	})(_TempParser3.default);

	exports.default = SkeletonParser;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<table>");t.b("\n" + i);t.b("  <thead class=\"fc-head\">");t.b("\n" + i);t.b("    <tr>");t.b("\n" + i);if(!t.s(t.f("isRTL",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<headerIntor0",c,p,"    	"));};t.b("      <td class=\"fc-header-container\">");t.b("\n" + i);t.b("        <div class=\"fc-row fc-scroll\">");t.b("\n" + i);t.b("          <div class=\"fc-scroll-bars fc-scroll-x fc-scroll-hide\">");t.b("\n" + i);t.b("            <div class=\"fc-header fc-header-output ");t.b(t.v(t.f("widgetContentClass",c,p,0)));t.b("\"></div>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </td>");t.b("\n" + i);if(t.s(t.f("isRTL",c,p,1),c,p,0,379,406,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<headerIntor1",c,p,"    	"));});c.pop();}t.b("    </tr>");t.b("\n" + i);t.b("  </thead>");t.b("\n" + i);t.b("  <tbody class=\"fc-body\">");t.b("\n" + i);t.b("    <tr>");t.b("\n" + i);if(!t.s(t.f("isRTL",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<dayIntro2",c,p,"    	"));};t.b("      <td class=\"fc-day-grid-container\">");t.b("\n" + i);t.b("        <div class=\"fc-row fc-scroll\">");t.b("\n" + i);t.b("          <div class=\"fc-scroll-bars fc-scroll-x fc-scroll-hide\">");t.b("\n" + i);t.b("            <div class=\"fc-day-grid fc-day-grid-output ");t.b(t.v(t.f("widgetContentClass",c,p,0)));t.b("\"></div>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </td>");t.b("\n" + i);if(t.s(t.f("isRTL",c,p,1),c,p,0,812,836,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<dayIntro3",c,p,"    	"));});c.pop();}t.b("    </tr>");t.b("\n" + i);t.b("    <tr>");t.b("\n" + i);if(!t.s(t.f("isRTL",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<timeIntro4",c,p,"    	"));};t.b("      <td class=\"fc-time-grid-container\">");t.b("\n" + i);t.b("        <div class=\"fc-row fc-scroll\">");t.b("\n" + i);t.b("          <div class=\"fc-scroll-bars\">");t.b("\n" + i);t.b("            <div class=\"fc-time-grid fc-time-grid-output ");t.b(t.v(t.f("widgetContentClass",c,p,0)));t.b("\"></div>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </td>");t.b("\n" + i);if(t.s(t.f("isRTL",c,p,1),c,p,0,1182,1207,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<timeIntro5",c,p,"    	"));});c.pop();}t.b("    </tr>");t.b("\n" + i);t.b("  </tbody>");t.b("\n" + i);t.b("</table>");t.b("\n");return t.fl(); },partials: {"<headerIntor0":{name:"headerIntor", partials: {}, subs: {  }},"<headerIntor1":{name:"headerIntor", partials: {}, subs: {  }},"<dayIntro2":{name:"dayIntro", partials: {}, subs: {  }},"<dayIntro3":{name:"dayIntro", partials: {}, subs: {  }},"<timeIntro4":{name:"timeIntro", partials: {}, subs: {  }},"<timeIntro5":{name:"timeIntro", partials: {}, subs: {  }}}, subs: {  }}, "<table>\n  <thead class=\"fc-head\">\n    <tr>\n    {{^isRTL}}\n    \t{{>headerIntor}}\n    {{/isRTL}}\n      <td class=\"fc-header-container\">\n        <div class=\"fc-row fc-scroll\">\n          <div class=\"fc-scroll-bars fc-scroll-x fc-scroll-hide\">\n            <div class=\"fc-header fc-header-output {{widgetContentClass}}\"></div>\n          </div>\n        </div>\n      </td>\n    {{#isRTL}}\n    \t{{>headerIntor}}\n    {{/isRTL}}\n    </tr>\n  </thead>\n  <tbody class=\"fc-body\">\n    <tr>\n    {{^isRTL}}\n    \t{{>dayIntro}}\n    {{/isRTL}}\n      <td class=\"fc-day-grid-container\">\n        <div class=\"fc-row fc-scroll\">\n          <div class=\"fc-scroll-bars fc-scroll-x fc-scroll-hide\">\n            <div class=\"fc-day-grid fc-day-grid-output {{widgetContentClass}}\"></div>\n          </div>\n        </div>\n      </td>\n    {{#isRTL}}\n    \t{{>dayIntro}}\n    {{/isRTL}}\n    </tr>\n    <tr>\n    {{^isRTL}}\n    \t{{>timeIntro}}\n    {{/isRTL}}\n      <td class=\"fc-time-grid-container\">\n        <div class=\"fc-row fc-scroll\">\n          <div class=\"fc-scroll-bars\">\n            <div class=\"fc-time-grid fc-time-grid-output {{widgetContentClass}}\"></div>\n          </div>\n        </div>\n      </td>\n    {{#isRTL}}\n    \t{{>timeIntro}}\n    {{/isRTL}}\n    </tr>\n  </tbody>\n</table>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<td class=\"fc-axis ");t.b(t.v(t.f("widgetHeaderClass",c,p,0)));t.b("\" ");t.b(t.rp("<axisStyle0",c,p,""));t.b("></td>");t.b("\n");return t.fl(); },partials: {"<axisStyle0":{name:"axisStyle", partials: {}, subs: {  }}}, subs: {  }}, "<td class=\"fc-axis {{widgetHeaderClass}}\" {{>axisStyle}}></td>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<td class=\"fc-axis ");t.b(t.v(t.f("widgetContentClass",c,p,0)));t.b("\" ");t.b(t.rp("<axisStyle0",c,p,""));t.b("></td>");t.b("\n");return t.fl(); },partials: {"<axisStyle0":{name:"axisStyle", partials: {}, subs: {  }}}, subs: {  }}, "<td class=\"fc-axis {{widgetContentClass}}\" {{>axisStyle}}></td>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<td class=\"fc-axis fc-slats-labels-container\" ");t.b(t.rp("<axisStyle0",c,p,""));t.b("></td>");t.b("\n");return t.fl(); },partials: {"<axisStyle0":{name:"axisStyle", partials: {}, subs: {  }}}, subs: {  }}, "<td class=\"fc-axis fc-slats-labels-container\" {{>axisStyle}}></td>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ResourceWeekView = __webpack_require__(38);

	var _ResourceWeekView2 = _interopRequireDefault(_ResourceWeekView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Configuration of resource week view.
	 */
	exports.default = {
	  "type": "agenda",
	  "class": _ResourceWeekView2.default,
	  "defaults": {
	    "limitHeaderWidth": 190,
	    "defaultResourcesIndex": 0,
	    "fixedAxisWidth": 50,
	    "buttonText": "rsweek"
	  },
	  "duration": {
	    "week": 1
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(39);

	var _ResourceDayView2 = __webpack_require__(5);

	var _ResourceDayView3 = _interopRequireDefault(_ResourceDayView2);

	var _ResourceTimeGrid = __webpack_require__(40);

	var _ResourceTimeGrid2 = _interopRequireDefault(_ResourceTimeGrid);

	var _ResourceDayGrid = __webpack_require__(43);

	var _ResourceDayGrid2 = _interopRequireDefault(_ResourceDayGrid);

	var _SkeletonParser = __webpack_require__(44);

	var _SkeletonParser2 = _interopRequireDefault(_SkeletonParser);

	var _SyncScrollers = __webpack_require__(9);

	var _SyncScrollers2 = _interopRequireDefault(_SyncScrollers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ResourceWeekView = (function (_ResourceDayView) {
	  _inherits(ResourceWeekView, _ResourceDayView);

	  /**
	   * @constructor
	   * @param  {*} ...args [calendar, type, options, intervalDuration]
	   */

	  function ResourceWeekView() {
	    var _Object$getPrototypeO;

	    _classCallCheck(this, ResourceWeekView);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ResourceWeekView)).call.apply(_Object$getPrototypeO, [this].concat(args)));
	  }

	  /**
	   * @override
	   * @return {Class} Instance of ResourceTimeGrid.
	   */

	  _createClass(ResourceWeekView, [{
	    key: "instantiateTimeGrid",
	    value: function instantiateTimeGrid() {
	      return new _ResourceTimeGrid2.default(this);
	    }

	    /**
	     * @override
	     * @return {Class} Instance of ResourceDayGrid.
	     */

	  }, {
	    key: "instantiateDayGrid",
	    value: function instantiateDayGrid() {
	      return new _ResourceDayGrid2.default(this);
	    }
	  }, {
	    key: "renderDates",
	    value: function renderDates() {
	      _get(Object.getPrototypeOf(ResourceWeekView.prototype), "renderDates", this).call(this, true);
	      this.el.addClass("fc-resource-week-view");
	      this.addHeaderEvent();
	    }
	  }, {
	    key: "renderSkeletonHtml",
	    value: function renderSkeletonHtml() {
	      var skeletonParser = new _SkeletonParser2.default(this);
	      return skeletonParser.parse();
	    }
	  }, {
	    key: "syncScroll",
	    value: function syncScroll() {
	      _get(Object.getPrototypeOf(ResourceWeekView.prototype), "syncScroll", this).call(this);
	      var headerScrollEl = this.headContainerEl.find(".fc-scroll-bars");
	      if (_SyncScrollers2.default.hasScrollbar(headerScrollEl[0], "x")) {
	        var actorScrollEl = this.el.find(".fc-scollbar-actor .fc-scroll-bars");
	        var _syncScrollersX = new _SyncScrollers2.default("x", [headerScrollEl, actorScrollEl]);
	      }
	    }
	  }, {
	    key: "addHeaderEvent",
	    value: function addHeaderEvent() {
	      var headerGrid = this.timeGrid.headerGrid,
	          rsCells = headerGrid.find(".fc-rs-cell");
	      rsCells.on("click", this.onAllowResource.bind(this));
	    }
	  }, {
	    key: "onAllowResource",
	    value: function onAllowResource(evt) {
	      var rsCellEl = $(evt.currentTarget),
	          rsId = rsCellEl.attr("rs-cell-id");
	      this.calendar.toggleAllowResourceById(rsId);
	      this.redisplay(true);
	    }
	  }, {
	    key: "redisplay",
	    value: function redisplay(remainScrollPosition) {
	      var position = undefined;
	      if (remainScrollPosition) {
	        var scrollBar = this.el.find(".fc-scollbar-actor .fc-scroll-bars");
	        position = _SyncScrollers2.default.getScrollPosition(scrollBar);
	      }
	      _get(Object.getPrototypeOf(ResourceWeekView.prototype), "redisplay", this).call(this, remainScrollPosition);
	      if (remainScrollPosition) {
	        var scrollBar = this.el.find(".fc-scollbar-actor .fc-scroll-bars");
	        _SyncScrollers2.default.scrollToPosition(scrollBar, position);
	      }
	    }

	    /**
	     * Render resources after fetching data from rsManager.
	     * @override
	     * @param  {Array} resources [description]
	     */

	  }, {
	    key: "renderResources",
	    value: function renderResources(resources) {
	      if (resources) {
	        var index = this.opt("defaultResourcesIndex");
	        this.calendar.setAllowedResources([resources[index ? index : 0]]);
	      }
	      this.timeGrid.renderResources();
	      if (this.dayGrid) {
	        this.dayGrid.renderResources();
	      }
	    }
	  }, {
	    key: "addResourceSuccessful",
	    value: function addResourceSuccessful(resource) {
	      this.redisplay(true);
	    }
	  }, {
	    key: "deleteResourceSuccessful",
	    value: function deleteResourceSuccessful(resource) {
	      this.redisplay(true);
	    }
	  }]);

	  return ResourceWeekView;
	})(_ResourceDayView3.default);

	exports.default = ResourceWeekView;

/***/ },
/* 39 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ResourceTimeGrid = __webpack_require__(11);

	var _ResourceTimeGrid2 = _interopRequireDefault(_ResourceTimeGrid);

	var _HeaderParser = __webpack_require__(41);

	var _HeaderParser2 = _interopRequireDefault(_HeaderParser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ResourceTimeGrid = (function (_TimeGrid) {
	  _inherits(ResourceTimeGrid, _TimeGrid);

	  function ResourceTimeGrid() {
	    _classCallCheck(this, ResourceTimeGrid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ResourceTimeGrid).apply(this, arguments));
	  }

	  _createClass(ResourceTimeGrid, [{
	    key: "renderHeadHtml",

	    /**
	     * Render the header parts.
	     * @override
	     * @return {String} Header Html.
	     */
	    value: function renderHeadHtml() {
	      var parser = new _HeaderParser2.default(this);
	      return this.headerGrid = $(parser.parse());
	    }
	  }, {
	    key: "updateWidth",
	    value: function updateWidth() {
	      var headContainerEl = this.view.headContainerEl;
	      var rsTable = headContainerEl.find(".fc-scroll-bars table");
	      rsTable.parent().width(rsTable.width());
	      this.view.el.find(".fc-scollbar-actor-output").width(rsTable.width());

	      var bgWidth = this.el.parent(".fc-scroll-bars").width() - 21;
	      this.el.width(bgWidth);
	      this.view.headContainerEl.width(bgWidth);
	      headContainerEl.find(".fc-header-split-dates table").width(bgWidth);
	      return bgWidth;
	    }
	  }]);

	  return ResourceTimeGrid;
	})(_ResourceTimeGrid2.default);

	exports.default = ResourceTimeGrid;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _TempParser2 = __webpack_require__(22);

	var _TempParser3 = _interopRequireDefault(_TempParser2);

	var _Header = __webpack_require__(42);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HeaderParser = (function (_TempParser) {
	  _inherits(HeaderParser, _TempParser);

	  /**
	   * Us this.ds to organize parse data.
	   * @constructor
	   * @override
	   * @param  {Object?Class}
	   */

	  function HeaderParser(rsGridContext) {
	    _classCallCheck(this, HeaderParser);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderParser).call(this, rsGridContext));

	    _this.view = _this.ds.view;
	    _this.daysMoment = _this.ds.dayDates;
	    _this.rsIterator = _this.getRsIterator();
	    _this.widgetHeaderClass = _this.view.widgetHeaderClass;
	    _this.limitColWidthAttr = _this.getLimitColWidthAttr();
	    _this.totalColIterator = new Array(_this.view.calendar.getResourcesCount());
	    return _this;
	  }

	  /**
	   * Parse Header.html
	   * @override
	   * @return {String} HTML
	   */

	  _createClass(HeaderParser, [{
	    key: "parse",
	    value: function parse() {
	      return (0, _Header2.default)(this);
	    }
	  }, {
	    key: "hasResources",
	    value: function hasResources() {
	      return this.ds.getAllowedResourcesColCount() > 0;
	    }
	  }, {
	    key: "getResourceHtml",
	    value: function getResourceHtml() {
	      var resourceHtml = this.resource.title;
	      if ($.isFunction(this.render)) {
	        var retrunHtml = this.render(this.resource, this.isAllowed);
	        resourceHtml = retrunHtml ? retrunHtml : resourceHtml;
	      }
	      return resourceHtml;
	    }
	  }, {
	    key: "getLimitColWidthAttr",
	    value: function getLimitColWidthAttr() {
	      var limitColWidth = this.view.opt("limitHeaderWidth");
	      return limitColWidth ? "width=" + limitColWidth : "";
	    }
	  }, {
	    key: "getRsIterator",
	    value: function getRsIterator() {
	      var _this2 = this;

	      var returnResources = [],
	          resources = this.view.calendar.getResources();
	      resources.forEach(function (rs) {
	        returnResources.push({
	          resource: rs,
	          render: _this2.view.opt("renderRsHeaderItem"),
	          isAllowed: _this2.view.calendar.isAllowedResource(rs)
	        });
	      });

	      if (this.isRTL) {
	        returnResources = returnResources.reverse();
	      }
	      return returnResources;
	    }
	  }, {
	    key: "dateFormat",
	    value: function dateFormat() {
	      return (0, _FC.htmlEscape)(this.format("ddd"));
	    }
	  }]);

	  return HeaderParser;
	})(_TempParser3.default);

	exports.default = HeaderParser;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"fc-row fc-header-split-rs fc-scroll\">");t.b("\n" + i);t.b("  <div class=\"fc-scroll-bars fc-scroll-x fc-scroll-hide\">");t.b("\n" + i);t.b("    <div class=\"fc-header-split-rs-container\">");t.b("\n" + i);t.b("      <table>");t.b("\n" + i);t.b("        <colgroup>");t.b("\n" + i);if(t.s(t.f("totalColIterator",c,p,1),c,p,0,217,270,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <col ");t.b(t.v(t.f("limitColWidthAttr",c,p,0)));t.b("></col>");t.b("\n" + i);});c.pop();}t.b("        </colgroup>");t.b("\n" + i);t.b("        <thead>");t.b("\n" + i);if(t.s(t.f("hasResources",c,p,1),c,p,0,353,583,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <tr>");t.b("\n" + i);if(t.s(t.f("rsIterator",c,p,1),c,p,0,394,543,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("            <th class=\"fc-rs-cell ");if(t.s(t.f("isAllowed",c,p,1),c,p,0,443,461,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("fc-rs-cell-allowed");});c.pop();}t.b("\" rs-cell-id=\"");t.b(t.v(t.d("resource.id",c,p,0)));t.b("\">");t.b(t.t(t.f("getResourceHtml",c,p,0)));t.b("</th>");t.b("\n" + i);});c.pop();}t.b("          </tr>");t.b("\n" + i);});c.pop();}t.b("        </thead>");t.b("\n" + i);t.b("      </table>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");t.b("\n" + i);t.b("<div class=\"fc-row fc-header-split-dates\">");t.b("\n" + i);t.b("  <table>");t.b("\n" + i);t.b("    <thead>");t.b("\n" + i);t.b("      <tr>");t.b("\n" + i);if(t.s(t.f("daysMoment",c,p,1),c,p,0,758,862,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <th class=\"fc-rs-day-header ");t.b(t.v(t.f("widgetHeaderClass",c,p,0)));t.b(" fc-");t.b(t.v(t.f("dateFormat",c,p,0)));t.b("\">");t.b(t.v(t.f("dateFormat",c,p,0)));t.b("</th>");t.b("\n" + i);});c.pop();}t.b("      </tr>");t.b("\n" + i);t.b("    </thead>");t.b("\n" + i);t.b("  </table>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"fc-row fc-header-split-rs fc-scroll\">\n  <div class=\"fc-scroll-bars fc-scroll-x fc-scroll-hide\">\n    <div class=\"fc-header-split-rs-container\">\n      <table>\n        <colgroup>\n        {{#totalColIterator}}\n          <col {{limitColWidthAttr}}></col>\n        {{/totalColIterator}}\n        </colgroup>\n        <thead>\n        {{#hasResources}}\n          <tr>\n          {{#rsIterator}}\n            <th class=\"fc-rs-cell {{#isAllowed}}fc-rs-cell-allowed{{/isAllowed}}\" rs-cell-id=\"{{resource.id}}\">{{{getResourceHtml}}}</th>\n          {{/rsIterator}}\n          </tr>\n        {{/hasResources}}\n        </thead>\n      </table>\n    </div>\n  </div>\n</div>\n\n<div class=\"fc-row fc-header-split-dates\">\n  <table>\n    <thead>\n      <tr>\n      {{#daysMoment}}\n        <th class=\"fc-rs-day-header {{widgetHeaderClass}} fc-{{dateFormat}}\">{{dateFormat}}</th>\n      {{/daysMoment}}\n      </tr>\n    </thead>\n  </table>\n</div>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ResourceDayGrid = __webpack_require__(28);

	var _ResourceDayGrid2 = _interopRequireDefault(_ResourceDayGrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ResourceDayGrid = (function (_DayGrid) {
	  _inherits(ResourceDayGrid, _DayGrid);

	  function ResourceDayGrid() {
	    _classCallCheck(this, ResourceDayGrid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ResourceDayGrid).apply(this, arguments));
	  }

	  return ResourceDayGrid;
	})(_ResourceDayGrid2.default);

	exports.default = ResourceDayGrid;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _TempParser2 = __webpack_require__(22);

	var _TempParser3 = _interopRequireDefault(_TempParser2);

	var _Skeleton = __webpack_require__(45);

	var _Skeleton2 = _interopRequireDefault(_Skeleton);

	var _HeaderIntro = __webpack_require__(46);

	var _HeaderIntro2 = _interopRequireDefault(_HeaderIntro);

	var _DayIntro = __webpack_require__(47);

	var _DayIntro2 = _interopRequireDefault(_DayIntro);

	var _TimeIntro = __webpack_require__(48);

	var _TimeIntro2 = _interopRequireDefault(_TimeIntro);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SkeletonParser = (function (_TempParser) {
	  _inherits(SkeletonParser, _TempParser);

	  /**
	   * Us this.ds to organize parse data.
	   * @constructor
	   * @override
	   * @param  {Object?Class}
	   */

	  function SkeletonParser(rsGridContext) {
	    _classCallCheck(this, SkeletonParser);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SkeletonParser).call(this, rsGridContext));

	    _this.isRTL = _this.ds.isRTL;
	    _this.widgetHeaderClass = _this.ds.widgetHeaderClass;
	    _this.widgetContentClass = _this.ds.widgetContentClass;
	    return _this;
	  }

	  /**
	   * Parse Header.html
	   * @override
	   * @return {String} HTML
	   */

	  _createClass(SkeletonParser, [{
	    key: "parse",
	    value: function parse() {
	      return (0, _Skeleton2.default)(this, {
	        headerIntor: this.getHeaderIntro(),
	        dayIntro: this.getDayIntro(),
	        timeIntro: this.getTimeIntro(),
	        axisStyle: this.ds.axisStyleAttr()
	      });
	    }
	  }, {
	    key: "getHeaderIntro",
	    value: function getHeaderIntro() {
	      return (0, _HeaderIntro2.default)({
	        axisStyle: this.ds.axisStyleAttr(),
	        widgetContentClass: this.widgetHeaderClass
	      });
	    }
	  }, {
	    key: "getDayIntro",
	    value: function getDayIntro() {
	      return (0, _DayIntro2.default)({
	        axisStyle: this.ds.axisStyleAttr(),
	        widgetContentClass: this.widgetContentClass
	      });
	    }
	  }, {
	    key: "getTimeIntro",
	    value: function getTimeIntro() {
	      return (0, _TimeIntro2.default)({
	        axisStyle: this.ds.axisStyleAttr(),
	        widgetContentClass: this.widgetContentClass
	      });
	    }
	  }, {
	    key: "getBgCells",
	    value: function getBgCells() {
	      var colCnt = this.ds.colCnt,
	          bgCells = [];

	      for (var col = 0; col < colCnt; col++) {
	        var date = this.ds.getCellDate(0, col);
	        var classes = this.ds.getDayClasses(date);
	        classes.unshift("fc-day", this.widgetContentClass);
	        bgCells.push({
	          date: date,
	          classes: classes.join(" ")
	        });
	      }
	      return bgCells;
	    }
	  }, {
	    key: "getFormatDate",
	    value: function getFormatDate() {
	      return this.date.format('YYYY-MM-DD');
	    }
	  }]);

	  return SkeletonParser;
	})(_TempParser3.default);

	exports.default = SkeletonParser;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<table>");t.b("\n" + i);t.b("  <thead class=\"fc-head\">");t.b("\n" + i);t.b("    <tr>");t.b("\n" + i);if(!t.s(t.f("isRTL",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<headerIntor0",c,p,"    	"));};t.b("      <td class=\"fc-header-container\">");t.b("\n" + i);t.b("        <div class=\"fc-row fc-header-output fc-widget-header\">");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </td>");t.b("\n" + i);if(t.s(t.f("isRTL",c,p,1),c,p,0,238,265,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<headerIntor1",c,p,"    	"));});c.pop();}t.b("    </tr>");t.b("\n" + i);t.b("  </thead>");t.b("\n" + i);t.b("  <tbody class=\"fc-body\">");t.b("\n" + i);t.b("    <tr>");t.b("\n" + i);if(!t.s(t.f("isRTL",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<dayIntro2",c,p,"    	"));};t.b("      <td class=\"fc-day-grid-container\">");t.b("\n" + i);t.b("        <div class=\"fc-row fc-scroll\">");t.b("\n" + i);t.b("          <div class=\"fc-scroll-bars fc-scroll-x fc-scroll-hide\">");t.b("\n" + i);t.b("            <div class=\"fc-day-grid fc-day-grid-output ");t.b(t.v(t.f("widgetContentClass",c,p,0)));t.b("\"></div>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </td>");t.b("\n" + i);if(t.s(t.f("isRTL",c,p,1),c,p,0,671,695,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<dayIntro3",c,p,"    	"));});c.pop();}t.b("    </tr>");t.b("\n" + i);t.b("    <tr>");t.b("\n" + i);if(!t.s(t.f("isRTL",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<timeIntro4",c,p,"    	"));};t.b("      <td class=\"fc-time-grid-container\">");t.b("\n" + i);t.b("        <div class=\"fc-row fc-scroll\">");t.b("\n" + i);t.b("          <div class=\"fc-scroll-bars fc-scroll-y\">");t.b("\n" + i);t.b("            <div class=\"fc-time-grid fc-time-grid-output ");t.b(t.v(t.f("widgetContentClass",c,p,0)));t.b("\"></div>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </td>");t.b("\n" + i);if(t.s(t.f("isRTL",c,p,1),c,p,0,1053,1078,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<timeIntro5",c,p,"    	"));});c.pop();}t.b("    </tr>");t.b("\n" + i);t.b("    <tr>");t.b("\n" + i);if(!t.s(t.f("isRTL",c,p,1),c,p,1,0,0,"")){t.b(t.rp("<dayIntro6",c,p,"    	"));};t.b("      <td class=\"fc-scollbar-actor\">");t.b("\n" + i);t.b("        <div class=\"fc-row fc-scroll\">");t.b("\n" + i);t.b("          <div class=\"fc-scroll-bars\">");t.b("\n" + i);t.b("            <div class=\"fc-scollbar-actor-output\"></div>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </td>");t.b("\n" + i);if(t.s(t.f("isRTL",c,p,1),c,p,0,1387,1411,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<dayIntro7",c,p,"    	"));});c.pop();}t.b("    </tr>");t.b("\n" + i);t.b("  </tbody>");t.b("\n" + i);t.b("</table>");t.b("\n");return t.fl(); },partials: {"<headerIntor0":{name:"headerIntor", partials: {}, subs: {  }},"<headerIntor1":{name:"headerIntor", partials: {}, subs: {  }},"<dayIntro2":{name:"dayIntro", partials: {}, subs: {  }},"<dayIntro3":{name:"dayIntro", partials: {}, subs: {  }},"<timeIntro4":{name:"timeIntro", partials: {}, subs: {  }},"<timeIntro5":{name:"timeIntro", partials: {}, subs: {  }},"<dayIntro6":{name:"dayIntro", partials: {}, subs: {  }},"<dayIntro7":{name:"dayIntro", partials: {}, subs: {  }}}, subs: {  }}, "<table>\n  <thead class=\"fc-head\">\n    <tr>\n    {{^isRTL}}\n    \t{{>headerIntor}}\n    {{/isRTL}}\n      <td class=\"fc-header-container\">\n        <div class=\"fc-row fc-header-output fc-widget-header\">\n        </div>\n      </td>\n    {{#isRTL}}\n    \t{{>headerIntor}}\n    {{/isRTL}}\n    </tr>\n  </thead>\n  <tbody class=\"fc-body\">\n    <tr>\n    {{^isRTL}}\n    \t{{>dayIntro}}\n    {{/isRTL}}\n      <td class=\"fc-day-grid-container\">\n        <div class=\"fc-row fc-scroll\">\n          <div class=\"fc-scroll-bars fc-scroll-x fc-scroll-hide\">\n            <div class=\"fc-day-grid fc-day-grid-output {{widgetContentClass}}\"></div>\n          </div>\n        </div>\n      </td>\n    {{#isRTL}}\n    \t{{>dayIntro}}\n    {{/isRTL}}\n    </tr>\n    <tr>\n    {{^isRTL}}\n    \t{{>timeIntro}}\n    {{/isRTL}}\n      <td class=\"fc-time-grid-container\">\n        <div class=\"fc-row fc-scroll\">\n          <div class=\"fc-scroll-bars fc-scroll-y\">\n            <div class=\"fc-time-grid fc-time-grid-output {{widgetContentClass}}\"></div>\n          </div>\n        </div>\n      </td>\n    {{#isRTL}}\n    \t{{>timeIntro}}\n    {{/isRTL}}\n    </tr>\n    <tr>\n    {{^isRTL}}\n    \t{{>dayIntro}}\n    {{/isRTL}}\n      <td class=\"fc-scollbar-actor\">\n        <div class=\"fc-row fc-scroll\">\n          <div class=\"fc-scroll-bars\">\n            <div class=\"fc-scollbar-actor-output\"></div>\n          </div>\n        </div>\n      </td>\n    {{#isRTL}}\n    \t{{>dayIntro}}\n    {{/isRTL}}\n    </tr>\n  </tbody>\n</table>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<td class=\"fc-axis ");t.b(t.v(t.f("widgetHeaderClass",c,p,0)));t.b("\" ");t.b(t.rp("<axisStyle0",c,p,""));t.b("></td>");t.b("\n");return t.fl(); },partials: {"<axisStyle0":{name:"axisStyle", partials: {}, subs: {  }}}, subs: {  }}, "<td class=\"fc-axis {{widgetHeaderClass}}\" {{>axisStyle}}></td>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<td class=\"fc-axis ");t.b(t.v(t.f("widgetContentClass",c,p,0)));t.b("\" ");t.b(t.rp("<axisStyle0",c,p,""));t.b("></td>");t.b("\n");return t.fl(); },partials: {"<axisStyle0":{name:"axisStyle", partials: {}, subs: {  }}}, subs: {  }}, "<td class=\"fc-axis {{widgetContentClass}}\" {{>axisStyle}}></td>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<td class=\"fc-axis fc-slats-labels-container\" ");t.b(t.rp("<axisStyle0",c,p,""));t.b("></td>");t.b("\n");return t.fl(); },partials: {"<axisStyle0":{name:"axisStyle", partials: {}, subs: {  }}}, subs: {  }}, "<td class=\"fc-axis fc-slats-labels-container\" {{>axisStyle}}></td>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ResourceMonthView = __webpack_require__(50);

	var _ResourceMonthView2 = _interopRequireDefault(_ResourceMonthView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Configuration of resource week view.
	 */
	exports.default = {
	  "class": _ResourceMonthView2.default,
	  "defaults": {
	    "limitHeaderWidth": 190,
	    "defaultResourcesIndex": 0,
	    "fixedAxisWidth": 50,
	    "fixedWeekCount": true,
	    "buttonText": "rsmonth"
	  },
	  "duration": {
	    "months": 1
	  }
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(51);

	var _BaseResourceMonthView = __webpack_require__(52);

	var _BaseResourceMonthView2 = _interopRequireDefault(_BaseResourceMonthView);

	var _ResourceDayGrid = __webpack_require__(53);

	var _ResourceDayGrid2 = _interopRequireDefault(_ResourceDayGrid);

	var _SkeletonParser = __webpack_require__(54);

	var _SkeletonParser2 = _interopRequireDefault(_SkeletonParser);

	var _HeaderParser = __webpack_require__(56);

	var _HeaderParser2 = _interopRequireDefault(_HeaderParser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ResourceMonthView = (function (_BaseResourceMonthVie) {
	  _inherits(ResourceMonthView, _BaseResourceMonthVie);

	  function ResourceMonthView() {
	    var _Object$getPrototypeO;

	    _classCallCheck(this, ResourceMonthView);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ResourceMonthView)).call.apply(_Object$getPrototypeO, [this].concat(args)));
	  }

	  /**
	   * @override
	   * @return {Class} Instance of ResourceDayGrid.
	   */

	  _createClass(ResourceMonthView, [{
	    key: "instantiateDayGrid",
	    value: function instantiateDayGrid() {
	      return new _ResourceDayGrid2.default(this);
	    }
	  }, {
	    key: "renderDates",
	    value: function renderDates() {
	      _get(Object.getPrototypeOf(ResourceMonthView.prototype), "renderDates", this).call(this);
	      this.el.addClass("fc-resource-month-view");
	    }
	  }, {
	    key: "renderSkeletonHtml",
	    value: function renderSkeletonHtml() {
	      var skeletonParser = new _SkeletonParser2.default(this);
	      return skeletonParser.parse();
	    }

	    /**
	     * @override
	     */

	  }, {
	    key: "renderHead",
	    value: function renderHead() {
	      _get(Object.getPrototypeOf(ResourceMonthView.prototype), "renderHead", this).call(this);
	      var rsContainerEl = this.el.find(".fc-head-resources-container");
	      var headerParser = new _HeaderParser2.default(this);
	      rsContainerEl.append(headerParser.parse());
	    }

	    /**
	     * Render resources after fetching data from rsManager.
	     * @override
	     * @param  {Array} resources [description]
	     */

	  }, {
	    key: "renderResources",
	    value: function renderResources(resources) {
	      if (resources) {
	        var index = this.opt("defaultResourcesIndex");
	        this.calendar.setAllowedResources([resources[index ? index : 0]]);
	      }
	    }
	  }]);

	  return ResourceMonthView;
	})(_BaseResourceMonthView2.default);

	exports.default = ResourceMonthView;

/***/ },
/* 51 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _BaseResourceView = __webpack_require__(8);

	var _objectAssign = __webpack_require__(10);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseResourceMonthView = (function (_MonthView) {
	  _inherits(BaseResourceMonthView, _MonthView);

	  /**
	   * Gain rsManager instance from Calendar.
	   * @constructor
	   * @param  {*} ...args [calendar, type, options, intervalDuration]
	   */

	  function BaseResourceMonthView() {
	    var _Object$getPrototypeO;

	    _classCallCheck(this, BaseResourceMonthView);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(BaseResourceMonthView)).call.apply(_Object$getPrototypeO, [this].concat(args)));

	    _this.rsManager = _this.calendar.rsManager;
	    _this.addResourceListener();
	    return _this;
	  }

	  _createClass(BaseResourceMonthView, [{
	    key: "renderDates",
	    value: function renderDates() {
	      _get(Object.getPrototypeOf(BaseResourceMonthView.prototype), "renderDates", this).call(this);
	      this.el.addClass("fc-resource-view");
	    }
	  }]);

	  return BaseResourceMonthView;
	})(_FC.MonthView);

	exports.default = BaseResourceMonthView;

	(0, _objectAssign2.default)(BaseResourceMonthView.prototype, _BaseResourceView.BaseResourceViewMixin);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _BaseResourceGrid = __webpack_require__(12);

	var _objectAssign = __webpack_require__(10);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ResourceDayGrid = (function (_DayGrid) {
	  _inherits(ResourceDayGrid, _DayGrid);

	  function ResourceDayGrid() {
	    _classCallCheck(this, ResourceDayGrid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ResourceDayGrid).apply(this, arguments));
	  }

	  return ResourceDayGrid;
	})(_FC.DayGrid);

	exports.default = ResourceDayGrid;

	(0, _objectAssign2.default)(ResourceDayGrid.prototype, _BaseResourceGrid.BaseResourceGridMixin);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _TempParser2 = __webpack_require__(22);

	var _TempParser3 = _interopRequireDefault(_TempParser2);

	var _Skeleton = __webpack_require__(55);

	var _Skeleton2 = _interopRequireDefault(_Skeleton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SkeletonParser = (function (_TempParser) {
	  _inherits(SkeletonParser, _TempParser);

	  /**
	   * Us this.ds to organize parse data.
	   * @constructor
	   * @override
	   * @param  {Object?Class}
	   */

	  function SkeletonParser(monthView) {
	    _classCallCheck(this, SkeletonParser);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SkeletonParser).call(this, monthView));

	    _this.widgetHeaderClass = _this.ds.widgetHeaderClass;
	    _this.widgetContentClass = _this.ds.widgetContentClass;
	    return _this;
	  }

	  /**
	   * Parse Header.html
	   * @override
	   * @return {String} HTML
	   */

	  _createClass(SkeletonParser, [{
	    key: "parse",
	    value: function parse() {
	      return (0, _Skeleton2.default)(this);
	    }
	  }]);

	  return SkeletonParser;
	})(_TempParser3.default);

	exports.default = SkeletonParser;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<table>");t.b("\n" + i);t.b("  <thead class=\"fc-head\">");t.b("\n" + i);t.b("    <tr>");t.b("\n" + i);t.b("      <td class=\"fc-head-resources\">");t.b("\n" + i);t.b("        <div class=\"fc-row fc-scroll\">");t.b("\n" + i);t.b("          <div class=\"fc-scroll-bars fc-scroll-x fc-scroll-hide\">");t.b("\n" + i);t.b("            <div class=\"fc-head-resources-container\"></div>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </td>");t.b("\n" + i);t.b("    </tr>");t.b("\n" + i);t.b("    <tr>");t.b("\n" + i);t.b("      <td class=\"fc-head-container ");t.b(t.v(t.f("widgetHeaderClass",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      </td>");t.b("\n" + i);t.b("    </tr>");t.b("\n" + i);t.b("  </thead>");t.b("\n" + i);t.b("  <tbody class=\"fc-body\">");t.b("\n" + i);t.b("    <tr>");t.b("\n" + i);t.b("      <td class=\"");t.b(t.v(t.f("widgetContentClass",c,p,0)));t.b("\">");t.b("\n" + i);t.b("          <div class=\"fc-day-grid-container\">");t.b("\n" + i);t.b("            <div class=\"fc-day-grid\"></div>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </td>");t.b("\n" + i);t.b("    </tr>");t.b("\n" + i);t.b("    <tr>");t.b("\n" + i);t.b("      <td class=\"fc-scollbar-actor\">");t.b("\n" + i);t.b("        <div class=\"fc-row fc-scroll\">");t.b("\n" + i);t.b("          <div class=\"fc-scroll-bars\">");t.b("\n" + i);t.b("            <div class=\"fc-scollbar-actor-output\"></div>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </td>");t.b("\n" + i);t.b("    </tr>");t.b("\n" + i);t.b("  </tbody>");t.b("\n" + i);t.b("</table>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<table>\n  <thead class=\"fc-head\">\n    <tr>\n      <td class=\"fc-head-resources\">\n        <div class=\"fc-row fc-scroll\">\n          <div class=\"fc-scroll-bars fc-scroll-x fc-scroll-hide\">\n            <div class=\"fc-head-resources-container\"></div>\n          </div>\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <td class=\"fc-head-container {{widgetHeaderClass}}\">\n      </td>\n    </tr>\n  </thead>\n  <tbody class=\"fc-body\">\n    <tr>\n      <td class=\"{{widgetContentClass}}\">\n          <div class=\"fc-day-grid-container\">\n            <div class=\"fc-day-grid\"></div>\n          </div>\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <td class=\"fc-scollbar-actor\">\n        <div class=\"fc-row fc-scroll\">\n          <div class=\"fc-scroll-bars\">\n            <div class=\"fc-scollbar-actor-output\"></div>\n          </div>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _TempParser2 = __webpack_require__(22);

	var _TempParser3 = _interopRequireDefault(_TempParser2);

	var _Header = __webpack_require__(57);

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HeaderParser = (function (_TempParser) {
	  _inherits(HeaderParser, _TempParser);

	  /**
	   * Us this.ds to organize parse data.
	   * @constructor
	   * @override
	   * @param  {Object?Class}
	   */

	  function HeaderParser(monthView) {
	    _classCallCheck(this, HeaderParser);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderParser).call(this, monthView));

	    _this.rsIterator = _this.getRsIterator();
	    _this.limitColWidthAttr = _this.getLimitColWidthAttr();
	    _this.totalColIterator = new Array(_this.ds.calendar.getResourcesCount());
	    return _this;
	  }

	  /**
	   * Parse Header.html
	   * @override
	   * @return {String} HTML
	   */

	  _createClass(HeaderParser, [{
	    key: "parse",
	    value: function parse() {
	      return (0, _Header2.default)(this);
	    }
	  }, {
	    key: "hasResources",
	    value: function hasResources() {
	      return this.ds.calendar.getAllowedResources().length > 0;
	    }
	  }, {
	    key: "getResourceHtml",
	    value: function getResourceHtml() {
	      var resourceHtml = this.resource.title;
	      if ($.isFunction(this.render)) {
	        var retrunHtml = this.render(this.resource, this.isAllowed);
	        resourceHtml = retrunHtml ? retrunHtml : resourceHtml;
	      }
	      return resourceHtml;
	    }
	  }, {
	    key: "getLimitColWidthAttr",
	    value: function getLimitColWidthAttr() {
	      var limitColWidth = this.ds.opt("limitHeaderWidth");
	      return limitColWidth ? "width=" + limitColWidth : "";
	    }
	  }, {
	    key: "getRsIterator",
	    value: function getRsIterator() {
	      var _this2 = this;

	      var returnResources = [],
	          resources = this.ds.calendar.getResources();
	      resources.forEach(function (rs) {
	        returnResources.push({
	          resource: rs,
	          render: _this2.ds.opt("renderRsHeaderItem"),
	          isAllowed: _this2.ds.calendar.isAllowedResource(rs)
	        });
	      });
	      return returnResources;
	    }
	  }]);

	  return HeaderParser;
	})(_TempParser3.default);

	exports.default = HeaderParser;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(14);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<table>");t.b("\n" + i);t.b("  <colgroup>");t.b("\n" + i);if(t.s(t.f("totalColIterator",c,p,1),c,p,0,44,85,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <col ");t.b(t.v(t.f("limitColWidthAttr",c,p,0)));t.b("></col>");t.b("\n" + i);});c.pop();}t.b("  </colgroup>");t.b("\n" + i);t.b("  <thead>");t.b("\n" + i);if(t.s(t.f("hasResources",c,p,1),c,p,0,150,344,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <tr>");t.b("\n" + i);if(t.s(t.f("rsIterator",c,p,1),c,p,0,179,316,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <th class=\"fc-rs-cell ");if(t.s(t.f("isAllowed",c,p,1),c,p,0,222,240,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("fc-rs-cell-allowed");});c.pop();}t.b("\" rs-cell-id=\"");t.b(t.v(t.d("resource.id",c,p,0)));t.b("\">");t.b(t.t(t.f("getResourceHtml",c,p,0)));t.b("</th>");t.b("\n" + i);});c.pop();}t.b("    </tr>");t.b("\n" + i);});c.pop();}t.b("  </thead>");t.b("\n" + i);t.b("</table>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}, "<table>\n  <colgroup>\n  {{#totalColIterator}}\n    <col {{limitColWidthAttr}}></col>\n  {{/totalColIterator}}\n  </colgroup>\n  <thead>\n  {{#hasResources}}\n    <tr>\n    {{#rsIterator}}\n      <th class=\"fc-rs-cell {{#isAllowed}}fc-rs-cell-allowed{{/isAllowed}}\" rs-cell-id=\"{{resource.id}}\">{{{getResourceHtml}}}</th>\n    {{/rsIterator}}\n    </tr>\n  {{/hasResources}}\n  </thead>\n</table>\n", H);return T.render.apply(T, arguments); };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _ResourceManager = __webpack_require__(59);

	var _ResourceManager2 = _interopRequireDefault(_ResourceManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  initialize: function initialize() {
	    this.rsManager = new _ResourceManager2.default(this);
	  },
	  getResources: function getResources() {
	    return this.rsManager.getResources() || [];
	  },
	  getResourcesCount: function getResourcesCount() {
	    var resources = this.getResources();
	    return resources.length;
	  },
	  addResource: function addResource(resource) {
	    return this.rsManager.addResource(resource);
	  },
	  removeResourceById: function removeResourceById(id) {
	    var resource = this.rsManager.getResourceById(id);
	    return this.deleteResource(resource);
	  },
	  getResourceById: function getResourceById(id) {
	    return this.rsManager.getResourceById(id);
	  },
	  deleteResource: function deleteResource(resource) {
	    return this.rsManager.deleteResource(resource);
	  },
	  setAllowedResources: function setAllowedResources(resources) {
	    return this.rsManager.setAllowedResources(resources);
	  },
	  getAllowedResources: function getAllowedResources() {
	    return this.rsManager.getAllowedResources();
	  },
	  addAllowedResource: function addAllowedResource(resource) {
	    return this.rsManager.addAllowedResource(resource);
	  },
	  removeAllowedResource: function removeAllowedResource(resource) {
	    return this.rsManager.addAllowedResource(resource);
	  },
	  toggleAllowResourceById: function toggleAllowResourceById(id) {
	    return this.rsManager.toggleAllowResourceById(id);
	  },
	  getAllowedResourceById: function getAllowedResourceById(id) {
	    return this.rsManager.getAllowedResourceById(id);
	  },
	  isAllowedResource: function isAllowedResource(resource) {
	    return this.rsManager.isAllowedResource(resource);
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FC = __webpack_require__(3);

	var _objectAssign = __webpack_require__(10);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _Registor = __webpack_require__(60);

	var _Registor2 = _interopRequireDefault(_Registor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ResourceManager = (function (_Emitter) {
	  _inherits(ResourceManager, _Emitter);

	  function ResourceManager(calendar) {
	    _classCallCheck(this, ResourceManager);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResourceManager).call(this, calendar));

	    _this.calendar = calendar;
	    _this.registor = new _Registor2.default("id", "rsId-");
	    _this._reset();
	    return _this;
	  }

	  _createClass(ResourceManager, [{
	    key: "fetch",
	    value: function fetch() {
	      var _this2 = this;

	      var fetchingStatus = this.fetchingStatus;

	      fetchingStatus.start();
	      setTimeout(function () {
	        _this2.setResources(_this2.calendar.options["resources"] || []);
	        fetchingStatus.end(_this2.getResources());
	      }, 500);
	    }
	  }, {
	    key: "reFetch",
	    value: function reFetch() {
	      this._reset();
	      this.fetch();
	    }
	  }, {
	    key: "setAllowedResources",
	    value: function setAllowedResources(resources) {
	      this.allowedResources = resources;
	    }
	  }, {
	    key: "getAllowedResources",
	    value: function getAllowedResources() {
	      return this.allowedResources;
	    }
	  }, {
	    key: "addAllowedResource",
	    value: function addAllowedResource(resource) {
	      var alreadyHas = false;
	      this.allowedResources = this.allowedResources.map(function (aldRs) {
	        if (resource.id === aldRs.id) {
	          alreadyHas = true;
	        }
	        return resource.id !== aldRs.id ? aldRs : resource;
	      });
	      if (!alreadyHas) {
	        this.allowedResources.push(resource);
	      }
	    }
	  }, {
	    key: "removeAllowedResource",
	    value: function removeAllowedResource(resource) {
	      return this.allowedResources = this.allowedResources.filter(function (aldRs) {
	        return aldRs.id !== resource.id;
	      });
	    }
	  }, {
	    key: "toggleAllowResourceById",
	    value: function toggleAllowResourceById(id) {
	      var resource = this.getAllowedResourceById(id);
	      if (resource) {
	        this.removeAllowedResource(resource);
	      } else {
	        resource = this.getResourceById(id);
	        this.addAllowedResource(resource);
	      }
	    }
	  }, {
	    key: "getAllowedResourceById",
	    value: function getAllowedResourceById(id) {
	      var reource = null;
	      this.allowedResources.forEach(function (aldRs) {
	        if (id === aldRs.id) {
	          reource = aldRs;
	        }
	      });
	      return reource;
	    }
	  }, {
	    key: "isAllowedResource",
	    value: function isAllowedResource(resource) {
	      var alreadyHas = false;
	      this.allowedResources.forEach(function (aldRs) {
	        if (resource.id === aldRs.id) {
	          alreadyHas = true;
	        }
	      });
	      return alreadyHas;
	    }
	  }, {
	    key: "getResourceById",
	    value: function getResourceById(id) {
	      return this.registor.getMember(id);
	    }
	  }, {
	    key: "getResources",
	    value: function getResources() {
	      return this.resources;
	    }
	  }, {
	    key: "setResources",
	    value: function setResources(resources) {
	      var _this3 = this;

	      //this._reset();
	      resources.forEach(function (rsc) {
	        _this3.registor.register(rsc);
	      });
	      this.resources = this.registor.getMembers();
	    }
	  }, {
	    key: "addResource",
	    value: function addResource(resource) {
	      this.registor.register(resource);
	      this.resources = this.registor.getMembers();
	      this.trigger("add", resource);
	    }
	  }, {
	    key: "deleteResource",
	    value: function deleteResource(resource, noTrigger) {
	      if (!resource.id || !this.registor.getMember(resource.id)) {
	        return;
	      }
	      this.registor.unregister(resource);
	      this.resources = this.registor.getMembers();
	      if (!noTrigger) {
	        this.trigger("delete", resource);
	      }
	    }
	  }, {
	    key: "getEventResourceId",
	    value: function getEventResourceId(event) {
	      return String(event[this.getEventResourceField()] || '');
	    }
	  }, {
	    key: "_reset",
	    value: function _reset() {
	      this.resources = [];
	      this.allowedResources = [];
	      this.currentResource = null;
	      this.registor.destory();
	      this.fetchingStatus = new FetchingStatus();
	    }
	  }]);

	  return ResourceManager;
	})(_FC.Emitter);

	exports.default = ResourceManager;

	var FetchingStatus = (function () {
	  function FetchingStatus() {
	    _classCallCheck(this, FetchingStatus);

	    this.defer = $.Deferred();
	    this.promise = this.defer.promise();
	    this.doing = false;
	    this.done = false;
	  }

	  _createClass(FetchingStatus, [{
	    key: "start",
	    value: function start() {
	      this.doing = true;
	    }
	  }, {
	    key: "end",
	    value: function end(resources) {
	      this.doning = false;
	      this.done = true;
	      this.defer.resolve(resources);
	    }
	  }]);

	  return FetchingStatus;
	})();

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Registor = (function () {
	  function Registor(uniqueName, prefix) {
	    _classCallCheck(this, Registor);

	    this.memberMap = {};
	    this.nextIndex = 0;
	    this.prefix = prefix ? prefix : "registor-";
	    this.uniqueName = uniqueName ? uniqueName : "uniqueId-";
	  }

	  _createClass(Registor, [{
	    key: "register",
	    value: function register(obj) {
	      var id = obj[this.uniqueName];
	      if (id == null) {
	        id = this.prefix + this.nextIndex++;
	        obj[this.uniqueName] = id;
	      }
	      this.memberMap[id] = obj;
	    }
	  }, {
	    key: "unregister",
	    value: function unregister(obj) {
	      var id = obj[this.uniqueName];
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
	  }, {
	    key: "createUnique",
	    value: function createUnique(obj) {
	      var id = obj[this.uniqueName];
	      if (id != null) {
	        return id;
	      }
	      id = this.prefix + this.nextIndex++;
	      return obj[this.uniqueName] = id;
	    }
	  }, {
	    key: "getMember",
	    value: function getMember(unique) {
	      return this.memberMap[unique] || null;
	    }
	  }, {
	    key: "getMembers",
	    value: function getMembers() {
	      var _this = this;

	      return Object.keys(this.memberMap).map(function (k) {
	        return _this.memberMap[k];
	      });
	    }
	  }, {
	    key: "destory",
	    value: function destory() {
	      this.memberMap = {};
	      this.nextIndex = 0;
	    }
	  }]);

	  return Registor;
	})();

	exports.default = Registor;

/***/ }
/******/ ]);