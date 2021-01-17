webpackHotUpdate_N_E("pages/index",{

/***/ "./components/molecules/Notify.js":
/*!****************************************!*\
  !*** ./components/molecules/Notify.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/GlobalState */ \"./store/GlobalState.js\");\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/components/molecules/Notify.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Notify(_ref) {\n  _s();\n\n  var msg = _ref.msg;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_2__[\"DataContext\"]),\n      state = _useContext.state,\n      dispatch = _useContext.dispatch;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      width = _useState[0],\n      setWidth = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      intervalId = _useState2[0],\n      setIntervalId = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      exit = _useState3[0],\n      setExit = _useState3[1];\n\n  var handleStartTimer = function handleStartTimer() {\n    var id = setInterval(function () {\n      setWidth(function (prev) {\n        if (prev < 100) return prev + 0.5;\n        clearInterval(id);\n        return prev;\n      });\n    }, 10);\n    setIntervalId(id);\n  };\n\n  var handleCloseNotif = function handleCloseNotif() {\n    setExit(true);\n    setTimeout(function () {\n      dispatch({\n        type: \"NOTIFY\",\n        payload: {}\n      });\n    }, 400);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (width === 100) setExit(true);\n  }, [width]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    handleStartTimer();\n    return function () {\n      handleCloseNotif();\n    };\n  }, [exit]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    onClick: handleCloseNotif,\n    className: \" fixed top-2 right-2 w-72\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative notify shadow-md rounded-sm overflow-hidden bg-white mt-4 text-gray-700 \".concat(exit ? 'exit' : ''),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute right-0 p-1\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          className: \"w-4 h-4 \",\n          fill: \"none\",\n          stroke: \"currentColor\",\n          viewBox: \"0 0 24 24\",\n          xmlns: \"http://www.w3.org/2000/svg\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            strokeLinecap: \"round\",\n            strokeLinejoin: \"round\",\n            strokeWidth: 2,\n            d: \"M6 18L18 6M6 6l12 12\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 136\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"px-2 py-4\",\n        children: msg.err ? msg.err : null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"px-2 py-4\",\n        children: msg.err ? msg.err : null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"h-3 \".concat(msg.success ? \"bg-green-300\" : \"bg-red-400\"),\n        style: {\n          width: \"\".concat(width, \"%\")\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Notify, \"yU8Gawtc36Q6YhbBq/94eGfXzsw=\");\n\n_c = Notify;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notify);\n\nvar _c;\n\n$RefreshReg$(_c, \"Notify\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvTm90aWZ5LmpzPzMwMjUiXSwibmFtZXMiOlsiTm90aWZ5IiwibXNnIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZVN0YXRlIiwid2lkdGgiLCJzZXRXaWR0aCIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbElkIiwiZXhpdCIsInNldEV4aXQiLCJoYW5kbGVTdGFydFRpbWVyIiwiaWQiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjbGVhckludGVydmFsIiwiaGFuZGxlQ2xvc2VOb3RpZiIsInNldFRpbWVvdXQiLCJ0eXBlIiwicGF5bG9hZCIsInVzZUVmZmVjdCIsImVyciIsInN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULE9BQXlCO0FBQUE7O0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPOztBQUFBLG9CQUNPQyx3REFBVSxDQUFDQyw4REFBRCxDQURqQjtBQUFBLE1BQ2JDLEtBRGEsZUFDYkEsS0FEYTtBQUFBLE1BQ05DLFFBRE0sZUFDTkEsUUFETTs7QUFBQSxrQkFFS0Msc0RBQVEsQ0FBQyxDQUFELENBRmI7QUFBQSxNQUVkQyxLQUZjO0FBQUEsTUFFUEMsUUFGTzs7QUFBQSxtQkFHZUYsc0RBQVEsQ0FBQyxDQUFELENBSHZCO0FBQUEsTUFHZEcsVUFIYztBQUFBLE1BR0ZDLGFBSEU7O0FBQUEsbUJBSUdKLHNEQUFRLENBQUMsS0FBRCxDQUpYO0FBQUEsTUFJZEssSUFKYztBQUFBLE1BSVJDLE9BSlE7O0FBS3JCLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUUzQixRQUFNQyxFQUFFLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ3pCUCxjQUFRLENBQUMsVUFBQVEsSUFBSSxFQUFJO0FBQ2IsWUFBSUEsSUFBSSxHQUFHLEdBQVgsRUFBZ0IsT0FBT0EsSUFBSSxHQUFHLEdBQWQ7QUFFaEJDLHFCQUFhLENBQUNILEVBQUQsQ0FBYjtBQUNBLGVBQU9FLElBQVA7QUFDSCxPQUxPLENBQVI7QUFNSCxLQVBxQixFQU9uQixFQVBtQixDQUF0QjtBQVFBTixpQkFBYSxDQUFDSSxFQUFELENBQWI7QUFDSCxHQVhEOztBQWNBLE1BQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQk4sV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBTyxjQUFVLENBQUMsWUFBTTtBQUNiZCxjQUFRLENBQUM7QUFBRWUsWUFBSSxFQUFFLFFBQVI7QUFBa0JDLGVBQU8sRUFBRTtBQUEzQixPQUFELENBQVI7QUFDSCxLQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0gsR0FMRDs7QUFPQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSWYsS0FBSyxLQUFLLEdBQWQsRUFBbUJLLE9BQU8sQ0FBQyxJQUFELENBQVA7QUFDdEIsR0FGUSxFQUVOLENBQUNMLEtBQUQsQ0FGTSxDQUFUO0FBSUFlLHlEQUFTLENBQUMsWUFBTTtBQUNaVCxvQkFBZ0I7QUFDaEIsV0FBTyxZQUFNO0FBQ1RLLHNCQUFnQjtBQUNuQixLQUZEO0FBR0gsR0FMUSxFQUtOLENBQUNQLElBQUQsQ0FMTSxDQUFUO0FBT0Esc0JBQ0k7QUFBSyxXQUFPLEVBQUVPLGdCQUFkO0FBQWdDLGFBQVMsRUFBQywyQkFBMUM7QUFBQSwyQkFDSTtBQUFLLGVBQVMsNkZBQXNGUCxJQUFJLEdBQUcsTUFBSCxHQUFZLEVBQXRHLENBQWQ7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUEwQixjQUFJLEVBQUMsTUFBL0I7QUFBc0MsZ0JBQU0sRUFBQyxjQUE3QztBQUE0RCxpQkFBTyxFQUFDLFdBQXBFO0FBQWdGLGVBQUssRUFBQyw0QkFBdEY7QUFBQSxpQ0FBbUg7QUFBTSx5QkFBYSxFQUFDLE9BQXBCO0FBQTRCLDBCQUFjLEVBQUMsT0FBM0M7QUFBbUQsdUJBQVcsRUFBRSxDQUFoRTtBQUFtRSxhQUFDLEVBQUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBRyxpQkFBUyxFQUFDLFdBQWI7QUFBQSxrQkFBMEJWLEdBQUcsQ0FBQ3NCLEdBQUosR0FBVXRCLEdBQUcsQ0FBQ3NCLEdBQWQsR0FBb0I7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBS0k7QUFBRyxpQkFBUyxFQUFDLFdBQWI7QUFBQSxrQkFBMEJ0QixHQUFHLENBQUNzQixHQUFKLEdBQVV0QixHQUFHLENBQUNzQixHQUFkLEdBQW9CO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixlQU1JO0FBQUssaUJBQVMsZ0JBQVN0QixHQUFHLENBQUN1QixPQUFKLGdDQUFULENBQWQ7QUFBc0UsYUFBSyxFQUFFO0FBQUVqQixlQUFLLFlBQUtBLEtBQUw7QUFBUDtBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0dBakRRUCxNOztLQUFBQSxNO0FBbURNQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbW9sZWN1bGVzL05vdGlmeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XG5cbmZ1bmN0aW9uIE5vdGlmeSh7IG1zZyB9KSB7XG4gICAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXG4gICAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtpbnRlcnZhbElkLCBzZXRJbnRlcnZhbElkXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2V4aXQsIHNldEV4aXRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgaGFuZGxlU3RhcnRUaW1lciA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHNldFdpZHRoKHByZXYgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2IDwgMTAwKSByZXR1cm4gcHJldiArIDAuNTtcblxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCAxMCk7XG4gICAgICAgIHNldEludGVydmFsSWQoaWQpXG4gICAgfVxuXG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZU5vdGlmID0gKCkgPT4ge1xuICAgICAgICBzZXRFeGl0KHRydWUpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIk5PVElGWVwiLCBwYXlsb2FkOiB7fSB9KVxuICAgICAgICB9LCA0MDApO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh3aWR0aCA9PT0gMTAwKSBzZXRFeGl0KHRydWUpXG4gICAgfSwgW3dpZHRoXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBoYW5kbGVTdGFydFRpbWVyKClcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZUNsb3NlTm90aWYoKVxuICAgICAgICB9XG4gICAgfSwgW2V4aXRdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVDbG9zZU5vdGlmfSBjbGFzc05hbWU9XCIgZml4ZWQgdG9wLTIgcmlnaHQtMiB3LTcyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIG5vdGlmeSBzaGFkb3ctbWQgcm91bmRlZC1zbSBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgbXQtNCB0ZXh0LWdyYXktNzAwICR7ZXhpdCA/ICdleGl0JyA6ICcnfWB9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy00IGgtNCBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB4LTIgcHktNFwiPnttc2cuZXJyID8gbXNnLmVyciA6IG51bGx9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB4LTIgcHktNFwiPnttc2cuZXJyID8gbXNnLmVyciA6IG51bGx9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaC0zICR7bXNnLnN1Y2Nlc3MgPyBgYmctZ3JlZW4tMzAwYCA6IGBiZy1yZWQtNDAwYH1gfSBzdHlsZT17eyB3aWR0aDogYCR7d2lkdGh9JWAgfX0gPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2ID5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZnk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/molecules/Notify.js\n");

/***/ })

})