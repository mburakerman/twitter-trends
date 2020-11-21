webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/map.js":
/*!*********************************!*\
  !*** ./pages/components/map.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/dist/index.modern.js\");\n/* harmony import */ var _MapMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapMarker */ \"./pages/components/MapMarker.js\");\n/* harmony import */ var _MapInfoBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapInfoBox */ \"./pages/components/MapInfoBox.js\");\n\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/components/map.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar turkey = {\n  lat: 41.015137,\n  lng: 28.979530\n};\n\nvar Map = function Map(_ref) {\n  _s();\n\n  var eventData = _ref.eventData,\n      center = _ref.center,\n      zoom = _ref.zoom;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      locationInfo = _useState[0],\n      setLocationInfo = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      trendInfo = _useState2[0],\n      setTrendInfo = _useState2[1];\n\n  var markers = eventData.map(function (item) {\n    var lat = parseFloat(item.lat);\n    var lng = parseFloat(item[\"long\"]);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MapMarker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      lat: lat,\n      lng: lng,\n      onClick: function onClick() {\n        return setLocationInfo(item);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 16\n    }, _this);\n  });\n\n  function handleClick(e) {\n    var lat = e.lat;\n    var lng = e.lng;\n    fetch(\"/api/closest\", {\n      method: \"post\",\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        lat: lat,\n        lng: lng\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      console.log(res);\n      var woeid = res[0].woeid;\n      fetch(\"/api/trends\", {\n        method: \"post\",\n        headers: {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          woeid: woeid\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (response) {\n        var trends = response[0];\n        setTrendsInfo(trends);\n      });\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"map\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(google_map_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      bootstrapURLKeys: {\n        key: 'AIzaSyBKcbWgVYRSdCv0PCn6dCOvgdV7MjcE-R0'\n      },\n      defaultCenter: center,\n      defaultZoom: zoom,\n      onClick: function onClick(e) {\n        return handleClick(e);\n      },\n      children: markers\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"right\",\n      children: \"lorem\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }, _this), locationInfo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MapInfoBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      info: locationInfo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 30\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Map, \"ZoIR/atU8I3uaeZieeNO+NVutXs=\");\n\n_c = Map;\nMap.defaultProps = {\n  center: {\n    lat: 42.3265,\n    lng: -122.8756\n  },\n  zoom: 1\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9tYXAuanM/MzMxZiJdLCJuYW1lcyI6WyJ0dXJrZXkiLCJsYXQiLCJsbmciLCJNYXAiLCJldmVudERhdGEiLCJjZW50ZXIiLCJ6b29tIiwidXNlU3RhdGUiLCJsb2NhdGlvbkluZm8iLCJzZXRMb2NhdGlvbkluZm8iLCJ0cmVuZEluZm8iLCJzZXRUcmVuZEluZm8iLCJtYXJrZXJzIiwibWFwIiwiaXRlbSIsInBhcnNlRmxvYXQiLCJoYW5kbGVDbGljayIsImUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIndvZWlkIiwicmVzcG9uc2UiLCJ0cmVuZHMiLCJzZXRUcmVuZHNJbmZvIiwia2V5IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsTUFBTSxHQUFHO0FBQ1RDLEtBQUcsRUFBRSxTQURJO0FBRVRDLEtBQUcsRUFBRTtBQUZJLENBQWI7O0FBSUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBaUM7QUFBQTs7QUFBQSxNQUE5QkMsU0FBOEIsUUFBOUJBLFNBQThCO0FBQUEsTUFBbkJDLE1BQW1CLFFBQW5CQSxNQUFtQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxFQUFELENBRFA7QUFBQSxNQUNsQ0MsWUFEa0M7QUFBQSxNQUNwQkMsZUFEb0I7O0FBQUEsbUJBRVBGLHNEQUFRLENBQUMsRUFBRCxDQUZEO0FBQUEsTUFFbENHLFNBRmtDO0FBQUEsTUFFdkJDLFlBRnVCOztBQUl6QyxNQUFNQyxPQUFPLEdBQUdSLFNBQVMsQ0FBQ1MsR0FBVixDQUFjLFVBQUFDLElBQUksRUFBSTtBQUNsQyxRQUFJYixHQUFHLEdBQUdjLFVBQVUsQ0FBQ0Qs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bXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCdcbmltcG9ydCBNYXBNYXJrZXIgZnJvbSAnLi9NYXBNYXJrZXInXG5pbXBvcnQgTWFwSW5mb0JveCBmcm9tICcuL01hcEluZm9Cb3gnXG5cbnZhciB0dXJrZXkgPSB7XG4gICAgbGF0OiA0MS4wMTUxMzcsXG4gICAgbG5nOiAyOC45Nzk1MzBcbn1cbmNvbnN0IE1hcCA9ICh7IGV2ZW50RGF0YSwgY2VudGVyLCB6b29tIH0pID0+IHtcbiAgICBjb25zdCBbbG9jYXRpb25JbmZvLCBzZXRMb2NhdGlvbkluZm9dID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFt0cmVuZEluZm8sIHNldFRyZW5kSW5mb10gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgICBjb25zdCBtYXJrZXJzID0gZXZlbnREYXRhLm1hcChpdGVtID0+IHtcbiAgICAgICAgdmFyIGxhdCA9IHBhcnNlRmxvYXQoaXRlbS5sYXQpO1xuICAgICAgICB2YXIgbG5nID0gcGFyc2VGbG9hdChpdGVtLmxvbmcpO1xuICAgICAgICByZXR1cm4gPE1hcE1hcmtlciBsYXQ9e2xhdH0gbG5nPXtsbmd9IG9uQ2xpY2s9eygpID0+IHNldExvY2F0aW9uSW5mbyhpdGVtKX0gLz5cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgICAgICB2YXIgbGF0ID0gZS5sYXQ7XG4gICAgICAgIHZhciBsbmcgPSBlLmxuZztcbiAgICAgICAgZmV0Y2goXCIvYXBpL2Nsb3Nlc3RcIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbGF0OiBsYXQsXG4gICAgICAgICAgICAgICAgbG5nOiBsbmdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgY29uc3Qgd29laWQgPSByZXNbMF0ud29laWQ7XG5cbiAgICAgICAgICAgICAgICBmZXRjaChcIi9hcGkvdHJlbmRzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgd29laWQ6IHdvZWlkXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyZW5kcyA9IHJlc3BvbnNlWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VHJlbmRzSW5mbyh0cmVuZHMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cIm1hcFwiPlxuICAgICAgICAgICAgPEdvb2dsZU1hcFJlYWN0XG4gICAgICAgICAgICAgICAgYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6ICdBSXphU3lCS2NiV2dWWVJTZEN2MFBDbjZkQ092Z2RWN01qY0UtUjAnIH19XG4gICAgICAgICAgICAgICAgZGVmYXVsdENlbnRlcj17Y2VudGVyfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRab29tPXt6b29tfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bWFya2Vyc31cbiAgICAgICAgICAgIDwvR29vZ2xlTWFwUmVhY3Q+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyaWdodFwiPmxvcmVtPC9wPlxuXG5cbiAgICAgICAgICAgIHtsb2NhdGlvbkluZm8gJiYgPE1hcEluZm9Cb3ggaW5mbz17bG9jYXRpb25JbmZvfSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5NYXAuZGVmYXVsdFByb3BzID0ge1xuICAgIGNlbnRlcjoge1xuICAgICAgICBsYXQ6IDQyLjMyNjUsXG4gICAgICAgIGxuZzogLTEyMi44NzU2XG4gICAgfSxcbiAgICB6b29tOiAxXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/map.js\n");

/***/ })

})