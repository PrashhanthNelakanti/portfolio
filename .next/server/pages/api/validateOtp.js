"use strict";
(() => {
var exports = {};
exports.id = 355;
exports.ids = [355];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 7813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const { connectToDatabase  } = __webpack_require__(6057);
const ObjectId = (__webpack_require__(8013).ObjectId);
async function handler(req, res) {
    // switch the methods
    switch(req.method){
        case 'POST':
            {
                return validate(req, res);
            }
    }
};
// Getting all posts.
async function validate(req, res) {
    const email = req.body.email;
    const otp = req.body.otp;
    console.log(req.body);
    try {
        let { db  } = await connectToDatabase();
        let posts = await db.collection('info').find({
            email: email,
            otp: otp,
            isActive: false
        }, {
            $exists: true
        }).toArray(function(err, doc) {
            if (doc && doc.length) {
                console.log(doc);
                doc[0].otp = '0';
                doc[0].isActive = true;
                updateUser(doc);
                return res.json({
                    message: 'Sign-in SuccessFul',
                    success: true
                });
            } else {
                return res.json({
                    message: 'Sign-in Failed',
                    success: false
                });
            }
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false
        });
    }
}
// Updating a post
async function updateUser(req) {
    var myquery = {
        email: req[0].email
    };
    var newvalues = {
        $set: req[0]
    };
    let { db  } = await connectToDatabase();
    let posts = await db.collection('info').updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
    });
    return 'User updated successfully';
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [57], () => (__webpack_exec__(7813)));
module.exports = __webpack_exports__;

})();