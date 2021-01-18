webpackHotUpdate_N_E("pages/order/[id]",{

/***/ "./pages/order/[id].js":
/*!*****************************!*\
  !*** ./pages/order/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layouts_MainApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layouts/MainApp */ \"./components/layouts/MainApp.js\");\n/* harmony import */ var _components_container_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/container/Content */ \"./components/container/Content.js\");\n/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/GlobalState */ \"./store/GlobalState.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/pages/order/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction DetailOrder() {\n  _s();\n\n  var _this = this;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_4__[\"DataContext\"]),\n      state = _useContext.state,\n      dispatch = _useContext.dispatch;\n\n  var order = state.order,\n      auth = state.auth;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      orderDetail = _useState[0],\n      setOrderDetail = _useState[1]; // console.log(order.cart.length);\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var newArr = order.filter(function (item) {\n      return item._id === router.query.id;\n    });\n    setOrderDetail(newArr);\n  }, [order]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layouts_MainApp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_container_Content__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      title: \"Detail Order\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"bg-blue-400 px-4 py-1 text-white\",\n          children: \"Go back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"max-w-xl my-5\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: \"Shipping\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 21\n        }, this), orderDetail.map(function (order) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: [\"Name : \", order.user.name]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: [\"Email : \", order.user.email]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: [\"Address : \", order.address]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: [\"Mobile : \", order.mobile]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 37\n              }, _this)]\n            }, order._id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 33\n            }, _this)]\n          }, void 0, true);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, this);\n}\n\n_s(DetailOrder, \"2Dh/tCMI4m1+rVoHJZn/gQ1F5qI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = DetailOrder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailOrder);\n\nvar _c;\n\n$RefreshReg$(_c, \"DetailOrder\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXIvLmpzP2JiYTgiXSwibmFtZXMiOlsiRGV0YWlsT3JkZXIiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwib3JkZXIiLCJhdXRoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJvcmRlckRldGFpbCIsInNldE9yZGVyRGV0YWlsIiwidXNlRWZmZWN0IiwibmV3QXJyIiwiZmlsdGVyIiwiaXRlbSIsIl9pZCIsInF1ZXJ5IiwiaWQiLCJtYXAiLCJ1c2VyIiwibmFtZSIsImVtYWlsIiwiYWRkcmVzcyIsIm1vYmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUFBLG9CQUNTQyx3REFBVSxDQUFDQyw4REFBRCxDQURuQjtBQUFBLE1BQ1hDLEtBRFcsZUFDWEEsS0FEVztBQUFBLE1BQ0pDLFFBREksZUFDSkEsUUFESTs7QUFBQSxNQUVYQyxLQUZXLEdBRUtGLEtBRkwsQ0FFWEUsS0FGVztBQUFBLE1BRUpDLElBRkksR0FFS0gsS0FGTCxDQUVKRyxJQUZJO0FBR25CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBSG1CLGtCQUltQkMsc0RBQVEsQ0FBQyxFQUFELENBSjNCO0FBQUEsTUFJWkMsV0FKWTtBQUFBLE1BSUNDLGNBSkQsaUJBS25COzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsTUFBTSxHQUFHUixLQUFLLENBQUNTLE1BQU4sQ0FBYSxVQUFBQyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxHQUFMLEtBQWFULE1BQU0sQ0FBQ1UsS0FBUCxDQUFhQyxFQUE5QjtBQUFBLEtBQWpCLENBQWY7QUFDQVAsa0JBQWMsQ0FBQ0UsTUFBRCxDQUFkO0FBQ0gsR0FIUSxFQUdOLENBQUNSLEtBQUQsQ0FITSxDQUFUO0FBTUEsc0JBQ0kscUVBQUMsbUVBQUQ7QUFBQSwyQkFDSSxxRUFBQyxxRUFBRDtBQUFTLFdBQUssRUFBQyxjQUFmO0FBQUEsOEJBRUk7QUFBQSwrQkFDSTtBQUFRLG1CQUFTLG9DQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUtJO0FBQUssaUJBQVMsaUJBQWQ7QUFBQSxnQ0FDSTtBQUFBLGlDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUtRSyxXQUFXLENBQUNTLEdBQVosQ0FBZ0IsVUFBQWQsS0FBSztBQUFBLDhCQUNqQjtBQUFBLG9DQUNJO0FBQUEsc0NBQ0k7QUFBQSxzQ0FBV0EsS0FBSyxDQUFDZSxJQUFOLENBQVdDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUEsdUNBQVloQixLQUFLLENBQUNlLElBQU4sQ0FBV0UsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0k7QUFBQSx5Q0FBY2pCLEtBQUssQ0FBQ2tCLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISixlQUlJO0FBQUEsd0NBQWFsQixLQUFLLENBQUNtQixNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSko7QUFBQSxlQUFVbkIsS0FBSyxDQUFDVyxHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSjtBQUFBLDBCQURpQjtBQUFBLFNBQXJCLENBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0JIOztHQTNDUWhCLFc7VUFHVVEscUQ7OztLQUhWUixXO0FBNkNNQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL29yZGVyL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYWluQXBwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9NYWluQXBwJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyL0NvbnRlbnQnO1xuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cblxuZnVuY3Rpb24gRGV0YWlsT3JkZXIoKSB7XG4gICAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG4gICAgY29uc3QgeyBvcmRlciwgYXV0aCB9ID0gc3RhdGVcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IFtvcmRlckRldGFpbCwgc2V0T3JkZXJEZXRhaWxdID0gdXNlU3RhdGUoW10pXG4gICAgLy8gY29uc29sZS5sb2cob3JkZXIuY2FydC5sZW5ndGgpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FyciA9IG9yZGVyLmZpbHRlcihpdGVtID0+IGl0ZW0uX2lkID09PSByb3V0ZXIucXVlcnkuaWQpXG4gICAgICAgIHNldE9yZGVyRGV0YWlsKG5ld0FycilcbiAgICB9LCBbb3JkZXJdKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1haW5BcHA+XG4gICAgICAgICAgICA8Q29udGVudCB0aXRsZT1cIkRldGFpbCBPcmRlclwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BiZy1ibHVlLTQwMCBweC00IHB5LTEgdGV4dC13aGl0ZWB9ID5HbyBiYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtYXgtdy14bCBteS01YH0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlNoaXBwaW5nPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyRGV0YWlsLm1hcChvcmRlciA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e29yZGVyLl9pZH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TmFtZSA6IHtvcmRlci51c2VyLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW1haWwgOiB7b3JkZXIudXNlci5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BZGRyZXNzIDoge29yZGVyLmFkZHJlc3N9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TW9iaWxlIDoge29yZGVyLm1vYmlsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudD5cblxuICAgICAgICA8L01haW5BcHAgPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbE9yZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/order/[id].js\n");

/***/ })

})