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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/components/TrendsBox.js\";\n\nconst TrendsBox = ({\n  info\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"trends-box\",\n    children: [info.locations && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      className: \"trends-box__title\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"./twitter.svg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 4,\n        columnNumber: 66\n      }, undefined), info.locations[0].name, \" Trends\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 32\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: \"trends-box__trends\",\n      children: info.trends && info.trends.map(function (item, index) {\n        if (!item.tweet_volume) return;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: item.url,\n            target: \"_blank\",\n            rel: \"noopener\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: item.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 11,\n              columnNumber: 33\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n              children: [item.tweet_volume && new Intl.NumberFormat(['ban', 'id']).format(item.tweet_volume), \" Tweet\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 12,\n              columnNumber: 33\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 10,\n            columnNumber: 29\n          }, this)\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 32\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrendsBox);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL1RyZW5kc0JveC5qcz8xODFjIl0sIm5hbWVzIjpbIlRyZW5kc0JveCIsImluZm8iLCJsb2NhdGlvbnMiLCJuYW1lIiwidHJlbmRzIiwibWFwIiwiaXRlbSIsImluZGV4IiwidHdlZXRfdm9sdW1lIiwidXJsIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsU0FBUyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFDNUIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLGVBQ0tBLElBQUksQ0FBQ0MsU0FBTCxpQkFBa0I7QUFBSSxlQUFTLEVBQUMsbUJBQWQ7QUFBQSw4QkFBa0M7QUFBSyxXQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFsQyxFQUE4REQsSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FBZixFQUFrQkMsSUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUR2QixlQUVJO0FBQUksZUFBUyxFQUFDLG9CQUFkO0FBQUEsZ0JBRVFGLElBQUksQ0FBQ0csTUFBTCxJQUFlSCxJQUFJLENBQUNHLE1BQUwsQ0FBWUMsR0FBWixDQUFnQixVQUFVQyxJQUFWLEVBQWdCQyxLQUFoQixFQUF1QjtBQUNsRCxZQUFJLENBQUNELElBQUksQ0FBQ0UsWUFBVixFQUF3QjtBQUN4Qiw0QkFBTztBQUFBLGlDQUNIO0FBQUcsZ0JBQUksRUFBRUYsSUFBSSxDQUFDRyxHQUFkO0FBQW1CLGtCQUFNLEVBQUMsUUFBMUI7QUFBbUMsZUFBRyxFQUFDLFVBQXZDO0FBQUEsb0NBQ0k7QUFBQSx3QkFBSUgsSUFBSSxDQUFDSDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBLHlCQUFRRyxJQUFJLENBQUNFLFlBQUwsSUFBcUIsSUFBSUUsSUFBSSxDQUFDQyxZQUFULENBQXNCLENBQUMsS0FBRCxFQUFRLElBQVIsQ0FBdEIsRUFBcUNDLE1BQXJDLENBQTRDTixJQUFJLENBQUNFLFlBQWpELENBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERyxXQUFTRCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFNSCxPQVJjO0FBRnZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFrQkgsQ0FuQkQ7O0FBcUJlUCx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvVHJlbmRzQm94LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVHJlbmRzQm94ID0gKHsgaW5mbyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZHMtYm94XCI+XG4gICAgICAgICAgICB7aW5mby5sb2NhdGlvbnMgJiYgPGgzIGNsYXNzTmFtZT1cInRyZW5kcy1ib3hfX3RpdGxlXCI+PGltZyBzcmM9XCIuL3R3aXR0ZXIuc3ZnXCIgLz57aW5mby5sb2NhdGlvbnNbMF0ubmFtZX0gVHJlbmRzPC9oMz59XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidHJlbmRzLWJveF9fdHJlbmRzXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbmZvLnRyZW5kcyAmJiBpbmZvLnRyZW5kcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0udHdlZXRfdm9sdW1lKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPntpdGVtLnR3ZWV0X3ZvbHVtZSAmJiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoWydiYW4nLCAnaWQnXSkuZm9ybWF0KGl0ZW0udHdlZXRfdm9sdW1lKX0gVHdlZXQ8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJlbmRzQm94Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/TrendsBox.js\n");

/***/ }),

/***/ "./pages/components/map.js":
/*!*********************************!*\
  !*** ./pages/components/map.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"google-map-react\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MapMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapMarker */ \"./pages/components/MapMarker.js\");\n/* harmony import */ var _TrendsBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrendsBox */ \"./pages/components/TrendsBox.js\");\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/components/map.js\";\n\n\n\n\nvar turkey = {\n  lat: 41.015137,\n  lng: 28.979530\n};\n\nconst Map = ({\n  eventData,\n  center,\n  zoom\n}) => {\n  const {\n    0: locationInfo,\n    1: setLocationInfo\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({});\n  const {\n    0: trendsInfo,\n    1: setTrendsInfo\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({});\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  /*const markers = eventData.map(item => {\n      var lat = parseFloat(item.lat);\n      var lng = parseFloat(item.long);\n      return <MapMarker lat={turkey.lat} lng={turkey.lng} onClick={() => setLocationInfo(item)} />\n  }) */\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    // woeid 1 is wordlwide\n    fetchTrends(\"1\");\n  }, []);\n\n  async function getClickedAreasWoeid(e) {\n    var clickedPosition = {\n      lat: e.lat,\n      lng: e.lng\n    };\n    await fetch(\"/api/closest\", {\n      method: \"post\",\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(clickedPosition)\n    }).then(res => res.json()).then(function (res) {\n      const woeid = res[0].woeid;\n      fetchTrends(woeid);\n    });\n  }\n\n  async function fetchTrends(woeid) {\n    setLoading(true);\n    await fetch(\"/api/trends\", {\n      method: \"post\",\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        woeid: woeid\n      })\n    }).then(res => res.json()).then(function (response) {\n      setLoading(false);\n      var trends = response[0];\n      setTrendsInfo(trends);\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"map\",\n    children: [!loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(google_map_react__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      bootstrapURLKeys: {\n        key: 'AIzaSyBKcbWgVYRSdCv0PCn6dCOvgdV7MjcE-R0'\n      },\n      defaultCenter: center,\n      defaultZoom: zoom,\n      onClick: e => getClickedAreasWoeid(e)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 25\n    }, undefined) : \"<h1>loading</h1>\", trendsInfo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_TrendsBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      info: trendsInfo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 28\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 9\n  }, undefined);\n};\n\nMap.defaultProps = {\n  center: {\n    lat: 42.3265,\n    lng: -122.8756\n  },\n  zoom: 1\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL21hcC5qcz8zMzFmIl0sIm5hbWVzIjpbInR1cmtleSIsImxhdCIsImxuZyIsIk1hcCIsImV2ZW50RGF0YSIsImNlbnRlciIsInpvb20iLCJsb2NhdGlvbkluZm8iLCJzZXRMb2NhdGlvbkluZm8iLCJ1c2VTdGF0ZSIsInRyZW5kc0luZm8iLCJzZXRUcmVuZHNJbmZvIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJmZXRjaFRyZW5kcyIsImdldENsaWNrZWRBcmVhc1dvZWlkIiwiZSIsImNsaWNrZWRQb3NpdGlvbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJ3b2VpZCIsInJlc3BvbnNlIiwidHJlbmRzIiwia2V5IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsTUFBTSxHQUFHO0FBQ1RDLEtBQUcsRUFBRSxTQURJO0FBRVRDLEtBQUcsRUFBRTtBQUZJLENBQWI7O0FBSUEsTUFBTUMsR0FBRyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQyxRQUFiO0FBQXFCQztBQUFyQixDQUFELEtBQWlDO0FBQ3pDLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Msc0RBQVEsQ0FBQyxFQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCRixzREFBUSxDQUFDLEVBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JKLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUdBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUlLLHlEQUFTLENBQUMsTUFBTTtBQUNaO0FBQ0FDLGVBQVcsQ0FBQyxHQUFELENBQVg7QUFDSCxHQUhRLEVBR04sRUFITSxDQUFUOztBQU1BLGlCQUFlQyxvQkFBZixDQUFvQ0MsQ0FBcEMsRUFBdUM7QUFDbkMsUUFBSUMsZUFBZSxHQUFHO0FBQ2xCakIsU0FBRyxFQUFFZ0IsQ0FBQyxDQUFDaEIsR0FEVztBQUVsQkMsU0FBRyxFQUFFZSxDQUFDLENBQUNmO0FBRlcsS0FBdEI7QUFLQSxVQUFNaUIsS0FBSyxDQUFDLGNBQUQsRUFBaUI7QUFDeEJDLFlBQU0sRUFBRSxNQURnQjtBQUV4QkMsYUFBTyxFQUFFO0FBQ0wsa0JBQVUsa0JBREw7QUFFTCx3QkFBZ0I7QUFGWCxPQUZlO0FBTXhCQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixlQUFmO0FBTmtCLEtBQWpCLENBQUwsQ0FRRE8sSUFSQyxDQVFJQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQVJYLEVBU0RGLElBVEMsQ0FTSSxVQUFVQyxHQUFWLEVBQWU7QUFDakIsWUFBTUUsS0FBSyxHQUFHRixHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9FLEtBQXJCO0FBQ0FiLGlCQUFXLENBQUNhLEtBQUQsQ0FBWDtBQUNILEtBWkMsQ0FBTjtBQWFIOztBQUNELGlCQUFlYixXQUFmLENBQTJCYSxLQUEzQixFQUFrQztBQUM5QmYsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBLFVBQU1NLEtBQUssQ0FBQyxhQUFELEVBQWdCO0FBQ3ZCQyxZQUFNLEVBQUUsTUFEZTtBQUV2QkMsYUFBTyxFQUFFO0FBQ0wsa0JBQVUsa0JBREw7QUFFTCx3QkFBZ0I7QUFGWCxPQUZjO0FBTXZCQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCSSxhQUFLLEVBQUVBO0FBRFUsT0FBZjtBQU5pQixLQUFoQixDQUFMLENBVURILElBVkMsQ0FVSUMsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUosRUFWWCxFQVdERixJQVhDLENBV0ksVUFBVUksUUFBVixFQUFvQjtBQUN0QmhCLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0EsVUFBSWlCLE1BQU0sR0FBR0QsUUFBUSxDQUFDLENBQUQsQ0FBckI7QUFDQWxCLG1CQUFhLENBQUNtQixNQUFELENBQWI7QUFDSCxLQWZDLENBQU47QUFnQkg7O0FBRUQsc0JBQ0k7QUFBSyxNQUFFLEVBQUMsS0FBUjtBQUFBLGVBQ0ssQ0FBQ2xCLE9BQUQsZ0JBQVcscUVBQUMsdURBQUQ7QUFDUixzQkFBZ0IsRUFBRTtBQUFFbUIsV0FBRyxFQUFFO0FBQVAsT0FEVjtBQUVSLG1CQUFhLEVBQUUxQixNQUZQO0FBR1IsaUJBQVcsRUFBRUMsSUFITDtBQUlSLGFBQU8sRUFBR1csQ0FBRCxJQUFPRCxvQkFBb0IsQ0FBQ0MsQ0FBRDtBQUo1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFYLEdBTW1CLGtCQVB4QixFQVFLUCxVQUFVLGlCQUFJLHFFQUFDLGtEQUFEO0FBQVcsVUFBSSxFQUFFQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVlILENBdEVEOztBQXdFQVAsR0FBRyxDQUFDNkIsWUFBSixHQUFtQjtBQUNmM0IsUUFBTSxFQUFFO0FBQ0pKLE9BQUcsRUFBRSxPQUREO0FBRUpDLE9BQUcsRUFBRSxDQUFDO0FBRkYsR0FETztBQUtmSSxNQUFJLEVBQUU7QUFMUyxDQUFuQjtBQVFlSCxrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvbWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnXG5pbXBvcnQgTWFwTWFya2VyIGZyb20gJy4vTWFwTWFya2VyJ1xuaW1wb3J0IFRyZW5kc0JveCBmcm9tICcuL1RyZW5kc0JveCdcblxudmFyIHR1cmtleSA9IHtcbiAgICBsYXQ6IDQxLjAxNTEzNyxcbiAgICBsbmc6IDI4Ljk3OTUzMFxufVxuY29uc3QgTWFwID0gKHsgZXZlbnREYXRhLCBjZW50ZXIsIHpvb20gfSkgPT4ge1xuICAgIGNvbnN0IFtsb2NhdGlvbkluZm8sIHNldExvY2F0aW9uSW5mb10gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW3RyZW5kc0luZm8sIHNldFRyZW5kc0luZm9dID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cbiAgICAvKmNvbnN0IG1hcmtlcnMgPSBldmVudERhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICB2YXIgbGF0ID0gcGFyc2VGbG9hdChpdGVtLmxhdCk7XG4gICAgICAgIHZhciBsbmcgPSBwYXJzZUZsb2F0KGl0ZW0ubG9uZyk7XG4gICAgICAgIHJldHVybiA8TWFwTWFya2VyIGxhdD17dHVya2V5LmxhdH0gbG5nPXt0dXJrZXkubG5nfSBvbkNsaWNrPXsoKSA9PiBzZXRMb2NhdGlvbkluZm8oaXRlbSl9IC8+XG4gICAgfSkgKi9cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIHdvZWlkIDEgaXMgd29yZGx3aWRlXG4gICAgICAgIGZldGNoVHJlbmRzKFwiMVwiKTtcbiAgICB9LCBbXSlcblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xpY2tlZEFyZWFzV29laWQoZSkge1xuICAgICAgICB2YXIgY2xpY2tlZFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgbGF0OiBlLmxhdCxcbiAgICAgICAgICAgIGxuZzogZS5sbmdcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGZldGNoKFwiL2FwaS9jbG9zZXN0XCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2xpY2tlZFBvc2l0aW9uKVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd29laWQgPSByZXNbMF0ud29laWQ7XG4gICAgICAgICAgICAgICAgZmV0Y2hUcmVuZHMod29laWQpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUcmVuZHMod29laWQpIHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICBhd2FpdCBmZXRjaChcIi9hcGkvdHJlbmRzXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHdvZWlkOiB3b2VpZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgdmFyIHRyZW5kcyA9IHJlc3BvbnNlWzBdO1xuICAgICAgICAgICAgICAgIHNldFRyZW5kc0luZm8odHJlbmRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJtYXBcIj5cbiAgICAgICAgICAgIHshbG9hZGluZyA/IDxHb29nbGVNYXBSZWFjdFxuICAgICAgICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiAnQUl6YVN5QktjYldnVllSU2RDdjBQQ242ZENPdmdkVjdNamNFLVIwJyB9fVxuICAgICAgICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e2NlbnRlcn1cbiAgICAgICAgICAgICAgICBkZWZhdWx0Wm9vbT17em9vbX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZ2V0Q2xpY2tlZEFyZWFzV29laWQoZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L0dvb2dsZU1hcFJlYWN0PiA6IFwiPGgxPmxvYWRpbmc8L2gxPlwifVxuICAgICAgICAgICAge3RyZW5kc0luZm8gJiYgPFRyZW5kc0JveCBpbmZvPXt0cmVuZHNJbmZvfSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5NYXAuZGVmYXVsdFByb3BzID0ge1xuICAgIGNlbnRlcjoge1xuICAgICAgICBsYXQ6IDQyLjMyNjUsXG4gICAgICAgIGxuZzogLTEyMi44NzU2XG4gICAgfSxcbiAgICB6b29tOiAxXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/map.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/map.js */ \"./pages/components/map.js\");\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/index.js\";\n\n\n\nfunction Home() {\n  const {\n    0: eventData,\n    1: setEventData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchEvents = async () => {\n      setLoading(true);\n      const res = await fetch('/api/countries');\n      const countries = await res.json();\n      setEventData(countries);\n      setLoading(false);\n    };\n\n    fetchEvents();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Twitter Trends\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_map_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJldmVudERhdGEiLCJzZXRFdmVudERhdGEiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZmV0Y2hFdmVudHMiLCJyZXMiLCJmZXRjaCIsImNvdW50cmllcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBRUFHLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLFdBQVcsR0FBRyxZQUFZO0FBQzlCRixnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBLFlBQU1HLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsZ0JBQUQsQ0FBdkI7QUFDQSxZQUFNQyxTQUFTLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQXhCO0FBRUFULGtCQUFZLENBQUNRLFNBQUQsQ0FBWjtBQUNBTCxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBUEQ7O0FBU0FFLGVBQVc7QUFDWixHQVhRLEVBV04sRUFYTSxDQUFUO0FBY0Esc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFBLDZCQUNFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTWFwIGZyb20gXCIuL2NvbXBvbmVudHMvbWFwLmpzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2V2ZW50RGF0YSwgc2V0RXZlbnREYXRhXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRXZlbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvY291bnRyaWVzJylcbiAgICAgIGNvbnN0IGNvdW50cmllcyA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgICAgc2V0RXZlbnREYXRhKGNvdW50cmllcylcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuXG4gICAgZmV0Y2hFdmVudHMoKVxuICB9LCBbXSlcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VHdpdHRlciBUcmVuZHM8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluID5cbiAgICAgICAgPE1hcCAvPlxuXG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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