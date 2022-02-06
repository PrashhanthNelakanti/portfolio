"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Footer.js

const Footer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            id: "footer",
            className: "text-center bg-gradient-to-r from-purple-500 to-blue-500",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container p-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "flex justify-center items-center border-white text-white",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "mr-4",
                                    children: "Register for free"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    className: "inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out",
                                    children: "Sign up!"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-center border-white text-white p-4",
                    style: {
                        'background-color': 'rgba(0, 0, 0, 0.2)'
                    },
                    children: "\xa9 2022 Copyright: Prashhanth"
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@headlessui/react"
const react_namespaceObject = require("@headlessui/react");
;// CONCATENATED MODULE: external "@heroicons/react/outline"
const outline_namespaceObject = require("@heroicons/react/outline");
;// CONCATENATED MODULE: ./components/Navbar.js

/* This example requires Tailwind CSS v2.0+ */ 


const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};
const navigation = [
    {
        name: 'Dashboard',
        href: '/dashboard',
        current: true
    },
    {
        name: 'Info',
        href: '/info',
        current: false
    },
    {
        name: 'Projects',
        href: '#',
        current: false
    },
    {
        name: 'Forms',
        href: '/submit',
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
function Example() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "min-h-full",
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Disclosure, {
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
                                                                className: classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium'),
                                                                "aria-current": item.current ? 'page' : undefined,
                                                                children: item.name
                                                            }, item.name)
                                                        )
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hidden md:block",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "ml-4 flex items-center md:ml-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                        type: "button",
                                                        className: "bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "sr-only",
                                                                children: "View notifications"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.BellIcon, {
                                                                className: "h-6 w-6",
                                                                "aria-hidden": "true"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Menu, {
                                                        as: "div",
                                                        className: "ml-3 relative",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Menu.Button, {
                                                                    className: "max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "sr-only",
                                                                            children: "Open user menu"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            className: "h-8 w-8 rounded-full",
                                                                            src: user.imageUrl,
                                                                            alt: ""
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Transition, {
                                                                as: external_react_.Fragment,
                                                                enter: "transition ease-out duration-100",
                                                                enterFrom: "transform opacity-0 scale-95",
                                                                enterTo: "transform opacity-100 scale-100",
                                                                leave: "transition ease-in duration-75",
                                                                leaveFrom: "transform opacity-100 scale-100",
                                                                leaveTo: "transform opacity-0 scale-95",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Menu.Items, {
                                                                    className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
                                                                    children: userNavigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Menu.Item, {
                                                                            children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    href: item.href,
                                                                                    className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'),
                                                                                    children: item.name
                                                                                })
                                                                        }, item.name)
                                                                    )
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "-mr-2 flex md:hidden",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Disclosure.Button, {
                                                className: "bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Open main menu"
                                                    }),
                                                    open ? /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.XIcon, {
                                                        className: "block h-6 w-6",
                                                        "aria-hidden": "true"
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.MenuIcon, {
                                                        className: "block h-6 w-6",
                                                        "aria-hidden": "true"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.Disclosure.Panel, {
                                className: "md:hidden",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
                                        children: navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Disclosure.Button, {
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
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                        type: "button",
                                                        className: "ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "sr-only",
                                                                children: "View notifications"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.BellIcon, {
                                                                className: "h-6 w-6",
                                                                "aria-hidden": "true"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mt-3 px-2 space-y-1",
                                                children: userNavigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Disclosure.Button, {
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
            /*#__PURE__*/ jsx_runtime_.jsx(Example, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


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
var __webpack_exports__ = (__webpack_exec__(7922));
module.exports = __webpack_exports__;

})();