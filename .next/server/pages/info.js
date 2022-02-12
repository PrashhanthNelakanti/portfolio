/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/info";
exports.ids = ["pages/info"];
exports.modules = {

/***/ "./pages/info.js":
/*!***********************!*\
  !*** ./pages/info.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Info),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Info({ data  }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_2___default().init({\n            duration: 2000\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white shadow overflow-hidden sm:rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-4 py-5 sm:px-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-lg leading-6 font-medium text-gray-900\",\n                            children: \"Applicant Information\"\n                        }, void 0, false, {\n                            fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                            lineNumber: 13,\n                            columnNumber: 27\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-1 max-w-2xl text-sm text-gray-500\",\n                            children: \"Personal details and application.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                            lineNumber: 14,\n                            columnNumber: 27\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                    lineNumber: 12,\n                    columnNumber: 25\n                }, this),\n                data.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"There is no Data yet!\"\n                }, void 0, false, {\n                    fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: data.map((info, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            \"data-aos\": i % 2 == 0 ? 'fade-left' : 'fade-right',\n                            className: \"border-t border-gray-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                className: \"text-sm font-medium text-gray-500\",\n                                                children: \"Full name\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                                                lineNumber: 24,\n                                                columnNumber: 31\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                className: \"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2\",\n                                                children: info.fname\n                                            }, void 0, false, {\n                                                fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                                                lineNumber: 25,\n                                                columnNumber: 31\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                className: \"text-sm font-medium text-gray-500\",\n                                                children: \"Last name for\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                                                lineNumber: 28,\n                                                columnNumber: 31\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                className: \"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2\",\n                                                children: info.lname\n                                            }, void 0, false, {\n                                                fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                                                lineNumber: 29,\n                                                columnNumber: 31\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                className: \"text-sm font-medium text-gray-500\",\n                                                children: \"Email address\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                                                lineNumber: 32,\n                                                columnNumber: 31\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                className: \"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2\",\n                                                children: info.email\n                                            }, void 0, false, {\n                                                fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                                                lineNumber: 33,\n                                                columnNumber: 31\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                className: \"text-sm font-medium text-gray-500\",\n                                                children: \"Address\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 31\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                className: \"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2\",\n                                                children: info.address\n                                            }, void 0, false, {\n                                                fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 31\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                                lineNumber: 22,\n                                columnNumber: 27\n                            }, this)\n                        }, info.id, false, {\n                            fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                            lineNumber: 21,\n                            columnNumber: 25\n                        }, this)\n                    )\n                }, void 0, false, {\n                    fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/info.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n};\nasync function getServerSideProps(ctx) {\n    // get the current environment\n    let dev = \"development\" !== 'production';\n    let { DEV_URL , PROD_URL  } = process.env;\n    // request posts from api\n    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/personalnfo`);\n    // extract the data\n    let data = await response.json();\n    return {\n        props: {\n            data: data['message']\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ3hCLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2ZpbGUvLi9wYWdlcy9pbmZvLmpzP2YxMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFvcyBmcm9tIFwiYW9zXCI7XG5pbXBvcnQgXCJhb3MvZGlzdC9hb3MuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm8oeyBkYXRhIH0pIHtcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgQW9zLmluaXQoe2R1cmF0aW9uOjIwMDB9KVxuICAgIH0sW10pXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3cgb3ZlcmZsb3ctaGlkZGVuIHNtOnJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS01IHNtOnB4LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5BcHBsaWNhbnQgSW5mb3JtYXRpb248L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIG1heC13LTJ4bCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5QZXJzb25hbCBkZXRhaWxzIGFuZCBhcHBsaWNhdGlvbi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtkYXRhLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICA8aDI+VGhlcmUgaXMgbm8gRGF0YSB5ZXQhPC9oMj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGluZm8sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9eyBpJTI9PTAgPyAnZmFkZS1sZWZ0JyA6J2ZhZGUtcmlnaHQnIH0gY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLWdyYXktMzAwXCIga2V5PXtpbmZvLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBweC00IHB5LTUgc206Z3JpZCBzbTpncmlkLWNvbHMtMyBzbTpnYXAtNCBzbTpweC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+RnVsbCBuYW1lPC9kdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTkwMCBzbTptdC0wIHNtOmNvbC1zcGFuLTJcIiA+e2luZm8uZm5hbWV9PC9kZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHB4LTQgcHktNSBzbTpncmlkIHNtOmdyaWQtY29scy0zIHNtOmdhcC00IHNtOnB4LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5MYXN0IG5hbWUgZm9yPC9kdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTkwMCBzbTptdC0wIHNtOmNvbC1zcGFuLTJcIj57aW5mby5sbmFtZX08L2RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBweC00IHB5LTUgc206Z3JpZCBzbTpncmlkLWNvbHMtMyBzbTpnYXAtNCBzbTpweC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwXCI+RW1haWwgYWRkcmVzczwvZHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXNtIHRleHQtZ3JheS05MDAgc206bXQtMCBzbTpjb2wtc3Bhbi0yXCI+e2luZm8uZW1haWx9PC9kZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHB4LTQgcHktNSBzbTpncmlkIHNtOmdyaWQtY29scy0zIHNtOmdhcC00IHNtOnB4LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDBcIj5BZGRyZXNzPC9kdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTkwMCBzbTptdC0wIHNtOmNvbC1zcGFuLTJcIj57aW5mby5hZGRyZXNzfTwvZGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG48L2Rpdj5cbik7XG4gICAgXG5cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcbiAgICAvLyBnZXQgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnRcbiAgICBsZXQgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcbiAgICBsZXQgeyBERVZfVVJMLCBQUk9EX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XG5cbiAgICAvLyByZXF1ZXN0IHBvc3RzIGZyb20gYXBpXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7ZGV2ID8gREVWX1VSTCA6IFBST0RfVVJMfS9hcGkvcGVyc29uYWxuZm9gKTtcbiAgICAvLyBleHRyYWN0IHRoZSBkYXRhXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGF0YTogZGF0YVsnbWVzc2FnZSddLFxuICAgICAgICB9LFxuICAgIH07XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiQW9zIiwiSW5mbyIsImRhdGEiLCJpbml0IiwiZHVyYXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInAiLCJsZW5ndGgiLCJoMiIsInVsIiwibWFwIiwiaW5mbyIsImkiLCJkYXRhLWFvcyIsImRsIiwiZHQiLCJkZCIsImZuYW1lIiwibG5hbWUiLCJlbWFpbCIsImFkZHJlc3MiLCJpZCIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsImRldiIsIkRFVl9VUkwiLCJQUk9EX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/info.js\n");

/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/info.js"));
module.exports = __webpack_exports__;

})();