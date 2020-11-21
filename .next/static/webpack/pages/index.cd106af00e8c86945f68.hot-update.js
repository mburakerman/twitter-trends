webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/map.js":
/*!*********************************!*\
  !*** ./pages/components/map.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/dist/index.modern.js\");\n/* harmony import */ var _MapMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapMarker */ \"./pages/components/MapMarker.js\");\n/* harmony import */ var _MapInfoBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapInfoBox */ \"./pages/components/MapInfoBox.js\");\n\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/components/map.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar turkey = {\n  lat: 41.015137,\n  lng: 28.979530\n};\n\nvar Map = function Map(_ref) {\n  _s();\n\n  var eventData = _ref.eventData,\n      center = _ref.center,\n      zoom = _ref.zoom;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      locationInfo = _useState[0],\n      setLocationInfo = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      trendsInfo = _useState2[0],\n      setTrendsInfo = _useState2[1];\n\n  var markers = eventData.map(function (item) {\n    var lat = parseFloat(item.lat);\n    var lng = parseFloat(item[\"long\"]);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MapMarker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      lat: lat,\n      lng: lng,\n      onClick: function onClick() {\n        return setLocationInfo(item);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 16\n    }, _this);\n  });\n\n  function handleClick(e) {\n    var lat = e.lat;\n    var lng = e.lng;\n    fetch(\"/api/closest\", {\n      method: \"post\",\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        lat: lat,\n        lng: lng\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      console.log(res);\n      var woeid = res[0].woeid;\n      fetch(\"/api/trends\", {\n        method: \"post\",\n        headers: {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          woeid: woeid\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (response) {\n        var trends = response[0];\n        setTrendsInfo(trends);\n      });\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"map\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(google_map_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      bootstrapURLKeys: {\n        key: 'AIzaSyBKcbWgVYRSdCv0PCn6dCOvgdV7MjcE-R0'\n      },\n      defaultCenter: center,\n      defaultZoom: zoom,\n      onClick: function onClick(e) {\n        return handleClick(e);\n      },\n      children: markers\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"right\",\n      children: \"lorem\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }, _this), trendsInfo.trend.map(function (trend, index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: \"trend.name\"\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 24\n      }, this);\n    }), locationInfo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MapInfoBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      info: locationInfo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 30\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Map, \"2FPd+gSfSKzf9jaPsa0SHWTySKo=\");\n\n_c = Map;\nMap.defaultProps = {\n  center: {\n    lat: 42.3265,\n    lng: -122.8756\n  },\n  zoom: 1\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9tYXAuanM/MzMxZiJdLCJuYW1lcyI6WyJ0dXJrZXkiLCJsYXQiLCJsbmciLCJNYXAiLCJldmVudERhdGEiLCJjZW50ZXIiLCJ6b29tIiwidXNlU3RhdGUiLCJsb2NhdGlvbkluZm8iLCJzZXRMb2NhdGlvbkluZm8iLCJ0cmVuZHNJbmZvIiwic2V0VHJlbmRzSW5mbyIsIm1hcmtlcnMiLCJtYXAiLCJpdGVtIiwicGFyc2VGbG9hdCIsImhhbmRsZUNsaWNrIiwiZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwid29laWQiLCJyZXNwb25zZSIsInRyZW5kcyIsImtleSIsInRyZW5kIiwiaW5kZXgiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxNQUFNLEdBQUc7QUFDVEMsS0FBRyxFQUFFLFNBREk7QUFFVEMsS0FBRyxFQUFFO0FBRkksQ0FBYjs7QUFJQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFpQztBQUFBOztBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQkMsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLEVBQUQsQ0FEUDtBQUFBLE1BQ2xDQyxZQURrQztBQUFBLE1BQ3BCQyxlQURvQjs7QUFBQSxtQkFFTEYsc0RBQVEsQ0FBQyxFQUFELENBRkg7QUFBQSxNQUVsQ0csVUFGa0M7QUFBQSxNQUV0QkMsYUFGc0I7O0FBSXpDLE1BQU1DLE9BQU8sR0FBR1IsU0FBUyxDQUFDUyxHQUFWLENBQWMsVUFBQUMsSUFBSSxFQUFJO0FBQ2xDLFFBQUliLEdBQUcsR0FBR2MsVUFBVSxDQUFD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QUU7QUFDSkosT0FBRyxFQUFFLE9BREQ7QUFFSkMsT0FBRyxFQUFFLENBQUM7QUFGRixHQURPO0FBS2ZJLE1BQUksRUFBRTtBQUxTLENBQW5CO0FBUWVILGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9tYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCdcbmltcG9ydCBNYXBNYXJrZXIgZnJvbSAnLi9NYXBNYXJrZXInXG5pbXBvcnQgTWFwSW5mb0JveCBmcm9tICcuL01hcEluZm9Cb3gnXG5cbnZhciB0dXJrZXkgPSB7XG4gICAgbGF0OiA0MS4wMTUxMzcsXG4gICAgbG5nOiAyOC45Nzk1MzBcbn1cbmNvbnN0IE1hcCA9ICh7IGV2ZW50RGF0YSwgY2VudGVyLCB6b29tIH0pID0+IHtcbiAgICBjb25zdCBbbG9jYXRpb25JbmZvLCBzZXRMb2NhdGlvbkluZm9dID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFt0cmVuZHNJbmZvLCBzZXRUcmVuZHNJbmZvXSA9IHVzZVN0YXRlKHt9KTtcblxuICAgIGNvbnN0IG1hcmtlcnMgPSBldmVudERhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICB2YXIgbGF0ID0gcGFyc2VGbG9hdChpdGVtLmxhdCk7XG4gICAgICAgIHZhciBsbmcgPSBwYXJzZUZsb2F0KGl0ZW0ubG9uZyk7XG4gICAgICAgIHJldHVybiA8TWFwTWFya2VyIGxhdD17bGF0fSBsbmc9e2xuZ30gb25DbGljaz17KCkgPT4gc2V0TG9jYXRpb25JbmZvKGl0ZW0pfSAvPlxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIHZhciBsYXQgPSBlLmxhdDtcbiAgICAgICAgdmFyIGxuZyA9IGUubG5nO1xuICAgICAgICBmZXRjaChcIi9hcGkvY2xvc2VzdFwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBsYXQ6IGxhdCxcbiAgICAgICAgICAgICAgICBsbmc6IGxuZ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICBjb25zdCB3b2VpZCA9IHJlc1swXS53b2VpZDtcblxuICAgICAgICAgICAgICAgIGZldGNoKFwiL2FwaS90cmVuZHNcIiwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b2VpZDogd29laWRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJlbmRzID0gcmVzcG9uc2VbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUcmVuZHNJbmZvKHRyZW5kcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJtYXBcIj5cbiAgICAgICAgICAgIDxHb29nbGVNYXBSZWFjdFxuICAgICAgICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiAnQUl6YVN5QktjYldnVllSU2RDdjBQQ242ZENPdmdkVjdNamNFLVIwJyB9fVxuICAgICAgICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e2NlbnRlcn1cbiAgICAgICAgICAgICAgICBkZWZhdWx0Wm9vbT17em9vbX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21hcmtlcnN9XG4gICAgICAgICAgICA8L0dvb2dsZU1hcFJlYWN0PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmlnaHRcIj5sb3JlbTwvcD5cbiAgICAgICAgICAgIHt0cmVuZHNJbmZvLnRyZW5kLm1hcChmdW5jdGlvbiAodHJlbmQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT50cmVuZC5uYW1lPC9saT5cbiAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICB7bG9jYXRpb25JbmZvICYmIDxNYXBJbmZvQm94IGluZm89e2xvY2F0aW9uSW5mb30gLz59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuTWFwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjZW50ZXI6IHtcbiAgICAgICAgbGF0OiA0Mi4zMjY1LFxuICAgICAgICBsbmc6IC0xMjIuODc1NlxuICAgIH0sXG4gICAgem9vbTogMVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/map.js\n");

/***/ })

})