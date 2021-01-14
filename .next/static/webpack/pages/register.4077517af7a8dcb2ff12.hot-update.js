webpackHotUpdate_N_E("pages/register",{

/***/ "./components/molecules/Notify.js":
/*!****************************************!*\
  !*** ./components/molecules/Notify.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/GlobalState */ \"./store/GlobalState.js\");\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/components/molecules/Notify.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Notify(_ref) {\n  _s();\n\n  var msg = _ref.msg;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_2__[\"DataContext\"]),\n      state = _useContext.state,\n      dispatch = _useContext.dispatch;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      width = _useState[0],\n      setWidth = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      intervalId = _useState2[0],\n      setIntervalId = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      exit = _useState3[0],\n      setExit = _useState3[1];\n\n  var handleStartTimer = function handleStartTimer() {\n    var id = setInterval(function () {\n      setWidth(function (prev) {\n        if (prev < 100) return prev + 0.5;\n        clearInterval(id);\n        return prev;\n      });\n    }, 5);\n    setIntervalId(id);\n  };\n\n  var handleCloseNotif = function handleCloseNotif() {\n    setExit(true);\n    setTimeout(function () {\n      dispatch({\n        type: \"NOTIFY\",\n        payload: {}\n      });\n    }, 400);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleStartTimer();\n    return function () {\n      handleCloseNotif();\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    onClick: handleCloseNotif,\n    className: \" fixed top-2 right-2 w-72\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"notify shadow-md rounded-sm overflow-hidden mt-4 text-gray-700 \".concat(exit ? 'exit' : ''),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"px-2 py-4\",\n        children: msg ? msg.err : msg.success\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"h-3 \".concat(msg.success ? \"bg-green-300\" : \"bg-red-400\"),\n        style: {\n          width: \"\".concat(width, \"%\")\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Notify, \"gQN1D7vhnowa1WbV7IlxNLAqUuw=\");\n\n_c = Notify;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notify);\n\nvar _c;\n\n$RefreshReg$(_c, \"Notify\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTm90aWZ5LmpzPzMwMjUiXSwibmFtZXMiOlsiTm90aWZ5IiwibXNnIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZVN0YXRlIiwid2lkdGgiLCJzZXRXaWR0aCIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbElkIiwiZXhpdCIsInNldEV4aXQiLCJoYW5kbGVTdGFydFRpbWVyIiwiaWQiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjbGVhckludGVydmFsIiwiaGFuZGxlQ2xvc2VOb3RpZiIsInNldFRpbWVvdXQiLCJ0eXBlIiwicGF5bG9hZCIsInVzZUVmZmVjdCIsImVyciIsInN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULE9BQXlCO0FBQUE7O0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPOztBQUFBLG9CQUNPQyx3REFBVSxDQUFDQyw4REFBRCxDQURqQjtBQUFBLE1BQ2JDLEtBRGEsZUFDYkEsS0FEYTtBQUFBLE1BQ05DLFFBRE0sZUFDTkEsUUFETTs7QUFBQSxrQkFFS0Msc0RBQVEsQ0FBQyxDQUFELENBRmI7QUFBQSxNQUVkQyxLQUZjO0FBQUEsTUFFUEMsUUFGTzs7QUFBQSxtQkFHZUYsc0RBQVEsQ0FBQyxDQUFELENBSHZCO0FBQUEsTUFHZEcsVUFIYztBQUFBLE1BR0ZDLGFBSEU7O0FBQUEsbUJBSUdKLHNEQUFRLENBQUMsS0FBRCxDQUpYO0FBQUEsTUFJZEssSUFKYztBQUFBLE1BSVJDLE9BSlE7O0FBS3JCLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUUzQixRQUFNQyxFQUFFLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ3pCUCxjQUFRLENBQUMsVUFBQVEsSUFBSSxFQUFJO0FBQ2IsWUFBSUEsSUFBSSxHQUFHLEdBQVgsRUFBZ0IsT0FBT0EsSUFBSSxHQUFHLEdBQWQ7QUFFaEJDLHFCQUFhLENBQUNILEVBQUQsQ0FBYjtBQUNBLGVBQU9FLElBQVA7QUFDSCxPQUxPLENBQVI7QUFNSCxLQVBxQixFQU9uQixDQVBtQixDQUF0QjtBQVNBTixpQkFBYSxDQUFDSSxFQUFELENBQWI7QUFDSCxHQVpEOztBQWVBLE1BQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQk4sV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBTyxjQUFVLENBQUMsWUFBTTtBQUNiZCxjQUFRLENBQUM7QUFBRWUsWUFBSSxFQUFFLFFBQVI7QUFBa0JDLGVBQU8sRUFBRTtBQUEzQixPQUFELENBQVI7QUFDSCxLQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0gsR0FMRDs7QUFPQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pULG9CQUFnQjtBQUNoQixXQUFPLFlBQU07QUFDVEssc0JBQWdCO0FBQ25CLEtBRkQ7QUFHSCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0k7QUFBSyxXQUFPLEVBQUVBLGdCQUFkO0FBQWdDLGFBQVMsRUFBQywyQkFBMUM7QUFBQSwyQkFDSTtBQUFLLGVBQVMsMkVBQW9FUCxJQUFJLEdBQUcsTUFBSCxHQUFZLEVBQXBGLENBQWQ7QUFBQSw4QkFDSTtBQUFHLGlCQUFTLEVBQUMsV0FBYjtBQUFBLGtCQUEwQlYsR0FBRyxHQUFHQSxHQUFHLENBQUNzQixHQUFQLEdBQWF0QixHQUFHLENBQUN1QjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLGdCQUFTdkIsR0FBRyxDQUFDdUIsT0FBSixnQ0FBVCxDQUFkO0FBQXNFLGFBQUssRUFBRTtBQUFFakIsZUFBSyxZQUFLQSxLQUFMO0FBQVA7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIOztHQTFDUVAsTTs7S0FBQUEsTTtBQTRDTUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9Ob3RpZnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvR2xvYmFsU3RhdGUnO1xuXG5mdW5jdGlvbiBOb3RpZnkoeyBtc2cgfSkge1xuICAgIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxuICAgIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbaW50ZXJ2YWxJZCwgc2V0SW50ZXJ2YWxJZF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtleGl0LCBzZXRFeGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0VGltZXIgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRXaWR0aChwcmV2ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJldiA8IDEwMCkgcmV0dXJuIHByZXYgKyAwLjU7XG5cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGlkKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgNSk7XG5cbiAgICAgICAgc2V0SW50ZXJ2YWxJZChpZClcbiAgICB9XG5cblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlTm90aWYgPSAoKSA9PiB7XG4gICAgICAgIHNldEV4aXQodHJ1ZSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiTk9USUZZXCIsIHBheWxvYWQ6IHt9IH0pXG4gICAgICAgIH0sIDQwMCk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaGFuZGxlU3RhcnRUaW1lcigpXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVDbG9zZU5vdGlmKClcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVDbG9zZU5vdGlmfSBjbGFzc05hbWU9XCIgZml4ZWQgdG9wLTIgcmlnaHQtMiB3LTcyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5vdGlmeSBzaGFkb3ctbWQgcm91bmRlZC1zbSBvdmVyZmxvdy1oaWRkZW4gbXQtNCB0ZXh0LWdyYXktNzAwICR7ZXhpdCA/ICdleGl0JyA6ICcnfWB9ID5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweC0yIHB5LTRcIj57bXNnID8gbXNnLmVyciA6IG1zZy5zdWNjZXNzfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGgtMyAke21zZy5zdWNjZXNzID8gYGJnLWdyZWVuLTMwMGAgOiBgYmctcmVkLTQwMGB9YH0gc3R5bGU9e3sgd2lkdGg6IGAke3dpZHRofSVgIH19ID48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2RpdiA+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZ5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/molecules/Notify.js\n");

/***/ })

})