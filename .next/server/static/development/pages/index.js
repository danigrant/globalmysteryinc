module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AppContainer.js":
/*!************************************!*\
  !*** ./components/AppContainer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danigrant/Projects/globalmysteryinc/components/AppContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AppContainer = props => {
  return __jsx("div", {
    className: "appcontainer-wrapper constrained-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (AppContainer);

/***/ }),

/***/ "./components/IntroModal.js":
/*!**********************************!*\
  !*** ./components/IntroModal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danigrant/Projects/globalmysteryinc/components/IntroModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const IntroModal = props => {
  return __jsx("div", {
    className: "intro-modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("i", {
    onClick: props.closeIntroModal,
    className: "material-icons intro-modal-close link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, "close_rounded"), __jsx("img", {
    src: props.data.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }), __jsx("p", {
    className: "margin-top-sml font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, props.data.text), props.data.index == 3 && __jsx("div", {
    onClick: props.closeIntroModal,
    className: "button background-color-purple center margin-top-sml",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Let's go!"), __jsx("div", {
    className: "nativation-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.data.index != 0 && __jsx("i", {
    onClick: props.prevIntroModal,
    className: "material-icons link intro-modal-navigate-before",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "navigate_before"), props.data.index != 3 && __jsx("i", {
    onClick: props.nextIntroModal,
    className: "material-icons link intro-modal-navigate-next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "navigate_next")));
};

/* harmony default export */ __webpack_exports__["default"] = (IntroModal);

/***/ }),

/***/ "./components/Overlay.js":
/*!*******************************!*\
  !*** ./components/Overlay.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danigrant/Projects/globalmysteryinc/components/Overlay.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Overlay = props => {
  return __jsx("div", {
    className: "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Overlay);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom_confetti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom-confetti */ "react-dom-confetti");
/* harmony import */ var react_dom_confetti__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_confetti__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Overlay */ "./components/Overlay.js");
/* harmony import */ var _components_IntroModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/IntroModal */ "./components/IntroModal.js");


var _jsxFileName = "/Users/danigrant/Projects/globalmysteryinc/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const ExpandableBox = react_pose__WEBPACK_IMPORTED_MODULE_4___default.a.div({
  expanded: {
    marginTop: 0
  },
  contracted: {
    marginTop: 30
  }
});
const confettiConfig = {
  angle: 90,
  spread: 45,
  startVelocity: 45,
  elementCount: 50,
  dragFriction: 0.1,
  duration: 3000,
  stagger: 0,
  width: "10px",
  height: "10px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};
const starterModals = [{
  "index": 0,
  "image": "/images/bitmoji-math.jpeg",
  "text": "Welcome to Global Mystery Inc. We are like a detective agency, but much, much, much geekier."
}, {
  "index": 1,
  "image": "/images/bitmoji-bushes.png",
  "text": "Here’s how we work: we listen to your mysteries and then we go off and search for the answers."
}, {
  "index": 2,
  "image": "/images/bitmoji-text.jpeg",
  "text": "You may be called on to help explain someone else's mystery. Or someone may be called on to help explain yours."
}, {
  "index": 3,
  "image": "/images/bitmoji-boom.jpeg",
  "text": "It's a fun game all about this mysterious little world we inhabit."
}];
const autosuggestedAudiences = ["parent who loves you very much", "aspiring comedian", "mean person", "person you are on a first date with", "out of touch relative", "a toddler with too much energy", "person who lived a thousand years ago", "former lover", "twenty something with lots to learn", "very wise but also very peculiar child", "person who has never experienced snow", "drunk uncle", "person you want to have a very short conversation with", "mouse", "poet who only understands things in rhymes", "audience of senior citizens", "nearby group of people waiting for the subway", "person who is hard of hearing", "least patient person", "friend you haven't seen since college study abroad", "close friend who is about to become a parent", "single child", "very privileged human being", "former member of The Beatles", "TV writer on the cast of SNL", "astronaut who hasn't been back to earth in a decade", "Kim Kardashian look-a-like", "person who is in a big hurry", "tall person you meet in the elevator", "shopkeeper who is wondering what you are doing", "bitcoin maximalist", "hungry hungry hippo", "retired professor who refuses to believe new information"];

class Index extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleFormActive", () => {
      this.setState({
        formIsActive: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleTopicChange", e => {
      this.setState({
        topic: e.target.value
      });
      this.updateTwitterLink();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleAudienceChange", e => {
      this.setState({
        audience: e.target.value
      });
      this.updateTwitterLink();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleEmailChange", e => {
      this.setState({
        email: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleTwitterChange", e => {
      this.setState({
        twitter: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleAnonymityChange", e => {
      this.setState({
        anonymity: !this.state.anonymity
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleSubmit", e => {
      e.preventDefault();
      fetch('https://en7zz3uf5iumrri.m.pipedream.net', {
        method: 'POST',
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
          "anonymous": this.state.anonymity.toString(),
          "twitter_handle": this.state.twitter,
          "email": this.state.email,
          "mystery": this.state.topic.toLowerCase(),
          "mystery_audience": this.state.audience.toLowerCase()
        })
      }); // reset form

      this.setState({
        topic: '',
        audience: '',
        email: '',
        twitter: '',
        anonymity: false,
        formIsActive: false,
        formSubmitted: true
      }); // wait a bit and then trigger the confetti

      let thisRef = this;
      setTimeout(function () {
        thisRef.setState({
          confetti: true
        });
      }, 150);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleReplay", e => {
      this.setState({
        formSubmitted: false,
        formIsActive: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "putFormDown", () => {
      this.setState({
        formIsActive: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "updateTwitterLink", () => {
      let baseString = "https://twitter.com/intent/tweet?text=";
      let encodedPath = encodeURIComponent(`🕵️‍♀️ Just gave \#globalmysteryinc a mysterious little mystery to solve....how would you explain ${this.state.topic ? this.state.topic : "why is the climate changing"} to a ${this.state.audience ? this.state.audience : "mean person"}? globalmysteryinc.com`);
      this.setState({
        twitterLink: `${baseString}${encodedPath.toLowerCase()}`
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "nextIntroModal", () => {
      this.setState({
        introModalIndex: this.state.introModalIndex + 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "prevIntroModal", () => {
      this.setState({
        introModalIndex: this.state.introModalIndex - 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "closeIntroModal", () => {
      this.setState({
        introModalIndex: this.state.introModals.length + 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "autosuggestedAudience", () => {
      this.handleAudienceChange({
        "target": {
          "value": autosuggestedAudiences[Math.floor(Math.random() * autosuggestedAudiences.length)]
        }
      });
    });

    this.state = {
      introModals: starterModals,
      introModalIndex: 0,
      topic: '',
      audience: '',
      email: '',
      twitter: '',
      anonymity: false,
      formIsActive: false,
      formSubmitted: false,
      confetti: false,
      twitterLink: "https://twitter.com/intent/tweet?text="
    };
  }

  componentDidMount() {
    document.querySelectorAll('[data-autoresize]').forEach(function (element) {
      element.style.boxSizing = 'border-box';
      var offset = element.offsetHeight - element.clientHeight;
      document.addEventListener('input', function (event) {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + offset + 'px';
      });
      element.removeAttribute('data-autoresize');
    });
  }

  render() {
    if (this.state.formSubmitted) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, __jsx(react_dom_confetti__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "confetti",
        active: this.state.confetti,
        config: confettiConfig,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      })), __jsx("div", {
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, __jsx("img", {
        src: "/images/bitmoji-amazing.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), __jsx("p", {
        className: "margin-top-med",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "That is a ", __jsx("span", {
        className: "font-color-purple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, " fantastic"), " mystery. It\u2019s been submitted to global mystery headquarters. Soon we will be kicking off tournaments to find the best explanations to the most intriguing mysteries we receive. It's basically like American Idol meets r/Science."), __jsx("a", {
        onClick: this.handleReplay,
        href: this.state.twitterLink,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, __jsx("div", {
        className: "button margin-top-med background-color-twitter-blue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, __jsx("svg", {
        className: "twitter-logo",
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "white",
        viewBox: "0 0 24 24",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, __jsx("path", {
        d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      })), __jsx("p", {
        className: "margin-left-sml margin-right-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, __jsx("span", {
        className: "lg-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "Share Your Mystery With The Twitterverse"), __jsx("span", {
        className: "sm-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "Share Mystery With Twitter")))), __jsx("p", {
        className: "check-out-others link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, __jsx("a", {
        href: "https://twitter.com/search?q=%23globalmysteryinc",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, "see other submitted mysteries")), __jsx("div", {
        onClick: this.handleReplay,
        className: "play-again link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, __jsx("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "replay_rounded"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "Have another mystery?")))));
    } else {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, this.state.introModalIndex < this.state.introModals.length && __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, __jsx(_components_Overlay__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }), __jsx(_components_IntroModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
        data: this.state.introModals[this.state.introModalIndex],
        nextIntroModal: this.nextIntroModal,
        prevIntroModal: this.prevIntroModal,
        closeIntroModal: this.closeIntroModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      })), !this.state.formIsActive && __jsx("div", {
        className: "title-section-wrapper center margin-top-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, __jsx("h1", {
        className: "font-lrg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "Serious question."), __jsx("h1", {
        className: "font-lrg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "What would you like explained?"), __jsx("h2", {
        className: "lg-view font-color-grey",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "Welcome to a project where we listen to your mysteries and then kick off a tournament to explain them if we can't find the answer.")), this.state.formIsActive && __jsx("i", {
        onClick: () => {
          this.setState({
            formIsActive: false
          });
          console.log(this.state.formIsActive);
        },
        className: "close-mystery-form material-icons link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "close_rounded"), __jsx(ExpandableBox, {
        onClick: this.handleFormActive,
        pose: this.state.formIsActive ? 'expanded' : 'contracted',
        className: "card-section-wrapper font-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, __jsx("form", {
        className: "margin-bottom-med",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, __jsx("div", {
        className: "field-wrap margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, __jsx("label", {
        className: "how-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "How would you explain"), __jsx("textarea", {
        className: "input-with-center-text",
        value: this.state.topic,
        onChange: this.handleTopicChange,
        "data-autoresize": true,
        rows: "1",
        type: "text",
        placeholder: "how does popcorn work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      })), __jsx("div", {
        className: "field-wrap margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "to ", /[aeiou]/.test(this.state.audience.toLowerCase().charAt(0)) ? "an" : "a"), __jsx("textarea", {
        className: "lg-view input-with-center-text",
        value: this.state.audience,
        onChange: this.handleAudienceChange,
        "data-autoresize": true,
        rows: this.state.audience.length > 46 ? 2 : 1,
        type: "text",
        placeholder: "space alien who has never visited earth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }), __jsx("textarea", {
        className: "sm-view input-with-center-text",
        value: this.state.audience,
        onChange: this.handleAudienceChange,
        "data-autoresize": true,
        rows: this.state.audience.length > 21 && this.state.audience.length < 38 ? 2 : this.state.audience.length > 37 ? 3 : 1,
        type: "text",
        placeholder: "angsty twenty something",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }), __jsx("div", {
        onClick: this.autosuggestedAudience,
        className: "autosuggest-audience-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, __jsx("i", {
        className: "material-icons link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "shuffle_rounded"))), this.state.formIsActive && __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, __jsx("div", {
        className: "margin-top-lrg margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, __jsx("div", {
        className: "full-row-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, __jsx("label", {
        className: "constrained-width-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "Who are you on email:")), __jsx("input", {
        className: "constrained-width-input",
        value: this.state.email,
        onChange: this.handleEmailChange,
        type: "text",
        placeholder: "you@your.email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      })), __jsx("div", {
        className: "margin-top-med margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, __jsx("div", {
        className: "full-row-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, __jsx("label", {
        className: "constrained-width-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "Who are you on twitter:")), __jsx("input", {
        className: "constrained-width-input",
        value: this.state.twitter,
        onChange: this.handleTwitterChange,
        type: "text",
        placeholder: "@yourtwitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      })), __jsx("div", {
        className: "margin-top-lrg margin-bottom-sml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, __jsx("input", {
        className: "checkbox",
        value: this.state.anonymity,
        onChange: this.handleAnonymityChange,
        type: "checkbox",
        checked: !this.state.anonymity,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }), __jsx("p", {
        id: "checkbox-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, "You can attribute this mystery to me.")))), __jsx("div", {
        onClick: this.handleSubmit,
        className: "margin-top-lrg button background-color-purple center",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "Submit Mystery")), !this.state.formIsActive && __jsx("img", {
        className: "sm-view",
        id: "bitmoji-image",
        src: "/images/bitmoji-thinking.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }), __jsx("img", {
        className: "lg-view",
        id: "bitmoji-image",
        src: "/images/bitmoji-thinking.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      })));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danigrant/Projects/globalmysteryinc/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom-confetti":
/*!*************************************!*\
  !*** external "react-dom-confetti" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom-confetti");

/***/ }),

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map