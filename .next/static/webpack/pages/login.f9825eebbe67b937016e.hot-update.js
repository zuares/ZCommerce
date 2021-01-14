webpackHotUpdate_N_E("pages/login",{

/***/ "./components/atoms/Form/Input.js":
/*!****************************************!*\
  !*** ./components/atoms/Form/Input.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/components/atoms/Form/Input.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction Input(_ref) {\n  var as = _ref.as,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"as\"]);\n\n  switch (as) {\n    case \"text\":\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(InputText, _objectSpread({}, rest), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 20\n      }, this);\n\n    case \"password\":\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(InputPassword, _objectSpread({}, rest), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 20\n      }, this);\n\n    case \"email\":\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(InputEmail, _objectSpread({}, rest), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 20\n      }, this);\n\n    default:\n      break;\n  }\n}\n\n_c = Input;\n\nvar InputText = function InputText(_ref2) {\n  var name = _ref2.name,\n      label = _ref2.label,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"name\", \"label\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: \"w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n      htmlFor: name,\n      className: \"inline-block mb-2 text-base capitalize text-gray-400\",\n      children: label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", _objectSpread({\n      type: \"text\",\n      name: name,\n      id: name,\n      className: \"block border w-full px-3 py-2 rounded-sm\"\n    }, rest), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, _this);\n};\n\n_c2 = InputText;\n\nvar InputPassword = function InputPassword(_ref3) {\n  var name = _ref3.name,\n      label = _ref3.label,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref3, [\"name\", \"label\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: \"w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n      htmlFor: name,\n      className: \"inline-block mb-2 text-base capitalize text-gray-400\",\n      children: label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", _objectSpread({\n      type: \"password\",\n      name: name,\n      id: name,\n      className: \"block border w-full px-3 py-2 rounded-sm\"\n    }, rest), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 9\n  }, _this);\n};\n\n_c3 = InputPassword;\n\nvar InputEmail = function InputEmail(_ref4) {\n  var name = _ref4.name,\n      label = _ref4.label,\n      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref4, [\"name\", \"label\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: \"w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"label\", {\n      htmlFor: name,\n      className: \"inline-block mb-2 text-base capitalize text-gray-400\",\n      children: label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", _objectSpread({\n      type: \"email\",\n      name: name,\n      id: name,\n      className: \"block border w-full px-3 py-2 rounded-sm\"\n    }, rest), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, _this);\n};\n\n_c4 = InputEmail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Input\");\n$RefreshReg$(_c2, \"InputText\");\n$RefreshReg$(_c3, \"InputPassword\");\n$RefreshReg$(_c4, \"InputEmail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9Gb3JtL0lucHV0LmpzP2QwYTIiXSwibmFtZXMiOlsiSW5wdXQiLCJhcyIsInJlc3QiLCJJbnB1dFRleHQiLCJuYW1lIiwibGFiZWwiLCJJbnB1dFBhc3N3b3JkIiwiSW5wdXRFbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsS0FBVCxPQUFnQztBQUFBLE1BQWZDLEVBQWUsUUFBZkEsRUFBZTtBQUFBLE1BQVJDLElBQVE7O0FBQzVCLFVBQVFELEVBQVI7QUFDSSxTQUFLLE1BQUw7QUFDSSwwQkFBTyxxRUFBQyxTQUFELG9CQUFlQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDs7QUFDSixTQUFLLFVBQUw7QUFDSSwwQkFBTyxxRUFBQyxhQUFELG9CQUFtQkEsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQOztBQUNKLFNBQUssT0FBTDtBQUNJLDBCQUFPLHFFQUFDLFVBQUQsb0JBQWdCQSxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7O0FBQ0o7QUFDSTtBQVJSO0FBVUg7O0tBWFFGLEs7O0FBYVQsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksUUFBOEI7QUFBQSxNQUEzQkMsSUFBMkIsU0FBM0JBLElBQTJCO0FBQUEsTUFBckJDLEtBQXFCLFNBQXJCQSxLQUFxQjtBQUFBLE1BQVhILElBQVc7O0FBQzVDLHNCQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSw0QkFDSTtBQUFPLGFBQU8sRUFBRUUsSUFBaEI7QUFBc0IsZUFBUyxFQUFDLHNEQUFoQztBQUFBLGdCQUF5RkM7QUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFJLEVBQUVELElBQXpCO0FBQStCLFFBQUUsRUFBRUEsSUFBbkM7QUFBeUMsZUFBUyxFQUFDO0FBQW5ELE9BQWtHRixJQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQVBEOztNQUFNQyxTOztBQVNOLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsUUFBOEI7QUFBQSxNQUEzQkYsSUFBMkIsU0FBM0JBLElBQTJCO0FBQUEsTUFBckJDLEtBQXFCLFNBQXJCQSxLQUFxQjtBQUFBLE1BQVhILElBQVc7O0FBQ2hELHNCQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSw0QkFDSTtBQUFPLGFBQU8sRUFBRUUsSUFBaEI7QUFBc0IsZUFBUyxFQUFDLHNEQUFoQztBQUFBLGdCQUF5RkM7QUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBTyxVQUFJLEVBQUMsVUFBWjtBQUF1QixVQUFJLEVBQUVELElBQTdCO0FBQW1DLFFBQUUsRUFBRUEsSUFBdkM7QUFBNkMsZUFBUyxFQUFDO0FBQXZELE9BQXNHRixJQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQVBEOztNQUFNSSxhOztBQVNOLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFFBQThCO0FBQUEsTUFBM0JILElBQTJCLFNBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxLQUFxQixTQUFyQkEsS0FBcUI7QUFBQSxNQUFYSCxJQUFXOztBQUM3QyxzQkFDSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUEsNEJBQ0k7QUFBTyxhQUFPLEVBQUVFLElBQWhCO0FBQXNCLGVBQVMsRUFBQyxzREFBaEM7QUFBQSxnQkFBeUZDO0FBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQU8sVUFBSSxFQUFDLE9BQVo7QUFBb0IsVUFBSSxFQUFFRCxJQUExQjtBQUFnQyxRQUFFLEVBQUVBLElBQXBDO0FBQTBDLGVBQVMsRUFBQztBQUFwRCxPQUFtR0YsSUFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBTUgsQ0FQRDs7TUFBTUssVTtBQVdTUCxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXRvbXMvRm9ybS9JbnB1dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIElucHV0KHsgYXMsIC4uLnJlc3QgfSkge1xuICAgIHN3aXRjaCAoYXMpIHtcbiAgICAgICAgY2FzZSBcInRleHRcIjpcbiAgICAgICAgICAgIHJldHVybiA8SW5wdXRUZXh0IHsuLi5yZXN0fSAvPlxuICAgICAgICBjYXNlIFwicGFzc3dvcmRcIjpcbiAgICAgICAgICAgIHJldHVybiA8SW5wdXRQYXNzd29yZCB7Li4ucmVzdH0gLz5cbiAgICAgICAgY2FzZSBcImVtYWlsXCI6XG4gICAgICAgICAgICByZXR1cm4gPElucHV0RW1haWwgey4uLnJlc3R9IC8+XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmNvbnN0IElucHV0VGV4dCA9ICh7IG5hbWUsIGxhYmVsLCAuLi5yZXN0IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtYi0yIHRleHQtYmFzZSBjYXBpdGFsaXplIHRleHQtZ3JheS00MDBcIiA+e2xhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXtuYW1lfSBpZD17bmFtZX0gY2xhc3NOYW1lPVwiYmxvY2sgYm9yZGVyIHctZnVsbCBweC0zIHB5LTIgcm91bmRlZC1zbVwiIHsuLi5yZXN0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBJbnB1dFBhc3N3b3JkID0gKHsgbmFtZSwgbGFiZWwsIC4uLnJlc3QgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17bmFtZX0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1iLTIgdGV4dC1iYXNlIGNhcGl0YWxpemUgdGV4dC1ncmF5LTQwMFwiID57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPXtuYW1lfSBpZD17bmFtZX0gY2xhc3NOYW1lPVwiYmxvY2sgYm9yZGVyIHctZnVsbCBweC0zIHB5LTIgcm91bmRlZC1zbVwiIHsuLi5yZXN0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBJbnB1dEVtYWlsID0gKHsgbmFtZSwgbGFiZWwsIC4uLnJlc3QgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17bmFtZX0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1iLTIgdGV4dC1iYXNlIGNhcGl0YWxpemUgdGV4dC1ncmF5LTQwMFwiID57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPXtuYW1lfSBpZD17bmFtZX0gY2xhc3NOYW1lPVwiYmxvY2sgYm9yZGVyIHctZnVsbCBweC0zIHB5LTIgcm91bmRlZC1zbVwiIHsuLi5yZXN0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/atoms/Form/Input.js\n");

/***/ })

})