"use strict";
(() => {
var exports = {};
exports.id = 816;
exports.ids = [816];
exports.modules = {

/***/ 1596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mongo)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./util/mongodb.js

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;
let cachedClient = null;
let cachedDb = null;
if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
if (!dbName) {
    throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}
async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb
        };
    }
    const client = await external_mongodb_namespaceObject.MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = await client.db(dbName);
    cachedClient = client;
    cachedDb = db;
    return {
        client,
        db
    };
}

;// CONCATENATED MODULE: ./pages/api/mongo.js

/* harmony default export */ const mongo = (async (req, res)=>{
    const { db  } = await connectToDatabase();
    const movies = await db.collection("movies").find({}).sort({
        metacritic: -1
    }).limit(20).toArray();
    res.json(movies);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1596));
module.exports = __webpack_exports__;

})();