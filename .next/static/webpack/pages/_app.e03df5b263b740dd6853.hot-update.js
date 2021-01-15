webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/GlobalState.js":
/*!******************************!*\
  !*** ./store/GlobalState.js ***!
  \******************************/
/*! exports provided: DataContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataContext\", function() { return DataContext; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/fetchData */ \"./utils/fetchData.js\");\n/* harmony import */ var _Reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Reducer */ \"./store/Reducer.js\");\n\n\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/store/GlobalState.js\",\n    _s = $RefreshSig$();\n\n\n\n\nvar DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"])();\n\nfunction DataProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var initialState = {\n    notify: {},\n    auth: {}\n  };\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useReducer\"])(_Reducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], initialState),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var fetchUser = /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var data;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_4__[\"getData\"])('auth/accessToken');\n\n              case 2:\n                data = _context.sent;\n                console.log(data);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchUser() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchUser();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(DataContext.Provider, {\n    value: {\n      state: state,\n      dispatch: dispatch\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, this);\n}\n\n_s(DataProvider, \"bgCdjuTOmPdSBRwTap80EFd9Y3U=\");\n\n_c = DataProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvR2xvYmFsU3RhdGUuanM/YTg2ZiJdLCJuYW1lcyI6WyJEYXRhQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJEYXRhUHJvdmlkZXIiLCJjaGlsZHJlbiIsImluaXRpYWxTdGF0ZSIsIm5vdGlmeSIsImF1dGgiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlcnMiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VyIiwiZ2V0RGF0YSIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQzs7QUFFUCxTQUFTQyxZQUFULE9BQW9DO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ2hDLE1BQU1DLFlBQVksR0FBRztBQUFFQyxVQUFNLEVBQUUsRUFBVjtBQUFjQyxRQUFJLEVBQUU7QUFBcEIsR0FBckI7O0FBRGdDLG9CQUVOQyx3REFBVSxDQUFDQyxnREFBRCxFQUFXSixZQUFYLENBRko7QUFBQSxNQUV6QkssS0FGeUI7QUFBQSxNQUVsQkMsUUFGa0I7O0FBSWhDQyx5REFBUyxDQUFDLFlBQU07QUFFWixRQUFNQyxTQUFTO0FBQUEsbU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDS0MsZ0VBQU8sQ0FBQyxrQkFBRCxDQURaOztBQUFBO0FBQ1JDLG9CQURRO0FBRWRDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjs7QUFGYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFURixTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBSUFBLGFBQVM7QUFDWixHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0Esc0JBQ0kscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVILFdBQUssRUFBTEEsS0FBRjtBQUFTQyxjQUFRLEVBQVJBO0FBQVQsS0FBN0I7QUFBQSxjQUNLUDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztHQW5CUUQsWTs7S0FBQUEsWTtBQXFCTUEsMkVBQWYiLCJmaWxlIjoiLi9zdG9yZS9HbG9iYWxTdGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vdXRpbHMvZmV0Y2hEYXRhJztcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL1JlZHVjZXInO1xuXG5cbmV4cG9ydCBjb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5mdW5jdGlvbiBEYXRhUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0geyBub3RpZnk6IHt9LCBhdXRoOiB7fSB9XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKCdhdXRoL2FjY2Vzc1Rva2VuJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGZldGNoVXNlcigpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YVByb3ZpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/GlobalState.js\n");

/***/ })

})