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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_roger_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/roger.min */ \"./lib/roger.min.js\");\n/* harmony import */ var _lib_roger_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_roger_min__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nvar ssPablosHeads = new _lib_roger_min__WEBPACK_IMPORTED_MODULE_0___default.a.RegularSheet(\"img/damn_pablos_heads.png\", {\n  w: 512,\n  h: 512\n}, {\n  w: 54,\n  h: 90\n});\nvar pabloIdleSprite = new _lib_roger_min__WEBPACK_IMPORTED_MODULE_0___default.a.Sprite(\"img/damn_pablos_heads.png\", {\n  w: 54,\n  h: 90\n}, {\n  x: 0,\n  y: 0\n});\nvar animPablos_blink1 = new _lib_roger_min__WEBPACK_IMPORTED_MODULE_0___default.a.Animation(\"blink1\", ssPablosHeads, [0, 1, 2, 1, 0], {\n  delay: 10,\n  loops: -1,\n  callBack: function callBack() {\n    console.log(\"blink complete!\");\n  }\n});\nvar animPablos_talk1 = new _lib_roger_min__WEBPACK_IMPORTED_MODULE_0___default.a.Animation(\"talk1\", ssPablosHeads, [3, 4, 5, 6, 7], {\n  direction: \"random\"\n});\nvar animPablos_blink2 = new _lib_roger_min__WEBPACK_IMPORTED_MODULE_0___default.a.Animation(\"blink2\", ssPablosHeads, [9, 10, 11, 10, 9], {\n  delay: 10,\n  callBack: function callBack() {\n    console.log(\"blink2 complete!\");\n  }\n});\nvar animPablos_talk2 = new _lib_roger_min__WEBPACK_IMPORTED_MODULE_0___default.a.Animation(\"talk2\", ssPablosHeads, [12, 13, 14, 15, 16], {\n  callBack: function callBack() {\n    return console.log(\"talk2 complete!\");\n  }\n});\nvar pabloToon = new _lib_roger_min__WEBPACK_IMPORTED_MODULE_0___default.a.Toon(\"pablo\", pabloIdleSprite);\npabloToon.addAnimation(animPablos_blink1);\npabloToon.addAnimation(animPablos_blink2);\npabloToon.addAnimation(animPablos_talk1);\npabloToon.addAnimation(animPablos_talk2);\npabloToon.playAnimation(\"blink1\");\nvar rClock = new _lib_roger_min__WEBPACK_IMPORTED_MODULE_0___default.a.Clock(0.1);\nrClock.addToonToUpdate(pabloToon);\nrClock.start();\n\n//# sourceURL=webpack:///./dist/js/main.js?");

/***/ }),

/***/ "./lib/roger.min.js":
/*!**************************!*\
  !*** ./lib/roger.min.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n!function (t, e) {\n  \"object\" == ( false ? undefined : _typeof(exports)) && \"object\" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(window, function () {\n  return function (t) {\n    var e = {};\n\n    function n(i) {\n      if (e[i]) return e[i].exports;\n      var o = e[i] = {\n        i: i,\n        l: !1,\n        exports: {}\n      };\n      return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;\n    }\n\n    return n.m = t, n.c = e, n.d = function (t, e, i) {\n      n.o(t, e) || Object.defineProperty(t, e, {\n        enumerable: !0,\n        get: i\n      });\n    }, n.r = function (t) {\n      \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {\n        value: \"Module\"\n      }), Object.defineProperty(t, \"__esModule\", {\n        value: !0\n      });\n    }, n.t = function (t, e) {\n      if (1 & e && (t = n(t)), 8 & e) return t;\n      if (4 & e && \"object\" == _typeof(t) && t && t.__esModule) return t;\n      var i = Object.create(null);\n      if (n.r(i), Object.defineProperty(i, \"default\", {\n        enumerable: !0,\n        value: t\n      }), 2 & e && \"string\" != typeof t) for (var o in t) {\n        n.d(i, o, function (e) {\n          return t[e];\n        }.bind(null, o));\n      }\n      return i;\n    }, n.n = function (t) {\n      var e = t && t.__esModule ? function () {\n        return t[\"default\"];\n      } : function () {\n        return t;\n      };\n      return n.d(e, \"a\", e), e;\n    }, n.o = function (t, e) {\n      return Object.prototype.hasOwnProperty.call(t, e);\n    }, n.p = \"\", n(n.s = 0);\n  }([function (t, e, n) {\n    \"use strict\";\n\n    function i(t, e) {\n      for (var n = 0; n < e.length; n++) {\n        var i = e[n];\n        i.enumerable = i.enumerable || !1, i.configurable = !0, \"value\" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);\n      }\n    }\n\n    n.r(e);\n\n    var o = function () {\n      function t(e) {\n        !function (t, e) {\n          if (!(t instanceof e)) throw new TypeError(\"Cannot call a class as a function\");\n        }(this, t), this.delta = e, this.deltaTime = 1e3 * this.delta, this.clock = 0, this.clockInterval, this.toons = [], this.debugMode = !1, this.paused = !1;\n      }\n\n      var e, n, o;\n      return e = t, (n = [{\n        key: \"init\",\n        value: function value() {\n          this.clock = 0;\n        }\n      }, {\n        key: \"initWith\",\n        value: function value(t) {\n          this.clock = t;\n        }\n      }, {\n        key: \"start\",\n        value: function value() {\n          var t = this;\n          this.init(), this.clockInterval = setInterval(function () {\n            t.paused || t.update();\n          }, this.deltaTime);\n        }\n      }, {\n        key: \"startWith\",\n        value: function value(t) {\n          var e = this;\n          this.init(t), this.clockInterval = setInterval(function () {\n            e.paused || e.update();\n          }, this.deltaTime);\n        }\n      }, {\n        key: \"stop\",\n        value: function value() {\n          clearInterval(this.clockInterval);\n        }\n      }, {\n        key: \"pause\",\n        value: function value() {\n          this.paused = !0;\n        }\n      }, {\n        key: \"play\",\n        value: function value() {\n          this.paused = !1;\n        }\n      }, {\n        key: \"update\",\n        value: function value() {\n          this.clock = Math.round(10 * (this.clock + this.delta)) / 10, this.updateToons();\n        }\n      }, {\n        key: \"updateWith\",\n        value: function value(t) {\n          this.clock = t, this.updateToons();\n        }\n      }, {\n        key: \"addToonToUpdate\",\n        value: function value(t) {\n          this.toons.push(t);\n        }\n      }, {\n        key: \"clearToonToUpdate\",\n        value: function value() {\n          this.toons = [];\n        }\n      }, {\n        key: \"setDebugMode\",\n        value: function value(t) {\n          this.debugMode = t;\n        }\n      }, {\n        key: \"updateToons\",\n        value: function value() {\n          this.toons.forEach(function (t) {\n            t.update();\n          }), this.debugMode && console.log(this.clock);\n        }\n      }]) && i(e.prototype, n), o && i(e, o), t;\n    }();\n\n    function r(t, e) {\n      for (var n = 0; n < e.length; n++) {\n        var i = e[n];\n        i.enumerable = i.enumerable || !1, i.configurable = !0, \"value\" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);\n      }\n    }\n\n    var a = function () {\n      function t(e, n, i) {\n        !function (t, e) {\n          if (!(t instanceof e)) throw new TypeError(\"Cannot call a class as a function\");\n        }(this, t), this.spriteURL = e, this.width = n.w, this.height = n.h, this.positionX = i.x, this.positionY = i.y;\n      }\n\n      var e, n, i;\n      return e = t, (n = [{\n        key: \"url\",\n        get: function get() {\n          return this.spriteURL;\n        }\n      }, {\n        key: \"w\",\n        get: function get() {\n          return this.width;\n        }\n      }, {\n        key: \"h\",\n        get: function get() {\n          return this.height;\n        }\n      }, {\n        key: \"x\",\n        get: function get() {\n          return this.positionX;\n        }\n      }, {\n        key: \"y\",\n        get: function get() {\n          return this.positionY;\n        }\n      }]) && r(e.prototype, n), i && r(e, i), t;\n    }();\n\n    function s(t, e) {\n      for (var n = 0; n < e.length; n++) {\n        var i = e[n];\n        i.enumerable = i.enumerable || !1, i.configurable = !0, \"value\" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);\n      }\n    }\n\n    var u = function () {\n      function t(e, n, i) {\n        var o = this;\n        !function (t, e) {\n          if (!(t instanceof e)) throw new TypeError(\"Cannot call a class as a function\");\n        }(this, t), this.sheetURL = e, this.width = n.w, this.height = n.h, this.rogerSprites = [], i.forEach(function (t) {\n          o.rogerSprites.push(new a(e, {\n            w: t.w,\n            h: t.h\n          }, {\n            x: t.x,\n            y: t.y\n          }));\n        });\n      }\n\n      var e, n, i;\n      return e = t, (n = [{\n        key: \"getSprite\",\n        value: function value(t) {\n          return this.rogerSprites[t];\n        }\n      }, {\n        key: \"url\",\n        get: function get() {\n          return this.sheetURL;\n        }\n      }]) && s(e.prototype, n), i && s(e, i), t;\n    }();\n\n    function c(t) {\n      return (c = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (t) {\n        return _typeof(t);\n      } : function (t) {\n        return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : _typeof(t);\n      })(t);\n    }\n\n    function l(t, e) {\n      return !e || \"object\" !== c(e) && \"function\" != typeof e ? function (t) {\n        if (void 0 === t) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n        return t;\n      }(t) : e;\n    }\n\n    function h(t) {\n      return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {\n        return t.__proto__ || Object.getPrototypeOf(t);\n      })(t);\n    }\n\n    function f(t, e) {\n      return (f = Object.setPrototypeOf || function (t, e) {\n        return t.__proto__ = e, t;\n      })(t, e);\n    }\n\n    function p(t, e) {\n      for (var n = 0; n < e.length; n++) {\n        var i = e[n];\n        i.enumerable = i.enumerable || !1, i.configurable = !0, \"value\" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);\n      }\n    }\n\n    function y(t, e) {\n      for (var n = 0; n < e.length; n++) {\n        var i = e[n];\n        i.enumerable = i.enumerable || !1, i.configurable = !0, \"value\" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);\n      }\n    }\n\n    var d = {\n      Clock: o,\n      Sprite: a,\n      Sheet: u,\n      RegularSheet: function (t) {\n        function e(t, n, i) {\n          !function (t, e) {\n            if (!(t instanceof e)) throw new TypeError(\"Cannot call a class as a function\");\n          }(this, e);\n\n          for (var o = [], r = 0, a = 0, s = Math.floor(n.w / i.w), u = Math.floor(n.h / i.h), c = 0; c < u; c++) {\n            for (var f = 0; f < s; f++) {\n              var p = {\n                w: i.w,\n                h: i.h,\n                x: r,\n                y: a\n              };\n              o.push(p), r += i.w;\n            }\n\n            r = 0, a += i.h;\n          }\n\n          return l(this, h(e).call(this, t, n, o));\n        }\n\n        return function (t, e) {\n          if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\");\n          t.prototype = Object.create(e && e.prototype, {\n            constructor: {\n              value: t,\n              writable: !0,\n              configurable: !0\n            }\n          }), e && f(t, e);\n        }(e, u), e;\n      }(),\n      Animation: function () {\n        function t(e, n, i, o) {\n          !function (t, e) {\n            if (!(t instanceof e)) throw new TypeError(\"Cannot call a class as a function\");\n          }(this, t), this.direction = {\n            FORWARD: \"forward\",\n            BACKWARD: \"backward\",\n            RANDOM: \"random\"\n          }, this.animName = e, this.spriteSheetUrl = n.url, this.spriteAnimation = this.getSpriteAnimation(n, i), this.options = this.getDefaultOptions(o), this.isFinished = !1;\n        }\n\n        var e, n, i;\n        return e = t, (n = [{\n          key: \"setOption\",\n          value: function value(t) {\n            this.options = t;\n          }\n        }, {\n          key: \"getSprite\",\n          value: function value(t) {\n            return this.spriteAnimation[t];\n          }\n        }, {\n          key: \"executeCallBack\",\n          value: function value() {\n            this.hasCallBack && this.options.callBack();\n          }\n        }, {\n          key: \"getSpriteAnimation\",\n          value: function value(t, e) {\n            var n = [];\n            return e.forEach(function (e) {\n              n.push(t.getSprite(e));\n            }), n;\n          }\n        }, {\n          key: \"getDefaultOptions\",\n          value: function value(t) {\n            var e = {\n              delay: 0,\n              loops: 0,\n              direction: this.direction.FORWARD,\n              callBack: null\n            };\n            return t && (e = {\n              delay: t.delay ? t.delay : e.delay,\n              loops: t.loops ? t.loops : e.loops,\n              direction: t.direction ? t.direction : e.direction,\n              callBack: t.callBack ? t.callBack : e.callBack\n            }), e;\n          }\n        }, {\n          key: \"resetAnimation\",\n          value: function value() {\n            this.options.delayTime = this.options.delay - 1, this.options.loopsNumber = this.options.loops - 1;\n          }\n        }, {\n          key: \"getNextFrame\",\n          value: function value(t) {\n            var e,\n                n = this.spriteAnimation.length;\n            if (this.isFinished = !1, this.options.delayTime <= 0) switch (this.options.direction) {\n              case this.direction.FORWARD:\n                e = t + 1;\n                break;\n\n              case this.direction.BACKWARD:\n                e = t - 1;\n                break;\n\n              case this.direction.RANDOM:\n                e = Math.floor(Math.random() * n + 0);\n                break;\n\n              default:\n                e = t + 1;\n            } else e = t, this.options.delayTime--;\n            return (e >= n || e < 0) && (-1 === this.options.loops || this.options.loopsNumber > 0 ? (e >= n ? e = 0 : e < 0 && (e = n), -1 !== this.options.loops && this.options.loopsNumber--, this.options.delayTime = this.options.delay) : (e = -1, this.isFinished = !0)), e;\n          }\n        }, {\n          key: \"name\",\n          get: function get() {\n            return this.animName;\n          }\n        }, {\n          key: \"url\",\n          get: function get() {\n            return this.spriteSheetUrl;\n          }\n        }, {\n          key: \"hasCallBack\",\n          get: function get() {\n            return !(!this.options || !this.options.callBack);\n          }\n        }, {\n          key: \"hasFinished\",\n          get: function get() {\n            return this.isFinished;\n          }\n        }]) && p(e.prototype, n), i && p(e, i), t;\n      }(),\n      Toon: function () {\n        function t(e, n) {\n          !function (t, e) {\n            if (!(t instanceof e)) throw new TypeError(\"Cannot call a class as a function\");\n          }(this, t), this.id = e, this.domElem = document.getElementById(e), this.anim = new Map(), this.currentAnimation, this.currentFrame, this.isAnimationPlaying = !1, n && (this.idle = n, this.paintSprite(n));\n        }\n\n        var e, n, i;\n        return e = t, (n = [{\n          key: \"update\",\n          value: function value() {\n            this.isAnimationPlaying && (this.setFrame(this.currentAnimation, this.currentFrame), this.currentFrame = this.currentAnimation.getNextFrame(this.currentFrame), this.currentAnimation.hasFinished && (this.isAnimationPlaying = !1, this.currentAnimation.hasCallBack ? this.currentAnimation.executeCallBack() : this.stopAnimation(this.currentAnimation.name)));\n          }\n        }, {\n          key: \"addAnimation\",\n          value: function value(t) {\n            var e = t.name;\n            this.anim.has(e) ? alert(\"The RogerToon \".concat(this.id, \" has ALREADY an animation with the name: \").concat(e, \" \\n Please choose another name and try it again.\")) : this.anim.set(e, t);\n          }\n        }, {\n          key: \"playAnimation\",\n          value: function value(t) {\n            console.log(\"Play animation: \" + t), this.isAnimationPlaying = !0, this.currentAnimation = this.anim.get(t), this.currentFrame = 0, this.currentAnimation.resetAnimation();\n          }\n        }, {\n          key: \"stopAnimation\",\n          value: function value(t) {\n            console.log(\"Stop animation: \" + t), this.isAnimationPlaying = !1, this.currentFrame = 0, this.paintSprite(this.anim[0].getSprite(0));\n          }\n        }, {\n          key: \"setFrame\",\n          value: function value(t, e) {\n            this.currentAnimation = t, this.currentFrame = e, this.paintSprite(t.getSprite(e));\n          }\n        }, {\n          key: \"paintSprite\",\n          value: function value(t) {\n            this.domElem.style.backgroundImage = 'url(\"'.concat(t.url, '\")'), this.domElem.style.width = t.w + \"px\", this.domElem.style.height = t.h + \"px\", this.domElem.style.backgroundPositionX = -t.x + \"px\", this.domElem.style.backgroundPositionY = -t.y + \"px\";\n          }\n        }]) && y(e.prototype, n), i && y(e, i), t;\n      }()\n    };\n    e[\"default\"] = d;\n  }])[\"default\"];\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./lib/roger.min.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ })

/******/ });