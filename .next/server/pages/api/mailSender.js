"use strict";
(() => {
var exports = {};
exports.id = 899;
exports.ids = [899];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    console.log(await "In mailsnder");
    switch(req.method){
        case 'POST':
            {
                return addPost(req, res);
            }
    }
};
async function addPost(req, res) {
    try {
        const nodemailer = __webpack_require__(5184);
        const body = req.body;
        console.log(await body.info);
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'prashhanth.online@gmail.com',
                pass: 'rock@1234A'
            }
        });
        var mailOptions = {
            from: 'prashhanth.online@gmail.com',
            to: body.email,
            subject: body.fname,
            html: `<h1>Here is the Otp</h1>`
        };
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        return res.json({
            message: `Post added successfully ${req.body}`,
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
var __webpack_exports__ = (__webpack_exec__(228));
module.exports = __webpack_exports__;

})();