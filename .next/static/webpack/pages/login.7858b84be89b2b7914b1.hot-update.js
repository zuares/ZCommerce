webpackHotUpdate_N_E("pages/login",{

/***/ "./components/layouts/Auth.js":
/*!************************************!*\
  !*** ./components/layouts/Auth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/GlobalState */ \"./store/GlobalState.js\");\n/* harmony import */ var _molecules_Notify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../molecules/Notify */ \"./components/molecules/Notify.js\");\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/components/layouts/Auth.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Auth(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__[\"DataContext\"]),\n      state = _useContext.state;\n\n  console.log(auth); // useEffect(() => {\n  //     if (auth.access_token) {\n  //         useRouter().push('/')\n  //     }\n  // }, [])\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \" h-screen w-screen flex bg-white relative\",\n    children: [notify.msg ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_molecules_Notify__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      msg: notify.msg\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 27\n    }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-0 md:w-3/6 lg:w-4/6 bg-blue-200\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full md:w-3/6 lg:w-2/6 flex justify-center items-center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full p-8 xl:p-16 transform -translate-y-16 h-96\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Auth, \"1KanyRZ80sTgEeQF1ogKen7i0wM=\");\n\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL0F1dGguanM/Njc2ZSJdLCJuYW1lcyI6WyJBdXRoIiwiY2hpbGRyZW4iLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJhdXRoIiwibm90aWZ5IiwibXNnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsb0JBQ05DLHdEQUFVLENBQUNDLDhEQUFELENBREo7QUFBQSxNQUNoQkMsS0FEZ0IsZUFDaEJBLEtBRGdCOztBQUV4QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVosRUFGd0IsQ0FHeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBQywyQ0FBZjtBQUFBLGVBQ0tDLE1BQU0sQ0FBQ0MsR0FBUCxnQkFBYSxxRUFBQyx5REFBRDtBQUFRLFNBQUcsRUFBRUQsTUFBTSxDQUFDQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQWIsR0FBMkMsSUFEaEQsZUFFSTtBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUlJO0FBQUssZUFBUyxFQUFDLDJEQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLG1EQUFmO0FBQUEsK0JBQ0k7QUFBQSxvQkFDS1I7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIOztHQXZCUUQsSTs7S0FBQUEsSTtBQXlCTUEsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvQXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcbmltcG9ydCBOb3RpZnkgZnJvbSAnLi4vbW9sZWN1bGVzL05vdGlmeSc7XG5cbmZ1bmN0aW9uIEF1dGgoeyBjaGlsZHJlbiB9KSB7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcbiAgICBjb25zb2xlLmxvZyhhdXRoKTtcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBpZiAoYXV0aC5hY2Nlc3NfdG9rZW4pIHtcbiAgICAvLyAgICAgICAgIHVzZVJvdXRlcigpLnB1c2goJy8nKVxuICAgIC8vICAgICB9XG4gICAgLy8gfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4IGJnLXdoaXRlIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICB7bm90aWZ5Lm1zZyA/IDxOb3RpZnkgbXNnPXtub3RpZnkubXNnfSAvPiA6IG51bGx9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMCBtZDp3LTMvNiBsZzp3LTQvNiBiZy1ibHVlLTIwMFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTMvNiBsZzp3LTIvNiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTggeGw6cC0xNiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTE2IGgtOTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layouts/Auth.js\n");

/***/ })

})