webpackHotUpdate_N_E("pages/profile",{

/***/ "./utils/ImageUpload.js":
/*!******************************!*\
  !*** ./utils/ImageUpload.js ***!
  \******************************/
/*! exports provided: ImageUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageUpload\", function() { return ImageUpload; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar ImageUpload = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(img) {\n    var imgArr, _iterator, _step, item, formData, res, data;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            imgArr = [];\n            _iterator = _createForOfIteratorHelper(img);\n            _context.prev = 2;\n\n            _iterator.s();\n\n          case 4:\n            if ((_step = _iterator.n()).done) {\n              _context.next = 19;\n              break;\n            }\n\n            item = _step.value;\n            formData = new FormData();\n            formData.append(\"file\", item);\n            formData.append(\"upload_preset\", \"zCommerce\");\n            formData.append(\"cloud_name\", \"dporkqhiw\");\n            _context.next = 12;\n            return fetch(\"https://api.cloudinary.com/v1_1/dporkqhiw/image/upload\", {\n              method: \"POST\",\n              body: formData\n            });\n\n          case 12:\n            res = _context.sent;\n            _context.next = 15;\n            return res.json();\n\n          case 15:\n            data = _context.sent;\n            console.log(data); // imgArr.push({ public_id: data.public_id, url: data.secure_url })\n\n          case 17:\n            _context.next = 4;\n            break;\n\n          case 19:\n            _context.next = 24;\n            break;\n\n          case 21:\n            _context.prev = 21;\n            _context.t0 = _context[\"catch\"](2);\n\n            _iterator.e(_context.t0);\n\n          case 24:\n            _context.prev = 24;\n\n            _iterator.f();\n\n            return _context.finish(24);\n\n          case 27:\n            return _context.abrupt(\"return\", imgArr);\n\n          case 28:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 21, 24, 27]]);\n  }));\n\n  return function ImageUpload(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n_c = ImageUpload;\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageUpload\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvSW1hZ2VVcGxvYWQuanM/MTgxNiJdLCJuYW1lcyI6WyJJbWFnZVVwbG9hZCIsImltZyIsImltZ0FyciIsIml0ZW0iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicHJvY2VzcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxXQUFXO0FBQUEsOExBQUcsaUJBQU9DLEdBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkMsa0JBRG1CLEdBQ1YsRUFEVTtBQUFBLG1EQUVKRCxHQUZJO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFWkUsZ0JBRlk7QUFHYkMsb0JBSGEsR0FHRixJQUFJQyxRQUFKLEVBSEU7QUFJbkJELG9CQUFRLENBQUNFLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0JILElBQXhCO0FBQ0FDLG9CQUFRLENBQUNFLE1BQVQsQ0FBZ0IsZUFBaEIsRUFBaUNDLFdBQWpDO0FBQ0FILG9CQUFRLENBQUNFLE1BQVQsQ0FBZ0IsWUFBaEIsRUFBOEJDLFdBQTlCO0FBTm1CO0FBQUEsbUJBUURDLEtBQUssQ0FBQ0Qsd0RBQUQsRUFBd0I7QUFDM0NFLG9CQUFNLEVBQUUsTUFEbUM7QUFFM0NDLGtCQUFJLEVBQUVOO0FBRnFDLGFBQXhCLENBUko7O0FBQUE7QUFRYk8sZUFSYTtBQUFBO0FBQUEsbUJBYUFBLEdBQUcsQ0FBQ0MsSUFBSixFQWJBOztBQUFBO0FBYWJDLGdCQWJhO0FBY25CQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFkbUIsQ0FlbkI7O0FBZm1CO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQSw2Q0FpQmhCWCxNQWpCZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWEYsV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQjtLQUFNQSxXIiwiZmlsZSI6Ii4vdXRpbHMvSW1hZ2VVcGxvYWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBJbWFnZVVwbG9hZCA9IGFzeW5jIChpbWcpID0+IHtcbiAgICBsZXQgaW1nQXJyID0gW11cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaW1nKSB7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBpdGVtKVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsIHByb2Nlc3MuZW52LkNMT1VEX1VQREFURV9QUkVTRVQpXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImNsb3VkX25hbWVcIiwgcHJvY2Vzcy5lbnYuQ0xPVURfTkFNRSlcblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5DTE9VRF9BUEksIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAvLyBpbWdBcnIucHVzaCh7IHB1YmxpY19pZDogZGF0YS5wdWJsaWNfaWQsIHVybDogZGF0YS5zZWN1cmVfdXJsIH0pXG4gICAgfVxuICAgIHJldHVybiBpbWdBcnJcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/ImageUpload.js\n");

/***/ })

})