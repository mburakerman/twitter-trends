webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/map.js":
/*!*********************************!*\
  !*** ./pages/components/map.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/dist/index.modern.js\");\n/* harmony import */ var _MapMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapMarker */ \"./pages/components/MapMarker.js\");\n/* harmony import */ var _MapInfoBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapInfoBox */ \"./pages/components/MapInfoBox.js\");\n\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/components/map.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar turkey = {\n  lat: 41.015137,\n  lng: 28.979530\n};\n\nvar Map = function Map(_ref) {\n  _s();\n\n  var eventData = _ref.eventData,\n      center = _ref.center,\n      zoom = _ref.zoom;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      locationInfo = _useState[0],\n      setLocationInfo = _useState[1];\n\n  var markers = eventData.map(function (item) {\n    var lat = parseFloat(item.lat);\n    var lng = parseFloat(item[\"long\"]);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MapMarker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      lat: lat,\n      lng: lng,\n      onClick: function onClick() {\n        return setLocationInfo(item);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 16\n    }, _this);\n  });\n\n  function handleClick(e) {\n    var lat = e.lat;\n    var lng = e.lng;\n    fetch(\"/api/closest\", {\n      method: \"post\",\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        lat: lat,\n        lng: lng\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      console.log(res);\n      var woeid = res[0].woeid;\n      fetch(\"/api/trends\", {\n        method: \"post\",\n        headers: {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          woeid: woeid\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (r) {//console.log(r)\n      });\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"map\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(google_map_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      bootstrapURLKeys: {\n        key: 'AIzaSyBKcbWgVYRSdCv0PCn6dCOvgdV7MjcE-R0'\n      },\n      defaultCenter: center,\n      defaultZoom: zoom,\n      onClick: function onClick(e) {\n        return handleClick(e);\n      },\n      children: markers\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"right\",\n      children: \"lorem\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }, _this), locationInfo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MapInfoBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      info: locationInfo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 30\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Map, \"/vZ8z210C/kHuWwA2FWussAQW1A=\");\n\n_c = Map;\nMap.defaultProps = {\n  center: {\n    lat: 42.3265,\n    lng: -122.8756\n  },\n  zoom: 1\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9tYXAuanM/MzMxZiJdLCJuYW1lcyI6WyJ0dXJrZXkiLCJsYXQiLCJsbmciLCJNYXAiLCJldmVudERhdGEiLCJjZW50ZXIiLCJ6b29tIiwidXNlU3RhdGUiLCJsb2NhdGlvbkluZm8iLCJzZXRMb2NhdGlvbkluZm8iLCJtYXJrZXJzIiwibWFwIiwiaXRlbSIsInBhcnNlRmxvYXQiLCJoYW5kbGVDbGljayIsImUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIndvZWlkIiwiciIsImtleSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBRztBQUNUQyxLQUFHLEVBQUUsU0FESTtBQUVUQyxLQUFHLEVBQUU7QUFGSSxDQUFiOztBQUlBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQWlDO0FBQUE7O0FBQUEsTUFBOUJDLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLE1BQW5CQyxNQUFtQixRQUFuQkEsTUFBbUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsRUFBRCxDQURQO0FBQUEsTUFDbENDLFlBRGtDO0FBQUEsTUFDcEJDLGVBRG9COztBQUd6QyxNQUFNQyxPQUFPLEdBQUdOLFNBQVMsQ0FBQ08sR0FBVixDQUFjLFVBQUFDLElBQUksRUFBSTtBQUNsQyxRQUFJWCxHQUFHLEdBQUdZLFVBQVUsQ0FBQ0QsSUFBSSxDQUFDWCxHQUFOLENBQXBCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHVyxVQUFVLENBQUNELElBQUksUUFBTCxDQUFwQjtBQUNBLHdCQUFPLHFFQUFDLGtEQUFEO0FBQVcsU0FBRyxFQUFFWCxHQUFoQjtBQUFxQixTQUFHLEVBQUVDLEdBQTFCO0FBQStCLGFBQU8sRUFBRTtBQUFBLGVBQU1PLGVBQWUsQ0FBQ0csSUFBRCxDQUFyQjtBQUFBO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNILEdBSmUsQ0FBaEI7O0FBTUEsV0FBU0UsV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0I7QUFDcEIsUUFBSWQsR0FBRyxHQUFHYyxDQUFDLENBQUNkLEdBQVo7QUFDQSxRQUFJQyxHQUFHLEdBQUdhLENBQUMsQ0FBQ2IsR0FBWjtBQUNBYyxTQUFLLENBQUMsY0FBRCxFQUFpQjtBQUNsQkMsWUFBTSxFQUFFLE1BRFU7QUFFbEJDLGFBQU8sRUFBRTtBQUNMLGtCQUFVLGtCQURMO0FBRUwsd0JBQWdCO0FBRlgsT0FGUztBQU1sQkMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQnBCLFdBQUcsRUFBRUEsR0FEWTtBQUVqQkMsV0FBRyxFQUFFQTtBQUZZLE9BQWY7QUFOWSxLQUFqQixDQUFMLENBV0tvQixJQVhMLENBV1UsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsS0FYYixFQVlLRixJQVpMLENBWVUsVUFBVUMsR0FBVixFQUFlO0FBQ2pCRSxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBWjtBQUNBLFVBQU1JLEtBQUssR0FBR0osR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPSSxLQUFyQjtBQUVBWCxXQUFLLENBQUMsYUFBRCxFQUFnQjtBQUNqQkMsY0FBTSxFQUFFLE1BRFM7QUFFakJDLGVBQU8sRUFBRTtBQUNMLG9CQUFVLGtCQURMO0FBRUwsMEJBQWdCO0FBRlgsU0FGUTtBQU1qQkMsWUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQk0sZUFBSyxFQUFFQTtBQURVLFNBQWY7QUFOVyxPQUFoQixDQUFMLENBVUtMLElBVkwsQ0FVVSxVQUFBQyxHQUFHO0FBQUEsZUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxPQVZiLEVBV0tGLElBWEwsQ0FXVSxVQUFVTSxDQUFWLEVBQWEsQ0FDZjtBQUNILE9BYkw7QUFjSCxLQTlCTDtBQStCSDs7QUFFRCxzQkFDSTtBQUFLLE1BQUUsRUFBQyxLQUFSO0FBQUEsNEJBQ0kscUVBQUMsd0RBQUQ7QUFDSSxzQkFBZ0IsRUFBRTtBQUFFQyxXQUFHLEVBQUU7QUFBUCxPQUR0QjtBQUVJLG1CQUFhLEVBQUV4QixNQUZuQjtBQUdJLGlCQUFXLEVBQUVDLElBSGpCO0FBSUksYUFBTyxFQUFFLGlCQUFDUyxDQUFEO0FBQUEsZUFBT0QsV0FBVyxDQUFDQyxDQUFELENBQWxCO0FBQUEsT0FKYjtBQUFBLGdCQU1LTDtBQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVNJO0FBQUcsZUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSixFQVdLRixZQUFZLGlCQUFJLHFFQUFDLG1EQUFEO0FBQVksVUFBSSxFQUFFQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0E1REQ7O0dBQU1MLEc7O0tBQUFBLEc7QUE4RE5BLEdBQUcsQ0FBQzJCLFlBQUosR0FBbUI7QUFDZnpCLFFBQU0sRUFBRTtBQUNKSixPQUFHLEVBQUUsT0FERDtBQUVKQyxPQUFHLEVBQUUsQ0FBQztBQUZGLEdBRE87QUFLZkksTUFBSSxFQUFFO0FBTFMsQ0FBbkI7QUFRZUgsa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL21hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBHb29nbGVNYXBSZWFjdCBmcm9tICdnb29nbGUtbWFwLXJlYWN0J1xuaW1wb3J0IE1hcE1hcmtlciBmcm9tICcuL01hcE1hcmtlcidcbmltcG9ydCBNYXBJbmZvQm94IGZyb20gJy4vTWFwSW5mb0JveCdcblxudmFyIHR1cmtleSA9IHtcbiAgICBsYXQ6IDQxLjAxNTEzNyxcbiAgICBsbmc6IDI4Ljk3OTUzMFxufVxuY29uc3QgTWFwID0gKHsgZXZlbnREYXRhLCBjZW50ZXIsIHpvb20gfSkgPT4ge1xuICAgIGNvbnN0IFtsb2NhdGlvbkluZm8sIHNldExvY2F0aW9uSW5mb10gPSB1c2VTdGF0ZSh7fSlcblxuICAgIGNvbnN0IG1hcmtlcnMgPSBldmVudERhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICB2YXIgbGF0ID0gcGFyc2VGbG9hdChpdGVtLmxhdCk7XG4gICAgICAgIHZhciBsbmcgPSBwYXJzZUZsb2F0KGl0ZW0ubG9uZylcbiAgICAgICAgcmV0dXJuIDxNYXBNYXJrZXIgbGF0PXtsYXR9IGxuZz17bG5nfSBvbkNsaWNrPXsoKSA9PiBzZXRMb2NhdGlvbkluZm8oaXRlbSl9IC8+XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgdmFyIGxhdCA9IGUubGF0O1xuICAgICAgICB2YXIgbG5nID0gZS5sbmc7XG4gICAgICAgIGZldGNoKFwiL2FwaS9jbG9zZXN0XCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGxhdDogbGF0LFxuICAgICAgICAgICAgICAgIGxuZzogbG5nXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIGNvbnN0IHdvZWlkID0gcmVzWzBdLndvZWlkO1xuXG4gICAgICAgICAgICAgICAgZmV0Y2goXCIvYXBpL3RyZW5kc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvZWlkOiB3b2VpZFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwibWFwXCI+XG4gICAgICAgICAgICA8R29vZ2xlTWFwUmVhY3RcbiAgICAgICAgICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7IGtleTogJ0FJemFTeUJLY2JXZ1ZZUlNkQ3YwUENuNmRDT3ZnZFY3TWpjRS1SMCcgfX1cbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2VudGVyPXtjZW50ZXJ9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFpvb209e3pvb219XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttYXJrZXJzfVxuICAgICAgICAgICAgPC9Hb29nbGVNYXBSZWFjdD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJpZ2h0XCI+bG9yZW08L3A+XG5cbiAgICAgICAgICAgIHtsb2NhdGlvbkluZm8gJiYgPE1hcEluZm9Cb3ggaW5mbz17bG9jYXRpb25JbmZvfSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5NYXAuZGVmYXVsdFByb3BzID0ge1xuICAgIGNlbnRlcjoge1xuICAgICAgICBsYXQ6IDQyLjMyNjUsXG4gICAgICAgIGxuZzogLTEyMi44NzU2XG4gICAgfSxcbiAgICB6b29tOiAxXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/map.js\n");

/***/ })

})