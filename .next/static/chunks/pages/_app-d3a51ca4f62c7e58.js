(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(2682)}])},2682:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return te}});var r,o,a,i=t(5893),u=function(){return(0,i.jsx)(i.Fragment,{})},s=t(7294);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function f(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function m(e,n){if(e in n){for(var t=n[e],r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return"function"===typeof t?t.apply(void 0,o):t}var i=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(i,m),i}function p(e){var n=e.props,t=e.slot,a=e.defaultTag,i=e.features,u=e.visible,s=void 0===u||u,d=e.name;if(s)return v(n,t,a,d);var f=null!=i?i:r.None;if(f&r.Static){var p=n.static,h=void 0!==p&&p,g=c(n,["static"]);if(h)return v(g,t,a,d)}if(f&r.RenderStrategy){var y,b=n.unmount,x=void 0===b||b,w=c(n,["unmount"]);return m(x?o.Unmount:o.Hidden,((y={})[o.Unmount]=function(){return null},y[o.Hidden]=function(){return v(l({},w,{hidden:!0,style:{display:"none"}}),t,a,d)},y))}return v(n,t,a,d)}function v(e,n,t,r){var o;void 0===n&&(n={});var a=g(e,["unmount","static"]),i=a.as,u=void 0===i?t:i,l=a.children,d=a.refName,m=void 0===d?"ref":d,p=c(a,["as","children","refName"]),v=void 0!==e.ref?((o={})[m]=e.ref,o):{},h="function"===typeof l?l(n):l;if(p.className&&"function"===typeof p.className&&(p.className=p.className(n)),u===s.Fragment&&Object.keys(p).length>0){if(!(0,s.isValidElement)(h)||Array.isArray(h)&&h.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(p).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,s.cloneElement)(h,Object.assign({},function(e,n,t){for(var r,o=Object.assign({},e),a=function(){var t,a=r.value;void 0!==e[a]&&void 0!==n[a]&&Object.assign(o,((t={})[a]=function(t){t.defaultPrevented||e[a](t),t.defaultPrevented||n[a](t)},t))},i=f(t);!(r=i()).done;)a();return o}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(g(p,["ref"])),h.props,["onClick"]),v))}return(0,s.createElement)(u,Object.assign({},g(p,["ref"]),u!==s.Fragment&&v),h)}function h(e){var n;return Object.assign((0,s.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function g(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),o=f(n);!(t=o()).done;){var a=t.value;a in r&&delete r[a]}return r}function y(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=(0,s.useRef)(n);return(0,s.useEffect)((function(){r.current=n}),[n]),(0,s.useCallback)((function(e){for(var n,t=f(r.current);!(n=t()).done;){var o=n.value;null!=o&&("function"===typeof o?o(e):o.current=e)}}),[r])}function b(e){for(var n,t,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var a=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!a||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(o))&&a}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(o||(o={})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(a||(a={}));var x="undefined"!==typeof window?s.useLayoutEffect:s.useEffect,w={serverHandoffComplete:!1};var j=0;function k(){return++j}function E(){var e=function(){var e=(0,s.useState)(w.serverHandoffComplete),n=e[0],t=e[1];return(0,s.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,s.useEffect)((function(){!1===w.serverHandoffComplete&&(w.serverHandoffComplete=!0)}),[]),n}(),n=(0,s.useState)(e?k:null),t=n[0],r=n[1];return x((function(){null===t&&r(k())}),[t]),null!=t?""+t:void 0}var S,O,C,P,N=(0,s.createContext)(null);function I(e){var n=e.value,t=e.children;return s.createElement(N.Provider,{value:n},t)}function T(e){var n;if(e.type)return e.type;var t=null!=(n=e.as)?n:"button";return"string"===typeof t&&"button"===t.toLowerCase()?"button":void 0}N.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(S||(S={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(C||(C={})),function(e){e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel"}(P||(P={}));var D=((O={})[P.ToggleDisclosure]=function(e){var n;return l({},e,{disclosureState:m(e.disclosureState,(n={},n[C.Open]=C.Closed,n[C.Closed]=C.Open,n))})},O[P.CloseDisclosure]=function(e){return e.disclosureState===C.Closed?e:l({},e,{disclosureState:C.Closed})},O[P.LinkPanel]=function(e){return!0===e.linkedPanel?e:l({},e,{linkedPanel:!0})},O[P.UnlinkPanel]=function(e){return!1===e.linkedPanel?e:l({},e,{linkedPanel:!1})},O[P.SetButtonId]=function(e,n){return e.buttonId===n.buttonId?e:l({},e,{buttonId:n.buttonId})},O[P.SetPanelId]=function(e,n){return e.panelId===n.panelId?e:l({},e,{panelId:n.panelId})},O),L=(0,s.createContext)(null);function A(e){var n=(0,s.useContext)(L);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+F.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return n}L.displayName="DisclosureContext";var B=(0,s.createContext)(null);function H(e){var n=(0,s.useContext)(B);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+F.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,H),t}return n}B.displayName="DisclosureAPIContext";var M=(0,s.createContext)(null);function U(e,n){return m(n.type,D,e,n)}M.displayName="DisclosurePanelContext";var _=s.Fragment;function F(e){var n,t=e.defaultOpen,r=void 0!==t&&t,o=c(e,["defaultOpen"]),a="headlessui-disclosure-button-"+E(),i="headlessui-disclosure-panel-"+E(),u=(0,s.useReducer)(U,{disclosureState:r?C.Open:C.Closed,linkedPanel:!1,buttonId:a,panelId:i}),l=u[0].disclosureState,d=u[1];(0,s.useEffect)((function(){return d({type:P.SetButtonId,buttonId:a})}),[a,d]),(0,s.useEffect)((function(){return d({type:P.SetPanelId,panelId:i})}),[i,d]);var f=(0,s.useCallback)((function(e){d({type:P.CloseDisclosure});var n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:document.getElementById(a):document.getElementById(a);null==n||n.focus()}),[d,a]),v=(0,s.useMemo)((function(){return{close:f}}),[f]),h=(0,s.useMemo)((function(){return{open:l===C.Open,close:f}}),[l,f]);return s.createElement(L.Provider,{value:u},s.createElement(B.Provider,{value:v},s.createElement(I,{value:m(l,(n={},n[C.Open]=S.Open,n[C.Closed]=S.Closed,n))},p({props:o,slot:h,defaultTag:_,name:"Disclosure"}))))}var R=h((function e(n,t){var r=A([F.name,e.name].join(".")),o=r[0],i=r[1],u=(0,s.useRef)(null),c=y(u,t),d=(0,s.useContext)(M),f=null!==d&&d===o.panelId,m=(0,s.useCallback)((function(e){var n;if(f){if(o.disclosureState===C.Closed)return;switch(e.key){case a.Space:case a.Enter:e.preventDefault(),e.stopPropagation(),i({type:P.ToggleDisclosure}),null==(n=document.getElementById(o.buttonId))||n.focus()}}else switch(e.key){case a.Space:case a.Enter:e.preventDefault(),e.stopPropagation(),i({type:P.ToggleDisclosure})}}),[i,f,o.disclosureState]),v=(0,s.useCallback)((function(e){switch(e.key){case a.Space:e.preventDefault()}}),[]),h=(0,s.useCallback)((function(e){var t;b(e.currentTarget)||(n.disabled||(f?(i({type:P.ToggleDisclosure}),null==(t=document.getElementById(o.buttonId))||t.focus()):i({type:P.ToggleDisclosure})))}),[i,n.disabled,o.buttonId,f]),g=(0,s.useMemo)((function(){return{open:o.disclosureState===C.Open}}),[o]),w=function(e,n){var t=(0,s.useState)((function(){return T(e)})),r=t[0],o=t[1];return x((function(){o(T(e))}),[e.type,e.as]),x((function(){r||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&o("button")}),[r,n]),r}(n,u);return p({props:l({},n,f?{ref:c,type:w,onKeyDown:m,onClick:h}:{ref:c,id:o.buttonId,type:w,"aria-expanded":n.disabled?void 0:o.disclosureState===C.Open,"aria-controls":o.linkedPanel?o.panelId:void 0,onKeyDown:m,onKeyUp:v,onClick:h}),slot:g,defaultTag:"button",name:"Disclosure.Button"})})),W=r.RenderStrategy|r.Static,K=h((function e(n,t){var r=A([F.name,e.name].join(".")),o=r[0],a=r[1],i=H([F.name,e.name].join(".")).close,u=y(t,(function(){o.linkedPanel||a({type:P.LinkPanel})})),c=(0,s.useContext)(N),d=null!==c?c===S.Open:o.disclosureState===C.Open;(0,s.useEffect)((function(){return function(){return a({type:P.UnlinkPanel})}}),[a]),(0,s.useEffect)((function(){var e;o.disclosureState!==C.Closed||null!=(e=n.unmount)&&!e||a({type:P.UnlinkPanel})}),[o.disclosureState,n.unmount,a]);var f=(0,s.useMemo)((function(){return{open:o.disclosureState===C.Open,close:i}}),[o,i]),m={ref:u,id:o.panelId},v=n;return s.createElement(M.Provider,{value:o.panelId},p({props:l({},v,m),slot:f,defaultTag:"div",features:W,visible:d,name:"Disclosure.Panel"}))}));F.Button=R,F.Panel=K;var q=t(3801),G=t(1163),Y="Prashhanth Nelakanti",z="prashhanth.nelakanti@gmail.com",X="https://media-exp1.licdn.com/dms/image/C5603AQEj4AWtH8N89A/profile-displayphoto-shrink_200_200/0/1605781245678?e=1649894400&v=beta&t=qn2RuS29GWM2GpG7ZrkBrP33HwgkUn-Fx0yKb19aOIY",Q=[{name:"Home",href:"/home",current:!0},{name:"About",href:"/about",current:!1},{name:"Info",href:"/info",current:!1},{name:"Projects",href:"/projects",current:!1},{name:"Forms",href:"/submit",current:!1}],V=[{name:"Your Profile",href:"#"},{name:"Settings",href:"#"},{name:"Sign out",href:"#"}];function Z(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")}function $(){(0,G.useRouter)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"min-h-full",children:(0,i.jsx)(F,{as:"nav",className:"bg-gray-800",children:function(e){var n=e.open;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("div",{className:"flex-shrink-0",children:(0,i.jsx)("img",{className:"h-8 w-8",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",alt:"Workflow"})}),(0,i.jsx)("div",{className:"hidden md:block",children:(0,i.jsx)("div",{className:"ml-10 flex items-baseline space-x-4",children:Q.map((function(e){return(0,i.jsx)("a",{href:e.href,className:Z("text-gray-300 hover:bg-gray-700 hover:text-white","px-3 py-2 rounded-md text-sm font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name)}))})})]}),(0,i.jsx)("div",{className:"-mr-2 flex md:hidden",children:(0,i.jsxs)(F.Button,{className:"bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",children:[(0,i.jsx)("span",{className:"sr-only",children:"Open main menu"}),n?(0,i.jsx)(q.b0D,{className:"block h-6 w-6","aria-hidden":"true"}):(0,i.jsx)(q.Oqj,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),(0,i.jsxs)(F.Panel,{className:"md:hidden",children:[(0,i.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:Q.map((function(e){return(0,i.jsx)(F.Button,{as:"a",href:e.href,className:Z(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name)}))}),(0,i.jsxs)("div",{className:"pt-4 pb-3 border-t border-gray-700",children:[(0,i.jsxs)("div",{className:"flex items-center px-5",children:[(0,i.jsx)("div",{className:"flex-shrink-0",children:(0,i.jsx)("img",{className:"h-10 w-10 rounded-full",src:X,alt:""})}),(0,i.jsxs)("div",{className:"ml-3",children:[(0,i.jsx)("div",{className:"text-base font-medium leading-none text-white",children:Y}),(0,i.jsx)("div",{className:"text-sm font-medium leading-none text-gray-400",children:z})]}),(0,i.jsx)("button",{type:"button",className:"ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-red-400 hover:text-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"})]}),(0,i.jsx)("div",{className:"mt-3 px-2 space-y-1",children:V.map((function(e){return(0,i.jsx)(F.Button,{as:"a",href:e.href,className:"block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700",children:e.name},e.name)}))})]})]})]})}})})})}var J=function(e){var n=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)($,{}),n,(0,i.jsx)(u,{})]})};t(906);function ee(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ee(e,n,t[n])}))}return e}var te=function(e){var n=e.Component,t=e.pageProps;return(0,i.jsx)(J,{children:(0,i.jsx)(n,ne({},t))})}},906:function(){},1163:function(e,n,t){e.exports=t(387)},3801:function(e,n,t){"use strict";t.d(n,{xPt:function(){return o},IS8:function(){return a},Oqj:function(){return i},b0D:function(){return u}});var r=t(7294);var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}))};var a=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"}))};var i=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"}))};var u=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))}}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(387)}));var t=e.O();_N_E=t}]);