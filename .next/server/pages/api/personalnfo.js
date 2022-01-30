"use strict";
(() => {
var exports = {};
exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 13:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { connectToDatabase  } = __webpack_require__(57);
const ObjectId = (__webpack_require__(13).ObjectId);
async function handler(req, res) {
    // switch the methods
    switch(req.method){
        case 'GET':
            {
                return getPosts(req, res);
            }
        case 'POST':
            {
                return addPost(req, res);
            }
        case 'PUT':
            {
                return updatePost(req, res);
            }
        case 'DELETE':
            {
                return deletePost(req, res);
            }
    }
};
// Getting all posts.
async function getPosts(req, res) {
    try {
        let { db  } = await connectToDatabase();
        let posts = await db.collection('info').find({}).toArray();
        return res.json({
            message: JSON.parse(JSON.stringify(posts)),
            success: true
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false
        });
    }
}
// Adding a new post
async function addPost(req, res) {
    try {
        let { db  } = await connectToDatabase();
        await db.collection('info').insertOne(JSON.parse(req.body));
        return res.json({
            message: 'Post added successfully',
            success: true
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false
        });
    }
}
// Updating a post
async function updatePost(req, res) {
    try {
        let { db  } = await connectToDatabase();
        await db.collection('info').updateOne({
            _id: new ObjectId(req.body)
        }, {
            $set: {
                published: true
            }
        });
        return res.json({
            message: 'Post updated successfully',
            success: true
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false
        });
    }
}
// deleting a post
async function deletePost(req, res) {
    try {
        let { db  } = await connectToDatabase();
        await db.collection('info').deleteOne({
            _id: new ObjectId(req.body)
        });
        return res.json({
            message: 'Post deleted successfully',
            success: true
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [57], () => (__webpack_exec__(154)));
module.exports = __webpack_exports__;

})();