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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/js/main.js":
/*!*************************!*\
  !*** ./dist/js/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_roger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/roger */ \"./src/roger.js\");\n\n\n // import Roger from \"../../lib/roger.min\";\n\nvar spriteSheetUrl = \"img/damn_pablos_heads.png\";\nvar spriteSize = {\n  w: 54,\n  h: 90\n};\nvar sheetSize = {\n  w: 512,\n  h: 512\n};\nvar ssPablosHeads = new _src_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RegularSheet(spriteSheetUrl, sheetSize, spriteSize);\nvar spPabloIdle = new _src_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Sprite(spriteSheetUrl, spriteSize, {\n  x: 0,\n  y: 0\n});\nvar spEyesClosed = new _src_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Animation(\"closed\", ssPablosHeads, [11]);\nvar animPablos_blink1 = new _src_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Animation(\"blink1\", ssPablosHeads, [0, 1, 2, 1, 0], {\n  delay: 10,\n  loops: 0,\n  callBack: function callBack() {\n    console.log(\"blink complete!\");\n  }\n});\nvar animPablos_talk1 = new _src_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Animation(\"talk1\", ssPablosHeads, [3, 4, 5, 6, 7], {\n  direction: \"random\"\n});\nvar animPablos_blink2 = new _src_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Animation(\"blink2\", ssPablosHeads, [9, 10, 11, 10, 9], {\n  delay: 10,\n  callBack: function callBack() {\n    console.log(\"blink2 complete!\");\n  }\n});\nvar animPablos_talk2 = new _src_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Animation(\"talk2\", ssPablosHeads, [12, 13, 14, 15, 16], {\n  callBack: function callBack() {\n    console.log(\"talk2 complete!\");\n  }\n});\nvar pabloToon = new _src_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Toon(\"pablo\", spPabloIdle);\npabloToon.add(animPablos_blink1);\npabloToon.add(animPablos_blink2);\npabloToon.add(animPablos_talk1);\npabloToon.add(animPablos_talk2);\npabloToon.add(spEyesClosed);\npabloToon.play(\"blink1\");\nvar rClock = new _src_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Clock(0.1);\nrClock.addToList(pabloToon);\nrClock.setDebugMode(false);\nrClock.start();\ndocument.getElementById(\"button1\").addEventListener(\"click\", function () {\n  console.log(\"talk1\");\n  pabloToon.play(\"talk1\");\n});\ndocument.getElementById(\"button2\").addEventListener(\"click\", function () {\n  console.log(\"closed\"); // pabloToon.play(\"closed\");\n\n  console.log(\"getCurrentAnimation\", pabloToon.currentAnimationName);\n  pabloToon.stop();\n});\n\n//# sourceURL=webpack:///./dist/js/main.js?");

/***/ }),

/***/ "./src/class/RogerAnimation.js":
/*!*************************************!*\
  !*** ./src/class/RogerAnimation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * @class RogerAnimation\r\n * @param {string} name name for the animation\r\n * @param {RogerSheet} spriteSheet sprite sheet linked to the animation\r\n * @param {Array} frameList list with the frames that make the animation\r\n * @return {RogerAnimation} animation\r\n * @return {strign} name\r\n * @return {string} url\r\n * @return {RogerSprite} sprite\r\n * @see RogerSprite\r\n */\nvar RogerAnimation =\n/*#__PURE__*/\nfunction () {\n  function RogerAnimation(name, spriteSheet, frameList, options) {\n    _classCallCheck(this, RogerAnimation);\n\n    this.direction = {\n      FORWARD: \"forward\",\n      BACKWARD: \"backward\",\n      RANDOM: \"random\"\n    };\n    this.animName = name;\n    this.spriteSheetUrl = spriteSheet.url;\n    this.spriteAnimation = this.getSpriteAnimation(spriteSheet, frameList);\n    this.options = this.getDefaultOptions(options);\n    this.isFinished = false;\n  }\n  /* PUBLIC METHODS */\n\n\n  _createClass(RogerAnimation, [{\n    key: \"setOption\",\n    value: function setOption(object) {\n      this.options = object;\n    }\n  }, {\n    key: \"getSprite\",\n    value: function getSprite(number) {\n      return this.spriteAnimation[number];\n    }\n  }, {\n    key: \"executeCallBack\",\n    value: function executeCallBack() {\n      if (this.hasCallBack) {\n        this.options.callBack();\n      }\n    }\n    /* PRIVATE METHODS */\n\n  }, {\n    key: \"getSpriteAnimation\",\n    value: function getSpriteAnimation(spriteSheet, frameList) {\n      var spriteAnimation = [];\n      frameList.forEach(function (frame) {\n        spriteAnimation.push(spriteSheet.getSprite(frame));\n      });\n      return spriteAnimation;\n    }\n  }, {\n    key: \"getDefaultOptions\",\n    value: function getDefaultOptions(options) {\n      var defaultOptions = {\n        delay: 0,\n        loops: -1,\n        direction: this.direction.FORWARD,\n        callBack: null\n      };\n\n      if (options) {\n        defaultOptions = {\n          delay: options.delay ? options.delay : defaultOptions.delay,\n          loops: options.loops ? options.loops : defaultOptions.loops,\n          direction: options.direction ? options.direction : defaultOptions.direction,\n          callBack: options.callBack ? options.callBack : defaultOptions.callBack\n        };\n      } // this.resetAnimation();\n\n\n      return defaultOptions;\n    }\n  }, {\n    key: \"resetAnimation\",\n    value: function resetAnimation() {\n      this.options.delayTime = this.options.delay - 1;\n      this.options.loopsNumber = this.options.loops - 1;\n    }\n  }, {\n    key: \"getNextFrame\",\n    value: function getNextFrame(currentFrame) {\n      var nextFrame;\n      var frameLimit = this.spriteAnimation.length;\n      this.isFinished = false; // Calculate NextFrame if delayTime is over\n\n      if (this.options.delayTime <= 0) {\n        switch (this.options.direction) {\n          case this.direction.FORWARD:\n            nextFrame = currentFrame + 1;\n            break;\n\n          case this.direction.BACKWARD:\n            nextFrame = currentFrame - 1;\n            break;\n\n          case this.direction.RANDOM:\n            nextFrame = Math.floor(Math.random() * frameLimit + 0); // NOTE: RANDOM animations have infinite loops\n\n            break;\n\n          default:\n            nextFrame = currentFrame + 1;\n            break;\n        }\n      } else {\n        nextFrame = currentFrame;\n        this.options.delayTime--;\n      } // RECALCULATE NextFrame in case it's out of the limits\n\n\n      if (nextFrame >= frameLimit || nextFrame < 0) {\n        if (this.options.loops === -1 || this.options.loopsNumber > 0) {\n          if (nextFrame >= frameLimit) {\n            nextFrame = 0;\n          } else if (nextFrame < 0) {\n            nextFrame = frameLimit;\n          }\n\n          if (this.options.loops !== -1) {\n            this.options.loopsNumber--;\n          }\n\n          this.options.delayTime = this.options.delay;\n        } else {\n          nextFrame = -1;\n          this.isFinished = true;\n        }\n      }\n\n      return nextFrame;\n    }\n  }, {\n    key: \"name\",\n    get: function get() {\n      return this.animName;\n    }\n  }, {\n    key: \"url\",\n    get: function get() {\n      return this.spriteSheetUrl;\n    }\n  }, {\n    key: \"hasCallBack\",\n    get: function get() {\n      return this.options && this.options.callBack ? true : false;\n    }\n  }, {\n    key: \"hasFinished\",\n    get: function get() {\n      return this.isFinished;\n    }\n  }]);\n\n  return RogerAnimation;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RogerAnimation);\n\n//# sourceURL=webpack:///./src/class/RogerAnimation.js?");

/***/ }),

/***/ "./src/class/RogerClock.js":
/*!*********************************!*\
  !*** ./src/class/RogerClock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * @class RogerClock\r\n * @description Clock is the key to sync all the anims\r\n * @param {number} delta\r\n */\nvar RogerClock =\n/*#__PURE__*/\nfunction () {\n  function RogerClock(delta) {\n    _classCallCheck(this, RogerClock);\n\n    this.delta = delta;\n    this.deltaTime = this.delta * 1000;\n    this.clock = 0;\n    this.clockInterval;\n    this.toonList = [];\n    this.debugMode = false;\n    this.paused = false;\n  }\n  /* PUBLIC METHODS */\n\n  /**\r\n   * @method init\r\n   * @description initilize the clock without starting\r\n   * @param {number} seconds\r\n   */\n\n\n  _createClass(RogerClock, [{\n    key: \"init\",\n    value: function init() {\n      this.clock = 0;\n    }\n    /**\r\n     * @method initWith\r\n     * @description initialize the clock to a specific number without starting\r\n     * @param {number} seconds\r\n     */\n\n  }, {\n    key: \"initWith\",\n    value: function initWith(seconds) {\n      this.clock = seconds;\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n\n      this.init();\n      this.clockInterval = setInterval(function () {\n        if (!_this.paused) {\n          _this.update();\n        }\n      }, this.deltaTime);\n    }\n    /**\r\n     * @method startWith\r\n     * @description starts the clock with a specific number. it works with the delta provided.\r\n     * @param {number} seconds\r\n     */\n\n  }, {\n    key: \"startWith\",\n    value: function startWith(seconds) {\n      var _this2 = this;\n\n      this.init(seconds);\n      this.clockInterval = setInterval(function () {\n        if (!_this2.paused) {\n          _this2.update();\n        }\n      }, this.deltaTime);\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      clearInterval(this.clockInterval);\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this.paused = true;\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      this.paused = false;\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.clock = Math.round((this.clock + this.delta) * 10) / 10;\n      this.updateToons();\n    }\n    /**\r\n     * @method updateWith\r\n     * @description update the clock manually. No need of init or start. Pause doesn't work with this option.\r\n     * @param {number} seconds\r\n     */\n\n  }, {\n    key: \"updateWith\",\n    value: function updateWith(seconds) {\n      this.clock = seconds;\n      this.updateToons();\n    }\n  }, {\n    key: \"addToList\",\n    value: function addToList(rogerToon) {\n      this.toonList.push(rogerToon);\n    }\n  }, {\n    key: \"clearList\",\n    value: function clearList() {\n      this.toonList = [];\n    }\n  }, {\n    key: \"setDebugMode\",\n    value: function setDebugMode(mode) {\n      this.debugMode = mode;\n    }\n    /* PRIVATE METHODS */\n\n  }, {\n    key: \"updateToons\",\n    value: function updateToons() {\n      this.toonList.forEach(function (toon) {\n        toon.update();\n      });\n\n      if (this.debugMode) {\n        console.log(this.clock);\n      }\n    }\n  }]);\n\n  return RogerClock;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RogerClock);\n\n//# sourceURL=webpack:///./src/class/RogerClock.js?");

/***/ }),

/***/ "./src/class/RogerRegularSheet.js":
/*!****************************************!*\
  !*** ./src/class/RogerRegularSheet.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RogerSheet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RogerSheet.js */ \"./src/class/RogerSheet.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n/**\r\n * @class RogerRegularSheet\r\n * @description this sprite sheet has ALL the sprites of the same size\r\n * @param {string} url an absolute URL giving the base location of the spritesheet\r\n * @param {Object} sheetSize {w:total width of the sheet, h:total height of the sheet }\r\n * @param {Object} spriteSize {w:total width of the sprite, h:total height of the sprite }\r\n */\n\nvar RogerRegularSheet =\n/*#__PURE__*/\nfunction (_RogerSheet) {\n  _inherits(RogerRegularSheet, _RogerSheet);\n\n  function RogerRegularSheet(url, sheetSize, spriteSize) {\n    _classCallCheck(this, RogerRegularSheet);\n\n    var sprites = [];\n    var currentX = 0;\n    var currentY = 0;\n    var framesHorizontal = Math.floor(sheetSize.w / spriteSize.w);\n    var framesVertical = Math.floor(sheetSize.h / spriteSize.h);\n\n    for (var i = 0; i < framesVertical; i++) {\n      for (var j = 0; j < framesHorizontal; j++) {\n        var sprite = {\n          w: spriteSize.w,\n          h: spriteSize.h,\n          x: currentX,\n          y: currentY\n        };\n        sprites.push(sprite);\n        currentX += spriteSize.w;\n      }\n\n      currentX = 0;\n      currentY += spriteSize.h;\n    }\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(RogerRegularSheet).call(this, url, sheetSize, sprites));\n  }\n\n  return RogerRegularSheet;\n}(_RogerSheet_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RogerRegularSheet);\n\n//# sourceURL=webpack:///./src/class/RogerRegularSheet.js?");

/***/ }),

/***/ "./src/class/RogerSheet.js":
/*!*********************************!*\
  !*** ./src/class/RogerSheet.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RogerSprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RogerSprite.js */ \"./src/class/RogerSprite.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n/**\r\n * @class RogerSheet\r\n * @param {string} url an absolute URL giving the base location of the spritesheet\r\n * @param {Object} size {w:total width of the sheet, h:total height of the sheet }\r\n * @param {Array} sprites array with sizes of each sprite\r\n * @return {string} url\r\n * @return {RogerSprite} sprite\r\n */\n\nvar RogerSheet =\n/*#__PURE__*/\nfunction () {\n  function RogerSheet(url, size, sprites) {\n    var _this = this;\n\n    _classCallCheck(this, RogerSheet);\n\n    this.sheetURL = url;\n    this.width = size.w;\n    this.height = size.h;\n    this.rogerSprites = [];\n    sprites.forEach(function (sprite) {\n      _this.rogerSprites.push(new _RogerSprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](url, {\n        w: sprite.w,\n        h: sprite.h\n      }, {\n        x: sprite.x,\n        y: sprite.y\n      }));\n    });\n  }\n\n  _createClass(RogerSheet, [{\n    key: \"getSprite\",\n\n    /* PUBLIC METHODS */\n    value: function getSprite(number) {\n      return this.rogerSprites[number];\n    }\n  }, {\n    key: \"url\",\n    get: function get() {\n      return this.sheetURL;\n    }\n  }]);\n\n  return RogerSheet;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RogerSheet);\n\n//# sourceURL=webpack:///./src/class/RogerSheet.js?");

/***/ }),

/***/ "./src/class/RogerSprite.js":
/*!**********************************!*\
  !*** ./src/class/RogerSprite.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * @class RogerSprite\r\n * @description Sprite is the minimun element. It's a frame, an image inside another \r\n * @param {url} url an absolute URL giving the base location of the spritesheet that contains the sprite\r\n * @param {Object} size {w: width of the sprite; h: height of the sprite }\r\n * @param {Object} position {x: top position on the sprite sheet from 0.0, y: left position on the sprite sheet from 0.0 }\r\n */\nvar RogerSprite =\n/*#__PURE__*/\nfunction () {\n  function RogerSprite(url, size, position) {\n    _classCallCheck(this, RogerSprite);\n\n    this.spriteURL = url;\n    this.width = size.w;\n    this.height = size.h;\n    this.positionX = position.x;\n    this.positionY = position.y;\n  }\n\n  _createClass(RogerSprite, [{\n    key: \"url\",\n    get: function get() {\n      return this.spriteURL;\n    }\n  }, {\n    key: \"w\",\n    get: function get() {\n      return this.width;\n    }\n  }, {\n    key: \"h\",\n    get: function get() {\n      return this.height;\n    }\n  }, {\n    key: \"x\",\n    get: function get() {\n      return this.positionX;\n    }\n  }, {\n    key: \"y\",\n    get: function get() {\n      return this.positionY;\n    }\n  }]);\n\n  return RogerSprite;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RogerSprite);\n\n//# sourceURL=webpack:///./src/class/RogerSprite.js?");

/***/ }),

/***/ "./src/class/RogerToon.js":
/*!********************************!*\
  !*** ./src/class/RogerToon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * @class RogerToon\r\n * @param {string} id id of the element of the DOM linked to the object\r\n * @param {RogerSprite} idle sprite as default while to animation is stopped\r\n * @return {string} animationName\r\n * @see RogerSprite\r\n */\nvar RogerToon =\n/*#__PURE__*/\nfunction () {\n  function RogerToon(id, idle) {\n    _classCallCheck(this, RogerToon);\n\n    this.id = id;\n    this.domElem = document.getElementById(id);\n    this.animList = new Map();\n    this.currentAnimation;\n    this.currentFrame;\n    this.isAnimationPlaying = false;\n\n    if (idle) {\n      this.idle = idle;\n      this.drawSprite(idle);\n    }\n  }\n  /* PUBLIC METHODS */\n\n\n  _createClass(RogerToon, [{\n    key: \"update\",\n\n    /**\r\n     * @method update\r\n     * @description this method should be executed by events of RogerClock, setting the next frame of the current\r\n     */\n    value: function update() {\n      if (this.isAnimationPlaying) {\n        this.setFrame(this.currentAnimation, this.currentFrame);\n        this.currentFrame = this.currentAnimation.getNextFrame(this.currentFrame);\n\n        if (this.currentAnimation.hasFinished) {\n          this.isAnimationPlaying = false;\n\n          if (this.currentAnimation.hasCallBack) {\n            this.currentAnimation.executeCallBack();\n          } else {\n            this.stop(this.currentAnimation.name);\n          }\n        }\n      }\n    }\n  }, {\n    key: \"add\",\n    value: function add(rogerAnimation) {\n      var animationName = rogerAnimation.name;\n\n      if (!this.animList.has(animationName)) {\n        this.animList.set(animationName, rogerAnimation);\n      } else {\n        alert(\"The RogerToon \".concat(this.id, \" has ALREADY an animation with the name: \").concat(animationName, \" \\n Please choose another name and try it again.\"));\n      }\n    }\n  }, {\n    key: \"play\",\n    value: function play(name) {\n      this.isAnimationPlaying = true;\n      this.currentAnimation = this.animList.get(name);\n      this.currentFrame = 0;\n      this.currentAnimation.resetAnimation();\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.isAnimationPlaying = false;\n      this.currentFrame = 0;\n      this.drawSprite(this.animList.values().next().value.getSprite(0));\n    }\n    /* PRIVATE METHODS */\n\n  }, {\n    key: \"setFrame\",\n    value: function setFrame(animation, frame) {\n      this.currentAnimation = animation;\n      this.currentFrame = frame;\n      this.drawSprite(animation.getSprite(frame));\n    }\n  }, {\n    key: \"drawSprite\",\n    value: function drawSprite(sprite) {\n      if (this.domElem.style.backgroundImage !== \"url(\\\"\".concat(sprite.url, \"\\\")\")) {\n        this.domElem.style.backgroundImage = \"url(\\\"\".concat(sprite.url, \"\\\")\");\n      }\n\n      if (this.domElem.style.width !== sprite.w + \"px\") {\n        this.domElem.style.width = sprite.w + \"px\";\n      }\n\n      if (this.domElem.style.height !== sprite.h + \"px\") {\n        this.domElem.style.height = sprite.h + \"px\";\n      }\n\n      if (this.domElem.style.backgroundPositionX !== -sprite.x + \"px\") {\n        this.domElem.style.backgroundPositionX = -sprite.x + \"px\";\n      }\n\n      if (this.domElem.style.backgroundPositionY !== -sprite.y + \"px\") {\n        this.domElem.style.backgroundPositionY = -sprite.y + \"px\";\n      }\n    }\n  }, {\n    key: \"currentAnimationName\",\n    get: function get() {\n      return this.currentAnimation.name;\n    }\n  }]);\n\n  return RogerToon;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RogerToon);\n\n//# sourceURL=webpack:///./src/class/RogerToon.js?");

/***/ }),

/***/ "./src/roger.js":
/*!**********************!*\
  !*** ./src/roger.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_RogerClock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/RogerClock */ \"./src/class/RogerClock.js\");\n/* harmony import */ var _class_RogerSprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/RogerSprite */ \"./src/class/RogerSprite.js\");\n/* harmony import */ var _class_RogerSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class/RogerSheet */ \"./src/class/RogerSheet.js\");\n/* harmony import */ var _class_RogerRegularSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class/RogerRegularSheet */ \"./src/class/RogerRegularSheet.js\");\n/* harmony import */ var _class_RogerAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class/RogerAnimation */ \"./src/class/RogerAnimation.js\");\n/* harmony import */ var _class_RogerToon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class/RogerToon */ \"./src/class/RogerToon.js\");\n\n\n\n\n\n\n\n\nvar Roger = {\n  Clock: _class_RogerClock__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  Sprite: _class_RogerSprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  Sheet: _class_RogerSheet__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  RegularSheet: _class_RogerRegularSheet__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  Animation: _class_RogerAnimation__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  Toon: _class_RogerToon__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Roger);\n\n//# sourceURL=webpack:///./src/roger.js?");

/***/ })

/******/ });