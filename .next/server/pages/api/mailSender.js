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
    switch(req.method){
        case 'POST':
            {
                return sendOtp(req, res);
            }
    }
};
async function sendOtp(req, res) {
    try {
        const nodemailer = __webpack_require__(5184);
        const toAdd = req.body;
        console.log(await toAdd);
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
            to: toAdd,
            subject: 'OTP',
            html: `<h1>Here is the Otp</h1>`
        };
        await new Promise((resolve, reject)=>{
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        });
        return res.json({
            message: `Post added successfully`,
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