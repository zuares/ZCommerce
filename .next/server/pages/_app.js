module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy90YWlsd2luZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/tailwindcss/tailwind.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.scss */ \"./styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/GlobalState */ \"./store/GlobalState.js\");\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDRSxxRUFBQywwREFBRDtBQUFBLDJCQUNFLHFFQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVjRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuc2NzcydcbmltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IERhdGFQcm92aWRlciBmcm9tICcuLi9zdG9yZS9HbG9iYWxTdGF0ZSdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPERhdGFQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0RhdGFQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/Actions.js":
/*!**************************!*\
  !*** ./store/Actions.js ***!
  \**************************/
/*! exports provided: Actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Actions\", function() { return Actions; });\nconst Actions = {\n  Notify: \"NOTIFY\",\n  Auth: \"AUTH\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9BY3Rpb25zLmpzPzVhZDUiXSwibmFtZXMiOlsiQWN0aW9ucyIsIk5vdGlmeSIsIkF1dGgiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBTyxNQUFNQSxPQUFPLEdBQUc7QUFDbkJDLFFBQU0sRUFBRSxRQURXO0FBRW5CQyxNQUFJLEVBQUU7QUFGYSxDQUFoQiIsImZpbGUiOiIuL3N0b3JlL0FjdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBBY3Rpb25zID0ge1xuICAgIE5vdGlmeTogXCJOT1RJRllcIixcbiAgICBBdXRoOiBcIkFVVEhcIixcbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/Actions.js\n");

/***/ }),

/***/ "./store/GlobalState.js":
/*!******************************!*\
  !*** ./store/GlobalState.js ***!
  \******************************/
/*! exports provided: DataContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataContext\", function() { return DataContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetchData */ \"./utils/fetchData.js\");\n/* harmony import */ var _Reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reducer */ \"./store/Reducer.js\");\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/store/GlobalState.js\";\n\n\n\nconst DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\n\nfunction DataProvider({\n  children\n}) {\n  const initialState = {\n    notify: {},\n    auth: {}\n  };\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(_Reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], initialState);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchUser = async () => {\n      const data = await Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_2__[\"getData\"])('auth/accessToken');\n      dispatch({\n        type: 'AUTH',\n        payload: data\n      });\n    };\n\n    fetchUser();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DataContext.Provider, {\n    value: {\n      state,\n      dispatch\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9HbG9iYWxTdGF0ZS5qcz9hODZmIl0sIm5hbWVzIjpbIkRhdGFDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkRhdGFQcm92aWRlciIsImNoaWxkcmVuIiwiaW5pdGlhbFN0YXRlIiwibm90aWZ5IiwiYXV0aCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwicmVkdWNlcnMiLCJ1c2VFZmZlY3QiLCJmZXRjaFVzZXIiLCJkYXRhIiwiZ2V0RGF0YSIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR08sTUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7O0FBRVAsU0FBU0MsWUFBVCxDQUFzQjtBQUFFQztBQUFGLENBQXRCLEVBQW9DO0FBQ2hDLFFBQU1DLFlBQVksR0FBRztBQUFFQyxVQUFNLEVBQUUsRUFBVjtBQUFjQyxRQUFJLEVBQUU7QUFBcEIsR0FBckI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHdEQUFVLENBQUNDLGdEQUFELEVBQVdOLFlBQVgsQ0FBcEM7QUFFQU8seURBQVMsQ0FBQyxNQUFNO0FBRVosVUFBTUMsU0FBUyxHQUFHLFlBQVk7QUFDMUIsWUFBTUMsSUFBSSxHQUFHLE1BQU1DLGdFQUFPLENBQUMsa0JBQUQsQ0FBMUI7QUFDQU4sY0FBUSxDQUFDO0FBQUVPLFlBQUksRUFBRSxNQUFSO0FBQWdCQyxlQUFPLEVBQUVIO0FBQXpCLE9BQUQsQ0FBUjtBQUNILEtBSEQ7O0FBS0FELGFBQVM7QUFDWixHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsc0JBQ0kscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVMLFdBQUY7QUFBU0M7QUFBVCxLQUE3QjtBQUFBLGNBQ0tMO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7O0FBRWNELDJFQUFmIiwiZmlsZSI6Ii4vc3RvcmUvR2xvYmFsU3RhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uL3V0aWxzL2ZldGNoRGF0YSc7XG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9SZWR1Y2VyJztcblxuXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZnVuY3Rpb24gRGF0YVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgbm90aWZ5OiB7fSwgYXV0aDoge30gfVxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VycywgaW5pdGlhbFN0YXRlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YSgnYXV0aC9hY2Nlc3NUb2tlbicpXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdBVVRIJywgcGF5bG9hZDogZGF0YSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hVc2VyKClcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/GlobalState.js\n");

/***/ }),

/***/ "./store/Reducer.js":
/*!**************************!*\
  !*** ./store/Reducer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ \"./store/Actions.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction reducers(state, action) {\n  switch (action.type) {\n    case _Actions__WEBPACK_IMPORTED_MODULE_0__[\"Actions\"].Notify:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        notify: action.payload\n      });\n\n    case _Actions__WEBPACK_IMPORTED_MODULE_0__[\"Actions\"].Auth:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        auth: action.payload\n      });\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducers);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9SZWR1Y2VyLmpzP2NkZDUiXSwibmFtZXMiOlsicmVkdWNlcnMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJBY3Rpb25zIiwiTm90aWZ5Iiwibm90aWZ5IiwicGF5bG9hZCIsIkF1dGgiLCJhdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxNQUF6QixFQUFpQztBQUM3QixVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQyxnREFBTyxDQUFDQyxNQUFiO0FBQ0ksNkNBQ09KLEtBRFA7QUFFSUssY0FBTSxFQUFFSixNQUFNLENBQUNLO0FBRm5COztBQUlKLFNBQUtILGdEQUFPLENBQUNJLElBQWI7QUFDSSw2Q0FDT1AsS0FEUDtBQUVJUSxZQUFJLEVBQUVQLE1BQU0sQ0FBQ0s7QUFGakI7O0FBS0o7QUFDSSxhQUFPTixLQUFQO0FBYlI7QUFlSDs7QUFFY0QsdUVBQWYiLCJmaWxlIjoiLi9zdG9yZS9SZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJy4vQWN0aW9ucydcblxuZnVuY3Rpb24gcmVkdWNlcnMoc3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBY3Rpb25zLk5vdGlmeTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbm90aWZ5OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIEFjdGlvbnMuQXV0aDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYXV0aDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/Reducer.js\n");

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWwuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/global.scss\n");

/***/ }),

/***/ "./utils/fetchData.js":
/*!****************************!*\
  !*** ./utils/fetchData.js ***!
  \****************************/
/*! exports provided: getData, postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return getData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postData\", function() { return postData; });\nconst baseUrl = \"http://localhost:3000\";\nconst getData = async (url, token) => {\n  const res = await fetch(`${baseUrl}/api/${url}`, {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json',\n      'Authorization': token\n    }\n  });\n  const data = await res.json();\n  return data;\n};\nconst postData = async (url, post, token) => {\n  const res = await fetch(`${baseUrl}/api/${url}`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'Authorization': token\n    },\n    body: JSON.stringify(post)\n  });\n  const data = await res.json();\n  return data;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9mZXRjaERhdGEuanM/MTA1NiJdLCJuYW1lcyI6WyJiYXNlVXJsIiwicHJvY2VzcyIsImdldERhdGEiLCJ1cmwiLCJ0b2tlbiIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwicG9zdERhdGEiLCJwb3N0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBLE1BQU1BLE9BQU8sR0FBR0MsdUJBQWhCO0FBRU8sTUFBTUMsT0FBTyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsS0FBWixLQUFzQjtBQUN6QyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVOLE9BQVEsUUFBT0csR0FBSSxFQUF2QixFQUEwQjtBQUM3Q0ksVUFBTSxFQUFFLEtBRHFDO0FBRTdDQyxXQUFPLEVBQUU7QUFDTCxzQkFBZ0Isa0JBRFg7QUFFTCx1QkFBaUJKO0FBRlo7QUFGb0MsR0FBMUIsQ0FBdkI7QUFPQSxRQUFNSyxJQUFJLEdBQUcsTUFBTUosR0FBRyxDQUFDSyxJQUFKLEVBQW5CO0FBQ0EsU0FBT0QsSUFBUDtBQUNILENBVk07QUFZQSxNQUFNRSxRQUFRLEdBQUcsT0FBT1IsR0FBUCxFQUFZUyxJQUFaLEVBQWtCUixLQUFsQixLQUE0QjtBQUNoRCxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVOLE9BQVEsUUFBT0csR0FBSSxFQUF2QixFQUEwQjtBQUM3Q0ksVUFBTSxFQUFFLE1BRHFDO0FBRTdDQyxXQUFPLEVBQUU7QUFDTCxzQkFBZ0Isa0JBRFg7QUFFTCx1QkFBaUJKO0FBRlosS0FGb0M7QUFNN0NTLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVILElBQWY7QUFOdUMsR0FBMUIsQ0FBdkI7QUFRQSxRQUFNSCxJQUFJLEdBQUcsTUFBTUosR0FBRyxDQUFDSyxJQUFKLEVBQW5CO0FBQ0EsU0FBT0QsSUFBUDtBQUNILENBWE0iLCJmaWxlIjoiLi91dGlscy9mZXRjaERhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5CQVNFX1VSTFxuXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICh1cmwsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgY29uc3QgcG9zdERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS8ke3VybH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxuICAgIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4gZGF0YVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/fetchData.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });