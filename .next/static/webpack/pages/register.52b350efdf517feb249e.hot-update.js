webpackHotUpdate_N_E("pages/register",{

/***/ "./components/molecules/Notify.js":
/*!****************************************!*\
  !*** ./components/molecules/Notify.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/components/molecules/Notify.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Notify(_ref) {\n  _s();\n\n  var msg = _ref.msg;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      width = _useState[0],\n      setWidth = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      intervalId = _useState2[0],\n      setIntervalId = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      exit = _useState3[0],\n      setExit = _useState3[1];\n\n  console.log(width);\n\n  var handleStartTimer = function handleStartTimer() {\n    var id = setInterval(function () {\n      setWidth(function (prev) {\n        if (prev < 100) return prev + 0.5;\n        clearInterval(id);\n        return prev;\n      });\n    }, 5);\n    setIntervalId(id);\n  };\n\n  var handleCloseNotif = function handleCloseNotif() {\n    setExit(true);\n    setTimeout(function () {}, 400);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleStartTimer();\n    return function () {\n      handleCloseNotif();\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    onClick: handleCloseNotif,\n    className: \" fixed top-2 right-2 w-72\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"notify shadow-md rounded-sm overflow-hidden mt-4 text-gray-700\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"px-2 py-4\",\n        children: msg ? msg.err : msg.success\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"h-3 \".concat(msg.success ? \"bg-green-300\" : \"bg-red-400\"),\n        style: {\n          width: \"\".concat(width, \"%\")\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Notify, \"dYPwH8v0xl8iL5Mg5fmuhuoFAQQ=\");\n\n_c = Notify;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notify);\n\nvar _c;\n\n$RefreshReg$(_c, \"Notify\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTm90aWZ5LmpzPzMwMjUiXSwibmFtZXMiOlsiTm90aWZ5IiwibXNnIiwidXNlU3RhdGUiLCJ3aWR0aCIsInNldFdpZHRoIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsSWQiLCJleGl0Iiwic2V0RXhpdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdGFydFRpbWVyIiwiaWQiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjbGVhckludGVydmFsIiwiaGFuZGxlQ2xvc2VOb3RpZiIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJlcnIiLCJzdWNjZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsTUFBVCxPQUF5QjtBQUFBOztBQUFBLE1BQVBDLEdBQU8sUUFBUEEsR0FBTzs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxDQUFELENBRGI7QUFBQSxNQUNkQyxLQURjO0FBQUEsTUFDUEMsUUFETzs7QUFBQSxtQkFFZUYsc0RBQVEsQ0FBQyxDQUFELENBRnZCO0FBQUEsTUFFZEcsVUFGYztBQUFBLE1BRUZDLGFBRkU7O0FBQUEsbUJBR0dKLHNEQUFRLENBQUMsS0FBRCxDQUhYO0FBQUEsTUFHZEssSUFIYztBQUFBLE1BR1JDLE9BSFE7O0FBSXJCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsS0FBWjs7QUFDQSxNQUFNUSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFFM0IsUUFBTUMsRUFBRSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUN6QlQsY0FBUSxDQUFDLFVBQUFVLElBQUksRUFBSTtBQUNiLFlBQUlBLElBQUksR0FBRyxHQUFYLEVBQWdCLE9BQU9BLElBQUksR0FBRyxHQUFkO0FBRWhCQyxxQkFBYSxDQUFDSCxFQUFELENBQWI7QUFDQSxlQUFPRSxJQUFQO0FBQ0gsT0FMTyxDQUFSO0FBTUgsS0FQcUIsRUFPbkIsQ0FQbUIsQ0FBdEI7QUFTQVIsaUJBQWEsQ0FBQ00sRUFBRCxDQUFiO0FBQ0gsR0FaRDs7QUFlQSxNQUFNSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0JSLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDQVMsY0FBVSxDQUFDLFlBQU0sQ0FFaEIsQ0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdILEdBTEQ7O0FBT0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaUCxvQkFBZ0I7QUFDaEIsV0FBTyxZQUFNO0FBQ1RLLHNCQUFnQjtBQUNuQixLQUZEO0FBR0gsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLHNCQUNJO0FBQUssV0FBTyxFQUFFQSxnQkFBZDtBQUFnQyxhQUFTLEVBQUMsMkJBQTFDO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLGtFQUFkO0FBQUEsOEJBQ0k7QUFBRyxpQkFBUyxFQUFDLFdBQWI7QUFBQSxrQkFBMEJmLEdBQUcsR0FBR0EsR0FBRyxDQUFDa0IsR0FBUCxHQUFhbEIsR0FBRyxDQUFDbUI7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSyxpQkFBUyxnQkFBU25CLEdBQUcsQ0FBQ21CLE9BQUosZ0NBQVQsQ0FBZDtBQUFzRSxhQUFLLEVBQUU7QUFBRWpCLGVBQUssWUFBS0EsS0FBTDtBQUFQO0FBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSDs7R0ExQ1FILE07O0tBQUFBLE07QUE0Q01BLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tb2xlY3VsZXMvTm90aWZ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIE5vdGlmeSh7IG1zZyB9KSB7XG4gICAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtpbnRlcnZhbElkLCBzZXRJbnRlcnZhbElkXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2V4aXQsIHNldEV4aXRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc29sZS5sb2cod2lkdGgpO1xuICAgIGNvbnN0IGhhbmRsZVN0YXJ0VGltZXIgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRXaWR0aChwcmV2ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJldiA8IDEwMCkgcmV0dXJuIHByZXYgKyAwLjU7XG5cbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGlkKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgNSk7XG5cbiAgICAgICAgc2V0SW50ZXJ2YWxJZChpZClcbiAgICB9XG5cblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlTm90aWYgPSAoKSA9PiB7XG4gICAgICAgIHNldEV4aXQodHJ1ZSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgfSwgNDAwKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBoYW5kbGVTdGFydFRpbWVyKClcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZUNsb3NlTm90aWYoKVxuICAgICAgICB9XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUNsb3NlTm90aWZ9IGNsYXNzTmFtZT1cIiBmaXhlZCB0b3AtMiByaWdodC0yIHctNzJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbm90aWZ5IHNoYWRvdy1tZCByb3VuZGVkLXNtIG92ZXJmbG93LWhpZGRlbiBtdC00IHRleHQtZ3JheS03MDBgfSA+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHgtMiBweS00XCI+e21zZyA/IG1zZy5lcnIgOiBtc2cuc3VjY2Vzc308L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoLTMgJHttc2cuc3VjY2VzcyA/IGBiZy1ncmVlbi0zMDBgIDogYGJnLXJlZC00MDBgfWB9IHN0eWxlPXt7IHdpZHRoOiBgJHt3aWR0aH0lYCB9fSA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXYgPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmeTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/molecules/Notify.js\n");

/***/ })

})