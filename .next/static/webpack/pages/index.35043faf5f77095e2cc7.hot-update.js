webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/map.js":
/*!*********************************!*\
  !*** ./pages/components/map.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/dist/index.modern.js\");\n/* harmony import */ var _MapMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapMarker */ \"./pages/components/MapMarker.js\");\n/* harmony import */ var _MapInfoBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapInfoBox */ \"./pages/components/MapInfoBox.js\");\n\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/components/map.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar turkey = {\n  lat: 41.015137,\n  lng: 28.979530\n};\n\nvar Map = function Map(_ref) {\n  _s();\n\n  var eventData = _ref.eventData,\n      center = _ref.center,\n      zoom = _ref.zoom;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      locationInfo = _useState[0],\n      setLocationInfo = _useState[1];\n\n  var markers = eventData.map(function (ev) {\n    var lat = parseFloat(ev.lat);\n    var lng = parseFloat(ev[\"long\"]);\n    console.log(ev);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MapMarker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      lat: lat,\n      lng: lng,\n      onClick: function onClick() {\n        return setLocationInfo({\n          ev: ev\n        });\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 16\n    }, _this);\n  });\n\n  function handleClick(e) {\n    var lat = e.lat;\n    var lng = e.lng;\n    fetch(\"/api/closest\", {\n      method: \"post\",\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        lat: lat,\n        lng: lng\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      console.log(res);\n      var woeid = res[0].woeid;\n      fetch(\"/api/trends\", {\n        method: \"post\",\n        headers: {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          woeid: woeid\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (r) {//console.log(r)\n      });\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"map\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(google_map_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      bootstrapURLKeys: {\n        key: 'AIzaSyBKcbWgVYRSdCv0PCn6dCOvgdV7MjcE-R0'\n      },\n      defaultCenter: center,\n      defaultZoom: zoom,\n      onClick: function onClick(e) {\n        return handleClick(e);\n      },\n      children: markers\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"right\",\n      children: [\"lorem \", locationInfo]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }, _this), locationInfo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MapInfoBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      info: locationInfo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 30\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Map, \"12TQ7nOZavxYGEoGTr51i7Gzxxc=\");\n\n_c = Map;\nMap.defaultProps = {\n  center: {\n    lat: 42.3265,\n    lng: -122.8756\n  },\n  zoom: 1\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9tYXAuanM/MzMxZiJdLCJuYW1lcyI6WyJ0dXJrZXkiLCJsYXQiLCJsbmciLCJNYXAiLCJldmVudERhdGEiLCJjZW50ZXIiLCJ6b29tIiwidXNlU3RhdGUiLCJsb2NhdGlvbkluZm8iLCJzZXRMb2NhdGlvbkluZm8iLCJtYXJrZXJzIiwibWFwIiwiZXYiLCJwYXJzZUZsb2F0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwiZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJ3b2VpZCIsInIiLCJrZXkiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxNQUFNLEdBQUc7QUFDVEMsS0FBRyxFQUFFLFNBREk7QUFFVEMsS0FBRyxFQUFFO0FBRkksQ0FBYjs7QUFJQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFpQztBQUFBOztBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQkMsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLElBQUQsQ0FEUDtBQUFBLE1BQ2xDQyxZQURrQztBQUFBLE1BQ3BCQyxlQURvQjs7QUFHekMsTUFBTUMsT0FBTyxHQUFHTixTQUFTLENBQUNPLEdBQVYsQ0FBYyxVQUFBQyxFQUFFLEVBQUk7QUFDaEMsUUFBSVgsR0FBRyxHQUFHWSxVQUFVLENBQUNELEVBQUUsQ0FBQ1gsR0FBSixDQUFwQjtBQUNBLFFBQUlDLEdBQUcsR0FBR1csVUFBVSxDQUFDRCxFQUFFLFFBQUgsQ0FBcEI7QUFDQUUsV0FBTyxDQUFDQyxHQUFSLENBQVlILEVBQVo7QUFDQSx3QkFBTyxxRUFBQyxrREFBRDtBQUFXLFNBQUcsRUFBRVgsR0FBaEI7QUFBcUIsU0FBRyxFQUFFQyxHQUExQjtBQUErQixhQUFPLEVBQUU7QUFBQSxlQUFNTyxlQUFlLENBQUM7QUFBRUcsWUFBRSxFQUFGQTtBQUFGLFNBQUQsQ0FBckI7QUFBQTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDSCxHQUxlLENBQWhCOztBQU9BLFdBQVNJLFdBQVQsQ0FBcUJDLENBQXJCLEVBQXdCO0FBQ3BCLFFBQUloQixHQUFHLEdBQUdnQixDQUFDLENBQUNoQixHQUFaO0FBQ0EsUUFBSUMsR0FBRyxHQUFHZSxDQUFDLENBQUNmLEdBQVo7QUFDQWdCLFNBQUssQ0FBQyxjQUFELEVBQWlCO0FBQ2xCQyxZQUFNLEVBQUUsTUFEVTtBQUVsQkMsYUFBTyxFQUFFO0FBQ0wsa0JBQVUsa0JBREw7QUFFTCx3QkFBZ0I7QUFGWCxPQUZTO0FBTWxCQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCdEIsV0FBRyxFQUFFQSxHQURZO0FBRWpCQyxXQUFHLEVBQUVBO0FBRlksT0FBZjtBQU5ZLEtBQWpCLENBQUwsQ0FXS3NCLElBWEwsQ0FXVSxVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxLQVhiLEVBWUtGLElBWkwsQ0FZVSxVQUFVQyxHQUFWLEVBQWU7QUFDakJYLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0EsVUFBTUUsS0FBSyxHQUFHRixHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9FLEtBQXJCO0FBRUFULFdBQUssQ0FBQyxhQUFELEVBQWdCO0FBQ2pCQyxjQUFNLEVBQUUsTUFEUztBQUVqQkMsZUFBTyxFQUFFO0FBQ0wsb0JBQVUsa0JBREw7QUFFTCwwQkFBZ0I7QUFGWCxTQUZRO0FBTWpCQyxZQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCSSxlQUFLLEVBQUVBO0FBRFUsU0FBZjtBQU5XLE9BQWhCLENBQUwsQ0FVS0gsSUFWTCxDQVVVLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLE9BVmIsRUFXS0YsSUFYTCxDQVdVLFVBQVVJLENBQVYsRUFBYSxDQUNmO0FBQ0gsT0FiTDtBQWNILEtBOUJMO0FBK0JIOztBQUVELHNCQUNJO0FBQUssTUFBRSxFQUFDLEtBQVI7QUFBQSw0QkFDSSxxRUFBQyx3REFBRDtBQUNJLHNCQUFnQixFQUFFO0FBQUVDLFdBQUcsRUFBRTtBQUFQLE9BRHRCO0FBRUksbUJBQWEsRUFBRXhCLE1BRm5CO0FBR0ksaUJBQVcsRUFBRUMsSUFIakI7QUFJSSxhQUFPLEVBQUUsaUJBQUNXLENBQUQ7QUFBQSxlQUFPRCxXQUFXLENBQUNDLENBQUQsQ0FBbEI7QUFBQSxPQUpiO0FBQUEsZ0JBTUtQO0FBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBU0k7QUFBRyxlQUFTLEVBQUMsT0FBYjtBQUFBLDJCQUE0QkYsWUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEosRUFXS0EsWUFBWSxpQkFBSSxxRUFBQyxtREFBRDtBQUFZLFVBQUksRUFBRUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWVILENBN0REOztHQUFNTCxHOztLQUFBQSxHO0FBK0ROQSxHQUFHLENBQUMyQixZQUFKLEdBQW1CO0FBQ2Z6QixRQUFNLEVBQUU7QUFDSkosT0FBRyxFQUFFLE9BREQ7QUFFSkMsT0FBRyxFQUFFLENBQUM7QUFGRixHQURPO0FBS2ZJLE1BQUksRUFBRTtBQUxTLENBQW5CO0FBUWVILGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9tYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCdcbmltcG9ydCBNYXBNYXJrZXIgZnJvbSAnLi9NYXBNYXJrZXInXG5pbXBvcnQgTWFwSW5mb0JveCBmcm9tICcuL01hcEluZm9Cb3gnXG5cbnZhciB0dXJrZXkgPSB7XG4gICAgbGF0OiA0MS4wMTUxMzcsXG4gICAgbG5nOiAyOC45Nzk1MzBcbn1cbmNvbnN0IE1hcCA9ICh7IGV2ZW50RGF0YSwgY2VudGVyLCB6b29tIH0pID0+IHtcbiAgICBjb25zdCBbbG9jYXRpb25JbmZvLCBzZXRMb2NhdGlvbkluZm9dID0gdXNlU3RhdGUobnVsbClcblxuICAgIGNvbnN0IG1hcmtlcnMgPSBldmVudERhdGEubWFwKGV2ID0+IHtcbiAgICAgICAgdmFyIGxhdCA9IHBhcnNlRmxvYXQoZXYubGF0KTtcbiAgICAgICAgdmFyIGxuZyA9IHBhcnNlRmxvYXQoZXYubG9uZylcbiAgICAgICAgY29uc29sZS5sb2coZXYpXG4gICAgICAgIHJldHVybiA8TWFwTWFya2VyIGxhdD17bGF0fSBsbmc9e2xuZ30gb25DbGljaz17KCkgPT4gc2V0TG9jYXRpb25JbmZvKHsgZXYgfSl9IC8+XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgdmFyIGxhdCA9IGUubGF0O1xuICAgICAgICB2YXIgbG5nID0gZS5sbmc7XG4gICAgICAgIGZldGNoKFwiL2FwaS9jbG9zZXN0XCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGxhdDogbGF0LFxuICAgICAgICAgICAgICAgIGxuZzogbG5nXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIGNvbnN0IHdvZWlkID0gcmVzWzBdLndvZWlkO1xuXG4gICAgICAgICAgICAgICAgZmV0Y2goXCIvYXBpL3RyZW5kc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvZWlkOiB3b2VpZFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwibWFwXCI+XG4gICAgICAgICAgICA8R29vZ2xlTWFwUmVhY3RcbiAgICAgICAgICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7IGtleTogJ0FJemFTeUJLY2JXZ1ZZUlNkQ3YwUENuNmRDT3ZnZFY3TWpjRS1SMCcgfX1cbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2VudGVyPXtjZW50ZXJ9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFpvb209e3pvb219XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttYXJrZXJzfVxuICAgICAgICAgICAgPC9Hb29nbGVNYXBSZWFjdD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJpZ2h0XCI+bG9yZW0ge2xvY2F0aW9uSW5mb308L3A+XG5cbiAgICAgICAgICAgIHtsb2NhdGlvbkluZm8gJiYgPE1hcEluZm9Cb3ggaW5mbz17bG9jYXRpb25JbmZvfSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5NYXAuZGVmYXVsdFByb3BzID0ge1xuICAgIGNlbnRlcjoge1xuICAgICAgICBsYXQ6IDQyLjMyNjUsXG4gICAgICAgIGxuZzogLTEyMi44NzU2XG4gICAgfSxcbiAgICB6b29tOiAxXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/map.js\n");

/***/ })

})