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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dev/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/js/main.js":
/*!************************!*\
  !*** ./dev/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_roger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/roger */ \"./lib/roger.js\");\n\n\n\nvar ssPablosHeads = new _lib_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RegularSheet(\"img/damn_pablos_heads.png\", {\n  w: 512,\n  h: 512\n}, {\n  w: 54,\n  h: 90\n});\nvar pabloIdleSprite = new _lib_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Sprite(\"img/damn_pablos_heads.png\", {\n  w: 54,\n  h: 90\n}, {\n  x: 0,\n  y: 0\n});\nvar animPablos_blink1 = new _lib_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Animation(\"blink1\", ssPablosHeads, [0, 1, 2, 1, 0], {\n  delay: 10,\n  loops: -1,\n  callBack: function callBack() {\n    console.log(\"blink complete!\");\n  }\n});\nvar animPablos_talk1 = new _lib_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Animation(\"talk1\", ssPablosHeads, [3, 4, 5, 6, 7], {\n  direction: \"random\"\n});\nvar animPablos_blink2 = new _lib_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Animation(\"blink2\", ssPablosHeads, [9, 10, 11, 10, 9], {\n  delay: 10,\n  callBack: function callBack() {\n    console.log(\"blink2 complete!\");\n  }\n});\nvar animPablos_talk2 = new _lib_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Animation(\"talk2\", ssPablosHeads, [12, 13, 14, 15, 16], {\n  callBack: function callBack() {\n    return console.log(\"talk2 complete!\");\n  }\n});\nvar pabloObject = new _lib_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Object(\"pablo\", pabloIdleSprite);\npabloObject.addAnimation(animPablos_blink1);\npabloObject.addAnimation(animPablos_blink2);\npabloObject.addAnimation(animPablos_talk1);\npabloObject.addAnimation(animPablos_talk2);\npabloObject.playAnimation(\"blink1\");\nvar rClock = new _lib_roger__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Clock(0.1);\nrClock.addObjectToUpdate(pabloObject);\nrClock.start();\n\n//# sourceURL=webpack:///./dev/js/main.js?");

/***/ }),

/***/ "./lib/class/RogerAnimation.js":
/*!*************************************!*\
  !*** ./lib/class/RogerAnimation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @class RogerAnimation\n * @param {string} name name for the animation\n * @param {RogerSheet} spriteSheet sprite sheet linked to the animation\n * @param {Array} frameList list with the frames that make the animation\n * @return {RogerAnimation} animation\n * @return {strign} name\n * @return {string} url\n * @return {RogerSprite} sprite\n * @see RogerSprite\n */\nvar RogerAnimation =\n/*#__PURE__*/\nfunction () {\n  function RogerAnimation(name, spriteSheet, frameList, options) {\n    _classCallCheck(this, RogerAnimation);\n\n    this.direction = {\n      FORWARD: \"forward\",\n      BACKWARD: \"backward\",\n      RANDOM: \"random\"\n    };\n    this.animName = name;\n    this.spriteSheetUrl = spriteSheet.url;\n    this.spriteAnimation = this.getSpriteAnimation(spriteSheet, frameList);\n    this.options = this.getDefaultOptions(options);\n    this.isFinished = false;\n  }\n\n  _createClass(RogerAnimation, [{\n    key: \"setOption\",\n\n    /* PUBLIC METHODS */\n    value: function setOption(object) {\n      this.options = object;\n    }\n  }, {\n    key: \"getSprite\",\n    value: function getSprite(number) {\n      return this.spriteAnimation[number];\n    }\n  }, {\n    key: \"executeCallBack\",\n    value: function executeCallBack() {\n      if (this.hasCallBack) {\n        this.options.callBack();\n      }\n    }\n    /* PRIVATE METHODS */\n\n  }, {\n    key: \"getSpriteAnimation\",\n    value: function getSpriteAnimation(spriteSheet, frameList) {\n      var spriteAnimation = [];\n      frameList.forEach(function (frame) {\n        spriteAnimation.push(spriteSheet.getSprite(frame));\n      });\n      return spriteAnimation;\n    }\n  }, {\n    key: \"getDefaultOptions\",\n    value: function getDefaultOptions(options) {\n      var defaultOptions = {\n        delay: 0,\n        loops: 0,\n        direction: this.direction.FORWARD,\n        callBack: null\n      };\n\n      if (options) {\n        defaultOptions = {\n          delay: options.delay ? options.delay : defaultOptions.delay,\n          loops: options.loops ? options.loops : defaultOptions.loops,\n          direction: options.direction ? options.direction : defaultOptions.direction,\n          callBack: options.callBack ? options.callBack : defaultOptions.callBack\n        };\n      } // this.resetAnimation();\n\n\n      return defaultOptions;\n    }\n  }, {\n    key: \"resetAnimation\",\n    value: function resetAnimation() {\n      this.options.delayTime = this.options.delay - 1;\n      this.options.loopsNumber = this.options.loops - 1;\n    }\n  }, {\n    key: \"getNextFrame\",\n    value: function getNextFrame(currentFrame) {\n      var nextFrame;\n      var frameLimit = this.spriteAnimation.length;\n      this.isFinished = false; // Calculate NextFrame if delayTime is over\n\n      if (this.options.delayTime <= 0) {\n        switch (this.options.direction) {\n          case this.direction.FORWARD:\n            nextFrame = currentFrame + 1;\n            break;\n\n          case this.direction.BACKWARD:\n            nextFrame = currentFrame - 1;\n            break;\n\n          case this.direction.RANDOM:\n            nextFrame = Math.floor(Math.random() * frameLimit + 0); // NOTE: RANDOM animations have infinite loops\n\n            break;\n\n          default:\n            nextFrame = currentFrame + 1;\n            break;\n        }\n      } else {\n        nextFrame = currentFrame;\n        this.options.delayTime--;\n      } // RECALCULATE NextFrame in case it's out of the limits\n\n\n      if (nextFrame >= frameLimit || nextFrame < 0) {\n        if (this.options.loops === -1 || this.options.loopsNumber > 0) {\n          if (nextFrame >= frameLimit) {\n            nextFrame = 0;\n          } else if (nextFrame < 0) {\n            nextFrame = frameLimit;\n          }\n\n          if (this.options.loops !== -1) {\n            this.options.loopsNumber--;\n          }\n\n          this.options.delayTime = this.options.delay;\n        } else {\n          nextFrame = -1;\n          this.isFinished = true;\n        }\n      }\n\n      return nextFrame;\n    }\n  }, {\n    key: \"name\",\n    get: function get() {\n      return this.animName;\n    }\n  }, {\n    key: \"url\",\n    get: function get() {\n      return this.spriteSheetUrl;\n    }\n  }, {\n    key: \"hasCallBack\",\n    get: function get() {\n      return this.options && this.options.callBack ? true : false;\n    }\n  }, {\n    key: \"hasFinished\",\n    get: function get() {\n      return this.isFinished;\n    }\n  }]);\n\n  return RogerAnimation;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RogerAnimation);\n\n//# sourceURL=webpack:///./lib/class/RogerAnimation.js?");

/***/ }),

/***/ "./lib/class/RogerClock.js":
/*!*********************************!*\
  !*** ./lib/class/RogerClock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @class RogerClock\n * @description Clock is the key to sync all the anims\n * @param {number} delta \n */\nvar RogerClock =\n/*#__PURE__*/\nfunction () {\n  function RogerClock(delta) {\n    _classCallCheck(this, RogerClock);\n\n    this.delta = delta;\n    this.deltaTime = this.delta * 1000;\n    this.clock = 0;\n    this.clockInterval;\n    this.objects = [];\n    this.debugMode = false;\n  }\n  /* PUBLIC METHODS */\n\n\n  _createClass(RogerClock, [{\n    key: \"init\",\n    value: function init() {\n      this.clock = 0;\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n\n      this.init();\n      this.clockInterval = setInterval(function () {\n        return _this.update();\n      }, this.deltaTime);\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      clearInterval(this.clockInterval);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.clock = Math.round((this.clock + this.delta) * 10) / 10;\n      this.objects.forEach(function (obj) {\n        obj.update();\n      });\n\n      if (this.debugMode) {\n        console.log(this.clock);\n      }\n    }\n  }, {\n    key: \"addObjectToUpdate\",\n    value: function addObjectToUpdate(rogerObject) {\n      this.objects.push(rogerObject);\n    }\n  }, {\n    key: \"clearObjectToUpdate\",\n    value: function clearObjectToUpdate() {\n      this.objects = [];\n    }\n  }, {\n    key: \"setDebugMode\",\n    value: function setDebugMode(mode) {\n      this.debugMode = mode;\n    }\n  }]);\n\n  return RogerClock;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RogerClock);\n\n//# sourceURL=webpack:///./lib/class/RogerClock.js?");

/***/ }),

/***/ "./lib/class/RogerObject.js":
/*!**********************************!*\
  !*** ./lib/class/RogerObject.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @class RogerObject\n * @param {string} id id of the element of the DOM linked to the object\n * @param {RogerSprite} idle sprite as default while to animation is stopped\n * @return {string} animationName\n * @see RogerSprite\n */\nvar RogerObject =\n/*#__PURE__*/\nfunction () {\n  function RogerObject(id, idle) {\n    _classCallCheck(this, RogerObject);\n\n    this.id = id;\n    this.domElem = document.getElementById(id);\n    this.anim = new Map();\n    this.currentAnimation;\n    this.currentFrame;\n    this.isAnimationPlaying = false;\n\n    if (idle) {\n      this.idle = idle;\n      this.paintSprite(idle);\n    }\n  }\n  /* PUBLIC METHODS */\n\n  /**\n   * @method update\n   * @description this method should be executed by events of RogerClock, setting the next frame of the current \n   */\n\n\n  _createClass(RogerObject, [{\n    key: \"update\",\n    value: function update() {\n      if (this.isAnimationPlaying) {\n        this.setFrame(this.currentAnimation, this.currentFrame);\n        this.currentFrame = this.currentAnimation.getNextFrame(this.currentFrame);\n\n        if (this.currentAnimation.hasFinished) {\n          this.isAnimationPlaying = false;\n\n          if (this.currentAnimation.hasCallBack) {\n            this.currentAnimation.executeCallBack();\n          } else {\n            this.stopAnimation(this.currentAnimation.name);\n          }\n        }\n      }\n    }\n  }, {\n    key: \"addAnimation\",\n    value: function addAnimation(rogerAnimation) {\n      var animationName = rogerAnimation.name;\n\n      if (!this.anim.has(animationName)) {\n        this.anim.set(animationName, rogerAnimation);\n      } else {\n        alert(\"The RogerObject \".concat(this.id, \" has ALREADY an animation with the name: \").concat(animationName, \" \\n Please choose another name and try it again.\"));\n      }\n    }\n  }, {\n    key: \"playAnimation\",\n    value: function playAnimation(name) {\n      console.log(\"Play animation: \" + name);\n      this.isAnimationPlaying = true;\n      this.currentAnimation = this.anim.get(name);\n      this.currentFrame = 0;\n      this.currentAnimation.resetAnimation();\n    }\n  }, {\n    key: \"stopAnimation\",\n    value: function stopAnimation(name) {\n      console.log(\"Stop animation: \" + name);\n      this.isAnimationPlaying = false;\n      this.currentFrame = 0;\n      this.paintSprite(this.anim[0].getSprite(0));\n    }\n    /* PRIVATE METHODS */\n\n  }, {\n    key: \"setFrame\",\n    value: function setFrame(animation, frame) {\n      this.currentAnimation = animation;\n      this.currentFrame = frame;\n      this.paintSprite(animation.getSprite(frame));\n    }\n  }, {\n    key: \"paintSprite\",\n    value: function paintSprite(sprite) {\n      this.domElem.style.backgroundImage = \"url(\\\"\".concat(sprite.url, \"\\\")\");\n      this.domElem.style.width = sprite.w + \"px\";\n      this.domElem.style.height = sprite.h + \"px\";\n      this.domElem.style.backgroundPositionX = -sprite.x + \"px\";\n      this.domElem.style.backgroundPositionY = -sprite.y + \"px\";\n    }\n  }]);\n\n  return RogerObject;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RogerObject);\n\n//# sourceURL=webpack:///./lib/class/RogerObject.js?");

/***/ }),

/***/ "./lib/class/RogerRegularSheet.js":
/*!****************************************!*\
  !*** ./lib/class/RogerRegularSheet.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RogerSheet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RogerSheet.js */ \"./lib/class/RogerSheet.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n/**\n * @class RogerRegularSheet\n * @description this sprite sheet has ALL the sprites of the same size\n * @param {string} url an absolute URL giving the base location of the spritesheet\n * @param {Object} sheetSize {w:total width of the sheet, h:total height of the sheet }\n * @param {Object} spriteSize {w:total width of the sprite, h:total height of the sprite }\n */\n\nvar RogerRegularSheet =\n/*#__PURE__*/\nfunction (_RogerSheet) {\n  _inherits(RogerRegularSheet, _RogerSheet);\n\n  function RogerRegularSheet(url, sheetSize, spriteSize) {\n    _classCallCheck(this, RogerRegularSheet);\n\n    var sprites = [];\n    var currentX = 0;\n    var currentY = 0;\n    var framesHorizontal = Math.floor(sheetSize.w / spriteSize.w);\n    var framesVertical = Math.floor(sheetSize.h / spriteSize.h);\n\n    for (var i = 0; i < framesVertical; i++) {\n      for (var j = 0; j < framesHorizontal; j++) {\n        var sprite = {\n          w: spriteSize.w,\n          h: spriteSize.h,\n          x: currentX,\n          y: currentY\n        };\n        sprites.push(sprite);\n        currentX += spriteSize.w;\n      }\n\n      currentX = 0;\n      currentY += spriteSize.h;\n    }\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(RogerRegularSheet).call(this, url, sheetSize, sprites));\n  }\n\n  return RogerRegularSheet;\n}(_RogerSheet_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RogerRegularSheet);\n\n//# sourceURL=webpack:///./lib/class/RogerRegularSheet.js?");

/***/ }),

/***/ "./lib/class/RogerSheet.js":
/*!*********************************!*\
  !*** ./lib/class/RogerSheet.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RogerSprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RogerSprite.js */ \"./lib/class/RogerSprite.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n/**\n * @class RogerSheet\n * @param {string} url an absolute URL giving the base location of the spritesheet\n * @param {Object} size {w:total width of the sheet, h:total height of the sheet }\n * @param {Array} sprites array with sizes of each sprite\n * @return {string} url\n * @return {RogerSprite} sprite\n */\n\nvar RogerSheet =\n/*#__PURE__*/\nfunction () {\n  function RogerSheet(url, size, sprites) {\n    var _this = this;\n\n    _classCallCheck(this, RogerSheet);\n\n    this.sheetURL = url;\n    this.width = size.w;\n    this.height = size.h;\n    this.rogerSprites = [];\n    sprites.forEach(function (sprite) {\n      _this.rogerSprites.push(new _RogerSprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](url, {\n        w: sprite.w,\n        h: sprite.h\n      }, {\n        x: sprite.x,\n        y: sprite.y\n      }));\n    });\n  }\n\n  _createClass(RogerSheet, [{\n    key: \"getSprite\",\n\n    /* PUBLIC METHODS */\n    value: function getSprite(number) {\n      return this.rogerSprites[number];\n    }\n  }, {\n    key: \"url\",\n    get: function get() {\n      return this.sheetURL;\n    }\n  }]);\n\n  return RogerSheet;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RogerSheet);\n\n//# sourceURL=webpack:///./lib/class/RogerSheet.js?");

/***/ }),

/***/ "./lib/class/RogerSprite.js":
/*!**********************************!*\
  !*** ./lib/class/RogerSprite.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @class RogerSprite\n * @description Sprite is the minimun element. It's a frame, an image inside another \n * @param {url} url an absolute URL giving the base location of the spritesheet that contains the sprite\n * @param {Object} size {w: width of the sprite; h: height of the sprite }\n * @param {Object} position {x: top position on the sprite sheet from 0.0, y: left position on the sprite sheet from 0.0 }\n */\nvar RogerSprite =\n/*#__PURE__*/\nfunction () {\n  function RogerSprite(url, size, position) {\n    _classCallCheck(this, RogerSprite);\n\n    this.spriteURL = url;\n    this.width = size.w;\n    this.height = size.h;\n    this.positionX = position.x;\n    this.positionY = position.y;\n  }\n\n  _createClass(RogerSprite, [{\n    key: \"url\",\n    get: function get() {\n      return this.spriteURL;\n    }\n  }, {\n    key: \"w\",\n    get: function get() {\n      return this.width;\n    }\n  }, {\n    key: \"h\",\n    get: function get() {\n      return this.height;\n    }\n  }, {\n    key: \"x\",\n    get: function get() {\n      return this.positionX;\n    }\n  }, {\n    key: \"y\",\n    get: function get() {\n      return this.positionY;\n    }\n  }]);\n\n  return RogerSprite;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RogerSprite);\n\n//# sourceURL=webpack:///./lib/class/RogerSprite.js?");

/***/ }),

/***/ "./lib/roger.js":
/*!**********************!*\
  !*** ./lib/roger.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_RogerClock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/RogerClock */ \"./lib/class/RogerClock.js\");\n/* harmony import */ var _class_RogerSprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/RogerSprite */ \"./lib/class/RogerSprite.js\");\n/* harmony import */ var _class_RogerSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class/RogerSheet */ \"./lib/class/RogerSheet.js\");\n/* harmony import */ var _class_RogerRegularSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class/RogerRegularSheet */ \"./lib/class/RogerRegularSheet.js\");\n/* harmony import */ var _class_RogerAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class/RogerAnimation */ \"./lib/class/RogerAnimation.js\");\n/* harmony import */ var _class_RogerObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class/RogerObject */ \"./lib/class/RogerObject.js\");\n\n\n\n\n\n\n\n\nvar Roger = {\n  Clock: _class_RogerClock__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  Sprite: _class_RogerSprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  Sheet: _class_RogerSheet__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  RegularSheet: _class_RogerRegularSheet__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  Animation: _class_RogerAnimation__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  Object: _class_RogerObject__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Roger);\n\n//# sourceURL=webpack:///./lib/roger.js?");

/***/ })

/******/ });