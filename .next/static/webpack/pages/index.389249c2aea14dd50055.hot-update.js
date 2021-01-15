webpackHotUpdate_N_E("pages/index",{

/***/ "./components/organisme/Navbar.js":
/*!****************************************!*\
  !*** ./components/organisme/Navbar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _molecules_Navbar_Navbrand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/Navbar/Navbrand */ \"./components/molecules/Navbar/Navbrand.js\");\n/* harmony import */ var _molecules_Navbar_NavMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../molecules/Navbar/NavMenu */ \"./components/molecules/Navbar/NavMenu.js\");\n/* harmony import */ var _molecules_Navbar_NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../molecules/Navbar/NavItem */ \"./components/molecules/Navbar/NavItem.js\");\n/* harmony import */ var _molecules_Navbar_NavLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../molecules/Navbar/NavLink */ \"./components/molecules/Navbar/NavLink.js\");\n/* harmony import */ var _atoms_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../atoms/Image */ \"./components/atoms/Image.js\");\n/* harmony import */ var _icons_IcCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/IcCart */ \"./components/icons/IcCart.js\");\n/* harmony import */ var _icons_IcUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icons/IcUser */ \"./components/icons/IcUser.js\");\n/* harmony import */ var _molecules_Navbar_WrapNavbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../molecules/Navbar/WrapNavbar */ \"./components/molecules/Navbar/WrapNavbar.js\");\n/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/GlobalState */ \"./store/GlobalState.js\");\n\n\n\nvar _jsxFileName = \"/home/zuares/Documents/Project/ZCommerce/components/organisme/Navbar.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Navbar(_ref) {\n  _s();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_11__[\"DataContext\"]),\n      auth = _useContext.state.auth;\n\n  console.log(auth);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_molecules_Navbar_WrapNavbar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_molecules_Navbar_Navbrand__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: \"ZCommerce\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_molecules_Navbar_NavMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_molecules_Navbar_NavItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_molecules_Navbar_NavLink__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          href: \"/cart\",\n          className: \"flex gap-1\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_icons_IcCart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            className: \"w-5 h-5\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 25\n          }, this), \"Cart\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_molecules_Navbar_NavItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: auth.access_token ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_molecules_Navbar_NavLink__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          href: \"/profile\",\n          className: \"flex gap-1\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_atoms_Image__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            src: auth.user.avatar,\n            className: \"w-5 object-cover\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 33\n          }, this), auth.user.name]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 29\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_molecules_Navbar_NavLink__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          href: \"/login\",\n          className: \"flex gap-1\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_icons_IcUser__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            className: \"w-5 h-5\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 33\n          }, this), \"Signin\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 29\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Navbar, \"J5eaw442pqVyF74fr4Bts/G8K/Q=\");\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbWUvTmF2YmFyLmpzPzYyODgiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiYXV0aCIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImFjY2Vzc190b2tlbiIsInVzZXIiLCJhdmF0YXIiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULE9BQXFCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ1dDLHdEQUFVLENBQUNDLCtEQUFELENBRHJCO0FBQUEsTUFDQUMsSUFEQSxlQUNUQyxLQURTLENBQ0FELElBREE7O0FBRWpCRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUNBLHNCQUNJLHFFQUFDLHFFQUFEO0FBQUEsNEJBQ0kscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLGlFQUFEO0FBQUEsOEJBQ0kscUVBQUMsaUVBQUQ7QUFBQSwrQkFDSSxxRUFBQyxpRUFBRDtBQUFTLGNBQUksRUFBQyxPQUFkO0FBQXNCLG1CQUFTLEVBQUMsWUFBaEM7QUFBQSxrQ0FDSSxxRUFBQyxxREFBRDtBQUFRLHFCQUFTLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFPSSxxRUFBQyxpRUFBRDtBQUFBLGtCQUdRQSxJQUFJLENBQUNJLFlBQUwsZ0JBQ0kscUVBQUMsaUVBQUQ7QUFBUyxjQUFJLEVBQUMsVUFBZDtBQUF5QixtQkFBUyxFQUFDLFlBQW5DO0FBQUEsa0NBQ0kscUVBQUMsb0RBQUQ7QUFBTyxlQUFHLEVBQUVKLElBQUksQ0FBQ0ssSUFBTCxDQUFVQyxNQUF0QjtBQUE4QixxQkFBUztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBRUtOLElBQUksQ0FBQ0ssSUFBTCxDQUFVRSxJQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixnQkFLSSxxRUFBQyxpRUFBRDtBQUFTLGNBQUksRUFBQyxRQUFkO0FBQXVCLG1CQUFTLEVBQUMsWUFBakM7QUFBQSxrQ0FDSSxxRUFBQyxxREFBRDtBQUFRLHFCQUFTLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyQkg7O0dBOUJRVixNOztLQUFBQSxNO0FBZ0NNQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvb3JnYW5pc21lL05hdmJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJyYW5kIGZyb20gJy4uL21vbGVjdWxlcy9OYXZiYXIvTmF2YnJhbmQnO1xuaW1wb3J0IE5hdk1lbnUgZnJvbSAnLi4vbW9sZWN1bGVzL05hdmJhci9OYXZNZW51JztcbmltcG9ydCBOYXZJdGVtIGZyb20gJy4uL21vbGVjdWxlcy9OYXZiYXIvTmF2SXRlbSc7XG5pbXBvcnQgTmF2TGluayBmcm9tICcuLi9tb2xlY3VsZXMvTmF2YmFyL05hdkxpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL2F0b21zL0ltYWdlJztcbmltcG9ydCBJY0NhcnQgZnJvbSAnLi4vaWNvbnMvSWNDYXJ0JztcbmltcG9ydCBJY1VzZXIgZnJvbSAnLi4vaWNvbnMvSWNVc2VyJztcbmltcG9ydCBXcmFwTmF2YmFyIGZyb20gJy4uL21vbGVjdWxlcy9OYXZiYXIvV3JhcE5hdmJhcic7XG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcblxuZnVuY3Rpb24gTmF2YmFyKHsgfSkge1xuICAgIGNvbnN0IHsgc3RhdGU6IHsgYXV0aCB9IH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxuICAgIGNvbnNvbGUubG9nKGF1dGgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwTmF2YmFyPlxuICAgICAgICAgICAgPE5hdmJyYW5kPlpDb21tZXJjZTwvTmF2YnJhbmQ+XG4gICAgICAgICAgICA8TmF2TWVudT5cbiAgICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9jYXJ0XCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY0NhcnQgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FydFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICA8TmF2SXRlbT5cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoLmFjY2Vzc190b2tlbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9wcm9maWxlXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17YXV0aC51c2VyLmF2YXRhcn0gY2xhc3NOYW1lPXtgdy01IG9iamVjdC1jb3ZlcmB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdXRoLnVzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljVXNlciBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ25pblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDwvTmF2TWVudT5cbiAgICAgICAgPC9XcmFwTmF2YmFyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/organisme/Navbar.js\n");

/***/ })

})