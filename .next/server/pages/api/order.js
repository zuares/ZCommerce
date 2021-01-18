module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/order/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/userModel */ \"./models/userModel.js\");\n\n\n\nconst auth = async (req, res) => {\n  const token = req.headers.authorization;\n  if (!token) return res.status(400).json({\n    err: 'Invalid Auth'\n  });\n  const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, \"qK63QNUD3A2YkG7JeemQpGnaYURwePsrys8rnHtg\");\n  if (!decoded) return res.status(400).json({\n    err: 'Invalid Auth'\n  });\n  const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n    _id: decoded.id\n  });\n  return {\n    id: user._id,\n    role: user.role,\n    root: user.root\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL2F1dGguanM/MTRjMiJdLCJuYW1lcyI6WyJhdXRoIiwicmVxIiwicmVzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJkZWNvZGVkIiwiand0IiwidmVyaWZ5IiwicHJvY2VzcyIsInVzZXIiLCJVc2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwicm9sZSIsInJvb3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQzdCLFFBQU1DLEtBQUssR0FBR0YsR0FBRyxDQUFDRyxPQUFKLENBQVlDLGFBQTFCO0FBQ0EsTUFBSSxDQUFDRixLQUFMLEVBQVksT0FBT0QsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsT0FBRyxFQUFFO0FBQVAsR0FBckIsQ0FBUDtBQUVaLFFBQU1DLE9BQU8sR0FBR0MsbURBQUcsQ0FBQ0MsTUFBSixDQUFXUixLQUFYLEVBQWtCUywwQ0FBbEIsQ0FBaEI7QUFDQSxNQUFJLENBQUNILE9BQUwsRUFBYyxPQUFPUCxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxPQUFHLEVBQUU7QUFBUCxHQUFyQixDQUFQO0FBRWQsUUFBTUssSUFBSSxHQUFHLE1BQU1DLHlEQUFJLENBQUNDLE9BQUwsQ0FBYTtBQUFFQyxPQUFHLEVBQUVQLE9BQU8sQ0FBQ1E7QUFBZixHQUFiLENBQW5CO0FBQ0EsU0FBTztBQUFFQSxNQUFFLEVBQUVKLElBQUksQ0FBQ0csR0FBWDtBQUFnQkUsUUFBSSxFQUFFTCxJQUFJLENBQUNLLElBQTNCO0FBQWlDQyxRQUFJLEVBQUVOLElBQUksQ0FBQ007QUFBNUMsR0FBUDtBQUNILENBVEQ7O0FBWWVuQixtRUFBZiIsImZpbGUiOiIuL21pZGRsZXdhcmUvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXJNb2RlbCdcblxuY29uc3QgYXV0aCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvblxuICAgIGlmICghdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycjogJ0ludmFsaWQgQXV0aCcgfSlcblxuICAgIGNvbnN0IGRlY29kZWQgPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVUKVxuICAgIGlmICghZGVjb2RlZCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyOiAnSW52YWxpZCBBdXRoJyB9KVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IF9pZDogZGVjb2RlZC5pZCB9KVxuICAgIHJldHVybiB7IGlkOiB1c2VyLl9pZCwgcm9sZTogdXNlci5yb2xlLCByb290OiB1c2VyLnJvb3QgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./middleware/auth.js\n");

/***/ }),

/***/ "./models/orderModel.js":
/*!******************************!*\
  !*** ./models/orderModel.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst orderShcema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  user: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Types.ObjectId,\n    ref: 'user'\n  },\n  address: String,\n  mobile: String,\n  cart: Array,\n  total: Number,\n  delivered: {\n    type: Boolean,\n    default: false\n  }\n}, {\n  timestamps: true\n});\nlet Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.order || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('order', orderShcema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dataset);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvb3JkZXJNb2RlbC5qcz9kMGE2Il0sIm5hbWVzIjpbIm9yZGVyU2hjZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJ1c2VyIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJhZGRyZXNzIiwiU3RyaW5nIiwibW9iaWxlIiwiY2FydCIsIkFycmF5IiwidG90YWwiLCJOdW1iZXIiLCJkZWxpdmVyZWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJEYXRhc2V0IiwibW9kZWxzIiwib3JkZXIiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxXQUFXLEdBQUcsSUFBSUMsK0NBQVEsQ0FBQ0MsTUFBYixDQUFvQjtBQUNwQ0MsTUFBSSxFQUFFO0FBQ0ZDLFFBQUksRUFBRUgsK0NBQVEsQ0FBQ0ksS0FBVCxDQUFlQyxRQURuQjtBQUVGQyxPQUFHLEVBQUU7QUFGSCxHQUQ4QjtBQUtwQ0MsU0FBTyxFQUFFQyxNQUwyQjtBQU1wQ0MsUUFBTSxFQUFFRCxNQU40QjtBQU9wQ0UsTUFBSSxFQUFFQyxLQVA4QjtBQVFwQ0MsT0FBSyxFQUFFQyxNQVI2QjtBQVNwQ0MsV0FBUyxFQUFFO0FBQ1BYLFFBQUksRUFBRVksT0FEQztBQUVQQyxXQUFPLEVBQUU7QUFGRjtBQVR5QixDQUFwQixFQWFqQjtBQUNDQyxZQUFVLEVBQUU7QUFEYixDQWJpQixDQUFwQjtBQWlCQSxJQUFJQyxPQUFPLEdBQUdsQiwrQ0FBUSxDQUFDbUIsTUFBVCxDQUFnQkMsS0FBaEIsSUFBeUJwQiwrQ0FBUSxDQUFDcUIsS0FBVCxDQUFlLE9BQWYsRUFBd0J0QixXQUF4QixDQUF2QztBQUVlbUIsc0VBQWYiLCJmaWxlIjoiLi9tb2RlbHMvb3JkZXJNb2RlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IG9yZGVyU2hjZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgdXNlcjoge1xuICAgICAgICB0eXBlOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZCxcbiAgICAgICAgcmVmOiAndXNlcidcbiAgICB9LFxuICAgIGFkZHJlc3M6IFN0cmluZyxcbiAgICBtb2JpbGU6IFN0cmluZyxcbiAgICBjYXJ0OiBBcnJheSxcbiAgICB0b3RhbDogTnVtYmVyLFxuICAgIGRlbGl2ZXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG59LCB7XG4gICAgdGltZXN0YW1wczogdHJ1ZVxufSlcblxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMub3JkZXIgfHwgbW9uZ29vc2UubW9kZWwoJ29yZGVyJywgb3JkZXJTaGNlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/orderModel.js\n");

/***/ }),

/***/ "./models/productModel.js":
/*!********************************!*\
  !*** ./models/productModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  title: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  price: {\n    type: Number,\n    required: true,\n    trim: true\n  },\n  description: {\n    type: String,\n    required: true\n  },\n  content: {\n    type: String,\n    required: true\n  },\n  images: {\n    type: Array,\n    required: true\n  },\n  category: {\n    type: String,\n    required: true\n  },\n  checked: {\n    type: Boolean,\n    default: false\n  },\n  inStock: {\n    type: Number,\n    default: 0\n  },\n  sold: {\n    type: Number,\n    default: 0\n  }\n}, {\n  timestamps: true\n});\nconst Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.product || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('product', productSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dataset);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvcHJvZHVjdE1vZGVsLmpzPzcyMjUiXSwibmFtZXMiOlsicHJvZHVjdFNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwicHJpY2UiLCJOdW1iZXIiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJpbWFnZXMiLCJBcnJheSIsImNhdGVnb3J5IiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiaW5TdG9jayIsInNvbGQiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsInByb2R1Y3QiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxhQUFhLEdBQUcsSUFBSUMsK0NBQVEsQ0FBQ0MsTUFBYixDQUFvQjtBQUN0Q0MsT0FBSyxFQUFFO0FBQ0hDLFFBQUksRUFBRUMsTUFESDtBQUVIQyxZQUFRLEVBQUUsSUFGUDtBQUdIQyxRQUFJLEVBQUU7QUFISCxHQUQrQjtBQU10Q0MsT0FBSyxFQUFFO0FBQ0hKLFFBQUksRUFBRUssTUFESDtBQUVISCxZQUFRLEVBQUUsSUFGUDtBQUdIQyxRQUFJLEVBQUU7QUFISCxHQU4rQjtBQVd0Q0csYUFBVyxFQUFFO0FBQ1ROLFFBQUksRUFBRUMsTUFERztBQUVUQyxZQUFRLEVBQUU7QUFGRCxHQVh5QjtBQWV0Q0ssU0FBTyxFQUFFO0FBQ0xQLFFBQUksRUFBRUMsTUFERDtBQUVMQyxZQUFRLEVBQUU7QUFGTCxHQWY2QjtBQW1CdENNLFFBQU0sRUFBRTtBQUNKUixRQUFJLEVBQUVTLEtBREY7QUFFSlAsWUFBUSxFQUFFO0FBRk4sR0FuQjhCO0FBdUJ0Q1EsVUFBUSxFQUFFO0FBQ05WLFFBQUksRUFBRUMsTUFEQTtBQUVOQyxZQUFRLEVBQUU7QUFGSixHQXZCNEI7QUEyQnRDUyxTQUFPLEVBQUU7QUFDTFgsUUFBSSxFQUFFWSxPQUREO0FBRUxDLFdBQU8sRUFBRTtBQUZKLEdBM0I2QjtBQStCdENDLFNBQU8sRUFBRTtBQUNMZCxRQUFJLEVBQUVLLE1BREQ7QUFFTFEsV0FBTyxFQUFFO0FBRkosR0EvQjZCO0FBbUN0Q0UsTUFBSSxFQUFFO0FBQ0ZmLFFBQUksRUFBRUssTUFESjtBQUVGUSxXQUFPLEVBQUU7QUFGUDtBQW5DZ0MsQ0FBcEIsRUF1Q25CO0FBQ0NHLFlBQVUsRUFBRTtBQURiLENBdkNtQixDQUF0QjtBQTJDQSxNQUFNQyxPQUFPLEdBQUdwQiwrQ0FBUSxDQUFDcUIsTUFBVCxDQUFnQkMsT0FBaEIsSUFBMkJ0QiwrQ0FBUSxDQUFDdUIsS0FBVCxDQUFlLFNBQWYsRUFBMEJ4QixhQUExQixDQUEzQztBQUVlcUIsc0VBQWYiLCJmaWxlIjoiLi9tb2RlbHMvcHJvZHVjdE1vZGVsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBwcm9kdWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgdGl0bGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdHJpbTogdHJ1ZVxuICAgIH0sXG4gICAgcHJpY2U6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBpbWFnZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGNoZWNrZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBpblN0b2NrOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIHNvbGQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG59LCB7XG4gICAgdGltZXN0YW1wczogdHJ1ZVxufSlcblxuY29uc3QgRGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy5wcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdwcm9kdWN0JywgcHJvZHVjdFNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/productModel.js\n");

/***/ }),

/***/ "./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  role: {\n    type: String,\n    required: true,\n    default: 'user'\n  },\n  root: {\n    type: Boolean,\n    required: true,\n    default: false\n  },\n  avatar: {\n    type: String,\n    required: true,\n    default: `https://res.cloudinary.com/dporkqhiw/image/upload/v1610053935/samples/people/smiling-man.jpg`\n  }\n}, {\n  timestamps: true\n});\nconst Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.user || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(`user`, userSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dataset);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvdXNlck1vZGVsLmpzP2MwNGEiXSwibmFtZXMiOlsidXNlclNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJyb2xlIiwiZGVmYXVsdCIsInJvb3QiLCJCb29sZWFuIiwiYXZhdGFyIiwidGltZXN0YW1wcyIsIkRhdGFzZXQiLCJtb2RlbHMiLCJ1c2VyIiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsVUFBVSxHQUFHLElBQUlDLCtDQUFRLENBQUNDLE1BQWIsQ0FBb0I7QUFDbkNDLE1BQUksRUFBRTtBQUNGQyxRQUFJLEVBQUVDLE1BREo7QUFFRkMsWUFBUSxFQUFFO0FBRlIsR0FENkI7QUFNbkNDLE9BQUssRUFBRTtBQUNISCxRQUFJLEVBQUVDLE1BREg7QUFFSEMsWUFBUSxFQUFFLElBRlA7QUFHSEUsVUFBTSxFQUFFO0FBSEwsR0FONEI7QUFZbkNDLFVBQVEsRUFBRTtBQUNOTCxRQUFJLEVBQUVDLE1BREE7QUFFTkMsWUFBUSxFQUFFO0FBRkosR0FaeUI7QUFpQm5DSSxNQUFJLEVBQUU7QUFDRk4sUUFBSSxFQUFFQyxNQURKO0FBRUZDLFlBQVEsRUFBRSxJQUZSO0FBR0ZLLFdBQU8sRUFBRTtBQUhQLEdBakI2QjtBQXVCbkNDLE1BQUksRUFBRTtBQUNGUixRQUFJLEVBQUVTLE9BREo7QUFFRlAsWUFBUSxFQUFFLElBRlI7QUFHRkssV0FBTyxFQUFFO0FBSFAsR0F2QjZCO0FBNkJuQ0csUUFBTSxFQUFFO0FBQ0pWLFFBQUksRUFBRUMsTUFERjtBQUVKQyxZQUFRLEVBQUUsSUFGTjtBQUdKSyxXQUFPLEVBQUc7QUFITjtBQTdCMkIsQ0FBcEIsRUFvQ2Y7QUFDSUksWUFBVSxFQUFFO0FBRGhCLENBcENlLENBQW5CO0FBeUNBLE1BQU1DLE9BQU8sR0FBR2YsK0NBQVEsQ0FBQ2dCLE1BQVQsQ0FBZ0JDLElBQWhCLElBQXdCakIsK0NBQVEsQ0FBQ2tCLEtBQVQsQ0FBZ0IsTUFBaEIsRUFBdUJuQixVQUF2QixDQUF4QztBQUVlZ0Isc0VBQWYiLCJmaWxlIjoiLi9tb2RlbHMvdXNlck1vZGVsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG5cbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgfSxcblxuICAgIHBhc3N3b3JkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcblxuICAgIHJvbGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogJ3VzZXInLFxuICAgIH0sXG5cbiAgICByb290OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuXG4gICAgYXZhdGFyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IGBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kcG9ya3FoaXcvaW1hZ2UvdXBsb2FkL3YxNjEwMDUzOTM1L3NhbXBsZXMvcGVvcGxlL3NtaWxpbmctbWFuLmpwZ2AsXG4gICAgfSxcblxufSxcbiAgICB7XG4gICAgICAgIHRpbWVzdGFtcHM6IHRydWVcbiAgICB9XG4pXG5cbmNvbnN0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbChgdXNlcmAsIHVzZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/userModel.js\n");

/***/ }),

/***/ "./pages/api/order/index.js":
/*!**********************************!*\
  !*** ./pages/api/order/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ \"./utils/connectDB.js\");\n/* harmony import */ var _models_orderModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/orderModel */ \"./models/orderModel.js\");\n/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/productModel */ \"./models/productModel.js\");\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../middleware/auth */ \"./middleware/auth.js\");\n\n\n\n\nObject(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  switch (req.method) {\n    case \"POST\":\n      await createOrder(req, res);\n\n    case \"GET\":\n      await getOrders(req, res);\n\n    default:\n      break;\n  }\n});\n\nconst getOrders = async (req, res) => {\n  try {\n    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req, res);\n    let orders;\n\n    if (result.role !== \"admin\") {\n      orders = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n        user: result.id\n      }).populate(\"user\", \"-password\");\n    } else {\n      orders = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find().populate(\"user\", \"-password\");\n    }\n\n    res.json({\n      orders\n    });\n  } catch (err) {\n    return res.status(500).json({\n      err: err.message\n    });\n  }\n};\n\nconst createOrder = async (req, res) => {\n  try {\n    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req, res);\n    const {\n      address,\n      mobile,\n      cart,\n      total\n    } = req.body;\n    const newOrder = new _models_orderModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      user: result.id,\n      address,\n      mobile,\n      cart,\n      total\n    });\n    cart.filter(item => {\n      return sold(item._id, item.quantity, item.inStock, item.sold);\n    });\n    newOrder.save();\n    return res.json({\n      msg: 'Payment Success',\n      newOrder\n    });\n  } catch (err) {\n    return res.status(500).json({\n      err: err.message\n    });\n  }\n};\n\nconst sold = async (id, quantity, oldInStock, oldStock) => {\n  await _models_productModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOneAndUpdate({\n    _id: id\n  }, {\n    inStock: oldInStock - quantity,\n    sold: quantity + oldStock\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvb3JkZXIvaW5kZXguanM/NDYyZCJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjcmVhdGVPcmRlciIsImdldE9yZGVycyIsInJlc3VsdCIsImF1dGgiLCJvcmRlcnMiLCJyb2xlIiwiT3JkZXIiLCJmaW5kIiwidXNlciIsImlkIiwicG9wdWxhdGUiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwibWVzc2FnZSIsImFkZHJlc3MiLCJtb2JpbGUiLCJjYXJ0IiwidG90YWwiLCJib2R5IiwibmV3T3JkZXIiLCJmaWx0ZXIiLCJpdGVtIiwic29sZCIsIl9pZCIsInF1YW50aXR5IiwiaW5TdG9jayIsInNhdmUiLCJtc2ciLCJvbGRJblN0b2NrIiwib2xkU3RvY2siLCJQcm9kdWN0IiwiZmluZE9uZUFuZFVwZGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLGdFQUFTO0FBRU0sc0VBQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixVQUFRRCxHQUFHLENBQUNFLE1BQVo7QUFDSSxTQUFLLE1BQUw7QUFDSSxZQUFNQyxXQUFXLENBQUNILEdBQUQsRUFBTUMsR0FBTixDQUFqQjs7QUFDSixTQUFLLEtBQUw7QUFDSSxZQUFNRyxTQUFTLENBQUNKLEdBQUQsRUFBTUMsR0FBTixDQUFmOztBQUNKO0FBQ0k7QUFOUjtBQVFILENBVEQ7O0FBV0EsTUFBTUcsU0FBUyxHQUFHLE9BQU9KLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNsQyxNQUFJO0FBQ0EsVUFBTUksTUFBTSxHQUFHLE1BQU1DLGdFQUFJLENBQUNOLEdBQUQsRUFBTUMsR0FBTixDQUF6QjtBQUVBLFFBQUlNLE1BQUo7O0FBQ0EsUUFBSUYsTUFBTSxDQUFDRyxJQUFQLEtBQWdCLE9BQXBCLEVBQTZCO0FBQ3pCRCxZQUFNLEdBQUcsTUFBTUUsMERBQUssQ0FBQ0MsSUFBTixDQUFXO0FBQUVDLFlBQUksRUFBRU4sTUFBTSxDQUFDTztBQUFmLE9BQVgsRUFBZ0NDLFFBQWhDLENBQXlDLE1BQXpDLEVBQWlELFdBQWpELENBQWY7QUFDSCxLQUZELE1BRU87QUFDSE4sWUFBTSxHQUFHLE1BQU1FLDBEQUFLLENBQUNDLElBQU4sR0FBYUcsUUFBYixDQUFzQixNQUF0QixFQUE4QixXQUE5QixDQUFmO0FBQ0g7O0FBQ0RaLE9BQUcsQ0FBQ2EsSUFBSixDQUFTO0FBQUVQO0FBQUYsS0FBVDtBQUNILEdBVkQsQ0FVRSxPQUFPUSxHQUFQLEVBQVk7QUFDVixXQUFPZCxHQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUFFQyxTQUFHLEVBQUVBLEdBQUcsQ0FBQ0U7QUFBWCxLQUFyQixDQUFQO0FBQ0g7QUFDSixDQWREOztBQWdCQSxNQUFNZCxXQUFXLEdBQUcsT0FBT0gsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3BDLE1BQUk7QUFDQSxVQUFNSSxNQUFNLEdBQUcsTUFBTUMsZ0VBQUksQ0FBQ04sR0FBRCxFQUFNQyxHQUFOLENBQXpCO0FBQ0EsVUFBTTtBQUFFaUIsYUFBRjtBQUFXQyxZQUFYO0FBQW1CQyxVQUFuQjtBQUF5QkM7QUFBekIsUUFBbUNyQixHQUFHLENBQUNzQixJQUE3QztBQUNBLFVBQU1DLFFBQVEsR0FBRyxJQUFJZCwwREFBSixDQUFVO0FBQ3ZCRSxVQUFJLEVBQUVOLE1BQU0sQ0FBQ08sRUFEVTtBQUNOTSxhQURNO0FBQ0dDLFlBREg7QUFDV0MsVUFEWDtBQUNpQkM7QUFEakIsS0FBVixDQUFqQjtBQUdBRCxRQUFJLENBQUNJLE1BQUwsQ0FBWUMsSUFBSSxJQUFJO0FBQ2hCLGFBQU9DLElBQUksQ0FBQ0QsSUFBSSxDQUFDRSxHQUFOLEVBQVdGLElBQUksQ0FBQ0csUUFBaEIsRUFBMEJILElBQUksQ0FBQ0ksT0FBL0IsRUFBd0NKLElBQUksQ0FBQ0MsSUFBN0MsQ0FBWDtBQUNILEtBRkQ7QUFJQUgsWUFBUSxDQUFDTyxJQUFUO0FBQ0EsV0FBTzdCLEdBQUcsQ0FBQ2EsSUFBSixDQUFTO0FBQ1ppQixTQUFHLEVBQUUsaUJBRE87QUFFWlI7QUFGWSxLQUFULENBQVA7QUFJSCxHQWZELENBZUUsT0FBT1IsR0FBUCxFQUFZO0FBQ1YsV0FBT2QsR0FBRyxDQUFDZSxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBRUMsU0FBRyxFQUFFQSxHQUFHLENBQUNFO0FBQVgsS0FBckIsQ0FBUDtBQUNIO0FBQ0osQ0FuQkQ7O0FBcUJBLE1BQU1TLElBQUksR0FBRyxPQUFPZCxFQUFQLEVBQVdnQixRQUFYLEVBQXFCSSxVQUFyQixFQUFpQ0MsUUFBakMsS0FBOEM7QUFDdkQsUUFBTUMsNERBQU8sQ0FBQ0MsZ0JBQVIsQ0FBeUI7QUFBRVIsT0FBRyxFQUFFZjtBQUFQLEdBQXpCLEVBQXNDO0FBQ3hDaUIsV0FBTyxFQUFFRyxVQUFVLEdBQUdKLFFBRGtCO0FBRXhDRixRQUFJLEVBQUVFLFFBQVEsR0FBR0s7QUFGdUIsR0FBdEMsQ0FBTjtBQUlILENBTEQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvb3JkZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQidcbmltcG9ydCBPcmRlciBmcm9tICcuLi8uLi8uLi9tb2RlbHMvb3JkZXJNb2RlbCdcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uLy4uLy4uL21vZGVscy9wcm9kdWN0TW9kZWwnXG5pbXBvcnQgYXV0aCBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL2F1dGgnXG5cbmNvbm5lY3REQigpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICAgICAgYXdhaXQgY3JlYXRlT3JkZXIocmVxLCByZXMpXG4gICAgICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgICAgICAgIGF3YWl0IGdldE9yZGVycyhyZXEsIHJlcylcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuY29uc3QgZ2V0T3JkZXJzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aChyZXEsIHJlcylcblxuICAgICAgICBsZXQgb3JkZXJzO1xuICAgICAgICBpZiAocmVzdWx0LnJvbGUgIT09IFwiYWRtaW5cIikge1xuICAgICAgICAgICAgb3JkZXJzID0gYXdhaXQgT3JkZXIuZmluZCh7IHVzZXI6IHJlc3VsdC5pZCB9KS5wb3B1bGF0ZShcInVzZXJcIiwgXCItcGFzc3dvcmRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9yZGVycyA9IGF3YWl0IE9yZGVyLmZpbmQoKS5wb3B1bGF0ZShcInVzZXJcIiwgXCItcGFzc3dvcmRcIilcbiAgICAgICAgfVxuICAgICAgICByZXMuanNvbih7IG9yZGVycyB9KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pXG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVPcmRlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGgocmVxLCByZXMpXG4gICAgICAgIGNvbnN0IHsgYWRkcmVzcywgbW9iaWxlLCBjYXJ0LCB0b3RhbCB9ID0gcmVxLmJvZHlcbiAgICAgICAgY29uc3QgbmV3T3JkZXIgPSBuZXcgT3JkZXIoe1xuICAgICAgICAgICAgdXNlcjogcmVzdWx0LmlkLCBhZGRyZXNzLCBtb2JpbGUsIGNhcnQsIHRvdGFsXG4gICAgICAgIH0pXG4gICAgICAgIGNhcnQuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNvbGQoaXRlbS5faWQsIGl0ZW0ucXVhbnRpdHksIGl0ZW0uaW5TdG9jaywgaXRlbS5zb2xkKVxuICAgICAgICB9KVxuXG4gICAgICAgIG5ld09yZGVyLnNhdmUoKVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgICAgbXNnOiAnUGF5bWVudCBTdWNjZXNzJyxcbiAgICAgICAgICAgIG5ld09yZGVyXG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycjogZXJyLm1lc3NhZ2UgfSlcbiAgICB9XG59XG5cbmNvbnN0IHNvbGQgPSBhc3luYyAoaWQsIHF1YW50aXR5LCBvbGRJblN0b2NrLCBvbGRTdG9jaykgPT4ge1xuICAgIGF3YWl0IFByb2R1Y3QuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZDogaWQgfSwge1xuICAgICAgICBpblN0b2NrOiBvbGRJblN0b2NrIC0gcXVhbnRpdHksXG4gICAgICAgIHNvbGQ6IHF1YW50aXR5ICsgb2xkU3RvY2tcbiAgICB9KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/order/index.js\n");

/***/ }),

/***/ "./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst connectDB = () => {\n  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState == true) {\n    console.log(`Terhubung`);\n    return;\n  }\n\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(`${\"mongodb+srv://zDev:cy3GJt9K67YlLFeL@cluster0.zebme.mongodb.net/ZdevCommerce?retryWrites=true&w=majority\"}`, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useFindAndModify: true,\n    useCreateIndex: true\n  }, err => {\n    if (err) throw new err();\n    console.log(`Tidak terhubung`);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectDB);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jb25uZWN0REIuanM/YjdkNCJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJtb25nb29zZSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicHJvY2VzcyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VDcmVhdGVJbmRleCIsImVyciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFFcEIsTUFBSUMsK0NBQVEsQ0FBQ0MsV0FBVCxDQUFxQixDQUFyQixFQUF3QkMsVUFBeEIsSUFBc0MsSUFBMUMsRUFBZ0Q7QUFDNUNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLFdBQWI7QUFDQTtBQUNIOztBQUVESixpREFBUSxDQUFDSyxPQUFULENBQWtCLEdBQUVDLHlHQUFtQixFQUF2QyxFQUEwQztBQUN0Q0MsbUJBQWUsRUFBRSxJQURxQjtBQUV0Q0Msc0JBQWtCLEVBQUUsSUFGa0I7QUFHdENDLG9CQUFnQixFQUFFLElBSG9CO0FBSXRDQyxrQkFBYyxFQUFFO0FBSnNCLEdBQTFDLEVBS0dDLEdBQUcsSUFBSTtBQUNOLFFBQUlBLEdBQUosRUFBUyxNQUFNLElBQUlBLEdBQUosRUFBTjtBQUNUUixXQUFPLENBQUNDLEdBQVIsQ0FBYSxpQkFBYjtBQUNILEdBUkQ7QUFVSCxDQWpCRDs7QUFtQmVMLHdFQUFmIiwiZmlsZSI6Ii4vdXRpbHMvY29ubmVjdERCLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBjb25uZWN0REIgPSAoKSA9PiB7XG5cbiAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSA9PSB0cnVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUZXJodWJ1bmdgKTtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbW9uZ29vc2UuY29ubmVjdChgJHtwcm9jZXNzLmVudi5EQl9VUkx9YCwge1xuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogdHJ1ZSxcbiAgICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWVcbiAgICB9LCBlcnIgPT4ge1xuICAgICAgICBpZiAoZXJyKSB0aHJvdyBuZXcgZXJyXG4gICAgICAgIGNvbnNvbGUubG9nKGBUaWRhayB0ZXJodWJ1bmdgKTtcbiAgICB9KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/connectDB.js\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIj82NDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Impzb253ZWJ0b2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });