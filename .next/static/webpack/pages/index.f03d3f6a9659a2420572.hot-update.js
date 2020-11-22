webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/TrendsBox.js":
/*!***************************************!*\
  !*** ./pages/components/TrendsBox.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _jsxFileName = \"/Volumes/HDD - Veriler/projects/twitter-trends/pages/components/TrendsBox.js\",\n    _this = undefined;\n\nvar TrendsBox = function TrendsBox(_ref) {\n  var info = _ref.info;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"trends-box\",\n    children: [info.locations && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      className: \"trends-box__title\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"./twitter.svg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 4,\n        columnNumber: 66\n      }, _this), info.locations[0].name, \" Trends\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 32\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: \"trends-box__trends\",\n      children: info.trends && info.trends.map(function (item, index) {\n        if (!item.tweet_volume) return;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: item.url,\n            target: \"_blank\",\n            rel: \"noopener\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: item.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 12,\n              columnNumber: 33\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n              children: [item.tweet_volume && item.tweet_volume.toFixed(3), \" Tweet\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 13,\n              columnNumber: 33\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 29\n          }, this)\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 32\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = TrendsBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrendsBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"TrendsBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9UcmVuZHNCb3guanM/MTgxYyJdLCJuYW1lcyI6WyJUcmVuZHNCb3giLCJpbmZvIiwibG9jYXRpb25zIiwibmFtZSIsInRyZW5kcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInR3ZWV0X3ZvbHVtZSIsInVybCIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM1QixzQkFDSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUEsZUFDS0EsSUFBSSxDQUFDQyxTQUFMLGlCQUFrQjtBQUFJLGVBQVMsRUFBQyxtQkFBZDtBQUFBLDhCQUFrQztBQUFLLFdBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBbEMsRUFBOERELElBQUksQ0FBQ0MsU0FBTCxDQUFlLENBQWYsRUFBa0JDLElBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUR2QixlQUVJO0FBQUksZUFBUyxFQUFDLG9CQUFkO0FBQUEsZ0JBR1FGLElBQUksQ0FBQ0csTUFBTCxJQUFlSCxJQUFJLENBQUNHLE1BQUwsQ0FBWUMsR0FBWixDQUFnQixVQUFVQyxJQUFWLEVBQWdCQyxLQUFoQixFQUF1QjtBQUNsRCxZQUFJLENBQUNELElBQUksQ0FBQ0UsWUFBVixFQUF3QjtBQUN4Qiw0QkFBTztBQUFBLGlDQUNIO0FBQUcsZ0JBQUksRUFBRUYsSUFBSSxDQUFDRyxHQUFkO0FBQW1CLGtCQUFNLEVBQUMsUUFBMUI7QUFBbUMsZUFBRyxFQUFDLFVBQXZDO0FBQUEsb0NBQ0k7QUFBQSx3QkFBSUgsSUFBSSxDQUFDSDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBLHlCQUFRRyxJQUFJLENBQUNFLFlBQUwsSUFBcUJGLElBQUksQ0FBQ0UsWUFBTCxDQUFrQkUsT0FBbEIsQ0FBMEIsQ0FBMUIsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHLFdBQVNILEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQU1ILE9BUmM7QUFIdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbUJILENBcEJEOztLQUFNUCxTO0FBc0JTQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvVHJlbmRzQm94LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVHJlbmRzQm94ID0gKHsgaW5mbyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZHMtYm94XCI+XG4gICAgICAgICAgICB7aW5mby5sb2NhdGlvbnMgJiYgPGgzIGNsYXNzTmFtZT1cInRyZW5kcy1ib3hfX3RpdGxlXCI+PGltZyBzcmM9XCIuL3R3aXR0ZXIuc3ZnXCIgLz57aW5mby5sb2NhdGlvbnNbMF0ubmFtZX0gVHJlbmRzPC9oMz59XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidHJlbmRzLWJveF9fdHJlbmRzXCI+XG4gICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgIGluZm8udHJlbmRzICYmIGluZm8udHJlbmRzLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXRlbS50d2VldF92b2x1bWUpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e2l0ZW0udHdlZXRfdm9sdW1lICYmIGl0ZW0udHdlZXRfdm9sdW1lLnRvRml4ZWQoMyl9IFR3ZWV0PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPjtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZW5kc0JveCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/TrendsBox.js\n");

/***/ })

})