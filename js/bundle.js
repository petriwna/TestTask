(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function init() {
  var elemFrom = document.getElementById('datepicker-from');
  var elemTo = document.getElementById('datepicker-to');
  var customLocale = {
    weekdays: {
      shorthand: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      longhand: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
  };
  flatpickr.localize(customLocale);
  flatpickr(elemFrom, {
    altInput: true,
    altFormat: "d_m_Y",
    prevArrow: '&lt;&lt;',
    nextArrow: '&gt;&gt;'
  });
  flatpickr(elemTo, {
    altInput: true,
    altFormat: "d_m_Y",
    prevArrow: '&lt;&lt;',
    nextArrow: '&gt;&gt;'
  });
  var toggleButtons = document.querySelectorAll('.calendar');
  toggleButtons.forEach(function (el) {
    el.addEventListener('click', function (event) {
      var input = event.target.closest('.header__datepicker').querySelector('input');
      input._flatpickr.toggle();
    });
  });
  var clearButtons = document.querySelectorAll('.close');
  clearButtons.forEach(function (el) {
    el.addEventListener('click', function () {
      var input = event.target.closest('.header__datepicker').querySelector('input');
      input._flatpickr.clear();
    });
  });
  var listType = document.querySelector('.row');
  var blockType = document.querySelector('.grid');
  var list = document.querySelector('.content-section__list-row');
  var grid = document.querySelector('.content-section__list-grid');
  grid.classList.add('visually-hidden');
  listType.classList.add('icon-btn--active');
  listType.addEventListener('click', function () {
    list.classList.remove('visually-hidden');
    grid.classList.add('visually-hidden');
    blockType.classList.remove('icon-btn--active');
    listType.classList.add('icon-btn--active');
  });
  blockType.addEventListener('click', function () {
    grid.classList.remove('visually-hidden');
    list.classList.add('visually-hidden');
    listType.classList.remove('icon-btn--active');
    blockType.classList.add('icon-btn--active');
  });
}
document.addEventListener('DOMContentLoaded', init);

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
