webpackHotUpdate_N_E("pages/cart",{

/***/ "./components/molecules/Button/PayButton.js":
/*!**************************************************!*\
  !*** ./components/molecules/Button/PayButton.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/fetchData */ \"./utils/fetchData.js\");\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/components/molecules/Button/PayButton.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction PayButton(_ref) {\n  _s();\n\n  var total = _ref.total,\n      address = _ref.address,\n      mobile = _ref.mobile,\n      state = _ref.state,\n      dispatch = _ref.dispatch;\n  var refPayBtn = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var cart = state.cart,\n      auth = state.auth;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    paypal.Buttons({\n      createOrder: function createOrder(data, actions) {\n        // This function sets up the details of the transaction, including the amount and line item details.\n        return actions.order.create({\n          purchase_units: [{\n            amount: {\n              value: '0.01'\n            }\n          }]\n        });\n      },\n      onApprove: function onApprove(data, actions) {\n        // This function captures the funds from the transaction.\n        return actions.order.capture().then(function (details) {\n          // This function shows a transaction success message to your buyer.\n          Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_2__[\"postData\"])('order', {\n            address: address,\n            mobile: mobile,\n            cart: cart,\n            total: total\n          }, auth.access_token).then(function (res) {\n            if (res.err) return dispatch({\n              type: \"NOTIFY\",\n              payload: {\n                msg: {\n                  err: res.err\n                }\n              }\n            });\n          });\n          alert('Transaction completed by ' + details.payer.name.given_name);\n        });\n      }\n    }).render(refPayBtn.current);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    ref: refPayBtn\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, this);\n}\n\n_s(PayButton, \"DYSa/WZvCbLJS2mWyAAymg0B6g4=\");\n\n_c = PayButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PayButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"PayButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvQnV0dG9uL1BheUJ1dHRvbi5qcz8xNzM5Il0sIm5hbWVzIjpbIlBheUJ1dHRvbiIsInRvdGFsIiwiYWRkcmVzcyIsIm1vYmlsZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJyZWZQYXlCdG4iLCJ1c2VSZWYiLCJjYXJ0IiwiYXV0aCIsInVzZUVmZmVjdCIsInBheXBhbCIsIkJ1dHRvbnMiLCJjcmVhdGVPcmRlciIsImRhdGEiLCJhY3Rpb25zIiwib3JkZXIiLCJjcmVhdGUiLCJwdXJjaGFzZV91bml0cyIsImFtb3VudCIsInZhbHVlIiwib25BcHByb3ZlIiwiY2FwdHVyZSIsInRoZW4iLCJkZXRhaWxzIiwicG9zdERhdGEiLCJhY2Nlc3NfdG9rZW4iLCJyZXMiLCJlcnIiLCJ0eXBlIiwicGF5bG9hZCIsIm1zZyIsImFsZXJ0IiwicGF5ZXIiLCJuYW1lIiwiZ2l2ZW5fbmFtZSIsInJlbmRlciIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxTQUFULE9BQWdFO0FBQUE7O0FBQUEsTUFBM0NDLEtBQTJDLFFBQTNDQSxLQUEyQztBQUFBLE1BQXBDQyxPQUFvQyxRQUFwQ0EsT0FBb0M7QUFBQSxNQUEzQkMsTUFBMkIsUUFBM0JBLE1BQTJCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUM1RCxNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLEVBQXhCO0FBRDRELE1BRXBEQyxJQUZvRCxHQUVyQ0osS0FGcUMsQ0FFcERJLElBRm9EO0FBQUEsTUFFOUNDLElBRjhDLEdBRXJDTCxLQUZxQyxDQUU5Q0ssSUFGOEM7QUFHNURDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxVQUFNLENBQUNDLE9BQVAsQ0FBZTtBQUNYQyxpQkFBVyxFQUFFLHFCQUFVQyxJQUFWLEVBQWdCQyxPQUFoQixFQUF5QjtBQUNsQztBQUNBLGVBQU9BLE9BQU8sQ0FBQ0MsS0FBUixDQUFjQyxNQUFkLENBQXFCO0FBQ3hCQyx3QkFBYyxFQUFFLENBQUM7QUFDYkMsa0JBQU0sRUFBRTtBQUNKQyxtQkFBSyxFQUFFO0FBREg7QUFESyxXQUFEO0FBRFEsU0FBckIsQ0FBUDtBQU9ILE9BVlU7QUFXWEMsZUFBUyxFQUFFLG1CQUFVUCxJQUFWLEVBQWdCQyxPQUFoQixFQUF5QjtBQUNoQztBQUNBLGVBQU9BLE9BQU8sQ0FBQ0MsS0FBUixDQUFjTSxPQUFkLEdBQXdCQyxJQUF4QixDQUE2QixVQUFVQyxPQUFWLEVBQW1CO0FBQ25EO0FBQ0FDLDJFQUFRLENBQUMsT0FBRCxFQUFVO0FBQUV2QixtQkFBTyxFQUFQQSxPQUFGO0FBQVdDLGtCQUFNLEVBQU5BLE1BQVg7QUFBbUJLLGdCQUFJLEVBQUpBLElBQW5CO0FBQXlCUCxpQkFBSyxFQUFMQTtBQUF6QixXQUFWLEVBQTRDUSxJQUFJLENBQUNpQixZQUFqRCxDQUFSLENBQ0tILElBREwsQ0FDVSxVQUFBSSxHQUFHLEVBQUk7QUFDVCxnQkFBSUEsR0FBRyxDQUFDQyxHQUFSLEVBQWEsT0FBT3ZCLFFBQVEsQ0FBQztBQUFFd0Isa0JBQUksRUFBRSxRQUFSO0FBQWtCQyxxQkFBTyxFQUFFO0FBQUVDLG1CQUFHLEVBQUU7QUFBRUgscUJBQUcsRUFBRUQsR0FBRyxDQUFDQztBQUFYO0FBQVA7QUFBM0IsYUFBRCxDQUFmO0FBQ2hCLFdBSEw7QUFLQUksZUFBSyxDQUFDLDhCQUE4QlIsT0FBTyxDQUFDUyxLQUFSLENBQWNDLElBQWQsQ0FBbUJDLFVBQWxELENBQUw7QUFDSCxTQVJNLENBQVA7QUFTSDtBQXRCVSxLQUFmLEVBdUJHQyxNQXZCSCxDQXVCVTlCLFNBQVMsQ0FBQytCLE9BdkJwQjtBQXlCSCxHQTFCUSxFQTBCTixFQTFCTSxDQUFUO0FBMkJBLHNCQUNJO0FBQUssT0FBRyxFQUFFL0I7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFHSDs7R0FqQ1FOLFM7O0tBQUFBLFM7QUFtQ01BLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tb2xlY3VsZXMvQnV0dG9uL1BheUJ1dHRvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHBvc3REYXRhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZmV0Y2hEYXRhJztcblxuZnVuY3Rpb24gUGF5QnV0dG9uKHsgdG90YWwsIGFkZHJlc3MsIG1vYmlsZSwgc3RhdGUsIGRpc3BhdGNoIH0pIHtcbiAgICBjb25zdCByZWZQYXlCdG4gPSB1c2VSZWYoKVxuICAgIGNvbnN0IHsgY2FydCwgYXV0aCB9ID0gc3RhdGVcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBwYXlwYWwuQnV0dG9ucyh7XG4gICAgICAgICAgICBjcmVhdGVPcmRlcjogZnVuY3Rpb24gKGRhdGEsIGFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHNldHMgdXAgdGhlIGRldGFpbHMgb2YgdGhlIHRyYW5zYWN0aW9uLCBpbmNsdWRpbmcgdGhlIGFtb3VudCBhbmQgbGluZSBpdGVtIGRldGFpbHMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2VfdW5pdHM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzAuMDEnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25BcHByb3ZlOiBmdW5jdGlvbiAoZGF0YSwgYWN0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gY2FwdHVyZXMgdGhlIGZ1bmRzIGZyb20gdGhlIHRyYW5zYWN0aW9uLlxuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLm9yZGVyLmNhcHR1cmUoKS50aGVuKGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gc2hvd3MgYSB0cmFuc2FjdGlvbiBzdWNjZXNzIG1lc3NhZ2UgdG8geW91ciBidXllci5cbiAgICAgICAgICAgICAgICAgICAgcG9zdERhdGEoJ29yZGVyJywgeyBhZGRyZXNzLCBtb2JpbGUsIGNhcnQsIHRvdGFsIH0sIGF1dGguYWNjZXNzX3Rva2VuKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogXCJOT1RJRllcIiwgcGF5bG9hZDogeyBtc2c6IHsgZXJyOiByZXMuZXJyIH0gfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnVHJhbnNhY3Rpb24gY29tcGxldGVkIGJ5ICcgKyBkZXRhaWxzLnBheWVyLm5hbWUuZ2l2ZW5fbmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnJlbmRlcihyZWZQYXlCdG4uY3VycmVudCk7XG5cbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiByZWY9e3JlZlBheUJ0bn0gPjwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBheUJ1dHRvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/molecules/Button/PayButton.js\n");

/***/ })

})