define("store.provider", [], function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var states = {};

var State = function () {
  function State(state) {
    _classCallCheck(this, State);

    this.state = {};
    this.listeners = {};

    this.state = state;
  }

  _createClass(State, [{
    key: '_isEqual',
    value: function _isEqual(key, val) {
      var oldVal = this.state[key];
      return oldVal === val;
    }
  }, {
    key: '_notifiy',
    value: function _notifiy(key) {
      var _this = this;

      var listeners = this.listeners[key] || [];
      listeners.forEach(function (listener) {
        listener(_this.state[key]);
      });
    }
  }, {
    key: 'update',
    value: function update(key, val) {
      if (this._isEqual(key, val)) {
        console.log('values are equal so skipping change');
        return;
      }
      this.state[key] = val;
      this._notifiy(key);
    }
  }, {
    key: 'get',
    value: function get(key) {
      return this.state[key] || this.state;
    }
  }, {
    key: 'observe',
    value: function observe(key, cb) {
      var listeners = this.listeners[key] || [];
      listeners.push(cb);
      this.listeners[key] = listeners;
      console.log('Observers for ', key, listeners.length);
    }
  }, {
    key: 'destroy',
    value: function destroy(key, cb) {
      var listeners = this.listeners[key];
      var index = cb ? listeners.indexOf(cb) : listeners = [];
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }]);

  return State;
}();

var StateProvider = exports.StateProvider = {
  createState: function createState(name, state) {
    var newState = states[name] || new State(state);
    states[name] = newState;
    return store;
  },
  getState: function getState(name) {
    return state[name];
  },
  destroy: function destroy(name) {
    state[name] = null;
  }
};

/***/ })
/******/ ])});;
//# sourceMappingURL=store.provider.js.map