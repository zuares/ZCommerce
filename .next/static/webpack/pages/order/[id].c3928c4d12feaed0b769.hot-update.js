webpackHotUpdate_N_E("pages/order/[id]",{

/***/ "./pages/order/[id].js":
/*!*****************************!*\
  !*** ./pages/order/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layouts_MainApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layouts/MainApp */ \"./components/layouts/MainApp.js\");\n/* harmony import */ var _components_container_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/container/Content */ \"./components/container/Content.js\");\n/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/GlobalState */ \"./store/GlobalState.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/pages/order/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction DetailOrder() {\n  _s();\n\n  var _this = this;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_4__[\"DataContext\"]),\n      state = _useContext.state,\n      dispatch = _useContext.dispatch;\n\n  var order = state.order,\n      auth = state.auth;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  console.log(order);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      orderDetail = _useState[0],\n      setOrderDetail = _useState[1]; // console.log(order.cart.length);\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var newArr = order.filter(function (item) {\n      return item._id === router.query.id;\n    });\n    console.log(newArr);\n    setOrderDetail(newArr);\n  }, [order]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layouts_MainApp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_container_Content__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      title: \"Detail Order\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"bg-blue-400 px-4 py-1 text-white\",\n          children: \"Go back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"max-w-xl my-5\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"Shipping\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, this), orderDetail.map(function (order) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Name : \", order.user.name]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Email : \", order.user.email]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Address : \", order.address]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Mobile : \", order.mobile]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 33\n            }, _this)]\n          }, order._id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 29\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"Order items\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, this);\n}\n\n_s(DetailOrder, \"2Dh/tCMI4m1+rVoHJZn/gQ1F5qI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = DetailOrder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailOrder);\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailOrder\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXIvLmpzP2JiYTgiXSwibmFtZXMiOlsiRGV0YWlsT3JkZXIiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwib3JkZXIiLCJhdXRoIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwib3JkZXJEZXRhaWwiLCJzZXRPcmRlckRldGFpbCIsInVzZUVmZmVjdCIsIm5ld0FyciIsImZpbHRlciIsIml0ZW0iLCJfaWQiLCJxdWVyeSIsImlkIiwibWFwIiwidXNlciIsIm5hbWUiLCJlbWFpbCIsImFkZHJlc3MiLCJtb2JpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUFBLG9CQUNTQyx3REFBVSxDQUFDQyw4REFBRCxDQURuQjtBQUFBLE1BQ1hDLEtBRFcsZUFDWEEsS0FEVztBQUFBLE1BQ0pDLFFBREksZUFDSkEsUUFESTs7QUFBQSxNQUVYQyxLQUZXLEdBRUtGLEtBRkwsQ0FFWEUsS0FGVztBQUFBLE1BRUpDLElBRkksR0FFS0gsS0FGTCxDQUVKRyxJQUZJO0FBR25CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQVo7O0FBSm1CLGtCQUttQk0sc0RBQVEsQ0FBQyxFQUFELENBTDNCO0FBQUEsTUFLWkMsV0FMWTtBQUFBLE1BS0NDLGNBTEQsaUJBTW5COzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsTUFBTSxHQUFHVixLQUFLLENBQUNXLE1BQU4sQ0FBYSxVQUFBQyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxHQUFMLEtBQWFYLE1BQU0sQ0FBQ1ksS0FBUCxDQUFhQyxFQUE5QjtBQUFBLEtBQWpCLENBQWY7QUFDQVgsV0FBTyxDQUFDQyxHQUFSLENBQVlLLE1BQVo7QUFDQUYsa0JBQWMsQ0FBQ0UsTUFBRCxDQUFkO0FBQ0gsR0FKUSxFQUlOLENBQUNWLEtBQUQsQ0FKTSxDQUFUO0FBT0Esc0JBQ0kscUVBQUMsbUVBQUQ7QUFBQSwyQkFDSSxxRUFBQyxxRUFBRDtBQUFTLFdBQUssRUFBQyxjQUFmO0FBQUEsOEJBRUk7QUFBQSwrQkFDSTtBQUFRLG1CQUFTLG9DQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUtJO0FBQUssaUJBQVMsaUJBQWQ7QUFBQSxnQ0FDSTtBQUFBLGlDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUtRTyxXQUFXLENBQUNTLEdBQVosQ0FBZ0IsVUFBQWhCLEtBQUs7QUFBQSw4QkFDakI7QUFBQSxvQ0FDSTtBQUFBLG9DQUFXQSxLQUFLLENBQUNpQixJQUFOLENBQVdDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUEscUNBQVlsQixLQUFLLENBQUNpQixJQUFOLENBQVdFLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJO0FBQUEsdUNBQWNuQixLQUFLLENBQUNvQixPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosZUFJSTtBQUFBLHNDQUFhcEIsS0FBSyxDQUFDcUIsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUEsYUFBVXJCLEtBQUssQ0FBQ2EsR0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUI7QUFBQSxTQUFyQixDQUxSLGVBZ0JJO0FBQUEsaUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3Q0g7O0dBdERRbEIsVztVQUdVUSxxRDs7O0tBSFZSLFc7QUF3RE1BLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvb3JkZXIvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1haW5BcHAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL01haW5BcHAnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXIvQ29udGVudCc7XG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuXG5mdW5jdGlvbiBEZXRhaWxPcmRlcigpIHtcbiAgICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcbiAgICBjb25zdCB7IG9yZGVyLCBhdXRoIH0gPSBzdGF0ZVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc29sZS5sb2cob3JkZXIpO1xuICAgIGNvbnN0IFtvcmRlckRldGFpbCwgc2V0T3JkZXJEZXRhaWxdID0gdXNlU3RhdGUoW10pXG4gICAgLy8gY29uc29sZS5sb2cob3JkZXIuY2FydC5sZW5ndGgpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FyciA9IG9yZGVyLmZpbHRlcihpdGVtID0+IGl0ZW0uX2lkID09PSByb3V0ZXIucXVlcnkuaWQpXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0Fycik7XG4gICAgICAgIHNldE9yZGVyRGV0YWlsKG5ld0FycilcbiAgICB9LCBbb3JkZXJdKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1haW5BcHA+XG4gICAgICAgICAgICA8Q29udGVudCB0aXRsZT1cIkRldGFpbCBPcmRlclwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BiZy1ibHVlLTQwMCBweC00IHB5LTEgdGV4dC13aGl0ZWB9ID5HbyBiYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtYXgtdy14bCBteS01YH0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlNoaXBwaW5nPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyRGV0YWlsLm1hcChvcmRlciA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e29yZGVyLl9pZH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OYW1lIDoge29yZGVyLnVzZXIubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsIDoge29yZGVyLnVzZXIuZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BZGRyZXNzIDoge29yZGVyLmFkZHJlc3N9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Nb2JpbGUgOiB7b3JkZXIubW9iaWxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+T3JkZXIgaXRlbXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5jYXJ0Lm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlc1swXS51cmx9IGFsdD17aXRlbS5pbWFnZXNbMF0udXJsfSBjbGFzc05hbWU9e2B3LTIwIGgtMTFgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50PlxuXG4gICAgICAgIDwvTWFpbkFwcD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxPcmRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/order/[id].js\n");

/***/ })

})