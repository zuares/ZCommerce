module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  role: {\n    type: String,\n    required: true,\n    default: 'user'\n  },\n  root: {\n    type: Boolean,\n    required: true,\n    default: false\n  },\n  avatar: {\n    type: String,\n    required: true,\n    default: `https://res.cloudinary.com/dporkqhiw/image/upload/v1610053935/samples/people/smiling-man.jpg`\n  }\n}, {\n  timestamps: true\n});\nconst Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.user || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('user', userSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dataset);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvdXNlck1vZGVsLmpzP2MwNGEiXSwibmFtZXMiOlsidXNlclNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJyb2xlIiwiZGVmYXVsdCIsInJvb3QiLCJCb29sZWFuIiwiYXZhdGFyIiwidGltZXN0YW1wcyIsIkRhdGFzZXQiLCJtb2RlbHMiLCJ1c2VyIiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsVUFBVSxHQUFHLElBQUlDLCtDQUFRLENBQUNDLE1BQWIsQ0FBb0I7QUFDbkNDLE1BQUksRUFBRTtBQUNGQyxRQUFJLEVBQUVDLE1BREo7QUFFRkMsWUFBUSxFQUFFO0FBRlIsR0FENkI7QUFNbkNDLE9BQUssRUFBRTtBQUNISCxRQUFJLEVBQUVDLE1BREg7QUFFSEMsWUFBUSxFQUFFLElBRlA7QUFHSEUsVUFBTSxFQUFFO0FBSEwsR0FONEI7QUFZbkNDLFVBQVEsRUFBRTtBQUNOTCxRQUFJLEVBQUVDLE1BREE7QUFFTkMsWUFBUSxFQUFFO0FBRkosR0FaeUI7QUFpQm5DSSxNQUFJLEVBQUU7QUFDRk4sUUFBSSxFQUFFQyxNQURKO0FBRUZDLFlBQVEsRUFBRSxJQUZSO0FBR0ZLLFdBQU8sRUFBRTtBQUhQLEdBakI2QjtBQXVCbkNDLE1BQUksRUFBRTtBQUNGUixRQUFJLEVBQUVTLE9BREo7QUFFRlAsWUFBUSxFQUFFLElBRlI7QUFHRkssV0FBTyxFQUFFO0FBSFAsR0F2QjZCO0FBNkJuQ0csUUFBTSxFQUFFO0FBQ0pWLFFBQUksRUFBRUMsTUFERjtBQUVKQyxZQUFRLEVBQUUsSUFGTjtBQUdKSyxXQUFPLEVBQUc7QUFITjtBQTdCMkIsQ0FBcEIsRUFvQ2Y7QUFDSUksWUFBVSxFQUFFO0FBRGhCLENBcENlLENBQW5CO0FBeUNBLE1BQU1DLE9BQU8sR0FBR2YsK0NBQVEsQ0FBQ2dCLE1BQVQsQ0FBZ0JDLElBQWhCLElBQXdCakIsK0NBQVEsQ0FBQ2tCLEtBQVQsQ0FBZSxNQUFmLEVBQXVCbkIsVUFBdkIsQ0FBeEM7QUFFZWdCLHNFQUFmIiwiZmlsZSI6Ii4vbW9kZWxzL3VzZXJNb2RlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuXG4gICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgIH0sXG5cbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG5cbiAgICByb2xlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6ICd1c2VyJyxcbiAgICB9LFxuXG4gICAgcm9vdDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcblxuICAgIGF2YXRhcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiBgaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHBvcmtxaGl3L2ltYWdlL3VwbG9hZC92MTYxMDA1MzkzNS9zYW1wbGVzL3Blb3BsZS9zbWlsaW5nLW1hbi5qcGdgLFxuICAgIH0sXG5cbn0sXG4gICAge1xuICAgICAgICB0aW1lc3RhbXBzOiB0cnVlXG4gICAgfVxuKVxuXG5jb25zdCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/userModel.js\n");

/***/ }),

/***/ "./pages/api/auth/register.js":
/*!************************************!*\
  !*** ./pages/api/auth/register.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ \"./utils/connectDB.js\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/userModel */ \"./models/userModel.js\");\n/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/validate */ \"./utils/validate.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nObject(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  switch (req.method) {\n    case \"POST\":\n      return await register(req, res);\n\n    default:\n      return null;\n  }\n});\n\nconst register = async (req, res) => {\n  try {\n    // Tangkap request dari form\n    const {\n      name,\n      email,\n      password,\n      password2\n    } = req.body; // Validasi ulang\n\n    const errMsg = Object(_utils_validate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req.body);\n    if (errMsg) return res.status(400).json({\n      err: errMsg\n    }); // Cek Email\n\n    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n      email\n    });\n    if (user) return res.status(400).json({\n      err: 'this Email has already exists'\n    });\n    const passwordHash = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default.a.hash(password, 12); // Buat data\n\n    const newUser = new _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      name,\n      email,\n      password: passwordHash\n    }); // Save data\n\n    await newUser.save(); // Kirimkan response\n\n    return res.json({\n      msg: 'Register Success'\n    });\n  } catch (err) {\n    return res.status(500).json({\n      err: err.message\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9yZWdpc3Rlci5qcz85NTI5Il0sIm5hbWVzIjpbImNvbm5lY3REQiIsInJlcSIsInJlcyIsIm1ldGhvZCIsInJlZ2lzdGVyIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwYXNzd29yZDIiLCJib2R5IiwiZXJyTXNnIiwidmFsaWRhdGUiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwidXNlciIsIlVzZXIiLCJmaW5kT25lIiwicGFzc3dvcmRIYXNoIiwiYmNyeXB0IiwiaGFzaCIsIm5ld1VzZXIiLCJzYXZlIiwibXNnIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQUEsZ0VBQVM7QUFFTSxzRUFBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLFVBQVFELEdBQUcsQ0FBQ0UsTUFBWjtBQUNJLFNBQUssTUFBTDtBQUNJLGFBQU8sTUFBTUMsUUFBUSxDQUFDSCxHQUFELEVBQU1DLEdBQU4sQ0FBckI7O0FBQ0o7QUFDSSxhQUFPLElBQVA7QUFKUjtBQU1ILENBUEQ7O0FBU0EsTUFBTUUsUUFBUSxHQUFHLE9BQU9ILEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxNQUFJO0FBQ0E7QUFDQSxVQUFNO0FBQUVHLFVBQUY7QUFBUUMsV0FBUjtBQUFlQyxjQUFmO0FBQXlCQztBQUF6QixRQUF1Q1AsR0FBRyxDQUFDUSxJQUFqRCxDQUZBLENBSUE7O0FBQ0EsVUFBTUMsTUFBTSxHQUFHQywrREFBUSxDQUFDVixHQUFHLENBQUNRLElBQUwsQ0FBdkI7QUFDQSxRQUFJQyxNQUFKLEVBQ0ksT0FBT1IsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsU0FBRyxFQUFFSjtBQUFQLEtBQXJCLENBQVAsQ0FQSixDQVNBOztBQUNBLFVBQU1LLElBQUksR0FBRyxNQUFNQyx5REFBSSxDQUFDQyxPQUFMLENBQWE7QUFBRVg7QUFBRixLQUFiLENBQW5CO0FBQ0EsUUFBSVMsSUFBSixFQUNJLE9BQU9iLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFNBQUcsRUFBRTtBQUFQLEtBQXJCLENBQVA7QUFFSixVQUFNSSxZQUFZLEdBQUcsTUFBTUMsNkNBQU0sQ0FBQ0MsSUFBUCxDQUFZYixRQUFaLEVBQXNCLEVBQXRCLENBQTNCLENBZEEsQ0FnQkE7O0FBQ0EsVUFBTWMsT0FBTyxHQUFHLElBQUlMLHlEQUFKLENBQVM7QUFDckJYLFVBRHFCO0FBQ2ZDLFdBRGU7QUFFckJDLGNBQVEsRUFBRVc7QUFGVyxLQUFULENBQWhCLENBakJBLENBc0JBOztBQUNBLFVBQU1HLE9BQU8sQ0FBQ0MsSUFBUixFQUFOLENBdkJBLENBeUJBOztBQUNBLFdBQU9wQixHQUFHLENBQUNXLElBQUosQ0FBUztBQUNaVSxTQUFHLEVBQUU7QUFETyxLQUFULENBQVA7QUFLSCxHQS9CRCxDQStCRSxPQUFPVCxHQUFQLEVBQVk7QUFDVixXQUFPWixHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxTQUFHLEVBQUVBLEdBQUcsQ0FBQ1U7QUFBWCxLQUFyQixDQUFQO0FBQ0g7QUFDSixDQW5DRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hdXRoL3JlZ2lzdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlscy9jb25uZWN0REInXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi8uLi9tb2RlbHMvdXNlck1vZGVsJ1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4uLy4uLy4uL3V0aWxzL3ZhbGlkYXRlJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnXG5cblxuY29ubmVjdERCKClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVnaXN0ZXIocmVxLCByZXMpXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn1cblxuY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICAvLyBUYW5na2FwIHJlcXVlc3QgZGFyaSBmb3JtXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBwYXNzd29yZDIgfSA9IHJlcS5ib2R5XG5cbiAgICAgICAgLy8gVmFsaWRhc2kgdWxhbmdcbiAgICAgICAgY29uc3QgZXJyTXNnID0gdmFsaWRhdGUocmVxLmJvZHkpXG4gICAgICAgIGlmIChlcnJNc2cpXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnI6IGVyck1zZyB9KVxuXG4gICAgICAgIC8vIENlayBFbWFpbFxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSlcbiAgICAgICAgaWYgKHVzZXIpXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnI6ICd0aGlzIEVtYWlsIGhhcyBhbHJlYWR5IGV4aXN0cycgfSlcblxuICAgICAgICBjb25zdCBwYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTIpXG5cbiAgICAgICAgLy8gQnVhdCBkYXRhXG4gICAgICAgIGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlcih7XG4gICAgICAgICAgICBuYW1lLCBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZEhhc2hcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBTYXZlIGRhdGFcbiAgICAgICAgYXdhaXQgbmV3VXNlci5zYXZlKClcblxuICAgICAgICAvLyBLaXJpbWthbiByZXNwb25zZVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgICAgbXNnOiAnUmVnaXN0ZXIgU3VjY2VzcydcbiAgICAgICAgfSlcblxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycjogZXJyLm1lc3NhZ2UgfSlcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/register.js\n");

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

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction validate({\n  name,\n  email,\n  password,\n  password2\n}) {\n  if (!name || !email || !password) return 'Please add all field';\n  if (!validateEmail(email)) return 'Email not valid';\n  if (password !== password2) return 'Password not match';\n}\n\nfunction validateEmail(email) {\n  const re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n  return re.test(email);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (validate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy92YWxpZGF0ZS5qcz9mN2RmIl0sIm5hbWVzIjpbInZhbGlkYXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwYXNzd29yZDIiLCJ2YWxpZGF0ZUVtYWlsIiwicmUiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBLFNBQVNBLFFBQVQsQ0FBa0I7QUFBRUMsTUFBRjtBQUFRQyxPQUFSO0FBQWVDLFVBQWY7QUFBeUJDO0FBQXpCLENBQWxCLEVBQXdEO0FBQ3BELE1BQUksQ0FBQ0gsSUFBRCxJQUFTLENBQUNDLEtBQVYsSUFBbUIsQ0FBQ0MsUUFBeEIsRUFDSSxPQUFPLHNCQUFQO0FBQ0osTUFBSSxDQUFDRSxhQUFhLENBQUNILEtBQUQsQ0FBbEIsRUFDSSxPQUFPLGlCQUFQO0FBQ0osTUFBSUMsUUFBUSxLQUFLQyxTQUFqQixFQUNJLE9BQU8sb0JBQVA7QUFDUDs7QUFFRCxTQUFTQyxhQUFULENBQXVCSCxLQUF2QixFQUE4QjtBQUMxQixRQUFNSSxFQUFFLEdBQUcsd0pBQVg7QUFDQSxTQUFPQSxFQUFFLENBQUNDLElBQUgsQ0FBUUwsS0FBUixDQUFQO0FBQ0g7O0FBRWNGLHVFQUFmIiwiZmlsZSI6Ii4vdXRpbHMvdmFsaWRhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIHZhbGlkYXRlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBwYXNzd29yZDIgfSkge1xuICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkKVxuICAgICAgICByZXR1cm4gJ1BsZWFzZSBhZGQgYWxsIGZpZWxkJ1xuICAgIGlmICghdmFsaWRhdGVFbWFpbChlbWFpbCkpXG4gICAgICAgIHJldHVybiAnRW1haWwgbm90IHZhbGlkJ1xuICAgIGlmIChwYXNzd29yZCAhPT0gcGFzc3dvcmQyKVxuICAgICAgICByZXR1cm4gJ1Bhc3N3b3JkIG5vdCBtYXRjaCdcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICAgIGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9cbiAgICByZXR1cm4gcmUudGVzdChlbWFpbClcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/validate.js\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIj9jZjljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJjcnlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcrypt\n");

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