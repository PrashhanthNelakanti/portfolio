"use strict";
(() => {
var exports = {};
exports.id = 776;
exports.ids = [776,229];
exports.modules = {

/***/ 2441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Info),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_namespaceObject);
;// CONCATENATED MODULE: ./pages/info.js




function Info({ data  }) {
    (0,external_react_.useEffect)(()=>{
        external_aos_default().init({
            duration: 2000
        });
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bg-white shadow overflow-hidden sm:rounded-lg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "px-4 py-5 sm:px-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "text-lg leading-6 font-medium text-gray-900",
                            children: "Applicant Information"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mt-1 max-w-2xl text-sm text-gray-500",
                            children: "Personal details and application."
                        })
                    ]
                }),
                data.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "There is no Data yet!"
                }) : /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: data.map((info, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            "data-aos": i % 2 == 0 ? 'fade-left' : 'fade-right',
                            className: "border-t border-gray-300",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                className: "text-sm font-medium text-gray-500",
                                                children: "Full name"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",
                                                children: info.fname
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                className: "text-sm font-medium text-gray-500",
                                                children: "Last name for"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",
                                                children: info.lname
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                className: "text-sm font-medium text-gray-500",
                                                children: "Email address"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",
                                                children: info.email
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                className: "text-sm font-medium text-gray-500",
                                                children: "Address"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",
                                                children: info.address
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, info.id)
                    )
                })
            ]
        })
    }));
};
async function getServerSideProps(ctx) {
    // get the current environment
    let dev = "production" !== 'production';
    let { DEV_URL , PROD_URL  } = process.env;
    // request posts from api
    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/personalnfo`);
    // extract the data
    let data = await response.json();
    return {
        props: {
            data: data['message']
        }
    };
}


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2441));
module.exports = __webpack_exports__;

})();