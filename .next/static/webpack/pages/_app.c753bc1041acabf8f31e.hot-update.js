webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/GlobalState.js":
/*!******************************!*\
  !*** ./store/GlobalState.js ***!
  \******************************/
/*! exports provided: DataContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataContext\", function() { return DataContext; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/fetchData */ \"./utils/fetchData.js\");\n/* harmony import */ var _Reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Reducer */ \"./store/Reducer.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/store/GlobalState.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__[\"createContext\"])();\n\nfunction DataProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var initialState = {\n    notify: {},\n    auth: {},\n    cart: [],\n    order: []\n  };\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useReducer\"])(_Reducer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], initialState),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var cart = state.cart,\n      auth = state.auth;\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var fetchUser = /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var data;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_5__[\"getData\"])('auth/accessToken');\n\n              case 2:\n                data = _context.sent;\n                dispatch({\n                  type: 'AUTH',\n                  payload: _objectSpread({}, data)\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchUser() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchUser();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var MyCart = JSON.parse(localStorage.getItem('MyCart'));\n    if (MyCart) return dispatch({\n      type: \"CART\",\n      payload: MyCart\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    localStorage.setItem('MyCart', JSON.stringify(cart));\n  }, [cart]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (auth.access_token) {\n      Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_5__[\"getData\"])('order', auth.access_token).then(function (res) {\n        if (res.err) return dispatch({\n          type: \"NOTIFY\",\n          payload: {\n            msg: {\n              err: res.err\n            }\n          }\n        });\n        console.log(res.orders);\n        dispatch({\n          type: \"ORDER\",\n          payload: res.orders\n        });\n      });\n    }\n  }, [auth.access_token]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(DataContext.Provider, {\n    value: {\n      state: state,\n      dispatch: dispatch\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 9\n  }, this);\n}\n\n_s(DataProvider, \"4iRlf1j8yd8EOnLzdn/Ri/p3tw0=\");\n\n_c = DataProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"DataProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvR2xvYmFsU3RhdGUuanM/YTg2ZiJdLCJuYW1lcyI6WyJEYXRhQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJEYXRhUHJvdmlkZXIiLCJjaGlsZHJlbiIsImluaXRpYWxTdGF0ZSIsIm5vdGlmeSIsImF1dGgiLCJjYXJ0Iiwib3JkZXIiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlcnMiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VyIiwiZ2V0RGF0YSIsImRhdGEiLCJ0eXBlIiwicGF5bG9hZCIsIk15Q2FydCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWNjZXNzX3Rva2VuIiwidGhlbiIsInJlcyIsImVyciIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJvcmRlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDOztBQUVQLFNBQVNDLFlBQVQsT0FBb0M7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDaEMsTUFBTUMsWUFBWSxHQUFHO0FBQUVDLFVBQU0sRUFBRSxFQUFWO0FBQWNDLFFBQUksRUFBRSxFQUFwQjtBQUF3QkMsUUFBSSxFQUFFLEVBQTlCO0FBQWtDQyxTQUFLLEVBQUU7QUFBekMsR0FBckI7O0FBRGdDLG9CQUVOQyx3REFBVSxDQUFDQyxnREFBRCxFQUFXTixZQUFYLENBRko7QUFBQSxNQUV6Qk8sS0FGeUI7QUFBQSxNQUVsQkMsUUFGa0I7O0FBQUEsTUFHeEJMLElBSHdCLEdBR1RJLEtBSFMsQ0FHeEJKLElBSHdCO0FBQUEsTUFHbEJELElBSGtCLEdBR1RLLEtBSFMsQ0FHbEJMLElBSGtCO0FBSWhDTyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxTQUFTO0FBQUEsbU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDS0MsZ0VBQU8sQ0FBQyxrQkFBRCxDQURaOztBQUFBO0FBQ1JDLG9CQURRO0FBRWRKLHdCQUFRLENBQUM7QUFBRUssc0JBQUksRUFBRSxNQUFSO0FBQWdCQyx5QkFBTyxvQkFBT0YsSUFBUDtBQUF2QixpQkFBRCxDQUFSOztBQUZjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRGLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFLQUEsYUFBUztBQUNaLEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQUQseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTU0sTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLENBQVgsQ0FBZjtBQUNBLFFBQUlKLE1BQUosRUFDSSxPQUFPUCxRQUFRLENBQUM7QUFBRUssVUFBSSxFQUFFLE1BQVI7QUFBZ0JDLGFBQU8sRUFBRUM7QUFBekIsS0FBRCxDQUFmO0FBQ1AsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BTix5REFBUyxDQUFDLFlBQU07QUFDWlMsZ0JBQVksQ0FBQ0UsT0FBYixDQUFxQixRQUFyQixFQUErQkosSUFBSSxDQUFDSyxTQUFMLENBQWVsQixJQUFmLENBQS9CO0FBQ0gsR0FGUSxFQUVOLENBQUNBLElBQUQsQ0FGTSxDQUFUO0FBSUFNLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlQLElBQUksQ0FBQ29CLFlBQVQsRUFBdUI7QUFDbkJYLHNFQUFPLENBQUMsT0FBRCxFQUFVVCxJQUFJLENBQUNvQixZQUFmLENBQVAsQ0FDS0MsSUFETCxDQUNVLFVBQUFDLEdBQUcsRUFBSTtBQUNULFlBQUlBLEdBQUcsQ0FBQ0MsR0FBUixFQUFhLE9BQU9qQixRQUFRLENBQUM7QUFBRUssY0FBSSxFQUFFLFFBQVI7QUFBa0JDLGlCQUFPLEVBQUU7QUFBRVksZUFBRyxFQUFFO0FBQUVELGlCQUFHLEVBQUVELEdBQUcsQ0FBQ0M7QUFBWDtBQUFQO0FBQTNCLFNBQUQsQ0FBZjtBQUNiRSxlQUFPLENBQUNDLEdBQVIsQ0FBWUosR0FBRyxDQUFDSyxNQUFoQjtBQUNBckIsZ0JBQVEsQ0FBQztBQUFFSyxjQUFJLEVBQUUsT0FBUjtBQUFpQkMsaUJBQU8sRUFBRVUsR0FBRyxDQUFDSztBQUE5QixTQUFELENBQVI7QUFDSCxPQUxMO0FBTUg7QUFDSixHQVRRLEVBU04sQ0FBQzNCLElBQUksQ0FBQ29CLFlBQU4sQ0FUTSxDQUFUO0FBV0Esc0JBQ0kscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVmLFdBQUssRUFBTEEsS0FBRjtBQUFTQyxjQUFRLEVBQVJBO0FBQVQsS0FBN0I7QUFBQSxjQUNLVDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztHQXhDUUQsWTs7S0FBQUEsWTtBQTBDTUEsMkVBQWYiLCJmaWxlIjoiLi9zdG9yZS9HbG9iYWxTdGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vdXRpbHMvZmV0Y2hEYXRhJztcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL1JlZHVjZXInO1xuXG5cbmV4cG9ydCBjb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5mdW5jdGlvbiBEYXRhUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0geyBub3RpZnk6IHt9LCBhdXRoOiB7fSwgY2FydDogW10sIG9yZGVyOiBbXSB9XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUpXG4gICAgY29uc3QgeyBjYXJ0LCBhdXRoIH0gPSBzdGF0ZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKCdhdXRoL2FjY2Vzc1Rva2VuJylcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FVVEgnLCBwYXlsb2FkOiB7IC4uLmRhdGEgfSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hVc2VyKClcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IE15Q2FydCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ015Q2FydCcpKVxuICAgICAgICBpZiAoTXlDYXJ0KVxuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogXCJDQVJUXCIsIHBheWxvYWQ6IE15Q2FydCB9KVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ015Q2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnQpKVxuICAgIH0sIFtjYXJ0XSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChhdXRoLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgZ2V0RGF0YSgnb3JkZXInLCBhdXRoLmFjY2Vzc190b2tlbilcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogXCJOT1RJRllcIiwgcGF5bG9hZDogeyBtc2c6IHsgZXJyOiByZXMuZXJyIH0gfSB9KVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMub3JkZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIk9SREVSXCIsIHBheWxvYWQ6IHJlcy5vcmRlcnMgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSwgW2F1dGguYWNjZXNzX3Rva2VuXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUHJvdmlkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/GlobalState.js\n");

/***/ })

})