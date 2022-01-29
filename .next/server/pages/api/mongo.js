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
exports.id = "pages/api/mongo";
exports.ids = ["pages/api/mongo"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/mongo.js":
/*!****************************!*\
  !*** ./pages/api/mongo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mongodb */ \"(api)/./util/mongodb.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { db  } = await (0,_util_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n    const movies = await db.collection(\"movies\").find({}).sort({\n        metacritic: -1\n    }).limit(20).toArray();\n    console.log(movies);\n    res.json(movies);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW9uZ28uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0Q7QUFFdEQsaUVBQU0sT0FBZ0JDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDbEMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsRUFBRSxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNILGdFQUFpQjtJQUV0QyxLQUFLLENBQUNJLE1BQU0sR0FBRyxLQUFLLENBQUNELEVBQUUsQ0FDcEJFLFVBQVUsQ0FBQyxDQUFRLFNBQ25CQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1BDLElBQUksQ0FBQyxDQUFDO1FBQUNDLFVBQVUsR0FBRyxDQUFDO0lBQUMsQ0FBQyxFQUN2QkMsS0FBSyxDQUFDLEVBQUUsRUFDUkMsT0FBTztJQUNWQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsTUFBTTtJQUNsQkYsR0FBRyxDQUFDVyxJQUFJLENBQUNULE1BQU07QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2ZpbGUvLi9wYWdlcy9hcGkvbW9uZ28uanM/MjY0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuLi8uLi91dGlsL21vbmdvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgY29uc3QgbW92aWVzID0gYXdhaXQgZGJcbiAgICAuY29sbGVjdGlvbihcIm1vdmllc1wiKVxuICAgIC5maW5kKHt9KVxuICAgIC5zb3J0KHsgbWV0YWNyaXRpYzogLTEgfSlcbiAgICAubGltaXQoMjApXG4gICAgLnRvQXJyYXkoKTtcbiAgY29uc29sZS5sb2cobW92aWVzKVxuICByZXMuanNvbihtb3ZpZXMpO1xufTtcbiJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsInJlcSIsInJlcyIsImRiIiwibW92aWVzIiwiY29sbGVjdGlvbiIsImZpbmQiLCJzb3J0IiwibWV0YWNyaXRpYyIsImxpbWl0IiwidG9BcnJheSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/mongo.js\n");

/***/ }),

/***/ "(api)/./util/mongodb.js":
/*!*************************!*\
  !*** ./util/mongodb.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nlet uri = process.env.MONGODB_URI;\nlet dbName = process.env.MONGODB_DB;\nlet cachedClient = null;\nlet cachedDb = null;\nif (!uri) {\n    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\nif (!dbName) {\n    throw new Error('Please define the MONGODB_DB environment variable inside .env.local');\n}\nasync function connectToDatabase() {\n    if (cachedClient && cachedDb) {\n        return {\n            client: cachedClient,\n            db: cachedDb\n        };\n    }\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(uri, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    const db = await client.db(dbName);\n    cachedClient = client;\n    cachedDb = db;\n    return {\n        client,\n        db\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlsL21vbmdvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXJDLEdBQUcsQ0FBQ0MsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztBQUNqQyxHQUFHLENBQUNDLE1BQU0sR0FBR0gsT0FBTyxDQUFDQyxHQUFHLENBQUNHLFVBQVU7QUFFbkMsR0FBRyxDQUFDQyxZQUFZLEdBQUcsSUFBSTtBQUN2QixHQUFHLENBQUNDLFFBQVEsR0FBRyxJQUFJO0FBRW5CLEVBQUUsR0FBR1AsR0FBRyxFQUFFLENBQUM7SUFDVCxLQUFLLENBQUMsR0FBRyxDQUFDUSxLQUFLLENBQ2IsQ0FBc0U7QUFFMUUsQ0FBQztBQUVELEVBQUUsR0FBR0osTUFBTSxFQUFFLENBQUM7SUFDWixLQUFLLENBQUMsR0FBRyxDQUFDSSxLQUFLLENBQ2IsQ0FBcUU7QUFFekUsQ0FBQztBQUVNLGVBQWVDLGlCQUFpQixHQUFHLENBQUM7SUFDekMsRUFBRSxFQUFFSCxZQUFZLElBQUlDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxDQUFDO1lBQUNHLE1BQU0sRUFBRUosWUFBWTtZQUFFSyxFQUFFLEVBQUVKLFFBQVE7UUFBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxLQUFLLENBQUNHLE1BQU0sR0FBRyxLQUFLLENBQUNYLHdEQUFtQixDQUFDQyxHQUFHLEVBQUUsQ0FBQztRQUM3Q2EsZUFBZSxFQUFFLElBQUk7UUFDckJDLGtCQUFrQixFQUFFLElBQUk7SUFDMUIsQ0FBQztJQUVELEtBQUssQ0FBQ0gsRUFBRSxHQUFHLEtBQUssQ0FBQ0QsTUFBTSxDQUFDQyxFQUFFLENBQUNQLE1BQU07SUFFakNFLFlBQVksR0FBR0ksTUFBTTtJQUNyQkgsUUFBUSxHQUFHSSxFQUFFO0lBRWIsTUFBTSxDQUFDLENBQUM7UUFBQ0QsTUFBTTtRQUFFQyxFQUFFO0lBQUMsQ0FBQztBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3V0aWwvbW9uZ29kYi5qcz80NTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcblxubGV0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXG5sZXQgZGJOYW1lID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9EQlxuXG5sZXQgY2FjaGVkQ2xpZW50ID0gbnVsbFxubGV0IGNhY2hlZERiID0gbnVsbFxuXG5pZiAoIXVyaSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJ1xuICApXG59XG5cbmlmICghZGJOYW1lKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9EQiBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbCdcbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjYWNoZWRDbGllbnQgJiYgY2FjaGVkRGIpIHtcbiAgICByZXR1cm4geyBjbGllbnQ6IGNhY2hlZENsaWVudCwgZGI6IGNhY2hlZERiIH1cbiAgfVxuXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJpLCB7XG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgfSlcblxuICBjb25zdCBkYiA9IGF3YWl0IGNsaWVudC5kYihkYk5hbWUpXG5cbiAgY2FjaGVkQ2xpZW50ID0gY2xpZW50XG4gIGNhY2hlZERiID0gZGJcblxuICByZXR1cm4geyBjbGllbnQsIGRiIH1cbn1cbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImRiTmFtZSIsIk1PTkdPREJfREIiLCJjYWNoZWRDbGllbnQiLCJjYWNoZWREYiIsIkVycm9yIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjbGllbnQiLCJkYiIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./util/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/mongo.js"));
module.exports = __webpack_exports__;

})();