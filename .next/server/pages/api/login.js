"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 7202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
const { connectToDatabase  } = __webpack_require__(6057);
async function Login(req, res) {
    switch(req.method){
        case 'POST':
            {
                return login(req, res);
            }
    }
};
async function login(req, res) {
    console.log('in login');
    const email = req.body.email;
    try {
        let { db  } = await connectToDatabase();
        let posts = await db.collection('info').find({
            email: email
        }, {
            $exists: true
        }).toArray(function(err, doc) {
            if (doc && doc.length) {
                if (req.body.purpose == "login" && req.body.password === doc[0].password && doc[0].isActive) {
                    console.log(doc);
                    return res.json({
                        message: 'User Auth Success',
                        success: true
                    });
                }
            } else {
                return res.json({
                    message: 'User Auth failed',
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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [57], () => (__webpack_exec__(7202)));
module.exports = __webpack_exports__;

})();