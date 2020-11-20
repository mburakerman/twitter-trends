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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/trends.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/trends.js":
/*!*****************************!*\
  !*** ./pages/api/trends.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Twit = __webpack_require__(/*! twit */ \"twit\");\n\nvar T = new Twit({\n  consumer_key: \"n03n4khbU98MYv8SK0yWuVRJN\",\n  consumer_secret: \"r9M3Z3EdwedScKirSPF20EfPLZemmbBP3Q5bcW2FhxyDCjnO2g\",\n  access_token: \"635507198-7V97EtPDoayZuayOi8smT4338EH398RKHLzOuRvO\",\n  access_token_secret: \"3IFhgpZ2y1ze2WdwYTtiabxEoQENlx8IshQHvEwvRveQF\",\n  timeout_ms: 60 * 1000,\n  // optional HTTP request timeout to apply to all requests.\n  strictSSL: false // optional - requires SSL certificates to be valid.\n\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  var params = {\n    \"id\": '2323778',\n    count: 0\n  };\n  const woeid = req.body.woeid;\n  T.get('trends/place', {\n    id: woeid\n  }, function (err, data, response) {\n    res.status(200).json(data);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdHJlbmRzLmpzP2I5YTAiXSwibmFtZXMiOlsiVHdpdCIsInJlcXVpcmUiLCJUIiwiY29uc3VtZXJfa2V5IiwiY29uc3VtZXJfc2VjcmV0IiwiYWNjZXNzX3Rva2VuIiwiYWNjZXNzX3Rva2VuX3NlY3JldCIsInRpbWVvdXRfbXMiLCJzdHJpY3RTU0wiLCJyZXEiLCJyZXMiLCJwYXJhbXMiLCJjb3VudCIsIndvZWlkIiwiYm9keSIsImdldCIsImlkIiwiZXJyIiwiZGF0YSIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxJQUFJQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsa0JBQUQsQ0FBbEI7O0FBRUEsSUFBSUMsQ0FBQyxHQUFHLElBQUlGLElBQUosQ0FBUztBQUNmRyxjQUFZLEVBQUUsMkJBREM7QUFFZkMsaUJBQWUsRUFBRSxvREFGRjtBQUdmQyxjQUFZLEVBQUUsb0RBSEM7QUFJZkMscUJBQW1CLEVBQUUsK0NBSk47QUFLZkMsWUFBVSxFQUFFLEtBQUssSUFMRjtBQUtTO0FBQ3hCQyxXQUFTLEVBQUUsS0FOSSxDQU1POztBQU5QLENBQVQsQ0FBUjtBQVNlLHNFQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsTUFBSUMsTUFBTSxHQUFHO0FBQ1gsVUFBTSxTQURLO0FBRVhDLFNBQUssRUFBRTtBQUZJLEdBQWI7QUFJQSxRQUFNQyxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRCxLQUF2QjtBQUNBWCxHQUFDLENBQUNhLEdBQUYsQ0FBTSxjQUFOLEVBQXNCO0FBQUVDLE1BQUUsRUFBRUg7QUFBTixHQUF0QixFQUFxQyxVQUFVSSxHQUFWLEVBQWVDLElBQWYsRUFBcUJDLFFBQXJCLEVBQStCO0FBQ2xFVCxPQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkgsSUFBckI7QUFDRCxHQUZEO0FBR0QsQ0FURCIsImZpbGUiOiIuL3BhZ2VzL2FwaS90cmVuZHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVHdpdCA9IHJlcXVpcmUoJ3R3aXQnKVxuXG52YXIgVCA9IG5ldyBUd2l0KHtcbiAgY29uc3VtZXJfa2V5OiBcIm4wM240a2hiVTk4TVl2OFNLMHlXdVZSSk5cIixcbiAgY29uc3VtZXJfc2VjcmV0OiBcInI5TTNaM0Vkd2VkU2NLaXJTUEYyMEVmUExaZW1tYkJQM1E1YmNXMkZoeHlEQ2puTzJnXCIsXG4gIGFjY2Vzc190b2tlbjogXCI2MzU1MDcxOTgtN1Y5N0V0UERvYXladWF5T2k4c21UNDMzOEVIMzk4UktITHpPdVJ2T1wiLFxuICBhY2Nlc3NfdG9rZW5fc2VjcmV0OiBcIjNJRmhncFoyeTF6ZTJXZHdZVHRpYWJ4RW9RRU5seDhJc2hRSHZFd3ZSdmVRRlwiLFxuICB0aW1lb3V0X21zOiA2MCAqIDEwMDAsICAvLyBvcHRpb25hbCBIVFRQIHJlcXVlc3QgdGltZW91dCB0byBhcHBseSB0byBhbGwgcmVxdWVzdHMuXG4gIHN0cmljdFNTTDogZmFsc2UsICAgICAvLyBvcHRpb25hbCAtIHJlcXVpcmVzIFNTTCBjZXJ0aWZpY2F0ZXMgdG8gYmUgdmFsaWQuXG59KVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdmFyIHBhcmFtcyA9IHtcbiAgICBcImlkXCI6ICcyMzIzNzc4JyxcbiAgICBjb3VudDogMFxuICB9O1xuICBjb25zdCB3b2VpZCA9IHJlcS5ib2R5LndvZWlkO1xuICBULmdldCgndHJlbmRzL3BsYWNlJywgeyBpZDogd29laWQgfSwgZnVuY3Rpb24gKGVyciwgZGF0YSwgcmVzcG9uc2UpIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcbiAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/trends.js\n");

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