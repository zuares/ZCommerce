webpackHotUpdate_N_E("pages/order/[id]",{

/***/ "./components/molecules/Button/PayButton.js":
/*!**************************************************!*\
  !*** ./components/molecules/Button/PayButton.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/GlobalState */ \"./store/GlobalState.js\");\n/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/fetchData */ \"./utils/fetchData.js\");\n/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/Actions */ \"./store/Actions.js\");\n\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/components/molecules/Button/PayButton.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction PayButton(_ref) {\n  _s();\n\n  var odr = _ref.odr;\n  var refPayBtn = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__[\"DataContext\"]),\n      state = _useContext.state,\n      dispatch = _useContext.dispatch;\n\n  var auth = state.auth,\n      order = state.order;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    paypal.Buttons({\n      createOrder: function createOrder(data, actions) {\n        // This function sets up the details of the transaction, including the amount and line item details.\n        return actions.order.create({\n          purchase_units: [{\n            amount: {\n              value: odr.total\n            }\n          }]\n        });\n      },\n      onApprove: function onApprove(data, actions) {\n        // This function captures the funds from the transaction.\n        return actions.order.capture().then(function (details) {\n          // This function shows a transaction success message to your buyer.\n          Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_4__[\"patchData\"])(\"order/\".concat(odr._id), null, auth.access_token).then(function (res) {\n            if (res.err) return dispatch({\n              type: \"NOTIFY\",\n              payload: {\n                msg: {\n                  err: res.err\n                }\n              }\n            });\n            dispatch(Object(_store_Actions__WEBPACK_IMPORTED_MODULE_5__[\"updateItem\"])(order, odr._id), _objectSpread(_objectSpread({}, order), {}, {\n              paid: true,\n              dateOfPayment: new Date().toISOString()\n            }), \"ORDER\");\n            return dispatch({\n              type: \"NOTIFY\",\n              payload: {\n                msg: {\n                  success: res.msg\n                }\n              }\n            });\n          });\n          alert('Transaction completed by ' + details.payer.name.given_name);\n        });\n      }\n    }).render(refPayBtn.current);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    ref: refPayBtn\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 9\n  }, this);\n}\n\n_s(PayButton, \"0osEhplNkDlkktMTThxZ8sk4Oh0=\");\n\n_c = PayButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PayButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"PayButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvQnV0dG9uL1BheUJ1dHRvbi5qcz8xNzM5Il0sIm5hbWVzIjpbIlBheUJ1dHRvbiIsIm9kciIsInJlZlBheUJ0biIsInVzZVJlZiIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJhdXRoIiwib3JkZXIiLCJ1c2VFZmZlY3QiLCJwYXlwYWwiLCJCdXR0b25zIiwiY3JlYXRlT3JkZXIiLCJkYXRhIiwiYWN0aW9ucyIsImNyZWF0ZSIsInB1cmNoYXNlX3VuaXRzIiwiYW1vdW50IiwidmFsdWUiLCJ0b3RhbCIsIm9uQXBwcm92ZSIsImNhcHR1cmUiLCJ0aGVuIiwiZGV0YWlscyIsInBhdGNoRGF0YSIsIl9pZCIsImFjY2Vzc190b2tlbiIsInJlcyIsImVyciIsInR5cGUiLCJwYXlsb2FkIiwibXNnIiwidXBkYXRlSXRlbSIsInBhaWQiLCJkYXRlT2ZQYXltZW50IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3VjY2VzcyIsImFsZXJ0IiwicGF5ZXIiLCJuYW1lIiwiZ2l2ZW5fbmFtZSIsInJlbmRlciIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPO0FBQ3hCLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sRUFBeEI7O0FBRHdCLG9CQUVJQyx3REFBVSxDQUFDQyw4REFBRCxDQUZkO0FBQUEsTUFFaEJDLEtBRmdCLGVBRWhCQSxLQUZnQjtBQUFBLE1BRVRDLFFBRlMsZUFFVEEsUUFGUzs7QUFBQSxNQUdoQkMsSUFIZ0IsR0FHQUYsS0FIQSxDQUdoQkUsSUFIZ0I7QUFBQSxNQUdWQyxLQUhVLEdBR0FILEtBSEEsQ0FHVkcsS0FIVTtBQUl4QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFVBQU0sQ0FBQ0MsT0FBUCxDQUFlO0FBQ1hDLGlCQUFXLEVBQUUscUJBQVVDLElBQVYsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQ2xDO0FBQ0EsZUFBT0EsT0FBTyxDQUFDTixLQUFSLENBQWNPLE1BQWQsQ0FBcUI7QUFDeEJDLHdCQUFjLEVBQUUsQ0FBQztBQUNiQyxrQkFBTSxFQUFFO0FBQ0pDLG1CQUFLLEVBQUVsQixHQUFHLENBQUNtQjtBQURQO0FBREssV0FBRDtBQURRLFNBQXJCLENBQVA7QUFPSCxPQVZVO0FBV1hDLGVBQVMsRUFBRSxtQkFBVVAsSUFBVixFQUFnQkMsT0FBaEIsRUFBeUI7QUFDaEM7QUFDQSxlQUFPQSxPQUFPLENBQUNOLEtBQVIsQ0FBY2EsT0FBZCxHQUF3QkMsSUFBeEIsQ0FBNkIsVUFBVUMsT0FBVixFQUFtQjtBQUNuRDtBQUNBQyw0RUFBUyxpQkFBVXhCLEdBQUcsQ0FBQ3lCLEdBQWQsR0FBcUIsSUFBckIsRUFBMkJsQixJQUFJLENBQUNtQixZQUFoQyxDQUFULENBQ0tKLElBREwsQ0FDVSxVQUFBSyxHQUFHLEVBQUk7QUFDVCxnQkFBSUEsR0FBRyxDQUFDQyxHQUFSLEVBQWEsT0FBT3RCLFFBQVEsQ0FBQztBQUFFdUIsa0JBQUksRUFBRSxRQUFSO0FBQWtCQyxxQkFBTyxFQUFFO0FBQUVDLG1CQUFHLEVBQUU7QUFBRUgscUJBQUcsRUFBRUQsR0FBRyxDQUFDQztBQUFYO0FBQVA7QUFBM0IsYUFBRCxDQUFmO0FBRWJ0QixvQkFBUSxDQUFDMEIsaUVBQVUsQ0FBQ3hCLEtBQUQsRUFBUVIsR0FBRyxDQUFDeUIsR0FBWixDQUFYLGtDQUNEakIsS0FEQztBQUNNeUIsa0JBQUksRUFBRSxJQURaO0FBQ2tCQywyQkFBYSxFQUFFLElBQUlDLElBQUosR0FBV0MsV0FBWDtBQURqQyxnQkFFTCxPQUZLLENBQVI7QUFJQSxtQkFBTzlCLFFBQVEsQ0FBQztBQUFFdUIsa0JBQUksRUFBRSxRQUFSO0FBQWtCQyxxQkFBTyxFQUFFO0FBQUVDLG1CQUFHLEVBQUU7QUFBRU0seUJBQU8sRUFBRVYsR0FBRyxDQUFDSTtBQUFmO0FBQVA7QUFBM0IsYUFBRCxDQUFmO0FBQ0gsV0FUTDtBQVdBTyxlQUFLLENBQUMsOEJBQThCZixPQUFPLENBQUNnQixLQUFSLENBQWNDLElBQWQsQ0FBbUJDLFVBQWxELENBQUw7QUFDSCxTQWRNLENBQVA7QUFlSDtBQTVCVSxLQUFmLEVBNkJHQyxNQTdCSCxDQTZCVXpDLFNBQVMsQ0FBQzBDLE9BN0JwQjtBQStCSCxHQWhDUSxFQWdDTixFQWhDTSxDQUFUO0FBaUNBLHNCQUNJO0FBQUssT0FBRyxFQUFFMUM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFHSDs7R0F4Q1FGLFM7O0tBQUFBLFM7QUEwQ01BLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tb2xlY3VsZXMvQnV0dG9uL1BheUJ1dHRvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvR2xvYmFsU3RhdGUnO1xuaW1wb3J0IHsgcGF0Y2hEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZmV0Y2hEYXRhJztcbmltcG9ydCB7IHVwZGF0ZUl0ZW0gfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9BY3Rpb25zJztcblxuZnVuY3Rpb24gUGF5QnV0dG9uKHsgb2RyIH0pIHtcbiAgICBjb25zdCByZWZQYXlCdG4gPSB1c2VSZWYoKVxuICAgIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxuICAgIGNvbnN0IHsgYXV0aCwgb3JkZXIgfSA9IHN0YXRlXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcGF5cGFsLkJ1dHRvbnMoe1xuICAgICAgICAgICAgY3JlYXRlT3JkZXI6IGZ1bmN0aW9uIChkYXRhLCBhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBzZXRzIHVwIHRoZSBkZXRhaWxzIG9mIHRoZSB0cmFuc2FjdGlvbiwgaW5jbHVkaW5nIHRoZSBhbW91bnQgYW5kIGxpbmUgaXRlbSBkZXRhaWxzLlxuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLm9yZGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlX3VuaXRzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9kci50b3RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQXBwcm92ZTogZnVuY3Rpb24gKGRhdGEsIGFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGNhcHR1cmVzIHRoZSBmdW5kcyBmcm9tIHRoZSB0cmFuc2FjdGlvbi5cbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9ucy5vcmRlci5jYXB0dXJlKCkudGhlbihmdW5jdGlvbiAoZGV0YWlscykge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHNob3dzIGEgdHJhbnNhY3Rpb24gc3VjY2VzcyBtZXNzYWdlIHRvIHlvdXIgYnV5ZXIuXG4gICAgICAgICAgICAgICAgICAgIHBhdGNoRGF0YShgb3JkZXIvJHtvZHIuX2lkfWAsIG51bGwsIGF1dGguYWNjZXNzX3Rva2VuKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogXCJOT1RJRllcIiwgcGF5bG9hZDogeyBtc2c6IHsgZXJyOiByZXMuZXJyIH0gfSB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlSXRlbShvcmRlciwgb2RyLl9pZCksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ub3JkZXIsIHBhaWQ6IHRydWUsIGRhdGVPZlBheW1lbnQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFwiT1JERVJcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IFwiTk9USUZZXCIsIHBheWxvYWQ6IHsgbXNnOiB7IHN1Y2Nlc3M6IHJlcy5tc2cgfSB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdUcmFuc2FjdGlvbiBjb21wbGV0ZWQgYnkgJyArIGRldGFpbHMucGF5ZXIubmFtZS5naXZlbl9uYW1lKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkucmVuZGVyKHJlZlBheUJ0bi5jdXJyZW50KTtcblxuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHJlZj17cmVmUGF5QnRufSA+PC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF5QnV0dG9uOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/molecules/Button/PayButton.js\n");

/***/ })

})