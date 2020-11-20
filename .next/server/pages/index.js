module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/MapMarker.js":
/*!***************************************!*\
  !*** ./pages/components/MapMarker.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/components/MapMarker.js\";\n\nconst MapMarker = ({\n  lat,\n  lng\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"custom-marker\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"https://logos-download.com/wp-content/uploads/2016/06/Turkey_national_football_team_logo_crest-1.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapMarker);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL01hcE1hcmtlci5qcz8yMTFiIl0sIm5hbWVzIjpbIk1hcE1hcmtlciIsImxhdCIsImxuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsTUFBTUEsU0FBUyxHQUFHLENBQUM7QUFBRUMsS0FBRjtBQUFPQztBQUFQLENBQUQsS0FBa0I7QUFDaEMsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDJCQUNJO0FBQUssU0FBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILENBTkQ7O0FBUWVGLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9NYXBNYXJrZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5jb25zdCBNYXBNYXJrZXIgPSAoeyBsYXQsIGxuZyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbWFya2VyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbG9nb3MtZG93bmxvYWQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA2L1R1cmtleV9uYXRpb25hbF9mb290YmFsbF90ZWFtX2xvZ29fY3Jlc3QtMS5wbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcE1hcmtlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/MapMarker.js\n");

/***/ }),

/***/ "./pages/components/map.js":
/*!*********************************!*\
  !*** ./pages/components/map.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"google-map-react\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MapMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapMarker */ \"./pages/components/MapMarker.js\");\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/components/map.js\";\n\n\n\nvar turkey = {\n  lat: 41.015137,\n  lng: 28.979530\n};\n\nconst Map = ({\n  eventData,\n  center,\n  zoom\n}) => {\n  const {\n    0: locationInfo,\n    1: setLocationInfo\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const markers = eventData.map(ev => {\n    var lat = parseFloat(ev.lat);\n    var lng = parseFloat(ev.long);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MapMarker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      lat: turkey.lat,\n      lng: turkey.lng\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 16\n    }, undefined);\n  });\n\n  function handleClick(e) {\n    var lat = e.lat;\n    var lng = e.lng;\n    fetch(\"/api/closest\", {\n      method: \"post\",\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        lat: lat,\n        lng: lng\n      })\n    }).then(res => res.json()).then(function (res) {\n      console.log(res);\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"map\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      bootstrapURLKeys: {\n        key: 'AIzaSyBKcbWgVYRSdCv0PCn6dCOvgdV7MjcE-R0'\n      },\n      defaultCenter: center,\n      defaultZoom: zoom,\n      onClick: e => handleClick(e),\n      children: markers\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 9\n  }, undefined);\n};\n\nMap.defaultProps = {\n  center: {\n    lat: 42.3265,\n    lng: -122.8756\n  },\n  zoom: 1\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL21hcC5qcz8zMzFmIl0sIm5hbWVzIjpbInR1cmtleSIsImxhdCIsImxuZyIsIk1hcCIsImV2ZW50RGF0YSIsImNlbnRlciIsInpvb20iLCJsb2NhdGlvbkluZm8iLCJzZXRMb2NhdGlvbkluZm8iLCJ1c2VTdGF0ZSIsIm1hcmtlcnMiLCJtYXAiLCJldiIsInBhcnNlRmxvYXQiLCJsb25nIiwiaGFuZGxlQ2xpY2siLCJlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxNQUFNLEdBQUc7QUFDVEMsS0FBRyxFQUFFLFNBREk7QUFFVEMsS0FBRyxFQUFFO0FBRkksQ0FBYjs7QUFJQSxNQUFNQyxHQUFHLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDLFFBQWI7QUFBcUJDO0FBQXJCLENBQUQsS0FBaUM7QUFDekMsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDQyxzREFBUSxDQUFDLElBQUQsQ0FBaEQ7QUFFQSxRQUFNQyxPQUFPLEdBQUdOLFNBQVMsQ0FBQ08sR0FBVixDQUFjQyxFQUFFLElBQUk7QUFDaEMsUUFBSVgsR0FBRyxHQUFHWSxVQUFVLENBQUNELEVBQUUsQ0FBQ1gsR0FBSixDQUFwQjtBQUNBLFFBQUlDLEdBQUcsR0FBR1csVUFBVSxDQUFDRCxFQUFFLENBQUNFLElBQUosQ0FBcEI7QUFDQSx3QkFBTyxxRUFBQyxrREFBRDtBQUFXLFNBQUcsRUFBRWQsTUFBTSxDQUFDQyxHQUF2QjtBQUE0QixTQUFHLEVBQUVELE1BQU0sQ0FBQ0U7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNILEdBSmUsQ0FBaEI7O0FBTUEsV0FBU2EsV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0I7QUFDcEIsUUFBSWYsR0FBRyxHQUFHZSxDQUFDLENBQUNmLEdBQVo7QUFDQSxRQUFJQyxHQUFHLEdBQUdjLENBQUMsQ0FBQ2QsR0FBWjtBQUNBZSxTQUFLLENBQUMsY0FBRCxFQUFpQjtBQUNsQkMsWUFBTSxFQUFFLE1BRFU7QUFFbEJDLGFBQU8sRUFBRTtBQUNMLGtCQUFVLGtCQURMO0FBRUwsd0JBQWdCO0FBRlgsT0FGUztBQU1sQkMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQnJCLFdBQUcsRUFBRUEsR0FEWTtBQUVqQkMsV0FBRyxFQUFFQTtBQUZZLE9BQWY7QUFOWSxLQUFqQixDQUFMLENBV0txQixJQVhMLENBV1VDLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBWGpCLEVBWUtGLElBWkwsQ0FZVSxVQUFVQyxHQUFWLEVBQWU7QUFDakJFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0gsS0FkTDtBQWVIOztBQUVELHNCQUNJO0FBQUssTUFBRSxFQUFDLEtBQVI7QUFBQSwyQkFDSSxxRUFBQyx1REFBRDtBQUNJLHNCQUFnQixFQUFFO0FBQUVJLFdBQUcsRUFBRTtBQUFQLE9BRHRCO0FBRUksbUJBQWEsRUFBRXZCLE1BRm5CO0FBR0ksaUJBQVcsRUFBRUMsSUFIakI7QUFJSSxhQUFPLEVBQUdVLENBQUQsSUFBT0QsV0FBVyxDQUFDQyxDQUFELENBSi9CO0FBQUEsZ0JBTUtOO0FBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVlILENBekNEOztBQTJDQVAsR0FBRyxDQUFDMEIsWUFBSixHQUFtQjtBQUNmeEIsUUFBTSxFQUFFO0FBQ0pKLE9BQUcsRUFBRSxPQUREO0FBRUpDLE9BQUcsRUFBRSxDQUFDO0FBRkYsR0FETztBQUtmSSxNQUFJLEVBQUU7QUFMUyxDQUFuQjtBQVFlSCxrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvbWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnXG5pbXBvcnQgTWFwTWFya2VyIGZyb20gJy4vTWFwTWFya2VyJ1xuXG52YXIgdHVya2V5ID0ge1xuICAgIGxhdDogNDEuMDE1MTM3LFxuICAgIGxuZzogMjguOTc5NTMwXG59XG5jb25zdCBNYXAgPSAoeyBldmVudERhdGEsIGNlbnRlciwgem9vbSB9KSA9PiB7XG4gICAgY29uc3QgW2xvY2F0aW9uSW5mbywgc2V0TG9jYXRpb25JbmZvXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBjb25zdCBtYXJrZXJzID0gZXZlbnREYXRhLm1hcChldiA9PiB7XG4gICAgICAgIHZhciBsYXQgPSBwYXJzZUZsb2F0KGV2LmxhdCk7XG4gICAgICAgIHZhciBsbmcgPSBwYXJzZUZsb2F0KGV2LmxvbmcpXG4gICAgICAgIHJldHVybiA8TWFwTWFya2VyIGxhdD17dHVya2V5LmxhdH0gbG5nPXt0dXJrZXkubG5nfSAvPlxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIHZhciBsYXQgPSBlLmxhdDtcbiAgICAgICAgdmFyIGxuZyA9IGUubG5nO1xuICAgICAgICBmZXRjaChcIi9hcGkvY2xvc2VzdFwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBsYXQ6IGxhdCxcbiAgICAgICAgICAgICAgICBsbmc6IGxuZ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cIm1hcFwiPlxuICAgICAgICAgICAgPEdvb2dsZU1hcFJlYWN0XG4gICAgICAgICAgICAgICAgYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6ICdBSXphU3lCS2NiV2dWWVJTZEN2MFBDbjZkQ092Z2RWN01qY0UtUjAnIH19XG4gICAgICAgICAgICAgICAgZGVmYXVsdENlbnRlcj17Y2VudGVyfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRab29tPXt6b29tfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bWFya2Vyc31cbiAgICAgICAgICAgIDwvR29vZ2xlTWFwUmVhY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuTWFwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjZW50ZXI6IHtcbiAgICAgICAgbGF0OiA0Mi4zMjY1LFxuICAgICAgICBsbmc6IC0xMjIuODc1NlxuICAgIH0sXG4gICAgem9vbTogMVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/map.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/map.js */ \"./pages/components/map.js\");\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/index.js\";\n\n\n\n\nfunction Home() {\n  const {\n    0: eventData,\n    1: setEventData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchEvents = async () => {\n      setLoading(true);\n      const res = await fetch('/api/countries');\n      const countries = await res.json();\n      setEventData(countries);\n      setLoading(false);\n    };\n\n    fetchEvents();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Twitter Trends\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n      children: !loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_map_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        eventData: eventData\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 21\n      }, this) : \"<h1>loading</h1>\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJldmVudERhdGEiLCJzZXRFdmVudERhdGEiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZmV0Y2hFdmVudHMiLCJyZXMiLCJmZXRjaCIsImNvdW50cmllcyIsImpzb24iLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRixzREFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFFQUcseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsV0FBVyxHQUFHLFlBQVk7QUFDOUJGLGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0EsWUFBTUcsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxnQkFBRCxDQUF2QjtBQUNBLFlBQU1DLFNBQVMsR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBeEI7QUFFQVQsa0JBQVksQ0FBQ1EsU0FBRCxDQUFaO0FBQ0FMLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FQRDs7QUFTQUUsZUFBVztBQUNaLEdBWFEsRUFXTixFQVhNLENBQVQ7QUFjQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUssOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFNLGVBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsSUFBeEI7QUFBQSxnQkFDRyxDQUFDVixPQUFELGdCQUFXLHFFQUFDLDBEQUFEO0FBQUssaUJBQVMsRUFBRUg7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFYLEdBQTJDO0FBRDlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBNYXAgZnJvbSBcIi4vY29tcG9uZW50cy9tYXAuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZXZlbnREYXRhLCBzZXRFdmVudERhdGFdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hFdmVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9jb3VudHJpZXMnKVxuICAgICAgY29uc3QgY291bnRyaWVzID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgICBzZXRFdmVudERhdGEoY291bnRyaWVzKVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9XG5cbiAgICBmZXRjaEV2ZW50cygpXG4gIH0sIFtdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlR3aXR0ZXIgVHJlbmRzPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgeyFsb2FkaW5nID8gPE1hcCBldmVudERhdGE9e2V2ZW50RGF0YX0gLz4gOiBcIjxoMT5sb2FkaW5nPC9oMT5cIn1cbiAgICAgIDwvbWFpbj5cblxuXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2VmZDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQSIsImZpbGUiOiIuL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "google-map-react":
/*!***********************************!*\
  !*** external "google-map-react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"google-map-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnb29nbGUtbWFwLXJlYWN0XCI/MjU2MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJnb29nbGUtbWFwLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ29vZ2xlLW1hcC1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///google-map-react\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });