webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/TrendsBox.js":
/*!***************************************!*\
  !*** ./pages/components/TrendsBox.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/components/TrendsBox.js\",\n    _this = undefined;\n\nvar TrendsBox = function TrendsBox(_ref) {\n  var info = _ref.info;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"trends-box\",\n    children: [info.locations && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      className: \"trends-box__title\",\n      children: [info.locations[0].name, \" Trends\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 32\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: \"trends-box__trends\",\n      children: info.trends && info.trends.map(function (item, index) {\n        if (!item.tweet_volume) return;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: item.url,\n            target: \"_blank\",\n            rel: \"noopener\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: item.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 12,\n              columnNumber: 33\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n              children: [item.tweet_volume && item.tweet_volume, \" Tweet\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 14,\n              columnNumber: 33\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 29\n          }, this)\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 32\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = TrendsBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrendsBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"TrendsBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9UcmVuZHNCb3guanM/MTgxYyJdLCJuYW1lcyI6WyJUcmVuZHNCb3giLCJpbmZvIiwibG9jYXRpb25zIiwibmFtZSIsInRyZW5kcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInR3ZWV0X3ZvbHVtZSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzVCLHNCQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSxlQUNLQSxJQUFJLENBQUNDLFNBQUwsaUJBQWtCO0FBQUksZUFBUyxFQUFDLG1CQUFkO0FBQUEsaUJBQW1DRCxJQUFJLENBQUNDLFNBQUwsQ0FBZSxDQUFmLEVBQWtCQyxJQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEdkIsZUFFSTtBQUFJLGVBQVMsRUFBQyxvQkFBZDtBQUFBLGdCQUdRRixJQUFJLENBQUNHLE1BQUwsSUFBZUgsSUFBSSxDQUFDRyxNQUFMLENBQVlDLEdBQVosQ0FBZ0IsVUFBVUMsSUFBVixFQUFnQkMsS0FBaEIsRUFBdUI7QUFDbEQsWUFBSSxDQUFDRCxJQUFJLENBQUNFLFlBQVYsRUFBd0I7QUFDeEIsNEJBQU87QUFBQSxpQ0FDSDtBQUFHLGdCQUFJLEVBQUVGLElBQUksQ0FBQ0csR0FBZDtBQUFtQixrQkFBTSxFQUFDLFFBQTFCO0FBQW1DLGVBQUcsRUFBQyxVQUF2QztBQUFBLG9DQUNJO0FBQUEsd0JBQUlILElBQUksQ0FBQ0g7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBR0k7QUFBQSx5QkFBUUcsSUFBSSxDQUFDRSxZQUFMLElBQXFCRixJQUFJLENBQUNFLFlBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERyxXQUFTRCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFPSCxPQVRjO0FBSHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9CSCxDQXJCRDs7S0FBTVAsUztBQXVCU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1RyZW5kc0JveC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRyZW5kc0JveCA9ICh7IGluZm8gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRzLWJveFwiPlxuICAgICAgICAgICAge2luZm8ubG9jYXRpb25zICYmIDxoMyBjbGFzc05hbWU9XCJ0cmVuZHMtYm94X190aXRsZVwiPntpbmZvLmxvY2F0aW9uc1swXS5uYW1lfSBUcmVuZHM8L2gzPn1cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0cmVuZHMtYm94X190cmVuZHNcIj5cbiAgICAgICAgICAgICAgICB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5mby50cmVuZHMgJiYgaW5mby50cmVuZHMubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtLnR3ZWV0X3ZvbHVtZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0ubmFtZX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPntpdGVtLnR3ZWV0X3ZvbHVtZSAmJiBpdGVtLnR3ZWV0X3ZvbHVtZX0gVHdlZXQ8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJlbmRzQm94Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/TrendsBox.js\n");

/***/ })

})