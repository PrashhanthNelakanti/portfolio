"use strict";
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
exports.id = "pages/response";
exports.ids = ["pages/response"];
exports.modules = {

/***/ "./pages/response.js":
/*!***************************!*\
  !*** ./pages/response.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/mongodb */ \"./util/mongodb.js\");\n\n\nfunction Movies({ movies  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Top 20 Movies of All Time\"\n            }, void 0, false, {\n                fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/response.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                    children: \"(According to Metacritic)\"\n                }, void 0, false, {\n                    fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/response.js\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/response.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: movie.name\n                            }, void 0, false, {\n                                fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/response.js\",\n                                lineNumber: 13,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: movie.age\n                            }, void 0, false, {\n                                fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/response.js\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/response.js\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this)\n                )\n            }, void 0, false, {\n                fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/response.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/prashhanthsoujanya/Desktop/CodeSpace/ui/profile/pages/response.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this));\n};\nasync function getServerSideProps() {\n    const { db  } = await (0,_util_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n    const movies = await db.collection(\"studio\").find({}).limit(20).toArray();\n    return {\n        props: {\n            movies: JSON.parse(JSON.stringify(movies))\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXNwb25zZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFFcEMsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDMUMsTUFBTSw2RUFDSEMsQ0FBRzs7d0ZBQ0RDLENBQUU7MEJBQUMsQ0FBeUI7Ozs7Ozt3RkFDNUJDLENBQUM7c0dBQ0NDLENBQUs7OEJBQUMsQ0FBeUI7Ozs7Ozs7Ozs7O3dGQUVqQ0MsQ0FBRTswQkFDQUwsTUFBTSxDQUFDTSxHQUFHLEVBQUVDLEtBQUssK0VBQ2ZDLENBQUU7O3dHQUNBQyxDQUFFOzBDQUFFRixLQUFLLENBQUNHLElBQUk7Ozs7Ozt3R0FDZFAsQ0FBQzswQ0FBRUksS0FBSyxDQUFDSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekIsQ0FBQztBQUVNLGVBQWVDLGtCQUFrQixHQUFHLENBQUM7SUFDMUMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsRUFBRSxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNmLGdFQUFpQjtJQUV0QyxLQUFLLENBQUNFLE1BQU0sR0FBRyxLQUFLLENBQUNhLEVBQUUsQ0FDcEJDLFVBQVUsQ0FBQyxDQUFRLFNBQ25CQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1BDLEtBQUssQ0FBQyxFQUFFLEVBQ1JDLE9BQU87SUFFVixNQUFNLENBQUMsQ0FBQztRQUNOQyxLQUFLLEVBQUUsQ0FBQztZQUNObEIsTUFBTSxFQUFFbUIsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDckIsTUFBTTtRQUMxQyxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9maWxlLy4vcGFnZXMvcmVzcG9uc2UuanM/NWU0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuLi91dGlsL21vbmdvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzKHsgbW92aWVzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlRvcCAyMCBNb3ZpZXMgb2YgQWxsIFRpbWU8L2gxPlxuICAgICAgPHA+XG4gICAgICAgIDxzbWFsbD4oQWNjb3JkaW5nIHRvIE1ldGFjcml0aWMpPC9zbWFsbD5cbiAgICAgIDwvcD5cbiAgICAgIDx1bD5cbiAgICAgICAge21vdmllcy5tYXAoKG1vdmllKSA9PiAoXG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGgzPnttb3ZpZS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8cD57bW92aWUuYWdlfTwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgY29uc3QgbW92aWVzID0gYXdhaXQgZGJcbiAgICAuY29sbGVjdGlvbihcInN0dWRpb1wiKVxuICAgIC5maW5kKHt9KVxuICAgIC5saW1pdCgyMClcbiAgICAudG9BcnJheSgpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1vdmllczogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtb3ZpZXMpKSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiTW92aWVzIiwibW92aWVzIiwiZGl2IiwiaDEiLCJwIiwic21hbGwiLCJ1bCIsIm1hcCIsIm1vdmllIiwibGkiLCJoMyIsIm5hbWUiLCJhZ2UiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kIiwibGltaXQiLCJ0b0FycmF5IiwicHJvcHMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/response.js\n");

/***/ }),

/***/ "./util/mongodb.js":
/*!*************************!*\
  !*** ./util/mongodb.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nlet uri = process.env.MONGODB_URI;\nlet dbName = process.env.MONGODB_DB;\nlet cachedClient = null;\nlet cachedDb = null;\nif (!uri) {\n    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\nif (!dbName) {\n    throw new Error('Please define the MONGODB_DB environment variable inside .env.local');\n}\nasync function connectToDatabase() {\n    if (cachedClient && cachedDb) {\n        return {\n            client: cachedClient,\n            db: cachedDb\n        };\n    }\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(uri, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    const db = await client.db(dbName);\n    cachedClient = client;\n    cachedDb = db;\n    return {\n        client,\n        db\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL21vbmdvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXJDLEdBQUcsQ0FBQ0MsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztBQUNqQyxHQUFHLENBQUNDLE1BQU0sR0FBR0gsT0FBTyxDQUFDQyxHQUFHLENBQUNHLFVBQVU7QUFFbkMsR0FBRyxDQUFDQyxZQUFZLEdBQUcsSUFBSTtBQUN2QixHQUFHLENBQUNDLFFBQVEsR0FBRyxJQUFJO0FBRW5CLEVBQUUsR0FBR1AsR0FBRyxFQUFFLENBQUM7SUFDVCxLQUFLLENBQUMsR0FBRyxDQUFDUSxLQUFLLENBQ2IsQ0FBc0U7QUFFMUUsQ0FBQztBQUVELEVBQUUsR0FBR0osTUFBTSxFQUFFLENBQUM7SUFDWixLQUFLLENBQUMsR0FBRyxDQUFDSSxLQUFLLENBQ2IsQ0FBcUU7QUFFekUsQ0FBQztBQUVNLGVBQWVDLGlCQUFpQixHQUFHLENBQUM7SUFDekMsRUFBRSxFQUFFSCxZQUFZLElBQUlDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxDQUFDO1lBQUNHLE1BQU0sRUFBRUosWUFBWTtZQUFFSyxFQUFFLEVBQUVKLFFBQVE7UUFBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxLQUFLLENBQUNHLE1BQU0sR0FBRyxLQUFLLENBQUNYLHdEQUFtQixDQUFDQyxHQUFHLEVBQUUsQ0FBQztRQUM3Q2EsZUFBZSxFQUFFLElBQUk7UUFDckJDLGtCQUFrQixFQUFFLElBQUk7SUFDMUIsQ0FBQztJQUVELEtBQUssQ0FBQ0gsRUFBRSxHQUFHLEtBQUssQ0FBQ0QsTUFBTSxDQUFDQyxFQUFFLENBQUNQLE1BQU07SUFFakNFLFlBQVksR0FBR0ksTUFBTTtJQUNyQkgsUUFBUSxHQUFHSSxFQUFFO0lBRWIsTUFBTSxDQUFDLENBQUM7UUFBQ0QsTUFBTTtRQUFFQyxFQUFFO0lBQUMsQ0FBQztBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3V0aWwvbW9uZ29kYi5qcz80NTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcblxubGV0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXG5sZXQgZGJOYW1lID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9EQlxuXG5sZXQgY2FjaGVkQ2xpZW50ID0gbnVsbFxubGV0IGNhY2hlZERiID0gbnVsbFxuXG5pZiAoIXVyaSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJ1xuICApXG59XG5cbmlmICghZGJOYW1lKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9EQiBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbCdcbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjYWNoZWRDbGllbnQgJiYgY2FjaGVkRGIpIHtcbiAgICByZXR1cm4geyBjbGllbnQ6IGNhY2hlZENsaWVudCwgZGI6IGNhY2hlZERiIH1cbiAgfVxuXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJpLCB7XG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgfSlcblxuICBjb25zdCBkYiA9IGF3YWl0IGNsaWVudC5kYihkYk5hbWUpXG5cbiAgY2FjaGVkQ2xpZW50ID0gY2xpZW50XG4gIGNhY2hlZERiID0gZGJcblxuICByZXR1cm4geyBjbGllbnQsIGRiIH1cbn1cbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImRiTmFtZSIsIk1PTkdPREJfREIiLCJjYWNoZWRDbGllbnQiLCJjYWNoZWREYiIsIkVycm9yIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjbGllbnQiLCJkYiIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./util/mongodb.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/response.js"));
module.exports = __webpack_exports__;

})();