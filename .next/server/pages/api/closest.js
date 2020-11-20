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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/closest.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/closest.js":
/*!******************************!*\
  !*** ./pages/api/closest.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Twit = __webpack_require__(/*! twit */ \"twit\");\n\nvar T = new Twit({\n  consumer_key: \"n03n4khbU98MYv8SK0yWuVRJN\",\n  consumer_secret: \"r9M3Z3EdwedScKirSPF20EfPLZemmbBP3Q5bcW2FhxyDCjnO2g\",\n  access_token: \"635507198-7V97EtPDoayZuayOi8smT4338EH398RKHLzOuRvO\",\n  access_token_secret: \"3IFhgpZ2y1ze2WdwYTtiabxEoQENlx8IshQHvEwvRveQF\",\n  timeout_ms: 60 * 1000,\n  // optional HTTP request timeout to apply to all requests.\n  strictSSL: false // optional - requires SSL certificates to be valid.\n\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const lat = req.body.lat;\n  const lng = req.body.lng;\n  T.get('trends/closest', {\n    lat: lat,\n    long: lng\n  }, function (err, data, response) {\n    res.status(200).json(data);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2xvc2VzdC5qcz8zYTMwIl0sIm5hbWVzIjpbIlR3aXQiLCJyZXF1aXJlIiwiVCIsImNvbnN1bWVyX2tleSIsImNvbnN1bWVyX3NlY3JldCIsImFjY2Vzc190b2tlbiIsImFjY2Vzc190b2tlbl9zZWNyZXQiLCJ0aW1lb3V0X21zIiwic3RyaWN0U1NMIiwicmVxIiwicmVzIiwibGF0IiwiYm9keSIsImxuZyIsImdldCIsImxvbmciLCJlcnIiLCJkYXRhIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQUlBLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxrQkFBRCxDQUFsQjs7QUFFQSxJQUFJQyxDQUFDLEdBQUcsSUFBSUYsSUFBSixDQUFTO0FBQ2JHLGNBQVksRUFBRSwyQkFERDtBQUViQyxpQkFBZSxFQUFFLG9EQUZKO0FBR2JDLGNBQVksRUFBRSxvREFIRDtBQUliQyxxQkFBbUIsRUFBRSwrQ0FKUjtBQUtiQyxZQUFVLEVBQUUsS0FBSyxJQUxKO0FBS1c7QUFDeEJDLFdBQVMsRUFBRSxLQU5FLENBTVM7O0FBTlQsQ0FBVCxDQUFSO0FBU2Usc0VBQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixRQUFNQyxHQUFHLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSixDQUFTRCxHQUFyQjtBQUNBLFFBQU1FLEdBQUcsR0FBR0osR0FBRyxDQUFDRyxJQUFKLENBQVNDLEdBQXJCO0FBQ0FYLEdBQUMsQ0FBQ1ksR0FBRixDQUFNLGdCQUFOLEVBQXdCO0FBQUVILE9BQUcsRUFBRUEsR0FBUDtBQUFZSSxRQUFJLEVBQUVGO0FBQWxCLEdBQXhCLEVBQWlELFVBQVVHLEdBQVYsRUFBZUMsSUFBZixFQUFxQkMsUUFBckIsRUFBK0I7QUFDNUVSLE9BQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSCxJQUFyQjtBQUNILEdBRkQ7QUFHSCxDQU5EIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2Nsb3Nlc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVHdpdCA9IHJlcXVpcmUoJ3R3aXQnKVxuXG52YXIgVCA9IG5ldyBUd2l0KHtcbiAgICBjb25zdW1lcl9rZXk6IFwibjAzbjRraGJVOThNWXY4U0sweVd1VlJKTlwiLFxuICAgIGNvbnN1bWVyX3NlY3JldDogXCJyOU0zWjNFZHdlZFNjS2lyU1BGMjBFZlBMWmVtbWJCUDNRNWJjVzJGaHh5RENqbk8yZ1wiLFxuICAgIGFjY2Vzc190b2tlbjogXCI2MzU1MDcxOTgtN1Y5N0V0UERvYXladWF5T2k4c21UNDMzOEVIMzk4UktITHpPdVJ2T1wiLFxuICAgIGFjY2Vzc190b2tlbl9zZWNyZXQ6IFwiM0lGaGdwWjJ5MXplMldkd1lUdGlhYnhFb1FFTmx4OElzaFFIdkV3dlJ2ZVFGXCIsXG4gICAgdGltZW91dF9tczogNjAgKiAxMDAwLCAgLy8gb3B0aW9uYWwgSFRUUCByZXF1ZXN0IHRpbWVvdXQgdG8gYXBwbHkgdG8gYWxsIHJlcXVlc3RzLlxuICAgIHN0cmljdFNTTDogZmFsc2UsICAgICAvLyBvcHRpb25hbCAtIHJlcXVpcmVzIFNTTCBjZXJ0aWZpY2F0ZXMgdG8gYmUgdmFsaWQuXG59KVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBsYXQgPSByZXEuYm9keS5sYXQ7XG4gICAgY29uc3QgbG5nID0gcmVxLmJvZHkubG5nO1xuICAgIFQuZ2V0KCd0cmVuZHMvY2xvc2VzdCcsIHsgbGF0OiBsYXQsIGxvbmc6IGxuZyB9LCBmdW5jdGlvbiAoZXJyLCBkYXRhLCByZXNwb25zZSkge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcbiAgICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/closest.js\n");

/***/ }),

/***/ "twit":
/*!***********************!*\
  !*** external "twit" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"twit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0d2l0XCI/MmZiZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ0d2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHdpdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///twit\n");

/***/ })

/******/ });