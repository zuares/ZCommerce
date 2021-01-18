webpackHotUpdate_N_E("pages/order/[id]",{

/***/ "./pages/order/[id].js":
/*!*****************************!*\
  !*** ./pages/order/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layouts_MainApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layouts/MainApp */ \"./components/layouts/MainApp.js\");\n/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/GlobalState */ \"./store/GlobalState.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/pages/order/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction DetailOrder() {\n  _s();\n\n  var _this = this;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__[\"DataContext\"]),\n      state = _useContext.state,\n      dispatch = _useContext.dispatch;\n\n  var order = state.order,\n      auth = state.auth;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      orderDetail = _useState[0],\n      setOrderDetail = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var newArr = order.filter(function (item) {\n      return item._id === router.query.id;\n    });\n    console.log(newArr);\n    setOrderDetail(newArr);\n  }, [order]);\n  console.log(order);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layouts_MainApp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Detail order\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"bg-blue-400 px-4 py-1 text-white\",\n        children: \"Go back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"max-w-xl my-5\",\n      children: orderDetail.map(function (order) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: [\"Order \", order._id]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"Name : \", order.user.name]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"Email : \", order.user.emailemail]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"Address : \", order.address]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"Mobile : \", order.mobile]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 29\n          }, _this)]\n        }, order._id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, this);\n}\n\n_s(DetailOrder, \"2Dh/tCMI4m1+rVoHJZn/gQ1F5qI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = DetailOrder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailOrder);\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailOrder\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXIvLmpzP2JiYTgiXSwibmFtZXMiOlsiRGV0YWlsT3JkZXIiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwib3JkZXIiLCJhdXRoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJvcmRlckRldGFpbCIsInNldE9yZGVyRGV0YWlsIiwidXNlRWZmZWN0IiwibmV3QXJyIiwiZmlsdGVyIiwiaXRlbSIsIl9pZCIsInF1ZXJ5IiwiaWQiLCJjb25zb2xlIiwibG9nIiwibWFwIiwidXNlciIsIm5hbWUiLCJlbWFpbGVtYWlsIiwiYWRkcmVzcyIsIm1vYmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ1NDLHdEQUFVLENBQUNDLDhEQUFELENBRG5CO0FBQUEsTUFDWEMsS0FEVyxlQUNYQSxLQURXO0FBQUEsTUFDSkMsUUFESSxlQUNKQSxRQURJOztBQUFBLE1BRVhDLEtBRlcsR0FFS0YsS0FGTCxDQUVYRSxLQUZXO0FBQUEsTUFFSkMsSUFGSSxHQUVLSCxLQUZMLENBRUpHLElBRkk7QUFHbkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFIbUIsa0JBS21CQyxzREFBUSxDQUFDLEVBQUQsQ0FMM0I7QUFBQSxNQUtaQyxXQUxZO0FBQUEsTUFLQ0MsY0FMRDs7QUFPbkJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLE1BQU0sR0FBR1IsS0FBSyxDQUFDUyxNQUFOLENBQWEsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsR0FBTCxLQUFhVCxNQUFNLENBQUNVLEtBQVAsQ0FBYUMsRUFBOUI7QUFBQSxLQUFqQixDQUFmO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxNQUFaO0FBQ0FGLGtCQUFjLENBQUNFLE1BQUQsQ0FBZDtBQUNILEdBSlEsRUFJTixDQUFDUixLQUFELENBSk0sQ0FBVDtBQUtBYyxTQUFPLENBQUNDLEdBQVIsQ0FBWWYsS0FBWjtBQUNBLHNCQUNJLHFFQUFDLG1FQUFEO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJO0FBQUEsNkJBQ0k7QUFBUSxpQkFBUyxvQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFPSTtBQUFLLGVBQVMsaUJBQWQ7QUFBQSxnQkFFUUssV0FBVyxDQUFDVyxHQUFaLENBQWdCLFVBQUFoQixLQUFLO0FBQUEsNEJBQ2pCO0FBQUEsa0NBQ0k7QUFBQSxpQ0FBV0EsS0FBSyxDQUFDVyxHQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBLGtDQUFXWCxLQUFLLENBQUNpQixJQUFOLENBQVdDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQUEsbUNBQVlsQixLQUFLLENBQUNpQixJQUFOLENBQVdFLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJO0FBQUEscUNBQWNuQixLQUFLLENBQUNvQixPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFLSTtBQUFBLG9DQUFhcEIsS0FBSyxDQUFDcUIsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSjtBQUFBLFdBQVVyQixLQUFLLENBQUNXLEdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGlCO0FBQUEsT0FBckI7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0Qkg7O0dBekNRaEIsVztVQUdVUSxxRDs7O0tBSFZSLFc7QUEyQ01BLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvb3JkZXIvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1haW5BcHAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL01haW5BcHAnO1xuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cblxuZnVuY3Rpb24gRGV0YWlsT3JkZXIoKSB7XG4gICAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG4gICAgY29uc3QgeyBvcmRlciwgYXV0aCB9ID0gc3RhdGVcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgW29yZGVyRGV0YWlsLCBzZXRPcmRlckRldGFpbF0gPSB1c2VTdGF0ZShbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FyciA9IG9yZGVyLmZpbHRlcihpdGVtID0+IGl0ZW0uX2lkID09PSByb3V0ZXIucXVlcnkuaWQpXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0Fycik7XG4gICAgICAgIHNldE9yZGVyRGV0YWlsKG5ld0FycilcbiAgICB9LCBbb3JkZXJdKTtcbiAgICBjb25zb2xlLmxvZyhvcmRlcik7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1haW5BcHA+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIERldGFpbCBvcmRlclxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYmctYmx1ZS00MDAgcHgtNCBweS0xIHRleHQtd2hpdGVgfSA+R28gYmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1heC13LXhsIG15LTVgfSA+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvcmRlckRldGFpbC5tYXAob3JkZXIgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e29yZGVyLl9pZH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5PcmRlciB7b3JkZXIuX2lkfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TmFtZSA6IHtvcmRlci51c2VyLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsIDoge29yZGVyLnVzZXIuZW1haWxlbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QWRkcmVzcyA6IHtvcmRlci5hZGRyZXNzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Nb2JpbGUgOiB7b3JkZXIubW9iaWxlfTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTWFpbkFwcD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxPcmRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/order/[id].js\n");

/***/ })

})