webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/map.js":
/*!*********************************!*\
  !*** ./pages/components/map.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/dist/index.modern.js\");\n/* harmony import */ var _MapMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapMarker */ \"./pages/components/MapMarker.js\");\n/* harmony import */ var _MapInfoBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapInfoBox */ \"./pages/components/MapInfoBox.js\");\n\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/components/map.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar turkey = {\n  lat: 41.015137,\n  lng: 28.979530\n};\n\nvar Map = function Map(_ref) {\n  _s();\n\n  var eventData = _ref.eventData,\n      center = _ref.center,\n      zoom = _ref.zoom;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      locationInfo = _useState[0],\n      setLocationInfo = _useState[1];\n\n  var markers = eventData.map(function (ev) {\n    var lat = parseFloat(ev.lat);\n    var lng = parseFloat(ev[\"long\"]);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MapMarker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      lat: lat,\n      lng: lng,\n      onClick: function onClick() {\n        return setLocationInfo({\n          locations: ev[0].locations\n        });\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 16\n    }, _this);\n  });\n\n  function handleClick(e) {\n    var lat = e.lat;\n    var lng = e.lng;\n    fetch(\"/api/closest\", {\n      method: \"post\",\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        lat: lat,\n        lng: lng\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      console.log(res);\n      var woeid = res[0].woeid;\n      fetch(\"/api/trends\", {\n        method: \"post\",\n        headers: {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          woeid: woeid\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (r) {\n        console.log(r);\n        setLocationInfo(r[0]);\n      });\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"map\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(google_map_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      bootstrapURLKeys: {\n        key: 'AIzaSyBKcbWgVYRSdCv0PCn6dCOvgdV7MjcE-R0'\n      },\n      defaultCenter: center,\n      defaultZoom: zoom,\n      onClick: function onClick(e) {\n        return handleClick(e);\n      },\n      children: markers\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MapInfoBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      info: locationInfo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Map, \"12TQ7nOZavxYGEoGTr51i7Gzxxc=\");\n\n_c = Map;\nMap.defaultProps = {\n  center: {\n    lat: 42.3265,\n    lng: -122.8756\n  },\n  zoom: 1\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9tYXAuanM/MzMxZiJdLCJuYW1lcyI6WyJ0dXJrZXkiLCJsYXQiLCJsbmciLCJNYXAiLCJldmVudERhdGEiLCJjZW50ZXIiLCJ6b29tIiwidXNlU3RhdGUiLCJsb2NhdGlvbkluZm8iLCJzZXRMb2NhdGlvbkluZm8iLCJtYXJrZXJzIiwibWFwIiwiZXYiLCJwYXJzZUZsb2F0IiwibG9jYXRpb25zIiwiaGFuZGxlQ2xpY2siLCJlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJ3b2VpZCIsInIiLCJrZXkiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxNQUFNLEdBQUc7QUFDVEMsS0FBRyxFQUFFLFNBREk7QUFFVEMsS0FBRyxFQUFFO0FBRkksQ0FBYjs7QUFJQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFpQztBQUFBOztBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQkMsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLElBQUQsQ0FEUDtBQUFBLE1BQ2xDQyxZQURrQztBQUFBLE1BQ3BCQyxlQURvQjs7QUFHekMsTUFBTUMsT0FBTyxHQUFHTixTQUFTLENBQUNPLEdBQVYsQ0FBYyxVQUFBQyxFQUFFLEVBQUk7QUFDaEMsUUFBSVgsR0FBRyxHQUFHWSxVQUFVLENBQUNELEVBQUUsQ0FBQ1gsR0FBSixDQUFwQjtBQUNBLFFBQUlDLEdBQUcsR0FBR1csVUFBVSxDQUFDRCxFQUFFLFFBQUgsQ0FBcEI7QUFDQSx3QkFBTyxxRUFBQyxrREFBRDtBQUFXLFNBQUcsRUFBRVgsR0FBaEI7QUFBcUIsU0FBRyxFQUFFQyxHQUExQjtBQUErQixhQUFPLEVBQUU7QUFBQSxlQUFNTyxlQUFlLENBQUM7QUFBRUssbUJBQVMsRUFBRUYsRUFBRSxDQUFDLENBQUQsQ0FBRixDQUFNRTtBQUFuQixTQUFELENBQXJCO0FBQUE7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0gsR0FKZSxDQUFoQjs7QUFNQSxXQUFTQyxXQUFULENBQXFCQyxDQUFyQixFQUF3QjtBQUNwQixRQUFJZixHQUFHLEdBQUdlLENBQUMsQ0FBQ2YsR0FBWjtBQUNBLFFBQUlDLEdBQUcsR0FBR2MsQ0FBQyxDQUFDZCxHQUFaO0FBQ0FlLFNBQUssQ0FBQyxjQUFELEVBQWlCO0FBQ2xCQyxZQUFNLEVBQUUsTUFEVTtBQUVsQkMsYUFBTyxFQUFFO0FBQ0wsa0JBQVUsa0JBREw7QUFFTCx3QkFBZ0I7QUFGWCxPQUZTO0FBTWxCQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCckIsV0FBRyxFQUFFQSxHQURZO0FBRWpCQyxXQUFHLEVBQUVBO0FBRlksT0FBZjtBQU5ZLEtBQWpCLENBQUwsQ0FXS3FCLElBWEwsQ0FXVSxVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxLQVhiLEVBWUtGLElBWkwsQ0FZVSxVQUFVQyxHQUFWLEVBQWU7QUFDakJFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0EsVUFBTUksS0FBSyxHQUFHSixHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9JLEtBQXJCO0FBRUFYLFdBQUssQ0FBQyxhQUFELEVBQWdCO0FBQ2pCQyxjQUFNLEVBQUUsTUFEUztBQUVqQkMsZUFBTyxFQUFFO0FBQ0wsb0JBQVUsa0JBREw7QUFFTCwwQkFBZ0I7QUFGWCxTQUZRO0FBTWpCQyxZQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCTSxlQUFLLEVBQUVBO0FBRFUsU0FBZjtBQU5XLE9BQWhCLENBQUwsQ0FVS0wsSUFWTCxDQVVVLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLE9BVmIsRUFXS0YsSUFYTCxDQVdVLFVBQVVNLENBQVYsRUFBYTtBQUNmSCxlQUFPLENBQUNDLEdBQVIsQ0FBWUUsQ0FBWjtBQUNBcEIsdUJBQWUsQ0FBQ29CLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBZjtBQUNILE9BZEw7QUFlSCxLQS9CTDtBQWdDSDs7QUFFRCxzQkFDSTtBQUFLLE1BQUUsRUFBQyxLQUFSO0FBQUEsNEJBQ0kscUVBQUMsd0RBQUQ7QUFDSSxzQkFBZ0IsRUFBRTtBQUFFQyxXQUFHLEVBQUU7QUFBUCxPQUR0QjtBQUVJLG1CQUFhLEVBQUV6QixNQUZuQjtBQUdJLGlCQUFXLEVBQUVDLElBSGpCO0FBSUksYUFBTyxFQUFFLGlCQUFDVSxDQUFEO0FBQUEsZUFBT0QsV0FBVyxDQUFDQyxDQUFELENBQWxCO0FBQUEsT0FKYjtBQUFBLGdCQU1LTjtBQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVNJLHFFQUFDLG1EQUFEO0FBQVksVUFBSSxFQUFFRjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFhSCxDQTNERDs7R0FBTUwsRzs7S0FBQUEsRztBQTZETkEsR0FBRyxDQUFDNEIsWUFBSixHQUFtQjtBQUNmMUIsUUFBTSxFQUFFO0FBQ0pKLE9BQUcsRUFBRSxPQUREO0FBRUpDLE9BQUcsRUFBRSxDQUFDO0FBRkYsR0FETztBQUtmSSxNQUFJLEVBQUU7QUFMUyxDQUFuQjtBQVFlSCxrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvbWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnXG5pbXBvcnQgTWFwTWFya2VyIGZyb20gJy4vTWFwTWFya2VyJ1xuaW1wb3J0IE1hcEluZm9Cb3ggZnJvbSAnLi9NYXBJbmZvQm94J1xuXG52YXIgdHVya2V5ID0ge1xuICAgIGxhdDogNDEuMDE1MTM3LFxuICAgIGxuZzogMjguOTc5NTMwXG59XG5jb25zdCBNYXAgPSAoeyBldmVudERhdGEsIGNlbnRlciwgem9vbSB9KSA9PiB7XG4gICAgY29uc3QgW2xvY2F0aW9uSW5mbywgc2V0TG9jYXRpb25JbmZvXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBjb25zdCBtYXJrZXJzID0gZXZlbnREYXRhLm1hcChldiA9PiB7XG4gICAgICAgIHZhciBsYXQgPSBwYXJzZUZsb2F0KGV2LmxhdCk7XG4gICAgICAgIHZhciBsbmcgPSBwYXJzZUZsb2F0KGV2LmxvbmcpXG4gICAgICAgIHJldHVybiA8TWFwTWFya2VyIGxhdD17bGF0fSBsbmc9e2xuZ30gb25DbGljaz17KCkgPT4gc2V0TG9jYXRpb25JbmZvKHsgbG9jYXRpb25zOiBldlswXS5sb2NhdGlvbnMgfSl9IC8+XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgdmFyIGxhdCA9IGUubGF0O1xuICAgICAgICB2YXIgbG5nID0gZS5sbmc7XG4gICAgICAgIGZldGNoKFwiL2FwaS9jbG9zZXN0XCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGxhdDogbGF0LFxuICAgICAgICAgICAgICAgIGxuZzogbG5nXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIGNvbnN0IHdvZWlkID0gcmVzWzBdLndvZWlkO1xuXG4gICAgICAgICAgICAgICAgZmV0Y2goXCIvYXBpL3RyZW5kc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvZWlkOiB3b2VpZFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocilcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uSW5mbyhyWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cIm1hcFwiPlxuICAgICAgICAgICAgPEdvb2dsZU1hcFJlYWN0XG4gICAgICAgICAgICAgICAgYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6ICdBSXphU3lCS2NiV2dWWVJTZEN2MFBDbjZkQ092Z2RWN01qY0UtUjAnIH19XG4gICAgICAgICAgICAgICAgZGVmYXVsdENlbnRlcj17Y2VudGVyfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRab29tPXt6b29tfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bWFya2Vyc31cbiAgICAgICAgICAgIDwvR29vZ2xlTWFwUmVhY3Q+XG4gICAgICAgICAgICA8TWFwSW5mb0JveCBpbmZvPXtsb2NhdGlvbkluZm99IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuTWFwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjZW50ZXI6IHtcbiAgICAgICAgbGF0OiA0Mi4zMjY1LFxuICAgICAgICBsbmc6IC0xMjIuODc1NlxuICAgIH0sXG4gICAgem9vbTogMVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/map.js\n");

/***/ })

})