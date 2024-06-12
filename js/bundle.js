(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePicker = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DatePicker = exports.DatePicker = /*#__PURE__*/function () {
  function DatePicker() {
    _classCallCheck(this, DatePicker);
    this.datePickerFrom = document.querySelector('#datepicker-from');
    this.datePickerTo = document.querySelector('#datepicker-to');
    this.clearButtons = document.querySelectorAll('.close');
    this.openCalendarButtons = document.querySelectorAll('.calendar');
    this.customLocale = {
      weekdays: {
        shorthand: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        longhand: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      }
    };
    flatpickr.localize(this.customLocale);
    this.initDatePicker(this.datePickerFrom);
    this.initDatePicker(this.datePickerTo);
    this.addEventListeners();
  }
  return _createClass(DatePicker, [{
    key: "initDatePicker",
    value: function initDatePicker(inputElement) {
      flatpickr(inputElement, {
        altInput: true,
        altFormat: "d_m_Y",
        prevArrow: '&lt;&lt;',
        nextArrow: '&gt;&gt;'
      });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
      this.clearButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
          return _this.handleClickClearBtn(event);
        });
      });
      this.openCalendarButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
          return _this.handleClickOpenCalendarBtn(event);
        });
      });
    }
  }, {
    key: "handleClickClearBtn",
    value: function handleClickClearBtn(event) {
      var input = event.target.closest('.header__datepicker').querySelector('input');
      input._flatpickr.clear();
    }
  }, {
    key: "handleClickOpenCalendarBtn",
    value: function handleClickOpenCalendarBtn(event) {
      var input = event.target.closest('.header__datepicker').querySelector('input');
      input._flatpickr.toggle();
    }
  }]);
}();

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewToggle = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ViewToggle = exports.ViewToggle = /*#__PURE__*/function () {
  function ViewToggle() {
    _classCallCheck(this, ViewToggle);
    this.listButton = document.querySelector('.row');
    this.gridButton = document.querySelector('.grid');
    this.container = document.querySelector('.content-section__list');
    this.items = document.querySelectorAll('.item');
    this.initView();
    this.addEventListeners();
  }
  return _createClass(ViewToggle, [{
    key: "initView",
    value: function initView() {
      this.container.classList.add('list-row');
      this.listButton.classList.add('icon-btn--active');
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
      this.listButton.addEventListener('click', function () {
        return _this.showListView();
      });
      this.gridButton.addEventListener('click', function () {
        return _this.showGridView();
      });
    }
  }, {
    key: "showListView",
    value: function showListView() {
      this.container.classList.remove('list-grid');
      this.container.classList.add('list-row');
      this.gridButton.classList.remove('icon-btn--active');
      this.listButton.classList.add('icon-btn--active');
      this.items[this.items.length - 1].style.display = 'flex';
    }
  }, {
    key: "showGridView",
    value: function showGridView() {
      this.container.classList.remove('list-row');
      this.container.classList.add('list-grid');
      this.listButton.classList.remove('icon-btn--active');
      this.gridButton.classList.add('icon-btn--active');
      this.items[this.items.length - 1].style.display = 'none';
    }
  }]);
}();

},{}],3:[function(require,module,exports){
"use strict";

var _DatePicker = require("./DatePicker.js");
var _ViewToggle = require("./ViewToggle.js");
function init() {
  new _DatePicker.DatePicker();
  new _ViewToggle.ViewToggle();
}
document.addEventListener('DOMContentLoaded', init);

},{"./DatePicker.js":1,"./ViewToggle.js":2}]},{},[3])

//# sourceMappingURL=bundle.js.map
