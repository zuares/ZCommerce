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
/*! exports provided: Actions, addToCart, inCrease, deCrease, deleteItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Actions\", function() { return Actions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCart\", function() { return addToCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inCrease\", function() { return inCrease; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deCrease\", function() { return deCrease; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteItem\", function() { return deleteItem; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst Actions = {\n  Notify: \"NOTIFY\",\n  Auth: \"AUTH\",\n  Cart: \"CART\"\n};\nconst addToCart = (product, cart) => {\n  if (product.inStock === 0) return {\n    type: 'NOTIFY',\n    payload: {\n      msg: {\n        err: `The product has been added to cart`\n      }\n    }\n  };\n  const check = cart.every(item => {\n    return item._id !== product._id;\n  });\n  if (!check) return {\n    type: 'NOTIFY',\n    payload: {\n      msg: {\n        err: `The product has been added to cart`\n      }\n    }\n  };\n  return {\n    type: 'CART',\n    payload: [...cart, _objectSpread(_objectSpread({}, product), {}, {\n      quantity: 1\n    })]\n  };\n};\nconst inCrease = (data, id) => {\n  const newData = [...data];\n  newData.forEach(item => {\n    if (item._id === id) item.quantity += 1;\n  });\n  return {\n    type: 'CART',\n    payload: newData\n  };\n};\nconst deCrease = (data, id) => {\n  const newData = [...data];\n  newData.forEach(item => {\n    if (item._id === id) item.quantity -= 1;\n  });\n  return {\n    type: 'CART',\n    payload: newData\n  };\n};\nconst deleteItem = (data, id) => {\n  const newData = data.filter(item => item._id !== id);\n  return {\n    type: 'CART',\n    payload: newData\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9BY3Rpb25zLmpzPzVhZDUiXSwibmFtZXMiOlsiQWN0aW9ucyIsIk5vdGlmeSIsIkF1dGgiLCJDYXJ0IiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsImNhcnQiLCJpblN0b2NrIiwidHlwZSIsInBheWxvYWQiLCJtc2ciLCJlcnIiLCJjaGVjayIsImV2ZXJ5IiwiaXRlbSIsIl9pZCIsInF1YW50aXR5IiwiaW5DcmVhc2UiLCJkYXRhIiwiaWQiLCJuZXdEYXRhIiwiZm9yRWFjaCIsImRlQ3JlYXNlIiwiZGVsZXRlSXRlbSIsImZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ08sTUFBTUEsT0FBTyxHQUFHO0FBQ25CQyxRQUFNLEVBQUUsUUFEVztBQUVuQkMsTUFBSSxFQUFFLE1BRmE7QUFHbkJDLE1BQUksRUFBRTtBQUhhLENBQWhCO0FBTUEsTUFBTUMsU0FBUyxHQUFHLENBQUNDLE9BQUQsRUFBVUMsSUFBVixLQUFtQjtBQUV4QyxNQUFJRCxPQUFPLENBQUNFLE9BQVIsS0FBb0IsQ0FBeEIsRUFDSSxPQUFRO0FBQUVDLFFBQUksRUFBRSxRQUFSO0FBQWtCQyxXQUFPLEVBQUU7QUFBRUMsU0FBRyxFQUFFO0FBQUVDLFdBQUcsRUFBRztBQUFSO0FBQVA7QUFBM0IsR0FBUjtBQUVKLFFBQU1DLEtBQUssR0FBR04sSUFBSSxDQUFDTyxLQUFMLENBQVdDLElBQUksSUFBSTtBQUM3QixXQUFPQSxJQUFJLENBQUNDLEdBQUwsS0FBYVYsT0FBTyxDQUFDVSxHQUE1QjtBQUNILEdBRmEsQ0FBZDtBQUlBLE1BQUksQ0FBQ0gsS0FBTCxFQUNJLE9BQVE7QUFBRUosUUFBSSxFQUFFLFFBQVI7QUFBa0JDLFdBQU8sRUFBRTtBQUFFQyxTQUFHLEVBQUU7QUFBRUMsV0FBRyxFQUFHO0FBQVI7QUFBUDtBQUEzQixHQUFSO0FBRUosU0FBUTtBQUFFSCxRQUFJLEVBQUUsTUFBUjtBQUFnQkMsV0FBTyxFQUFFLENBQUMsR0FBR0gsSUFBSixrQ0FBZUQsT0FBZjtBQUF3QlcsY0FBUSxFQUFFO0FBQWxDO0FBQXpCLEdBQVI7QUFFSCxDQWRNO0FBZ0JBLE1BQU1DLFFBQVEsR0FBRyxDQUFDQyxJQUFELEVBQU9DLEVBQVAsS0FBYztBQUNsQyxRQUFNQyxPQUFPLEdBQUcsQ0FBQyxHQUFHRixJQUFKLENBQWhCO0FBQ0FFLFNBQU8sQ0FBQ0MsT0FBUixDQUFnQlAsSUFBSSxJQUFJO0FBQ3BCLFFBQUlBLElBQUksQ0FBQ0MsR0FBTCxLQUFhSSxFQUFqQixFQUFxQkwsSUFBSSxDQUFDRSxRQUFMLElBQWlCLENBQWpCO0FBQ3hCLEdBRkQ7QUFJQSxTQUFRO0FBQUVSLFFBQUksRUFBRSxNQUFSO0FBQWdCQyxXQUFPLEVBQUVXO0FBQXpCLEdBQVI7QUFFSCxDQVJNO0FBVUEsTUFBTUUsUUFBUSxHQUFHLENBQUNKLElBQUQsRUFBT0MsRUFBUCxLQUFjO0FBQ2xDLFFBQU1DLE9BQU8sR0FBRyxDQUFDLEdBQUdGLElBQUosQ0FBaEI7QUFDQUUsU0FBTyxDQUFDQyxPQUFSLENBQWdCUCxJQUFJLElBQUk7QUFDcEIsUUFBSUEsSUFBSSxDQUFDQyxHQUFMLEtBQWFJLEVBQWpCLEVBQXFCTCxJQUFJLENBQUNFLFFBQUwsSUFBaUIsQ0FBakI7QUFDeEIsR0FGRDtBQUlBLFNBQVE7QUFBRVIsUUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFdBQU8sRUFBRVc7QUFBekIsR0FBUjtBQUVILENBUk07QUFXQSxNQUFNRyxVQUFVLEdBQUcsQ0FBQ0wsSUFBRCxFQUFPQyxFQUFQLEtBQWM7QUFDcEMsUUFBTUMsT0FBTyxHQUFHRixJQUFJLENBQUNNLE1BQUwsQ0FBWVYsSUFBSSxJQUFJQSxJQUFJLENBQUNDLEdBQUwsS0FBYUksRUFBakMsQ0FBaEI7QUFDQSxTQUFRO0FBQUVYLFFBQUksRUFBRSxNQUFSO0FBQWdCQyxXQUFPLEVBQUVXO0FBQXpCLEdBQVI7QUFFSCxDQUpNIiwiZmlsZSI6Ii4vc3RvcmUvQWN0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IEFjdGlvbnMgPSB7XG4gICAgTm90aWZ5OiBcIk5PVElGWVwiLFxuICAgIEF1dGg6IFwiQVVUSFwiLFxuICAgIENhcnQ6IFwiQ0FSVFwiLFxufVxuXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3QsIGNhcnQpID0+IHtcblxuICAgIGlmIChwcm9kdWN0LmluU3RvY2sgPT09IDApXG4gICAgICAgIHJldHVybiAoeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBtc2c6IHsgZXJyOiBgVGhlIHByb2R1Y3QgaGFzIGJlZW4gYWRkZWQgdG8gY2FydGAgfSB9IH0pXG5cbiAgICBjb25zdCBjaGVjayA9IGNhcnQuZXZlcnkoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLl9pZCAhPT0gcHJvZHVjdC5faWRcbiAgICB9KVxuXG4gICAgaWYgKCFjaGVjaylcbiAgICAgICAgcmV0dXJuICh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IG1zZzogeyBlcnI6IGBUaGUgcHJvZHVjdCBoYXMgYmVlbiBhZGRlZCB0byBjYXJ0YCB9IH0gfSlcblxuICAgIHJldHVybiAoeyB0eXBlOiAnQ0FSVCcsIHBheWxvYWQ6IFsuLi5jYXJ0LCB7IC4uLnByb2R1Y3QsIHF1YW50aXR5OiAxIH1dIH0pXG5cbn1cblxuZXhwb3J0IGNvbnN0IGluQ3JlYXNlID0gKGRhdGEsIGlkKSA9PiB7XG4gICAgY29uc3QgbmV3RGF0YSA9IFsuLi5kYXRhXVxuICAgIG5ld0RhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uX2lkID09PSBpZCkgaXRlbS5xdWFudGl0eSArPSAxXG4gICAgfSlcblxuICAgIHJldHVybiAoeyB0eXBlOiAnQ0FSVCcsIHBheWxvYWQ6IG5ld0RhdGEgfSlcblxufVxuXG5leHBvcnQgY29uc3QgZGVDcmVhc2UgPSAoZGF0YSwgaWQpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdXG4gICAgbmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5faWQgPT09IGlkKSBpdGVtLnF1YW50aXR5IC09IDFcbiAgICB9KVxuXG4gICAgcmV0dXJuICh7IHR5cGU6ICdDQVJUJywgcGF5bG9hZDogbmV3RGF0YSB9KVxuXG59XG5cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUl0ZW0gPSAoZGF0YSwgaWQpID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLl9pZCAhPT0gaWQpXG4gICAgcmV0dXJuICh7IHR5cGU6ICdDQVJUJywgcGF5bG9hZDogbmV3RGF0YSB9KVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/Actions.js\n");

/***/ }),

/***/ "./store/GlobalState.js":
/*!******************************!*\
  !*** ./store/GlobalState.js ***!
  \******************************/
/*! exports provided: DataContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataContext\", function() { return DataContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetchData */ \"./utils/fetchData.js\");\n/* harmony import */ var _Reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reducer */ \"./store/Reducer.js\");\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/store/GlobalState.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\n\nfunction DataProvider({\n  children\n}) {\n  const initialState = {\n    notify: {},\n    auth: {},\n    cart: []\n  };\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(_Reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], initialState);\n  const {\n    cart\n  } = state;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchUser = async () => {\n      const data = await Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_2__[\"getData\"])('auth/accessToken');\n      dispatch({\n        type: 'AUTH',\n        payload: _objectSpread({}, data)\n      });\n    };\n\n    fetchUser();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const MyCart = JSON.parse(localStorage.getItem('MyCart'));\n    if (MyCart) return dispatch({\n      type: \"CART\",\n      payload: MyCart\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    localStorage.setItem('MyCart', JSON.stringify(cart));\n  }, [cart]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DataContext.Provider, {\n    value: {\n      state,\n      dispatch\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9HbG9iYWxTdGF0ZS5qcz9hODZmIl0sIm5hbWVzIjpbIkRhdGFDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkRhdGFQcm92aWRlciIsImNoaWxkcmVuIiwiaW5pdGlhbFN0YXRlIiwibm90aWZ5IiwiYXV0aCIsImNhcnQiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInJlZHVjZXJzIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VyIiwiZGF0YSIsImdldERhdGEiLCJ0eXBlIiwicGF5bG9hZCIsIk15Q2FydCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdPLE1BQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDOztBQUVQLFNBQVNDLFlBQVQsQ0FBc0I7QUFBRUM7QUFBRixDQUF0QixFQUFvQztBQUNoQyxRQUFNQyxZQUFZLEdBQUc7QUFBRUMsVUFBTSxFQUFFLEVBQVY7QUFBY0MsUUFBSSxFQUFFLEVBQXBCO0FBQXdCQyxRQUFJLEVBQUU7QUFBOUIsR0FBckI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHdEQUFVLENBQUNDLGdEQUFELEVBQVdQLFlBQVgsQ0FBcEM7QUFDQSxRQUFNO0FBQUVHO0FBQUYsTUFBV0MsS0FBakI7QUFDQUkseURBQVMsQ0FBQyxNQUFNO0FBQ1osVUFBTUMsU0FBUyxHQUFHLFlBQVk7QUFDMUIsWUFBTUMsSUFBSSxHQUFHLE1BQU1DLGdFQUFPLENBQUMsa0JBQUQsQ0FBMUI7QUFDQU4sY0FBUSxDQUFDO0FBQUVPLFlBQUksRUFBRSxNQUFSO0FBQWdCQyxlQUFPLG9CQUFPSCxJQUFQO0FBQXZCLE9BQUQsQ0FBUjtBQUNILEtBSEQ7O0FBS0FELGFBQVM7QUFDWixHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0FELHlEQUFTLENBQUMsTUFBTTtBQUNaLFVBQU1NLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixDQUFYLENBQWY7QUFDQSxRQUFJSixNQUFKLEVBQ0ksT0FBT1QsUUFBUSxDQUFDO0FBQUVPLFVBQUksRUFBRSxNQUFSO0FBQWdCQyxhQUFPLEVBQUVDO0FBQXpCLEtBQUQsQ0FBZjtBQUNQLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQU4seURBQVMsQ0FBQyxNQUFNO0FBQ1pTLGdCQUFZLENBQUNFLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0JKLElBQUksQ0FBQ0ssU0FBTCxDQUFlakIsSUFBZixDQUEvQjtBQUNILEdBRlEsRUFFTixDQUFDQSxJQUFELENBRk0sQ0FBVDtBQUlBLHNCQUNJLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFQyxXQUFGO0FBQVNDO0FBQVQsS0FBN0I7QUFBQSxjQUNLTjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztBQUVjRCwyRUFBZiIsImZpbGUiOiIuL3N0b3JlL0dsb2JhbFN0YXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi91dGlscy9mZXRjaERhdGEnO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vUmVkdWNlcic7XG5cblxuZXhwb3J0IGNvbnN0IERhdGFDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmZ1bmN0aW9uIERhdGFQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7IG5vdGlmeToge30sIGF1dGg6IHt9LCBjYXJ0OiBbXSB9XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUpXG4gICAgY29uc3QgeyBjYXJ0IH0gPSBzdGF0ZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKCdhdXRoL2FjY2Vzc1Rva2VuJylcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FVVEgnLCBwYXlsb2FkOiB7IC4uLmRhdGEgfSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hVc2VyKClcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IE15Q2FydCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ015Q2FydCcpKVxuICAgICAgICBpZiAoTXlDYXJ0KVxuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogXCJDQVJUXCIsIHBheWxvYWQ6IE15Q2FydCB9KVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ015Q2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnQpKVxuICAgIH0sIFtjYXJ0XSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/GlobalState.js\n");

/***/ }),

/***/ "./store/Reducer.js":
/*!**************************!*\
  !*** ./store/Reducer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ \"./store/Actions.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction reducers(state, action) {\n  switch (action.type) {\n    case _Actions__WEBPACK_IMPORTED_MODULE_0__[\"Actions\"].Notify:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        notify: action.payload\n      });\n\n    case _Actions__WEBPACK_IMPORTED_MODULE_0__[\"Actions\"].Auth:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        auth: action.payload\n      });\n\n    case _Actions__WEBPACK_IMPORTED_MODULE_0__[\"Actions\"].Cart:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        cart: action.payload\n      });\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducers);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9SZWR1Y2VyLmpzP2NkZDUiXSwibmFtZXMiOlsicmVkdWNlcnMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJBY3Rpb25zIiwiTm90aWZ5Iiwibm90aWZ5IiwicGF5bG9hZCIsIkF1dGgiLCJhdXRoIiwiQ2FydCIsImNhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUJDLE1BQXpCLEVBQWlDO0FBQzdCLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUtDLGdEQUFPLENBQUNDLE1BQWI7QUFDSSw2Q0FDT0osS0FEUDtBQUVJSyxjQUFNLEVBQUVKLE1BQU0sQ0FBQ0s7QUFGbkI7O0FBSUosU0FBS0gsZ0RBQU8sQ0FBQ0ksSUFBYjtBQUNJLDZDQUNPUCxLQURQO0FBRUlRLFlBQUksRUFBRVAsTUFBTSxDQUFDSztBQUZqQjs7QUFJSixTQUFLSCxnREFBTyxDQUFDTSxJQUFiO0FBQ0ksNkNBQ09ULEtBRFA7QUFFSVUsWUFBSSxFQUFFVCxNQUFNLENBQUNLO0FBRmpCOztBQUtKO0FBQ0ksYUFBT04sS0FBUDtBQWxCUjtBQW9CSDs7QUFFY0QsdUVBQWYiLCJmaWxlIjoiLi9zdG9yZS9SZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJy4vQWN0aW9ucydcblxuZnVuY3Rpb24gcmVkdWNlcnMoc3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBY3Rpb25zLk5vdGlmeTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbm90aWZ5OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIEFjdGlvbnMuQXV0aDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYXV0aDogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBBY3Rpb25zLkNhcnQ6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGNhcnQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/Reducer.js\n");

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
/*! exports provided: getData, postData, patchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return getData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postData\", function() { return postData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"patchData\", function() { return patchData; });\nconst baseUrl = \"http://localhost:3000\";\nconst getData = async (url, token) => {\n  const res = await fetch(`${baseUrl}/api/${url}`, {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json',\n      'Authorization': token\n    }\n  });\n  const data = await res.json();\n  return data;\n};\nconst postData = async (url, post, token) => {\n  const res = await fetch(`${baseUrl}/api/${url}`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'Authorization': token\n    },\n    body: JSON.stringify(post)\n  });\n  const data = await res.json();\n  return data;\n};\nconst patchData = async (url, post, token) => {\n  const res = await fetch(`${baseUrl}/api/${url}`, {\n    method: 'PATCH',\n    headers: {\n      'Content-Type': 'application/json',\n      'Authorization': token\n    },\n    body: JSON.stringify(post)\n  });\n  const data = await res.json();\n  return data;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9mZXRjaERhdGEuanM/MTA1NiJdLCJuYW1lcyI6WyJiYXNlVXJsIiwicHJvY2VzcyIsImdldERhdGEiLCJ1cmwiLCJ0b2tlbiIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwicG9zdERhdGEiLCJwb3N0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXRjaERhdGEiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTUEsT0FBTyxHQUFHQyx1QkFBaEI7QUFFTyxNQUFNQyxPQUFPLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxLQUFaLEtBQXNCO0FBQ3pDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRU4sT0FBUSxRQUFPRyxHQUFJLEVBQXZCLEVBQTBCO0FBQzdDSSxVQUFNLEVBQUUsS0FEcUM7QUFFN0NDLFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHVCQUFpQko7QUFGWjtBQUZvQyxHQUExQixDQUF2QjtBQU9BLFFBQU1LLElBQUksR0FBRyxNQUFNSixHQUFHLENBQUNLLElBQUosRUFBbkI7QUFDQSxTQUFPRCxJQUFQO0FBQ0gsQ0FWTTtBQVlBLE1BQU1FLFFBQVEsR0FBRyxPQUFPUixHQUFQLEVBQVlTLElBQVosRUFBa0JSLEtBQWxCLEtBQTRCO0FBQ2hELFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRU4sT0FBUSxRQUFPRyxHQUFJLEVBQXZCLEVBQTBCO0FBQzdDSSxVQUFNLEVBQUUsTUFEcUM7QUFFN0NDLFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHVCQUFpQko7QUFGWixLQUZvQztBQU03Q1MsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBZjtBQU51QyxHQUExQixDQUF2QjtBQVFBLFFBQU1ILElBQUksR0FBRyxNQUFNSixHQUFHLENBQUNLLElBQUosRUFBbkI7QUFDQSxTQUFPRCxJQUFQO0FBQ0gsQ0FYTTtBQWFBLE1BQU1PLFNBQVMsR0FBRyxPQUFPYixHQUFQLEVBQVlTLElBQVosRUFBa0JSLEtBQWxCLEtBQTRCO0FBQ2pELFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRU4sT0FBUSxRQUFPRyxHQUFJLEVBQXZCLEVBQTBCO0FBQzdDSSxVQUFNLEVBQUUsT0FEcUM7QUFFN0NDLFdBQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLHVCQUFpQko7QUFGWixLQUZvQztBQU03Q1MsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBZjtBQU51QyxHQUExQixDQUF2QjtBQVFBLFFBQU1ILElBQUksR0FBRyxNQUFNSixHQUFHLENBQUNLLElBQUosRUFBbkI7QUFDQSxTQUFPRCxJQUFQO0FBQ0gsQ0FYTSIsImZpbGUiOiIuL3V0aWxzL2ZldGNoRGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LkJBU0VfVVJMXG5cbmV4cG9ydCBjb25zdCBnZXREYXRhID0gYXN5bmMgKHVybCwgdG9rZW4pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBjb25zdCBwb3N0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBjb25zdCBwYXRjaERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS8ke3VybH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcbiAgICB9KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIGRhdGFcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/fetchData.js\n");

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