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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    switch(req.method){\n        case 'POST':\n            {\n                return sendOtp(req, res);\n            }\n    }\n};\nasync function sendOtp(req, res) {\n    try {\n        const nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n        const body = req.body;\n        console.log(await body.info);\n        const transporter = nodemailer.createTransport({\n            service: 'gmail',\n            auth: {\n                user: rocess.env.EMAIL,\n                pass: rocess.env.EMAIL_PWD\n            },\n            secure: true\n        });\n        var mailOptions = {\n            from: process.env.EMAIL,\n            to: body.email,\n            subject: body.fname,\n            html: `<h1>Here is the Otp</h1>`\n        };\n        await new Promise((resolve, reject)=>{\n            transporter.sendMail(mailOptions, function(error, info) {\n                if (error) {\n                    console.log(error);\n                } else {\n                    console.log('Email sent: ' + info.response);\n                }\n            });\n        });\n        return res.json({\n            message: `Post added successfully`,\n            success: true\n        });\n    } catch (error) {\n        return res.json({\n            message: new Error(error).message,\n            success: false\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbFNlbmRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUEsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQzdDLE1BQU0sQ0FBRUQsR0FBRyxDQUFDRSxNQUFNO1FBQ2QsSUFBSSxDQUFDLENBQU07WUFBRSxDQUFDO2dCQUNWLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSCxHQUFHLEVBQUVDLEdBQUc7WUFDM0IsQ0FBQzs7QUFFVCxDQUFDO2VBRWNFLE9BQU8sQ0FBQ0gsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUM5QixHQUFHLENBQUMsQ0FBQztRQUNELEtBQUssQ0FBQ0csVUFBVSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFZO1FBRXZDLEtBQUssQ0FBQ0MsSUFBSSxHQUFHTixHQUFHLENBQUNNLElBQUk7UUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQ0YsSUFBSSxDQUFDRyxJQUFJO1FBQzNCLEtBQUssQ0FBQ0MsV0FBVyxHQUFHTixVQUFVLENBQUNPLGVBQWUsQ0FBQyxDQUFDO1lBQzVDQyxPQUFPLEVBQUUsQ0FBTztZQUNoQkMsSUFBSSxFQUFFLENBQUM7Z0JBQ0hDLElBQUksRUFBRUMsTUFBTSxDQUFDQyxHQUFHLENBQUNDLEtBQUs7Z0JBQ3RCQyxJQUFJLEVBQUVILE1BQU0sQ0FBQ0MsR0FBRyxDQUFDRyxTQUFTO1lBQzlCLENBQUM7WUFDREMsTUFBTSxFQUFFLElBQUk7UUFDaEIsQ0FBQztRQUNELEdBQUcsQ0FBQ0MsV0FBVyxHQUFHLENBQUM7WUFDZkMsSUFBSSxFQUFFQyxPQUFPLENBQUNQLEdBQUcsQ0FBQ0MsS0FBSztZQUN2Qk8sRUFBRSxFQUFFbEIsSUFBSSxDQUFDbUIsS0FBSztZQUNkQyxPQUFPLEVBQUVwQixJQUFJLENBQUNxQixLQUFLO1lBQ25CQyxJQUFJLEdBQUcsd0JBQXdCO1FBQ25DLENBQUM7UUFDTCxLQUFLLENBQUMsR0FBRyxDQUFDQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxHQUFLLENBQUM7WUFDcENyQixXQUFXLENBQUNzQixRQUFRLENBQUNYLFdBQVcsRUFBRSxRQUFRLENBQUVZLEtBQUssRUFBRXhCLElBQUksRUFBRSxDQUFDO2dCQUN0RCxFQUFFLEVBQUV3QixLQUFLLEVBQUUsQ0FBQztvQkFDUjFCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeUIsS0FBSztnQkFDckIsQ0FBQyxNQUFNLENBQUM7b0JBQ0oxQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFjLGdCQUFHQyxJQUFJLENBQUN5QixRQUFRO2dCQUM5QyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFFRyxNQUFNLENBQUNqQyxHQUFHLENBQUNrQyxJQUFJLENBQUMsQ0FBQztZQUNiQyxPQUFPLEdBQUcsdUJBQXVCO1lBQ2pDQyxPQUFPLEVBQUUsSUFBSTtRQUNqQixDQUFDO0lBQ0wsQ0FBQyxDQUFDLEtBQUssRUFBRUosS0FBSyxFQUFFLENBQUM7UUFDYixNQUFNLENBQUNoQyxHQUFHLENBQUNrQyxJQUFJLENBQUMsQ0FBQztZQUNiQyxPQUFPLEVBQUUsR0FBRyxDQUFDRSxLQUFLLENBQUNMLEtBQUssRUFBRUcsT0FBTztZQUNqQ0MsT0FBTyxFQUFFLEtBQUs7UUFDbEIsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3BhZ2VzL2FwaS9tYWlsU2VuZGVyLmpzP2I5MTMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgICAgICBjYXNlICdQT1NUJzoge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRPdHAocmVxLCByZXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzZW5kT3RwKHJlcSwgcmVzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgbm9kZW1haWxlciA9IHJlcXVpcmUoJ25vZGVtYWlsZXInKTtcblxuICAgICAgICBjb25zdCBib2R5ID0gcmVxLmJvZHk7XG4gICAgICAgIGNvbnNvbGUubG9nKGF3YWl0IGJvZHkuaW5mbylcbiAgICAgICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICAgICAgICBzZXJ2aWNlOiAnZ21haWwnLFxuICAgICAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgICAgIHVzZXI6IHJvY2Vzcy5lbnYuRU1BSUwsXG4gICAgICAgICAgICAgICAgcGFzczogcm9jZXNzLmVudi5FTUFJTF9QV0RcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWN1cmU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbWFpbE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTCxcbiAgICAgICAgICAgIHRvOiBib2R5LmVtYWlsLFxuICAgICAgICAgICAgc3ViamVjdDogYm9keS5mbmFtZSxcbiAgICAgICAgICAgIGh0bWw6IGA8aDE+SGVyZSBpcyB0aGUgT3RwPC9oMT5gXG4gICAgICAgIH07XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucywgZnVuY3Rpb24gKGVycm9yLCBpbmZvKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFbWFpbCBzZW50OiAnICsgaW5mby5yZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiBgUG9zdCBhZGRlZCBzdWNjZXNzZnVsbHlgLFxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG5ldyBFcnJvcihlcnJvcikubWVzc2FnZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNlbmRPdHAiLCJub2RlbWFpbGVyIiwicmVxdWlyZSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiaW5mbyIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImF1dGgiLCJ1c2VyIiwicm9jZXNzIiwiZW52IiwiRU1BSUwiLCJwYXNzIiwiRU1BSUxfUFdEIiwic2VjdXJlIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwicHJvY2VzcyIsInRvIiwiZW1haWwiLCJzdWJqZWN0IiwiZm5hbWUiLCJodG1sIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZW5kTWFpbCIsImVycm9yIiwicmVzcG9uc2UiLCJqc29uIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/mailSender.js\n");

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