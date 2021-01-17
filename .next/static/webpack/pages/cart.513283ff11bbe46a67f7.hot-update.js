webpackHotUpdate_N_E("pages/cart",{

/***/ "./components/molecules/Button/PayButton.js":
/*!**************************************************!*\
  !*** ./components/molecules/Button/PayButton.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/components/molecules/Button/PayButton.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction PayButton() {\n  _s();\n\n  var refPayBtn = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    paypal.Buttons({\n      createOrder: function createOrder(data, actions) {\n        // This function sets up the details of the transaction, including the amount and line item details.\n        return actions.order.create({\n          purchase_units: [{\n            amount: {\n              value: '0.01'\n            }\n          }]\n        });\n      }\n    }).render('#paypal-button-container');\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"paypal-button-container\",\n    ref: refPayBtn\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, this);\n}\n\n_s(PayButton, \"DYSa/WZvCbLJS2mWyAAymg0B6g4=\");\n\n_c = PayButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PayButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"PayButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvQnV0dG9uL1BheUJ1dHRvbi5qcz8xNzM5Il0sIm5hbWVzIjpbIlBheUJ1dHRvbiIsInJlZlBheUJ0biIsInVzZVJlZiIsInVzZUVmZmVjdCIsInBheXBhbCIsIkJ1dHRvbnMiLCJjcmVhdGVPcmRlciIsImRhdGEiLCJhY3Rpb25zIiwib3JkZXIiLCJjcmVhdGUiLCJwdXJjaGFzZV91bml0cyIsImFtb3VudCIsInZhbHVlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUNqQixNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxVQUFNLENBQUNDLE9BQVAsQ0FBZTtBQUNYQyxpQkFBVyxFQUFFLHFCQUFVQyxJQUFWLEVBQWdCQyxPQUFoQixFQUF5QjtBQUNsQztBQUNBLGVBQU9BLE9BQU8sQ0FBQ0MsS0FBUixDQUFjQyxNQUFkLENBQXFCO0FBQ3hCQyx3QkFBYyxFQUFFLENBQUM7QUFDYkMsa0JBQU0sRUFBRTtBQUNKQyxtQkFBSyxFQUFFO0FBREg7QUFESyxXQUFEO0FBRFEsU0FBckIsQ0FBUDtBQU9IO0FBVlUsS0FBZixFQVdHQyxNQVhILENBV1UsMEJBWFY7QUFhSCxHQWRRLEVBY04sRUFkTSxDQUFUO0FBZUEsc0JBQ0k7QUFBSyxNQUFFLEVBQUMseUJBQVI7QUFBa0MsT0FBRyxFQUFFYjtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFHSDs7R0FyQlFELFM7O0tBQUFBLFM7QUF1Qk1BLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tb2xlY3VsZXMvQnV0dG9uL1BheUJ1dHRvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gUGF5QnV0dG9uKCkge1xuICAgIGNvbnN0IHJlZlBheUJ0biA9IHVzZVJlZigpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBwYXlwYWwuQnV0dG9ucyh7XG4gICAgICAgICAgICBjcmVhdGVPcmRlcjogZnVuY3Rpb24gKGRhdGEsIGFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHNldHMgdXAgdGhlIGRldGFpbHMgb2YgdGhlIHRyYW5zYWN0aW9uLCBpbmNsdWRpbmcgdGhlIGFtb3VudCBhbmQgbGluZSBpdGVtIGRldGFpbHMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VfdW5pdHM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzAuMDEnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnJlbmRlcignI3BheXBhbC1idXR0b24tY29udGFpbmVyJyk7XG5cbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cInBheXBhbC1idXR0b24tY29udGFpbmVyXCIgcmVmPXtyZWZQYXlCdG59ID48L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYXlCdXR0b247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/molecules/Button/PayButton.js\n");

/***/ })

})