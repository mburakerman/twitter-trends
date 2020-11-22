webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/map.js":
/*!*********************************!*\
  !*** ./pages/components/map.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Volumes_HDD_Veriler_projects_twitter_trends_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Volumes_HDD_Veriler_projects_twitter_trends_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Volumes_HDD_Veriler_projects_twitter_trends_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Volumes_HDD_Veriler_projects_twitter_trends_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/dist/index.modern.js\");\n/* harmony import */ var _MapMarker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapMarker */ \"./pages/components/MapMarker.js\");\n/* harmony import */ var _TrendsBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TrendsBox */ \"./pages/components/TrendsBox.js\");\n\n\n\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/components/map.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar turkey = {\n  lat: 41.015137,\n  lng: 28.979530\n};\n\nvar Map = function Map(_ref) {\n  _s();\n\n  var eventData = _ref.eventData,\n      center = _ref.center,\n      zoom = _ref.zoom;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({}),\n      locationInfo = _useState[0],\n      setLocationInfo = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({}),\n      trendsInfo = _useState2[0],\n      setTrendsInfo = _useState2[1];\n\n  var markers = eventData.map(function (item) {\n    var lat = parseFloat(item.lat);\n    var lng = parseFloat(item[\"long\"]);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_MapMarker__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      lat: turkey.lat,\n      lng: turkey.lng,\n      onClick: function onClick() {\n        return setLocationInfo(item);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 16\n    }, _this);\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    fetchTrends(1);\n  }, []);\n\n  function getClickedAreasWoeid(e) {\n    var clickedPosition = {\n      lat: e.lat,\n      lng: e.lng\n    };\n    fetch(\"/api/closest\", {\n      method: \"post\",\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(clickedPosition)\n    }).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      var woeid = res[0].woeid;\n      fetchTrends(woeid);\n    });\n  }\n\n  function fetchTrends(_x) {\n    return _fetchTrends.apply(this, arguments);\n  }\n\n  function _fetchTrends() {\n    _fetchTrends = Object(_Volumes_HDD_Veriler_projects_twitter_trends_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Volumes_HDD_Veriler_projects_twitter_trends_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(woeid) {\n      return _Volumes_HDD_Veriler_projects_twitter_trends_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"/api/trends\", {\n                method: \"post\",\n                headers: {\n                  'Accept': 'application/json',\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                  woeid: woeid\n                })\n              }).then(function (res) {\n                return res.json();\n              }).then(function (response) {\n                var trends = response[0];\n                setTrendsInfo(trends);\n              });\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _fetchTrends.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    id: \"map\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(google_map_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      bootstrapURLKeys: {\n        key: 'AIzaSyBKcbWgVYRSdCv0PCn6dCOvgdV7MjcE-R0'\n      },\n      defaultCenter: center,\n      defaultZoom: zoom,\n      onClick: function onClick(e) {\n        return getClickedAreasWoeid(e);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }, _this), trendsInfo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_TrendsBox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      info: trendsInfo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 28\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Map, \"3J/LQWE9UoTUIVqmFHnvV1/Qc/U=\");\n\n_c = Map;\nMap.defaultProps = {\n  center: {\n    lat: 42.3265,\n    lng: -122.8756\n  },\n  zoom: 1\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9tYXAuanM/MzMxZiJdLCJuYW1lcyI6WyJ0dXJrZXkiLCJsYXQiLCJsbmciLCJNYXAiLCJldmVudERhdGEiLCJjZW50ZXIiLCJ6b29tIiwidXNlU3RhdGUiLCJsb2NhdGlvbkluZm8iLCJzZXRMb2NhdGlvbkluZm8iLCJ0cmVuZHNJbmZvIiwic2V0VHJlbmRzSW5mbyIsIm1hcmtlcnMiLCJtYXAiLCJpdGVtIiwicGFyc2VGbG9hdCIsInVzZUVmZmVjdCIsImZldGNoVHJlbmRzIiwiZ2V0Q2xpY2tlZEFyZWFzV29laWQiLCJlIiwiY2xpY2tlZFBvc2l0aW9uIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsIndvZWlkIiwicmVzcG9uc2UiLCJ0cmVuZHMiLCJrZXkiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBRztBQUNUQyxLQUFHLEVBQUUsU0FESTtBQUVUQyxLQUFHLEVBQUU7QUFGSSxDQUFiOztBQUlBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQWlDO0FBQUE7O0FBQUEsTUFBOUJDLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLE1BQW5CQyxNQUFtQixRQUFuQkEsTUFBbUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsRUFBRCxDQURQO0FBQUEsTUFDbENDLFlBRGtDO0FBQUEsTUFDcEJDLGVBRG9COztBQUFBLG1CQUVMRixzREFBUSxDQUFDLEVBQUQsQ0FGSDtBQUFBLE1BRWxDRyxVQUZrQztBQUFBLE1BRXRCQyxhQUZzQjs7QUFJekMsTUFBTUMsT0FBTyxHQUFHUixTQUFTLENBQUNTLEdBQVYsQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDbEMs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QUMrQixZQUFKLEdBQW1CO0FBQ2Y3QixRQUFNLEVBQUU7QUFDSkosT0FBRyxFQUFFLE9BREQ7QUFFSkMsT0FBRyxFQUFFLENBQUM7QUFGRixHQURPO0FBS2ZJLE1BQUksRUFBRTtBQUxTLENBQW5CO0FBUWVILGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9tYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCdcbmltcG9ydCBNYXBNYXJrZXIgZnJvbSAnLi9NYXBNYXJrZXInXG5pbXBvcnQgVHJlbmRzQm94IGZyb20gJy4vVHJlbmRzQm94J1xuXG52YXIgdHVya2V5ID0ge1xuICAgIGxhdDogNDEuMDE1MTM3LFxuICAgIGxuZzogMjguOTc5NTMwXG59XG5jb25zdCBNYXAgPSAoeyBldmVudERhdGEsIGNlbnRlciwgem9vbSB9KSA9PiB7XG4gICAgY29uc3QgW2xvY2F0aW9uSW5mbywgc2V0TG9jYXRpb25JbmZvXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbdHJlbmRzSW5mbywgc2V0VHJlbmRzSW5mb10gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgICBjb25zdCBtYXJrZXJzID0gZXZlbnREYXRhLm1hcChpdGVtID0+IHtcbiAgICAgICAgdmFyIGxhdCA9IHBhcnNlRmxvYXQoaXRlbS5sYXQpO1xuICAgICAgICB2YXIgbG5nID0gcGFyc2VGbG9hdChpdGVtLmxvbmcpO1xuICAgICAgICByZXR1cm4gPE1hcE1hcmtlciBsYXQ9e3R1cmtleS5sYXR9IGxuZz17dHVya2V5LmxuZ30gb25DbGljaz17KCkgPT4gc2V0TG9jYXRpb25JbmZvKGl0ZW0pfSAvPlxuICAgIH0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaFRyZW5kcygxKVxuXG4gICAgfSwgW10pXG5cblxuICAgIGZ1bmN0aW9uIGdldENsaWNrZWRBcmVhc1dvZWlkKGUpIHtcbiAgICAgICAgdmFyIGNsaWNrZWRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIGxhdDogZS5sYXQsXG4gICAgICAgICAgICBsbmc6IGUubG5nXG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaChcIi9hcGkvY2xvc2VzdFwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNsaWNrZWRQb3NpdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdvZWlkID0gcmVzWzBdLndvZWlkO1xuICAgICAgICAgICAgICAgIGZldGNoVHJlbmRzKHdvZWlkKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVHJlbmRzKHdvZWlkKSB7XG4gICAgICAgIGF3YWl0IGZldGNoKFwiL2FwaS90cmVuZHNcIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd29laWQ6IHdvZWlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJlbmRzID0gcmVzcG9uc2VbMF07XG4gICAgICAgICAgICAgICAgc2V0VHJlbmRzSW5mbyh0cmVuZHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cIm1hcFwiPlxuICAgICAgICAgICAgPEdvb2dsZU1hcFJlYWN0XG4gICAgICAgICAgICAgICAgYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6ICdBSXphU3lCS2NiV2dWWVJTZEN2MFBDbjZkQ092Z2RWN01qY0UtUjAnIH19XG4gICAgICAgICAgICAgICAgZGVmYXVsdENlbnRlcj17Y2VudGVyfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRab29tPXt6b29tfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBnZXRDbGlja2VkQXJlYXNXb2VpZChlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvR29vZ2xlTWFwUmVhY3Q+XG4gICAgICAgICAgICB7dHJlbmRzSW5mbyAmJiA8VHJlbmRzQm94IGluZm89e3RyZW5kc0luZm99IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbk1hcC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2VudGVyOiB7XG4gICAgICAgIGxhdDogNDIuMzI2NSxcbiAgICAgICAgbG5nOiAtMTIyLjg3NTZcbiAgICB9LFxuICAgIHpvb206IDFcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/map.js\n");

/***/ })

})