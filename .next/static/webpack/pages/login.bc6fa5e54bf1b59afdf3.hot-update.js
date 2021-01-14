webpackHotUpdate_N_E("pages/login",{

/***/ "./components/atoms/Form/Fields.js":
/*!*****************************************!*\
  !*** ./components/atoms/Form/Fields.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/components/atoms/Form/Fields.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction Fields(_ref) {\n  var type = _ref.type,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"type\"]);\n\n  switch (type) {\n    case \"text\":\n    case \"password\":\n    case \"email\":\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Input, _objectSpread({}, rest), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 20\n      }, this);\n\n    default:\n      break;\n  }\n}\n\n_c = Fields;\n\nvar Input = function Input(_ref2) {\n  var name = _ref2.name,\n      label = _ref2.label,\n      type = _ref2.type,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"name\", \"label\", \"type\"]);\n\n  console.log(type);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: \"w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n      htmlFor: name,\n      className: \"inline-block mb-1.5 text-lg capitalize text-gray-800\",\n      children: label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", _objectSpread({\n      type: type,\n      name: name,\n      id: name,\n      className: \"block border w-full px-3 py-2 rounded-sm focus:outline-none focus:ring-1 ring-blue-400\"\n    }, rest), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, _this);\n};\n\n_c2 = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fields);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Fields\");\n$RefreshReg$(_c2, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9Gb3JtL0ZpZWxkcy5qcz9hNTFhIl0sIm5hbWVzIjpbIkZpZWxkcyIsInR5cGUiLCJyZXN0IiwiSW5wdXQiLCJuYW1lIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxNQUFULE9BQW1DO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVJDLElBQVE7O0FBQy9CLFVBQVFELElBQVI7QUFDSSxTQUFLLE1BQUw7QUFDQSxTQUFLLFVBQUw7QUFDQSxTQUFLLE9BQUw7QUFDSSwwQkFBTyxxRUFBQyxLQUFELG9CQUFXQyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDs7QUFDSjtBQUNJO0FBTlI7QUFRSDs7S0FUUUYsTTs7QUFXVCxJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxRQUFvQztBQUFBLE1BQWpDQyxJQUFpQyxTQUFqQ0EsSUFBaUM7QUFBQSxNQUEzQkMsS0FBMkIsU0FBM0JBLEtBQTJCO0FBQUEsTUFBcEJKLElBQW9CLFNBQXBCQSxJQUFvQjtBQUFBLE1BQVhDLElBQVc7O0FBQzlDSSxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBWjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSw0QkFDSTtBQUFPLGFBQU8sRUFBRUcsSUFBaEI7QUFBc0IsZUFBUyxFQUFDLHNEQUFoQztBQUFBLGdCQUF5RkM7QUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBTyxVQUFJLEVBQUVKLElBQWI7QUFBbUIsVUFBSSxFQUFFRyxJQUF6QjtBQUErQixRQUFFLEVBQUVBLElBQW5DO0FBQXlDLGVBQVMsRUFBQztBQUFuRCxPQUFnSkYsSUFBaEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBTUgsQ0FSRDs7TUFBTUMsSztBQVdTSCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXRvbXMvRm9ybS9GaWVsZHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBGaWVsZHMoeyB0eXBlLCAuLi5yZXN0IH0pIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcInRleHRcIjpcbiAgICAgICAgY2FzZSBcInBhc3N3b3JkXCI6XG4gICAgICAgIGNhc2UgXCJlbWFpbFwiOlxuICAgICAgICAgICAgcmV0dXJuIDxJbnB1dCB7Li4ucmVzdH0gLz5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuY29uc3QgSW5wdXQgPSAoeyBuYW1lLCBsYWJlbCwgdHlwZSwgLi4ucmVzdCB9KSA9PiB7XG4gICAgY29uc29sZS5sb2codHlwZSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtuYW1lfSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbWItMS41IHRleHQtbGcgY2FwaXRhbGl6ZSB0ZXh0LWdyYXktODAwXCIgPntsYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9e3R5cGV9IG5hbWU9e25hbWV9IGlkPXtuYW1lfSBjbGFzc05hbWU9XCJibG9jayBib3JkZXIgdy1mdWxsIHB4LTMgcHktMiByb3VuZGVkLXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTEgcmluZy1ibHVlLTQwMFwiIHsuLi5yZXN0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/atoms/Form/Fields.js\n");

/***/ })

})