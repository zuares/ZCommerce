webpackHotUpdate_N_E("pages/login",{

/***/ "./components/layouts/Auth.js":
/*!************************************!*\
  !*** ./components/layouts/Auth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/GlobalState */ \"./store/GlobalState.js\");\n/* harmony import */ var _molecules_Notify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../molecules/Notify */ \"./components/molecules/Notify.js\");\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/components/layouts/Auth.js\",\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\nfunction Auth(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var children = _ref.children;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__[\"DataContext\"]),\n      _useContext$state = _useContext.state,\n      notify = _useContext$state.notify,\n      auth = _useContext$state.auth;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(_s(function () {\n    _s();\n\n    if (auth.access_token) {\n      Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])().push('/');\n    }\n  }, \"CeygcqajjFExIxFEzW4x/gfWEGQ=\", false, function () {\n    return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n  }), []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \" h-screen w-screen flex bg-white relative\",\n    children: [notify.msg ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_molecules_Notify__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      msg: notify.msg\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 27\n    }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-0 md:w-3/6 lg:w-4/6 bg-blue-200\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full md:w-3/6 lg:w-2/6 flex justify-center items-center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full p-8 xl:p-16 transform -translate-y-16 h-96\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, this);\n}\n\n_s2(Auth, \"1zGua/aUWkE1KlnBE7QAk8QLbuc=\");\n\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL0F1dGguanM/Njc2ZSJdLCJuYW1lcyI6WyJBdXRoIiwiY2hpbGRyZW4iLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsIm5vdGlmeSIsImF1dGgiLCJ1c2VFZmZlY3QiLCJhY2Nlc3NfdG9rZW4iLCJ1c2VSb3V0ZXIiLCJwdXNoIiwibXNnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsT0FBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsb0JBQ1lDLHdEQUFVLENBQUNDLDhEQUFELENBRHRCO0FBQUEsc0NBQ2hCQyxLQURnQjtBQUFBLE1BQ1BDLE1BRE8scUJBQ1BBLE1BRE87QUFBQSxNQUNDQyxJQURELHFCQUNDQSxJQUREOztBQUV4QkMseURBQVMsSUFBQyxZQUFNO0FBQUE7O0FBQ1osUUFBSUQsSUFBSSxDQUFDRSxZQUFULEVBQXVCO0FBQ25CQyxtRUFBUyxHQUFHQyxJQUFaLENBQWlCLEdBQWpCO0FBQ0g7QUFDSixHQUpRO0FBQUEsWUFFREQscURBRkM7QUFBQSxNQUlOLEVBSk0sQ0FBVDtBQU1BLHNCQUNJO0FBQUssYUFBUyxFQUFDLDJDQUFmO0FBQUEsZUFDS0osTUFBTSxDQUFDTSxHQUFQLGdCQUFhLHFFQUFDLHlEQUFEO0FBQVEsU0FBRyxFQUFFTixNQUFNLENBQUNNO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBYixHQUEyQyxJQURoRCxlQUVJO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBSUk7QUFBSyxlQUFTLEVBQUMsMkRBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsbURBQWY7QUFBQSwrQkFDSTtBQUFBLG9CQUNLVjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBY0g7O0lBdEJRRCxJOztLQUFBQSxJO0FBd0JNQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0cy9BdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvR2xvYmFsU3RhdGUnO1xuaW1wb3J0IE5vdGlmeSBmcm9tICcuLi9tb2xlY3VsZXMvTm90aWZ5JztcblxuZnVuY3Rpb24gQXV0aCh7IGNoaWxkcmVuIH0pIHtcbiAgICBjb25zdCB7IHN0YXRlOiB7IG5vdGlmeSwgYXV0aCB9IH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChhdXRoLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgdXNlUm91dGVyKCkucHVzaCgnLycpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtc2NyZWVuIHctc2NyZWVuIGZsZXggYmctd2hpdGUgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIHtub3RpZnkubXNnID8gPE5vdGlmeSBtc2c9e25vdGlmeS5tc2d9IC8+IDogbnVsbH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0wIG1kOnctMy82IGxnOnctNC82IGJnLWJsdWUtMjAwXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMy82IGxnOnctMi82IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtOCB4bDpwLTE2IHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMTYgaC05NlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/Auth.js\n");

/***/ })

})