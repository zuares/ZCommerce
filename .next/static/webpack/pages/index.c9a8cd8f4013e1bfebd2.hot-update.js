webpackHotUpdate_N_E("pages/index",{

/***/ "./store/Actions.js":
/*!**************************!*\
  !*** ./store/Actions.js ***!
  \**************************/
/*! exports provided: Actions, addToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Actions\", function() { return Actions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCart\", function() { return addToCart; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar Actions = {\n  Notify: \"NOTIFY\",\n  Auth: \"AUTH\",\n  Cart: \"CART\"\n};\nvar addToCart = function addToCart(product, cart) {\n  if (product.inStock == 0) return {\n    type: \"NOTIFY\",\n    payload: {\n      msg: {\n        err: \"Please add all field'\"\n      }\n    }\n  };\n  var inCart = cart.every(function (item) {\n    return item._id !== product._id;\n  });\n  if (!inCart) return {\n    type: \"Cart\",\n    payload: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart), [_objectSpread(_objectSpread({}, product), {}, {\n      quatity: 1\n    })])\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQWN0aW9ucy5qcz81YWQ1Il0sIm5hbWVzIjpbIkFjdGlvbnMiLCJOb3RpZnkiLCJBdXRoIiwiQ2FydCIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJjYXJ0IiwiaW5TdG9jayIsInR5cGUiLCJwYXlsb2FkIiwibXNnIiwiZXJyIiwiaW5DYXJ0IiwiZXZlcnkiLCJpdGVtIiwiX2lkIiwicXVhdGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsT0FBTyxHQUFHO0FBQ25CQyxRQUFNLEVBQUUsUUFEVztBQUVuQkMsTUFBSSxFQUFFLE1BRmE7QUFHbkJDLE1BQUksRUFBRTtBQUhhLENBQWhCO0FBTUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsT0FBRCxFQUFVQyxJQUFWLEVBQW1CO0FBQ3hDLE1BQUlELE9BQU8sQ0FBQ0UsT0FBUixJQUFtQixDQUF2QixFQUNJLE9BQVE7QUFBRUMsUUFBSSxFQUFFLFFBQVI7QUFBa0JDLFdBQU8sRUFBRTtBQUFFQyxTQUFHLEVBQUU7QUFBRUMsV0FBRztBQUFMO0FBQVA7QUFBM0IsR0FBUjtBQUVKLE1BQU1DLE1BQU0sR0FBR04sSUFBSSxDQUFDTyxLQUFMLENBQVcsVUFBQUMsSUFBSTtBQUFBLFdBQUlBLElBQUksQ0FBQ0MsR0FBTCxLQUFhVixPQUFPLENBQUNVLEdBQXpCO0FBQUEsR0FBZixDQUFmO0FBQ0EsTUFBSSxDQUFDSCxNQUFMLEVBQ0ksT0FBTztBQUFFSixRQUFJLEVBQUUsTUFBUjtBQUFnQkMsV0FBTyx5R0FBTUgsSUFBTixvQ0FBaUJELE9BQWpCO0FBQTBCVyxhQUFPLEVBQUU7QUFBbkM7QUFBdkIsR0FBUDtBQUNQLENBUE0iLCJmaWxlIjoiLi9zdG9yZS9BY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgQWN0aW9ucyA9IHtcbiAgICBOb3RpZnk6IFwiTk9USUZZXCIsXG4gICAgQXV0aDogXCJBVVRIXCIsXG4gICAgQ2FydDogXCJDQVJUXCIsXG59XG5cbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdCwgY2FydCkgPT4ge1xuICAgIGlmIChwcm9kdWN0LmluU3RvY2sgPT0gMClcbiAgICAgICAgcmV0dXJuICh7IHR5cGU6IFwiTk9USUZZXCIsIHBheWxvYWQ6IHsgbXNnOiB7IGVycjogYFBsZWFzZSBhZGQgYWxsIGZpZWxkJ2AgfSB9IH0pXG5cbiAgICBjb25zdCBpbkNhcnQgPSBjYXJ0LmV2ZXJ5KGl0ZW0gPT4gaXRlbS5faWQgIT09IHByb2R1Y3QuX2lkKVxuICAgIGlmICghaW5DYXJ0KVxuICAgICAgICByZXR1cm4geyB0eXBlOiBcIkNhcnRcIiwgcGF5bG9hZDogWy4uLmNhcnQsIHsgLi4ucHJvZHVjdCwgcXVhdGl0eTogMSB9XSB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/Actions.js\n");

/***/ })

})