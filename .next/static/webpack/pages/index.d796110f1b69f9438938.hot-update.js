webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/map.js":
/*!*********************************!*\
  !*** ./pages/components/map.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/dist/index.modern.js\");\n/* harmony import */ var _MapMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapMarker */ \"./pages/components/MapMarker.js\");\n\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/components/map.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar turkey = {\n  lat: 41.015137,\n  lng: 28.979530\n};\n\nvar Map = function Map(_ref) {\n  _s();\n\n  var eventData = _ref.eventData,\n      center = _ref.center,\n      zoom = _ref.zoom;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      locationInfo = _useState[0],\n      setLocationInfo = _useState[1];\n\n  var markers = eventData.map(function (ev) {\n    var lat = parseFloat(ev.lat);\n    var lng = parseFloat(ev[\"long\"]);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MapMarker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      lat: lat,\n      lng: lng\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 16\n    }, _this);\n  });\n\n  function handleClick(e) {\n    var lat = e.lat;\n    var lng = e.lng;\n    fetch(\"/api/closest\", {\n      method: \"get\",\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      //make sure to serialize your JSON body\n      body: JSON.stringify({\n        lat: lat,\n        lng: lng\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      console.log(res);\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"map\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(google_map_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      bootstrapURLKeys: {\n        key: 'AIzaSyBKcbWgVYRSdCv0PCn6dCOvgdV7MjcE-R0'\n      },\n      defaultCenter: center,\n      defaultZoom: zoom,\n      onClick: function onClick(e) {\n        return handleClick(e);\n      },\n      children: markers\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Map, \"12TQ7nOZavxYGEoGTr51i7Gzxxc=\");\n\n_c = Map;\nMap.defaultProps = {\n  center: {\n    lat: 42.3265,\n    lng: -122.8756\n  },\n  zoom: 1\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9tYXAuanM/MzMxZiJdLCJuYW1lcyI6WyJ0dXJrZXkiLCJsYXQiLCJsbmciLCJNYXAiLCJldmVudERhdGEiLCJjZW50ZXIiLCJ6b29tIiwidXNlU3RhdGUiLCJsb2NhdGlvbkluZm8iLCJzZXRMb2NhdGlvbkluZm8iLCJtYXJrZXJzIiwibWFwIiwiZXYiLCJwYXJzZUZsb2F0IiwiaGFuZGxlQ2xpY2siLCJlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxNQUFNLEdBQUc7QUFDVEMsS0FBRyxFQUFFLFNBREk7QUFFVEMsS0FBRyxFQUFFO0FBRkksQ0FBYjs7QUFJQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFpQztBQUFBOztBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQkMsTUFBbUIsUUFBbkJBLE1BQW1CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLElBQUQsQ0FEUDtBQUFBLE1BQ2xDQyxZQURrQztBQUFBLE1BQ3BCQyxlQURvQjs7QUFHekMsTUFBTUMsT0FBTyxHQUFHTixTQUFTLENBQUNPLEdBQVYsQ0FBYyxVQUFBQyxFQUFFLEVBQUk7QUFDaEMsUUFBSVgsR0FBRyxHQUFHWSxVQUFVLENBQUNELEVBQUUsQ0FBQ1gsR0FBSixDQUFwQjtBQUNBLFFBQUlDLEdBQUcsR0FBR1csVUFBVSxDQUFDRCxFQUFFLFFBQUgsQ0FBcEI7QUFDQSx3QkFBTyxxRUFBQyxrREFBRDtBQUFXLFNBQUcsRUFBRVgsR0FBaEI7QUFBcUIsU0FBRyxFQUFFQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFFSCxHQUxlLENBQWhCOztBQU9BLFdBQVNZLFdBQVQsQ0FBcUJDLENBQXJCLEVBQXdCO0FBRXBCLFFBQUlkLEdBQUcsR0FBR2MsQ0FBQyxDQUFDZCxHQUFaO0FBQ0EsUUFBSUMsR0FBRyxHQUFHYSxDQUFDLENBQUNiLEdBQVo7QUFDQWMsU0FBSyxDQUFDLGNBQUQsRUFBaUI7QUFDbEJDLFlBQU0sRUFBRSxLQURVO0FBRWxCQyxhQUFPLEVBQUU7QUFDTCxrQkFBVSxrQkFETDtBQUVMLHdCQUFnQjtBQUZYLE9BRlM7QUFPbEI7QUFDQUMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQnBCLFdBQUcsRUFBRUEsR0FEWTtBQUVqQkMsV0FBRyxFQUFFQTtBQUZZLE9BQWY7QUFSWSxLQUFqQixDQUFMLENBYUtvQixJQWJMLENBYVUsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsS0FiYixFQWNLRixJQWRMLENBY1UsVUFBVUMsR0FBVixFQUFlO0FBQ2pCRSxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBWjtBQUNILEtBaEJMO0FBaUJIOztBQUVELHNCQUNJO0FBQUssTUFBRSxFQUFDLEtBQVI7QUFBQSwyQkFDSSxxRUFBQyx3REFBRDtBQUNJLHNCQUFnQixFQUFFO0FBQUVJLFdBQUcsRUFBRTtBQUFQLE9BRHRCO0FBRUksbUJBQWEsRUFBRXRCLE1BRm5CO0FBR0ksaUJBQVcsRUFBRUMsSUFIakI7QUFJSSxhQUFPLEVBQUUsaUJBQUNTLENBQUQ7QUFBQSxlQUFPRCxXQUFXLENBQUNDLENBQUQsQ0FBbEI7QUFBQSxPQUpiO0FBQUEsZ0JBTUtMO0FBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVlILENBN0NEOztHQUFNUCxHOztLQUFBQSxHO0FBK0NOQSxHQUFHLENBQUN5QixZQUFKLEdBQW1CO0FBQ2Z2QixRQUFNLEVBQUU7QUFDSkosT0FBRyxFQUFFLE9BREQ7QUFFSkMsT0FBRyxFQUFFLENBQUM7QUFGRixHQURPO0FBS2ZJLE1BQUksRUFBRTtBQUxTLENBQW5CO0FBUWVILGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9tYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCdcbmltcG9ydCBNYXBNYXJrZXIgZnJvbSAnLi9NYXBNYXJrZXInXG5cbnZhciB0dXJrZXkgPSB7XG4gICAgbGF0OiA0MS4wMTUxMzcsXG4gICAgbG5nOiAyOC45Nzk1MzBcbn1cbmNvbnN0IE1hcCA9ICh7IGV2ZW50RGF0YSwgY2VudGVyLCB6b29tIH0pID0+IHtcbiAgICBjb25zdCBbbG9jYXRpb25JbmZvLCBzZXRMb2NhdGlvbkluZm9dID0gdXNlU3RhdGUobnVsbClcblxuICAgIGNvbnN0IG1hcmtlcnMgPSBldmVudERhdGEubWFwKGV2ID0+IHtcbiAgICAgICAgdmFyIGxhdCA9IHBhcnNlRmxvYXQoZXYubGF0KTtcbiAgICAgICAgdmFyIGxuZyA9IHBhcnNlRmxvYXQoZXYubG9uZylcbiAgICAgICAgcmV0dXJuIDxNYXBNYXJrZXIgbGF0PXtsYXR9IGxuZz17bG5nfSAvPlxuXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcblxuICAgICAgICB2YXIgbGF0ID0gZS5sYXQ7XG4gICAgICAgIHZhciBsbmcgPSBlLmxuZztcbiAgICAgICAgZmV0Y2goXCIvYXBpL2Nsb3Nlc3RcIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy9tYWtlIHN1cmUgdG8gc2VyaWFsaXplIHlvdXIgSlNPTiBib2R5XG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbGF0OiBsYXQsXG4gICAgICAgICAgICAgICAgbG5nOiBsbmdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJtYXBcIj5cbiAgICAgICAgICAgIDxHb29nbGVNYXBSZWFjdFxuICAgICAgICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiAnQUl6YVN5QktjYldnVllSU2RDdjBQQ242ZENPdmdkVjdNamNFLVIwJyB9fVxuICAgICAgICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e2NlbnRlcn1cbiAgICAgICAgICAgICAgICBkZWZhdWx0Wm9vbT17em9vbX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21hcmtlcnN9XG4gICAgICAgICAgICA8L0dvb2dsZU1hcFJlYWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbk1hcC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2VudGVyOiB7XG4gICAgICAgIGxhdDogNDIuMzI2NSxcbiAgICAgICAgbG5nOiAtMTIyLjg3NTZcbiAgICB9LFxuICAgIHpvb206IDFcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/map.js\n");

/***/ })

})