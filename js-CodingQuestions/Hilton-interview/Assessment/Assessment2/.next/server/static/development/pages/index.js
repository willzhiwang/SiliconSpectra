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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Room.js":
/*!****************************!*\
  !*** ./components/Room.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_StyledRoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/StyledRoom */ "./components/styles/StyledRoom.js");
/* harmony import */ var _styles_StyledRoomName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/StyledRoomName */ "./components/styles/StyledRoomName.js");
/* harmony import */ var _styles_StyledRoomTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/StyledRoomTitle */ "./components/styles/StyledRoomTitle.js");
/* harmony import */ var _styles_StyledSelects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/StyledSelects */ "./components/styles/StyledSelects.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions_roomActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/actions/roomActions */ "./redux/actions/roomActions.js");
var _jsxFileName = "/Users/zhiwang/Downloads/Assessment/Assessment2/components/Room.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Room = ({
  room,
  checkRoom,
  roomAutoChecks,
  setAdultsOrChildren
}) => {
  let option;

  if (!room.ableToCheck || room.checked) {
    option = false;
  } else {
    option = true;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styles_StyledRoom__WEBPACK_IMPORTED_MODULE_1__["default"], {
    room: room,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_styles_StyledRoomTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    room: room,
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, room.ableToCheck && __jsx("input", {
    type: "checkbox",
    checked: room.checked,
    onChange: () => {
      checkRoom(room.id);
      roomAutoChecks(room.id);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(_styles_StyledRoomName__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Room", room.id))), __jsx(_styles_StyledSelects__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "adults",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Adults"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "(18+)"), __jsx("select", {
    id: "adults",
    disabled: option,
    value: room.adults,
    onChange: e => {
      setAdultsOrChildren(e, room.id);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("option", {
    value: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, "1"), __jsx("option", {
    value: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, "2"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "children",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Children"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "(0-17)"), __jsx("select", {
    id: "children",
    disabled: option,
    value: room.children,
    onChange: e => {
      setAdultsOrChildren(e, room.id);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("option", {
    value: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "0"), __jsx("option", {
    value: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "1"), __jsx("option", {
    value: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "2"))))));
};

Room.propTypes = {
  room: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  checkRoom: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  roomAutoChecks: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  setAdultsOrChildren: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(null, {
  checkRoom: _redux_actions_roomActions__WEBPACK_IMPORTED_MODULE_7__["checkRoom"],
  roomAutoChecks: _redux_actions_roomActions__WEBPACK_IMPORTED_MODULE_7__["roomAutoChecks"],
  setAdultsOrChildren: _redux_actions_roomActions__WEBPACK_IMPORTED_MODULE_7__["setAdultsOrChildren"]
})(Room));

/***/ }),

/***/ "./components/styles/GlobalStyles.js":
/*!*******************************************!*\
  !*** ./components/styles/GlobalStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
 p{
     margin: 3px;
 }
 select{
    margin: 3px;
 }
 button {
    padding: 5px 5px;
    font-size: 13px;
 }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./components/styles/StyledRoom.js":
/*!*****************************************!*\
  !*** ./components/styles/StyledRoom.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledRoom = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  componentId: "k450ry-0"
})(["display:flex;flex-direction:column;min-width:140px;border-style:solid;", " border-radius:5px;margin-bottom:10px;margin-right:10px;"], ({
  room
}) => {
  if (!room.ableToCheck || room.checked) {
    return `
      border-color: #ededed;
    `;
  } else {
    return `border-color: #b8b8b8;`;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (StyledRoom);

/***/ }),

/***/ "./components/styles/StyledRoomContainer.js":
/*!**************************************************!*\
  !*** ./components/styles/StyledRoomContainer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledRoomContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  componentId: "sc-10xvsal-0"
})(["display:flex;flex-direction:row;justify-content:start;align-items:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (StyledRoomContainer);

/***/ }),

/***/ "./components/styles/StyledRoomName.js":
/*!*********************************************!*\
  !*** ./components/styles/StyledRoomName.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledRoomName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  componentId: "giem5x-0"
})(["font-size:1.1em;text-align:center;margin:0.2em 0;"]);
/* harmony default export */ __webpack_exports__["default"] = (StyledRoomName);

/***/ }),

/***/ "./components/styles/StyledRoomTitle.js":
/*!**********************************************!*\
  !*** ./components/styles/StyledRoomTitle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledRoomTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  componentId: "sc-1ezjdxm-0"
})(["padding-left:0.1em;display:flex;flex-direction:row;justify-content:start;align-items:center;", " margin-bottom:0.2em;"], ({
  room
}) => {
  if (!room.ableToCheck || room.checked) {
    return `
      background-color: #ededed;
    `;
  } else {
    return `background-color: #b8b8b8;`;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (StyledRoomTitle);

/***/ }),

/***/ "./components/styles/StyledSelects.js":
/*!********************************************!*\
  !*** ./components/styles/StyledSelects.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledSelects = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  componentId: "sc-1b9zrps-0"
})(["display:flex;flex-direction:row;justify-content:space-evenly;"]);
/* harmony default export */ __webpack_exports__["default"] = (StyledSelects);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Room */ "./components/Room.js");
/* harmony import */ var _components_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/GlobalStyles */ "./components/styles/GlobalStyles.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_styles_StyledRoomContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/StyledRoomContainer */ "./components/styles/StyledRoomContainer.js");
/* harmony import */ var _redux_actions_roomActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/roomActions */ "./redux/actions/roomActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/zhiwang/Downloads/Assessment/Assessment2/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Index = ({
  roomObj: {
    rooms,
    checkedRooms
  },
  submitRooms
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Rooms"), __jsx(_components_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(_components_styles_StyledRoomContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, rooms.map(room => {
    return __jsx(_components_Room__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: room.id,
      room: room,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 18
      }
    });
  })), __jsx("button", {
    onClick: () => {
      submitRooms();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "Submit"), checkedRooms && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Rooms you submitted:"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, checkedRooms.map(room => {
    return __jsx("div", {
      key: room.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 19
      }
    }, "id: ", room.id), __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 19
      }
    }, "adults: ", room.adults), __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 19
      }
    }, "children: ", room.children));
  }))));
};

Index.getStaticProps = ({
  store
}) => {// console.log("s", store);
};

const mapStateToProps = state => ({
  roomObj: state.roomObj
});

Index.propTypes = {
  roomObj: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  checkRoom: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  submitRooms: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  checkRoom: _redux_actions_roomActions__WEBPACK_IMPORTED_MODULE_5__["checkRoom"],
  submitRooms: _redux_actions_roomActions__WEBPACK_IMPORTED_MODULE_5__["submitRooms"]
})(Index));

/***/ }),

/***/ "./redux/actions/roomActions.js":
/*!**************************************!*\
  !*** ./redux/actions/roomActions.js ***!
  \**************************************/
/*! exports provided: checkRoom, roomAutoChecks, setAdultsOrChildren, submitRooms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRoom", function() { return checkRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomAutoChecks", function() { return roomAutoChecks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAdultsOrChildren", function() { return setAdultsOrChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitRooms", function() { return submitRooms; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./redux/actions/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const checkRoom = id => (dispatch, getState) => {
  const rooms = getState().roomObj.rooms;
  const newRooms = rooms.map(room => {
    return room.id === id && room.ableToCheck === true ? _objectSpread({}, room, {
      checked: !room.checked
    }) : room;
  });
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CHECK_ROOM"],
    payload: newRooms
  });
  return newRooms;
};
const roomAutoChecks = id => (dispatch, getState) => {
  let checkedRoom = getState().roomObj.rooms.find(room => {
    if (room.id === id) {
      return room;
    }
  });
  let rooms = getState().roomObj.rooms;

  if (checkedRoom.checked === true) {
    rooms = rooms.map(room => {
      return room.id < id && room.ableToCheck === true ? _objectSpread({}, room, {
        checked: true
      }) : room;
    });
  } else {
    rooms = rooms.map(room => {
      return room.id > id && room.ableToCheck === true ? _objectSpread({}, room, {
        checked: false
      }) : room;
    });
  }

  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CHECK_ROOM"],
    payload: rooms
  });
  return rooms;
};
const setAdultsOrChildren = (e, id) => (dispatch, getState) => {
  let rooms = getState().roomObj.rooms;
  rooms = rooms.map(room => {
    return room.id === id ? _objectSpread({}, room, {
      [e.target.id]: parseInt(e.target.value)
    }) : room;
  });
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CHECK_ROOM"],
    payload: rooms
  }); //console.log(rooms);

  return rooms;
};
const submitRooms = () => (dispatch, getState) => {
  let rooms = getState().roomObj.rooms;
  const checkedRooms = rooms.filter(room => {
    return (room.checked || !room.ableToCheck) && _objectSpread({}, room);
  });
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SUBMIT_ROOM"],
    payload: checkedRooms
  });
  return checkedRooms;
};

/***/ }),

/***/ "./redux/actions/types.js":
/*!********************************!*\
  !*** ./redux/actions/types.js ***!
  \********************************/
/*! exports provided: CHECK_ROOM, SUBMIT_ROOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_ROOM", function() { return CHECK_ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_ROOM", function() { return SUBMIT_ROOM; });
//
const CHECK_ROOM = "CHECK_ROOM";
const SUBMIT_ROOM = "SUBMIT_ROOM";

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zhiwang/Downloads/Assessment/Assessment2/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map