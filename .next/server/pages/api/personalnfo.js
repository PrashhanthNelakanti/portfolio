"use strict";
(() => {
var exports = {};
exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const { connectToDatabase  } = __webpack_require__(6057);
const ObjectId = (__webpack_require__(8013).ObjectId);
const otp = new Date().getTime().toString(36);
async function handler(req, res) {
    // switch the methods
    switch(req.method){
        case 'GET':
            {
                return getUser(req, res);
            }
        case 'POST':
            {
                return addUser(req, res);
            }
        case 'PUT':
            {
                return updateUser(req, res);
            }
        case 'DELETE':
            {
                return deleteUser(req, res);
            }
    }
};
// Getting all posts.
async function getUser(req, res) {
    console.log(req.body);
    try {
        let { db  } = await connectToDatabase();
        let posts = await db.collection('info').find({
            email: email
        }, {
            $exists: true
        }).toArray(function(err, doc) {
            if (doc && doc.length) {
                console("maps", doc[0].email);
                return res.json({
                    message: 'User Already exists',
                    success: false
                });
            } else {
                return res.json({
                    message: 'User Password or Email Address In-correct',
                    success: true
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
// Adding a new post
async function addUser(req, res) {
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
                } else {
                    return res.json({
                        message: 'User Auth failed',
                        success: false
                    });
                }
                return res.json({
                    message: 'User Already exists',
                    success: false
                });
            } else {
                sendOtp(email);
                // get the data
                req.body.otp = otp;
                req.body.isActive = false;
                db.collection('info').insertOne(req.body);
                return res.json({
                    message: 'An OTP is sent to your Email Address',
                    success: true
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
async function updateUser(req, res) {
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
            message: 'User updated successfully',
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
async function deleteUser(req, res) {
    try {
        let { db  } = await connectToDatabase();
        await db.collection('info').deleteOne({
            _id: new ObjectId(req.body)
        });
        return res.json({
            message: 'User deleted successfully',
            success: true
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false
        });
    }
}
function sendOtp(to_emailAddress) {
    try {
        const nodemailer = __webpack_require__(5184);
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PWD
            },
            secure: true
        });
        var mailOptions = {
            from: process.env.EMAIL,
            to: to_emailAddress,
            subject: 'OTP',
            html: `<h1>Here is the Otp</h1><p>${otp}</p>`
        };
        new Promise((resolve, reject)=>{
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
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