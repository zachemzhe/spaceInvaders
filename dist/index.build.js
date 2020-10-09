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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _starfield_starfield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./starfield/starfield */ \"./starfield/starfield.js\");\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/vm-browserify/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vm-browserify/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var indexOf = function (xs, item) {\n    if (xs.indexOf) return xs.indexOf(item);\n    else for (var i = 0; i < xs.length; i++) {\n        if (xs[i] === item) return i;\n    }\n    return -1;\n};\nvar Object_keys = function (obj) {\n    if (Object.keys) return Object.keys(obj)\n    else {\n        var res = [];\n        for (var key in obj) res.push(key)\n        return res;\n    }\n};\n\nvar forEach = function (xs, fn) {\n    if (xs.forEach) return xs.forEach(fn)\n    else for (var i = 0; i < xs.length; i++) {\n        fn(xs[i], i, xs);\n    }\n};\n\nvar defineProp = (function() {\n    try {\n        Object.defineProperty({}, '_', {});\n        return function(obj, name, value) {\n            Object.defineProperty(obj, name, {\n                writable: true,\n                enumerable: false,\n                configurable: true,\n                value: value\n            })\n        };\n    } catch(e) {\n        return function(obj, name, value) {\n            obj[name] = value;\n        };\n    }\n}());\n\nvar globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function',\n'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError',\n'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError',\n'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape',\n'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];\n\nfunction Context() {}\nContext.prototype = {};\n\nvar Script = exports.Script = function NodeScript (code) {\n    if (!(this instanceof Script)) return new Script(code);\n    this.code = code;\n};\n\nScript.prototype.runInContext = function (context) {\n    if (!(context instanceof Context)) {\n        throw new TypeError(\"needs a 'context' argument.\");\n    }\n    \n    var iframe = document.createElement('iframe');\n    if (!iframe.style) iframe.style = {};\n    iframe.style.display = 'none';\n    \n    document.body.appendChild(iframe);\n    \n    var win = iframe.contentWindow;\n    var wEval = win.eval, wExecScript = win.execScript;\n\n    if (!wEval && wExecScript) {\n        // win.eval() magically appears when this is called in IE:\n        wExecScript.call(win, 'null');\n        wEval = win.eval;\n    }\n    \n    forEach(Object_keys(context), function (key) {\n        win[key] = context[key];\n    });\n    forEach(globals, function (key) {\n        if (context[key]) {\n            win[key] = context[key];\n        }\n    });\n    \n    var winKeys = Object_keys(win);\n\n    var res = wEval.call(win, this.code);\n    \n    forEach(Object_keys(win), function (key) {\n        // Avoid copying circular objects like `top` and `window` by only\n        // updating existing context properties or new properties in the `win`\n        // that was only introduced after the eval.\n        if (key in context || indexOf(winKeys, key) === -1) {\n            context[key] = win[key];\n        }\n    });\n\n    forEach(globals, function (key) {\n        if (!(key in context)) {\n            defineProp(context, key, win[key]);\n        }\n    });\n    \n    document.body.removeChild(iframe);\n    \n    return res;\n};\n\nScript.prototype.runInThisContext = function () {\n    return eval(this.code); // maybe...\n};\n\nScript.prototype.runInNewContext = function (context) {\n    var ctx = Script.createContext(context);\n    var res = this.runInContext(ctx);\n\n    if (context) {\n        forEach(Object_keys(ctx), function (key) {\n            context[key] = ctx[key];\n        });\n    }\n\n    return res;\n};\n\nforEach(Object_keys(Script.prototype), function (name) {\n    exports[name] = Script[name] = function (code) {\n        var s = Script(code);\n        return s[name].apply(s, [].slice.call(arguments, 1));\n    };\n});\n\nexports.isContext = function (context) {\n    return context instanceof Context;\n};\n\nexports.createScript = function (code) {\n    return exports.Script(code);\n};\n\nexports.createContext = Script.createContext = function (context) {\n    var copy = new Context();\n    if(typeof context === 'object') {\n        forEach(Object_keys(context), function (key) {\n            copy[key] = context[key];\n        });\n    }\n    return copy;\n};\n\n\n//# sourceURL=webpack:///./node_modules/vm-browserify/index.js?");

/***/ }),

/***/ "./starfield/starfield.js":
/*!********************************!*\
  !*** ./starfield/starfield.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vm */ \"./node_modules/vm-browserify/index.js\");\n/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vm__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _starfield_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./starfield.scss */ \"./starfield/starfield.scss\");\n/* harmony import */ var _starfield_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_starfield_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nfunction Starfield() {\r\n\tthis.fps = 30;\r\n\tthis.canvas = null;\r\n\tthis.width = 0;\r\n\tthis.height = 0;\r\n\tthis.minVelocity = 15;\r\n\tthis.maxVelocity = 15;\r\n\tthis.stars = 100;\r\n\tthis.intervalId = 0;\r\n}\r\n\r\nStarfield.prototype.initialise = function (div) {\r\n\r\n\tlet self = this;\r\n\r\n\tthis.containerDiv = div;\r\n\tself.width = window.innerWidth;\r\n\tself.height = window.innerHeight;\r\n\r\n\twindow.addEventListener('resize', function resize(event) {\r\n\t\tself.width = window.innerWidth;\r\n\t\tself.height = window.innerHeight;\r\n\t\tself.canvas.width = self.width;\r\n\t\tself.canvas.height = self.height;\r\n\t\tself.draw();\r\n\t})\r\n\r\n\t// Create the canvas\r\n\tlet canvas = document.createElement('canvas');\r\n\tdiv.appendChild(canvas);\r\n\tthis.canvas = canvas;\r\n\tthis.canvas.width = this.width;\r\n\tthis.canvas.height = this.height;\r\n}\r\n\r\n\r\nStarfield.prototype.start = function () {\r\n\r\n\tlet stars = [];\r\n\tfor (let i = 0; i < this.stars; i++) {\r\n\t\tstars[i] = new Star(Math.random() * this.width, Math.random() * this.height,\r\n\t\t\tMath.random() * 3 + 1, (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity);\r\n\t}\r\n\tthis.stars = stars;\r\n\r\n\tlet self = this;\r\n\t// timer\r\n\tthis.intervalId = setInterval(function () {\r\n\t\tself.update();\r\n\t\tself.draw();\r\n\t}, 1000 / this.fps);\r\n}\r\n\r\nStarfield.prototype.update = function () {\r\n\tvar dt = 1 / this.fps;\r\n\tfor (let i = 0; i < this.stars.length; i++) {\r\n\t\tlet star = this.stars[i];\r\n\t\tstar.y += dt * star.velocity;\r\n\t\t// from bottom to top\r\n\t\tif (star.y > this.height) {\r\n\t\t\tthis.stars[i] = new Star(Math.random() * this.width, 0,\r\n\t\t\t\tMath.random() * 3 + 1, (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity);\r\n\t\t}\r\n\t}\r\n}\r\n\r\nStarfield.prototype.draw = function () {\r\n\r\n\tlet context = this.canvas.getContext('2d');\r\n\r\n\t//bg\r\n\tcontext.fillStyle = '#000';\r\n\tcontext.fillRect(0, 0, this.width, this.height);\r\n\r\n\t//stars\r\n\tcontext.fillStyle = '#fff';\r\n\tfor (let i = 0; i < this.stars.length; i++) {\r\n\t\tlet star = this.stars[i];\r\n\t\tcontext.fillRect(star.x, star.y, star.size, star.size);\r\n\t}\r\n}\r\n\r\nfunction Star(x, y, size, velocity) {\r\n\tthis.x = x;\r\n\tthis.y = y;\r\n\tthis.size = size;\r\n\tthis.velocity = velocity;\r\n}\r\n\r\nlet container = document.querySelector('.container');\r\nlet starfield = new Starfield();\r\nstarfield.initialise(container);\r\nstarfield.start();\n\n//# sourceURL=webpack:///./starfield/starfield.js?");

/***/ }),

/***/ "./starfield/starfield.scss":
/*!**********************************!*\
  !*** ./starfield/starfield.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./starfield/starfield.scss?");

/***/ })

/******/ });