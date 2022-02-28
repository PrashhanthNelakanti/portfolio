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
exports.id = "pages/api/mailSender";
exports.ids = ["pages/api/mailSender"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/mailSender.js":
/*!*********************************!*\
  !*** ./pages/api/mailSender.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    switch(req.method){\n        case 'POST':\n            {\n                return sendOtp(req, res);\n            }\n    }\n};\nasync function sendOtp(req, res) {\n    try {\n        const nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n        const body = req.body;\n        console.log(await body.info);\n        const transporter = nodemailer.createTransport({\n            service: 'gmail',\n            auth: {\n                user: 'prashhanth.online@gmail.com',\n                pass: 'rock@1234A'\n            }\n        });\n        var mailOptions = {\n            from: 'prashhanth.online@gmail.com',\n            to: body.email,\n            subject: body.fname,\n            html: `<h1>Here is the Otp</h1>`\n        };\n        transporter.sendMail(mailOptions, function(error, info) {\n            if (error) {\n                console.log(error);\n            } else {\n                console.log('Email sent: ' + info.response);\n            }\n        });\n        return res.json({\n            message: `Post added successfully ${req.body}`,\n            success: true\n        });\n    } catch (error) {\n        return res.json({\n            message: new Error(error).message,\n            success: false\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbFNlbmRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUEsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQzdDLE1BQU0sQ0FBRUQsR0FBRyxDQUFDRSxNQUFNO1FBQ2QsSUFBSSxDQUFDLENBQU07WUFBRSxDQUFDO2dCQUNWLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSCxHQUFHLEVBQUVDLEdBQUc7WUFDM0IsQ0FBQzs7QUFFVCxDQUFDO2VBRWNFLE9BQU8sQ0FBQ0gsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUM5QixHQUFHLENBQUMsQ0FBQztRQUNELEtBQUssQ0FBQ0csVUFBVSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFZO1FBRXZDLEtBQUssQ0FBQ0MsSUFBSSxHQUFHTixHQUFHLENBQUNNLElBQUk7UUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQ0YsSUFBSSxDQUFDRyxJQUFJO1FBQzNCLEtBQUssQ0FBQ0MsV0FBVyxHQUFHTixVQUFVLENBQUNPLGVBQWUsQ0FBQyxDQUFDO1lBQzVDQyxPQUFPLEVBQUUsQ0FBTztZQUNoQkMsSUFBSSxFQUFFLENBQUM7Z0JBQ0hDLElBQUksRUFBRSxDQUE2QjtnQkFDbkNDLElBQUksRUFBRSxDQUFZO1lBQ3RCLENBQUM7UUFDTCxDQUFDO1FBQ0QsR0FBRyxDQUFDQyxXQUFXLEdBQUcsQ0FBQztZQUNmQyxJQUFJLEVBQUUsQ0FBNkI7WUFDbkNDLEVBQUUsRUFBRVosSUFBSSxDQUFDYSxLQUFLO1lBQ2RDLE9BQU8sRUFBRWQsSUFBSSxDQUFDZSxLQUFLO1lBQ25CQyxJQUFJLEdBQUcsd0JBQXdCO1FBQ25DLENBQUM7UUFFRFosV0FBVyxDQUFDYSxRQUFRLENBQUNQLFdBQVcsRUFBRSxRQUFRLENBQUVRLEtBQUssRUFBRWYsSUFBSSxFQUFFLENBQUM7WUFDdEQsRUFBRSxFQUFFZSxLQUFLLEVBQUUsQ0FBQztnQkFDUmpCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZ0IsS0FBSztZQUNyQixDQUFDLE1BQU0sQ0FBQztnQkFDSmpCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWMsZ0JBQUdDLElBQUksQ0FBQ2dCLFFBQVE7WUFDOUMsQ0FBQztRQUNMLENBQUM7UUFFRCxNQUFNLENBQUN4QixHQUFHLENBQUN5QixJQUFJLENBQUMsQ0FBQztZQUNiQyxPQUFPLEdBQUcsd0JBQXdCLEVBQUUzQixHQUFHLENBQUNNLElBQUk7WUFDNUNzQixPQUFPLEVBQUUsSUFBSTtRQUNqQixDQUFDO0lBQ0wsQ0FBQyxDQUFDLEtBQUssRUFBRUosS0FBSyxFQUFFLENBQUM7UUFDYixNQUFNLENBQUN2QixHQUFHLENBQUN5QixJQUFJLENBQUMsQ0FBQztZQUNiQyxPQUFPLEVBQUUsR0FBRyxDQUFDRSxLQUFLLENBQUNMLEtBQUssRUFBRUcsT0FBTztZQUNqQ0MsT0FBTyxFQUFFLEtBQUs7UUFDbEIsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3BhZ2VzL2FwaS9tYWlsU2VuZGVyLmpzP2I5MTMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgICAgICBjYXNlICdQT1NUJzoge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRPdHAocmVxLCByZXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzZW5kT3RwKHJlcSwgcmVzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9kZW1haWxlciA9IHJlcXVpcmUoJ25vZGVtYWlsZXInKTtcblxuICAgICAgICBjb25zdCBib2R5ID0gcmVxLmJvZHk7XG4gICAgICAgIGNvbnNvbGUubG9nKGF3YWl0IGJvZHkuaW5mbylcbiAgICAgICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICAgICAgICBzZXJ2aWNlOiAnZ21haWwnLFxuICAgICAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgICAgIHVzZXI6ICdwcmFzaGhhbnRoLm9ubGluZUBnbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgIHBhc3M6ICdyb2NrQDEyMzRBJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG1haWxPcHRpb25zID0ge1xuICAgICAgICAgICAgZnJvbTogJ3ByYXNoaGFudGgub25saW5lQGdtYWlsLmNvbScsXG4gICAgICAgICAgICB0bzogYm9keS5lbWFpbCxcbiAgICAgICAgICAgIHN1YmplY3Q6IGJvZHkuZm5hbWUsXG4gICAgICAgICAgICBodG1sOiBgPGgxPkhlcmUgaXMgdGhlIE90cDwvaDE+YFxuICAgICAgICB9O1xuXG4gICAgICAgIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zLCBmdW5jdGlvbiAoZXJyb3IsIGluZm8pIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VtYWlsIHNlbnQ6ICcgKyBpbmZvLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBQb3N0IGFkZGVkIHN1Y2Nlc3NmdWxseSAke3JlcS5ib2R5fWAsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogbmV3IEVycm9yKGVycm9yKS5tZXNzYWdlLFxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2VuZE90cCIsIm5vZGVtYWlsZXIiLCJyZXF1aXJlIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJpbmZvIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZXJ2aWNlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iLCJlbWFpbCIsInN1YmplY3QiLCJmbmFtZSIsImh0bWwiLCJzZW5kTWFpbCIsImVycm9yIiwicmVzcG9uc2UiLCJqc29uIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/mailSender.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/mailSender.js"));
module.exports = __webpack_exports__;

})();