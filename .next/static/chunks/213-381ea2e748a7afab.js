"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[213],{2261:function(e,n,t){t.d(n,{V:function(){return X}});var r=t(9642),o=t(7294),i=t(133),u=t(8529),a=t(7471),c=t(2659),l=t(9016),s=t(5989),d=t(2506);function f(e,n,t){var r=(0,o.useRef)(n);r.current=n,(0,o.useEffect)((function(){function n(e){r.current.call(window,e)}return window.addEventListener(e,n,t),function(){return window.removeEventListener(e,n,t)}}),[e,t])}var v,p,m,h,g=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function E(e){null==e||e.focus({preventScroll:!0})}function b(e,n){var t=Array.isArray(e)?e.slice().sort((function(e,n){var t=e.compareDocumentPosition(n);return t&Node.DOCUMENT_POSITION_FOLLOWING?-1:t&Node.DOCUMENT_POSITION_PRECEDING?1:0})):function(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(g))}(e),r=document.activeElement,o=function(){if(n&(v.First|v.Next))return m.Next;if(n&(v.Previous|v.Last))return m.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),i=function(){if(n&v.First)return 0;if(n&v.Previous)return Math.max(0,t.indexOf(r))-1;if(n&v.Next)return Math.max(0,t.indexOf(r))+1;if(n&v.Last)return t.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),u=n&v.NoScroll?{preventScroll:!0}:{},a=0,c=t.length,l=void 0;do{var s;if(a>=c||a+c<=0)return p.Error;var d=i+a;if(n&v.WrapAround)d=(d+c)%c;else{if(d<0)return p.Underflow;if(d>=c)return p.Overflow}null==(s=l=t[d])||s.focus(u),a+=o}while(l!==document.activeElement);return l.hasAttribute("tabindex")||l.setAttribute("tabindex","0"),p.Success}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(v||(v={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(p||(p={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(m||(m={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(h||(h={}));var y,w=t(7933);function C(e,n,t){void 0===n&&(n=y.All);var i=void 0===t?{}:t,u=i.initialFocus,a=i.containers,l=(0,o.useRef)("undefined"!==typeof window?document.activeElement:null),s=(0,o.useRef)(null),d=(0,w.t)(),m=Boolean(n&y.RestoreFocus),h=Boolean(n&y.InitialFocus);(0,o.useEffect)((function(){m&&(l.current=document.activeElement)}),[m]),(0,o.useEffect)((function(){if(m)return function(){E(l.current),l.current=null}}),[m]),(0,o.useEffect)((function(){if(h&&e.current){var n=document.activeElement;if(null==u?void 0:u.current){if((null==u?void 0:u.current)===n)return void(s.current=n)}else if(e.current.contains(n))return void(s.current=n);(null==u?void 0:u.current)?E(u.current):b(e.current,v.First)===p.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),s.current=document.activeElement}}),[e,u,h]),f("keydown",(function(t){n&y.TabLock&&e.current&&t.key===c.R.Tab&&(t.preventDefault(),b(e.current,(t.shiftKey?v.Previous:v.Next)|v.WrapAround)===p.Success&&(s.current=document.activeElement))})),f("focus",(function(t){if(n&y.FocusLock){var o=new Set(null==a?void 0:a.current);if(o.add(e),o.size){var i=s.current;if(i&&d.current){var u=t.target;u&&u instanceof HTMLElement?!function(e,n){for(var t,o=(0,r.Ul)(e);!(t=o()).done;){var i;if(null==(i=t.value.current)?void 0:i.contains(n))return!0}return!1}(o,u)?(t.preventDefault(),t.stopPropagation(),E(i)):(s.current=u,E(u)):E(s.current)}}}}),!0)}!function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"}(y||(y={}));var T=t(852),F=new Set,x=new Map;function S(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function A(e){var n=x.get(e);n&&(null===n["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert)}var O=(0,o.createContext)(!1);function N(e){return o.createElement(O.Provider,{value:e.force},e.children)}var R=t(3935);function L(){var e=(0,o.useContext)(O),n=(0,o.useContext)(D),t=(0,o.useState)((function(){if(!e&&null!==n)return null;if("undefined"===typeof window)return null;var t=document.getElementById("headlessui-portal-root");if(t)return t;var r=document.createElement("div");return r.setAttribute("id","headlessui-portal-root"),document.body.appendChild(r)})),r=t[0],i=t[1];return(0,o.useEffect)((function(){null!==r&&(document.body.contains(r)||document.body.appendChild(r))}),[r]),(0,o.useEffect)((function(){e||null!==n&&i(n.current)}),[n,i,e]),r}var M=o.Fragment;function P(e){var n=e,t=L(),r=(0,o.useState)((function(){return"undefined"===typeof window?null:document.createElement("div")}))[0],i=(0,s.H)();return(0,T.e)((function(){if(t&&r)return t.appendChild(r),function(){var e;t&&(r&&(t.removeChild(r),t.childNodes.length<=0&&(null==(e=t.parentElement)||e.removeChild(t))))}}),[t,r]),i&&t&&r?(0,R.createPortal)((0,u.sY)({props:n,defaultTag:M,name:"Portal"}),r):null}var k=o.Fragment,D=(0,o.createContext)(null);P.Group=function(e){var n=e.target,t=(0,r.gK)(e,["target"]);return o.createElement(D.Provider,{value:n},(0,u.sY)({props:t,defaultTag:k,name:"Popover.Group"}))};var I=(0,o.createContext)(null);function Y(){var e=(0,o.useContext)(I);if(null===e){var n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,Y),n}return e}var H,U,V,j,_=t(3980),q=(0,o.createContext)((function(){}));function W(e){var n=e.children,t=e.onUpdate,r=e.type,i=e.element,u=(0,o.useContext)(q),a=(0,o.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];null==t||t.apply(void 0,n),u.apply(void 0,n)}),[u,t]);return(0,T.e)((function(){return a(H.Add,r,i),function(){return a(H.Remove,r,i)}}),[a,r,i]),o.createElement(q.Provider,{value:a},n)}q.displayName="StackContext",function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"}(H||(H={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(V||(V={})),function(e){e[e.SetTitleId=0]="SetTitleId"}(j||(j={}));var Z=((U={})[j.SetTitleId]=function(e,n){return e.titleId===n.id?e:(0,r.gY)({},e,{titleId:n.id})},U),G=(0,o.createContext)(null);function K(e){var n=(0,o.useContext)(G);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+X.displayName+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,K),t}return n}function B(e,n){return(0,i.E)(n.type,Z,e,n)}G.displayName="DialogContext";var z=u.AN.RenderStrategy|u.AN.Static,J=(0,u.yV)((function(e,n){var t,l=e.open,v=e.onClose,p=e.initialFocus,m=(0,r.gK)(e,["open","onClose","initialFocus"]),h=(0,o.useState)(0),g=h[0],E=h[1],b=(0,_.oJ)();void 0===l&&null!==b&&(l=(0,i.E)(b,((t={})[_.ZM.Open]=!0,t[_.ZM.Closed]=!1,t)));var w=(0,o.useRef)(new Set),O=(0,o.useRef)(null),R=(0,a.T)(O,n),L=e.hasOwnProperty("open")||null!==b,M=e.hasOwnProperty("onClose");if(!L&&!M)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!L)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!M)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!==typeof l)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+l);if("function"!==typeof v)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: "+v);var k=l?V.Open:V.Closed,D=null!==b?b===_.ZM.Open:k===V.Open,Y=(0,o.useReducer)(B,{titleId:null,descriptionId:null}),U=Y[0],q=Y[1],Z=(0,o.useCallback)((function(){return v(!1)}),[v]),K=(0,o.useCallback)((function(e){return q({type:j.SetTitleId,id:e})}),[q]),J=(0,s.H)()&&k===V.Open,Q=g>1,X=null!==(0,o.useContext)(G),$=Q?"parent":"leaf";C(O,J?(0,i.E)($,{parent:y.RestoreFocus,leaf:y.All}):y.None,{initialFocus:p,containers:w}),function(e,n){void 0===n&&(n=!0),(0,T.e)((function(){if(n&&e.current){var t=e.current;F.add(t);for(var o,i=(0,r.Ul)(x.keys());!(o=i()).done;){var u=o.value;u.contains(t)&&(A(u),x.delete(u))}return document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement){for(var n,t=(0,r.Ul)(F);!(n=t()).done;){var o=n.value;if(e.contains(o))return}1===F.size&&(x.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),S(e))}})),function(){if(F.delete(t),F.size>0)document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement&&!x.has(e)){for(var n,t=(0,r.Ul)(F);!(n=t()).done;){var o=n.value;if(e.contains(o))return}x.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),S(e)}}));else for(var e,n=(0,r.Ul)(x.keys());!(e=n()).done;){var o=e.value;A(o),x.delete(o)}}}}),[n])}(O,!!Q&&J),f("mousedown",(function(e){var n,t=e.target;k===V.Open&&(Q||(null==(n=O.current)?void 0:n.contains(t))||Z())})),f("keydown",(function(e){e.key===c.R.Escape&&k===V.Open&&(Q||(e.preventDefault(),e.stopPropagation(),Z()))})),(0,o.useEffect)((function(){if(k===V.Open&&!X){var e=document.documentElement.style.overflow,n=document.documentElement.style.paddingRight,t=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=t+"px",function(){document.documentElement.style.overflow=e,document.documentElement.style.paddingRight=n}}}),[k,X]),(0,o.useEffect)((function(){if(k===V.Open&&O.current){var e=new IntersectionObserver((function(e){for(var n,t=(0,r.Ul)(e);!(n=t()).done;){var o=n.value;0===o.boundingClientRect.x&&0===o.boundingClientRect.y&&0===o.boundingClientRect.width&&0===o.boundingClientRect.height&&Z()}}));return e.observe(O.current),function(){return e.disconnect()}}}),[k,O,Z]);var ee=function(){var e=(0,o.useState)([]),n=e[0],t=e[1];return[n.length>0?n.join(" "):void 0,(0,o.useMemo)((function(){return function(e){var n=(0,o.useCallback)((function(e){return t((function(n){return[].concat(n,[e])})),function(){return t((function(n){var t=n.slice(),r=t.indexOf(e);return-1!==r&&t.splice(r,1),t}))}}),[]),r=(0,o.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return o.createElement(I.Provider,{value:r},e.children)}}),[t])]}(),ne=ee[0],te=ee[1],re="headlessui-dialog-"+(0,d.M)(),oe=(0,o.useMemo)((function(){return[{dialogState:k,close:Z,setTitleId:K},U]}),[k,U,Z,K]),ie=(0,o.useMemo)((function(){return{open:k===V.Open}}),[k]),ue={ref:R,id:re,role:"dialog","aria-modal":k===V.Open||void 0,"aria-labelledby":U.titleId,"aria-describedby":ne,onClick:function(e){e.stopPropagation()}},ae=m;return o.createElement(W,{type:"Dialog",element:O,onUpdate:(0,o.useCallback)((function(e,n,t){var r;"Dialog"===n&&(0,i.E)(e,((r={})[H.Add]=function(){w.current.add(t),E((function(e){return e+1}))},r[H.Remove]=function(){w.current.add(t),E((function(e){return e-1}))},r))}),[])},o.createElement(N,{force:!0},o.createElement(P,null,o.createElement(G.Provider,{value:oe},o.createElement(P.Group,{target:O},o.createElement(N,{force:!1},o.createElement(te,{slot:ie,name:"Dialog.Description"},(0,u.sY)({props:(0,r.gY)({},ae,ue),slot:ie,defaultTag:"div",features:z,visible:D,name:"Dialog"}))))))))})),Q=(0,u.yV)((function e(n,t){var i=K([X.displayName,e.name].join("."))[0],c=i.dialogState,s=i.close,f=(0,a.T)(t),v="headlessui-dialog-overlay-"+(0,d.M)(),p=(0,o.useCallback)((function(e){if(e.target===e.currentTarget){if((0,l.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),s()}}),[s]),m=(0,o.useMemo)((function(){return{open:c===V.Open}}),[c]),h={ref:f,id:v,"aria-hidden":!0,onClick:p},g=n;return(0,u.sY)({props:(0,r.gY)({},g,h),slot:m,defaultTag:"div",name:"Dialog.Overlay"})}));var X=Object.assign(J,{Overlay:Q,Title:function e(n){var t=K([X.displayName,e.name].join("."))[0],i=t.dialogState,a=t.setTitleId,c="headlessui-dialog-title-"+(0,d.M)();(0,o.useEffect)((function(){return a(c),function(){return a(null)}}),[c,a]);var l=(0,o.useMemo)((function(){return{open:i===V.Open}}),[i]),s={id:c},f=n;return(0,u.sY)({props:(0,r.gY)({},f,s),slot:l,defaultTag:"h2",name:"Dialog.Title"})},Description:function(e){var n=Y(),t="headlessui-description-"+(0,d.M)();(0,T.e)((function(){return n.register(t)}),[t,n.register]);var o=e,i=(0,r.gY)({},n.props,{id:t});return(0,u.sY)({props:(0,r.gY)({},o,i),slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})}})},5131:function(e,n,t){t.d(n,{u:function(){return O}});var r,o=t(9642),i=t(7294),u=t(133),a=t(8529),c=t(852),l=t(5989),s=t(2506),d=t(7933),f=t(3980);function v(){var e=[],n={requestAnimationFrame:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=requestAnimationFrame.apply(void 0,arguments);n.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n.requestAnimationFrame((function(){n.requestAnimationFrame.apply(n,t)}))},setTimeout:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=setTimeout.apply(void 0,arguments);n.add((function(){return clearTimeout(e)}))})),add:function(n){e.push(n)},dispose:function(){for(var n,t=(0,o.Ul)(e.splice(0));!(n=t()).done;){var r=n.value;r()}}};return n}function p(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).add.apply(n,r)}function m(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).remove.apply(n,r)}function h(e,n,t,o,i,u){var a=v(),c=void 0!==u?function(e){var n={called:!1};return function(){if(!n.called)return n.called=!0,e.apply(void 0,arguments)}}(u):function(){};return m.apply(void 0,[e].concat(i)),p.apply(void 0,[e].concat(n,t)),a.nextFrame((function(){m.apply(void 0,[e].concat(t)),p.apply(void 0,[e].concat(o)),a.add(function(e,n){var t=v();if(!e)return t.dispose;var o=getComputedStyle(e),i=[o.transitionDuration,o.transitionDelay].map((function(e){var n=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,n){return n-e}))[0];return void 0===n?0:n})),u=i[0],a=i[1];return 0!==u?t.setTimeout((function(){n(r.Finished)}),u+a):n(r.Finished),t.add((function(){return n(r.Cancelled)})),t.dispose}(e,(function(t){return m.apply(void 0,[e].concat(o,n)),p.apply(void 0,[e].concat(i)),c(t)})))})),a.add((function(){return m.apply(void 0,[e].concat(n,t,o,i))})),a.add((function(){return c(r.Cancelled)})),a.dispose}function g(e){return void 0===e&&(e=""),(0,i.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}!function(e){e.Finished="finished",e.Cancelled="cancelled"}(r||(r={}));var E,b=(0,i.createContext)(null);b.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(E||(E={}));var y=(0,i.createContext)(null);function w(e){return"children"in e?w(e.children):e.current.filter((function(e){return e.state===E.Visible})).length>0}function C(e){var n=(0,i.useRef)(e),t=(0,i.useRef)([]),r=(0,d.t)();(0,i.useEffect)((function(){n.current=e}),[e]);var o=(0,i.useCallback)((function(e,o){var i;void 0===o&&(o=a.l4.Hidden);var c=t.current.findIndex((function(n){return n.id===e}));-1!==c&&((0,u.E)(o,((i={})[a.l4.Unmount]=function(){t.current.splice(c,1)},i[a.l4.Hidden]=function(){t.current[c].state=E.Hidden},i)),!w(t)&&r.current&&(null==n.current||n.current()))}),[n,r,t]),c=(0,i.useCallback)((function(e){var n=t.current.find((function(n){return n.id===e}));return n?n.state!==E.Visible&&(n.state=E.Visible):t.current.push({id:e,state:E.Visible}),function(){return o(e,a.l4.Unmount)}}),[t,o]);return(0,i.useMemo)((function(){return{children:t,register:c,unregister:o}}),[c,o,t])}function T(){}y.displayName="NestingContext";var F=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function x(e){for(var n,t={},r=(0,o.Ul)(F);!(n=r()).done;){var i,u=n.value;t[u]=null!=(i=e[u])?i:T}return t}var S=a.AN.RenderStrategy;function A(e){var n,t=e.beforeEnter,d=e.afterEnter,v=e.beforeLeave,p=e.afterLeave,m=e.enter,T=e.enterFrom,F=e.enterTo,A=e.entered,O=e.leave,N=e.leaveFrom,R=e.leaveTo,L=(0,o.gK)(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),M=(0,i.useRef)(null),P=(0,i.useState)(E.Visible),k=P[0],D=P[1],I=L.unmount?a.l4.Unmount:a.l4.Hidden,Y=function(){var e=(0,i.useContext)(b);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),H=Y.show,U=Y.appear,V=Y.initial,j=function(){var e=(0,i.useContext)(y);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),_=j.register,q=j.unregister,W=(0,s.M)(),Z=(0,i.useRef)(!1),G=C((function(){Z.current||(D(E.Hidden),q(W),ee.current.afterLeave())}));(0,c.e)((function(){if(W)return _(W)}),[_,W]),(0,c.e)((function(){var e;I===a.l4.Hidden&&W&&(H&&k!==E.Visible?D(E.Visible):(0,u.E)(k,((e={})[E.Hidden]=function(){return q(W)},e[E.Visible]=function(){return _(W)},e)))}),[k,W,_,q,H,I]);var K=g(m),B=g(T),z=g(F),J=g(A),Q=g(O),X=g(N),$=g(R),ee=function(e){var n=(0,i.useRef)(x(e));return(0,i.useEffect)((function(){n.current=x(e)}),[e]),n}({beforeEnter:t,afterEnter:d,beforeLeave:v,afterLeave:p}),ne=(0,l.H)();(0,i.useEffect)((function(){if(ne&&k===E.Visible&&null===M.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[M,k,ne]);var te=V&&!U;(0,c.e)((function(){var e=M.current;if(e&&!te)return Z.current=!0,H&&ee.current.beforeEnter(),H||ee.current.beforeLeave(),H?h(e,K,B,z,J,(function(e){Z.current=!1,e===r.Finished&&ee.current.afterEnter()})):h(e,Q,X,$,J,(function(e){Z.current=!1,e===r.Finished&&(w(G)||(D(E.Hidden),q(W),ee.current.afterLeave()))}))}),[ee,W,Z,q,G,M,te,H,K,B,z,Q,X,$]);var re={ref:M},oe=L;return i.createElement(y.Provider,{value:G},i.createElement(f.up,{value:(0,u.E)(k,(n={},n[E.Visible]=f.ZM.Open,n[E.Hidden]=f.ZM.Closed,n))},(0,a.sY)({props:(0,o.gY)({},oe,re),defaultTag:"div",features:S,visible:k===E.Visible,name:"Transition.Child"})))}function O(e){var n,t=e.show,r=e.appear,c=void 0!==r&&r,l=e.unmount,s=(0,o.gK)(e,["show","appear","unmount"]),d=(0,f.oJ)();void 0===t&&null!==d&&(t=(0,u.E)(d,((n={})[f.ZM.Open]=!0,n[f.ZM.Closed]=!1,n)));if(![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var v=(0,i.useState)(t?E.Visible:E.Hidden),p=v[0],m=v[1],h=C((function(){m(E.Hidden)})),g=function(){var e=(0,i.useRef)(!0);return(0,i.useEffect)((function(){e.current=!1}),[]),e.current}(),T=(0,i.useMemo)((function(){return{show:t,appear:c||!g,initial:g}}),[t,c,g]);(0,i.useEffect)((function(){t?m(E.Visible):w(h)||m(E.Hidden)}),[t,h]);var F={unmount:l};return i.createElement(y.Provider,{value:h},i.createElement(b.Provider,{value:T},(0,a.sY)({props:(0,o.gY)({},F,{as:i.Fragment,children:i.createElement(A,Object.assign({},F,s))}),defaultTag:i.Fragment,features:S,visible:p===E.Visible,name:"Transition"})))}O.Child=function(e){var n=null!==(0,i.useContext)(b),t=null!==(0,f.oJ)();return!n&&t?i.createElement(O,Object.assign({},e)):i.createElement(A,Object.assign({},e))},O.Root=O},7933:function(e,n,t){t.d(n,{t:function(){return o}});var r=t(7294);function o(){var e=(0,r.useRef)(!1);return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}}}]);