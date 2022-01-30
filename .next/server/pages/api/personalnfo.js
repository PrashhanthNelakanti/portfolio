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
exports.id = "pages/api/personalnfo";
exports.ids = ["pages/api/personalnfo"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst MONGODB_DB = process.env.DB_NAME;\n// check the MongoDB URI\nif (!MONGODB_URI) {\n    throw new Error('Define the MONGODB_URI environmental variable');\n}\n// check the MongoDB DB\nif (!MONGODB_DB) {\n    throw new Error('Define the MONGODB_DB environmental variable');\n}\nlet cachedClient = null;\nlet cachedDb = null;\nasync function connectToDatabase() {\n    // check the cached.\n    if (cachedClient && cachedDb) {\n        // load from cache\n        return {\n            client: cachedClient,\n            db: cachedDb\n        };\n    }\n    // set the connection options\n    const opts = {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    };\n    // Connect to cluster\n    let client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(MONGODB_URI, opts);\n    await client.connect();\n    let db = client.db(MONGODB_DB);\n    // set cache\n    cachedClient = client;\n    cachedDb = db;\n    return {\n        client: cachedClient,\n        db: cachedDb\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsS0FBSyxDQUFDQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixXQUFXO0FBQzNDLEtBQUssQ0FBQ0csVUFBVSxHQUFHRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsT0FBTztBQUV0QyxFQUF3QjtBQUN4QixFQUFFLEdBQUdKLFdBQVcsRUFBRSxDQUFDO0lBQ2YsS0FBSyxDQUFDLEdBQUcsQ0FBQ0ssS0FBSyxDQUFDLENBQStDO0FBQ25FLENBQUM7QUFFRCxFQUF1QjtBQUN2QixFQUFFLEdBQUdGLFVBQVUsRUFBRSxDQUFDO0lBQ2QsS0FBSyxDQUFDLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDLENBQThDO0FBQ2xFLENBQUM7QUFFRCxHQUFHLENBQUNDLFlBQVksR0FBRyxJQUFJO0FBQ3ZCLEdBQUcsQ0FBQ0MsUUFBUSxHQUFHLElBQUk7QUFFWixlQUFlQyxpQkFBaUIsR0FBRyxDQUFDO0lBQ3ZDLEVBQW9CO0lBQ3BCLEVBQUUsRUFBRUYsWUFBWSxJQUFJQyxRQUFRLEVBQUUsQ0FBQztRQUMzQixFQUFrQjtRQUNsQixNQUFNLENBQUMsQ0FBQztZQUNKRSxNQUFNLEVBQUVILFlBQVk7WUFDcEJJLEVBQUUsRUFBRUgsUUFBUTtRQUNoQixDQUFDO0lBQ0wsQ0FBQztJQUVELEVBQTZCO0lBQzdCLEtBQUssQ0FBQ0ksSUFBSSxHQUFHLENBQUM7UUFDVkMsZUFBZSxFQUFFLElBQUk7UUFDckJDLGtCQUFrQixFQUFFLElBQUk7SUFDNUIsQ0FBQztJQUVELEVBQXFCO0lBQ3JCLEdBQUcsQ0FBQ0osTUFBTSxHQUFHLEdBQUcsQ0FBQ1YsZ0RBQVcsQ0FBQ0MsV0FBVyxFQUFFVyxJQUFJO0lBQzlDLEtBQUssQ0FBQ0YsTUFBTSxDQUFDSyxPQUFPO0lBQ3BCLEdBQUcsQ0FBQ0osRUFBRSxHQUFHRCxNQUFNLENBQUNDLEVBQUUsQ0FBQ1AsVUFBVTtJQUU3QixFQUFZO0lBQ1pHLFlBQVksR0FBR0csTUFBTTtJQUNyQkYsUUFBUSxHQUFHRyxFQUFFO0lBRWIsTUFBTSxDQUFDLENBQUM7UUFDSkQsTUFBTSxFQUFFSCxZQUFZO1FBQ3BCSSxFQUFFLEVBQUVILFFBQVE7SUFDaEIsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9maWxlLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuY29uc3QgTU9OR09EQl9EQiA9IHByb2Nlc3MuZW52LkRCX05BTUU7XG5cbi8vIGNoZWNrIHRoZSBNb25nb0RCIFVSSVxuaWYgKCFNT05HT0RCX1VSSSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudGFsIHZhcmlhYmxlJyk7XG59XG5cbi8vIGNoZWNrIHRoZSBNb25nb0RCIERCXG5pZiAoIU1PTkdPREJfREIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RlZmluZSB0aGUgTU9OR09EQl9EQiBlbnZpcm9ubWVudGFsIHZhcmlhYmxlJyk7XG59XG5cbmxldCBjYWNoZWRDbGllbnQgPSBudWxsO1xubGV0IGNhY2hlZERiID0gbnVsbDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuICAgIC8vIGNoZWNrIHRoZSBjYWNoZWQuXG4gICAgaWYgKGNhY2hlZENsaWVudCAmJiBjYWNoZWREYikge1xuICAgICAgICAvLyBsb2FkIGZyb20gY2FjaGVcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsaWVudDogY2FjaGVkQ2xpZW50LFxuICAgICAgICAgICAgZGI6IGNhY2hlZERiLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIHNldCB0aGUgY29ubmVjdGlvbiBvcHRpb25zXG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgfTtcblxuICAgIC8vIENvbm5lY3QgdG8gY2x1c3RlclxuICAgIGxldCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQoTU9OR09EQl9VUkksIG9wdHMpO1xuICAgIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XG4gICAgbGV0IGRiID0gY2xpZW50LmRiKE1PTkdPREJfREIpO1xuXG4gICAgLy8gc2V0IGNhY2hlXG4gICAgY2FjaGVkQ2xpZW50ID0gY2xpZW50O1xuICAgIGNhY2hlZERiID0gZGI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjbGllbnQ6IGNhY2hlZENsaWVudCxcbiAgICAgICAgZGI6IGNhY2hlZERiLFxuICAgIH07XG59Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9EQiIsIkRCX05BTUUiLCJFcnJvciIsImNhY2hlZENsaWVudCIsImNhY2hlZERiIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjbGllbnQiLCJkYiIsIm9wdHMiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/personalnfo.js":
/*!**********************************!*\
  !*** ./pages/api/personalnfo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst { connectToDatabase  } = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\nconst ObjectId = (__webpack_require__(/*! mongodb */ \"mongodb\").ObjectId);\nasync function handler(req, res) {\n    // switch the methods\n    switch(req.method){\n        case 'GET':\n            {\n                return getPosts(req, res);\n            }\n        case 'POST':\n            {\n                return addPost(req, res);\n            }\n        case 'PUT':\n            {\n                return updatePost(req, res);\n            }\n        case 'DELETE':\n            {\n                return deletePost(req, res);\n            }\n    }\n};\n// Getting all posts.\nasync function getPosts(req, res) {\n    try {\n        let { db  } = await connectToDatabase();\n        let posts = await db.collection('info').find({}).toArray();\n        return res.json({\n            message: JSON.parse(JSON.stringify(posts)),\n            success: true\n        });\n    } catch (error) {\n        return res.json({\n            message: new Error(error).message,\n            success: false\n        });\n    }\n}\n// Adding a new post\nasync function addPost(req, res) {\n    try {\n        let { db  } = await connectToDatabase();\n        await db.collection('info').insertOne(JSON.parse(req.body));\n        return res.json({\n            message: 'Post added successfully',\n            success: true\n        });\n    } catch (error) {\n        return res.json({\n            message: new Error(error).message,\n            success: false\n        });\n    }\n}\n// Updating a post\nasync function updatePost(req, res) {\n    try {\n        let { db  } = await connectToDatabase();\n        await db.collection('info').updateOne({\n            _id: new ObjectId(req.body)\n        }, {\n            $set: {\n                published: true\n            }\n        });\n        return res.json({\n            message: 'Post updated successfully',\n            success: true\n        });\n    } catch (error) {\n        return res.json({\n            message: new Error(error).message,\n            success: false\n        });\n    }\n}\n// deleting a post\nasync function deletePost(req, res) {\n    try {\n        let { db  } = await connectToDatabase();\n        await db.collection('info').deleteOne({\n            _id: new ObjectId(req.body)\n        });\n        return res.json({\n            message: 'Post deleted successfully',\n            success: true\n        });\n    } catch (error) {\n        return res.json({\n            message: new Error(error).message,\n            success: false\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEyQjtZQUNwQ0ksT0FBTyxFQUFFLElBQUk7UUFDakIsQ0FBQztJQUNMLENBQUMsQ0FBQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxDQUFDO1FBQ2IsTUFBTSxDQUFDakIsR0FBRyxDQUFDVyxJQUFJLENBQUMsQ0FBQztZQUNiQyxPQUFPLEVBQUUsR0FBRyxDQUFDTSxLQUFLLENBQUNELEtBQUssRUFBRUwsT0FBTztZQUNqQ0ksT0FBTyxFQUFFLEtBQUs7UUFDbEIsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3BhZ2VzL2FwaS9wZXJzb25hbG5mby5qcz9iMTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5jb25zdCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gPSByZXF1aXJlKCcuLi8uLi9saWIvbW9uZ29kYicpO1xuY29uc3QgT2JqZWN0SWQgPSByZXF1aXJlKCdtb25nb2RiJykuT2JqZWN0SWQ7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICAvLyBzd2l0Y2ggdGhlIG1ldGhvZHNcbiAgICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICAgICAgY2FzZSAnR0VUJzoge1xuICAgICAgICAgICAgcmV0dXJuIGdldFBvc3RzKHJlcSwgcmVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ1BPU1QnOiB7XG4gICAgICAgICAgICByZXR1cm4gYWRkUG9zdChyZXEsIHJlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlICdQVVQnOiB7XG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlUG9zdChyZXEsIHJlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlICdERUxFVEUnOiB7XG4gICAgICAgICAgICByZXR1cm4gZGVsZXRlUG9zdChyZXEsIHJlcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEdldHRpbmcgYWxsIHBvc3RzLlxuYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHMocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAgICAgbGV0IHBvc3RzID0gYXdhaXQgZGJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdpbmZvJylcbiAgICAgICAgICAgIC5maW5kKHt9KVxuICAgICAgICAgICAgLnRvQXJyYXkoKTtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocG9zdHMpKSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiBuZXcgRXJyb3IoZXJyb3IpLm1lc3NhZ2UsXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vLyBBZGRpbmcgYSBuZXcgcG9zdFxuYXN5bmMgZnVuY3Rpb24gYWRkUG9zdChyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdpbmZvJykuaW5zZXJ0T25lKEpTT04ucGFyc2UocmVxLmJvZHkpKTtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQb3N0IGFkZGVkIHN1Y2Nlc3NmdWxseScsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogbmV3IEVycm9yKGVycm9yKS5tZXNzYWdlLFxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLy8gVXBkYXRpbmcgYSBwb3N0XG5hc3luYyBmdW5jdGlvbiB1cGRhdGVQb3N0KHJlcSwgcmVzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbignaW5mbycpLnVwZGF0ZU9uZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfaWQ6IG5ldyBPYmplY3RJZChyZXEuYm9keSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyAkc2V0OiB7IHB1Ymxpc2hlZDogdHJ1ZSB9IH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogJ1Bvc3QgdXBkYXRlZCBzdWNjZXNzZnVsbHknLFxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG5ldyBFcnJvcihlcnJvcikubWVzc2FnZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8vIGRlbGV0aW5nIGEgcG9zdFxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlUG9zdChyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2luZm8nKS5kZWxldGVPbmUoe1xuICAgICAgICAgICAgX2lkOiBuZXcgT2JqZWN0SWQocmVxLmJvZHkpLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogJ1Bvc3QgZGVsZXRlZCBzdWNjZXNzZnVsbHknLFxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG5ldyBFcnJvcihlcnJvcikubWVzc2FnZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwicmVxdWlyZSIsIk9iamVjdElkIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImdldFBvc3RzIiwiYWRkUG9zdCIsInVwZGF0ZVBvc3QiLCJkZWxldGVQb3N0IiwiZGIiLCJwb3N0cyIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsImpzb24iLCJtZXNzYWdlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3VjY2VzcyIsImVycm9yIiwiRXJyb3IiLCJpbnNlcnRPbmUiLCJib2R5IiwidXBkYXRlT25lIiwiX2lkIiwiJHNldCIsInB1Ymxpc2hlZCIsImRlbGV0ZU9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/personalnfo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/personalnfo.js"));
module.exports = __webpack_exports__;

})();