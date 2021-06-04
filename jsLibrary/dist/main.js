/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myMath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myMath */ \"./src/myMath.js\");\n\r\n\r\nlet a = _myMath__WEBPACK_IMPORTED_MODULE_0__[\"myMath\"].toInteger(4.656)\r\nconsole.log(a);\r\n\r\nlet d = _myMath__WEBPACK_IMPORTED_MODULE_0__[\"myMath\"].toNumber('3tacos')\r\nconsole.log(d)\r\n\r\nlet m = _myMath__WEBPACK_IMPORTED_MODULE_0__[\"myMath\"].ceil(4.67776, 3)\r\nlet c = _myMath__WEBPACK_IMPORTED_MODULE_0__[\"myMath\"].floor(3.5647, 2)\r\nlet b = _myMath__WEBPACK_IMPORTED_MODULE_0__[\"myMath\"].round(5.66565, 3)\r\nconsole.log(m)\r\nconsole.log(c)\r\nconsole.log(b)\r\n\r\nlet array = [4, 2, 8, 6]\r\nlet arrayMin = _myMath__WEBPACK_IMPORTED_MODULE_0__[\"myMath\"].min(array)\r\nlet arrayMean = _myMath__WEBPACK_IMPORTED_MODULE_0__[\"myMath\"].mean(array)\r\nlet arrayMax = _myMath__WEBPACK_IMPORTED_MODULE_0__[\"myMath\"].max(array)\r\nconsole.log(arrayMin);\r\nconsole.log(arrayMean);\r\nconsole.log(arrayMax);\r\n\r\nlet myRange = _myMath__WEBPACK_IMPORTED_MODULE_0__[\"myMath\"].inRange(3, 1, 5)\r\nconsole.log(myRange);\r\n\r\nlet x = _myMath__WEBPACK_IMPORTED_MODULE_0__[\"myMath\"].random(1, 6)\r\nconsole.log(x)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBteU1hdGggfSBmcm9tICcuL215TWF0aCc7XHJcblxyXG5sZXQgYSA9IG15TWF0aC50b0ludGVnZXIoNC42NTYpXHJcbmNvbnNvbGUubG9nKGEpO1xyXG5cclxubGV0IGQgPSBteU1hdGgudG9OdW1iZXIoJzN0YWNvcycpXHJcbmNvbnNvbGUubG9nKGQpXHJcblxyXG5sZXQgbSA9IG15TWF0aC5jZWlsKDQuNjc3NzYsIDMpXHJcbmxldCBjID0gbXlNYXRoLmZsb29yKDMuNTY0NywgMilcclxubGV0IGIgPSBteU1hdGgucm91bmQoNS42NjU2NSwgMylcclxuY29uc29sZS5sb2cobSlcclxuY29uc29sZS5sb2coYylcclxuY29uc29sZS5sb2coYilcclxuXHJcbmxldCBhcnJheSA9IFs0LCAyLCA4LCA2XVxyXG5sZXQgYXJyYXlNaW4gPSBteU1hdGgubWluKGFycmF5KVxyXG5sZXQgYXJyYXlNZWFuID0gbXlNYXRoLm1lYW4oYXJyYXkpXHJcbmxldCBhcnJheU1heCA9IG15TWF0aC5tYXgoYXJyYXkpXHJcbmNvbnNvbGUubG9nKGFycmF5TWluKTtcclxuY29uc29sZS5sb2coYXJyYXlNZWFuKTtcclxuY29uc29sZS5sb2coYXJyYXlNYXgpO1xyXG5cclxubGV0IG15UmFuZ2UgPSBteU1hdGguaW5SYW5nZSgzLCAxLCA1KVxyXG5jb25zb2xlLmxvZyhteVJhbmdlKTtcclxuXHJcbmxldCB4ID0gbXlNYXRoLnJhbmRvbSgxLCA2KVxyXG5jb25zb2xlLmxvZyh4KSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/myMath.js":
/*!***********************!*\
  !*** ./src/myMath.js ***!
  \***********************/
/*! exports provided: myMath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myMath\", function() { return myMath; });\nconsole.log('Hello from myMath.');\r\n\r\nlet myMath = (() => {\r\n    return {\r\n        toInteger(value) {\r\n            const parsed = parseInt(value)\r\n            if (isNaN(parsed)) {\r\n                throw new Error('Cannot convert value to integer.s')\r\n            }\r\n            return parsed;\r\n        },\r\n        toNumber(value) {\r\n            const num = parseFloat(value)\r\n            if (isNaN(num)) {\r\n                throw new Error('Cannot convert value to number.')\r\n            }\r\n            return num;\r\n        },\r\n        ceil(number, precision) {\r\n            precision = Math.abs(parseInt(precision)) || 0;\r\n            var coefficient = Math.pow(10, precision);\r\n            if (isNaN(number)) {\r\n                throw new Error ('Please enter valid number.')\r\n            }\r\n            return Math.round(number * coefficient) / coefficient;\r\n        },\r\n        floor(number, precision) {\r\n            precision = Math.abs(parseInt(precision)) || 0;\r\n            var coefficient = Math.pow(10, precision);\r\n            if (isNaN(number)) {\r\n                throw new Error ('Please enter valid number.')\r\n            }\r\n            return Math.round(number * coefficient) / coefficient;\r\n        },\r\n        \r\n        round(number, precision) {\r\n            precision = Math.abs(parseInt(precision)) || 0;\r\n            var coefficient = Math.pow(10, precision);\r\n            if (isNaN(number)) {\r\n                throw new Error ('Please enter valid number.')\r\n            }\r\n            return Math.round(number * coefficient) / coefficient;\r\n        },\r\n        min(array) {\r\n            var min = Math.min.apply(Math, array)\r\n            if (!Array.isArray(array)) {\r\n                throw new Error('This function only works on arrays.');\r\n            }\r\n            return min;\r\n        },\r\n        mean(array) {\r\n            var values = (array);\r\n            values.sort((a, b) => a - b);\r\n            let lowMiddle = Math.floor((values.length - 1) / 2);\r\n            let highMiddle = Math.ceil((values.length - 1) / 2);\r\n            let mean = (values[lowMiddle] + values[highMiddle]) / 2;\r\n            if (!Array.isArray(array)) {\r\n                throw new Error('This function only works on arrays.');\r\n            }\r\n            return mean;\r\n        },\r\n        max(array) {\r\n            var max = Math.max.apply(Math, array)\r\n            if (!Array.isArray(array)) {\r\n                throw new Error('This function only works on arrays.');\r\n            }\r\n            return max;\r\n        },\r\n        inRange(num, start, end) {\r\n            if (num < start && num > end) {\r\n                throw new Error ('Number is not in range.')\r\n            } \r\n            return true;\r\n        },\r\n        random(min, max) {\r\n            if (min === max) {\r\n                throw new Error('Bounds cannot be the same.')\r\n            }\r\n            return Math.floor(Math.random() * (max - min + 1)) + min;\r\n        },\r\n    }\r\n})();\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbXlNYXRoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL215TWF0aC5qcz80ODhmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIG15TWF0aC4nKTtcclxuXHJcbmV4cG9ydCBsZXQgbXlNYXRoID0gKCgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9JbnRlZ2VyKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlSW50KHZhbHVlKVxyXG4gICAgICAgICAgICBpZiAoaXNOYU4ocGFyc2VkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY29udmVydCB2YWx1ZSB0byBpbnRlZ2VyLnMnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b051bWJlcih2YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbHVlKVxyXG4gICAgICAgICAgICBpZiAoaXNOYU4obnVtKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY29udmVydCB2YWx1ZSB0byBudW1iZXIuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2VpbChudW1iZXIsIHByZWNpc2lvbikge1xyXG4gICAgICAgICAgICBwcmVjaXNpb24gPSBNYXRoLmFicyhwYXJzZUludChwcmVjaXNpb24pKSB8fCAwO1xyXG4gICAgICAgICAgICB2YXIgY29lZmZpY2llbnQgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKG51bWJlcikpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoJ1BsZWFzZSBlbnRlciB2YWxpZCBudW1iZXIuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiBjb2VmZmljaWVudCkgLyBjb2VmZmljaWVudDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZsb29yKG51bWJlciwgcHJlY2lzaW9uKSB7XHJcbiAgICAgICAgICAgIHByZWNpc2lvbiA9IE1hdGguYWJzKHBhcnNlSW50KHByZWNpc2lvbikpIHx8IDA7XHJcbiAgICAgICAgICAgIHZhciBjb2VmZmljaWVudCA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xyXG4gICAgICAgICAgICBpZiAoaXNOYU4obnVtYmVyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yICgnUGxlYXNlIGVudGVyIHZhbGlkIG51bWJlci4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG51bWJlciAqIGNvZWZmaWNpZW50KSAvIGNvZWZmaWNpZW50O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcm91bmQobnVtYmVyLCBwcmVjaXNpb24pIHtcclxuICAgICAgICAgICAgcHJlY2lzaW9uID0gTWF0aC5hYnMocGFyc2VJbnQocHJlY2lzaW9uKSkgfHwgMDtcclxuICAgICAgICAgICAgdmFyIGNvZWZmaWNpZW50ID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XHJcbiAgICAgICAgICAgIGlmIChpc05hTihudW1iZXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdQbGVhc2UgZW50ZXIgdmFsaWQgbnVtYmVyLicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogY29lZmZpY2llbnQpIC8gY29lZmZpY2llbnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtaW4oYXJyYXkpIHtcclxuICAgICAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluLmFwcGx5KE1hdGgsIGFycmF5KVxyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgZnVuY3Rpb24gb25seSB3b3JrcyBvbiBhcnJheXMuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1pbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lYW4oYXJyYXkpIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IChhcnJheSk7XHJcbiAgICAgICAgICAgIHZhbHVlcy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgICAgICAgICAgIGxldCBsb3dNaWRkbGUgPSBNYXRoLmZsb29yKCh2YWx1ZXMubGVuZ3RoIC0gMSkgLyAyKTtcclxuICAgICAgICAgICAgbGV0IGhpZ2hNaWRkbGUgPSBNYXRoLmNlaWwoKHZhbHVlcy5sZW5ndGggLSAxKSAvIDIpO1xyXG4gICAgICAgICAgICBsZXQgbWVhbiA9ICh2YWx1ZXNbbG93TWlkZGxlXSArIHZhbHVlc1toaWdoTWlkZGxlXSkgLyAyO1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgZnVuY3Rpb24gb25seSB3b3JrcyBvbiBhcnJheXMuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1lYW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXgoYXJyYXkpIHtcclxuICAgICAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIGFycmF5KVxyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgZnVuY3Rpb24gb25seSB3b3JrcyBvbiBhcnJheXMuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1heDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluUmFuZ2UobnVtLCBzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgICAgIGlmIChudW0gPCBzdGFydCAmJiBudW0gPiBlbmQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoJ051bWJlciBpcyBub3QgaW4gcmFuZ2UuJylcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByYW5kb20obWluLCBtYXgpIHtcclxuICAgICAgICAgICAgaWYgKG1pbiA9PT0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JvdW5kcyBjYW5ub3QgYmUgdGhlIHNhbWUuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuXHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/myMath.js\n");

/***/ })

/******/ });