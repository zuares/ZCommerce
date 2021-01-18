webpackHotUpdate_N_E("pages/order/[id]",{

/***/ "./pages/order/[id].js":
/*!*****************************!*\
  !*** ./pages/order/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layouts_MainApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layouts/MainApp */ \"./components/layouts/MainApp.js\");\n/* harmony import */ var _components_container_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/container/Content */ \"./components/container/Content.js\");\n/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/GlobalState */ \"./store/GlobalState.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/pages/order/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction DetailOrder() {\n  _s();\n\n  var _this = this;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_4__[\"DataContext\"]),\n      state = _useContext.state,\n      dispatch = _useContext.dispatch;\n\n  var order = state.order,\n      auth = state.auth;\n  console.log(order.cart);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      orderDetail = _useState[0],\n      setOrderDetail = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var newArr = order.filter(function (item) {\n      return item._id === router.query.id;\n    });\n    console.log(newArr);\n    setOrderDetail(newArr);\n  }, [order]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layouts_MainApp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_container_Content__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      title: \"Detail Order\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"bg-blue-400 px-4 py-1 text-white\",\n          children: \"Go back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"max-w-xl my-5\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"Shipping\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, this), orderDetail.map(function (order) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Name : \", order.user.name]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Email : \", order.user.email]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Address : \", order.address]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: [\"Mobile : \", order.mobile]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 33\n            }, _this)]\n          }, order._id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 29\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"Order items\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, this);\n}\n\n_s(DetailOrder, \"2Dh/tCMI4m1+rVoHJZn/gQ1F5qI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = DetailOrder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailOrder);\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailOrder\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXIvLmpzP2JiYTgiXSwibmFtZXMiOlsiRGV0YWlsT3JkZXIiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwib3JkZXIiLCJhdXRoIiwiY29uc29sZSIsImxvZyIsImNhcnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm9yZGVyRGV0YWlsIiwic2V0T3JkZXJEZXRhaWwiLCJ1c2VFZmZlY3QiLCJuZXdBcnIiLCJmaWx0ZXIiLCJpdGVtIiwiX2lkIiwicXVlcnkiLCJpZCIsIm1hcCIsInVzZXIiLCJuYW1lIiwiZW1haWwiLCJhZGRyZXNzIiwibW9iaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFBQSxvQkFDU0Msd0RBQVUsQ0FBQ0MsOERBQUQsQ0FEbkI7QUFBQSxNQUNYQyxLQURXLGVBQ1hBLEtBRFc7QUFBQSxNQUNKQyxRQURJLGVBQ0pBLFFBREk7O0FBQUEsTUFFWEMsS0FGVyxHQUVLRixLQUZMLENBRVhFLEtBRlc7QUFBQSxNQUVKQyxJQUZJLEdBRUtILEtBRkwsQ0FFSkcsSUFGSTtBQUduQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQUssQ0FBQ0ksSUFBbEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUptQixrQkFNbUJDLHNEQUFRLENBQUMsRUFBRCxDQU4zQjtBQUFBLE1BTVpDLFdBTlk7QUFBQSxNQU1DQyxjQU5EOztBQVFuQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsTUFBTSxHQUFHWCxLQUFLLENBQUNZLE1BQU4sQ0FBYSxVQUFBQyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxHQUFMLEtBQWFULE1BQU0sQ0FBQ1UsS0FBUCxDQUFhQyxFQUE5QjtBQUFBLEtBQWpCLENBQWY7QUFDQWQsV0FBTyxDQUFDQyxHQUFSLENBQVlRLE1BQVo7QUFDQUYsa0JBQWMsQ0FBQ0UsTUFBRCxDQUFkO0FBQ0gsR0FKUSxFQUlOLENBQUNYLEtBQUQsQ0FKTSxDQUFUO0FBT0Esc0JBQ0kscUVBQUMsbUVBQUQ7QUFBQSwyQkFDSSxxRUFBQyxxRUFBRDtBQUFTLFdBQUssRUFBQyxjQUFmO0FBQUEsOEJBRUk7QUFBQSwrQkFDSTtBQUFRLG1CQUFTLG9DQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUtJO0FBQUssaUJBQVMsaUJBQWQ7QUFBQSxnQ0FDSTtBQUFBLGlDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUtRUSxXQUFXLENBQUNTLEdBQVosQ0FBZ0IsVUFBQWpCLEtBQUs7QUFBQSw4QkFDakI7QUFBQSxvQ0FDSTtBQUFBLG9DQUFXQSxLQUFLLENBQUNrQixJQUFOLENBQVdDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUEscUNBQVluQixLQUFLLENBQUNrQixJQUFOLENBQVdFLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJO0FBQUEsdUNBQWNwQixLQUFLLENBQUNxQixPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosZUFJSTtBQUFBLHNDQUFhckIsS0FBSyxDQUFDc0IsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUEsYUFBVXRCLEtBQUssQ0FBQ2MsR0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUI7QUFBQSxTQUFyQixDQUxSLGVBZ0JJO0FBQUEsaUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3Q0g7O0dBdkRRbkIsVztVQUlVVyxxRDs7O0tBSlZYLFc7QUF5RE1BLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvb3JkZXIvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1haW5BcHAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL01haW5BcHAnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXIvQ29udGVudCc7XG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuXG5mdW5jdGlvbiBEZXRhaWxPcmRlcigpIHtcbiAgICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcbiAgICBjb25zdCB7IG9yZGVyLCBhdXRoIH0gPSBzdGF0ZVxuICAgIGNvbnNvbGUubG9nKG9yZGVyLmNhcnQpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCBbb3JkZXJEZXRhaWwsIHNldE9yZGVyRGV0YWlsXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3QXJyID0gb3JkZXIuZmlsdGVyKGl0ZW0gPT4gaXRlbS5faWQgPT09IHJvdXRlci5xdWVyeS5pZClcbiAgICAgICAgY29uc29sZS5sb2cobmV3QXJyKTtcbiAgICAgICAgc2V0T3JkZXJEZXRhaWwobmV3QXJyKVxuICAgIH0sIFtvcmRlcl0pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TWFpbkFwcD5cbiAgICAgICAgICAgIDxDb250ZW50IHRpdGxlPVwiRGV0YWlsIE9yZGVyXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJnLWJsdWUtNDAwIHB4LTQgcHktMSB0ZXh0LXdoaXRlYH0gPkdvIGJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1heC13LXhsIG15LTVgfSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+U2hpcHBpbmc8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJEZXRhaWwubWFwKG9yZGVyID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17b3JkZXIuX2lkfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5hbWUgOiB7b3JkZXIudXNlci5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW1haWwgOiB7b3JkZXIudXNlci5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFkZHJlc3MgOiB7b3JkZXIuYWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1vYmlsZSA6IHtvcmRlci5tb2JpbGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5PcmRlciBpdGVtczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmNhcnQubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2VzWzBdLnVybH0gYWx0PXtpdGVtLmltYWdlc1swXS51cmx9IGNsYXNzTmFtZT17YHctMjAgaC0xMWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnQ+XG5cbiAgICAgICAgPC9NYWluQXBwPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbE9yZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/order/[id].js\n");

/***/ })

})