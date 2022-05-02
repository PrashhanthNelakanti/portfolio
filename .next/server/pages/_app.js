"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,229];
exports.modules = {

/***/ 9258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@headlessui/react"
var external_headlessui_react_ = __webpack_require__(7505);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Navbar.js





const user = {
    name: 'Prashhanth Nelakanti',
    email: 'prashhanth.nelakanti@gmail.com',
    imageUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQEj4AWtH8N89A/profile-displayphoto-shrink_200_200/0/1605781245678?e=1649894400&v=beta&t=qn2RuS29GWM2GpG7ZrkBrP33HwgkUn-Fx0yKb19aOIY'
};
const navigation = [
    {
        name: 'Home',
        href: '/home',
        current: true
    },
    {
        name: 'About',
        href: '/about',
        current: false
    },
    {
        name: 'Info',
        href: '/info',
        current: false
    },
    {
        name: 'Projects',
        href: '/projects',
        current: false
    },
    {
        name: 'Register',
        href: '/register',
        current: false
    },
    {
        name: 'Login',
        href: '/login',
        current: false
    }, 
];
const userNavigation = [
    {
        name: 'Your Profile',
        href: '#'
    },
    {
        name: 'Settings',
        href: '#'
    },
    {
        name: 'Sign out',
        href: '#'
    }, 
];
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
function Navbar() {
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "min-h-full",
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_headlessui_react_.Disclosure, {
                as: "nav",
                className: "bg-gray-800",
                children: ({ open  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-between h-16",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex-shrink-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        className: "h-8 w-8",
                                                        src: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
                                                        alt: "Workflow"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "hidden md:block",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "ml-10 flex items-baseline space-x-4",
                                                        children: navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: item.href,
                                                                className: classNames('text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium'),
                                                                "aria-current": item.current ? 'page' : undefined,
                                                                children: item.name
                                                            }, item.name)
                                                        )
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "-mr-2 flex md:hidden",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_headlessui_react_.Disclosure.Button, {
                                                className: "bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Open main menu"
                                                    }),
                                                    open ? /*#__PURE__*/ jsx_runtime_.jsx(outline_.XIcon, {
                                                        className: "block h-6 w-6",
                                                        "aria-hidden": "true"
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(outline_.MenuIcon, {
                                                        className: "block h-6 w-6",
                                                        "aria-hidden": "true"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_headlessui_react_.Disclosure.Panel, {
                                className: "md:hidden",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
                                        children: navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(external_headlessui_react_.Disclosure.Button, {
                                                as: "a",
                                                href: item.href,
                                                className: classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium'),
                                                "aria-current": item.current ? 'page' : undefined,
                                                children: item.name
                                            }, item.name)
                                        )
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "pt-4 pb-3 border-t border-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center px-5",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "flex-shrink-0",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            className: "h-10 w-10 rounded-full",
                                                            src: user.imageUrl,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "ml-3",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "text-base font-medium leading-none text-white",
                                                                children: user.name
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "text-sm font-medium leading-none text-gray-400",
                                                                children: user.email
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        type: "button",
                                                        className: "ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-red-400 hover:text-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mt-3 px-2 space-y-1",
                                                children: userNavigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(external_headlessui_react_.Disclosure.Button, {
                                                        as: "a",
                                                        href: item.href,
                                                        className: "block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700",
                                                        children: item.name
                                                    }, item.name)
                                                )
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/Layout.js



const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            children
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 7505:
/***/ ((module) => {

module.exports = require("@headlessui/react");

/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__(9258));
module.exports = __webpack_exports__;

})();