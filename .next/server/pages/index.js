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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/components/MapMarker.js\";\n\nconst MapMarker = ({\n  lat,\n  lng,\n  onClick\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"custom-marker\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"https://icons-for-free.com/iconfiles/png/512/map+marker+icon-1320166582858325800.png\",\n      onClick: onClick\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapMarker);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL01hcE1hcmtlci5qcz8yMTFiIl0sIm5hbWVzIjpbIk1hcE1hcmtlciIsImxhdCIsImxuZyIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLFNBQVMsR0FBRyxDQUFDO0FBQUVDLEtBQUY7QUFBT0MsS0FBUDtBQUFZQztBQUFaLENBQUQsS0FBMkI7QUFDekMsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDJCQUNJO0FBQUssU0FBRyxFQUFDLHNGQUFUO0FBQWdHLGFBQU8sRUFBRUE7QUFBekc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILENBTkQ7O0FBUWVILHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9NYXBNYXJrZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNYXBNYXJrZXIgPSAoeyBsYXQsIGxuZywgb25DbGljayB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbWFya2VyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaWNvbnMtZm9yLWZyZWUuY29tL2ljb25maWxlcy9wbmcvNTEyL21hcCttYXJrZXIraWNvbi0xMzIwMTY2NTgyODU4MzI1ODAwLnBuZ1wiIG9uQ2xpY2s9e29uQ2xpY2t9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwTWFya2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/MapMarker.js\n");

/***/ }),

/***/ "./pages/components/TrendsBox.js":
/*!***************************************!*\
  !*** ./pages/components/TrendsBox.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/components/TrendsBox.js\";\n\nconst TrendsBox = ({\n  info\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"trends-box\",\n    children: [info.locations && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      className: \"trends-box__title\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"./twitter.svg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 4,\n        columnNumber: 66\n      }, undefined), info.locations[0].name, \" Trends\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 32\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: \"trends-box__trends\",\n      children: info.trends && info.trends.map(function (item, index) {\n        if (!item.tweet_volume) return;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: item.url,\n            target: \"_blank\",\n            rel: \"noopener\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: item.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 12,\n              columnNumber: 33\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n              children: [item.tweet_volume && new Intl.NumberFormat(['ban', 'id']).format(item.tweet_volume), \" Tweet\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 13,\n              columnNumber: 33\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 29\n          }, this)\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 32\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrendsBox);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL1RyZW5kc0JveC5qcz8xODFjIl0sIm5hbWVzIjpbIlRyZW5kc0JveCIsImluZm8iLCJsb2NhdGlvbnMiLCJuYW1lIiwidHJlbmRzIiwibWFwIiwiaXRlbSIsImluZGV4IiwidHdlZXRfdm9sdW1lIiwidXJsIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsU0FBUyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFDNUIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLGVBQ0tBLElBQUksQ0FBQ0MsU0FBTCxpQkFBa0I7QUFBSSxlQUFTLEVBQUMsbUJBQWQ7QUFBQSw4QkFBa0M7QUFBSyxXQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFsQyxFQUE4REQsSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FBZixFQUFrQkMsSUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR2QixlQUVJO0FBQUksZUFBUyxFQUFDLG9CQUFkO0FBQUEsZ0JBR1FGLElBQUksQ0FBQ0csTUFBTCxJQUFlSCxJQUFJLENBQUNHLE1BQUwsQ0FBWUMsR0FBWixDQUFnQixVQUFVQyxJQUFWLEVBQWdCQyxLQUFoQixFQUF1QjtBQUNsRCxZQUFJLENBQUNELElBQUksQ0FBQ0UsWUFBVixFQUF3QjtBQUN4Qiw0QkFBTztBQUFBLGlDQUNIO0FBQUcsZ0JBQUksRUFBRUYsSUFBSSxDQUFDRyxHQUFkO0FBQW1CLGtCQUFNLEVBQUMsUUFBMUI7QUFBbUMsZUFBRyxFQUFDLFVBQXZDO0FBQUEsb0NBQ0k7QUFBQSx3QkFBSUgsSUFBSSxDQUFDSDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBLHlCQUFRRyxJQUFJLENBQUNFLFlBQUwsSUFBcUIsSUFBSUUsSUFBSSxDQUFDQyxZQUFULENBQXNCLENBQUMsS0FBRCxFQUFRLElBQVIsQ0FBdEIsRUFBcUNDLE1BQXJDLENBQTRDTixJQUFJLENBQUNFLFlBQWpELENBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERyxXQUFTRCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFNSCxPQVJjO0FBSHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFtQkgsQ0FwQkQ7O0FBc0JlUCx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvVHJlbmRzQm94LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVHJlbmRzQm94ID0gKHsgaW5mbyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZHMtYm94XCI+XG4gICAgICAgICAgICB7aW5mby5sb2NhdGlvbnMgJiYgPGgzIGNsYXNzTmFtZT1cInRyZW5kcy1ib3hfX3RpdGxlXCI+PGltZyBzcmM9XCIuL3R3aXR0ZXIuc3ZnXCIgLz57aW5mby5sb2NhdGlvbnNbMF0ubmFtZX0gVHJlbmRzPC9oMz59XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidHJlbmRzLWJveF9fdHJlbmRzXCI+XG4gICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgIGluZm8udHJlbmRzICYmIGluZm8udHJlbmRzLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXRlbS50d2VldF92b2x1bWUpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e2l0ZW0udHdlZXRfdm9sdW1lICYmIG5ldyBJbnRsLk51bWJlckZvcm1hdChbJ2JhbicsICdpZCddKS5mb3JtYXQoaXRlbS50d2VldF92b2x1bWUpfSBUd2VldDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT47XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVuZHNCb3giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/TrendsBox.js\n");

/***/ }),

/***/ "./pages/components/map.js":
/*!*********************************!*\
  !*** ./pages/components/map.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"google-map-react\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MapMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapMarker */ \"./pages/components/MapMarker.js\");\n/* harmony import */ var _TrendsBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrendsBox */ \"./pages/components/TrendsBox.js\");\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/components/map.js\";\n\n\n\n\nvar turkey = {\n  lat: 41.015137,\n  lng: 28.979530\n};\n\nconst Map = ({\n  eventData,\n  center,\n  zoom\n}) => {\n  const {\n    0: locationInfo,\n    1: setLocationInfo\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({});\n  const {\n    0: trendsInfo,\n    1: setTrendsInfo\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({});\n  const markers = eventData.map(item => {\n    var lat = parseFloat(item.lat);\n    var lng = parseFloat(item.long);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MapMarker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      lat: turkey.lat,\n      lng: turkey.lng,\n      onClick: () => setLocationInfo(item)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 16\n    }, undefined);\n  });\n\n  function handleClick(e) {\n    var lat = e.lat;\n    var lng = e.lng;\n    fetch(\"/api/closest\", {\n      method: \"post\",\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        lat: lat,\n        lng: lng\n      })\n    }).then(res => res.json()).then(function (res) {\n      console.log(res);\n      const woeid = res[0].woeid;\n      fetch(\"/api/trends\", {\n        method: \"post\",\n        headers: {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          woeid: woeid\n        })\n      }).then(res => res.json()).then(function (response) {\n        var trends = response[0];\n        setTrendsInfo(trends);\n        console.log(trendsInfo);\n      });\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"map\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      bootstrapURLKeys: {\n        key: 'AIzaSyBKcbWgVYRSdCv0PCn6dCOvgdV7MjcE-R0'\n      },\n      defaultCenter: center,\n      defaultZoom: zoom,\n      onClick: e => handleClick(e)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }, undefined), trendsInfo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_TrendsBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      info: trendsInfo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 28\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 9\n  }, undefined);\n};\n\nMap.defaultProps = {\n  center: {\n    lat: 42.3265,\n    lng: -122.8756\n  },\n  zoom: 1\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL21hcC5qcz8zMzFmIl0sIm5hbWVzIjpbInR1cmtleSIsImxhdCIsImxuZyIsIk1hcCIsImV2ZW50RGF0YSIsImNlbnRlciIsInpvb20iLCJsb2NhdGlvbkluZm8iLCJzZXRMb2NhdGlvbkluZm8iLCJ1c2VTdGF0ZSIsInRyZW5kc0luZm8iLCJzZXRUcmVuZHNJbmZvIiwibWFya2VycyIsIm1hcCIsIml0ZW0iLCJwYXJzZUZsb2F0IiwibG9uZyIsImhhbmRsZUNsaWNrIiwiZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwid29laWQiLCJyZXNwb25zZSIsInRyZW5kcyIsImtleSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBRztBQUNUQyxLQUFHLEVBQUUsU0FESTtBQUVUQyxLQUFHLEVBQUU7QUFGSSxDQUFiOztBQUlBLE1BQU1DLEdBQUcsR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUMsUUFBYjtBQUFxQkM7QUFBckIsQ0FBRCxLQUFpQztBQUN6QyxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLENBQUMsRUFBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkYsc0RBQVEsQ0FBQyxFQUFELENBQTVDO0FBRUEsUUFBTUcsT0FBTyxHQUFHUixTQUFTLENBQUNTLEdBQVYsQ0FBY0MsSUFBSSxJQUFJO0FBQ2xDLFFBQUliLEdBQUcsR0FBR2MsVUFBVSxDQUFDRCxJQUFJLENBQUNiLEdBQU4sQ0FBcEI7QUFDQSxRQUFJQyxHQUFHLEdBQUdhLFVBQVUsQ0FBQ0QsSUFBSSxDQUFDRSxJQUFOLENBQXBCO0FBQ0Esd0JBQU8scUVBQUMsa0RBQUQ7QUFBVyxTQUFHLEVBQUVoQixNQUFNLENBQUNDLEdBQXZCO0FBQTRCLFNBQUcsRUFBRUQsTUFBTSxDQUFDRSxHQUF4QztBQUE2QyxhQUFPLEVBQUUsTUFBTU0sZUFBZSxDQUFDTSxJQUFEO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDSCxHQUplLENBQWhCOztBQU9BLFdBQVNHLFdBQVQsQ0FBcUJDLENBQXJCLEVBQXdCO0FBQ3BCLFFBQUlqQixHQUFHLEdBQUdpQixDQUFDLENBQUNqQixHQUFaO0FBQ0EsUUFBSUMsR0FBRyxHQUFHZ0IsQ0FBQyxDQUFDaEIsR0FBWjtBQUNBaUIsU0FBSyxDQUFDLGNBQUQsRUFBaUI7QUFDbEJDLFlBQU0sRUFBRSxNQURVO0FBRWxCQyxhQUFPLEVBQUU7QUFDTCxrQkFBVSxrQkFETDtBQUVMLHdCQUFnQjtBQUZYLE9BRlM7QUFNbEJDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDakJ2QixXQUFHLEVBQUVBLEdBRFk7QUFFakJDLFdBQUcsRUFBRUE7QUFGWSxPQUFmO0FBTlksS0FBakIsQ0FBTCxDQVdLdUIsSUFYTCxDQVdVQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQVhqQixFQVlLRixJQVpMLENBWVUsVUFBVUMsR0FBVixFQUFlO0FBQ2pCRSxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBWjtBQUNBLFlBQU1JLEtBQUssR0FBR0osR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPSSxLQUFyQjtBQUVBWCxXQUFLLENBQUMsYUFBRCxFQUFnQjtBQUNqQkMsY0FBTSxFQUFFLE1BRFM7QUFFakJDLGVBQU8sRUFBRTtBQUNMLG9CQUFVLGtCQURMO0FBRUwsMEJBQWdCO0FBRlgsU0FGUTtBQU1qQkMsWUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQk0sZUFBSyxFQUFFQTtBQURVLFNBQWY7QUFOVyxPQUFoQixDQUFMLENBVUtMLElBVkwsQ0FVVUMsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUosRUFWakIsRUFXS0YsSUFYTCxDQVdVLFVBQVVNLFFBQVYsRUFBb0I7QUFDdEIsWUFBSUMsTUFBTSxHQUFHRCxRQUFRLENBQUMsQ0FBRCxDQUFyQjtBQUNBcEIscUJBQWEsQ0FBQ3FCLE1BQUQsQ0FBYjtBQUNBSixlQUFPLENBQUNDLEdBQVIsQ0FBWW5CLFVBQVo7QUFDSCxPQWZMO0FBZ0JILEtBaENMO0FBaUNIOztBQUVELHNCQUNJO0FBQUssTUFBRSxFQUFDLEtBQVI7QUFBQSw0QkFDSSxxRUFBQyx1REFBRDtBQUNJLHNCQUFnQixFQUFFO0FBQUV1QixXQUFHLEVBQUU7QUFBUCxPQUR0QjtBQUVJLG1CQUFhLEVBQUU1QixNQUZuQjtBQUdJLGlCQUFXLEVBQUVDLElBSGpCO0FBSUksYUFBTyxFQUFHWSxDQUFELElBQU9ELFdBQVcsQ0FBQ0MsQ0FBRDtBQUovQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBUUtSLFVBQVUsaUJBQUkscUVBQUMsa0RBQUQ7QUFBVyxVQUFJLEVBQUVBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBWUgsQ0E3REQ7O0FBK0RBUCxHQUFHLENBQUMrQixZQUFKLEdBQW1CO0FBQ2Y3QixRQUFNLEVBQUU7QUFDSkosT0FBRyxFQUFFLE9BREQ7QUFFSkMsT0FBRyxFQUFFLENBQUM7QUFGRixHQURPO0FBS2ZJLE1BQUksRUFBRTtBQUxTLENBQW5CO0FBUWVILGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9tYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCdcbmltcG9ydCBNYXBNYXJrZXIgZnJvbSAnLi9NYXBNYXJrZXInXG5pbXBvcnQgVHJlbmRzQm94IGZyb20gJy4vVHJlbmRzQm94J1xuXG52YXIgdHVya2V5ID0ge1xuICAgIGxhdDogNDEuMDE1MTM3LFxuICAgIGxuZzogMjguOTc5NTMwXG59XG5jb25zdCBNYXAgPSAoeyBldmVudERhdGEsIGNlbnRlciwgem9vbSB9KSA9PiB7XG4gICAgY29uc3QgW2xvY2F0aW9uSW5mbywgc2V0TG9jYXRpb25JbmZvXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbdHJlbmRzSW5mbywgc2V0VHJlbmRzSW5mb10gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgICBjb25zdCBtYXJrZXJzID0gZXZlbnREYXRhLm1hcChpdGVtID0+IHtcbiAgICAgICAgdmFyIGxhdCA9IHBhcnNlRmxvYXQoaXRlbS5sYXQpO1xuICAgICAgICB2YXIgbG5nID0gcGFyc2VGbG9hdChpdGVtLmxvbmcpO1xuICAgICAgICByZXR1cm4gPE1hcE1hcmtlciBsYXQ9e3R1cmtleS5sYXR9IGxuZz17dHVya2V5LmxuZ30gb25DbGljaz17KCkgPT4gc2V0TG9jYXRpb25JbmZvKGl0ZW0pfSAvPlxuICAgIH0pXG5cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgdmFyIGxhdCA9IGUubGF0O1xuICAgICAgICB2YXIgbG5nID0gZS5sbmc7XG4gICAgICAgIGZldGNoKFwiL2FwaS9jbG9zZXN0XCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGxhdDogbGF0LFxuICAgICAgICAgICAgICAgIGxuZzogbG5nXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIGNvbnN0IHdvZWlkID0gcmVzWzBdLndvZWlkO1xuXG4gICAgICAgICAgICAgICAgZmV0Y2goXCIvYXBpL3RyZW5kc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvZWlkOiB3b2VpZFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmVuZHMgPSByZXNwb25zZVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRyZW5kc0luZm8odHJlbmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRyZW5kc0luZm8pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwibWFwXCI+XG4gICAgICAgICAgICA8R29vZ2xlTWFwUmVhY3RcbiAgICAgICAgICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7IGtleTogJ0FJemFTeUJLY2JXZ1ZZUlNkQ3YwUENuNmRDT3ZnZFY3TWpjRS1SMCcgfX1cbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2VudGVyPXtjZW50ZXJ9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFpvb209e3pvb219XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9Hb29nbGVNYXBSZWFjdD5cbiAgICAgICAgICAgIHt0cmVuZHNJbmZvICYmIDxUcmVuZHNCb3ggaW5mbz17dHJlbmRzSW5mb30gLz59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuTWFwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjZW50ZXI6IHtcbiAgICAgICAgbGF0OiA0Mi4zMjY1LFxuICAgICAgICBsbmc6IC0xMjIuODc1NlxuICAgIH0sXG4gICAgem9vbTogMVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/map.js\n");

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