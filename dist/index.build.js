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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _starfield_starfield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./starfield/starfield */ \"./starfield/starfield.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nfunction Game() {\r\n\r\n\tthis.config = {\r\n\t\tgameWidth: 400,\r\n\t\tgameHeight: 300,\r\n\t\tfps: 50\r\n\t}\r\n\r\n\t// Статы\r\n\tthis.lives = 3;\r\n\tthis.width = 0;\r\n\tthis.height = 0;\r\n\tthis.gameBound = { left: 0, right: 0, top: 0, bottom: 0 };\r\n\r\n\t// Стэк очков\r\n\tthis.stateStack = [];\r\n\r\n\tthis.pressedKeys = {};\r\n\tthis.gameCanvas = null;\r\n}\r\n\r\nGame.prototype.initialise = function (gameCanvas) {\r\n\r\n\t//  Set the game canvas\r\n\tthis.gameCanvas = gameCanvas;\r\n\r\n\t//  Set the game width and height\r\n\tthis.width = gameCanvas.width;\r\n\tthis.height = gameCanvas.height;\r\n\r\n\t//  Set the state game bounds\r\n\tthis.gameBounds = {\r\n\t\tleft: gameCanvas.width / 2 - this.config.gameWidth / 2,\r\n\t\tright: gameCanvas.width / 2 + this.config.gameWidth / 2,\r\n\t\ttop: gameCanvas.height / 2 - this.config.gameHeight / 2,\r\n\t\tbottom: gameCanvas.height / 2 + this.config.gameHeight / 2,\r\n\t};\r\n};\r\n\r\n//  Returns the current state.\r\nGame.prototype.currentState = function () {\r\n\treturn this.stateStack.length > 0 ? this.stateStack[this.stateStack.length - 1] : null;\r\n}\r\n\r\nGame.prototype.moveToState = function (state) {\r\n\r\n\t//  Are we already in a state?\r\n\tif (this.currentState()) {\r\n\r\n\t\t//  Before we pop the current state, see if the \r\n\t\t//  state has a leave function. If it does we can call it.\r\n\t\tif (this.currentState().leave) {\r\n\t\t\tthis.currentState().leave(game);\r\n\t\t}\r\n\r\n\t\tthis.stateStack.pop();\r\n\t}\r\n\r\n\t//  If there's an enter function for the new state, call it.\r\n\tif (state.enter) {\r\n\t\tstate.enter(game);\r\n\t}\r\n\r\n\t//  Set the current state.\r\n\tthis.stateStack.push(state);\r\n};\r\n\r\nGame.prototype.pushState = function (state) {\r\n\r\n\t//  If there's an enter function for the new state, call it.\r\n\tif (state.enter) {\r\n\t\tstate.enter(game);\r\n\t}\r\n\t//  Set the current state.\r\n\tthis.stateStack.push(state);\r\n};\r\n\r\nGame.prototype.popState = function () {\r\n\r\n\t//  Leave and pop the state.\r\n\tif (this.currentState()) {\r\n\t\tif (this.currentState().leave) {\r\n\t\t\tthis.currentState().leave(game);\r\n\t\t}\r\n\r\n\t\t//  Set the current state.\r\n\t\tthis.stateStack.pop();\r\n\t}\r\n}; \n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./starfield/starfield.js":
/*!********************************!*\
  !*** ./starfield/starfield.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _starfield_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./starfield.scss */ \"./starfield/starfield.scss\");\n/* harmony import */ var _starfield_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_starfield_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nfunction randColor() {\r\n\treturn '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);\r\n}\r\n\r\nfunction Starfield() {\r\n\tthis.fps = 30;\r\n\tthis.canvas = null;\r\n\tthis.width = 0;\r\n\tthis.height = 0;\r\n\tthis.minVelocity = 15;\r\n\tthis.maxVelocity = 30;\r\n\tthis.stars = 300;\r\n\tthis.intervalId = 0;\r\n\tthis.planets = 3;\r\n\tthis.planetVelocity = 10;\r\n}\r\n\r\nStarfield.prototype.initialise = function (div) {\r\n\r\n\tlet self = this;\r\n\r\n\tthis.containerDiv = div;\r\n\tself.width = window.innerWidth;\r\n\tself.height = window.innerHeight;\r\n\r\n\twindow.addEventListener('resize', function resize(event) {\r\n\t\tself.width = window.innerWidth;\r\n\t\tself.height = window.innerHeight;\r\n\t\tself.canvas.width = self.width;\r\n\t\tself.canvas.height = self.height;\r\n\t\tself.draw();\r\n\t})\r\n\r\n\t// Create the canvas\r\n\tlet canvas = document.createElement('canvas');\r\n\tdiv.appendChild(canvas);\r\n\tthis.canvas = canvas;\r\n\tthis.canvas.width = this.width;\r\n\tthis.canvas.height = this.height;\r\n}\r\n\r\n\r\nStarfield.prototype.start = function () {\r\n\r\n\tlet stars = [];\r\n\tfor (let i = 0; i < this.stars; i++) {\r\n\t\tstars[i] = new Star(Math.random() * this.width, Math.random() * this.height,\r\n\t\t\tMath.random() * 3 + 1, (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity);\r\n\t}\r\n\tthis.stars = stars;\r\n\r\n\tlet planets = [];\r\n\tfor (let i = 0; i < this.planets; i++) {\r\n\t\tplanets[i] = new Planet(Math.random() * this.width, Math.random() * this.height,\r\n\t\t\tMath.random() * 50 + 10, 0, 2 * Math.PI, this.planetVelocity);\r\n\t}\r\n\tthis.planets = planets;\r\n\r\n\tlet self = this;\r\n\t// timer\r\n\tthis.intervalId = setInterval(function () {\r\n\t\tself.update();\r\n\t\tself.draw();\r\n\t}, 1000 / this.fps);\r\n}\r\n\r\nStarfield.prototype.update = function () {\r\n\tlet dt = 1 / this.fps;\r\n\tfor (let i = 0; i < this.stars.length; i++) {\r\n\t\tlet star = this.stars[i];\r\n\t\tstar.y += dt * star.velocity;\r\n\t\t// from bottom to top\r\n\t\tif (star.y > this.height) {\r\n\t\t\tthis.stars[i] = new Star(Math.random() * this.width, 0,\r\n\t\t\t\tMath.random() * 3 + 1, (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity);\r\n\t\t}\r\n\t}\r\n\tfor (let j = 0; j < this.planets.length; j++) {\r\n\t\tlet planet = this.planets[j];\r\n\t\tplanet.y += dt * planet.velocity;\r\n\t\t// from bottom to top\r\n\t\tif (planet.y > this.height) {\r\n\t\t\tthis.planets[j] = new Planet(Math.random() * this.width, 0,\r\n\t\t\t\tMath.random() * 50 + 10, 0, 2 * Math.PI, this.planetVelocity);\r\n\t\t}\r\n\t}\r\n}\r\n\r\n\r\nStarfield.prototype.draw = function () {\r\n\r\n\tlet context = this.canvas.getContext('2d');\r\n\r\n\t//bg\r\n\tcontext.fillStyle = '#000';\r\n\tcontext.fillRect(0, 0, this.width, this.height);\r\n\r\n\t//stars\r\n\tcontext.fillStyle = '#fff';\r\n\tfor (let i = 0; i < this.stars.length; i++) {\r\n\t\tlet star = this.stars[i];\r\n\t\tcontext.fillRect(star.x, star.y, star.size, star.size);\r\n\t}\r\n\r\n\tfor (let i = 0; i < this.planets.length; i++) {\r\n\t\tlet planet = this.planets[i];\r\n\t\tlet randX = [planet.x, planet.x + planet.radius];\r\n\t\tlet randY = [planet.y, planet.y + planet.radius];\r\n\t\tlet randomX = randX[planet.randXSeed];\r\n\t\tlet randomY = randY[planet.randYSeed];\r\n\t\tlet gradient = context.createLinearGradient(planet.x, planet.y, randomX, randomY);\r\n\t\tgradient.addColorStop(0, planet.randColor1);\r\n\t\tgradient.addColorStop(0.5, planet.randColor2);\r\n\t\t// gradient.addColorStop(0.51, randColor());\r\n\t\t// gradient.addColorStop(1, randColor());\r\n\t\tcontext.fillStyle = gradient;\r\n\t\tcontext.beginPath();\r\n\t\tcontext.arc(planet.x, planet.y,\r\n\t\t\tplanet.radius, planet.startAngle, planet.endAngle);\r\n\t\tcontext.fill();\r\n\t}\r\n}\r\n\r\nfunction Star(x, y, size, velocity) {\r\n\tthis.x = x;\r\n\tthis.y = y;\r\n\tthis.size = size;\r\n\tthis.velocity = velocity;\r\n}\r\n\r\nfunction Planet(x, y, radius, startAngle, endAngle, velocity) {\r\n\tthis.x = x;\r\n\tthis.y = y;\r\n\tthis.radius = radius;\r\n\tthis.startAngle = startAngle;\r\n\tthis.endAngle = endAngle;\r\n\tthis.velocity = velocity;\r\n\tthis.randXSeed = Math.floor(Math.random() * 2)\r\n\tthis.randYSeed = Math.floor(Math.random() * 2)\r\n\tthis.randColor1 = randColor()\r\n\tthis.randColor2 = randColor()\r\n}\r\n\r\n\r\nlet container = document.querySelector('.container');\r\nlet starfield = new Starfield();\r\nstarfield.initialise(container);\r\nstarfield.start();\r\n\n\n//# sourceURL=webpack:///./starfield/starfield.js?");

/***/ }),

/***/ "./starfield/starfield.scss":
/*!**********************************!*\
  !*** ./starfield/starfield.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./starfield/starfield.scss?");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./style.scss?");

/***/ })

/******/ });