(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Im={exports:{}},Fl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function e1(){if(Jv)return Fl;Jv=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:i,type:s,key:h,ref:o!==void 0?o:null,props:u}}return Fl.Fragment=e,Fl.jsx=t,Fl.jsxs=t,Fl}var Zv;function t1(){return Zv||(Zv=1,Im.exports=e1()),Im.exports}var ne=t1(),Cm={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eE;function n1(){if(eE)return Re;eE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function A(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,K={};function q(D,ee,oe){this.props=D,this.context=ee,this.refs=K,this.updater=oe||k}q.prototype.isReactComponent={},q.prototype.setState=function(D,ee){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ee,"setState")},q.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function $(){}$.prototype=q.prototype;function ie(D,ee,oe){this.props=D,this.context=ee,this.refs=K,this.updater=oe||k}var re=ie.prototype=new $;re.constructor=ie,P(re,q.prototype),re.isPureReactComponent=!0;var de=Array.isArray,he={H:null,A:null,T:null,S:null,V:null},Se=Object.prototype.hasOwnProperty;function M(D,ee,oe,te,ge,De){return oe=De.ref,{$$typeof:i,type:D,key:ee,ref:oe!==void 0?oe:null,props:De}}function w(D,ee){return M(D.type,ee,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function N(D){var ee={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(oe){return ee[oe]})}var V=/\/+/g;function L(D,ee){return typeof D=="object"&&D!==null&&D.key!=null?N(""+D.key):ee.toString(36)}function C(){}function Ut(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(C,C):(D.status="pending",D.then(function(ee){D.status==="pending"&&(D.status="fulfilled",D.value=ee)},function(ee){D.status==="pending"&&(D.status="rejected",D.reason=ee)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ut(D,ee,oe,te,ge){var De=typeof D;(De==="undefined"||De==="boolean")&&(D=null);var be=!1;if(D===null)be=!0;else switch(De){case"bigint":case"string":case"number":be=!0;break;case"object":switch(D.$$typeof){case i:case e:be=!0;break;case E:return be=D._init,ut(be(D._payload),ee,oe,te,ge)}}if(be)return ge=ge(D),be=te===""?"."+L(D,0):te,de(ge)?(oe="",be!=null&&(oe=be.replace(V,"$&/")+"/"),ut(ge,ee,oe,"",function(Qn){return Qn})):ge!=null&&(R(ge)&&(ge=w(ge,oe+(ge.key==null||D&&D.key===ge.key?"":(""+ge.key).replace(V,"$&/")+"/")+be)),ee.push(ge)),1;be=0;var Ot=te===""?".":te+":";if(de(D))for(var tt=0;tt<D.length;tt++)te=D[tt],De=Ot+L(te,tt),be+=ut(te,ee,oe,De,ge);else if(tt=A(D),typeof tt=="function")for(D=tt.call(D),tt=0;!(te=D.next()).done;)te=te.value,De=Ot+L(te,tt++),be+=ut(te,ee,oe,De,ge);else if(De==="object"){if(typeof D.then=="function")return ut(Ut(D),ee,oe,te,ge);throw ee=String(D),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return be}function Q(D,ee,oe){if(D==null)return D;var te=[],ge=0;return ut(D,te,"","",function(De){return ee.call(oe,De,ge++)}),te}function ae(D){if(D._status===-1){var ee=D._result;ee=ee(),ee.then(function(oe){(D._status===0||D._status===-1)&&(D._status=1,D._result=oe)},function(oe){(D._status===0||D._status===-1)&&(D._status=2,D._result=oe)}),D._status===-1&&(D._status=0,D._result=ee)}if(D._status===1)return D._result.default;throw D._result}var me=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function ze(){}return Re.Children={map:Q,forEach:function(D,ee,oe){Q(D,function(){ee.apply(this,arguments)},oe)},count:function(D){var ee=0;return Q(D,function(){ee++}),ee},toArray:function(D){return Q(D,function(ee){return ee})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Re.Component=q,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=ie,Re.StrictMode=s,Re.Suspense=p,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=he,Re.__COMPILER_RUNTIME={__proto__:null,c:function(D){return he.H.useMemoCache(D)}},Re.cache=function(D){return function(){return D.apply(null,arguments)}},Re.cloneElement=function(D,ee,oe){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var te=P({},D.props),ge=D.key,De=void 0;if(ee!=null)for(be in ee.ref!==void 0&&(De=void 0),ee.key!==void 0&&(ge=""+ee.key),ee)!Se.call(ee,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&ee.ref===void 0||(te[be]=ee[be]);var be=arguments.length-2;if(be===1)te.children=oe;else if(1<be){for(var Ot=Array(be),tt=0;tt<be;tt++)Ot[tt]=arguments[tt+2];te.children=Ot}return M(D.type,ge,void 0,void 0,De,te)},Re.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},Re.createElement=function(D,ee,oe){var te,ge={},De=null;if(ee!=null)for(te in ee.key!==void 0&&(De=""+ee.key),ee)Se.call(ee,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ge[te]=ee[te]);var be=arguments.length-2;if(be===1)ge.children=oe;else if(1<be){for(var Ot=Array(be),tt=0;tt<be;tt++)Ot[tt]=arguments[tt+2];ge.children=Ot}if(D&&D.defaultProps)for(te in be=D.defaultProps,be)ge[te]===void 0&&(ge[te]=be[te]);return M(D,De,void 0,void 0,null,ge)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(D){return{$$typeof:m,render:D}},Re.isValidElement=R,Re.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:ae}},Re.memo=function(D,ee){return{$$typeof:g,type:D,compare:ee===void 0?null:ee}},Re.startTransition=function(D){var ee=he.T,oe={};he.T=oe;try{var te=D(),ge=he.S;ge!==null&&ge(oe,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(ze,me)}catch(De){me(De)}finally{he.T=ee}},Re.unstable_useCacheRefresh=function(){return he.H.useCacheRefresh()},Re.use=function(D){return he.H.use(D)},Re.useActionState=function(D,ee,oe){return he.H.useActionState(D,ee,oe)},Re.useCallback=function(D,ee){return he.H.useCallback(D,ee)},Re.useContext=function(D){return he.H.useContext(D)},Re.useDebugValue=function(){},Re.useDeferredValue=function(D,ee){return he.H.useDeferredValue(D,ee)},Re.useEffect=function(D,ee,oe){var te=he.H;if(typeof oe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(D,ee)},Re.useId=function(){return he.H.useId()},Re.useImperativeHandle=function(D,ee,oe){return he.H.useImperativeHandle(D,ee,oe)},Re.useInsertionEffect=function(D,ee){return he.H.useInsertionEffect(D,ee)},Re.useLayoutEffect=function(D,ee){return he.H.useLayoutEffect(D,ee)},Re.useMemo=function(D,ee){return he.H.useMemo(D,ee)},Re.useOptimistic=function(D,ee){return he.H.useOptimistic(D,ee)},Re.useReducer=function(D,ee,oe){return he.H.useReducer(D,ee,oe)},Re.useRef=function(D){return he.H.useRef(D)},Re.useState=function(D){return he.H.useState(D)},Re.useSyncExternalStore=function(D,ee,oe){return he.H.useSyncExternalStore(D,ee,oe)},Re.useTransition=function(){return he.H.useTransition()},Re.version="19.1.0",Re}var tE;function xp(){return tE||(tE=1,Cm.exports=n1()),Cm.exports}var F=xp(),Dm={exports:{}},$l={},Nm={exports:{}},Om={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nE;function i1(){return nE||(nE=1,function(i){function e(Q,ae){var me=Q.length;Q.push(ae);e:for(;0<me;){var ze=me-1>>>1,D=Q[ze];if(0<o(D,ae))Q[ze]=ae,Q[me]=D,me=ze;else break e}}function t(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var ae=Q[0],me=Q.pop();if(me!==ae){Q[0]=me;e:for(var ze=0,D=Q.length,ee=D>>>1;ze<ee;){var oe=2*(ze+1)-1,te=Q[oe],ge=oe+1,De=Q[ge];if(0>o(te,me))ge<D&&0>o(De,te)?(Q[ze]=De,Q[ge]=me,ze=ge):(Q[ze]=te,Q[oe]=me,ze=oe);else if(ge<D&&0>o(De,me))Q[ze]=De,Q[ge]=me,ze=ge;else break e}}return ae}function o(Q,ae){var me=Q.sortIndex-ae.sortIndex;return me!==0?me:Q.id-ae.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var p=[],g=[],E=1,S=null,A=3,k=!1,P=!1,K=!1,q=!1,$=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function de(Q){for(var ae=t(g);ae!==null;){if(ae.callback===null)s(g);else if(ae.startTime<=Q)s(g),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=t(g)}}function he(Q){if(K=!1,de(Q),!P)if(t(p)!==null)P=!0,Se||(Se=!0,L());else{var ae=t(g);ae!==null&&ut(he,ae.startTime-Q)}}var Se=!1,M=-1,w=5,R=-1;function N(){return q?!0:!(i.unstable_now()-R<w)}function V(){if(q=!1,Se){var Q=i.unstable_now();R=Q;var ae=!0;try{e:{P=!1,K&&(K=!1,ie(M),M=-1),k=!0;var me=A;try{t:{for(de(Q),S=t(p);S!==null&&!(S.expirationTime>Q&&N());){var ze=S.callback;if(typeof ze=="function"){S.callback=null,A=S.priorityLevel;var D=ze(S.expirationTime<=Q);if(Q=i.unstable_now(),typeof D=="function"){S.callback=D,de(Q),ae=!0;break t}S===t(p)&&s(p),de(Q)}else s(p);S=t(p)}if(S!==null)ae=!0;else{var ee=t(g);ee!==null&&ut(he,ee.startTime-Q),ae=!1}}break e}finally{S=null,A=me,k=!1}ae=void 0}}finally{ae?L():Se=!1}}}var L;if(typeof re=="function")L=function(){re(V)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,Ut=C.port2;C.port1.onmessage=V,L=function(){Ut.postMessage(null)}}else L=function(){$(V,0)};function ut(Q,ae){M=$(function(){Q(i.unstable_now())},ae)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Q){Q.callback=null},i.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<Q?Math.floor(1e3/Q):5},i.unstable_getCurrentPriorityLevel=function(){return A},i.unstable_next=function(Q){switch(A){case 1:case 2:case 3:var ae=3;break;default:ae=A}var me=A;A=ae;try{return Q()}finally{A=me}},i.unstable_requestPaint=function(){q=!0},i.unstable_runWithPriority=function(Q,ae){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var me=A;A=Q;try{return ae()}finally{A=me}},i.unstable_scheduleCallback=function(Q,ae,me){var ze=i.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?ze+me:ze):me=ze,Q){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=me+D,Q={id:E++,callback:ae,priorityLevel:Q,startTime:me,expirationTime:D,sortIndex:-1},me>ze?(Q.sortIndex=me,e(g,Q),t(p)===null&&Q===t(g)&&(K?(ie(M),M=-1):K=!0,ut(he,me-ze))):(Q.sortIndex=D,e(p,Q),P||k||(P=!0,Se||(Se=!0,L()))),Q},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(Q){var ae=A;return function(){var me=A;A=ae;try{return Q.apply(this,arguments)}finally{A=me}}}}(Om)),Om}var iE;function r1(){return iE||(iE=1,Nm.exports=i1()),Nm.exports}var Mm={exports:{}},Yt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rE;function s1(){if(rE)return Yt;rE=1;var i=xp();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,g,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:p,containerInfo:g,implementation:E}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Yt.createPortal=function(p,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(p,g,null,E)},Yt.flushSync=function(p){var g=h.T,E=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=g,s.p=E,s.d.f()}},Yt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},Yt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Yt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var E=g.as,S=m(E,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:A,fetchPriority:k}):E==="script"&&s.d.X(p,{crossOrigin:S,integrity:A,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Yt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=m(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},Yt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,S=m(E,g.crossOrigin);s.d.L(p,E,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Yt.preloadModule=function(p,g){if(typeof p=="string")if(g){var E=m(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},Yt.requestFormReset=function(p){s.d.r(p)},Yt.unstable_batchedUpdates=function(p,g){return p(g)},Yt.useFormState=function(p,g,E){return h.H.useFormState(p,g,E)},Yt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Yt.version="19.1.0",Yt}var sE;function a1(){if(sE)return Mm.exports;sE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Mm.exports=s1(),Mm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aE;function o1(){if(aE)return $l;aE=1;var i=r1(),e=xp(),t=a1();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function h(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function m(n){if(u(n)!==n)throw Error(s(188))}function p(n){var r=n.alternate;if(!r){if(r=u(n),r===null)throw Error(s(188));return r!==n?null:n}for(var a=n,l=r;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return m(f),n;if(d===l)return m(f),r;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=d;else{for(var v=!1,T=f.child;T;){if(T===a){v=!0,a=f,l=d;break}if(T===l){v=!0,l=f,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=f;break}if(T===l){v=!0,l=d,a=f;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:r}function g(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=g(n),r!==null)return r;n=n.sibling}return null}var E=Object.assign,S=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),ie=Symbol.for("react.consumer"),re=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function L(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var C=Symbol.for("react.client.reference");function Ut(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===C?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case q:return"Profiler";case K:return"StrictMode";case he:return"Suspense";case Se:return"SuspenseList";case R:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case k:return"Portal";case re:return(n.displayName||"Context")+".Provider";case ie:return(n._context.displayName||"Context")+".Consumer";case de:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case M:return r=n.displayName||null,r!==null?r:Ut(n.type)||"Memo";case w:r=n._payload,n=n._init;try{return Ut(n(r))}catch{}}return null}var ut=Array.isArray,Q=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},ze=[],D=-1;function ee(n){return{current:n}}function oe(n){0>D||(n.current=ze[D],ze[D]=null,D--)}function te(n,r){D++,ze[D]=n.current,n.current=r}var ge=ee(null),De=ee(null),be=ee(null),Ot=ee(null);function tt(n,r){switch(te(be,r),te(De,n),te(ge,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?Rv(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=Rv(r),n=Iv(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}oe(ge),te(ge,n)}function Qn(){oe(ge),oe(De),oe(be)}function or(n){n.memoizedState!==null&&te(Ot,n);var r=ge.current,a=Iv(r,n.type);r!==a&&(te(De,n),te(ge,a))}function Si(n){De.current===n&&(oe(ge),oe(De)),Ot.current===n&&(oe(Ot),Bl._currentValue=me)}var os=Object.prototype.hasOwnProperty,ls=i.unstable_scheduleCallback,us=i.unstable_cancelCallback,xo=i.unstable_shouldYield,Hu=i.unstable_requestPaint,En=i.unstable_now,If=i.unstable_getCurrentPriorityLevel,Lo=i.unstable_ImmediatePriority,fa=i.unstable_UserBlockingPriority,cs=i.unstable_NormalPriority,Cf=i.unstable_LowPriority,da=i.unstable_IdlePriority,Uo=i.log,qu=i.unstable_setDisableYieldValue,ct=null,$e=null;function cn(n){if(typeof Uo=="function"&&qu(n),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(ct,n)}catch{}}var Kt=Math.clz32?Math.clz32:hs,Fu=Math.log,Df=Math.LN2;function hs(n){return n>>>=0,n===0?32:31-(Fu(n)/Df|0)|0}var fs=256,ds=4194304;function Ln(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ma(n,r,a){var l=n.pendingLanes;if(l===0)return 0;var f=0,d=n.suspendedLanes,v=n.pingedLanes;n=n.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?f=Ln(l):(v&=T,v!==0?f=Ln(v):a||(a=T&~n,a!==0&&(f=Ln(a))))):(T=l&~d,T!==0?f=Ln(T):v!==0?f=Ln(v):a||(a=l&~n,a!==0&&(f=Ln(a)))),f===0?0:r!==0&&r!==f&&(r&d)===0&&(d=f&-f,a=r&-r,d>=a||d===32&&(a&4194048)!==0)?r:f}function ms(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Bo(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zo(){var n=fs;return fs<<=1,(fs&4194048)===0&&(fs=256),n}function jo(){var n=ds;return ds<<=1,(ds&62914560)===0&&(ds=4194304),n}function bi(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Ai(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ho(n,r,a,l,f,d){var v=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var T=n.entanglements,I=n.expirationTimes,z=n.hiddenUpdates;for(a=v&~a;0<a;){var Y=31-Kt(a),J=1<<Y;T[Y]=0,I[Y]=-1;var j=z[Y];if(j!==null)for(z[Y]=null,Y=0;Y<j.length;Y++){var H=j[Y];H!==null&&(H.lane&=-536870913)}a&=~J}l!==0&&Yn(n,l,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(v&~r))}function Yn(n,r,a){n.pendingLanes|=r,n.suspendedLanes&=~r;var l=31-Kt(r);n.entangledLanes|=r,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194090}function qo(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var l=31-Kt(a),f=1<<l;f&r|n[l]&r&&(n[l]|=r),a&=~f}}function lr(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function pa(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function ur(){var n=ae.p;return n!==0?n:(n=window.event,n===void 0?32:Gv(n.type))}function $u(n,r){var a=ae.p;try{return ae.p=n,r()}finally{ae.p=a}}var rt=Math.random().toString(36).slice(2),wt="__reactFiber$"+rt,_t="__reactProps$"+rt,Tn="__reactContainer$"+rt,Fo="__reactEvents$"+rt,Nf="__reactListeners$"+rt,cr="__reactHandles$"+rt,Gu="__reactResources$"+rt,ps="__reactMarker$"+rt;function hr(n){delete n[wt],delete n[_t],delete n[Fo],delete n[Nf],delete n[cr]}function wi(n){var r=n[wt];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Tn]||a[wt]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Ov(n);n!==null;){if(a=n[wt])return a;n=Ov(n)}return r}n=a,a=n.parentNode}return null}function Xn(n){if(n=n[wt]||n[Tn]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function Wn(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function tn(n){var r=n[Gu];return r||(r=n[Gu]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function dt(n){n[ps]=!0}var $o=new Set,ga={};function Un(n,r){Ri(n,r),Ri(n+"Capture",r)}function Ri(n,r){for(ga[n]=r,n=0;n<r.length;n++)$o.add(r[n])}var Ku=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qu={},gs={};function Yu(n){return os.call(gs,n)?!0:os.call(Qu,n)?!1:Ku.test(n)?gs[n]=!0:(Qu[n]=!0,!1)}function fr(n,r,a){if(Yu(r))if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+a)}}function Jn(n,r,a){if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+a)}}function Bt(n,r,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(r,a,""+l)}}var _s,Xu;function Ii(n){if(_s===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);_s=r&&r[1]||"",Xu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_s+n+Xu}var _a=!1;function ya(n,r){if(!n||_a)return"";_a=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(H){var j=H}Reflect.construct(n,[],J)}else{try{J.call()}catch(H){j=H}n.call(J.prototype)}}else{try{throw Error()}catch(H){j=H}(J=n())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(H){if(H&&j&&typeof H.stack=="string")return[H.stack,j.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var I=v.split(`
`),z=T.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<z.length&&!z[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===z.length)for(l=I.length-1,f=z.length-1;1<=l&&0<=f&&I[l]!==z[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==z[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==z[f]){var Y=`
`+I[l].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=l&&0<=f);break}}}finally{_a=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?Ii(a):""}function Go(n){switch(n.tag){case 26:case 27:case 5:return Ii(n.type);case 16:return Ii("Lazy");case 13:return Ii("Suspense");case 19:return Ii("SuspenseList");case 0:case 15:return ya(n.type,!1);case 11:return ya(n.type.render,!1);case 1:return ya(n.type,!0);case 31:return Ii("Activity");default:return""}}function va(n){try{var r="";do r+=Go(n),n=n.return;while(n);return r}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function nn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ko(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Of(n){var r=Ko(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),l=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ea(n){n._valueTracker||(n._valueTracker=Of(n))}function Qo(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return n&&(l=Ko(n)?n.checked?"true":"false":n.value),n=l,n!==a?(r.setValue(n),!0):!1}function ys(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Mf=/[\n"\\]/g;function yt(n){return n.replace(Mf,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function hn(n,r,a,l,f,d,v,T){n.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.type=v:n.removeAttribute("type"),r!=null?v==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+nn(r)):n.value!==""+nn(r)&&(n.value=""+nn(r)):v!=="submit"&&v!=="reset"||n.removeAttribute("value"),r!=null?dr(n,v,nn(r)):a!=null?dr(n,v,nn(a)):l!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+nn(T):n.removeAttribute("name")}function vs(n,r,a,l,f,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),r!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;a=a!=null?""+nn(a):"",r=r!=null?""+nn(r):a,T||r===n.value||(n.value=r),n.defaultValue=r}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=T?n.checked:!!l,n.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(n.name=v)}function dr(n,r,a){r==="number"&&ys(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Ci(n,r,a,l){if(n=n.options,r){r={};for(var f=0;f<a.length;f++)r["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=r.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+nn(a),r=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function Qe(n,r,a){if(r!=null&&(r=""+nn(r),r!==n.value&&(n.value=r),a==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=a!=null?""+nn(a):""}function Es(n,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(s(92));if(ut(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=nn(r),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function Sn(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Ts=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wu(n,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":l?n.setProperty(r,a):typeof a!="number"||a===0||Ts.has(r)?r==="float"?n.cssFloat=a:n[r]=(""+a).trim():n[r]=a+"px"}function Yo(n,r,a){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in r)l=r[f],r.hasOwnProperty(f)&&a[f]!==l&&Wu(n,f,l)}else for(var d in r)r.hasOwnProperty(d)&&Wu(n,d,r[d])}function Xo(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ta(n){return Vf.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Di=null;function bn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ni=null,Oi=null;function Wo(n){var r=Xn(n);if(r&&(n=r.stateNode)){var a=n[_t]||null;e:switch(n=r.stateNode,r.type){case"input":if(hn(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yt(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==n&&l.form===n.form){var f=l[_t]||null;if(!f)throw Error(s(90));hn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===n.form&&Qo(l)}break e;case"textarea":Qe(n,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&Ci(n,!!a.multiple,r,!1)}}}var Zn=!1;function Ju(n,r,a){if(Zn)return n(r,a);Zn=!0;try{var l=n(r);return l}finally{if(Zn=!1,(Ni!==null||Oi!==null)&&($c(),Ni&&(r=Ni,n=Oi,Oi=Ni=null,Wo(r),n)))for(r=0;r<n.length;r++)Wo(n[r])}}function Ss(n,r){var a=n.stateNode;if(a===null)return null;var l=a[_t]||null;if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,r,typeof a));return a}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),An=!1;if(Bn)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){An=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{An=!1}var ei=null,mr=null,Mi=null;function Jo(){if(Mi)return Mi;var n,r=mr,a=r.length,l,f="value"in ei?ei.value:ei.textContent,d=f.length;for(n=0;n<a&&r[n]===f[n];n++);var v=a-n;for(l=1;l<=v&&r[a-l]===f[d-l];l++);return Mi=f.slice(n,1<l?1-l:void 0)}function ti(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ni(){return!0}function Zo(){return!1}function Mt(n){function r(a,l,f,d,v){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ni:Zo,this.isPropagationStopped=Zo,this}return E(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),r}var qe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sa=Mt(qe),As=E({},qe,{view:0,detail:0}),Zu=Mt(As),ba,Aa,ii,ws=E({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cs,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ii&&(ii&&n.type==="mousemove"?(ba=n.screenX-ii.screenX,Aa=n.screenY-ii.screenY):Aa=ba=0,ii=n),ba)},movementY:function(n){return"movementY"in n?n.movementY:Aa}}),wn=Mt(ws),ec=E({},ws,{dataTransfer:0}),kf=Mt(ec),Rs=E({},As,{relatedTarget:0}),wa=Mt(Rs),el=E({},qe,{animationName:0,elapsedTime:0,pseudoElement:0}),Ra=Mt(el),tc=E({},qe,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ia=Mt(tc),xf=E({},qe,{data:0}),tl=Mt(xf),Is={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ic={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ic[n])?!!r[n]:!1}function Cs(){return nl}var rc=E({},As,{key:function(n){if(n.key){var r=Is[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ti(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?nc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cs,charCode:function(n){return n.type==="keypress"?ti(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ti(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ca=Mt(rc),sc=E({},ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),il=Mt(sc),Pi=E({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cs}),ac=Mt(Pi),oc=E({},qe,{propertyName:0,elapsedTime:0,pseudoElement:0}),lc=Mt(oc),uc=E({},ws,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Da=Mt(uc),rn=E({},qe,{newState:0,oldState:0}),cc=Mt(rn),hc=[9,13,27,32],ri=Bn&&"CompositionEvent"in window,c=null;Bn&&"documentMode"in document&&(c=document.documentMode);var _=Bn&&"TextEvent"in window&&!c,y=Bn&&(!ri||c&&8<c&&11>=c),b=" ",U=!1;function G(n,r){switch(n){case"keyup":return hc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function se(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ke=!1;function Rt(n,r){switch(n){case"compositionend":return se(r);case"keypress":return r.which!==32?null:(U=!0,b);case"textInput":return n=r.data,n===b&&U?null:n;default:return null}}function xe(n,r){if(ke)return n==="compositionend"||!ri&&G(n,r)?(n=Jo(),Mi=mr=ei=null,ke=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var Pt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function It(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Pt[n.type]:r==="textarea"}function Vi(n,r,a,l){Ni?Oi?Oi.push(l):Oi=[l]:Ni=l,r=Wc(r,"onChange"),0<r.length&&(a=new Sa("onChange","change",null,a,l),n.push({event:a,listeners:r}))}var zt=null,si=null;function rl(n){Tv(n,0)}function fc(n){var r=Wn(n);if(Qo(r))return n}function Hg(n,r){if(n==="change")return r}var qg=!1;if(Bn){var Lf;if(Bn){var Uf="oninput"in document;if(!Uf){var Fg=document.createElement("div");Fg.setAttribute("oninput","return;"),Uf=typeof Fg.oninput=="function"}Lf=Uf}else Lf=!1;qg=Lf&&(!document.documentMode||9<document.documentMode)}function $g(){zt&&(zt.detachEvent("onpropertychange",Gg),si=zt=null)}function Gg(n){if(n.propertyName==="value"&&fc(si)){var r=[];Vi(r,si,n,bn(n)),Ju(rl,r)}}function NA(n,r,a){n==="focusin"?($g(),zt=r,si=a,zt.attachEvent("onpropertychange",Gg)):n==="focusout"&&$g()}function OA(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fc(si)}function MA(n,r){if(n==="click")return fc(r)}function PA(n,r){if(n==="input"||n==="change")return fc(r)}function VA(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var fn=typeof Object.is=="function"?Object.is:VA;function sl(n,r){if(fn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!os.call(r,f)||!fn(n[f],r[f]))return!1}return!0}function Kg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Qg(n,r){var a=Kg(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=r&&l>=r)return{node:a,offset:r-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Kg(a)}}function Yg(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Yg(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Xg(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=ys(n.document);r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=ys(n.document)}return r}function Bf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var kA=Bn&&"documentMode"in document&&11>=document.documentMode,Na=null,zf=null,al=null,jf=!1;function Wg(n,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jf||Na==null||Na!==ys(l)||(l=Na,"selectionStart"in l&&Bf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),al&&sl(al,l)||(al=l,l=Wc(zf,"onSelect"),0<l.length&&(r=new Sa("onSelect","select",null,r,a),n.push({event:r,listeners:l}),r.target=Na)))}function Ds(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Oa={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionrun:Ds("Transition","TransitionRun"),transitionstart:Ds("Transition","TransitionStart"),transitioncancel:Ds("Transition","TransitionCancel"),transitionend:Ds("Transition","TransitionEnd")},Hf={},Jg={};Bn&&(Jg=document.createElement("div").style,"AnimationEvent"in window||(delete Oa.animationend.animation,delete Oa.animationiteration.animation,delete Oa.animationstart.animation),"TransitionEvent"in window||delete Oa.transitionend.transition);function Ns(n){if(Hf[n])return Hf[n];if(!Oa[n])return n;var r=Oa[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Jg)return Hf[n]=r[a];return n}var Zg=Ns("animationend"),e_=Ns("animationiteration"),t_=Ns("animationstart"),xA=Ns("transitionrun"),LA=Ns("transitionstart"),UA=Ns("transitioncancel"),n_=Ns("transitionend"),i_=new Map,qf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qf.push("scrollEnd");function zn(n,r){i_.set(n,r),Un(r,[n])}var r_=new WeakMap;function Rn(n,r){if(typeof n=="object"&&n!==null){var a=r_.get(n);return a!==void 0?a:(r={value:n,source:r,stack:va(r)},r_.set(n,r),r)}return{value:n,source:r,stack:va(r)}}var In=[],Ma=0,Ff=0;function dc(){for(var n=Ma,r=Ff=Ma=0;r<n;){var a=In[r];In[r++]=null;var l=In[r];In[r++]=null;var f=In[r];In[r++]=null;var d=In[r];if(In[r++]=null,l!==null&&f!==null){var v=l.pending;v===null?f.next=f:(f.next=v.next,v.next=f),l.pending=f}d!==0&&s_(a,f,d)}}function mc(n,r,a,l){In[Ma++]=n,In[Ma++]=r,In[Ma++]=a,In[Ma++]=l,Ff|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function $f(n,r,a,l){return mc(n,r,a,l),pc(n)}function Pa(n,r){return mc(n,null,null,r),pc(n)}function s_(n,r,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var f=!1,d=n.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&r!==null&&(f=31-Kt(a),n=d.hiddenUpdates,l=n[f],l===null?n[f]=[r]:l.push(r),r.lane=a|536870912),d):null}function pc(n){if(50<Ol)throw Ol=0,Wd=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var Va={};function BA(n,r,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(n,r,a,l){return new BA(n,r,a,l)}function Gf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ki(n,r){var a=n.alternate;return a===null?(a=dn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function a_(n,r){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,r=a.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function gc(n,r,a,l,f,d){var v=0;if(l=n,typeof n=="function")Gf(n)&&(v=1);else if(typeof n=="string")v=jw(n,a,ge.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case R:return n=dn(31,a,r,f),n.elementType=R,n.lanes=d,n;case P:return Os(a.children,f,d,r);case K:v=8,f|=24;break;case q:return n=dn(12,a,r,f|2),n.elementType=q,n.lanes=d,n;case he:return n=dn(13,a,r,f),n.elementType=he,n.lanes=d,n;case Se:return n=dn(19,a,r,f),n.elementType=Se,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case $:case re:v=10;break e;case ie:v=9;break e;case de:v=11;break e;case M:v=14;break e;case w:v=16,l=null;break e}v=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return r=dn(v,a,r,f),r.elementType=n,r.type=l,r.lanes=d,r}function Os(n,r,a,l){return n=dn(7,n,l,r),n.lanes=a,n}function Kf(n,r,a){return n=dn(6,n,null,r),n.lanes=a,n}function Qf(n,r,a){return r=dn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var ka=[],xa=0,_c=null,yc=0,Cn=[],Dn=0,Ms=null,xi=1,Li="";function Ps(n,r){ka[xa++]=yc,ka[xa++]=_c,_c=n,yc=r}function o_(n,r,a){Cn[Dn++]=xi,Cn[Dn++]=Li,Cn[Dn++]=Ms,Ms=n;var l=xi;n=Li;var f=32-Kt(l)-1;l&=~(1<<f),a+=1;var d=32-Kt(r)+f;if(30<d){var v=f-f%5;d=(l&(1<<v)-1).toString(32),l>>=v,f-=v,xi=1<<32-Kt(r)+f|a<<f|l,Li=d+n}else xi=1<<d|a<<f|l,Li=n}function Yf(n){n.return!==null&&(Ps(n,1),o_(n,1,0))}function Xf(n){for(;n===_c;)_c=ka[--xa],ka[xa]=null,yc=ka[--xa],ka[xa]=null;for(;n===Ms;)Ms=Cn[--Dn],Cn[Dn]=null,Li=Cn[--Dn],Cn[Dn]=null,xi=Cn[--Dn],Cn[Dn]=null}var sn=null,ht=null,je=!1,Vs=null,ai=!1,Wf=Error(s(519));function ks(n){var r=Error(s(418,""));throw ul(Rn(r,n)),Wf}function l_(n){var r=n.stateNode,a=n.type,l=n.memoizedProps;switch(r[wt]=n,r[_t]=l,a){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(a=0;a<Pl.length;a++)Me(Pl[a],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":Me("invalid",r),vs(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ea(r);break;case"select":Me("invalid",r);break;case"textarea":Me("invalid",r),Es(r,l.value,l.defaultValue,l.children),Ea(r)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||wv(r.textContent,a)?(l.popover!=null&&(Me("beforetoggle",r),Me("toggle",r)),l.onScroll!=null&&Me("scroll",r),l.onScrollEnd!=null&&Me("scrollend",r),l.onClick!=null&&(r.onclick=Jc),r=!0):r=!1,r||ks(n)}function u_(n){for(sn=n.return;sn;)switch(sn.tag){case 5:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:sn=sn.return}}function ol(n){if(n!==sn)return!1;if(!je)return u_(n),je=!0,!1;var r=n.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||dm(n.type,n.memoizedProps)),a=!a),a&&ht&&ks(n),u_(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(r===0){ht=Hn(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++;n=n.nextSibling}ht=null}}else r===27?(r=ht,Nr(n.type)?(n=_m,_m=null,ht=n):ht=r):ht=sn?Hn(n.stateNode.nextSibling):null;return!0}function ll(){ht=sn=null,je=!1}function c_(){var n=Vs;return n!==null&&(ln===null?ln=n:ln.push.apply(ln,n),Vs=null),n}function ul(n){Vs===null?Vs=[n]:Vs.push(n)}var Jf=ee(null),xs=null,Ui=null;function pr(n,r,a){te(Jf,r._currentValue),r._currentValue=a}function Bi(n){n._currentValue=Jf.current,oe(Jf)}function Zf(n,r,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),n===a)break;n=n.return}}function ed(n,r,a,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var v=f.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=f;for(var I=0;I<r.length;I++)if(T.context===r[I]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Zf(d.return,a,n),l||(v=null);break e}d=T.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Zf(v,a,n),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===n){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function cl(n,r,a,l){n=null;for(var f=r,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=f.type;fn(f.pendingProps.value,v.value)||(n!==null?n.push(T):n=[T])}}else if(f===Ot.current){if(v=f.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Bl):n=[Bl])}f=f.return}n!==null&&ed(r,n,a,l),r.flags|=262144}function vc(n){for(n=n.firstContext;n!==null;){if(!fn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ls(n){xs=n,Ui=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Qt(n){return h_(xs,n)}function Ec(n,r){return xs===null&&Ls(n),h_(n,r)}function h_(n,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},Ui===null){if(n===null)throw Error(s(308));Ui=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Ui=Ui.next=r;return a}var zA=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){r.aborted=!0,n.forEach(function(a){return a()})}},jA=i.unstable_scheduleCallback,HA=i.unstable_NormalPriority,Ct={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function td(){return{controller:new zA,data:new Map,refCount:0}}function hl(n){n.refCount--,n.refCount===0&&jA(HA,function(){n.controller.abort()})}var fl=null,nd=0,La=0,Ua=null;function qA(n,r){if(fl===null){var a=fl=[];nd=0,La=rm(),Ua={status:"pending",value:void 0,then:function(l){a.push(l)}}}return nd++,r.then(f_,f_),r}function f_(){if(--nd===0&&fl!==null){Ua!==null&&(Ua.status="fulfilled");var n=fl;fl=null,La=0,Ua=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function FA(n,r){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){l.status="fulfilled",l.value=r;for(var f=0;f<a.length;f++)(0,a[f])(r)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var d_=Q.S;Q.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&qA(n,r),d_!==null&&d_(n,r)};var Us=ee(null);function id(){var n=Us.current;return n!==null?n:nt.pooledCache}function Tc(n,r){r===null?te(Us,Us.current):te(Us,r.pool)}function m_(){var n=id();return n===null?null:{parent:Ct._currentValue,pool:n}}var dl=Error(s(460)),p_=Error(s(474)),Sc=Error(s(542)),rd={then:function(){}};function g_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function bc(){}function __(n,r,a){switch(a=n[a],a===void 0?n.push(r):a!==r&&(r.then(bc,bc),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,v_(n),n;default:if(typeof r.status=="string")r.then(bc,bc);else{if(n=nt,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(l){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=l}},function(l){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,v_(n),n}throw ml=r,dl}}var ml=null;function y_(){if(ml===null)throw Error(s(459));var n=ml;return ml=null,n}function v_(n){if(n===dl||n===Sc)throw Error(s(483))}var gr=!1;function sd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ad(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function _r(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function yr(n,r,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Ge&2)!==0){var f=l.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r,r=pc(n),s_(n,null,a),r}return mc(n,l,r,a),pc(n)}function pl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,qo(n,a)}}function od(n,r){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?f=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?f=d=r:d=d.next=r}else f=d=r;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}var ld=!1;function gl(){if(ld){var n=Ua;if(n!==null)throw n}}function _l(n,r,a,l){ld=!1;var f=n.updateQueue;gr=!1;var d=f.firstBaseUpdate,v=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var I=T,z=I.next;I.next=null,v===null?d=z:v.next=z,v=I;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,T=Y.lastBaseUpdate,T!==v&&(T===null?Y.firstBaseUpdate=z:T.next=z,Y.lastBaseUpdate=I))}if(d!==null){var J=f.baseState;v=0,Y=z=I=null,T=d;do{var j=T.lane&-536870913,H=j!==T.lane;if(H?(Le&j)===j:(l&j)===j){j!==0&&j===La&&(ld=!0),Y!==null&&(Y=Y.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Te=n,_e=T;j=r;var We=a;switch(_e.tag){case 1:if(Te=_e.payload,typeof Te=="function"){J=Te.call(We,J,j);break e}J=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=_e.payload,j=typeof Te=="function"?Te.call(We,J,j):Te,j==null)break e;J=E({},J,j);break e;case 2:gr=!0}}j=T.callback,j!==null&&(n.flags|=64,H&&(n.flags|=8192),H=f.callbacks,H===null?f.callbacks=[j]:H.push(j))}else H={lane:j,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Y===null?(z=Y=H,I=J):Y=Y.next=H,v|=j;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;H=T,T=H.next,H.next=null,f.lastBaseUpdate=H,f.shared.pending=null}}while(!0);Y===null&&(I=J),f.baseState=I,f.firstBaseUpdate=z,f.lastBaseUpdate=Y,d===null&&(f.shared.lanes=0),Rr|=v,n.lanes=v,n.memoizedState=J}}function E_(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function T_(n,r){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)E_(a[n],r)}var Ba=ee(null),Ac=ee(0);function S_(n,r){n=Gi,te(Ac,n),te(Ba,r),Gi=n|r.baseLanes}function ud(){te(Ac,Gi),te(Ba,Ba.current)}function cd(){Gi=Ac.current,oe(Ba),oe(Ac)}var vr=0,Ie=null,Ye=null,vt=null,wc=!1,za=!1,Bs=!1,Rc=0,yl=0,ja=null,$A=0;function mt(){throw Error(s(321))}function hd(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!fn(n[a],r[a]))return!1;return!0}function fd(n,r,a,l,f,d){return vr=d,Ie=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Q.H=n===null||n.memoizedState===null?sy:ay,Bs=!1,d=a(l,f),Bs=!1,za&&(d=A_(r,a,l,f)),b_(n),d}function b_(n){Q.H=Mc;var r=Ye!==null&&Ye.next!==null;if(vr=0,vt=Ye=Ie=null,wc=!1,yl=0,ja=null,r)throw Error(s(300));n===null||Vt||(n=n.dependencies,n!==null&&vc(n)&&(Vt=!0))}function A_(n,r,a,l){Ie=n;var f=0;do{if(za&&(ja=null),yl=0,za=!1,25<=f)throw Error(s(301));if(f+=1,vt=Ye=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Q.H=JA,d=r(a,l)}while(za);return d}function GA(){var n=Q.H,r=n.useState()[0];return r=typeof r.then=="function"?vl(r):r,n=n.useState()[0],(Ye!==null?Ye.memoizedState:null)!==n&&(Ie.flags|=1024),r}function dd(){var n=Rc!==0;return Rc=0,n}function md(n,r,a){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~a}function pd(n){if(wc){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}wc=!1}vr=0,vt=Ye=Ie=null,za=!1,yl=Rc=0,ja=null}function an(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Ie.memoizedState=vt=n:vt=vt.next=n,vt}function Et(){if(Ye===null){var n=Ie.alternate;n=n!==null?n.memoizedState:null}else n=Ye.next;var r=vt===null?Ie.memoizedState:vt.next;if(r!==null)vt=r,Ye=n;else{if(n===null)throw Ie.alternate===null?Error(s(467)):Error(s(310));Ye=n,n={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},vt===null?Ie.memoizedState=vt=n:vt=vt.next=n}return vt}function gd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vl(n){var r=yl;return yl+=1,ja===null&&(ja=[]),n=__(ja,n,r),r=Ie,(vt===null?r.memoizedState:vt.next)===null&&(r=r.alternate,Q.H=r===null||r.memoizedState===null?sy:ay),n}function Ic(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return vl(n);if(n.$$typeof===re)return Qt(n)}throw Error(s(438,String(n)))}function _d(n){var r=null,a=Ie.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=Ie.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=gd(),Ie.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(n),l=0;l<n;l++)a[l]=N;return r.index++,a}function zi(n,r){return typeof r=="function"?r(n):r}function Cc(n){var r=Et();return yd(r,Ye,n)}function yd(n,r,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=n.baseQueue,d=l.pending;if(d!==null){if(f!==null){var v=f.next;f.next=d.next,d.next=v}r.baseQueue=f=d,l.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{r=f.next;var T=v=null,I=null,z=r,Y=!1;do{var J=z.lane&-536870913;if(J!==z.lane?(Le&J)===J:(vr&J)===J){var j=z.revertLane;if(j===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),J===La&&(Y=!0);else if((vr&j)===j){z=z.next,j===La&&(Y=!0);continue}else J={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},I===null?(T=I=J,v=d):I=I.next=J,Ie.lanes|=j,Rr|=j;J=z.action,Bs&&a(d,J),d=z.hasEagerState?z.eagerState:a(d,J)}else j={lane:J,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},I===null?(T=I=j,v=d):I=I.next=j,Ie.lanes|=J,Rr|=J;z=z.next}while(z!==null&&z!==r);if(I===null?v=d:I.next=T,!fn(d,n.memoizedState)&&(Vt=!0,Y&&(a=Ua,a!==null)))throw a;n.memoizedState=d,n.baseState=v,n.baseQueue=I,l.lastRenderedState=d}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function vd(n){var r=Et(),a=r.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,d=r.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do d=n(d,v.action),v=v.next;while(v!==f);fn(d,r.memoizedState)||(Vt=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),a.lastRenderedState=d}return[d,l]}function w_(n,r,a){var l=Ie,f=Et(),d=je;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=r();var v=!fn((Ye||f).memoizedState,a);v&&(f.memoizedState=a,Vt=!0),f=f.queue;var T=C_.bind(null,l,f,n);if(El(2048,8,T,[n]),f.getSnapshot!==r||v||vt!==null&&vt.memoizedState.tag&1){if(l.flags|=2048,Ha(9,Dc(),I_.bind(null,l,f,a,r),null),nt===null)throw Error(s(349));d||(vr&124)!==0||R_(l,r,a)}return a}function R_(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ie.updateQueue,r===null?(r=gd(),Ie.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function I_(n,r,a,l){r.value=a,r.getSnapshot=l,D_(r)&&N_(n)}function C_(n,r,a){return a(function(){D_(r)&&N_(n)})}function D_(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!fn(n,a)}catch{return!0}}function N_(n){var r=Pa(n,2);r!==null&&yn(r,n,2)}function Ed(n){var r=an();if(typeof n=="function"){var a=n;if(n=a(),Bs){cn(!0);try{a()}finally{cn(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:n},r}function O_(n,r,a,l){return n.baseState=a,yd(n,Ye,typeof l=="function"?l:zi)}function KA(n,r,a,l,f){if(Oc(n))throw Error(s(485));if(n=r.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};Q.T!==null?a(!0):d.isTransition=!1,l(d),a=r.pending,a===null?(d.next=r.pending=d,M_(r,d)):(d.next=a.next,r.pending=a.next=d)}}function M_(n,r){var a=r.action,l=r.payload,f=n.state;if(r.isTransition){var d=Q.T,v={};Q.T=v;try{var T=a(f,l),I=Q.S;I!==null&&I(v,T),P_(n,r,T)}catch(z){Td(n,r,z)}finally{Q.T=d}}else try{d=a(f,l),P_(n,r,d)}catch(z){Td(n,r,z)}}function P_(n,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){V_(n,r,l)},function(l){return Td(n,r,l)}):V_(n,r,a)}function V_(n,r,a){r.status="fulfilled",r.value=a,k_(r),n.state=a,r=n.pending,r!==null&&(a=r.next,a===r?n.pending=null:(a=a.next,r.next=a,M_(n,a)))}function Td(n,r,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,k_(r),r=r.next;while(r!==l)}n.action=null}function k_(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function x_(n,r){return r}function L_(n,r){if(je){var a=nt.formState;if(a!==null){e:{var l=Ie;if(je){if(ht){t:{for(var f=ht,d=ai;f.nodeType!==8;){if(!d){f=null;break t}if(f=Hn(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){ht=Hn(f.nextSibling),l=f.data==="F!";break e}}ks(l)}l=!1}l&&(r=a[0])}}return a=an(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:x_,lastRenderedState:r},a.queue=l,a=ny.bind(null,Ie,l),l.dispatch=a,l=Ed(!1),d=Rd.bind(null,Ie,!1,l.queue),l=an(),f={state:r,dispatch:null,action:n,pending:null},l.queue=f,a=KA.bind(null,Ie,f,d,a),f.dispatch=a,l.memoizedState=n,[r,a,!1]}function U_(n){var r=Et();return B_(r,Ye,n)}function B_(n,r,a){if(r=yd(n,r,x_)[0],n=Cc(zi)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=vl(r)}catch(v){throw v===dl?Sc:v}else l=r;r=Et();var f=r.queue,d=f.dispatch;return a!==r.memoizedState&&(Ie.flags|=2048,Ha(9,Dc(),QA.bind(null,f,a),null)),[l,d,n]}function QA(n,r){n.action=r}function z_(n){var r=Et(),a=Ye;if(a!==null)return B_(r,a,n);Et(),r=r.memoizedState,a=Et();var l=a.queue.dispatch;return a.memoizedState=n,[r,l,!1]}function Ha(n,r,a,l){return n={tag:n,create:a,deps:l,inst:r,next:null},r=Ie.updateQueue,r===null&&(r=gd(),Ie.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,r.lastEffect=n),n}function Dc(){return{destroy:void 0,resource:void 0}}function j_(){return Et().memoizedState}function Nc(n,r,a,l){var f=an();l=l===void 0?null:l,Ie.flags|=n,f.memoizedState=Ha(1|r,Dc(),a,l)}function El(n,r,a,l){var f=Et();l=l===void 0?null:l;var d=f.memoizedState.inst;Ye!==null&&l!==null&&hd(l,Ye.memoizedState.deps)?f.memoizedState=Ha(r,d,a,l):(Ie.flags|=n,f.memoizedState=Ha(1|r,d,a,l))}function H_(n,r){Nc(8390656,8,n,r)}function q_(n,r){El(2048,8,n,r)}function F_(n,r){return El(4,2,n,r)}function $_(n,r){return El(4,4,n,r)}function G_(n,r){if(typeof r=="function"){n=n();var a=r(n);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function K_(n,r,a){a=a!=null?a.concat([n]):null,El(4,4,G_.bind(null,r,n),a)}function Sd(){}function Q_(n,r){var a=Et();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&hd(r,l[1])?l[0]:(a.memoizedState=[n,r],n)}function Y_(n,r){var a=Et();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&hd(r,l[1]))return l[0];if(l=n(),Bs){cn(!0);try{n()}finally{cn(!1)}}return a.memoizedState=[l,r],l}function bd(n,r,a){return a===void 0||(vr&1073741824)!==0?n.memoizedState=r:(n.memoizedState=a,n=Jy(),Ie.lanes|=n,Rr|=n,a)}function X_(n,r,a,l){return fn(a,r)?a:Ba.current!==null?(n=bd(n,a,l),fn(n,r)||(Vt=!0),n):(vr&42)===0?(Vt=!0,n.memoizedState=a):(n=Jy(),Ie.lanes|=n,Rr|=n,r)}function W_(n,r,a,l,f){var d=ae.p;ae.p=d!==0&&8>d?d:8;var v=Q.T,T={};Q.T=T,Rd(n,!1,r,a);try{var I=f(),z=Q.S;if(z!==null&&z(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var Y=FA(I,l);Tl(n,r,Y,_n(n))}else Tl(n,r,l,_n(n))}catch(J){Tl(n,r,{then:function(){},status:"rejected",reason:J},_n())}finally{ae.p=d,Q.T=v}}function YA(){}function Ad(n,r,a,l){if(n.tag!==5)throw Error(s(476));var f=J_(n).queue;W_(n,f,r,me,a===null?YA:function(){return Z_(n),a(l)})}function J_(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:me},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:a},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function Z_(n){var r=J_(n).next.queue;Tl(n,r,{},_n())}function wd(){return Qt(Bl)}function ey(){return Et().memoizedState}function ty(){return Et().memoizedState}function XA(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var a=_n();n=_r(a);var l=yr(r,n,a);l!==null&&(yn(l,r,a),pl(l,r,a)),r={cache:td()},n.payload=r;return}r=r.return}}function WA(n,r,a){var l=_n();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Oc(n)?iy(r,a):(a=$f(n,r,a,l),a!==null&&(yn(a,n,l),ry(a,r,l)))}function ny(n,r,a){var l=_n();Tl(n,r,a,l)}function Tl(n,r,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Oc(n))iy(r,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var v=r.lastRenderedState,T=d(v,a);if(f.hasEagerState=!0,f.eagerState=T,fn(T,v))return mc(n,r,f,0),nt===null&&dc(),!1}catch{}finally{}if(a=$f(n,r,f,l),a!==null)return yn(a,n,l),ry(a,r,l),!0}return!1}function Rd(n,r,a,l){if(l={lane:2,revertLane:rm(),action:l,hasEagerState:!1,eagerState:null,next:null},Oc(n)){if(r)throw Error(s(479))}else r=$f(n,a,l,2),r!==null&&yn(r,n,2)}function Oc(n){var r=n.alternate;return n===Ie||r!==null&&r===Ie}function iy(n,r){za=wc=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function ry(n,r,a){if((a&4194048)!==0){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,qo(n,a)}}var Mc={readContext:Qt,use:Ic,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useLayoutEffect:mt,useInsertionEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useSyncExternalStore:mt,useId:mt,useHostTransitionStatus:mt,useFormState:mt,useActionState:mt,useOptimistic:mt,useMemoCache:mt,useCacheRefresh:mt},sy={readContext:Qt,use:Ic,useCallback:function(n,r){return an().memoizedState=[n,r===void 0?null:r],n},useContext:Qt,useEffect:H_,useImperativeHandle:function(n,r,a){a=a!=null?a.concat([n]):null,Nc(4194308,4,G_.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Nc(4194308,4,n,r)},useInsertionEffect:function(n,r){Nc(4,2,n,r)},useMemo:function(n,r){var a=an();r=r===void 0?null:r;var l=n();if(Bs){cn(!0);try{n()}finally{cn(!1)}}return a.memoizedState=[l,r],l},useReducer:function(n,r,a){var l=an();if(a!==void 0){var f=a(r);if(Bs){cn(!0);try{a(r)}finally{cn(!1)}}}else f=r;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=WA.bind(null,Ie,n),[l.memoizedState,n]},useRef:function(n){var r=an();return n={current:n},r.memoizedState=n},useState:function(n){n=Ed(n);var r=n.queue,a=ny.bind(null,Ie,r);return r.dispatch=a,[n.memoizedState,a]},useDebugValue:Sd,useDeferredValue:function(n,r){var a=an();return bd(a,n,r)},useTransition:function(){var n=Ed(!1);return n=W_.bind(null,Ie,n.queue,!0,!1),an().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,a){var l=Ie,f=an();if(je){if(a===void 0)throw Error(s(407));a=a()}else{if(a=r(),nt===null)throw Error(s(349));(Le&124)!==0||R_(l,r,a)}f.memoizedState=a;var d={value:a,getSnapshot:r};return f.queue=d,H_(C_.bind(null,l,d,n),[n]),l.flags|=2048,Ha(9,Dc(),I_.bind(null,l,d,a,r),null),a},useId:function(){var n=an(),r=nt.identifierPrefix;if(je){var a=Li,l=xi;a=(l&~(1<<32-Kt(l)-1)).toString(32)+a,r="«"+r+"R"+a,a=Rc++,0<a&&(r+="H"+a.toString(32)),r+="»"}else a=$A++,r="«"+r+"r"+a.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:wd,useFormState:L_,useActionState:L_,useOptimistic:function(n){var r=an();r.memoizedState=r.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=Rd.bind(null,Ie,!0,a),a.dispatch=r,[n,r]},useMemoCache:_d,useCacheRefresh:function(){return an().memoizedState=XA.bind(null,Ie)}},ay={readContext:Qt,use:Ic,useCallback:Q_,useContext:Qt,useEffect:q_,useImperativeHandle:K_,useInsertionEffect:F_,useLayoutEffect:$_,useMemo:Y_,useReducer:Cc,useRef:j_,useState:function(){return Cc(zi)},useDebugValue:Sd,useDeferredValue:function(n,r){var a=Et();return X_(a,Ye.memoizedState,n,r)},useTransition:function(){var n=Cc(zi)[0],r=Et().memoizedState;return[typeof n=="boolean"?n:vl(n),r]},useSyncExternalStore:w_,useId:ey,useHostTransitionStatus:wd,useFormState:U_,useActionState:U_,useOptimistic:function(n,r){var a=Et();return O_(a,Ye,n,r)},useMemoCache:_d,useCacheRefresh:ty},JA={readContext:Qt,use:Ic,useCallback:Q_,useContext:Qt,useEffect:q_,useImperativeHandle:K_,useInsertionEffect:F_,useLayoutEffect:$_,useMemo:Y_,useReducer:vd,useRef:j_,useState:function(){return vd(zi)},useDebugValue:Sd,useDeferredValue:function(n,r){var a=Et();return Ye===null?bd(a,n,r):X_(a,Ye.memoizedState,n,r)},useTransition:function(){var n=vd(zi)[0],r=Et().memoizedState;return[typeof n=="boolean"?n:vl(n),r]},useSyncExternalStore:w_,useId:ey,useHostTransitionStatus:wd,useFormState:z_,useActionState:z_,useOptimistic:function(n,r){var a=Et();return Ye!==null?O_(a,Ye,n,r):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:_d,useCacheRefresh:ty},qa=null,Sl=0;function Pc(n){var r=Sl;return Sl+=1,qa===null&&(qa=[]),__(qa,n,r)}function bl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Vc(n,r){throw r.$$typeof===S?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function oy(n){var r=n._init;return r(n._payload)}function ly(n){function r(x,O){if(n){var B=x.deletions;B===null?(x.deletions=[O],x.flags|=16):B.push(O)}}function a(x,O){if(!n)return null;for(;O!==null;)r(x,O),O=O.sibling;return null}function l(x){for(var O=new Map;x!==null;)x.key!==null?O.set(x.key,x):O.set(x.index,x),x=x.sibling;return O}function f(x,O){return x=ki(x,O),x.index=0,x.sibling=null,x}function d(x,O,B){return x.index=B,n?(B=x.alternate,B!==null?(B=B.index,B<O?(x.flags|=67108866,O):B):(x.flags|=67108866,O)):(x.flags|=1048576,O)}function v(x){return n&&x.alternate===null&&(x.flags|=67108866),x}function T(x,O,B,X){return O===null||O.tag!==6?(O=Kf(B,x.mode,X),O.return=x,O):(O=f(O,B),O.return=x,O)}function I(x,O,B,X){var ce=B.type;return ce===P?Y(x,O,B.props.children,X,B.key):O!==null&&(O.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===w&&oy(ce)===O.type)?(O=f(O,B.props),bl(O,B),O.return=x,O):(O=gc(B.type,B.key,B.props,null,x.mode,X),bl(O,B),O.return=x,O)}function z(x,O,B,X){return O===null||O.tag!==4||O.stateNode.containerInfo!==B.containerInfo||O.stateNode.implementation!==B.implementation?(O=Qf(B,x.mode,X),O.return=x,O):(O=f(O,B.children||[]),O.return=x,O)}function Y(x,O,B,X,ce){return O===null||O.tag!==7?(O=Os(B,x.mode,X,ce),O.return=x,O):(O=f(O,B),O.return=x,O)}function J(x,O,B){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Kf(""+O,x.mode,B),O.return=x,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case A:return B=gc(O.type,O.key,O.props,null,x.mode,B),bl(B,O),B.return=x,B;case k:return O=Qf(O,x.mode,B),O.return=x,O;case w:var X=O._init;return O=X(O._payload),J(x,O,B)}if(ut(O)||L(O))return O=Os(O,x.mode,B,null),O.return=x,O;if(typeof O.then=="function")return J(x,Pc(O),B);if(O.$$typeof===re)return J(x,Ec(x,O),B);Vc(x,O)}return null}function j(x,O,B,X){var ce=O!==null?O.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return ce!==null?null:T(x,O,""+B,X);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case A:return B.key===ce?I(x,O,B,X):null;case k:return B.key===ce?z(x,O,B,X):null;case w:return ce=B._init,B=ce(B._payload),j(x,O,B,X)}if(ut(B)||L(B))return ce!==null?null:Y(x,O,B,X,null);if(typeof B.then=="function")return j(x,O,Pc(B),X);if(B.$$typeof===re)return j(x,O,Ec(x,B),X);Vc(x,B)}return null}function H(x,O,B,X,ce){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return x=x.get(B)||null,T(O,x,""+X,ce);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case A:return x=x.get(X.key===null?B:X.key)||null,I(O,x,X,ce);case k:return x=x.get(X.key===null?B:X.key)||null,z(O,x,X,ce);case w:var Ne=X._init;return X=Ne(X._payload),H(x,O,B,X,ce)}if(ut(X)||L(X))return x=x.get(B)||null,Y(O,x,X,ce,null);if(typeof X.then=="function")return H(x,O,B,Pc(X),ce);if(X.$$typeof===re)return H(x,O,B,Ec(O,X),ce);Vc(O,X)}return null}function Te(x,O,B,X){for(var ce=null,Ne=null,fe=O,ye=O=0,xt=null;fe!==null&&ye<B.length;ye++){fe.index>ye?(xt=fe,fe=null):xt=fe.sibling;var Be=j(x,fe,B[ye],X);if(Be===null){fe===null&&(fe=xt);break}n&&fe&&Be.alternate===null&&r(x,fe),O=d(Be,O,ye),Ne===null?ce=Be:Ne.sibling=Be,Ne=Be,fe=xt}if(ye===B.length)return a(x,fe),je&&Ps(x,ye),ce;if(fe===null){for(;ye<B.length;ye++)fe=J(x,B[ye],X),fe!==null&&(O=d(fe,O,ye),Ne===null?ce=fe:Ne.sibling=fe,Ne=fe);return je&&Ps(x,ye),ce}for(fe=l(fe);ye<B.length;ye++)xt=H(fe,x,ye,B[ye],X),xt!==null&&(n&&xt.alternate!==null&&fe.delete(xt.key===null?ye:xt.key),O=d(xt,O,ye),Ne===null?ce=xt:Ne.sibling=xt,Ne=xt);return n&&fe.forEach(function(kr){return r(x,kr)}),je&&Ps(x,ye),ce}function _e(x,O,B,X){if(B==null)throw Error(s(151));for(var ce=null,Ne=null,fe=O,ye=O=0,xt=null,Be=B.next();fe!==null&&!Be.done;ye++,Be=B.next()){fe.index>ye?(xt=fe,fe=null):xt=fe.sibling;var kr=j(x,fe,Be.value,X);if(kr===null){fe===null&&(fe=xt);break}n&&fe&&kr.alternate===null&&r(x,fe),O=d(kr,O,ye),Ne===null?ce=kr:Ne.sibling=kr,Ne=kr,fe=xt}if(Be.done)return a(x,fe),je&&Ps(x,ye),ce;if(fe===null){for(;!Be.done;ye++,Be=B.next())Be=J(x,Be.value,X),Be!==null&&(O=d(Be,O,ye),Ne===null?ce=Be:Ne.sibling=Be,Ne=Be);return je&&Ps(x,ye),ce}for(fe=l(fe);!Be.done;ye++,Be=B.next())Be=H(fe,x,ye,Be.value,X),Be!==null&&(n&&Be.alternate!==null&&fe.delete(Be.key===null?ye:Be.key),O=d(Be,O,ye),Ne===null?ce=Be:Ne.sibling=Be,Ne=Be);return n&&fe.forEach(function(Zw){return r(x,Zw)}),je&&Ps(x,ye),ce}function We(x,O,B,X){if(typeof B=="object"&&B!==null&&B.type===P&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case A:e:{for(var ce=B.key;O!==null;){if(O.key===ce){if(ce=B.type,ce===P){if(O.tag===7){a(x,O.sibling),X=f(O,B.props.children),X.return=x,x=X;break e}}else if(O.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===w&&oy(ce)===O.type){a(x,O.sibling),X=f(O,B.props),bl(X,B),X.return=x,x=X;break e}a(x,O);break}else r(x,O);O=O.sibling}B.type===P?(X=Os(B.props.children,x.mode,X,B.key),X.return=x,x=X):(X=gc(B.type,B.key,B.props,null,x.mode,X),bl(X,B),X.return=x,x=X)}return v(x);case k:e:{for(ce=B.key;O!==null;){if(O.key===ce)if(O.tag===4&&O.stateNode.containerInfo===B.containerInfo&&O.stateNode.implementation===B.implementation){a(x,O.sibling),X=f(O,B.children||[]),X.return=x,x=X;break e}else{a(x,O);break}else r(x,O);O=O.sibling}X=Qf(B,x.mode,X),X.return=x,x=X}return v(x);case w:return ce=B._init,B=ce(B._payload),We(x,O,B,X)}if(ut(B))return Te(x,O,B,X);if(L(B)){if(ce=L(B),typeof ce!="function")throw Error(s(150));return B=ce.call(B),_e(x,O,B,X)}if(typeof B.then=="function")return We(x,O,Pc(B),X);if(B.$$typeof===re)return We(x,O,Ec(x,B),X);Vc(x,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,O!==null&&O.tag===6?(a(x,O.sibling),X=f(O,B),X.return=x,x=X):(a(x,O),X=Kf(B,x.mode,X),X.return=x,x=X),v(x)):a(x,O)}return function(x,O,B,X){try{Sl=0;var ce=We(x,O,B,X);return qa=null,ce}catch(fe){if(fe===dl||fe===Sc)throw fe;var Ne=dn(29,fe,null,x.mode);return Ne.lanes=X,Ne.return=x,Ne}finally{}}}var Fa=ly(!0),uy=ly(!1),Nn=ee(null),oi=null;function Er(n){var r=n.alternate;te(Dt,Dt.current&1),te(Nn,n),oi===null&&(r===null||Ba.current!==null||r.memoizedState!==null)&&(oi=n)}function cy(n){if(n.tag===22){if(te(Dt,Dt.current),te(Nn,n),oi===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(oi=n)}}else Tr()}function Tr(){te(Dt,Dt.current),te(Nn,Nn.current)}function ji(n){oe(Nn),oi===n&&(oi=null),oe(Dt)}var Dt=ee(0);function kc(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||gm(a)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Id(n,r,a,l){r=n.memoizedState,a=a(l,r),a=a==null?r:E({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Cd={enqueueSetState:function(n,r,a){n=n._reactInternals;var l=_n(),f=_r(l);f.payload=r,a!=null&&(f.callback=a),r=yr(n,f,l),r!==null&&(yn(r,n,l),pl(r,n,l))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var l=_n(),f=_r(l);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=yr(n,f,l),r!==null&&(yn(r,n,l),pl(r,n,l))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=_n(),l=_r(a);l.tag=2,r!=null&&(l.callback=r),r=yr(n,l,a),r!==null&&(yn(r,n,a),pl(r,n,a))}};function hy(n,r,a,l,f,d,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,v):r.prototype&&r.prototype.isPureReactComponent?!sl(a,l)||!sl(f,d):!0}function fy(n,r,a,l){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==n&&Cd.enqueueReplaceState(r,r.state,null)}function zs(n,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(n=n.defaultProps){a===r&&(a=E({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}var xc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function dy(n){xc(n)}function my(n){console.error(n)}function py(n){xc(n)}function Lc(n,r){try{var a=n.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function gy(n,r,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Dd(n,r,a){return a=_r(a),a.tag=3,a.payload={element:null},a.callback=function(){Lc(n,r)},a}function _y(n){return n=_r(n),n.tag=3,n}function yy(n,r,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;n.payload=function(){return f(d)},n.callback=function(){gy(r,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(n.callback=function(){gy(r,a,l),typeof f!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function ZA(n,r,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&cl(r,a,f,!0),a=Nn.current,a!==null){switch(a.tag){case 13:return oi===null?Zd():a.alternate===null&&ft===0&&(ft=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===rd?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),tm(n,l,f)),!1;case 22:return a.flags|=65536,l===rd?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),tm(n,l,f)),!1}throw Error(s(435,a.tag))}return tm(n,l,f),Zd(),!1}if(je)return r=Nn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,l!==Wf&&(n=Error(s(422),{cause:l}),ul(Rn(n,a)))):(l!==Wf&&(r=Error(s(423),{cause:l}),ul(Rn(r,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=Rn(l,a),f=Dd(n.stateNode,l,f),od(n,f),ft!==4&&(ft=2)),!1;var d=Error(s(520),{cause:l});if(d=Rn(d,a),Nl===null?Nl=[d]:Nl.push(d),ft!==4&&(ft=2),r===null)return!0;l=Rn(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=Dd(a.stateNode,l,n),od(a,n),!1;case 1:if(r=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ir===null||!Ir.has(d))))return a.flags|=65536,f&=-f,a.lanes|=f,f=_y(f),yy(f,n,a,l),od(a,f),!1}a=a.return}while(a!==null);return!1}var vy=Error(s(461)),Vt=!1;function jt(n,r,a,l){r.child=n===null?uy(r,null,a,l):Fa(r,n.child,a,l)}function Ey(n,r,a,l,f){a=a.render;var d=r.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Ls(r),l=fd(n,r,a,v,d,f),T=dd(),n!==null&&!Vt?(md(n,r,f),Hi(n,r,f)):(je&&T&&Yf(r),r.flags|=1,jt(n,r,l,f),r.child)}function Ty(n,r,a,l,f){if(n===null){var d=a.type;return typeof d=="function"&&!Gf(d)&&d.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=d,Sy(n,r,d,l,f)):(n=gc(a.type,null,l,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(d=n.child,!Ld(n,f)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:sl,a(v,l)&&n.ref===r.ref)return Hi(n,r,f)}return r.flags|=1,n=ki(d,l),n.ref=r.ref,n.return=r,r.child=n}function Sy(n,r,a,l,f){if(n!==null){var d=n.memoizedProps;if(sl(d,l)&&n.ref===r.ref)if(Vt=!1,r.pendingProps=l=d,Ld(n,f))(n.flags&131072)!==0&&(Vt=!0);else return r.lanes=n.lanes,Hi(n,r,f)}return Nd(n,r,a,l,f)}function by(n,r,a){var l=r.pendingProps,f=l.children,d=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,n!==null){for(f=r.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;r.childLanes=d&~l}else r.childLanes=0,r.child=null;return Ay(n,r,l,a)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Tc(r,d!==null?d.cachePool:null),d!==null?S_(r,d):ud(),cy(r);else return r.lanes=r.childLanes=536870912,Ay(n,r,d!==null?d.baseLanes|a:a,a)}else d!==null?(Tc(r,d.cachePool),S_(r,d),Tr(),r.memoizedState=null):(n!==null&&Tc(r,null),ud(),Tr());return jt(n,r,f,a),r.child}function Ay(n,r,a,l){var f=id();return f=f===null?null:{parent:Ct._currentValue,pool:f},r.memoizedState={baseLanes:a,cachePool:f},n!==null&&Tc(r,null),ud(),cy(r),n!==null&&cl(n,r,l,!0),null}function Uc(n,r){var a=r.ref;if(a===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(r.flags|=4194816)}}function Nd(n,r,a,l,f){return Ls(r),a=fd(n,r,a,l,void 0,f),l=dd(),n!==null&&!Vt?(md(n,r,f),Hi(n,r,f)):(je&&l&&Yf(r),r.flags|=1,jt(n,r,a,f),r.child)}function wy(n,r,a,l,f,d){return Ls(r),r.updateQueue=null,a=A_(r,l,a,f),b_(n),l=dd(),n!==null&&!Vt?(md(n,r,d),Hi(n,r,d)):(je&&l&&Yf(r),r.flags|=1,jt(n,r,a,d),r.child)}function Ry(n,r,a,l,f){if(Ls(r),r.stateNode===null){var d=Va,v=a.contextType;typeof v=="object"&&v!==null&&(d=Qt(v)),d=new a(l,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Cd,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=l,d.state=r.memoizedState,d.refs={},sd(r),v=a.contextType,d.context=typeof v=="object"&&v!==null?Qt(v):Va,d.state=r.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Id(r,a,v,l),d.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Cd.enqueueReplaceState(d,d.state,null),_l(r,l,d,f),gl(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(n===null){d=r.stateNode;var T=r.memoizedProps,I=zs(a,T);d.props=I;var z=d.context,Y=a.contextType;v=Va,typeof Y=="object"&&Y!==null&&(v=Qt(Y));var J=a.getDerivedStateFromProps;Y=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,Y||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||z!==v)&&fy(r,d,l,v),gr=!1;var j=r.memoizedState;d.state=j,_l(r,l,d,f),gl(),z=r.memoizedState,T||j!==z||gr?(typeof J=="function"&&(Id(r,a,J,l),z=r.memoizedState),(I=gr||hy(r,a,I,l,j,z,v))?(Y||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=z),d.props=l,d.state=z,d.context=v,l=I):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{d=r.stateNode,ad(n,r),v=r.memoizedProps,Y=zs(a,v),d.props=Y,J=r.pendingProps,j=d.context,z=a.contextType,I=Va,typeof z=="object"&&z!==null&&(I=Qt(z)),T=a.getDerivedStateFromProps,(z=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==J||j!==I)&&fy(r,d,l,I),gr=!1,j=r.memoizedState,d.state=j,_l(r,l,d,f),gl();var H=r.memoizedState;v!==J||j!==H||gr||n!==null&&n.dependencies!==null&&vc(n.dependencies)?(typeof T=="function"&&(Id(r,a,T,l),H=r.memoizedState),(Y=gr||hy(r,a,Y,l,j,H,I)||n!==null&&n.dependencies!==null&&vc(n.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,H,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,H,I)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===n.memoizedProps&&j===n.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&j===n.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=H),d.props=l,d.state=H,d.context=I,l=Y):(typeof d.componentDidUpdate!="function"||v===n.memoizedProps&&j===n.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&j===n.memoizedState||(r.flags|=1024),l=!1)}return d=l,Uc(n,r),l=(r.flags&128)!==0,d||l?(d=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,n!==null&&l?(r.child=Fa(r,n.child,null,f),r.child=Fa(r,null,a,f)):jt(n,r,a,f),r.memoizedState=d.state,n=r.child):n=Hi(n,r,f),n}function Iy(n,r,a,l){return ll(),r.flags|=256,jt(n,r,a,l),r.child}var Od={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Md(n){return{baseLanes:n,cachePool:m_()}}function Pd(n,r,a){return n=n!==null?n.childLanes&~a:0,r&&(n|=On),n}function Cy(n,r,a){var l=r.pendingProps,f=!1,d=(r.flags&128)!==0,v;if((v=d)||(v=n!==null&&n.memoizedState===null?!1:(Dt.current&2)!==0),v&&(f=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,n===null){if(je){if(f?Er(r):Tr(),je){var T=ht,I;if(I=T){e:{for(I=T,T=ai;I.nodeType!==8;){if(!T){T=null;break e}if(I=Hn(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(r.memoizedState={dehydrated:T,treeContext:Ms!==null?{id:xi,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},I=dn(18,null,null,0),I.stateNode=T,I.return=r,r.child=I,sn=r,ht=null,I=!0):I=!1}I||ks(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return gm(T)?r.lanes=32:r.lanes=536870912,null;ji(r)}return T=l.children,l=l.fallback,f?(Tr(),f=r.mode,T=Bc({mode:"hidden",children:T},f),l=Os(l,f,a,null),T.return=r,l.return=r,T.sibling=l,r.child=T,f=r.child,f.memoizedState=Md(a),f.childLanes=Pd(n,v,a),r.memoizedState=Od,l):(Er(r),Vd(r,T))}if(I=n.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(d)r.flags&256?(Er(r),r.flags&=-257,r=kd(n,r,a)):r.memoizedState!==null?(Tr(),r.child=n.child,r.flags|=128,r=null):(Tr(),f=l.fallback,T=r.mode,l=Bc({mode:"visible",children:l.children},T),f=Os(f,T,a,null),f.flags|=2,l.return=r,f.return=r,l.sibling=f,r.child=l,Fa(r,n.child,null,a),l=r.child,l.memoizedState=Md(a),l.childLanes=Pd(n,v,a),r.memoizedState=Od,r=f);else if(Er(r),gm(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var z=v.dgst;v=z,l=Error(s(419)),l.stack="",l.digest=v,ul({value:l,source:null,stack:null}),r=kd(n,r,a)}else if(Vt||cl(n,r,a,!1),v=(a&n.childLanes)!==0,Vt||v){if(v=nt,v!==null&&(l=a&-a,l=(l&42)!==0?1:lr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,Pa(n,l),yn(v,n,l),vy;T.data==="$?"||Zd(),r=kd(n,r,a)}else T.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=I.treeContext,ht=Hn(T.nextSibling),sn=r,je=!0,Vs=null,ai=!1,n!==null&&(Cn[Dn++]=xi,Cn[Dn++]=Li,Cn[Dn++]=Ms,xi=n.id,Li=n.overflow,Ms=r),r=Vd(r,l.children),r.flags|=4096);return r}return f?(Tr(),f=l.fallback,T=r.mode,I=n.child,z=I.sibling,l=ki(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,z!==null?f=ki(z,f):(f=Os(f,T,a,null),f.flags|=2),f.return=r,l.return=r,l.sibling=f,r.child=l,l=f,f=r.child,T=n.child.memoizedState,T===null?T=Md(a):(I=T.cachePool,I!==null?(z=Ct._currentValue,I=I.parent!==z?{parent:z,pool:z}:I):I=m_(),T={baseLanes:T.baseLanes|a,cachePool:I}),f.memoizedState=T,f.childLanes=Pd(n,v,a),r.memoizedState=Od,l):(Er(r),a=n.child,n=a.sibling,a=ki(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,n!==null&&(v=r.deletions,v===null?(r.deletions=[n],r.flags|=16):v.push(n)),r.child=a,r.memoizedState=null,a)}function Vd(n,r){return r=Bc({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Bc(n,r){return n=dn(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function kd(n,r,a){return Fa(r,n.child,null,a),n=Vd(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Dy(n,r,a){n.lanes|=r;var l=n.alternate;l!==null&&(l.lanes|=r),Zf(n.return,r,a)}function xd(n,r,a,l,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=f)}function Ny(n,r,a){var l=r.pendingProps,f=l.revealOrder,d=l.tail;if(jt(n,r,l.children,a),l=Dt.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dy(n,a,r);else if(n.tag===19)Dy(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(te(Dt,l),f){case"forwards":for(a=r.child,f=null;a!==null;)n=a.alternate,n!==null&&kc(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=r.child,r.child=null):(f=a.sibling,a.sibling=null),xd(r,!1,f,a,d);break;case"backwards":for(a=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&kc(n)===null){r.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}xd(r,!0,a,null,d);break;case"together":xd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Hi(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Rr|=r.lanes,(a&r.childLanes)===0)if(n!==null){if(cl(n,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,a=ki(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ki(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Ld(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&vc(n)))}function ew(n,r,a){switch(r.tag){case 3:tt(r,r.stateNode.containerInfo),pr(r,Ct,n.memoizedState.cache),ll();break;case 27:case 5:or(r);break;case 4:tt(r,r.stateNode.containerInfo);break;case 10:pr(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Er(r),r.flags|=128,null):(a&r.child.childLanes)!==0?Cy(n,r,a):(Er(r),n=Hi(n,r,a),n!==null?n.sibling:null);Er(r);break;case 19:var f=(n.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(cl(n,r,a,!1),l=(a&r.childLanes)!==0),f){if(l)return Ny(n,r,a);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),te(Dt,Dt.current),l)break;return null;case 22:case 23:return r.lanes=0,by(n,r,a);case 24:pr(r,Ct,n.memoizedState.cache)}return Hi(n,r,a)}function Oy(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps)Vt=!0;else{if(!Ld(n,a)&&(r.flags&128)===0)return Vt=!1,ew(n,r,a);Vt=(n.flags&131072)!==0}else Vt=!1,je&&(r.flags&1048576)!==0&&o_(r,yc,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var l=r.elementType,f=l._init;if(l=f(l._payload),r.type=l,typeof l=="function")Gf(l)?(n=zs(l,n),r.tag=1,r=Ry(null,r,l,n,a)):(r.tag=0,r=Nd(null,r,l,n,a));else{if(l!=null){if(f=l.$$typeof,f===de){r.tag=11,r=Ey(null,r,l,n,a);break e}else if(f===M){r.tag=14,r=Ty(null,r,l,n,a);break e}}throw r=Ut(l)||l,Error(s(306,r,""))}}return r;case 0:return Nd(n,r,r.type,r.pendingProps,a);case 1:return l=r.type,f=zs(l,r.pendingProps),Ry(n,r,l,f,a);case 3:e:{if(tt(r,r.stateNode.containerInfo),n===null)throw Error(s(387));l=r.pendingProps;var d=r.memoizedState;f=d.element,ad(n,r),_l(r,l,null,a);var v=r.memoizedState;if(l=v.cache,pr(r,Ct,l),l!==d.cache&&ed(r,[Ct],a,!0),gl(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=Iy(n,r,l,a);break e}else if(l!==f){f=Rn(Error(s(424)),r),ul(f),r=Iy(n,r,l,a);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(ht=Hn(n.firstChild),sn=r,je=!0,Vs=null,ai=!0,a=uy(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ll(),l===f){r=Hi(n,r,a);break e}jt(n,r,l,a)}r=r.child}return r;case 26:return Uc(n,r),n===null?(a=kv(r.type,null,r.pendingProps,null))?r.memoizedState=a:je||(a=r.type,n=r.pendingProps,l=Zc(be.current).createElement(a),l[wt]=r,l[_t]=n,qt(l,a,n),dt(l),r.stateNode=l):r.memoizedState=kv(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return or(r),n===null&&je&&(l=r.stateNode=Mv(r.type,r.pendingProps,be.current),sn=r,ai=!0,f=ht,Nr(r.type)?(_m=f,ht=Hn(l.firstChild)):ht=f),jt(n,r,r.pendingProps.children,a),Uc(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&je&&((f=l=ht)&&(l=Cw(l,r.type,r.pendingProps,ai),l!==null?(r.stateNode=l,sn=r,ht=Hn(l.firstChild),ai=!1,f=!0):f=!1),f||ks(r)),or(r),f=r.type,d=r.pendingProps,v=n!==null?n.memoizedProps:null,l=d.children,dm(f,d)?l=null:v!==null&&dm(f,v)&&(r.flags|=32),r.memoizedState!==null&&(f=fd(n,r,GA,null,null,a),Bl._currentValue=f),Uc(n,r),jt(n,r,l,a),r.child;case 6:return n===null&&je&&((n=a=ht)&&(a=Dw(a,r.pendingProps,ai),a!==null?(r.stateNode=a,sn=r,ht=null,n=!0):n=!1),n||ks(r)),null;case 13:return Cy(n,r,a);case 4:return tt(r,r.stateNode.containerInfo),l=r.pendingProps,n===null?r.child=Fa(r,null,l,a):jt(n,r,l,a),r.child;case 11:return Ey(n,r,r.type,r.pendingProps,a);case 7:return jt(n,r,r.pendingProps,a),r.child;case 8:return jt(n,r,r.pendingProps.children,a),r.child;case 12:return jt(n,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,pr(r,r.type,l.value),jt(n,r,l.children,a),r.child;case 9:return f=r.type._context,l=r.pendingProps.children,Ls(r),f=Qt(f),l=l(f),r.flags|=1,jt(n,r,l,a),r.child;case 14:return Ty(n,r,r.type,r.pendingProps,a);case 15:return Sy(n,r,r.type,r.pendingProps,a);case 19:return Ny(n,r,a);case 31:return l=r.pendingProps,a=r.mode,l={mode:l.mode,children:l.children},n===null?(a=Bc(l,a),a.ref=r.ref,r.child=a,a.return=r,r=a):(a=ki(n.child,l),a.ref=r.ref,r.child=a,a.return=r,r=a),r;case 22:return by(n,r,a);case 24:return Ls(r),l=Qt(Ct),n===null?(f=id(),f===null&&(f=nt,d=td(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=a),f=d),r.memoizedState={parent:l,cache:f},sd(r),pr(r,Ct,f)):((n.lanes&a)!==0&&(ad(n,r),_l(r,null,null,a),gl()),f=n.memoizedState,d=r.memoizedState,f.parent!==l?(f={parent:l,cache:l},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),pr(r,Ct,l)):(l=d.cache,pr(r,Ct,l),l!==f.cache&&ed(r,[Ct],a,!0))),jt(n,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function qi(n){n.flags|=4}function My(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!zv(r)){if(r=Nn.current,r!==null&&((Le&4194048)===Le?oi!==null:(Le&62914560)!==Le&&(Le&536870912)===0||r!==oi))throw ml=rd,p_;n.flags|=8192}}function zc(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?jo():536870912,n.lanes|=r,Qa|=r)}function Al(n,r){if(!je)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(r)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,r}function tw(n,r,a){var l=r.pendingProps;switch(Xf(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(r),null;case 1:return ot(r),null;case 3:return a=r.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Bi(Ct),Qn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(ol(r)?qi(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,c_())),ot(r),null;case 26:return a=r.memoizedState,n===null?(qi(r),a!==null?(ot(r),My(r,a)):(ot(r),r.flags&=-16777217)):a?a!==n.memoizedState?(qi(r),ot(r),My(r,a)):(ot(r),r.flags&=-16777217):(n.memoizedProps!==l&&qi(r),ot(r),r.flags&=-16777217),null;case 27:Si(r),a=be.current;var f=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==l&&qi(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return ot(r),null}n=ge.current,ol(r)?l_(r):(n=Mv(f,l,a),r.stateNode=n,qi(r))}return ot(r),null;case 5:if(Si(r),a=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==l&&qi(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return ot(r),null}if(n=ge.current,ol(r))l_(r);else{switch(f=Zc(be.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}n[wt]=r,n[_t]=l;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=n;e:switch(qt(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&qi(r)}}return ot(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==l&&qi(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(s(166));if(n=be.current,ol(r)){if(n=r.stateNode,a=r.memoizedProps,l=null,f=sn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[wt]=r,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||wv(n.nodeValue,a)),n||ks(r)}else n=Zc(n).createTextNode(l),n[wt]=r,r.stateNode=n}return ot(r),null;case 13:if(l=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=ol(r),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[wt]=r}else ll(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;ot(r),f=!1}else f=c_(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(ji(r),r):(ji(r),null)}if(ji(r),(r.flags&128)!==0)return r.lanes=a,r;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=r.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)}return a!==n&&a&&(r.child.flags|=8192),zc(r,r.updateQueue),ot(r),null;case 4:return Qn(),n===null&&lm(r.stateNode.containerInfo),ot(r),null;case 10:return Bi(r.type),ot(r),null;case 19:if(oe(Dt),f=r.memoizedState,f===null)return ot(r),null;if(l=(r.flags&128)!==0,d=f.rendering,d===null)if(l)Al(f,!1);else{if(ft!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(d=kc(n),d!==null){for(r.flags|=128,Al(f,!1),n=d.updateQueue,r.updateQueue=n,zc(r,n),r.subtreeFlags=0,n=a,a=r.child;a!==null;)a_(a,n),a=a.sibling;return te(Dt,Dt.current&1|2),r.child}n=n.sibling}f.tail!==null&&En()>qc&&(r.flags|=128,l=!0,Al(f,!1),r.lanes=4194304)}else{if(!l)if(n=kc(d),n!==null){if(r.flags|=128,l=!0,n=n.updateQueue,r.updateQueue=n,zc(r,n),Al(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!je)return ot(r),null}else 2*En()-f.renderingStartTime>qc&&a!==536870912&&(r.flags|=128,l=!0,Al(f,!1),r.lanes=4194304);f.isBackwards?(d.sibling=r.child,r.child=d):(n=f.last,n!==null?n.sibling=d:r.child=d,f.last=d)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=En(),r.sibling=null,n=Dt.current,te(Dt,l?n&1|2:n&1),r):(ot(r),null);case 22:case 23:return ji(r),cd(),l=r.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(ot(r),r.subtreeFlags&6&&(r.flags|=8192)):ot(r),a=r.updateQueue,a!==null&&zc(r,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),n!==null&&oe(Us),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),Bi(Ct),ot(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function nw(n,r){switch(Xf(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Bi(Ct),Qn(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Si(r),null;case 13:if(ji(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));ll()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return oe(Dt),null;case 4:return Qn(),null;case 10:return Bi(r.type),null;case 22:case 23:return ji(r),cd(),n!==null&&oe(Us),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Bi(Ct),null;case 25:return null;default:return null}}function Py(n,r){switch(Xf(r),r.tag){case 3:Bi(Ct),Qn();break;case 26:case 27:case 5:Si(r);break;case 4:Qn();break;case 13:ji(r);break;case 19:oe(Dt);break;case 10:Bi(r.type);break;case 22:case 23:ji(r),cd(),n!==null&&oe(Us);break;case 24:Bi(Ct)}}function wl(n,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&n)===n){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==f)}}catch(T){Je(r,r.return,T)}}function Sr(n,r,a){try{var l=r.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&n)===n){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,f=r;var I=a,z=T;try{z()}catch(Y){Je(f,I,Y)}}}l=l.next}while(l!==d)}}catch(Y){Je(r,r.return,Y)}}function Vy(n){var r=n.updateQueue;if(r!==null){var a=n.stateNode;try{T_(r,a)}catch(l){Je(n,n.return,l)}}}function ky(n,r,a){a.props=zs(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){Je(n,r,l)}}function Rl(n,r){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(f){Je(n,r,f)}}function li(n,r){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){Je(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){Je(n,r,f)}else a.current=null}function xy(n){var r=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){Je(n,n.return,f)}}function Ud(n,r,a){try{var l=n.stateNode;bw(l,n.type,a,r),l[_t]=r}catch(f){Je(n,n.return,f)}}function Ly(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Nr(n.type)||n.tag===4}function Bd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ly(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Nr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function zd(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(n),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Jc));else if(l!==4&&(l===27&&Nr(n.type)&&(a=n.stateNode,r=null),n=n.child,n!==null))for(zd(n,r,a),n=n.sibling;n!==null;)zd(n,r,a),n=n.sibling}function jc(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(l!==4&&(l===27&&Nr(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(jc(n,r,a),n=n.sibling;n!==null;)jc(n,r,a),n=n.sibling}function Uy(n){var r=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);qt(r,l,a),r[wt]=n,r[_t]=a}catch(d){Je(n,n.return,d)}}var Fi=!1,pt=!1,jd=!1,By=typeof WeakSet=="function"?WeakSet:Set,kt=null;function iw(n,r){if(n=n.containerInfo,hm=sh,n=Xg(n),Bf(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,T=-1,I=-1,z=0,Y=0,J=n,j=null;t:for(;;){for(var H;J!==a||f!==0&&J.nodeType!==3||(T=v+f),J!==d||l!==0&&J.nodeType!==3||(I=v+l),J.nodeType===3&&(v+=J.nodeValue.length),(H=J.firstChild)!==null;)j=J,J=H;for(;;){if(J===n)break t;if(j===a&&++z===f&&(T=v),j===d&&++Y===l&&(I=v),(H=J.nextSibling)!==null)break;J=j,j=J.parentNode}J=H}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(fm={focusedElem:n,selectionRange:a},sh=!1,kt=r;kt!==null;)if(r=kt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,kt=n;else for(;kt!==null;){switch(r=kt,d=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,a=r,f=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Te=zs(a.type,f,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(Te,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(_e){Je(a,a.return,_e)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,a=n.nodeType,a===9)pm(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":pm(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,kt=n;break}kt=r.return}}function zy(n,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:br(n,a),l&4&&wl(5,a);break;case 1:if(br(n,a),l&4)if(n=a.stateNode,r===null)try{n.componentDidMount()}catch(v){Je(a,a.return,v)}else{var f=zs(a.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(v){Je(a,a.return,v)}}l&64&&Vy(a),l&512&&Rl(a,a.return);break;case 3:if(br(n,a),l&64&&(n=a.updateQueue,n!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{T_(n,r)}catch(v){Je(a,a.return,v)}}break;case 27:r===null&&l&4&&Uy(a);case 26:case 5:br(n,a),r===null&&l&4&&xy(a),l&512&&Rl(a,a.return);break;case 12:br(n,a);break;case 13:br(n,a),l&4&&qy(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=fw.bind(null,a),Nw(n,a))));break;case 22:if(l=a.memoizedState!==null||Fi,!l){r=r!==null&&r.memoizedState!==null||pt,f=Fi;var d=pt;Fi=l,(pt=r)&&!d?Ar(n,a,(a.subtreeFlags&8772)!==0):br(n,a),Fi=f,pt=d}break;case 30:break;default:br(n,a)}}function jy(n){var r=n.alternate;r!==null&&(n.alternate=null,jy(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&hr(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var st=null,on=!1;function $i(n,r,a){for(a=a.child;a!==null;)Hy(n,r,a),a=a.sibling}function Hy(n,r,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:pt||li(a,r),$i(n,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pt||li(a,r);var l=st,f=on;Nr(a.type)&&(st=a.stateNode,on=!1),$i(n,r,a),kl(a.stateNode),st=l,on=f;break;case 5:pt||li(a,r);case 6:if(l=st,f=on,st=null,$i(n,r,a),st=l,on=f,st!==null)if(on)try{(st.nodeType===9?st.body:st.nodeName==="HTML"?st.ownerDocument.body:st).removeChild(a.stateNode)}catch(d){Je(a,r,d)}else try{st.removeChild(a.stateNode)}catch(d){Je(a,r,d)}break;case 18:st!==null&&(on?(n=st,Nv(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),ql(n)):Nv(st,a.stateNode));break;case 4:l=st,f=on,st=a.stateNode.containerInfo,on=!0,$i(n,r,a),st=l,on=f;break;case 0:case 11:case 14:case 15:pt||Sr(2,a,r),pt||Sr(4,a,r),$i(n,r,a);break;case 1:pt||(li(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&ky(a,r,l)),$i(n,r,a);break;case 21:$i(n,r,a);break;case 22:pt=(l=pt)||a.memoizedState!==null,$i(n,r,a),pt=l;break;default:$i(n,r,a)}}function qy(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{ql(n)}catch(a){Je(r,r.return,a)}}function rw(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new By),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new By),r;default:throw Error(s(435,n.tag))}}function Hd(n,r){var a=rw(n);r.forEach(function(l){var f=dw.bind(null,n,l);a.has(l)||(a.add(l),l.then(f,f))})}function mn(n,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],d=n,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Nr(T.type)){st=T.stateNode,on=!1;break e}break;case 5:st=T.stateNode,on=!1;break e;case 3:case 4:st=T.stateNode.containerInfo,on=!0;break e}T=T.return}if(st===null)throw Error(s(160));Hy(d,v,f),st=null,on=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Fy(r,n),r=r.sibling}var jn=null;function Fy(n,r){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:mn(r,n),pn(n),l&4&&(Sr(3,n,n.return),wl(3,n),Sr(5,n,n.return));break;case 1:mn(r,n),pn(n),l&512&&(pt||a===null||li(a,a.return)),l&64&&Fi&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=jn;if(mn(r,n),pn(n),l&512&&(pt||a===null||li(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[ps]||d[wt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),qt(d,l,a),d[wt]=n,dt(d),l=d;break e;case"link":var v=Uv("link","href",f).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}d=f.createElement(l),qt(d,l,a),f.head.appendChild(d);break;case"meta":if(v=Uv("meta","content",f).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}d=f.createElement(l),qt(d,l,a),f.head.appendChild(d);break;default:throw Error(s(468,l))}d[wt]=n,dt(d),l=d}n.stateNode=l}else Bv(f,n.type,n.stateNode);else n.stateNode=Lv(f,l,n.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Bv(f,n.type,n.stateNode):Lv(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Ud(n,n.memoizedProps,a.memoizedProps)}break;case 27:mn(r,n),pn(n),l&512&&(pt||a===null||li(a,a.return)),a!==null&&l&4&&Ud(n,n.memoizedProps,a.memoizedProps);break;case 5:if(mn(r,n),pn(n),l&512&&(pt||a===null||li(a,a.return)),n.flags&32){f=n.stateNode;try{Sn(f,"")}catch(H){Je(n,n.return,H)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,Ud(n,f,a!==null?a.memoizedProps:f)),l&1024&&(jd=!0);break;case 6:if(mn(r,n),pn(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(H){Je(n,n.return,H)}}break;case 3:if(nh=null,f=jn,jn=eh(r.containerInfo),mn(r,n),jn=f,pn(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ql(r.containerInfo)}catch(H){Je(n,n.return,H)}jd&&(jd=!1,$y(n));break;case 4:l=jn,jn=eh(n.stateNode.containerInfo),mn(r,n),pn(n),jn=l;break;case 12:mn(r,n),pn(n);break;case 13:mn(r,n),pn(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qd=En()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Hd(n,l)));break;case 22:f=n.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,z=Fi,Y=pt;if(Fi=z||f,pt=Y||I,mn(r,n),pt=Y,Fi=z,pn(n),l&8192)e:for(r=n.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(a===null||I||Fi||pt||js(n)),a=null,r=n;;){if(r.tag===5||r.tag===26){if(a===null){I=a=r;try{if(d=I.stateNode,f)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=I.stateNode;var J=I.memoizedProps.style,j=J!=null&&J.hasOwnProperty("display")?J.display:null;T.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(H){Je(I,I.return,H)}}}else if(r.tag===6){if(a===null){I=r;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(H){Je(I,I.return,H)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Hd(n,a))));break;case 19:mn(r,n),pn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Hd(n,l)));break;case 30:break;case 21:break;default:mn(r,n),pn(n)}}function pn(n){var r=n.flags;if(r&2){try{for(var a,l=n.return;l!==null;){if(Ly(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,d=Bd(n);jc(n,d,f);break;case 5:var v=a.stateNode;a.flags&32&&(Sn(v,""),a.flags&=-33);var T=Bd(n);jc(n,T,v);break;case 3:case 4:var I=a.stateNode.containerInfo,z=Bd(n);zd(n,z,I);break;default:throw Error(s(161))}}catch(Y){Je(n,n.return,Y)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function $y(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;$y(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function br(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)zy(n,r.alternate,r),r=r.sibling}function js(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Sr(4,r,r.return),js(r);break;case 1:li(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&ky(r,r.return,a),js(r);break;case 27:kl(r.stateNode);case 26:case 5:li(r,r.return),js(r);break;case 22:r.memoizedState===null&&js(r);break;case 30:js(r);break;default:js(r)}n=n.sibling}}function Ar(n,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,f=n,d=r,v=d.flags;switch(d.tag){case 0:case 11:case 15:Ar(f,d,a),wl(4,d);break;case 1:if(Ar(f,d,a),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(z){Je(l,l.return,z)}if(l=d,f=l.updateQueue,f!==null){var T=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)E_(I[f],T)}catch(z){Je(l,l.return,z)}}a&&v&64&&Vy(d),Rl(d,d.return);break;case 27:Uy(d);case 26:case 5:Ar(f,d,a),a&&l===null&&v&4&&xy(d),Rl(d,d.return);break;case 12:Ar(f,d,a);break;case 13:Ar(f,d,a),a&&v&4&&qy(f,d);break;case 22:d.memoizedState===null&&Ar(f,d,a),Rl(d,d.return);break;case 30:break;default:Ar(f,d,a)}r=r.sibling}}function qd(n,r){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&hl(a))}function Fd(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&hl(n))}function ui(n,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Gy(n,r,a,l),r=r.sibling}function Gy(n,r,a,l){var f=r.flags;switch(r.tag){case 0:case 11:case 15:ui(n,r,a,l),f&2048&&wl(9,r);break;case 1:ui(n,r,a,l);break;case 3:ui(n,r,a,l),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&hl(n)));break;case 12:if(f&2048){ui(n,r,a,l),n=r.stateNode;try{var d=r.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(I){Je(r,r.return,I)}}else ui(n,r,a,l);break;case 13:ui(n,r,a,l);break;case 23:break;case 22:d=r.stateNode,v=r.alternate,r.memoizedState!==null?d._visibility&2?ui(n,r,a,l):Il(n,r):d._visibility&2?ui(n,r,a,l):(d._visibility|=2,$a(n,r,a,l,(r.subtreeFlags&10256)!==0)),f&2048&&qd(v,r);break;case 24:ui(n,r,a,l),f&2048&&Fd(r.alternate,r);break;default:ui(n,r,a,l)}}function $a(n,r,a,l,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=n,v=r,T=a,I=l,z=v.flags;switch(v.tag){case 0:case 11:case 15:$a(d,v,T,I,f),wl(8,v);break;case 23:break;case 22:var Y=v.stateNode;v.memoizedState!==null?Y._visibility&2?$a(d,v,T,I,f):Il(d,v):(Y._visibility|=2,$a(d,v,T,I,f)),f&&z&2048&&qd(v.alternate,v);break;case 24:$a(d,v,T,I,f),f&&z&2048&&Fd(v.alternate,v);break;default:$a(d,v,T,I,f)}r=r.sibling}}function Il(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=n,l=r,f=l.flags;switch(l.tag){case 22:Il(a,l),f&2048&&qd(l.alternate,l);break;case 24:Il(a,l),f&2048&&Fd(l.alternate,l);break;default:Il(a,l)}r=r.sibling}}var Cl=8192;function Ga(n){if(n.subtreeFlags&Cl)for(n=n.child;n!==null;)Ky(n),n=n.sibling}function Ky(n){switch(n.tag){case 26:Ga(n),n.flags&Cl&&n.memoizedState!==null&&qw(jn,n.memoizedState,n.memoizedProps);break;case 5:Ga(n);break;case 3:case 4:var r=jn;jn=eh(n.stateNode.containerInfo),Ga(n),jn=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=Cl,Cl=16777216,Ga(n),Cl=r):Ga(n));break;default:Ga(n)}}function Qy(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Dl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];kt=l,Xy(l,n)}Qy(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yy(n),n=n.sibling}function Yy(n){switch(n.tag){case 0:case 11:case 15:Dl(n),n.flags&2048&&Sr(9,n,n.return);break;case 3:Dl(n);break;case 12:Dl(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Hc(n)):Dl(n);break;default:Dl(n)}}function Hc(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];kt=l,Xy(l,n)}Qy(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Sr(8,r,r.return),Hc(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,Hc(r));break;default:Hc(r)}n=n.sibling}}function Xy(n,r){for(;kt!==null;){var a=kt;switch(a.tag){case 0:case 11:case 15:Sr(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:hl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,kt=l;else e:for(a=n;kt!==null;){l=kt;var f=l.sibling,d=l.return;if(jy(l),l===a){kt=null;break e}if(f!==null){f.return=d,kt=f;break e}kt=d}}}var sw={getCacheForType:function(n){var r=Qt(Ct),a=r.data.get(n);return a===void 0&&(a=n(),r.data.set(n,a)),a}},aw=typeof WeakMap=="function"?WeakMap:Map,Ge=0,nt=null,Oe=null,Le=0,Ke=0,gn=null,wr=!1,Ka=!1,$d=!1,Gi=0,ft=0,Rr=0,Hs=0,Gd=0,On=0,Qa=0,Nl=null,ln=null,Kd=!1,Qd=0,qc=1/0,Fc=null,Ir=null,Ht=0,Cr=null,Ya=null,Xa=0,Yd=0,Xd=null,Wy=null,Ol=0,Wd=null;function _n(){if((Ge&2)!==0&&Le!==0)return Le&-Le;if(Q.T!==null){var n=La;return n!==0?n:rm()}return ur()}function Jy(){On===0&&(On=(Le&536870912)===0||je?zo():536870912);var n=Nn.current;return n!==null&&(n.flags|=32),On}function yn(n,r,a){(n===nt&&(Ke===2||Ke===9)||n.cancelPendingCommit!==null)&&(Wa(n,0),Dr(n,Le,On,!1)),Ai(n,a),((Ge&2)===0||n!==nt)&&(n===nt&&((Ge&2)===0&&(Hs|=a),ft===4&&Dr(n,Le,On,!1)),ci(n))}function Zy(n,r,a){if((Ge&6)!==0)throw Error(s(327));var l=!a&&(r&124)===0&&(r&n.expiredLanes)===0||ms(n,r),f=l?uw(n,r):em(n,r,!0),d=l;do{if(f===0){Ka&&!l&&Dr(n,r,0,!1);break}else{if(a=n.current.alternate,d&&!ow(a)){f=em(n,r,!1),d=!1;continue}if(f===2){if(d=r,n.errorRecoveryDisabledLanes&d)var v=0;else v=n.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var T=n;f=Nl;var I=T.current.memoizedState.isDehydrated;if(I&&(Wa(T,v).flags|=256),v=em(T,v,!1),v!==2){if($d&&!I){T.errorRecoveryDisabledLanes|=d,Hs|=d,f=4;break e}d=ln,ln=f,d!==null&&(ln===null?ln=d:ln.push.apply(ln,d))}f=v}if(d=!1,f!==2)continue}}if(f===1){Wa(n,0),Dr(n,r,0,!0);break}e:{switch(l=n,d=f,d){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Dr(l,r,On,!wr);break e;case 2:ln=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=Qd+300-En(),10<f)){if(Dr(l,r,On,!wr),ma(l,0,!0)!==0)break e;l.timeoutHandle=Cv(ev.bind(null,l,a,ln,Fc,Kd,r,On,Hs,Qa,wr,d,2,-0,0),f);break e}ev(l,a,ln,Fc,Kd,r,On,Hs,Qa,wr,d,0,-0,0)}}break}while(!0);ci(n)}function ev(n,r,a,l,f,d,v,T,I,z,Y,J,j,H){if(n.timeoutHandle=-1,J=r.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Ul={stylesheets:null,count:0,unsuspend:Hw},Ky(r),J=Fw(),J!==null)){n.cancelPendingCommit=J(ov.bind(null,n,r,d,a,l,f,v,T,I,Y,1,j,H)),Dr(n,d,v,!z);return}ov(n,r,d,a,l,f,v,T,I)}function ow(n){for(var r=n;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],d=f.getSnapshot;f=f.value;try{if(!fn(d(),f))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Dr(n,r,a,l){r&=~Gd,r&=~Hs,n.suspendedLanes|=r,n.pingedLanes&=~r,l&&(n.warmLanes|=r),l=n.expirationTimes;for(var f=r;0<f;){var d=31-Kt(f),v=1<<d;l[d]=-1,f&=~v}a!==0&&Yn(n,a,r)}function $c(){return(Ge&6)===0?(Ml(0),!1):!0}function Jd(){if(Oe!==null){if(Ke===0)var n=Oe.return;else n=Oe,Ui=xs=null,pd(n),qa=null,Sl=0,n=Oe;for(;n!==null;)Py(n.alternate,n),n=n.return;Oe=null}}function Wa(n,r){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,ww(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Jd(),nt=n,Oe=a=ki(n.current,null),Le=r,Ke=0,gn=null,wr=!1,Ka=ms(n,r),$d=!1,Qa=On=Gd=Hs=Rr=ft=0,ln=Nl=null,Kd=!1,(r&8)!==0&&(r|=r&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=r;0<l;){var f=31-Kt(l),d=1<<f;r|=n[f],l&=~d}return Gi=r,dc(),a}function tv(n,r){Ie=null,Q.H=Mc,r===dl||r===Sc?(r=y_(),Ke=3):r===p_?(r=y_(),Ke=4):Ke=r===vy?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,gn=r,Oe===null&&(ft=1,Lc(n,Rn(r,n.current)))}function nv(){var n=Q.H;return Q.H=Mc,n===null?Mc:n}function iv(){var n=Q.A;return Q.A=sw,n}function Zd(){ft=4,wr||(Le&4194048)!==Le&&Nn.current!==null||(Ka=!0),(Rr&134217727)===0&&(Hs&134217727)===0||nt===null||Dr(nt,Le,On,!1)}function em(n,r,a){var l=Ge;Ge|=2;var f=nv(),d=iv();(nt!==n||Le!==r)&&(Fc=null,Wa(n,r)),r=!1;var v=ft;e:do try{if(Ke!==0&&Oe!==null){var T=Oe,I=gn;switch(Ke){case 8:Jd(),v=6;break e;case 3:case 2:case 9:case 6:Nn.current===null&&(r=!0);var z=Ke;if(Ke=0,gn=null,Ja(n,T,I,z),a&&Ka){v=0;break e}break;default:z=Ke,Ke=0,gn=null,Ja(n,T,I,z)}}lw(),v=ft;break}catch(Y){tv(n,Y)}while(!0);return r&&n.shellSuspendCounter++,Ui=xs=null,Ge=l,Q.H=f,Q.A=d,Oe===null&&(nt=null,Le=0,dc()),v}function lw(){for(;Oe!==null;)rv(Oe)}function uw(n,r){var a=Ge;Ge|=2;var l=nv(),f=iv();nt!==n||Le!==r?(Fc=null,qc=En()+500,Wa(n,r)):Ka=ms(n,r);e:do try{if(Ke!==0&&Oe!==null){r=Oe;var d=gn;t:switch(Ke){case 1:Ke=0,gn=null,Ja(n,r,d,1);break;case 2:case 9:if(g_(d)){Ke=0,gn=null,sv(r);break}r=function(){Ke!==2&&Ke!==9||nt!==n||(Ke=7),ci(n)},d.then(r,r);break e;case 3:Ke=7;break e;case 4:Ke=5;break e;case 7:g_(d)?(Ke=0,gn=null,sv(r)):(Ke=0,gn=null,Ja(n,r,d,7));break;case 5:var v=null;switch(Oe.tag){case 26:v=Oe.memoizedState;case 5:case 27:var T=Oe;if(!v||zv(v)){Ke=0,gn=null;var I=T.sibling;if(I!==null)Oe=I;else{var z=T.return;z!==null?(Oe=z,Gc(z)):Oe=null}break t}}Ke=0,gn=null,Ja(n,r,d,5);break;case 6:Ke=0,gn=null,Ja(n,r,d,6);break;case 8:Jd(),ft=6;break e;default:throw Error(s(462))}}cw();break}catch(Y){tv(n,Y)}while(!0);return Ui=xs=null,Q.H=l,Q.A=f,Ge=a,Oe!==null?0:(nt=null,Le=0,dc(),ft)}function cw(){for(;Oe!==null&&!xo();)rv(Oe)}function rv(n){var r=Oy(n.alternate,n,Gi);n.memoizedProps=n.pendingProps,r===null?Gc(n):Oe=r}function sv(n){var r=n,a=r.alternate;switch(r.tag){case 15:case 0:r=wy(a,r,r.pendingProps,r.type,void 0,Le);break;case 11:r=wy(a,r,r.pendingProps,r.type.render,r.ref,Le);break;case 5:pd(r);default:Py(a,r),r=Oe=a_(r,Gi),r=Oy(a,r,Gi)}n.memoizedProps=n.pendingProps,r===null?Gc(n):Oe=r}function Ja(n,r,a,l){Ui=xs=null,pd(r),qa=null,Sl=0;var f=r.return;try{if(ZA(n,f,r,a,Le)){ft=1,Lc(n,Rn(a,n.current)),Oe=null;return}}catch(d){if(f!==null)throw Oe=f,d;ft=1,Lc(n,Rn(a,n.current)),Oe=null;return}r.flags&32768?(je||l===1?n=!0:Ka||(Le&536870912)!==0?n=!1:(wr=n=!0,(l===2||l===9||l===3||l===6)&&(l=Nn.current,l!==null&&l.tag===13&&(l.flags|=16384))),av(r,n)):Gc(r)}function Gc(n){var r=n;do{if((r.flags&32768)!==0){av(r,wr);return}n=r.return;var a=tw(r.alternate,r,Gi);if(a!==null){Oe=a;return}if(r=r.sibling,r!==null){Oe=r;return}Oe=r=n}while(r!==null);ft===0&&(ft=5)}function av(n,r){do{var a=nw(n.alternate,n);if(a!==null){a.flags&=32767,Oe=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(n=n.sibling,n!==null)){Oe=n;return}Oe=n=a}while(n!==null);ft=6,Oe=null}function ov(n,r,a,l,f,d,v,T,I){n.cancelPendingCommit=null;do Kc();while(Ht!==0);if((Ge&6)!==0)throw Error(s(327));if(r!==null){if(r===n.current)throw Error(s(177));if(d=r.lanes|r.childLanes,d|=Ff,Ho(n,a,d,v,T,I),n===nt&&(Oe=nt=null,Le=0),Ya=r,Cr=n,Xa=a,Yd=d,Xd=f,Wy=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,mw(cs,function(){return fv(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=Q.T,Q.T=null,f=ae.p,ae.p=2,v=Ge,Ge|=4;try{iw(n,r,a)}finally{Ge=v,ae.p=f,Q.T=l}}Ht=1,lv(),uv(),cv()}}function lv(){if(Ht===1){Ht=0;var n=Cr,r=Ya,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=Q.T,Q.T=null;var l=ae.p;ae.p=2;var f=Ge;Ge|=4;try{Fy(r,n);var d=fm,v=Xg(n.containerInfo),T=d.focusedElem,I=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&Yg(T.ownerDocument.documentElement,T)){if(I!==null&&Bf(T)){var z=I.start,Y=I.end;if(Y===void 0&&(Y=z),"selectionStart"in T)T.selectionStart=z,T.selectionEnd=Math.min(Y,T.value.length);else{var J=T.ownerDocument||document,j=J&&J.defaultView||window;if(j.getSelection){var H=j.getSelection(),Te=T.textContent.length,_e=Math.min(I.start,Te),We=I.end===void 0?_e:Math.min(I.end,Te);!H.extend&&_e>We&&(v=We,We=_e,_e=v);var x=Qg(T,_e),O=Qg(T,We);if(x&&O&&(H.rangeCount!==1||H.anchorNode!==x.node||H.anchorOffset!==x.offset||H.focusNode!==O.node||H.focusOffset!==O.offset)){var B=J.createRange();B.setStart(x.node,x.offset),H.removeAllRanges(),_e>We?(H.addRange(B),H.extend(O.node,O.offset)):(B.setEnd(O.node,O.offset),H.addRange(B))}}}}for(J=[],H=T;H=H.parentNode;)H.nodeType===1&&J.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<J.length;T++){var X=J[T];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}sh=!!hm,fm=hm=null}finally{Ge=f,ae.p=l,Q.T=a}}n.current=r,Ht=2}}function uv(){if(Ht===2){Ht=0;var n=Cr,r=Ya,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=Q.T,Q.T=null;var l=ae.p;ae.p=2;var f=Ge;Ge|=4;try{zy(n,r.alternate,r)}finally{Ge=f,ae.p=l,Q.T=a}}Ht=3}}function cv(){if(Ht===4||Ht===3){Ht=0,Hu();var n=Cr,r=Ya,a=Xa,l=Wy;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Ht=5:(Ht=0,Ya=Cr=null,hv(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Ir=null),pa(a),r=r.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(ct,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=Q.T,f=ae.p,ae.p=2,Q.T=null;try{for(var d=n.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{Q.T=r,ae.p=f}}(Xa&3)!==0&&Kc(),ci(n),f=n.pendingLanes,(a&4194090)!==0&&(f&42)!==0?n===Wd?Ol++:(Ol=0,Wd=n):Ol=0,Ml(0)}}function hv(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,hl(r)))}function Kc(n){return lv(),uv(),cv(),fv()}function fv(){if(Ht!==5)return!1;var n=Cr,r=Yd;Yd=0;var a=pa(Xa),l=Q.T,f=ae.p;try{ae.p=32>a?32:a,Q.T=null,a=Xd,Xd=null;var d=Cr,v=Xa;if(Ht=0,Ya=Cr=null,Xa=0,(Ge&6)!==0)throw Error(s(331));var T=Ge;if(Ge|=4,Yy(d.current),Gy(d,d.current,v,a),Ge=T,Ml(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(ct,d)}catch{}return!0}finally{ae.p=f,Q.T=l,hv(n,r)}}function dv(n,r,a){r=Rn(a,r),r=Dd(n.stateNode,r,2),n=yr(n,r,2),n!==null&&(Ai(n,2),ci(n))}function Je(n,r,a){if(n.tag===3)dv(n,n,a);else for(;r!==null;){if(r.tag===3){dv(r,n,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ir===null||!Ir.has(l))){n=Rn(a,n),a=_y(2),l=yr(r,a,2),l!==null&&(yy(a,l,r,n),Ai(l,2),ci(l));break}}r=r.return}}function tm(n,r,a){var l=n.pingCache;if(l===null){l=n.pingCache=new aw;var f=new Set;l.set(r,f)}else f=l.get(r),f===void 0&&(f=new Set,l.set(r,f));f.has(a)||($d=!0,f.add(a),n=hw.bind(null,n,r,a),r.then(n,n))}function hw(n,r,a){var l=n.pingCache;l!==null&&l.delete(r),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,nt===n&&(Le&a)===a&&(ft===4||ft===3&&(Le&62914560)===Le&&300>En()-Qd?(Ge&2)===0&&Wa(n,0):Gd|=a,Qa===Le&&(Qa=0)),ci(n)}function mv(n,r){r===0&&(r=jo()),n=Pa(n,r),n!==null&&(Ai(n,r),ci(n))}function fw(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),mv(n,a)}function dw(n,r){var a=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(r),mv(n,a)}function mw(n,r){return ls(n,r)}var Qc=null,Za=null,nm=!1,Yc=!1,im=!1,qs=0;function ci(n){n!==Za&&n.next===null&&(Za===null?Qc=Za=n:Za=Za.next=n),Yc=!0,nm||(nm=!0,gw())}function Ml(n,r){if(!im&&Yc){im=!0;do for(var a=!1,l=Qc;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Kt(42|n)+1)-1,d&=f&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,yv(l,d))}else d=Le,d=ma(l,l===nt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||ms(l,d)||(a=!0,yv(l,d));l=l.next}while(a);im=!1}}function pw(){pv()}function pv(){Yc=nm=!1;var n=0;qs!==0&&(Aw()&&(n=qs),qs=0);for(var r=En(),a=null,l=Qc;l!==null;){var f=l.next,d=gv(l,r);d===0?(l.next=null,a===null?Qc=f:a.next=f,f===null&&(Za=a)):(a=l,(n!==0||(d&3)!==0)&&(Yc=!0)),l=f}Ml(n)}function gv(n,r){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var v=31-Kt(d),T=1<<v,I=f[v];I===-1?((T&a)===0||(T&l)!==0)&&(f[v]=Bo(T,r)):I<=r&&(n.expiredLanes|=T),d&=~T}if(r=nt,a=Le,a=ma(n,n===r?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===r&&(Ke===2||Ke===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&us(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||ms(n,a)){if(r=a&-a,r===n.callbackPriority)return r;switch(l!==null&&us(l),pa(a)){case 2:case 8:a=fa;break;case 32:a=cs;break;case 268435456:a=da;break;default:a=cs}return l=_v.bind(null,n),a=ls(a,l),n.callbackPriority=r,n.callbackNode=a,r}return l!==null&&l!==null&&us(l),n.callbackPriority=2,n.callbackNode=null,2}function _v(n,r){if(Ht!==0&&Ht!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(Kc()&&n.callbackNode!==a)return null;var l=Le;return l=ma(n,n===nt?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Zy(n,l,r),gv(n,En()),n.callbackNode!=null&&n.callbackNode===a?_v.bind(null,n):null)}function yv(n,r){if(Kc())return null;Zy(n,r,!0)}function gw(){Rw(function(){(Ge&6)!==0?ls(Lo,pw):pv()})}function rm(){return qs===0&&(qs=zo()),qs}function vv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ta(""+n)}function Ev(n,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,n.id&&a.setAttribute("form",n.id),r.parentNode.insertBefore(a,r),n=new FormData(n),a.parentNode.removeChild(a),n}function _w(n,r,a,l,f){if(r==="submit"&&a&&a.stateNode===f){var d=vv((f[_t]||null).action),v=l.submitter;v&&(r=(r=v[_t]||null)?vv(r.formAction):v.getAttribute("formAction"),r!==null&&(d=r,v=null));var T=new Sa("action","action",null,l,f);n.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(qs!==0){var I=v?Ev(f,v):new FormData(f);Ad(a,{pending:!0,data:I,method:f.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=v?Ev(f,v):new FormData(f),Ad(a,{pending:!0,data:I,method:f.method,action:d},d,I))},currentTarget:f}]})}}for(var sm=0;sm<qf.length;sm++){var am=qf[sm],yw=am.toLowerCase(),vw=am[0].toUpperCase()+am.slice(1);zn(yw,"on"+vw)}zn(Zg,"onAnimationEnd"),zn(e_,"onAnimationIteration"),zn(t_,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(xA,"onTransitionRun"),zn(LA,"onTransitionStart"),zn(UA,"onTransitionCancel"),zn(n_,"onTransitionEnd"),Ri("onMouseEnter",["mouseout","mouseover"]),Ri("onMouseLeave",["mouseout","mouseover"]),Ri("onPointerEnter",["pointerout","pointerover"]),Ri("onPointerLeave",["pointerout","pointerover"]),Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Un("onBeforeInput",["compositionend","keypress","textInput","paste"]),Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ew=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pl));function Tv(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;e:{var d=void 0;if(r)for(var v=l.length-1;0<=v;v--){var T=l[v],I=T.instance,z=T.currentTarget;if(T=T.listener,I!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=z;try{d(f)}catch(Y){xc(Y)}f.currentTarget=null,d=I}else for(v=0;v<l.length;v++){if(T=l[v],I=T.instance,z=T.currentTarget,T=T.listener,I!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=z;try{d(f)}catch(Y){xc(Y)}f.currentTarget=null,d=I}}}}function Me(n,r){var a=r[Fo];a===void 0&&(a=r[Fo]=new Set);var l=n+"__bubble";a.has(l)||(Sv(r,n,2,!1),a.add(l))}function om(n,r,a){var l=0;r&&(l|=4),Sv(a,n,l,r)}var Xc="_reactListening"+Math.random().toString(36).slice(2);function lm(n){if(!n[Xc]){n[Xc]=!0,$o.forEach(function(a){a!=="selectionchange"&&(Ew.has(a)||om(a,!1,n),om(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Xc]||(r[Xc]=!0,om("selectionchange",!1,r))}}function Sv(n,r,a,l){switch(Gv(r)){case 2:var f=Kw;break;case 8:f=Qw;break;default:f=Sm}a=f.bind(null,r,a,n),f=void 0,!An||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(r,a,{capture:!0,passive:f}):n.addEventListener(r,a,!0):f!==void 0?n.addEventListener(r,a,{passive:f}):n.addEventListener(r,a,!1)}function um(n,r,a,l,f){var d=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===f)break;if(v===4)for(v=l.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;T!==null;){if(v=wi(T),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){l=d=v;continue e}T=T.parentNode}}l=l.return}Ju(function(){var z=d,Y=bn(a),J=[];e:{var j=i_.get(n);if(j!==void 0){var H=Sa,Te=n;switch(n){case"keypress":if(ti(a)===0)break e;case"keydown":case"keyup":H=Ca;break;case"focusin":Te="focus",H=wa;break;case"focusout":Te="blur",H=wa;break;case"beforeblur":case"afterblur":H=wa;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=wn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=kf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=ac;break;case Zg:case e_:case t_:H=Ra;break;case n_:H=lc;break;case"scroll":case"scrollend":H=Zu;break;case"wheel":H=Da;break;case"copy":case"cut":case"paste":H=Ia;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=il;break;case"toggle":case"beforetoggle":H=cc}var _e=(r&4)!==0,We=!_e&&(n==="scroll"||n==="scrollend"),x=_e?j!==null?j+"Capture":null:j;_e=[];for(var O=z,B;O!==null;){var X=O;if(B=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||B===null||x===null||(X=Ss(O,x),X!=null&&_e.push(Vl(O,X,B))),We)break;O=O.return}0<_e.length&&(j=new H(j,Te,null,a,Y),J.push({event:j,listeners:_e}))}}if((r&7)===0){e:{if(j=n==="mouseover"||n==="pointerover",H=n==="mouseout"||n==="pointerout",j&&a!==Di&&(Te=a.relatedTarget||a.fromElement)&&(wi(Te)||Te[Tn]))break e;if((H||j)&&(j=Y.window===Y?Y:(j=Y.ownerDocument)?j.defaultView||j.parentWindow:window,H?(Te=a.relatedTarget||a.toElement,H=z,Te=Te?wi(Te):null,Te!==null&&(We=u(Te),_e=Te.tag,Te!==We||_e!==5&&_e!==27&&_e!==6)&&(Te=null)):(H=null,Te=z),H!==Te)){if(_e=wn,X="onMouseLeave",x="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(_e=il,X="onPointerLeave",x="onPointerEnter",O="pointer"),We=H==null?j:Wn(H),B=Te==null?j:Wn(Te),j=new _e(X,O+"leave",H,a,Y),j.target=We,j.relatedTarget=B,X=null,wi(Y)===z&&(_e=new _e(x,O+"enter",Te,a,Y),_e.target=B,_e.relatedTarget=We,X=_e),We=X,H&&Te)t:{for(_e=H,x=Te,O=0,B=_e;B;B=eo(B))O++;for(B=0,X=x;X;X=eo(X))B++;for(;0<O-B;)_e=eo(_e),O--;for(;0<B-O;)x=eo(x),B--;for(;O--;){if(_e===x||x!==null&&_e===x.alternate)break t;_e=eo(_e),x=eo(x)}_e=null}else _e=null;H!==null&&bv(J,j,H,_e,!1),Te!==null&&We!==null&&bv(J,We,Te,_e,!0)}}e:{if(j=z?Wn(z):window,H=j.nodeName&&j.nodeName.toLowerCase(),H==="select"||H==="input"&&j.type==="file")var ce=Hg;else if(It(j))if(qg)ce=PA;else{ce=OA;var Ne=NA}else H=j.nodeName,!H||H.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?z&&Xo(z.elementType)&&(ce=Hg):ce=MA;if(ce&&(ce=ce(n,z))){Vi(J,ce,a,Y);break e}Ne&&Ne(n,j,z),n==="focusout"&&z&&j.type==="number"&&z.memoizedProps.value!=null&&dr(j,"number",j.value)}switch(Ne=z?Wn(z):window,n){case"focusin":(It(Ne)||Ne.contentEditable==="true")&&(Na=Ne,zf=z,al=null);break;case"focusout":al=zf=Na=null;break;case"mousedown":jf=!0;break;case"contextmenu":case"mouseup":case"dragend":jf=!1,Wg(J,a,Y);break;case"selectionchange":if(kA)break;case"keydown":case"keyup":Wg(J,a,Y)}var fe;if(ri)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else ke?G(n,a)&&(ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(y&&a.locale!=="ko"&&(ke||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&ke&&(fe=Jo()):(ei=Y,mr="value"in ei?ei.value:ei.textContent,ke=!0)),Ne=Wc(z,ye),0<Ne.length&&(ye=new tl(ye,n,null,a,Y),J.push({event:ye,listeners:Ne}),fe?ye.data=fe:(fe=se(a),fe!==null&&(ye.data=fe)))),(fe=_?Rt(n,a):xe(n,a))&&(ye=Wc(z,"onBeforeInput"),0<ye.length&&(Ne=new tl("onBeforeInput","beforeinput",null,a,Y),J.push({event:Ne,listeners:ye}),Ne.data=fe)),_w(J,n,z,a,Y)}Tv(J,r)})}function Vl(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Wc(n,r){for(var a=r+"Capture",l=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Ss(n,a),f!=null&&l.unshift(Vl(n,f,d)),f=Ss(n,r),f!=null&&l.push(Vl(n,f,d))),n.tag===3)return l;n=n.return}return[]}function eo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function bv(n,r,a,l,f){for(var d=r._reactName,v=[];a!==null&&a!==l;){var T=a,I=T.alternate,z=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||z===null||(I=z,f?(z=Ss(a,d),z!=null&&v.unshift(Vl(a,z,I))):f||(z=Ss(a,d),z!=null&&v.push(Vl(a,z,I)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var Tw=/\r\n?/g,Sw=/\u0000|\uFFFD/g;function Av(n){return(typeof n=="string"?n:""+n).replace(Tw,`
`).replace(Sw,"")}function wv(n,r){return r=Av(r),Av(n)===r}function Jc(){}function Xe(n,r,a,l,f,d){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||Sn(n,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&Sn(n,""+l);break;case"className":Jn(n,"class",l);break;case"tabIndex":Jn(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(n,a,l);break;case"style":Yo(n,l,d);break;case"data":if(r!=="object"){Jn(n,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Ta(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(r!=="input"&&Xe(n,r,"name",f.name,f,null),Xe(n,r,"formEncType",f.formEncType,f,null),Xe(n,r,"formMethod",f.formMethod,f,null),Xe(n,r,"formTarget",f.formTarget,f,null)):(Xe(n,r,"encType",f.encType,f,null),Xe(n,r,"method",f.method,f,null),Xe(n,r,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Ta(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=Jc);break;case"onScroll":l!=null&&Me("scroll",n);break;case"onScrollEnd":l!=null&&Me("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=Ta(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":Me("beforetoggle",n),Me("toggle",n),fr(n,"popover",l);break;case"xlinkActuate":Bt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Bt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Bt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Bt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Bt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Bt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Bt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Bt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Bt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":fr(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Pf.get(a)||a,fr(n,a,l))}}function cm(n,r,a,l,f,d){switch(a){case"style":Yo(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?Sn(n,l):(typeof l=="number"||typeof l=="bigint")&&Sn(n,""+l);break;case"onScroll":l!=null&&Me("scroll",n);break;case"onScrollEnd":l!=null&&Me("scrollend",n);break;case"onClick":l!=null&&(n.onclick=Jc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ga.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),r=a.slice(2,f?a.length-7:void 0),d=n[_t]||null,d=d!=null?d[a]:null,typeof d=="function"&&n.removeEventListener(r,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(r,l,f);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):fr(n,a,l)}}}function qt(n,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",n),Me("load",n);var l=!1,f=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Xe(n,r,d,v,a,null)}}f&&Xe(n,r,"srcSet",a.srcSet,a,null),l&&Xe(n,r,"src",a.src,a,null);return;case"input":Me("invalid",n);var T=d=v=f=null,I=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var Y=a[l];if(Y!=null)switch(l){case"name":f=Y;break;case"type":v=Y;break;case"checked":I=Y;break;case"defaultChecked":z=Y;break;case"value":d=Y;break;case"defaultValue":T=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,r));break;default:Xe(n,r,l,Y,a,null)}}vs(n,d,T,I,z,v,f,!1),Ea(n);return;case"select":Me("invalid",n),l=v=d=null;for(f in a)if(a.hasOwnProperty(f)&&(T=a[f],T!=null))switch(f){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Xe(n,r,f,T,a,null)}r=d,a=v,n.multiple=!!l,r!=null?Ci(n,!!l,r,!1):a!=null&&Ci(n,!!l,a,!0);return;case"textarea":Me("invalid",n),d=f=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":f=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xe(n,r,v,T,a,null)}Es(n,l,f,d),Ea(n);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xe(n,r,I,l,a,null)}return;case"dialog":Me("beforetoggle",n),Me("toggle",n),Me("cancel",n),Me("close",n);break;case"iframe":case"object":Me("load",n);break;case"video":case"audio":for(l=0;l<Pl.length;l++)Me(Pl[l],n);break;case"image":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"embed":case"source":case"link":Me("error",n),Me("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Xe(n,r,z,l,a,null)}return;default:if(Xo(r)){for(Y in a)a.hasOwnProperty(Y)&&(l=a[Y],l!==void 0&&cm(n,r,Y,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Xe(n,r,T,l,a,null))}function bw(n,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,v=null,T=null,I=null,z=null,Y=null;for(H in a){var J=a[H];if(a.hasOwnProperty(H)&&J!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":I=J;default:l.hasOwnProperty(H)||Xe(n,r,H,null,l,J)}}for(var j in l){var H=l[j];if(J=a[j],l.hasOwnProperty(j)&&(H!=null||J!=null))switch(j){case"type":d=H;break;case"name":f=H;break;case"checked":z=H;break;case"defaultChecked":Y=H;break;case"value":v=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:H!==J&&Xe(n,r,j,H,l,J)}}hn(n,v,T,I,z,Y,d,f);return;case"select":H=v=T=j=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":H=I;default:l.hasOwnProperty(d)||Xe(n,r,d,null,l,I)}for(f in l)if(d=l[f],I=a[f],l.hasOwnProperty(f)&&(d!=null||I!=null))switch(f){case"value":j=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==I&&Xe(n,r,f,d,l,I)}r=T,a=v,l=H,j!=null?Ci(n,!!a,j,!1):!!l!=!!a&&(r!=null?Ci(n,!!a,r,!0):Ci(n,!!a,a?[]:"",!1));return;case"textarea":H=j=null;for(T in a)if(f=a[T],a.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xe(n,r,T,null,l,f)}for(v in l)if(f=l[v],d=a[v],l.hasOwnProperty(v)&&(f!=null||d!=null))switch(v){case"value":j=f;break;case"defaultValue":H=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==d&&Xe(n,r,v,f,l,d)}Qe(n,j,H);return;case"option":for(var Te in a)if(j=a[Te],a.hasOwnProperty(Te)&&j!=null&&!l.hasOwnProperty(Te))switch(Te){case"selected":n.selected=!1;break;default:Xe(n,r,Te,null,l,j)}for(I in l)if(j=l[I],H=a[I],l.hasOwnProperty(I)&&j!==H&&(j!=null||H!=null))switch(I){case"selected":n.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:Xe(n,r,I,j,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in a)j=a[_e],a.hasOwnProperty(_e)&&j!=null&&!l.hasOwnProperty(_e)&&Xe(n,r,_e,null,l,j);for(z in l)if(j=l[z],H=a[z],l.hasOwnProperty(z)&&j!==H&&(j!=null||H!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,r));break;default:Xe(n,r,z,j,l,H)}return;default:if(Xo(r)){for(var We in a)j=a[We],a.hasOwnProperty(We)&&j!==void 0&&!l.hasOwnProperty(We)&&cm(n,r,We,void 0,l,j);for(Y in l)j=l[Y],H=a[Y],!l.hasOwnProperty(Y)||j===H||j===void 0&&H===void 0||cm(n,r,Y,j,l,H);return}}for(var x in a)j=a[x],a.hasOwnProperty(x)&&j!=null&&!l.hasOwnProperty(x)&&Xe(n,r,x,null,l,j);for(J in l)j=l[J],H=a[J],!l.hasOwnProperty(J)||j===H||j==null&&H==null||Xe(n,r,J,j,l,H)}var hm=null,fm=null;function Zc(n){return n.nodeType===9?n:n.ownerDocument}function Rv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Iv(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function dm(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var mm=null;function Aw(){var n=window.event;return n&&n.type==="popstate"?n===mm?!1:(mm=n,!0):(mm=null,!1)}var Cv=typeof setTimeout=="function"?setTimeout:void 0,ww=typeof clearTimeout=="function"?clearTimeout:void 0,Dv=typeof Promise=="function"?Promise:void 0,Rw=typeof queueMicrotask=="function"?queueMicrotask:typeof Dv<"u"?function(n){return Dv.resolve(null).then(n).catch(Iw)}:Cv;function Iw(n){setTimeout(function(){throw n})}function Nr(n){return n==="head"}function Nv(n,r){var a=r,l=0,f=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=n.ownerDocument;if(a&1&&kl(v.documentElement),a&2&&kl(v.body),a&4)for(a=v.head,kl(a),v=a.firstChild;v;){var T=v.nextSibling,I=v.nodeName;v[ps]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(f===0){n.removeChild(d),ql(r);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);ql(r)}function pm(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":pm(a),hr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function Cw(n,r,a,l){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[ps])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=Hn(n.nextSibling),n===null)break}return null}function Dw(n,r,a){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Hn(n.nextSibling),n===null))return null;return n}function gm(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function Nw(n,r){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")r();else{var l=function(){r(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function Hn(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var _m=null;function Ov(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}function Mv(n,r,a){switch(r=Zc(a),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function kl(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);hr(n)}var Mn=new Map,Pv=new Set;function eh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ki=ae.d;ae.d={f:Ow,r:Mw,D:Pw,C:Vw,L:kw,m:xw,X:Uw,S:Lw,M:Bw};function Ow(){var n=Ki.f(),r=$c();return n||r}function Mw(n){var r=Xn(n);r!==null&&r.tag===5&&r.type==="form"?Z_(r):Ki.r(n)}var to=typeof document>"u"?null:document;function Vv(n,r,a){var l=to;if(l&&typeof r=="string"&&r){var f=yt(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),Pv.has(f)||(Pv.add(f),n={rel:n,crossOrigin:a,href:r},l.querySelector(f)===null&&(r=l.createElement("link"),qt(r,"link",n),dt(r),l.head.appendChild(r)))}}function Pw(n){Ki.D(n),Vv("dns-prefetch",n,null)}function Vw(n,r){Ki.C(n,r),Vv("preconnect",n,r)}function kw(n,r,a){Ki.L(n,r,a);var l=to;if(l&&n&&r){var f='link[rel="preload"][as="'+yt(r)+'"]';r==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+yt(a.imageSizes)+'"]')):f+='[href="'+yt(n)+'"]';var d=f;switch(r){case"style":d=no(n);break;case"script":d=io(n)}Mn.has(d)||(n=E({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:n,as:r},a),Mn.set(d,n),l.querySelector(f)!==null||r==="style"&&l.querySelector(xl(d))||r==="script"&&l.querySelector(Ll(d))||(r=l.createElement("link"),qt(r,"link",n),dt(r),l.head.appendChild(r)))}}function xw(n,r){Ki.m(n,r);var a=to;if(a&&n){var l=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+yt(l)+'"][href="'+yt(n)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=io(n)}if(!Mn.has(d)&&(n=E({rel:"modulepreload",href:n},r),Mn.set(d,n),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ll(d)))return}l=a.createElement("link"),qt(l,"link",n),dt(l),a.head.appendChild(l)}}}function Lw(n,r,a){Ki.S(n,r,a);var l=to;if(l&&n){var f=tn(l).hoistableStyles,d=no(n);r=r||"default";var v=f.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(xl(d)))T.loading=5;else{n=E({rel:"stylesheet",href:n,"data-precedence":r},a),(a=Mn.get(d))&&ym(n,a);var I=v=l.createElement("link");dt(I),qt(I,"link",n),I._p=new Promise(function(z,Y){I.onload=z,I.onerror=Y}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,th(v,r,l)}v={type:"stylesheet",instance:v,count:1,state:T},f.set(d,v)}}}function Uw(n,r){Ki.X(n,r);var a=to;if(a&&n){var l=tn(a).hoistableScripts,f=io(n),d=l.get(f);d||(d=a.querySelector(Ll(f)),d||(n=E({src:n,async:!0},r),(r=Mn.get(f))&&vm(n,r),d=a.createElement("script"),dt(d),qt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function Bw(n,r){Ki.M(n,r);var a=to;if(a&&n){var l=tn(a).hoistableScripts,f=io(n),d=l.get(f);d||(d=a.querySelector(Ll(f)),d||(n=E({src:n,async:!0,type:"module"},r),(r=Mn.get(f))&&vm(n,r),d=a.createElement("script"),dt(d),qt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function kv(n,r,a,l){var f=(f=be.current)?eh(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=no(a.href),a=tn(f).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=no(a.href);var d=tn(f).hoistableStyles,v=d.get(n);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,v),(d=f.querySelector(xl(n)))&&!d._p&&(v.instance=d,v.state.loading=5),Mn.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mn.set(n,a),d||zw(f,n,a,v.state))),r&&l===null)throw Error(s(528,""));return v}if(r&&l!==null)throw Error(s(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=io(a),a=tn(f).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function no(n){return'href="'+yt(n)+'"'}function xl(n){return'link[rel="stylesheet"]['+n+"]"}function xv(n){return E({},n,{"data-precedence":n.precedence,precedence:null})}function zw(n,r,a,l){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=n.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),qt(r,"link",a),dt(r),n.head.appendChild(r))}function io(n){return'[src="'+yt(n)+'"]'}function Ll(n){return"script[async]"+n}function Lv(n,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=n.querySelector('style[data-href~="'+yt(a.href)+'"]');if(l)return r.instance=l,dt(l),l;var f=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),dt(l),qt(l,"style",f),th(l,a.precedence,n),r.instance=l;case"stylesheet":f=no(a.href);var d=n.querySelector(xl(f));if(d)return r.state.loading|=4,r.instance=d,dt(d),d;l=xv(a),(f=Mn.get(f))&&ym(l,f),d=(n.ownerDocument||n).createElement("link"),dt(d);var v=d;return v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),qt(d,"link",l),r.state.loading|=4,th(d,a.precedence,n),r.instance=d;case"script":return d=io(a.src),(f=n.querySelector(Ll(d)))?(r.instance=f,dt(f),f):(l=a,(f=Mn.get(d))&&(l=E({},a),vm(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),dt(f),qt(f,"link",l),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,th(l,a.precedence,n));return r.instance}function th(n,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===r)d=T;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(n,r.firstChild))}function ym(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function vm(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var nh=null;function Uv(n,r,a){if(nh===null){var l=new Map,f=nh=new Map;f.set(a,l)}else f=nh,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var d=a[f];if(!(d[ps]||d[wt]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(r)||"";v=n+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function Bv(n,r,a){n=n.ownerDocument||n,n.head.insertBefore(a,r==="title"?n.querySelector("head > title"):null)}function jw(n,r,a){if(a===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function zv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Ul=null;function Hw(){}function qw(n,r,a){if(Ul===null)throw Error(s(475));var l=Ul;if(r.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=no(a.href),d=n.querySelector(xl(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=ih.bind(l),n.then(l,l)),r.state.loading|=4,r.instance=d,dt(d);return}d=n.ownerDocument||n,a=xv(a),(f=Mn.get(f))&&ym(a,f),d=d.createElement("link"),dt(d);var v=d;v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),qt(d,"link",a),r.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=ih.bind(l),n.addEventListener("load",r),n.addEventListener("error",r))}}function Fw(){if(Ul===null)throw Error(s(475));var n=Ul;return n.stylesheets&&n.count===0&&Em(n,n.stylesheets),0<n.count?function(r){var a=setTimeout(function(){if(n.stylesheets&&Em(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(a)}}:null}function ih(){if(this.count--,this.count===0){if(this.stylesheets)Em(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var rh=null;function Em(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,rh=new Map,r.forEach($w,n),rh=null,ih.call(n))}function $w(n,r){if(!(r.state.loading&4)){var a=rh.get(n);if(a)var l=a.get(null);else{a=new Map,rh.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var v=f[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}f=r.instance,v=f.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,f),a.set(v,f),this.count++,l=ih.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var Bl={$$typeof:re,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function Gw(n,r,a,l,f,d,v,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bi(0),this.hiddenUpdates=bi(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function jv(n,r,a,l,f,d,v,T,I,z,Y,J){return n=new Gw(n,r,a,v,T,I,z,J),r=1,d===!0&&(r|=24),d=dn(3,null,null,r),n.current=d,d.stateNode=n,r=td(),r.refCount++,n.pooledCache=r,r.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:r},sd(d),n}function Hv(n){return n?(n=Va,n):Va}function qv(n,r,a,l,f,d){f=Hv(f),l.context===null?l.context=f:l.pendingContext=f,l=_r(r),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=yr(n,l,r),a!==null&&(yn(a,n,r),pl(a,n,r))}function Fv(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Tm(n,r){Fv(n,r),(n=n.alternate)&&Fv(n,r)}function $v(n){if(n.tag===13){var r=Pa(n,67108864);r!==null&&yn(r,n,67108864),Tm(n,67108864)}}var sh=!0;function Kw(n,r,a,l){var f=Q.T;Q.T=null;var d=ae.p;try{ae.p=2,Sm(n,r,a,l)}finally{ae.p=d,Q.T=f}}function Qw(n,r,a,l){var f=Q.T;Q.T=null;var d=ae.p;try{ae.p=8,Sm(n,r,a,l)}finally{ae.p=d,Q.T=f}}function Sm(n,r,a,l){if(sh){var f=bm(l);if(f===null)um(n,r,l,ah,a),Kv(n,l);else if(Xw(f,n,r,a,l))l.stopPropagation();else if(Kv(n,l),r&4&&-1<Yw.indexOf(n)){for(;f!==null;){var d=Xn(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Ln(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var I=1<<31-Kt(v);T.entanglements[1]|=I,v&=~I}ci(d),(Ge&6)===0&&(qc=En()+500,Ml(0))}}break;case 13:T=Pa(d,2),T!==null&&yn(T,d,2),$c(),Tm(d,2)}if(d=bm(l),d===null&&um(n,r,l,ah,a),d===f)break;f=d}f!==null&&l.stopPropagation()}else um(n,r,l,null,a)}}function bm(n){return n=bn(n),Am(n)}var ah=null;function Am(n){if(ah=null,n=wi(n),n!==null){var r=u(n);if(r===null)n=null;else{var a=r.tag;if(a===13){if(n=h(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return ah=n,null}function Gv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(If()){case Lo:return 2;case fa:return 8;case cs:case Cf:return 32;case da:return 268435456;default:return 32}default:return 32}}var wm=!1,Or=null,Mr=null,Pr=null,zl=new Map,jl=new Map,Vr=[],Yw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kv(n,r){switch(n){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":zl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":jl.delete(r.pointerId)}}function Hl(n,r,a,l,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},r!==null&&(r=Xn(r),r!==null&&$v(r)),n):(n.eventSystemFlags|=l,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function Xw(n,r,a,l,f){switch(r){case"focusin":return Or=Hl(Or,n,r,a,l,f),!0;case"dragenter":return Mr=Hl(Mr,n,r,a,l,f),!0;case"mouseover":return Pr=Hl(Pr,n,r,a,l,f),!0;case"pointerover":var d=f.pointerId;return zl.set(d,Hl(zl.get(d)||null,n,r,a,l,f)),!0;case"gotpointercapture":return d=f.pointerId,jl.set(d,Hl(jl.get(d)||null,n,r,a,l,f)),!0}return!1}function Qv(n){var r=wi(n.target);if(r!==null){var a=u(r);if(a!==null){if(r=a.tag,r===13){if(r=h(a),r!==null){n.blockedOn=r,$u(n.priority,function(){if(a.tag===13){var l=_n();l=lr(l);var f=Pa(a,l);f!==null&&yn(f,a,l),Tm(a,l)}});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function oh(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=bm(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Di=l,a.target.dispatchEvent(l),Di=null}else return r=Xn(a),r!==null&&$v(r),n.blockedOn=a,!1;r.shift()}return!0}function Yv(n,r,a){oh(n)&&a.delete(r)}function Ww(){wm=!1,Or!==null&&oh(Or)&&(Or=null),Mr!==null&&oh(Mr)&&(Mr=null),Pr!==null&&oh(Pr)&&(Pr=null),zl.forEach(Yv),jl.forEach(Yv)}function lh(n,r){n.blockedOn===r&&(n.blockedOn=null,wm||(wm=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Ww)))}var uh=null;function Xv(n){uh!==n&&(uh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){uh===n&&(uh=null);for(var r=0;r<n.length;r+=3){var a=n[r],l=n[r+1],f=n[r+2];if(typeof l!="function"){if(Am(l||a)===null)continue;break}var d=Xn(a);d!==null&&(n.splice(r,3),r-=3,Ad(d,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function ql(n){function r(I){return lh(I,n)}Or!==null&&lh(Or,n),Mr!==null&&lh(Mr,n),Pr!==null&&lh(Pr,n),zl.forEach(r),jl.forEach(r);for(var a=0;a<Vr.length;a++){var l=Vr[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Vr.length&&(a=Vr[0],a.blockedOn===null);)Qv(a),a.blockedOn===null&&Vr.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],d=a[l+1],v=f[_t]||null;if(typeof d=="function")v||Xv(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(f=d,v=d[_t]||null)T=v.formAction;else if(Am(f)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),Xv(a)}}}function Rm(n){this._internalRoot=n}ch.prototype.render=Rm.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var a=r.current,l=_n();qv(a,l,n,r,null,null)},ch.prototype.unmount=Rm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;qv(n.current,2,null,n,null,null),$c(),r[Tn]=null}};function ch(n){this._internalRoot=n}ch.prototype.unstable_scheduleHydration=function(n){if(n){var r=ur();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Vr.length&&r!==0&&r<Vr[a].priority;a++);Vr.splice(a,0,n),a===0&&Qv(n)}};var Wv=e.version;if(Wv!=="19.1.0")throw Error(s(527,Wv,"19.1.0"));ae.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=p(r),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var Jw={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hh.isDisabled&&hh.supportsFiber)try{ct=hh.inject(Jw),$e=hh}catch{}}return $l.createRoot=function(n,r){if(!o(n))throw Error(s(299));var a=!1,l="",f=dy,d=my,v=py,T=null;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=jv(n,1,!1,null,null,a,l,f,d,v,T,null),n[Tn]=r.current,lm(n),new Rm(r)},$l.hydrateRoot=function(n,r,a){if(!o(n))throw Error(s(299));var l=!1,f="",d=dy,v=my,T=py,I=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),r=jv(n,1,!0,r,a??null,l,f,d,v,T,I,z),r.context=Hv(null),a=r.current,l=_n(),l=lr(l),f=_r(l),f.callback=null,yr(a,f,l),a=l,r.current.lanes=a,Ai(r,a),ci(r),n[Tn]=r.current,lm(n),new ch(r)},$l.version="19.1.0",$l}var oE;function l1(){if(oE)return Dm.exports;oE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Dm.exports=o1(),Dm.exports}var u1=l1(),Gl={},lE;function c1(){if(lE)return Gl;lE=1,Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.parse=h,Gl.serialize=g;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const A=function(){};return A.prototype=Object.create(null),A})();function h(A,k){const P=new u,K=A.length;if(K<2)return P;const q=k?.decode||E;let $=0;do{const ie=A.indexOf("=",$);if(ie===-1)break;const re=A.indexOf(";",$),de=re===-1?K:re;if(ie>de){$=A.lastIndexOf(";",ie-1)+1;continue}const he=m(A,$,ie),Se=p(A,ie,he),M=A.slice(he,Se);if(P[M]===void 0){let w=m(A,ie+1,de),R=p(A,de,w);const N=q(A.slice(w,R));P[M]=N}$=de+1}while($<K);return P}function m(A,k,P){do{const K=A.charCodeAt(k);if(K!==32&&K!==9)return k}while(++k<P);return P}function p(A,k,P){for(;k>P;){const K=A.charCodeAt(--k);if(K!==32&&K!==9)return k+1}return P}function g(A,k,P){const K=P?.encode||encodeURIComponent;if(!i.test(A))throw new TypeError(`argument name is invalid: ${A}`);const q=K(k);if(!e.test(q))throw new TypeError(`argument val is invalid: ${k}`);let $=A+"="+q;if(!P)return $;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);$+="; Max-Age="+P.maxAge}if(P.domain){if(!t.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);$+="; Domain="+P.domain}if(P.path){if(!s.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);$+="; Path="+P.path}if(P.expires){if(!S(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);$+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&($+="; HttpOnly"),P.secure&&($+="; Secure"),P.partitioned&&($+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return $}function E(A){if(A.indexOf("%")===-1)return A;try{return decodeURIComponent(A)}catch{return A}}function S(A){return o.call(A)==="[object Date]"}return Gl}c1();var uE="popstate";function h1(i={}){function e(s,o){let{pathname:u,search:h,hash:m}=s.location;return ep("",{pathname:u,search:h,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:fu(o)}return d1(e,t,null,i)}function at(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function $n(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function f1(){return Math.random().toString(36).substring(2,10)}function cE(i,e){return{usr:i.state,key:i.key,idx:e}}function ep(i,e,t=null,s){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?wo(e):e,state:t,key:e&&e.key||s||f1()}}function fu({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function wo(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function d1(i,e,t,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,m="POP",p=null,g=E();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function E(){return(h.state||{idx:null}).idx}function S(){m="POP";let q=E(),$=q==null?null:q-g;g=q,p&&p({action:m,location:K.location,delta:$})}function A(q,$){m="PUSH";let ie=ep(K.location,q,$);g=E()+1;let re=cE(ie,g),de=K.createHref(ie);try{h.pushState(re,"",de)}catch(he){if(he instanceof DOMException&&he.name==="DataCloneError")throw he;o.location.assign(de)}u&&p&&p({action:m,location:K.location,delta:1})}function k(q,$){m="REPLACE";let ie=ep(K.location,q,$);g=E();let re=cE(ie,g),de=K.createHref(ie);h.replaceState(re,"",de),u&&p&&p({action:m,location:K.location,delta:0})}function P(q){return m1(q)}let K={get action(){return m},get location(){return i(o,h)},listen(q){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(uE,S),p=q,()=>{o.removeEventListener(uE,S),p=null}},createHref(q){return e(o,q)},createURL:P,encodeLocation(q){let $=P(q);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:A,replace:k,go(q){return h.go(q)}};return K}function m1(i,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),at(t,"No window.location.(origin|href) available to create URL");let s=typeof i=="string"?i:fu(i);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function d0(i,e,t="/"){return p1(i,e,t,!1)}function p1(i,e,t,s){let o=typeof e=="string"?wo(e):e,u=er(o.pathname||"/",t);if(u==null)return null;let h=m0(i);g1(h);let m=null;for(let p=0;m==null&&p<h.length;++p){let g=I1(u);m=w1(h[p],g,s)}return m}function m0(i,e=[],t=[],s=""){let o=(u,h,m)=>{let p={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};p.relativePath.startsWith("/")&&(at(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let g=Ji([s,p.relativePath]),E=t.concat(p);u.children&&u.children.length>0&&(at(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),m0(u.children,e,E,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:b1(g,u.index),routesMeta:E})};return i.forEach((u,h)=>{if(u.path===""||!u.path?.includes("?"))o(u,h);else for(let m of p0(u.path))o(u,h,m)}),e}function p0(i){let e=i.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=p0(s.join("/")),m=[];return m.push(...h.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...h),m.map(p=>i.startsWith("/")&&p===""?"/":p)}function g1(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:A1(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var _1=/^:[\w-]+$/,y1=3,v1=2,E1=1,T1=10,S1=-2,hE=i=>i==="*";function b1(i,e){let t=i.split("/"),s=t.length;return t.some(hE)&&(s+=S1),e&&(s+=v1),t.filter(o=>!hE(o)).reduce((o,u)=>o+(_1.test(u)?y1:u===""?E1:T1),s)}function A1(i,e){return i.length===e.length&&i.slice(0,-1).every((s,o)=>s===e[o])?i[i.length-1]-e[e.length-1]:0}function w1(i,e,t=!1){let{routesMeta:s}=i,o={},u="/",h=[];for(let m=0;m<s.length;++m){let p=s[m],g=m===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",S=kh({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},E),A=p.route;if(!S&&g&&t&&!s[s.length-1].route.index&&(S=kh({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!S)return null;Object.assign(o,S.params),h.push({params:o,pathname:Ji([u,S.pathname]),pathnameBase:O1(Ji([u,S.pathnameBase])),route:A}),S.pathnameBase!=="/"&&(u=Ji([u,S.pathnameBase]))}return h}function kh(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,s]=R1(i.path,i.caseSensitive,i.end),o=e.match(t);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((g,{paramName:E,isOptional:S},A)=>{if(E==="*"){let P=m[A]||"";h=u.slice(0,u.length-P.length).replace(/(.)\/+$/,"$1")}const k=m[A];return S&&!k?g[E]=void 0:g[E]=(k||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:i}}function R1(i,e=!1,t=!0){$n(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,p)=>(s.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function I1(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $n(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function er(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}function C1(i,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof i=="string"?wo(i):i;return{pathname:t?t.startsWith("/")?t:D1(t,e):e,search:M1(s),hash:P1(o)}}function D1(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Pm(i,e,t,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function N1(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Lp(i){let e=N1(i);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Up(i,e,t,s=!1){let o;typeof i=="string"?o=wo(i):(o={...i},at(!o.pathname||!o.pathname.includes("?"),Pm("?","pathname","search",o)),at(!o.pathname||!o.pathname.includes("#"),Pm("#","pathname","hash",o)),at(!o.search||!o.search.includes("#"),Pm("#","search","hash",o)));let u=i===""||o.pathname==="",h=u?"/":o.pathname,m;if(h==null)m=t;else{let S=e.length-1;if(!s&&h.startsWith("..")){let A=h.split("/");for(;A[0]==="..";)A.shift(),S-=1;o.pathname=A.join("/")}m=S>=0?e[S]:"/"}let p=C1(o,m),g=h&&h!=="/"&&h.endsWith("/"),E=(u||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(g||E)&&(p.pathname+="/"),p}var Ji=i=>i.join("/").replace(/\/\/+/g,"/"),O1=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),M1=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,P1=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function V1(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var g0=["POST","PUT","PATCH","DELETE"];new Set(g0);var k1=["GET",...g0];new Set(k1);var Ro=F.createContext(null);Ro.displayName="DataRouter";var sf=F.createContext(null);sf.displayName="DataRouterState";var _0=F.createContext({isTransitioning:!1});_0.displayName="ViewTransition";var x1=F.createContext(new Map);x1.displayName="Fetchers";var L1=F.createContext(null);L1.displayName="Await";var Kn=F.createContext(null);Kn.displayName="Navigation";var Ru=F.createContext(null);Ru.displayName="Location";var Ti=F.createContext({outlet:null,matches:[],isDataRoute:!1});Ti.displayName="Route";var Bp=F.createContext(null);Bp.displayName="RouteError";function U1(i,{relative:e}={}){at(Io(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=F.useContext(Kn),{hash:o,pathname:u,search:h}=Iu(i,{relative:e}),m=u;return t!=="/"&&(m=u==="/"?t:Ji([t,u])),s.createHref({pathname:m,search:h,hash:o})}function Io(){return F.useContext(Ru)!=null}function rs(){return at(Io(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(Ru).location}var y0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function v0(i){F.useContext(Kn).static||F.useLayoutEffect(i)}function af(){let{isDataRoute:i}=F.useContext(Ti);return i?W1():B1()}function B1(){at(Io(),"useNavigate() may be used only in the context of a <Router> component.");let i=F.useContext(Ro),{basename:e,navigator:t}=F.useContext(Kn),{matches:s}=F.useContext(Ti),{pathname:o}=rs(),u=JSON.stringify(Lp(s)),h=F.useRef(!1);return v0(()=>{h.current=!0}),F.useCallback((p,g={})=>{if($n(h.current,y0),!h.current)return;if(typeof p=="number"){t.go(p);return}let E=Up(p,JSON.parse(u),o,g.relative==="path");i==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Ji([e,E.pathname])),(g.replace?t.replace:t.push)(E,g.state,g)},[e,t,u,o,i])}F.createContext(null);function Iu(i,{relative:e}={}){let{matches:t}=F.useContext(Ti),{pathname:s}=rs(),o=JSON.stringify(Lp(t));return F.useMemo(()=>Up(i,JSON.parse(o),s,e==="path"),[i,o,s,e])}function z1(i,e){return E0(i,e)}function E0(i,e,t,s){at(Io(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=F.useContext(Kn),{matches:u}=F.useContext(Ti),h=u[u.length-1],m=h?h.params:{},p=h?h.pathname:"/",g=h?h.pathnameBase:"/",E=h&&h.route;{let $=E&&E.path||"";T0(p,!E||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let S=rs(),A;if(e){let $=typeof e=="string"?wo(e):e;at(g==="/"||$.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${$.pathname}" was given in the \`location\` prop.`),A=$}else A=S;let k=A.pathname||"/",P=k;if(g!=="/"){let $=g.replace(/^\//,"").split("/");P="/"+k.replace(/^\//,"").split("/").slice($.length).join("/")}let K=d0(i,{pathname:P});$n(E||K!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),$n(K==null||K[K.length-1].route.element!==void 0||K[K.length-1].route.Component!==void 0||K[K.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=$1(K&&K.map($=>Object.assign({},$,{params:Object.assign({},m,$.params),pathname:Ji([g,o.encodeLocation?o.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?g:Ji([g,o.encodeLocation?o.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),u,t,s);return e&&q?F.createElement(Ru.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},q):q}function j1(){let i=X1(),e=V1(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",i),h=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:u},"ErrorBoundary")," or"," ",F.createElement("code",{style:u},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),t?F.createElement("pre",{style:o},t):null,h)}var H1=F.createElement(j1,null),q1=class extends F.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){console.error("React Router caught the following error during render",i,e)}render(){return this.state.error!==void 0?F.createElement(Ti.Provider,{value:this.props.routeContext},F.createElement(Bp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function F1({routeContext:i,match:e,children:t}){let s=F.useContext(Ro);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(Ti.Provider,{value:i},t)}function $1(i,e=[],t=null,s=null){if(i==null){if(!t)return null;if(t.errors)i=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let o=i,u=t?.errors;if(u!=null){let p=o.findIndex(g=>g.route.id&&u?.[g.route.id]!==void 0);at(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,m=-1;if(t)for(let p=0;p<o.length;p++){let g=o[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:E,errors:S}=t,A=g.route.loader&&!E.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||A){h=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((p,g,E)=>{let S,A=!1,k=null,P=null;t&&(S=u&&g.route.id?u[g.route.id]:void 0,k=g.route.errorElement||H1,h&&(m<0&&E===0?(T0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,P=null):m===E&&(A=!0,P=g.route.hydrateFallbackElement||null)));let K=e.concat(o.slice(0,E+1)),q=()=>{let $;return S?$=k:A?$=P:g.route.Component?$=F.createElement(g.route.Component,null):g.route.element?$=g.route.element:$=p,F.createElement(F1,{match:g,routeContext:{outlet:p,matches:K,isDataRoute:t!=null},children:$})};return t&&(g.route.ErrorBoundary||g.route.errorElement||E===0)?F.createElement(q1,{location:t.location,revalidation:t.revalidation,component:k,error:S,children:q(),routeContext:{outlet:null,matches:K,isDataRoute:!0}}):q()},null)}function zp(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function G1(i){let e=F.useContext(Ro);return at(e,zp(i)),e}function K1(i){let e=F.useContext(sf);return at(e,zp(i)),e}function Q1(i){let e=F.useContext(Ti);return at(e,zp(i)),e}function jp(i){let e=Q1(i),t=e.matches[e.matches.length-1];return at(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function Y1(){return jp("useRouteId")}function X1(){let i=F.useContext(Bp),e=K1("useRouteError"),t=jp("useRouteError");return i!==void 0?i:e.errors?.[t]}function W1(){let{router:i}=G1("useNavigate"),e=jp("useNavigate"),t=F.useRef(!1);return v0(()=>{t.current=!0}),F.useCallback(async(o,u={})=>{$n(t.current,y0),t.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:e,...u}))},[i,e])}var fE={};function T0(i,e,t){!e&&!fE[i]&&(fE[i]=!0,$n(!1,t))}F.memo(J1);function J1({routes:i,future:e,state:t}){return E0(i,void 0,t,e)}function dE({to:i,replace:e,state:t,relative:s}){at(Io(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=F.useContext(Kn);$n(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=F.useContext(Ti),{pathname:h}=rs(),m=af(),p=Up(i,Lp(u),h,s==="path"),g=JSON.stringify(p);return F.useEffect(()=>{m(JSON.parse(g),{replace:e,state:t,relative:s})},[m,g,s,e,t]),null}function Fs(i){at(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Z1({basename:i="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:u=!1}){at(!Io(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=i.replace(/^\/*/,"/"),m=F.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof t=="string"&&(t=wo(t));let{pathname:p="/",search:g="",hash:E="",state:S=null,key:A="default"}=t,k=F.useMemo(()=>{let P=er(p,h);return P==null?null:{location:{pathname:P,search:g,hash:E,state:S,key:A},navigationType:s}},[h,p,g,E,S,A,s]);return $n(k!=null,`<Router basename="${h}"> is not able to match the URL "${p}${g}${E}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:F.createElement(Kn.Provider,{value:m},F.createElement(Ru.Provider,{children:e,value:k}))}function eR({children:i,location:e}){return z1(tp(i),e)}function tp(i,e=[]){let t=[];return F.Children.forEach(i,(s,o)=>{if(!F.isValidElement(s))return;let u=[...e,o];if(s.type===F.Fragment){t.push.apply(t,tp(s.props.children,u));return}at(s.type===Fs,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),at(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=tp(s.props.children,u)),t.push(h)}),t}var Eh="get",Th="application/x-www-form-urlencoded";function of(i){return i!=null&&typeof i.tagName=="string"}function tR(i){return of(i)&&i.tagName.toLowerCase()==="button"}function nR(i){return of(i)&&i.tagName.toLowerCase()==="form"}function iR(i){return of(i)&&i.tagName.toLowerCase()==="input"}function rR(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function sR(i,e){return i.button===0&&(!e||e==="_self")&&!rR(i)}var fh=null;function aR(){if(fh===null)try{new FormData(document.createElement("form"),0),fh=!1}catch{fh=!0}return fh}var oR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vm(i){return i!=null&&!oR.has(i)?($n(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Th}"`),null):i}function lR(i,e){let t,s,o,u,h;if(nR(i)){let m=i.getAttribute("action");s=m?er(m,e):null,t=i.getAttribute("method")||Eh,o=Vm(i.getAttribute("enctype"))||Th,u=new FormData(i)}else if(tR(i)||iR(i)&&(i.type==="submit"||i.type==="image")){let m=i.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=i.getAttribute("formaction")||m.getAttribute("action");if(s=p?er(p,e):null,t=i.getAttribute("formmethod")||m.getAttribute("method")||Eh,o=Vm(i.getAttribute("formenctype"))||Vm(m.getAttribute("enctype"))||Th,u=new FormData(m,i),!aR()){let{name:g,type:E,value:S}=i;if(E==="image"){let A=g?`${g}.`:"";u.append(`${A}x`,"0"),u.append(`${A}y`,"0")}else g&&u.append(g,S)}}else{if(of(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Eh,s=null,o=Th,h=i}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:u,body:h}}function Hp(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}async function uR(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cR(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function hR(i,e,t){let s=await Promise.all(i.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await uR(u,t);return h.links?h.links():[]}return[]}));return pR(s.flat(1).filter(cR).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function mE(i,e,t,s,o,u){let h=(p,g)=>t[g]?p.route.id!==t[g].route.id:!0,m=(p,g)=>t[g].pathname!==p.pathname||t[g].route.path?.endsWith("*")&&t[g].params["*"]!==p.params["*"];return u==="assets"?e.filter((p,g)=>h(p,g)||m(p,g)):u==="data"?e.filter((p,g)=>{let E=s.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(h(p,g)||m(p,g))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function fR(i,e,{includeHydrateFallback:t}={}){return dR(i.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function dR(i){return[...new Set(i)]}function mR(i){let e={},t=Object.keys(i).sort();for(let s of t)e[s]=i[s];return e}function pR(i,e){let t=new Set;return new Set(e),i.reduce((s,o)=>{let u=JSON.stringify(mR(o));return t.has(u)||(t.add(u),s.push({key:u,link:o})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var gR=new Set([100,101,204,205]);function _R(i,e){let t=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return t.pathname==="/"?t.pathname="_root.data":e&&er(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function S0(){let i=F.useContext(Ro);return Hp(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function yR(){let i=F.useContext(sf);return Hp(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var qp=F.createContext(void 0);qp.displayName="FrameworkContext";function b0(){let i=F.useContext(qp);return Hp(i,"You must render this element inside a <HydratedRouter> element"),i}function vR(i,e){let t=F.useContext(qp),[s,o]=F.useState(!1),[u,h]=F.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:g,onMouseLeave:E,onTouchStart:S}=e,A=F.useRef(null);F.useEffect(()=>{if(i==="render"&&h(!0),i==="viewport"){let K=$=>{$.forEach(ie=>{h(ie.isIntersecting)})},q=new IntersectionObserver(K,{threshold:.5});return A.current&&q.observe(A.current),()=>{q.disconnect()}}},[i]),F.useEffect(()=>{if(s){let K=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(K)}}},[s]);let k=()=>{o(!0)},P=()=>{o(!1),h(!1)};return t?i!=="intent"?[u,A,{}]:[u,A,{onFocus:Kl(m,k),onBlur:Kl(p,P),onMouseEnter:Kl(g,k),onMouseLeave:Kl(E,P),onTouchStart:Kl(S,k)}]:[!1,A,{}]}function Kl(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function ER({page:i,...e}){let{router:t}=S0(),s=F.useMemo(()=>d0(t.routes,i,t.basename),[t.routes,i,t.basename]);return s?F.createElement(SR,{page:i,matches:s,...e}):null}function TR(i){let{manifest:e,routeModules:t}=b0(),[s,o]=F.useState([]);return F.useEffect(()=>{let u=!1;return hR(i,e,t).then(h=>{u||o(h)}),()=>{u=!0}},[i,e,t]),s}function SR({page:i,matches:e,...t}){let s=rs(),{manifest:o,routeModules:u}=b0(),{basename:h}=S0(),{loaderData:m,matches:p}=yR(),g=F.useMemo(()=>mE(i,e,p,o,s,"data"),[i,e,p,o,s]),E=F.useMemo(()=>mE(i,e,p,o,s,"assets"),[i,e,p,o,s]),S=F.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let P=new Set,K=!1;if(e.forEach($=>{let ie=o.routes[$.route.id];!ie||!ie.hasLoader||(!g.some(re=>re.route.id===$.route.id)&&$.route.id in m&&u[$.route.id]?.shouldRevalidate||ie.hasClientLoader?K=!0:P.add($.route.id))}),P.size===0)return[];let q=_R(i,h);return K&&P.size>0&&q.searchParams.set("_routes",e.filter($=>P.has($.route.id)).map($=>$.route.id).join(",")),[q.pathname+q.search]},[h,m,s,o,g,e,i,u]),A=F.useMemo(()=>fR(E,o),[E,o]),k=TR(E);return F.createElement(F.Fragment,null,S.map(P=>F.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...t})),A.map(P=>F.createElement("link",{key:P,rel:"modulepreload",href:P,...t})),k.map(({key:P,link:K})=>F.createElement("link",{key:P,...K})))}function bR(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var A0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{A0&&(window.__reactRouterVersion="7.6.3")}catch{}function AR({basename:i,children:e,window:t}){let s=F.useRef();s.current==null&&(s.current=h1({window:t,v5Compat:!0}));let o=s.current,[u,h]=F.useState({action:o.action,location:o.location}),m=F.useCallback(p=>{F.startTransition(()=>h(p))},[h]);return F.useLayoutEffect(()=>o.listen(m),[o,m]),F.createElement(Z1,{basename:i,children:e,location:u.location,navigationType:u.action,navigator:o})}var w0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,co=F.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:m,target:p,to:g,preventScrollReset:E,viewTransition:S,...A},k){let{basename:P}=F.useContext(Kn),K=typeof g=="string"&&w0.test(g),q,$=!1;if(typeof g=="string"&&K&&(q=g,A0))try{let R=new URL(window.location.href),N=g.startsWith("//")?new URL(R.protocol+g):new URL(g),V=er(N.pathname,P);N.origin===R.origin&&V!=null?g=V+N.search+N.hash:$=!0}catch{$n(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ie=U1(g,{relative:o}),[re,de,he]=vR(s,A),Se=CR(g,{replace:h,state:m,target:p,preventScrollReset:E,relative:o,viewTransition:S});function M(R){e&&e(R),R.defaultPrevented||Se(R)}let w=F.createElement("a",{...A,...he,href:q||ie,onClick:$||u?e:M,ref:bR(k,de),target:p,"data-discover":!K&&t==="render"?"true":void 0});return re&&!K?F.createElement(F.Fragment,null,w,F.createElement(ER,{page:ie})):w});co.displayName="Link";var wR=F.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:m,children:p,...g},E){let S=Iu(h,{relative:g.relative}),A=rs(),k=F.useContext(sf),{navigator:P,basename:K}=F.useContext(Kn),q=k!=null&&PR(S)&&m===!0,$=P.encodeLocation?P.encodeLocation(S).pathname:S.pathname,ie=A.pathname,re=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;t||(ie=ie.toLowerCase(),re=re?re.toLowerCase():null,$=$.toLowerCase()),re&&K&&(re=er(re,K)||re);const de=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let he=ie===$||!o&&ie.startsWith($)&&ie.charAt(de)==="/",Se=re!=null&&(re===$||!o&&re.startsWith($)&&re.charAt($.length)==="/"),M={isActive:he,isPending:Se,isTransitioning:q},w=he?e:void 0,R;typeof s=="function"?R=s(M):R=[s,he?"active":null,Se?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let N=typeof u=="function"?u(M):u;return F.createElement(co,{...g,"aria-current":w,className:R,ref:E,style:N,to:h,viewTransition:m},typeof p=="function"?p(M):p)});wR.displayName="NavLink";var RR=F.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:u,method:h=Eh,action:m,onSubmit:p,relative:g,preventScrollReset:E,viewTransition:S,...A},k)=>{let P=OR(),K=MR(m,{relative:g}),q=h.toLowerCase()==="get"?"get":"post",$=typeof m=="string"&&w0.test(m),ie=re=>{if(p&&p(re),re.defaultPrevented)return;re.preventDefault();let de=re.nativeEvent.submitter,he=de?.getAttribute("formmethod")||h;P(de||re.currentTarget,{fetcherKey:e,method:he,navigate:t,replace:o,state:u,relative:g,preventScrollReset:E,viewTransition:S})};return F.createElement("form",{ref:k,method:q,action:K,onSubmit:s?p:ie,...A,"data-discover":!$&&i==="render"?"true":void 0})});RR.displayName="Form";function IR(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function R0(i){let e=F.useContext(Ro);return at(e,IR(i)),e}function CR(i,{target:e,replace:t,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let m=af(),p=rs(),g=Iu(i,{relative:u});return F.useCallback(E=>{if(sR(E,e)){E.preventDefault();let S=t!==void 0?t:fu(p)===fu(g);m(i,{replace:S,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[p,m,g,t,s,e,i,o,u,h])}var DR=0,NR=()=>`__${String(++DR)}__`;function OR(){let{router:i}=R0("useSubmit"),{basename:e}=F.useContext(Kn),t=Y1();return F.useCallback(async(s,o={})=>{let{action:u,method:h,encType:m,formData:p,body:g}=lR(s,e);if(o.navigate===!1){let E=o.fetcherKey||NR();await i.fetch(E,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||h,formEncType:o.encType||m,flushSync:o.flushSync})}else await i.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||h,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,e,t])}function MR(i,{relative:e}={}){let{basename:t}=F.useContext(Kn),s=F.useContext(Ti);at(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Iu(i||".",{relative:e})},h=rs();if(i==null){u.search=h.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(E=>E==="")){m.delete("index"),p.filter(S=>S).forEach(S=>m.append("index",S));let E=m.toString();u.search=E?`?${E}`:""}}return(!i||i===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:Ji([t,u.pathname])),fu(u)}function PR(i,e={}){let t=F.useContext(_0);at(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=R0("useViewTransitionState"),o=Iu(i,{relative:e.relative});if(!t.isTransitioning)return!1;let u=er(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=er(t.nextLocation.pathname,s)||t.nextLocation.pathname;return kh(o.pathname,h)!=null||kh(o.pathname,u)!=null}[...gR];const VR=()=>{};var pE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},kR=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],p=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},C0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,p=o+2<i.length,g=p?i[o+2]:0,E=u>>2,S=(u&3)<<4|m>>4;let A=(m&15)<<2|g>>6,k=g&63;p||(k=64,h||(A=64)),s.push(t[E],t[S],t[A],t[k])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(I0(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):kR(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const g=o<i.length?t[i.charAt(o)]:64;++o;const S=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||g==null||S==null)throw new xR;const A=u<<2|m>>4;if(s.push(A),g!==64){const k=m<<4&240|g>>2;if(s.push(k),S!==64){const P=g<<6&192|S;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};let xR=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const LR=function(i){const e=I0(i);return C0.encodeByteArray(e,!0)},xh=function(i){return LR(i).replace(/\./g,"")},D0=function(i){try{return C0.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=()=>UR().__FIREBASE_DEFAULTS__,zR=()=>{if(typeof process>"u"||typeof pE>"u")return;const i=pE.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},jR=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&D0(i[1]);return e&&JSON.parse(e)},lf=()=>{try{return VR()||BR()||zR()||jR()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},N0=i=>{var e,t;return(t=(e=lf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},HR=i=>{const e=N0(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},O0=()=>{var i;return(i=lf())===null||i===void 0?void 0:i.config},M0=i=>{var e;return(e=lf())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function P0(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[xh(JSON.stringify(t)),xh(JSON.stringify(h)),""].join(".")}const iu={};function $R(){const i={prod:[],emulator:[]};for(const e of Object.keys(iu))iu[e]?i.emulator.push(e):i.prod.push(e);return i}function GR(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let gE=!1;function V0(i,e){if(typeof window>"u"||typeof document>"u"||!Co(window.location.host)||iu[i]===e||iu[i]||gE)return;iu[i]=e;function t(A){return`__firebase__banner__${A}`}const s="__firebase__banner",u=$R().prod.length>0;function h(){const A=document.getElementById(s);A&&A.remove()}function m(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function p(A,k){A.setAttribute("width","24"),A.setAttribute("id",k),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function g(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{gE=!0,h()},A}function E(A,k){A.setAttribute("id",k),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function S(){const A=GR(s),k=t("text"),P=document.getElementById(k)||document.createElement("span"),K=t("learnmore"),q=document.getElementById(K)||document.createElement("a"),$=t("preprendIcon"),ie=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const re=A.element;m(re),E(q,K);const de=g();p(ie,$),re.append(ie,P,q,de),document.body.appendChild(re)}u?(P.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ie.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zt())}function QR(){var i;const e=(i=lf())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function YR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function XR(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function WR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JR(){const i=Zt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function ZR(){return!QR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eI(){try{return typeof indexedDB=="object"}catch{return!1}}function tI(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="FirebaseError";let sa=class k0 extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=nI,Object.setPrototypeOf(this,k0.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cu.prototype.create)}},Cu=class{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?iI(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new sa(o,m,s)}};function iI(i,e){return i.replace(rI,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const rI=/\{\$([^}]+)}/g;function sI(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Js(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(_E(u)&&_E(h)){if(!Js(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function _E(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Yl(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Xl(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function aI(i,e){const t=new oI(i,e);return t.subscribe.bind(t)}let oI=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");lI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=km),o.error===void 0&&(o.error=km),o.complete===void 0&&(o.complete=km);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function lI(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function km(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(i){return i&&i._delegate?i._delegate:i}let Zs=class{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new qR;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),o=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hI(e))try{this.getOrInitializeService({instanceIdentifier:$s})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=$s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$s){return this.instances.has(e)}getOptions(e=$s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$s){return this.component?this.component.multipleInstances?e:$s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cI(i){return i===$s?void 0:i}function hI(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new uI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Pe||(Pe={}));const dI={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},mI=Pe.INFO,pI={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},gI=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=pI[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Fp=class{constructor(e){this.name=e,this._logLevel=mI,this._logHandler=gI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}};const _I=(i,e)=>e.some(t=>i instanceof t);let yE,vE;function yI(){return yE||(yE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vI(){return vE||(vE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const x0=new WeakMap,np=new WeakMap,L0=new WeakMap,xm=new WeakMap,$p=new WeakMap;function EI(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t($r(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&x0.set(t,i)}).catch(()=>{}),$p.set(e,i),e}function TI(i){if(np.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});np.set(i,e)}let ip={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return np.get(i);if(e==="objectStoreNames")return i.objectStoreNames||L0.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $r(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function SI(i){ip=i(ip)}function bI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Lm(this),e,...t);return L0.set(s,e.sort?e.sort():[e]),$r(s)}:vI().includes(i)?function(...e){return i.apply(Lm(this),e),$r(x0.get(this))}:function(...e){return $r(i.apply(Lm(this),e))}}function AI(i){return typeof i=="function"?bI(i):(i instanceof IDBTransaction&&TI(i),_I(i,yI())?new Proxy(i,ip):i)}function $r(i){if(i instanceof IDBRequest)return EI(i);if(xm.has(i))return xm.get(i);const e=AI(i);return e!==i&&(xm.set(i,e),$p.set(e,i)),e}const Lm=i=>$p.get(i);function wI(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=$r(h);return s&&h.addEventListener("upgradeneeded",p=>{s($r(h.result),p.oldVersion,p.newVersion,$r(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const RI=["get","getKey","getAll","getAllKeys","count"],II=["put","add","delete","clear"],Um=new Map;function EE(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Um.get(e))return Um.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=II.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||RI.includes(t)))return;const u=async function(h,...m){const p=this.transaction(h,o?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(m.shift())),(await Promise.all([g[t](...m),o&&p.done]))[0]};return Um.set(e,u),u}SI(i=>({...i,get:(e,t,s)=>EE(e,t)||i.get(e,t,s),has:(e,t)=>!!EE(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let CI=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(DI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}};function DI(i){const e=i.getComponent();return e?.type==="VERSION"}const rp="@firebase/app",TE="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Fp("@firebase/app"),NI="@firebase/app-compat",OI="@firebase/analytics-compat",MI="@firebase/analytics",PI="@firebase/app-check-compat",VI="@firebase/app-check",kI="@firebase/auth",xI="@firebase/auth-compat",LI="@firebase/database",UI="@firebase/data-connect",BI="@firebase/database-compat",zI="@firebase/functions",jI="@firebase/functions-compat",HI="@firebase/installations",qI="@firebase/installations-compat",FI="@firebase/messaging",$I="@firebase/messaging-compat",GI="@firebase/performance",KI="@firebase/performance-compat",QI="@firebase/remote-config",YI="@firebase/remote-config-compat",XI="@firebase/storage",WI="@firebase/storage-compat",JI="@firebase/firestore",ZI="@firebase/ai",eC="@firebase/firestore-compat",tC="firebase",nC="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="[DEFAULT]",iC={[rp]:"fire-core",[NI]:"fire-core-compat",[MI]:"fire-analytics",[OI]:"fire-analytics-compat",[VI]:"fire-app-check",[PI]:"fire-app-check-compat",[kI]:"fire-auth",[xI]:"fire-auth-compat",[LI]:"fire-rtdb",[UI]:"fire-data-connect",[BI]:"fire-rtdb-compat",[zI]:"fire-fn",[jI]:"fire-fn-compat",[HI]:"fire-iid",[qI]:"fire-iid-compat",[FI]:"fire-fcm",[$I]:"fire-fcm-compat",[GI]:"fire-perf",[KI]:"fire-perf-compat",[QI]:"fire-rc",[YI]:"fire-rc-compat",[XI]:"fire-gcs",[WI]:"fire-gcs-compat",[JI]:"fire-fst",[eC]:"fire-fst-compat",[ZI]:"fire-vertex","fire-js":"fire-js",[tC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=new Map,rC=new Map,ap=new Map;function SE(i,e){try{i.container.addComponent(e)}catch(t){tr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function yo(i){const e=i.name;if(ap.has(e))return tr.debug(`There were multiple attempts to register component ${e}.`),!1;ap.set(e,i);for(const t of Lh.values())SE(t,i);for(const t of rC.values())SE(t,i);return!0}function Gp(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function vn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new Cu("app","Firebase",sC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=nC;function U0(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:sp,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw Gr.create("bad-app-name",{appName:String(o)});if(t||(t=O0()),!t)throw Gr.create("no-options");const u=Lh.get(o);if(u){if(Js(t,u.options)&&Js(s,u.config))return u;throw Gr.create("duplicate-app",{appName:o})}const h=new fI(o);for(const p of ap.values())h.addComponent(p);const m=new aC(t,s,h);return Lh.set(o,m),m}function B0(i=sp){const e=Lh.get(i);if(!e&&i===sp&&O0())return U0();if(!e)throw Gr.create("no-app",{appName:i});return e}function Kr(i,e,t){var s;let o=(s=iC[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tr.warn(m.join(" "));return}yo(new Zs(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC="firebase-heartbeat-database",lC=1,du="firebase-heartbeat-store";let Bm=null;function z0(){return Bm||(Bm=wI(oC,lC,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(du)}catch(t){console.warn(t)}}}}).catch(i=>{throw Gr.create("idb-open",{originalErrorMessage:i.message})})),Bm}async function uC(i){try{const t=(await z0()).transaction(du),s=await t.objectStore(du).get(j0(i));return await t.done,s}catch(e){if(e instanceof sa)tr.warn(e.message);else{const t=Gr.create("idb-get",{originalErrorMessage:e?.message});tr.warn(t.message)}}}async function bE(i,e){try{const s=(await z0()).transaction(du,"readwrite");await s.objectStore(du).put(e,j0(i)),await s.done}catch(t){if(t instanceof sa)tr.warn(t.message);else{const s=Gr.create("idb-set",{originalErrorMessage:t?.message});tr.warn(s.message)}}}function j0(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=1024,hC=30;let fC=class{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mC(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=AE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>hC){const h=pC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){tr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=AE(),{heartbeatsToSend:s,unsentEntries:o}=dC(this._heartbeatsCache.heartbeats),u=xh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return tr.warn(t),""}}};function AE(){return new Date().toISOString().substring(0,10)}function dC(i,e=cC){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),wE(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),wE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}let mC=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eI()?tI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await uC(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return bE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return bE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}};function wE(i){return xh(JSON.stringify({version:2,heartbeats:i})).length}function pC(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(i){yo(new Zs("platform-logger",e=>new CI(e),"PRIVATE")),yo(new Zs("heartbeat",e=>new fC(e),"PRIVATE")),Kr(rp,TE,i),Kr(rp,TE,"esm2017"),Kr("fire-js","")}gC("");function Kp(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function H0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _C=H0,q0=new Cu("auth","Firebase",H0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=new Fp("@firebase/auth");function yC(i,...e){Uh.logLevel<=Pe.WARN&&Uh.warn(`Auth (${Do}): ${i}`,...e)}function Sh(i,...e){Uh.logLevel<=Pe.ERROR&&Uh.error(`Auth (${Do}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(i,...e){throw Yp(i,...e)}function Fn(i,...e){return Yp(i,...e)}function Qp(i,e,t){const s=Object.assign(Object.assign({},_C()),{[e]:t});return new Cu("auth","Firebase",s).create(e,{appName:i.name})}function Zi(i){return Qp(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vC(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&xn(i,"argument-error"),Qp(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yp(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return q0.create(i,...e)}function ve(i,e,...t){if(!i)throw Yp(e,...t)}function Xi(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Sh(e),new Error(e)}function nr(i,e){i||Xi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function EC(){return RE()==="http:"||RE()==="https:"}function RE(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EC()||XR()||"connection"in navigator)?navigator.onLine:!0}function SC(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,nr(t>e,"Short delay should be less than long delay!"),this.isMobile=KR()||WR()}get(){return TC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(i,e){nr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F0=class{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wC=new Nu(3e4,6e4);function ss(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function ar(i,e,t,s,o={}){return $0(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Du(Object.assign({key:i.config.apiKey},h)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},u);return YR()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Co(i.emulatorConfig.host)&&(g.credentials="include"),F0.fetch()(await G0(i,i.config.apiHost,t,m),g)})}async function $0(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},bC),e);try{const o=new IC(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw dh(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw dh(i,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw dh(i,"email-already-in-use",h);if(p==="USER_DISABLED")throw dh(i,"user-disabled",h);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Qp(i,E,g);xn(i,E)}}catch(o){if(o instanceof sa)throw o;xn(i,"network-request-failed",{message:String(o)})}}async function Ou(i,e,t,s,o={}){const u=await ar(i,e,t,s,o);return"mfaPendingCredential"in u&&xn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function G0(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Xp(i.config,o):`${i.config.apiScheme}://${o}`;return AC.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function RC(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}let IC=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Fn(this.auth,"network-request-failed")),wC.get())})}};function dh(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Fn(i,e,s);return o.customData._tokenResponse=t,o}function IE(i){return i!==void 0&&i.enterprise!==void 0}class CC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return RC(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function DC(i,e){return ar(i,"GET","/v2/recaptchaConfig",ss(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(i,e){return ar(i,"POST","/v1/accounts:delete",e)}async function Bh(i,e){return ar(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OC(i,e=!1){const t=en(i),s=await t.getIdToken(e),o=Wp(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u?.sign_in_provider;return{claims:o,token:s,authTime:ru(zm(o.auth_time)),issuedAtTime:ru(zm(o.iat)),expirationTime:ru(zm(o.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function zm(i){return Number(i)*1e3}function Wp(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Sh("JWT malformed, contained fewer than 3 sections"),null;try{const o=D0(t);return o?JSON.parse(o):(Sh("Failed to decode base64 JWT payload"),null)}catch(o){return Sh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function CE(i){const e=Wp(i);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof sa&&MC(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function MC({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PC=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lp=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ru(this.lastLoginAt),this.creationTime=ru(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zh(i){var e;const t=i.auth,s=await i.getIdToken(),o=await vo(i,Bh(t,{idToken:s}));ve(o?.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?K0(u.providerUserInfo):[],m=kC(i.providerData,h),p=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!m?.length,E=p?g:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new lp(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,S)}async function VC(i){const e=en(i);await zh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kC(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function K0(i){return i.map(e=>{var{providerId:t}=e,s=Kp(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(i,e){const t=await $0(i,{},async()=>{const s=Du({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await G0(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:s};return i.emulatorConfig&&Co(i.emulatorConfig.host)&&(p.credentials="include"),F0.fetch()(h,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function LC(i,e){return ar(i,"POST","/v2/accounts:revokeToken",ss(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jm=class up{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):CE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=CE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await xC(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new up;return s&&(ve(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ve(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new up,this.toJSON())}_performRefresh(){return Xi("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(i,e){ve(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}let lo=class Wl{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Kp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new lp(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await vo(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return OC(this,e)}reload(){return VC(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Wl(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await zh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(Zi(this.auth));const e=await this.getIdToken();return await vo(this,NC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,p,g,E;const S=(s=t.displayName)!==null&&s!==void 0?s:void 0,A=(o=t.email)!==null&&o!==void 0?o:void 0,k=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,P=(h=t.photoURL)!==null&&h!==void 0?h:void 0,K=(m=t.tenantId)!==null&&m!==void 0?m:void 0,q=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,$=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ie=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:re,emailVerified:de,isAnonymous:he,providerData:Se,stsTokenManager:M}=t;ve(re&&M,e,"internal-error");const w=jm.fromJSON(this.name,M);ve(typeof re=="string",e,"internal-error"),xr(S,e.name),xr(A,e.name),ve(typeof de=="boolean",e,"internal-error"),ve(typeof he=="boolean",e,"internal-error"),xr(k,e.name),xr(P,e.name),xr(K,e.name),xr(q,e.name),xr($,e.name),xr(ie,e.name);const R=new Wl({uid:re,auth:e,email:A,emailVerified:de,displayName:S,isAnonymous:he,photoURL:P,phoneNumber:k,tenantId:K,stsTokenManager:w,createdAt:$,lastLoginAt:ie});return Se&&Array.isArray(Se)&&(R.providerData=Se.map(N=>Object.assign({},N))),q&&(R._redirectEventId=q),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new jm;o.updateFromServerResponse(t);const u=new Wl({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await zh(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?K0(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!u?.length,m=new jm;m.updateFromIdToken(s);const p=new Wl({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new lp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(p,g),p}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=new Map;function Wi(i){nr(i instanceof Function,"Expected a class definition");let e=DE.get(i);return e?(nr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,DE.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q0=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Q0.type="NONE";const NE=Q0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(i,e,t){return`firebase:${i}:${e}:${t}`}let OE=class Ah{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=bh(this.userKey,o.apiKey,u),this.fullPersistenceKey=bh("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Bh(this.auth,{idToken:e}).catch(()=>{});return t?lo._fromGetAccountInfoResponse(this.auth,t,e):null}return lo._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Ah(Wi(NE),e,s);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||Wi(NE);const h=bh(s,e.config.apiKey,e.name);let m=null;for(const g of t)try{const E=await g._get(h);if(E){let S;if(typeof E=="string"){const A=await Bh(e,{idToken:E}).catch(()=>{});if(!A)break;S=await lo._fromGetAccountInfoResponse(e,A,E)}else S=lo._fromJSON(e,E);g!==u&&(m=S),u=g;break}}catch{}const p=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new Ah(u,e,s):(u=p[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(h)}catch{}})),new Ah(u,e,s))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(J0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Y0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eS(e))return"Blackberry";if(tS(e))return"Webos";if(X0(e))return"Safari";if((e.includes("chrome/")||W0(e))&&!e.includes("edge/"))return"Chrome";if(Z0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function Y0(i=Zt()){return/firefox\//i.test(i)}function X0(i=Zt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function W0(i=Zt()){return/crios\//i.test(i)}function J0(i=Zt()){return/iemobile/i.test(i)}function Z0(i=Zt()){return/android/i.test(i)}function eS(i=Zt()){return/blackberry/i.test(i)}function tS(i=Zt()){return/webos/i.test(i)}function Jp(i=Zt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function UC(i=Zt()){var e;return Jp(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BC(){return JR()&&document.documentMode===10}function nS(i=Zt()){return Jp(i)||Z0(i)||tS(i)||eS(i)||/windows phone/i.test(i)||J0(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(i,e=[]){let t;switch(i){case"Browser":t=ME(Zt());break;case"Worker":t=`${ME(Zt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Do}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zC=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const p=e(u);h(p)}catch(p){m(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(i,e={}){return ar(i,"GET","/v2/passwordPolicy",ss(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=6;let qC=class{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:HC,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FC=class{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new PE(this),this.idTokenSubscription=new PE(this),this.beforeStateQueue=new zC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wi(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await OE.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Bh(this,{idToken:e}),s=await lo._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(vn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o?._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===m)&&p?.user&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zh(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vn(this.app))return Promise.reject(Zi(this));const t=e?en(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(Zi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vn(this.app)?Promise.reject(Zi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jC(this),t=new qC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Cu("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await LC(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wi(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await OE.create(this,[Wi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&yC(`Error while retrieving App Check token: ${t.error}`),t?.token}};function as(i){return en(i)}let PE=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=aI(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $C(i){uf=i}function rS(i){return uf.loadJS(i)}function GC(){return uf.recaptchaEnterpriseScript}function KC(){return uf.gapiScript}function QC(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class YC{constructor(){this.enterprise=new XC}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class XC{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const WC="recaptcha-enterprise",sS="NO_RECAPTCHA";class JC{constructor(e){this.type=WC,this.auth=as(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{DC(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const g=new CC(p);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,h(g.siteKey)}}).catch(p=>{m(p)})})}function o(u,h,m){const p=window.grecaptcha;IE(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(g=>{h(g)}).catch(()=>{h(sS)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new YC().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&IE(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=GC();p.length!==0&&(p+=m),rS(p).then(()=>{o(m,u,h)}).catch(g=>{h(g)})}}).catch(m=>{h(m)})})}}async function VE(i,e,t,s=!1,o=!1){const u=new JC(i);let h;if(o)h=sS;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,g=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function cp(i,e,t,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await VE(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await VE(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(i,e){const t=Gp(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Js(u,e??{}))return o;xn(o,"already-initialized")}return t.initialize({options:e})}function eD(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Wi);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function tD(i,e,t){const s=as(i);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=aS(e),{host:h,port:m}=nD(e),p=m===null?"":`:${m}`,g={url:`${u}//${h}${p}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(Js(g,s.config.emulator)&&Js(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Co(h)?(P0(`${u}//${h}${p}`),V0("Auth",!0)):iD()}function aS(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function nD(i){const e=aS(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:kE(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:kE(h)}}}function kE(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function iD(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xi("not implemented")}_getIdTokenResponse(e){return Xi("not implemented")}_linkToIdToken(e,t){return Xi("not implemented")}_getReauthenticationResolver(e){return Xi("not implemented")}}async function rD(i,e){return ar(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sD(i,e){return Ou(i,"POST","/v1/accounts:signInWithPassword",ss(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aD(i,e){return Ou(i,"POST","/v1/accounts:signInWithEmailLink",ss(i,e))}async function oD(i,e){return Ou(i,"POST","/v1/accounts:signInWithEmailLink",ss(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends Zp{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new mu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new mu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cp(e,t,"signInWithPassword",sD);case"emailLink":return aD(e,{email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cp(e,s,"signUpPassword",rD);case"emailLink":return oD(e,{idToken:t,email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(i,e){return Ou(i,"POST","/v1/accounts:signInWithIdp",ss(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD="http://localhost";class ea extends Zp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ea(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):xn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Kp(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ea(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ho(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ho(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ho(e,t)}buildRequest(){const e={requestUri:lD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Du(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cD(i){const e=Yl(Xl(i)).link,t=e?Yl(Xl(e)).deep_link_id:null,s=Yl(Xl(i)).deep_link_id;return(s?Yl(Xl(s)).link:null)||s||t||e||i}class eg{constructor(e){var t,s,o,u,h,m;const p=Yl(Xl(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(s=p.oobCode)!==null&&s!==void 0?s:null,S=uD((o=p.mode)!==null&&o!==void 0?o:null);ve(g&&E&&S,"argument-error"),this.apiKey=g,this.operation=S,this.code=E,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=p.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=p.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=cD(e);try{return new eg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.providerId=No.PROVIDER_ID}static credential(e,t){return mu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=eg.parseLink(t);return ve(s,"argument-error"),mu._fromEmailAndCode(e,s.code,s.tenantId)}}No.PROVIDER_ID="password";No.EMAIL_PASSWORD_SIGN_IN_METHOD="password";No.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends tg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends Mu{constructor(){super("facebook.com")}static credential(e){return ea._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends Mu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ea._fromParams({providerId:Yi.PROVIDER_ID,signInMethod:Yi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Yi.credentialFromTaggedObject(e)}static credentialFromError(e){return Yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Yi.credential(t,s)}catch{return null}}}Yi.GOOGLE_SIGN_IN_METHOD="google.com";Yi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Mu{constructor(){super("github.com")}static credential(e){return ea._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.GITHUB_SIGN_IN_METHOD="github.com";jr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Mu{constructor(){super("twitter.com")}static credential(e,t){return ea._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Hr.credential(t,s)}catch{return null}}}Hr.TWITTER_SIGN_IN_METHOD="twitter.com";Hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hD(i,e){return Ou(i,"POST","/v1/accounts:signUp",ss(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await lo._fromIdTokenResponse(e,s,o),h=xE(s);return new ta({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=xE(s);return new ta({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function xE(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh extends sa{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,jh.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new jh(e,t,s,o)}}function oS(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?jh._fromErrorAndOperation(i,u,e,s):u})}async function fD(i,e,t=!1){const s=await vo(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return ta._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD(i,e,t=!1){const{auth:s}=i;if(vn(s.app))return Promise.reject(Zi(s));const o="reauthenticate";try{const u=await vo(i,oS(s,o,e,i),t);ve(u.idToken,s,"internal-error");const h=Wp(u.idToken);ve(h,s,"internal-error");const{sub:m}=h;return ve(i.uid===m,s,"user-mismatch"),ta._forOperation(i,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&xn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS(i,e,t=!1){if(vn(i.app))return Promise.reject(Zi(i));const s="signIn",o=await oS(i,s,e),u=await ta._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function mD(i,e){return lS(as(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(i){const e=as(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pD(i,e,t){if(vn(i.app))return Promise.reject(Zi(i));const s=as(i),h=await cp(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hD).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&uS(i),p}),m=await ta._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function gD(i,e,t){return vn(i.app)?Promise.reject(Zi(i)):mD(en(i),No.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&uS(i),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _D(i,e){return ar(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yD(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=en(i),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await vo(s,_D(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const m=s.providerData.find(({providerId:p})=>p==="password");m&&(m.displayName=s.displayName,m.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function vD(i,e,t,s){return en(i).onIdTokenChanged(e,t,s)}function ED(i,e,t){return en(i).beforeAuthStateChanged(e,t)}function cS(i,e,t,s){return en(i).onAuthStateChanged(e,t,s)}const Hh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hh,"1"),this.storage.removeItem(Hh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD=1e3,SD=10;class fS extends hS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,p)=>{this.notifyListeners(h,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);BC()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,SD):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},TD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fS.type="LOCAL";const bD=fS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS extends hS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dS.type="SESSION";const mS=dS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new cf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async g=>g(t.origin,u)),p=await AD(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,p)=>{const g=ng("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const A=S;if(A.data.eventId===g)switch(A.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(A.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(){return window}function RD(i){di().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(){return typeof di().WorkerGlobalScope<"u"&&typeof di().importScripts=="function"}async function ID(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CD(){var i;return((i=navigator?.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function DD(){return pS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="firebaseLocalStorageDb",ND=1,qh="firebaseLocalStorage",_S="fbase_key";class Pu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function hf(i,e){return i.transaction([qh],e?"readwrite":"readonly").objectStore(qh)}function OD(){const i=indexedDB.deleteDatabase(gS);return new Pu(i).toPromise()}function hp(){const i=indexedDB.open(gS,ND);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(qh,{keyPath:_S})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(qh)?e(s):(s.close(),await OD(),e(await hp()))})})}async function LE(i,e,t){const s=hf(i,!0).put({[_S]:e,value:t});return new Pu(s).toPromise()}async function MD(i,e){const t=hf(i,!1).get(e),s=await new Pu(t).toPromise();return s===void 0?null:s.value}function UE(i,e){const t=hf(i,!0).delete(e);return new Pu(t).toPromise()}const PD=800,VD=3;class yS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>VD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cf._getInstance(DD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ID(),!this.activeServiceWorker)return;this.sender=new wD(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hp();return await LE(e,Hh,"1"),await UE(e,Hh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>LE(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>MD(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>UE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=hf(o,!1).getAll();return new Pu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yS.type="LOCAL";const kD=yS;new Nu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(i,e){return e?Wi(e):(ve(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig extends Zp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ho(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ho(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xD(i){return lS(i.auth,new ig(i),i.bypassAuthState)}function LD(i){const{auth:e,user:t}=i;return ve(t,e,"internal-error"),dD(t,new ig(i),i.bypassAuthState)}async function UD(i){const{auth:e,user:t}=i;return ve(t,e,"internal-error"),fD(t,new ig(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xD;case"linkViaPopup":case"linkViaRedirect":return UD;case"reauthViaPopup":case"reauthViaRedirect":return LD;default:xn(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD=new Nu(2e3,1e4);async function zD(i,e,t){if(vn(i.app))return Promise.reject(Fn(i,"operation-not-supported-in-this-environment"));const s=as(i);vC(i,e,tg);const o=vS(s,t);return new Gs(s,"signInViaPopup",e,o).executeNotNull()}class Gs extends ES{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Gs.currentPopupAction&&Gs.currentPopupAction.cancel(),Gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=ng();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BD.get())};e()}}Gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD="pendingRedirect",wh=new Map;class HD extends ES{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=wh.get(this.auth._key());if(!e){try{const s=await qD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}wh.set(this.auth._key(),e)}return this.bypassAuthState||wh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qD(i,e){const t=GD(e),s=$D(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function FD(i,e){wh.set(i._key(),e)}function $D(i){return Wi(i._redirectPersistence)}function GD(i){return bh(jD,i.config.apiKey,i.name)}async function KD(i,e,t=!1){if(vn(i.app))return Promise.reject(Zi(i));const s=as(i),o=vS(s,e),h=await new HD(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=10*60*1e3;class YD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!TS(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Fn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QD&&this.cachedEventUids.clear(),this.cachedEventUids.has(BE(e))}saveEventToCache(e){this.cachedEventUids.add(BE(e)),this.lastProcessedEventTime=Date.now()}}function BE(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function TS({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function XD(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return TS(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WD(i,e={}){return ar(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZD=/^https?/;async function eN(i){if(i.config.emulator)return;const{authorizedDomains:e}=await WD(i);for(const t of e)try{if(tN(t))return}catch{}xn(i,"unauthorized-domain")}function tN(i){const e=op(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!ZD.test(t))return!1;if(JD.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=new Nu(3e4,6e4);function zE(){const i=di().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function iN(i){return new Promise((e,t)=>{var s,o,u;function h(){zE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zE(),t(Fn(i,"network-request-failed"))},timeout:nN.get()})}if(!((o=(s=di().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=di().gapi)===null||u===void 0)&&u.load)h();else{const m=QC("iframefcb");return di()[m]=()=>{gapi.load?h():t(Fn(i,"network-request-failed"))},rS(`${KC()}?onload=${m}`).catch(p=>t(p))}}).catch(e=>{throw Rh=null,e})}let Rh=null;function rN(i){return Rh=Rh||iN(i),Rh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=new Nu(5e3,15e3),aN="__/auth/iframe",oN="emulator/auth/iframe",lN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cN(i){const e=i.config;ve(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Xp(e,oN):`https://${i.config.authDomain}/${aN}`,s={apiKey:e.apiKey,appName:i.name,v:Do},o=uN.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Du(s).slice(1)}`}async function hN(i){const e=await rN(i),t=di().gapi;return ve(t,i,"internal-error"),e.open({where:document.body,url:cN(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lN,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Fn(i,"network-request-failed"),m=di().setTimeout(()=>{u(h)},sN.get());function p(){di().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dN=500,mN=600,pN="_blank",gN="http://localhost";class jE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _N(i,e,t,s=dN,o=mN){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p=Object.assign(Object.assign({},fN),{width:s.toString(),height:o.toString(),top:u,left:h}),g=Zt().toLowerCase();t&&(m=W0(g)?pN:t),Y0(g)&&(e=e||gN,p.scrollbars="yes");const E=Object.entries(p).reduce((A,[k,P])=>`${A}${k}=${P},`,"");if(UC(g)&&m!=="_self")return yN(e||"",m),new jE(null);const S=window.open(e||"",m,E);ve(S,i,"popup-blocked");try{S.focus()}catch{}return new jE(S)}function yN(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN="__/auth/handler",EN="emulator/auth/handler",TN=encodeURIComponent("fac");async function HE(i,e,t,s,o,u){ve(i.config.authDomain,i,"auth-domain-config-required"),ve(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Do,eventId:o};if(e instanceof tg){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",sI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))h[E]=S}if(e instanceof Mu){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await i._getAppCheckToken(),g=p?`#${TN}=${encodeURIComponent(p)}`:"";return`${SN(i)}?${Du(m).slice(1)}${g}`}function SN({config:i}){return i.emulator?Xp(i,EN):`https://${i.authDomain}/${vN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="webStorageSupport";class bN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mS,this._completeRedirectFn=KD,this._overrideRedirectResult=FD}async _openPopup(e,t,s,o){var u;nr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await HE(e,t,s,op(),o);return _N(e,h,ng())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await HE(e,t,s,op(),o);return RD(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(nr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await hN(e),s=new YD(e);return t.register("authEvent",o=>(ve(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Hm,{type:Hm},o=>{var u;const h=(u=o?.[0])===null||u===void 0?void 0:u[Hm];h!==void 0&&t(!!h),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nS()||X0()||Jp()}}const AN=bN;var qE="@firebase/auth",FE="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wN=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IN(i){yo(new Zs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iS(i)},g=new FC(s,o,u,p);return eD(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),yo(new Zs("auth-internal",e=>{const t=as(e.getProvider("auth").getImmediate());return(s=>new wN(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kr(qE,FE,RN(i)),Kr(qE,FE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=5*60,DN=M0("authIdTokenMaxAge")||CN;let $E=null;const NN=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>DN)return;const o=t?.token;$E!==o&&($E=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function ON(i=B0()){const e=Gp(i,"auth");if(e.isInitialized())return e.getImmediate();const t=ZC(i,{popupRedirectResolver:AN,persistence:[kD,bD,mS]}),s=M0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=NN(u.toString());ED(t,h,()=>h(t.currentUser)),vD(t,m=>h(m))}}const o=N0("auth");return o&&tD(t,`http://${o}`),t}function MN(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}$C({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Fn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",MN().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IN("Browser");var PN="firebase",VN="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kr(PN,VN,"app");var GE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qr,SS;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,w){function R(){}R.prototype=w.prototype,M.D=w.prototype,M.prototype=new R,M.prototype.constructor=M,M.C=function(N,V,L){for(var C=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)C[Ut-2]=arguments[Ut];return w.prototype[V].apply(N,C)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,w,R){R||(R=0);var N=Array(16);if(typeof w=="string")for(var V=0;16>V;++V)N[V]=w.charCodeAt(R++)|w.charCodeAt(R++)<<8|w.charCodeAt(R++)<<16|w.charCodeAt(R++)<<24;else for(V=0;16>V;++V)N[V]=w[R++]|w[R++]<<8|w[R++]<<16|w[R++]<<24;w=M.g[0],R=M.g[1],V=M.g[2];var L=M.g[3],C=w+(L^R&(V^L))+N[0]+3614090360&4294967295;w=R+(C<<7&4294967295|C>>>25),C=L+(V^w&(R^V))+N[1]+3905402710&4294967295,L=w+(C<<12&4294967295|C>>>20),C=V+(R^L&(w^R))+N[2]+606105819&4294967295,V=L+(C<<17&4294967295|C>>>15),C=R+(w^V&(L^w))+N[3]+3250441966&4294967295,R=V+(C<<22&4294967295|C>>>10),C=w+(L^R&(V^L))+N[4]+4118548399&4294967295,w=R+(C<<7&4294967295|C>>>25),C=L+(V^w&(R^V))+N[5]+1200080426&4294967295,L=w+(C<<12&4294967295|C>>>20),C=V+(R^L&(w^R))+N[6]+2821735955&4294967295,V=L+(C<<17&4294967295|C>>>15),C=R+(w^V&(L^w))+N[7]+4249261313&4294967295,R=V+(C<<22&4294967295|C>>>10),C=w+(L^R&(V^L))+N[8]+1770035416&4294967295,w=R+(C<<7&4294967295|C>>>25),C=L+(V^w&(R^V))+N[9]+2336552879&4294967295,L=w+(C<<12&4294967295|C>>>20),C=V+(R^L&(w^R))+N[10]+4294925233&4294967295,V=L+(C<<17&4294967295|C>>>15),C=R+(w^V&(L^w))+N[11]+2304563134&4294967295,R=V+(C<<22&4294967295|C>>>10),C=w+(L^R&(V^L))+N[12]+1804603682&4294967295,w=R+(C<<7&4294967295|C>>>25),C=L+(V^w&(R^V))+N[13]+4254626195&4294967295,L=w+(C<<12&4294967295|C>>>20),C=V+(R^L&(w^R))+N[14]+2792965006&4294967295,V=L+(C<<17&4294967295|C>>>15),C=R+(w^V&(L^w))+N[15]+1236535329&4294967295,R=V+(C<<22&4294967295|C>>>10),C=w+(V^L&(R^V))+N[1]+4129170786&4294967295,w=R+(C<<5&4294967295|C>>>27),C=L+(R^V&(w^R))+N[6]+3225465664&4294967295,L=w+(C<<9&4294967295|C>>>23),C=V+(w^R&(L^w))+N[11]+643717713&4294967295,V=L+(C<<14&4294967295|C>>>18),C=R+(L^w&(V^L))+N[0]+3921069994&4294967295,R=V+(C<<20&4294967295|C>>>12),C=w+(V^L&(R^V))+N[5]+3593408605&4294967295,w=R+(C<<5&4294967295|C>>>27),C=L+(R^V&(w^R))+N[10]+38016083&4294967295,L=w+(C<<9&4294967295|C>>>23),C=V+(w^R&(L^w))+N[15]+3634488961&4294967295,V=L+(C<<14&4294967295|C>>>18),C=R+(L^w&(V^L))+N[4]+3889429448&4294967295,R=V+(C<<20&4294967295|C>>>12),C=w+(V^L&(R^V))+N[9]+568446438&4294967295,w=R+(C<<5&4294967295|C>>>27),C=L+(R^V&(w^R))+N[14]+3275163606&4294967295,L=w+(C<<9&4294967295|C>>>23),C=V+(w^R&(L^w))+N[3]+4107603335&4294967295,V=L+(C<<14&4294967295|C>>>18),C=R+(L^w&(V^L))+N[8]+1163531501&4294967295,R=V+(C<<20&4294967295|C>>>12),C=w+(V^L&(R^V))+N[13]+2850285829&4294967295,w=R+(C<<5&4294967295|C>>>27),C=L+(R^V&(w^R))+N[2]+4243563512&4294967295,L=w+(C<<9&4294967295|C>>>23),C=V+(w^R&(L^w))+N[7]+1735328473&4294967295,V=L+(C<<14&4294967295|C>>>18),C=R+(L^w&(V^L))+N[12]+2368359562&4294967295,R=V+(C<<20&4294967295|C>>>12),C=w+(R^V^L)+N[5]+4294588738&4294967295,w=R+(C<<4&4294967295|C>>>28),C=L+(w^R^V)+N[8]+2272392833&4294967295,L=w+(C<<11&4294967295|C>>>21),C=V+(L^w^R)+N[11]+1839030562&4294967295,V=L+(C<<16&4294967295|C>>>16),C=R+(V^L^w)+N[14]+4259657740&4294967295,R=V+(C<<23&4294967295|C>>>9),C=w+(R^V^L)+N[1]+2763975236&4294967295,w=R+(C<<4&4294967295|C>>>28),C=L+(w^R^V)+N[4]+1272893353&4294967295,L=w+(C<<11&4294967295|C>>>21),C=V+(L^w^R)+N[7]+4139469664&4294967295,V=L+(C<<16&4294967295|C>>>16),C=R+(V^L^w)+N[10]+3200236656&4294967295,R=V+(C<<23&4294967295|C>>>9),C=w+(R^V^L)+N[13]+681279174&4294967295,w=R+(C<<4&4294967295|C>>>28),C=L+(w^R^V)+N[0]+3936430074&4294967295,L=w+(C<<11&4294967295|C>>>21),C=V+(L^w^R)+N[3]+3572445317&4294967295,V=L+(C<<16&4294967295|C>>>16),C=R+(V^L^w)+N[6]+76029189&4294967295,R=V+(C<<23&4294967295|C>>>9),C=w+(R^V^L)+N[9]+3654602809&4294967295,w=R+(C<<4&4294967295|C>>>28),C=L+(w^R^V)+N[12]+3873151461&4294967295,L=w+(C<<11&4294967295|C>>>21),C=V+(L^w^R)+N[15]+530742520&4294967295,V=L+(C<<16&4294967295|C>>>16),C=R+(V^L^w)+N[2]+3299628645&4294967295,R=V+(C<<23&4294967295|C>>>9),C=w+(V^(R|~L))+N[0]+4096336452&4294967295,w=R+(C<<6&4294967295|C>>>26),C=L+(R^(w|~V))+N[7]+1126891415&4294967295,L=w+(C<<10&4294967295|C>>>22),C=V+(w^(L|~R))+N[14]+2878612391&4294967295,V=L+(C<<15&4294967295|C>>>17),C=R+(L^(V|~w))+N[5]+4237533241&4294967295,R=V+(C<<21&4294967295|C>>>11),C=w+(V^(R|~L))+N[12]+1700485571&4294967295,w=R+(C<<6&4294967295|C>>>26),C=L+(R^(w|~V))+N[3]+2399980690&4294967295,L=w+(C<<10&4294967295|C>>>22),C=V+(w^(L|~R))+N[10]+4293915773&4294967295,V=L+(C<<15&4294967295|C>>>17),C=R+(L^(V|~w))+N[1]+2240044497&4294967295,R=V+(C<<21&4294967295|C>>>11),C=w+(V^(R|~L))+N[8]+1873313359&4294967295,w=R+(C<<6&4294967295|C>>>26),C=L+(R^(w|~V))+N[15]+4264355552&4294967295,L=w+(C<<10&4294967295|C>>>22),C=V+(w^(L|~R))+N[6]+2734768916&4294967295,V=L+(C<<15&4294967295|C>>>17),C=R+(L^(V|~w))+N[13]+1309151649&4294967295,R=V+(C<<21&4294967295|C>>>11),C=w+(V^(R|~L))+N[4]+4149444226&4294967295,w=R+(C<<6&4294967295|C>>>26),C=L+(R^(w|~V))+N[11]+3174756917&4294967295,L=w+(C<<10&4294967295|C>>>22),C=V+(w^(L|~R))+N[2]+718787259&4294967295,V=L+(C<<15&4294967295|C>>>17),C=R+(L^(V|~w))+N[9]+3951481745&4294967295,M.g[0]=M.g[0]+w&4294967295,M.g[1]=M.g[1]+(V+(C<<21&4294967295|C>>>11))&4294967295,M.g[2]=M.g[2]+V&4294967295,M.g[3]=M.g[3]+L&4294967295}s.prototype.u=function(M,w){w===void 0&&(w=M.length);for(var R=w-this.blockSize,N=this.B,V=this.h,L=0;L<w;){if(V==0)for(;L<=R;)o(this,M,L),L+=this.blockSize;if(typeof M=="string"){for(;L<w;)if(N[V++]=M.charCodeAt(L++),V==this.blockSize){o(this,N),V=0;break}}else for(;L<w;)if(N[V++]=M[L++],V==this.blockSize){o(this,N),V=0;break}}this.h=V,this.o+=w},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var w=1;w<M.length-8;++w)M[w]=0;var R=8*this.o;for(w=M.length-8;w<M.length;++w)M[w]=R&255,R/=256;for(this.u(M),M=Array(16),w=R=0;4>w;++w)for(var N=0;32>N;N+=8)M[R++]=this.g[w]>>>N&255;return M};function u(M,w){var R=m;return Object.prototype.hasOwnProperty.call(R,M)?R[M]:R[M]=w(M)}function h(M,w){this.h=w;for(var R=[],N=!0,V=M.length-1;0<=V;V--){var L=M[V]|0;N&&L==w||(R[V]=L,N=!1)}this.g=R}var m={};function p(M){return-128<=M&&128>M?u(M,function(w){return new h([w|0],0>w?-1:0)}):new h([M|0],0>M?-1:0)}function g(M){if(isNaN(M)||!isFinite(M))return S;if(0>M)return q(g(-M));for(var w=[],R=1,N=0;M>=R;N++)w[N]=M/R|0,R*=4294967296;return new h(w,0)}function E(M,w){if(M.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(M.charAt(0)=="-")return q(E(M.substring(1),w));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=g(Math.pow(w,8)),N=S,V=0;V<M.length;V+=8){var L=Math.min(8,M.length-V),C=parseInt(M.substring(V,V+L),w);8>L?(L=g(Math.pow(w,L)),N=N.j(L).add(g(C))):(N=N.j(R),N=N.add(g(C)))}return N}var S=p(0),A=p(1),k=p(16777216);i=h.prototype,i.m=function(){if(K(this))return-q(this).m();for(var M=0,w=1,R=0;R<this.g.length;R++){var N=this.i(R);M+=(0<=N?N:4294967296+N)*w,w*=4294967296}return M},i.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(P(this))return"0";if(K(this))return"-"+q(this).toString(M);for(var w=g(Math.pow(M,6)),R=this,N="";;){var V=de(R,w).g;R=$(R,V.j(w));var L=((0<R.g.length?R.g[0]:R.h)>>>0).toString(M);if(R=V,P(R))return L+N;for(;6>L.length;)L="0"+L;N=L+N}},i.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function P(M){if(M.h!=0)return!1;for(var w=0;w<M.g.length;w++)if(M.g[w]!=0)return!1;return!0}function K(M){return M.h==-1}i.l=function(M){return M=$(this,M),K(M)?-1:P(M)?0:1};function q(M){for(var w=M.g.length,R=[],N=0;N<w;N++)R[N]=~M.g[N];return new h(R,~M.h).add(A)}i.abs=function(){return K(this)?q(this):this},i.add=function(M){for(var w=Math.max(this.g.length,M.g.length),R=[],N=0,V=0;V<=w;V++){var L=N+(this.i(V)&65535)+(M.i(V)&65535),C=(L>>>16)+(this.i(V)>>>16)+(M.i(V)>>>16);N=C>>>16,L&=65535,C&=65535,R[V]=C<<16|L}return new h(R,R[R.length-1]&-2147483648?-1:0)};function $(M,w){return M.add(q(w))}i.j=function(M){if(P(this)||P(M))return S;if(K(this))return K(M)?q(this).j(q(M)):q(q(this).j(M));if(K(M))return q(this.j(q(M)));if(0>this.l(k)&&0>M.l(k))return g(this.m()*M.m());for(var w=this.g.length+M.g.length,R=[],N=0;N<2*w;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<M.g.length;V++){var L=this.i(N)>>>16,C=this.i(N)&65535,Ut=M.i(V)>>>16,ut=M.i(V)&65535;R[2*N+2*V]+=C*ut,ie(R,2*N+2*V),R[2*N+2*V+1]+=L*ut,ie(R,2*N+2*V+1),R[2*N+2*V+1]+=C*Ut,ie(R,2*N+2*V+1),R[2*N+2*V+2]+=L*Ut,ie(R,2*N+2*V+2)}for(N=0;N<w;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=w;N<2*w;N++)R[N]=0;return new h(R,0)};function ie(M,w){for(;(M[w]&65535)!=M[w];)M[w+1]+=M[w]>>>16,M[w]&=65535,w++}function re(M,w){this.g=M,this.h=w}function de(M,w){if(P(w))throw Error("division by zero");if(P(M))return new re(S,S);if(K(M))return w=de(q(M),w),new re(q(w.g),q(w.h));if(K(w))return w=de(M,q(w)),new re(q(w.g),w.h);if(30<M.g.length){if(K(M)||K(w))throw Error("slowDivide_ only works with positive integers.");for(var R=A,N=w;0>=N.l(M);)R=he(R),N=he(N);var V=Se(R,1),L=Se(N,1);for(N=Se(N,2),R=Se(R,2);!P(N);){var C=L.add(N);0>=C.l(M)&&(V=V.add(R),L=C),N=Se(N,1),R=Se(R,1)}return w=$(M,V.j(w)),new re(V,w)}for(V=S;0<=M.l(w);){for(R=Math.max(1,Math.floor(M.m()/w.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),L=g(R),C=L.j(w);K(C)||0<C.l(M);)R-=N,L=g(R),C=L.j(w);P(L)&&(L=A),V=V.add(L),M=$(M,C)}return new re(V,M)}i.A=function(M){return de(this,M).h},i.and=function(M){for(var w=Math.max(this.g.length,M.g.length),R=[],N=0;N<w;N++)R[N]=this.i(N)&M.i(N);return new h(R,this.h&M.h)},i.or=function(M){for(var w=Math.max(this.g.length,M.g.length),R=[],N=0;N<w;N++)R[N]=this.i(N)|M.i(N);return new h(R,this.h|M.h)},i.xor=function(M){for(var w=Math.max(this.g.length,M.g.length),R=[],N=0;N<w;N++)R[N]=this.i(N)^M.i(N);return new h(R,this.h^M.h)};function he(M){for(var w=M.g.length+1,R=[],N=0;N<w;N++)R[N]=M.i(N)<<1|M.i(N-1)>>>31;return new h(R,M.h)}function Se(M,w){var R=w>>5;w%=32;for(var N=M.g.length-R,V=[],L=0;L<N;L++)V[L]=0<w?M.i(L+R)>>>w|M.i(L+R+1)<<32-w:M.i(L+R);return new h(V,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,SS=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=E,Qr=h}).apply(typeof GE<"u"?GE:typeof self<"u"?self:typeof window<"u"?window:{});var mh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bS,Jl,AS,Ih,fp,wS,RS,IS;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,_,y){return c==Array.prototype||c==Object.prototype||(c[_]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof mh=="object"&&mh];for(var _=0;_<c.length;++_){var y=c[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(c,_){if(_)e:{var y=s;c=c.split(".");for(var b=0;b<c.length-1;b++){var U=c[b];if(!(U in y))break e;y=y[U]}c=c[c.length-1],b=y[c],_=_(b),_!=b&&_!=null&&e(y,c,{configurable:!0,writable:!0,value:_})}}function u(c,_){c instanceof String&&(c+="");var y=0,b=!1,U={next:function(){if(!b&&y<c.length){var G=y++;return{value:_(G,c[G]),done:!1}}return b=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(_,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function p(c){var _=typeof c;return _=_!="object"?_:c?Array.isArray(c)?"array":_:"null",_=="array"||_=="object"&&typeof c.length=="number"}function g(c){var _=typeof c;return _=="object"&&c!=null||_=="function"}function E(c,_,y){return c.call.apply(c.bind,arguments)}function S(c,_,y){if(!c)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,b),c.apply(_,U)}}return function(){return c.apply(_,arguments)}}function A(c,_,y){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,A.apply(null,arguments)}function k(c,_){var y=Array.prototype.slice.call(arguments,1);return function(){var b=y.slice();return b.push.apply(b,arguments),c.apply(this,b)}}function P(c,_){function y(){}y.prototype=_.prototype,c.aa=_.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(b,U,G){for(var se=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)se[ke-2]=arguments[ke];return _.prototype[U].apply(b,se)}}function K(c){const _=c.length;if(0<_){const y=Array(_);for(let b=0;b<_;b++)y[b]=c[b];return y}return[]}function q(c,_){for(let y=1;y<arguments.length;y++){const b=arguments[y];if(p(b)){const U=c.length||0,G=b.length||0;c.length=U+G;for(let se=0;se<G;se++)c[U+se]=b[se]}else c.push(b)}}class ${constructor(_,y){this.i=_,this.j=y,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ie(c){return/^[\s\xa0]*$/.test(c)}function re(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function de(c){return de[" "](c),c}de[" "]=function(){};var he=re().indexOf("Gecko")!=-1&&!(re().toLowerCase().indexOf("webkit")!=-1&&re().indexOf("Edge")==-1)&&!(re().indexOf("Trident")!=-1||re().indexOf("MSIE")!=-1)&&re().indexOf("Edge")==-1;function Se(c,_,y){for(const b in c)_.call(y,c[b],b,c)}function M(c,_){for(const y in c)_.call(void 0,c[y],y,c)}function w(c){const _={};for(const y in c)_[y]=c[y];return _}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,_){let y,b;for(let U=1;U<arguments.length;U++){b=arguments[U];for(y in b)c[y]=b[y];for(let G=0;G<R.length;G++)y=R[G],Object.prototype.hasOwnProperty.call(b,y)&&(c[y]=b[y])}}function V(c){var _=1;c=c.split(":");const y=[];for(;0<_&&c.length;)y.push(c.shift()),_--;return c.length&&y.push(c.join(":")),y}function L(c){m.setTimeout(()=>{throw c},0)}function C(){var c=ze;let _=null;return c.g&&(_=c.g,c.g=c.g.next,c.g||(c.h=null),_.next=null),_}class Ut{constructor(){this.h=this.g=null}add(_,y){const b=ut.get();b.set(_,y),this.h?this.h.next=b:this.g=b,this.h=b}}var ut=new $(()=>new Q,c=>c.reset());class Q{constructor(){this.next=this.g=this.h=null}set(_,y){this.h=_,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,me=!1,ze=new Ut,D=()=>{const c=m.Promise.resolve(void 0);ae=()=>{c.then(ee)}};var ee=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(y){L(y)}var _=ut;_.j(c),100>_.h&&(_.h++,c.next=_.g,_.g=c)}me=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(c,_){this.type=c,this.g=this.target=_,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,_=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};m.addEventListener("test",y,_),m.removeEventListener("test",y,_)}catch{}return c}();function De(c,_){if(te.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,b=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=_,_=c.relatedTarget){if(he){e:{try{de(_.nodeName);var U=!0;break e}catch{}U=!1}U||(_=null)}}else y=="mouseover"?_=c.fromElement:y=="mouseout"&&(_=c.toElement);this.relatedTarget=_,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:be[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&De.aa.h.call(this)}}P(De,te);var be={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ot="closure_listenable_"+(1e6*Math.random()|0),tt=0;function Qn(c,_,y,b,U){this.listener=c,this.proxy=null,this.src=_,this.type=y,this.capture=!!b,this.ha=U,this.key=++tt,this.da=this.fa=!1}function or(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Si(c){this.src=c,this.g={},this.h=0}Si.prototype.add=function(c,_,y,b,U){var G=c.toString();c=this.g[G],c||(c=this.g[G]=[],this.h++);var se=ls(c,_,b,U);return-1<se?(_=c[se],y||(_.fa=!1)):(_=new Qn(_,this.src,G,!!b,U),_.fa=y,c.push(_)),_};function os(c,_){var y=_.type;if(y in c.g){var b=c.g[y],U=Array.prototype.indexOf.call(b,_,void 0),G;(G=0<=U)&&Array.prototype.splice.call(b,U,1),G&&(or(_),c.g[y].length==0&&(delete c.g[y],c.h--))}}function ls(c,_,y,b){for(var U=0;U<c.length;++U){var G=c[U];if(!G.da&&G.listener==_&&G.capture==!!y&&G.ha==b)return U}return-1}var us="closure_lm_"+(1e6*Math.random()|0),xo={};function Hu(c,_,y,b,U){if(Array.isArray(_)){for(var G=0;G<_.length;G++)Hu(c,_[G],y,b,U);return null}return y=qu(y),c&&c[Ot]?c.K(_,y,g(b)?!!b.capture:!1,U):En(c,_,y,!1,b,U)}function En(c,_,y,b,U,G){if(!_)throw Error("Invalid event type");var se=g(U)?!!U.capture:!!U,ke=da(c);if(ke||(c[us]=ke=new Si(c)),y=ke.add(_,y,b,se,G),y.proxy)return y;if(b=If(),y.proxy=b,b.src=c,b.listener=y,c.addEventListener)ge||(U=se),U===void 0&&(U=!1),c.addEventListener(_.toString(),b,U);else if(c.attachEvent)c.attachEvent(cs(_.toString()),b);else if(c.addListener&&c.removeListener)c.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return y}function If(){function c(y){return _.call(c.src,c.listener,y)}const _=Cf;return c}function Lo(c,_,y,b,U){if(Array.isArray(_))for(var G=0;G<_.length;G++)Lo(c,_[G],y,b,U);else b=g(b)?!!b.capture:!!b,y=qu(y),c&&c[Ot]?(c=c.i,_=String(_).toString(),_ in c.g&&(G=c.g[_],y=ls(G,y,b,U),-1<y&&(or(G[y]),Array.prototype.splice.call(G,y,1),G.length==0&&(delete c.g[_],c.h--)))):c&&(c=da(c))&&(_=c.g[_.toString()],c=-1,_&&(c=ls(_,y,b,U)),(y=-1<c?_[c]:null)&&fa(y))}function fa(c){if(typeof c!="number"&&c&&!c.da){var _=c.src;if(_&&_[Ot])os(_.i,c);else{var y=c.type,b=c.proxy;_.removeEventListener?_.removeEventListener(y,b,c.capture):_.detachEvent?_.detachEvent(cs(y),b):_.addListener&&_.removeListener&&_.removeListener(b),(y=da(_))?(os(y,c),y.h==0&&(y.src=null,_[us]=null)):or(c)}}}function cs(c){return c in xo?xo[c]:xo[c]="on"+c}function Cf(c,_){if(c.da)c=!0;else{_=new De(_,this);var y=c.listener,b=c.ha||c.src;c.fa&&fa(c),c=y.call(b,_)}return c}function da(c){return c=c[us],c instanceof Si?c:null}var Uo="__closure_events_fn_"+(1e9*Math.random()>>>0);function qu(c){return typeof c=="function"?c:(c[Uo]||(c[Uo]=function(_){return c.handleEvent(_)}),c[Uo])}function ct(){oe.call(this),this.i=new Si(this),this.M=this,this.F=null}P(ct,oe),ct.prototype[Ot]=!0,ct.prototype.removeEventListener=function(c,_,y,b){Lo(this,c,_,y,b)};function $e(c,_){var y,b=c.F;if(b)for(y=[];b;b=b.F)y.push(b);if(c=c.M,b=_.type||_,typeof _=="string")_=new te(_,c);else if(_ instanceof te)_.target=_.target||c;else{var U=_;_=new te(b,c),N(_,U)}if(U=!0,y)for(var G=y.length-1;0<=G;G--){var se=_.g=y[G];U=cn(se,b,!0,_)&&U}if(se=_.g=c,U=cn(se,b,!0,_)&&U,U=cn(se,b,!1,_)&&U,y)for(G=0;G<y.length;G++)se=_.g=y[G],U=cn(se,b,!1,_)&&U}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var c=this.i,_;for(_ in c.g){for(var y=c.g[_],b=0;b<y.length;b++)or(y[b]);delete c.g[_],c.h--}}this.F=null},ct.prototype.K=function(c,_,y,b){return this.i.add(String(c),_,!1,y,b)},ct.prototype.L=function(c,_,y,b){return this.i.add(String(c),_,!0,y,b)};function cn(c,_,y,b){if(_=c.i.g[String(_)],!_)return!0;_=_.concat();for(var U=!0,G=0;G<_.length;++G){var se=_[G];if(se&&!se.da&&se.capture==y){var ke=se.listener,Rt=se.ha||se.src;se.fa&&os(c.i,se),U=ke.call(Rt,b)!==!1&&U}}return U&&!b.defaultPrevented}function Kt(c,_,y){if(typeof c=="function")y&&(c=A(c,y));else if(c&&typeof c.handleEvent=="function")c=A(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:m.setTimeout(c,_||0)}function Fu(c){c.g=Kt(()=>{c.g=null,c.i&&(c.i=!1,Fu(c))},c.l);const _=c.h;c.h=null,c.m.apply(null,_)}class Df extends oe{constructor(_,y){super(),this.m=_,this.l=y,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Fu(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hs(c){oe.call(this),this.h=c,this.g={}}P(hs,oe);var fs=[];function ds(c){Se(c.g,function(_,y){this.g.hasOwnProperty(y)&&fa(_)},c),c.g={}}hs.prototype.N=function(){hs.aa.N.call(this),ds(this)},hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ln=m.JSON.stringify,ma=m.JSON.parse,ms=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Bo(){}Bo.prototype.h=null;function zo(c){return c.h||(c.h=c.i())}function jo(){}var bi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ai(){te.call(this,"d")}P(Ai,te);function Ho(){te.call(this,"c")}P(Ho,te);var Yn={},qo=null;function lr(){return qo=qo||new ct}Yn.La="serverreachability";function pa(c){te.call(this,Yn.La,c)}P(pa,te);function ur(c){const _=lr();$e(_,new pa(_))}Yn.STAT_EVENT="statevent";function $u(c,_){te.call(this,Yn.STAT_EVENT,c),this.stat=_}P($u,te);function rt(c){const _=lr();$e(_,new $u(_,c))}Yn.Ma="timingevent";function wt(c,_){te.call(this,Yn.Ma,c),this.size=_}P(wt,te);function _t(c,_){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},_)}function Tn(){this.g=!0}Tn.prototype.xa=function(){this.g=!1};function Fo(c,_,y,b,U,G){c.info(function(){if(c.g)if(G)for(var se="",ke=G.split("&"),Rt=0;Rt<ke.length;Rt++){var xe=ke[Rt].split("=");if(1<xe.length){var Pt=xe[0];xe=xe[1];var It=Pt.split("_");se=2<=It.length&&It[1]=="type"?se+(Pt+"="+xe+"&"):se+(Pt+"=redacted&")}}else se=null;else se=G;return"XMLHTTP REQ ("+b+") [attempt "+U+"]: "+_+`
`+y+`
`+se})}function Nf(c,_,y,b,U,G,se){c.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+U+"]: "+_+`
`+y+`
`+G+" "+se})}function cr(c,_,y,b){c.info(function(){return"XMLHTTP TEXT ("+_+"): "+ps(c,y)+(b?" "+b:"")})}function Gu(c,_){c.info(function(){return"TIMEOUT: "+_})}Tn.prototype.info=function(){};function ps(c,_){if(!c.g)return _;if(!_)return null;try{var y=JSON.parse(_);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var b=y[c];if(!(2>b.length)){var U=b[1];if(Array.isArray(U)&&!(1>U.length)){var G=U[0];if(G!="noop"&&G!="stop"&&G!="close")for(var se=1;se<U.length;se++)U[se]=""}}}}return Ln(y)}catch{return _}}var hr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xn;function Wn(){}P(Wn,Bo),Wn.prototype.g=function(){return new XMLHttpRequest},Wn.prototype.i=function(){return{}},Xn=new Wn;function tn(c,_,y,b){this.j=c,this.i=_,this.l=y,this.R=b||1,this.U=new hs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dt}function dt(){this.i=null,this.g="",this.h=!1}var $o={},ga={};function Un(c,_,y){c.L=1,c.v=Es(hn(_)),c.m=y,c.P=!0,Ri(c,null)}function Ri(c,_){c.F=Date.now(),gs(c),c.A=hn(c.v);var y=c.A,b=c.R;Array.isArray(b)||(b=[String(b)]),Wo(y.i,"t",b),c.C=0,y=c.j.J,c.h=new dt,c.g=lc(c.j,y?_:null,!c.m),0<c.O&&(c.M=new Df(A(c.Y,c,c.g),c.O)),_=c.U,y=c.g,b=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(fs[0]=U.toString()),U=fs);for(var G=0;G<U.length;G++){var se=Hu(y,U[G],b||_.handleEvent,!1,_.h||_);if(!se)break;_.g[se.key]=se}_=c.H?w(c.H):{},c.m?(c.u||(c.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,_)):(c.u="GET",c.g.ea(c.A,c.u,null,_)),ur(),Fo(c.i,c.u,c.A,c.l,c.R,c.m)}tn.prototype.ca=function(c){c=c.target;const _=this.M;_&&wn(c)==3?_.j():this.Y(c)},tn.prototype.Y=function(c){try{if(c==this.g)e:{const It=wn(this.g);var _=this.g.Ba();const Vi=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||ec(this.g)))){this.J||It!=4||_==7||(_==8||0>=Vi?ur(3):ur(2)),fr(this);var y=this.g.Z();this.X=y;t:if(Ku(this)){var b=ec(this.g);c="";var U=b.length,G=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bt(this),Jn(this);var se="";break t}this.h.i=new m.TextDecoder}for(_=0;_<U;_++)this.h.h=!0,c+=this.h.i.decode(b[_],{stream:!(G&&_==U-1)});b.length=0,this.h.g+=c,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=y==200,Nf(this.i,this.u,this.A,this.l,this.R,It,y),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,Rt=this.g;if((ke=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(ke)){var xe=ke;break t}}xe=null}if(y=xe)cr(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_s(this,y);else{this.o=!1,this.s=3,rt(12),Bt(this),Jn(this);break e}}if(this.P){y=!0;let zt;for(;!this.J&&this.C<se.length;)if(zt=Qu(this,se),zt==ga){It==4&&(this.s=4,rt(14),y=!1),cr(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==$o){this.s=4,rt(15),cr(this.i,this.l,se,"[Invalid Chunk]"),y=!1;break}else cr(this.i,this.l,zt,null),_s(this,zt);if(Ku(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||se.length!=0||this.h.h||(this.s=1,rt(16),y=!1),this.o=this.o&&y,!y)cr(this.i,this.l,se,"[Invalid Chunked Response]"),Bt(this),Jn(this);else if(0<se.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),Cs(Pt),Pt.M=!0,rt(11))}}else cr(this.i,this.l,se,null),_s(this,se);It==4&&Bt(this),this.o&&!this.J&&(It==4?sc(this.j,this):(this.o=!1,gs(this)))}else kf(this.g),y==400&&0<se.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),Bt(this),Jn(this)}}}catch{}finally{}};function Ku(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Qu(c,_){var y=c.C,b=_.indexOf(`
`,y);return b==-1?ga:(y=Number(_.substring(y,b)),isNaN(y)?$o:(b+=1,b+y>_.length?ga:(_=_.slice(b,b+y),c.C=b+y,_)))}tn.prototype.cancel=function(){this.J=!0,Bt(this)};function gs(c){c.S=Date.now()+c.I,Yu(c,c.I)}function Yu(c,_){if(c.B!=null)throw Error("WatchDog timer not null");c.B=_t(A(c.ba,c),_)}function fr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}tn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Gu(this.i,this.A),this.L!=2&&(ur(),rt(17)),Bt(this),this.s=2,Jn(this)):Yu(this,this.S-c)};function Jn(c){c.j.G==0||c.J||sc(c.j,c)}function Bt(c){fr(c);var _=c.M;_&&typeof _.ma=="function"&&_.ma(),c.M=null,ds(c.U),c.g&&(_=c.g,c.g=null,_.abort(),_.ma())}function _s(c,_){try{var y=c.j;if(y.G!=0&&(y.g==c||Go(y.h,c))){if(!c.K&&Go(y.h,c)&&y.G==3){try{var b=y.Da.g.parse(_)}catch{b=null}if(Array.isArray(b)&&b.length==3){var U=b;if(U[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)Ca(y),Ra(y);else break e;nl(y),rt(18)}}else y.za=U[1],0<y.za-y.T&&37500>U[2]&&y.F&&y.v==0&&!y.C&&(y.C=_t(A(y.Za,y),6e3));if(1>=ya(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Pi(y,11)}else if((c.K||y.g==c)&&Ca(y),!ie(_))for(U=y.Da.g.parse(_),_=0;_<U.length;_++){let xe=U[_];if(y.T=xe[0],xe=xe[1],y.G==2)if(xe[0]=="c"){y.K=xe[1],y.ia=xe[2];const Pt=xe[3];Pt!=null&&(y.la=Pt,y.j.info("VER="+y.la));const It=xe[4];It!=null&&(y.Aa=It,y.j.info("SVER="+y.Aa));const Vi=xe[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(b=1.5*Vi,y.L=b,y.j.info("backChannelRequestTimeoutMs_="+b)),b=y;const zt=c.g;if(zt){const si=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(si){var G=b.h;G.g||si.indexOf("spdy")==-1&&si.indexOf("quic")==-1&&si.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(va(G,G.h),G.h=null))}if(b.D){const rl=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;rl&&(b.ya=rl,Qe(b.I,b.D,rl))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),b=y;var se=c;if(b.qa=oc(b,b.J?b.ia:null,b.W),se.K){nn(b.h,se);var ke=se,Rt=b.L;Rt&&(ke.I=Rt),ke.B&&(fr(ke),gs(ke)),b.g=se}else ic(b);0<y.i.length&&Ia(y)}else xe[0]!="stop"&&xe[0]!="close"||Pi(y,7);else y.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?Pi(y,7):el(y):xe[0]!="noop"&&y.l&&y.l.ta(xe),y.v=0)}}ur(4)}catch{}}var Xu=class{constructor(c,_){this.g=c,this.map=_}};function Ii(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _a(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ya(c){return c.h?1:c.g?c.g.size:0}function Go(c,_){return c.h?c.h==_:c.g?c.g.has(_):!1}function va(c,_){c.g?c.g.add(_):c.h=_}function nn(c,_){c.h&&c.h==_?c.h=null:c.g&&c.g.has(_)&&c.g.delete(_)}Ii.prototype.cancel=function(){if(this.i=Ko(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ko(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let _=c.i;for(const y of c.g.values())_=_.concat(y.D);return _}return K(c.i)}function Of(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var _=[],y=c.length,b=0;b<y;b++)_.push(c[b]);return _}_=[],y=0;for(b in c)_[y++]=c[b];return _}function Ea(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var _=[];c=c.length;for(var y=0;y<c;y++)_.push(y);return _}_=[],y=0;for(const b in c)_[y++]=b;return _}}}function Qo(c,_){if(c.forEach&&typeof c.forEach=="function")c.forEach(_,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,_,void 0);else for(var y=Ea(c),b=Of(c),U=b.length,G=0;G<U;G++)_.call(void 0,b[G],y&&y[G],c)}var ys=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mf(c,_){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var b=c[y].indexOf("="),U=null;if(0<=b){var G=c[y].substring(0,b);U=c[y].substring(b+1)}else G=c[y];_(G,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function yt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof yt){this.h=c.h,vs(this,c.j),this.o=c.o,this.g=c.g,dr(this,c.s),this.l=c.l;var _=c.i,y=new Di;y.i=_.i,_.g&&(y.g=new Map(_.g),y.h=_.h),Ci(this,y),this.m=c.m}else c&&(_=String(c).match(ys))?(this.h=!1,vs(this,_[1]||"",!0),this.o=Sn(_[2]||""),this.g=Sn(_[3]||"",!0),dr(this,_[4]),this.l=Sn(_[5]||"",!0),Ci(this,_[6]||"",!0),this.m=Sn(_[7]||"")):(this.h=!1,this.i=new Di(null,this.h))}yt.prototype.toString=function(){var c=[],_=this.j;_&&c.push(Ts(_,Yo,!0),":");var y=this.g;return(y||_=="file")&&(c.push("//"),(_=this.o)&&c.push(Ts(_,Yo,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(Ts(y,y.charAt(0)=="/"?Pf:Xo,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",Ts(y,Ta)),c.join("")};function hn(c){return new yt(c)}function vs(c,_,y){c.j=y?Sn(_,!0):_,c.j&&(c.j=c.j.replace(/:$/,""))}function dr(c,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);c.s=_}else c.s=null}function Ci(c,_,y){_ instanceof Di?(c.i=_,Ju(c.i,c.h)):(y||(_=Ts(_,Vf)),c.i=new Di(_,c.h))}function Qe(c,_,y){c.i.set(_,y)}function Es(c){return Qe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Sn(c,_){return c?_?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ts(c,_,y){return typeof c=="string"?(c=encodeURI(c).replace(_,Wu),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Wu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Yo=/[#\/\?@]/g,Xo=/[#\?:]/g,Pf=/[#\?]/g,Vf=/[#\?@]/g,Ta=/#/g;function Di(c,_){this.h=this.g=null,this.i=c||null,this.j=!!_}function bn(c){c.g||(c.g=new Map,c.h=0,c.i&&Mf(c.i,function(_,y){c.add(decodeURIComponent(_.replace(/\+/g," ")),y)}))}i=Di.prototype,i.add=function(c,_){bn(this),this.i=null,c=Zn(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(_),this.h+=1,this};function Ni(c,_){bn(c),_=Zn(c,_),c.g.has(_)&&(c.i=null,c.h-=c.g.get(_).length,c.g.delete(_))}function Oi(c,_){return bn(c),_=Zn(c,_),c.g.has(_)}i.forEach=function(c,_){bn(this),this.g.forEach(function(y,b){y.forEach(function(U){c.call(_,U,b,this)},this)},this)},i.na=function(){bn(this);const c=Array.from(this.g.values()),_=Array.from(this.g.keys()),y=[];for(let b=0;b<_.length;b++){const U=c[b];for(let G=0;G<U.length;G++)y.push(_[b])}return y},i.V=function(c){bn(this);let _=[];if(typeof c=="string")Oi(this,c)&&(_=_.concat(this.g.get(Zn(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)_=_.concat(c[y])}return _},i.set=function(c,_){return bn(this),this.i=null,c=Zn(this,c),Oi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[_]),this.h+=1,this},i.get=function(c,_){return c?(c=this.V(c),0<c.length?String(c[0]):_):_};function Wo(c,_,y){Ni(c,_),0<y.length&&(c.i=null,c.g.set(Zn(c,_),K(y)),c.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],_=Array.from(this.g.keys());for(var y=0;y<_.length;y++){var b=_[y];const G=encodeURIComponent(String(b)),se=this.V(b);for(b=0;b<se.length;b++){var U=G;se[b]!==""&&(U+="="+encodeURIComponent(String(se[b]))),c.push(U)}}return this.i=c.join("&")};function Zn(c,_){return _=String(_),c.j&&(_=_.toLowerCase()),_}function Ju(c,_){_&&!c.j&&(bn(c),c.i=null,c.g.forEach(function(y,b){var U=b.toLowerCase();b!=U&&(Ni(this,b),Wo(this,U,y))},c)),c.j=_}function Ss(c,_){const y=new Tn;if(m.Image){const b=new Image;b.onload=k(An,y,"TestLoadImage: loaded",!0,_,b),b.onerror=k(An,y,"TestLoadImage: error",!1,_,b),b.onabort=k(An,y,"TestLoadImage: abort",!1,_,b),b.ontimeout=k(An,y,"TestLoadImage: timeout",!1,_,b),m.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=c}else _(!1)}function Bn(c,_){const y=new Tn,b=new AbortController,U=setTimeout(()=>{b.abort(),An(y,"TestPingServer: timeout",!1,_)},1e4);fetch(c,{signal:b.signal}).then(G=>{clearTimeout(U),G.ok?An(y,"TestPingServer: ok",!0,_):An(y,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(U),An(y,"TestPingServer: error",!1,_)})}function An(c,_,y,b,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),b(y)}catch{}}function bs(){this.g=new ms}function ei(c,_,y){const b=y||"";try{Qo(c,function(U,G){let se=U;g(U)&&(se=Ln(U)),_.push(b+G+"="+encodeURIComponent(se))})}catch(U){throw _.push(b+"type="+encodeURIComponent("_badmap")),U}}function mr(c){this.l=c.Ub||null,this.j=c.eb||!1}P(mr,Bo),mr.prototype.g=function(){return new Mi(this.l,this.j)},mr.prototype.i=function(c){return function(){return c}}({});function Mi(c,_){ct.call(this),this.D=c,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Mi,ct),i=Mi.prototype,i.open=function(c,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=_,this.readyState=1,ni(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(_.body=c),(this.D||m).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var _=c.value?c.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!c.done}))&&(this.response=this.responseText+=_)}c.done?ti(this):ni(this),this.readyState==3&&Jo(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,ti(this))},i.Qa=function(c){this.g&&(this.response=c,ti(this))},i.ga=function(){this.g&&ti(this)};function ti(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ni(c)}i.setRequestHeader=function(c,_){this.u.append(c,_)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],_=this.h.entries();for(var y=_.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=_.next();return c.join(`\r
`)};function ni(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Zo(c){let _="";return Se(c,function(y,b){_+=b,_+=":",_+=y,_+=`\r
`}),_}function Mt(c,_,y){e:{for(b in y){var b=!1;break e}b=!0}b||(y=Zo(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):Qe(c,_,y))}function qe(c){ct.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(qe,ct);var Sa=/^https?$/i,As=["POST","PUT"];i=qe.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,_,y,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);_=_?_.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xn.g(),this.v=this.o?zo(this.o):zo(Xn),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(_,String(c),!0),this.B=!1}catch(G){Zu(this,G);return}if(c=y||"",y=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var U in b)y.set(U,b[U]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const G of b.keys())y.set(G,b.get(G));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(y.keys()).find(G=>G.toLowerCase()=="content-type"),U=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(As,_,void 0))||b||U||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,se]of y)this.g.setRequestHeader(G,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ws(this),this.u=!0,this.g.send(c),this.u=!1}catch(G){Zu(this,G)}};function Zu(c,_){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=_,c.m=5,ba(c),ii(c)}function ba(c){c.A||(c.A=!0,$e(c,"complete"),$e(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,$e(this,"complete"),$e(this,"abort"),ii(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ii(this,!0)),qe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Aa(this):this.bb())},i.bb=function(){Aa(this)};function Aa(c){if(c.h&&typeof h<"u"&&(!c.v[1]||wn(c)!=4||c.Z()!=2)){if(c.u&&wn(c)==4)Kt(c.Ea,0,c);else if($e(c,"readystatechange"),wn(c)==4){c.h=!1;try{const se=c.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var y;if(!(y=_)){var b;if(b=se===0){var U=String(c.D).match(ys)[1]||null;!U&&m.self&&m.self.location&&(U=m.self.location.protocol.slice(0,-1)),b=!Sa.test(U?U.toLowerCase():"")}y=b}if(y)$e(c,"complete"),$e(c,"success");else{c.m=6;try{var G=2<wn(c)?c.g.statusText:""}catch{G=""}c.l=G+" ["+c.Z()+"]",ba(c)}}finally{ii(c)}}}}function ii(c,_){if(c.g){ws(c);const y=c.g,b=c.v[0]?()=>{}:null;c.g=null,c.v=null,_||$e(c,"ready");try{y.onreadystatechange=b}catch{}}}function ws(c){c.I&&(m.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function wn(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var _=this.g.responseText;return c&&_.indexOf(c)==0&&(_=_.substring(c.length)),ma(_)}};function ec(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function kf(c){const _={};c=(c.g&&2<=wn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<c.length;b++){if(ie(c[b]))continue;var y=V(c[b]);const U=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const G=_[U]||[];_[U]=G,G.push(y)}M(_,function(b){return b.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rs(c,_,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||_}function wa(c){this.Aa=0,this.i=[],this.j=new Tn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Rs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Rs("baseRetryDelayMs",5e3,c),this.cb=Rs("retryDelaySeedMs",1e4,c),this.Wa=Rs("forwardChannelMaxRetries",2,c),this.wa=Rs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ii(c&&c.concurrentRequestLimit),this.Da=new bs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=wa.prototype,i.la=8,i.G=1,i.connect=function(c,_,y,b){rt(0),this.W=c,this.H=_||{},y&&b!==void 0&&(this.H.OSID=y,this.H.OAID=b),this.F=this.X,this.I=oc(this,null,this.W),Ia(this)};function el(c){if(tc(c),c.G==3){var _=c.U++,y=hn(c.I);if(Qe(y,"SID",c.K),Qe(y,"RID",_),Qe(y,"TYPE","terminate"),Is(c,y),_=new tn(c,c.j,_),_.L=2,_.v=Es(hn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(_.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=_.v,y=!0),y||(_.g=lc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),gs(_)}ac(c)}function Ra(c){c.g&&(Cs(c),c.g.cancel(),c.g=null)}function tc(c){Ra(c),c.u&&(m.clearTimeout(c.u),c.u=null),Ca(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function Ia(c){if(!_a(c.h)&&!c.s){c.s=!0;var _=c.Ga;ae||D(),me||(ae(),me=!0),ze.add(_,c),c.B=0}}function xf(c,_){return ya(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=_.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=_t(A(c.Ga,c,_),il(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new tn(this,this.j,c);let G=this.o;if(this.S&&(G?(G=w(G),N(G,this.S)):G=this.S),this.m!==null||this.O||(U.H=G,G=null),this.P)e:{for(var _=0,y=0;y<this.i.length;y++){t:{var b=this.i[y];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(_+=b,4096<_){_=y;break e}if(_===4096||y===this.i.length-1){_=y+1;break e}}_=1e3}else _=1e3;_=nc(this,U,_),y=hn(this.I),Qe(y,"RID",c),Qe(y,"CVER",22),this.D&&Qe(y,"X-HTTP-Session-Id",this.D),Is(this,y),G&&(this.O?_="headers="+encodeURIComponent(String(Zo(G)))+"&"+_:this.m&&Mt(y,this.m,G)),va(this.h,U),this.Ua&&Qe(y,"TYPE","init"),this.P?(Qe(y,"$req",_),Qe(y,"SID","null"),U.T=!0,Un(U,y,null)):Un(U,y,_),this.G=2}}else this.G==3&&(c?tl(this,c):this.i.length==0||_a(this.h)||tl(this))};function tl(c,_){var y;_?y=_.l:y=c.U++;const b=hn(c.I);Qe(b,"SID",c.K),Qe(b,"RID",y),Qe(b,"AID",c.T),Is(c,b),c.m&&c.o&&Mt(b,c.m,c.o),y=new tn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),_&&(c.i=_.D.concat(c.i)),_=nc(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),va(c.h,y),Un(y,b,_)}function Is(c,_){c.H&&Se(c.H,function(y,b){Qe(_,b,y)}),c.l&&Qo({},function(y,b){Qe(_,b,y)})}function nc(c,_,y){y=Math.min(c.i.length,y);var b=c.l?A(c.l.Na,c.l,c):null;e:{var U=c.i;let G=-1;for(;;){const se=["count="+y];G==-1?0<y?(G=U[0].g,se.push("ofs="+G)):G=0:se.push("ofs="+G);let ke=!0;for(let Rt=0;Rt<y;Rt++){let xe=U[Rt].g;const Pt=U[Rt].map;if(xe-=G,0>xe)G=Math.max(0,U[Rt].g-100),ke=!1;else try{ei(Pt,se,"req"+xe+"_")}catch{b&&b(Pt)}}if(ke){b=se.join("&");break e}}}return c=c.i.splice(0,y),_.D=c,b}function ic(c){if(!c.g&&!c.u){c.Y=1;var _=c.Fa;ae||D(),me||(ae(),me=!0),ze.add(_,c),c.v=0}}function nl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=_t(A(c.Fa,c),il(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,rc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=_t(A(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Ra(this),rc(this))};function Cs(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function rc(c){c.g=new tn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var _=hn(c.qa);Qe(_,"RID","rpc"),Qe(_,"SID",c.K),Qe(_,"AID",c.T),Qe(_,"CI",c.F?"0":"1"),!c.F&&c.ja&&Qe(_,"TO",c.ja),Qe(_,"TYPE","xmlhttp"),Is(c,_),c.m&&c.o&&Mt(_,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=Es(hn(_)),y.m=null,y.P=!0,Ri(y,c)}i.Za=function(){this.C!=null&&(this.C=null,Ra(this),nl(this),rt(19))};function Ca(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function sc(c,_){var y=null;if(c.g==_){Ca(c),Cs(c),c.g=null;var b=2}else if(Go(c.h,_))y=_.D,nn(c.h,_),b=1;else return;if(c.G!=0){if(_.o)if(b==1){y=_.m?_.m.length:0,_=Date.now()-_.F;var U=c.B;b=lr(),$e(b,new wt(b,y)),Ia(c)}else ic(c);else if(U=_.s,U==3||U==0&&0<_.X||!(b==1&&xf(c,_)||b==2&&nl(c)))switch(y&&0<y.length&&(_=c.h,_.i=_.i.concat(y)),U){case 1:Pi(c,5);break;case 4:Pi(c,10);break;case 3:Pi(c,6);break;default:Pi(c,2)}}}function il(c,_){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*_}function Pi(c,_){if(c.j.info("Error code "+_),_==2){var y=A(c.fb,c),b=c.Xa;const U=!b;b=new yt(b||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||vs(b,"https"),Es(b),U?Ss(b.toString(),y):Bn(b.toString(),y)}else rt(2);c.G=0,c.l&&c.l.sa(_),ac(c),tc(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function ac(c){if(c.G=0,c.ka=[],c.l){const _=Ko(c.h);(_.length!=0||c.i.length!=0)&&(q(c.ka,_),q(c.ka,c.i),c.h.i.length=0,K(c.i),c.i.length=0),c.l.ra()}}function oc(c,_,y){var b=y instanceof yt?hn(y):new yt(y);if(b.g!="")_&&(b.g=_+"."+b.g),dr(b,b.s);else{var U=m.location;b=U.protocol,_=_?_+"."+U.hostname:U.hostname,U=+U.port;var G=new yt(null);b&&vs(G,b),_&&(G.g=_),U&&dr(G,U),y&&(G.l=y),b=G}return y=c.D,_=c.ya,y&&_&&Qe(b,y,_),Qe(b,"VER",c.la),Is(c,b),b}function lc(c,_,y){if(_&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=c.Ca&&!c.pa?new qe(new mr({eb:y})):new qe(c.pa),_.Ha(c.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function uc(){}i=uc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Da(){}Da.prototype.g=function(c,_){return new rn(c,_)};function rn(c,_){ct.call(this),this.g=new wa(_),this.l=c,this.h=_&&_.messageUrlParams||null,c=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(c?c["X-WebChannel-Content-Type"]=_.messageContentType:c={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(c?c["X-WebChannel-Client-Profile"]=_.va:c={"X-WebChannel-Client-Profile":_.va}),this.g.S=c,(c=_&&_.Sb)&&!ie(c)&&(this.g.m=c),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ie(_)&&(this.g.D=_,c=this.h,c!==null&&_ in c&&(c=this.h,_ in c&&delete c[_])),this.j=new ri(this)}P(rn,ct),rn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},rn.prototype.close=function(){el(this.g)},rn.prototype.o=function(c){var _=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=Ln(c),c=y);_.i.push(new Xu(_.Ya++,c)),_.G==3&&Ia(_)},rn.prototype.N=function(){this.g.l=null,delete this.j,el(this.g),delete this.g,rn.aa.N.call(this)};function cc(c){Ai.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var _=c.__sm__;if(_){e:{for(const y in _){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,_=_!==null&&c in _?_[c]:void 0),this.data=_}else this.data=c}P(cc,Ai);function hc(){Ho.call(this),this.status=1}P(hc,Ho);function ri(c){this.g=c}P(ri,uc),ri.prototype.ua=function(){$e(this.g,"a")},ri.prototype.ta=function(c){$e(this.g,new cc(c))},ri.prototype.sa=function(c){$e(this.g,new hc)},ri.prototype.ra=function(){$e(this.g,"b")},Da.prototype.createWebChannel=Da.prototype.g,rn.prototype.send=rn.prototype.o,rn.prototype.open=rn.prototype.m,rn.prototype.close=rn.prototype.close,IS=function(){return new Da},RS=function(){return lr()},wS=Yn,fp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hr.NO_ERROR=0,hr.TIMEOUT=8,hr.HTTP_ERROR=6,Ih=hr,wi.COMPLETE="complete",AS=wi,jo.EventType=bi,bi.OPEN="a",bi.CLOSE="b",bi.ERROR="c",bi.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Jl=jo,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,bS=qe}).apply(typeof mh<"u"?mh:typeof self<"u"?self:typeof window<"u"?window:{});const KE="@firebase/firestore",QE="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new Fp("@firebase/firestore");function ro(){return na.logLevel}function le(i,...e){if(na.logLevel<=Pe.DEBUG){const t=e.map(rg);na.debug(`Firestore (${Oo}): ${i}`,...t)}}function ir(i,...e){if(na.logLevel<=Pe.ERROR){const t=e.map(rg);na.error(`Firestore (${Oo}): ${i}`,...t)}}function Wr(i,...e){if(na.logLevel<=Pe.WARN){const t=e.map(rg);na.warn(`Firestore (${Oo}): ${i}`,...t)}}function rg(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,CS(i,s,t)}function CS(i,e,t){let s=`FIRESTORE (${Oo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw ir(s),new Error(s)}function Fe(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||CS(e,o,s)}function we(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends sa{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Wt.UNAUTHENTICATED))}shutdown(){}}class xN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class LN{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let u=new Ys;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ys,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=u;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ys)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new DS(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Wt(e)}}class UN{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class BN{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new UN(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zN{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=u=>{u.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,le("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new YE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new YE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=jN(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ce(i,e){return i<e?-1:i>e?1:0}function dp(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ce(s,o);{const u=NS(),h=HN(u.encode(XE(i,t)),u.encode(XE(e,t)));return h!==0?h:Ce(s,o)}}t+=s>65535?2:1}return Ce(i.length,e.length)}function XE(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function HN(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Ce(i[t],e[t]);return Ce(i.length,e.length)}function Eo(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE="__name__";class fi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ee(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ee(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return fi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof fi?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=fi.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ce(e.length,t.length)}static compareSegments(e,t){const s=fi.isNumericId(e),o=fi.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?fi.extractNumericId(e).compare(fi.extractNumericId(t)):dp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qr.fromString(e.substring(4,e.length-2))}}class it extends fi{construct(e,t,s){return new it(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new it(t)}static emptyPath(){return new it([])}}const qN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends fi{construct(e,t,s){return new $t(e,t,s)}static isValidIdentifier(e){return qN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===WE}static keyField(){return new $t([WE])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ue(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ue(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ue(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ue(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $t(t)}static emptyPath(){return new $t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(it.fromString(e))}static fromName(e){return new pe(it.fromString(e).popFirst(5))}static empty(){return new pe(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return it.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new it(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(i,e,t){if(!t)throw new ue(W.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function FN(i,e,t,s){if(e===!0&&s===!0)throw new ue(W.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function JE(i){if(!pe.isDocumentKey(i))throw new ue(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function ZE(i){if(pe.isDocumentKey(i))throw new ue(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function MS(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function ff(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ee(12329,{type:typeof i})}function Xs(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ue(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ff(i);throw new ue(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Vu(i,e){if(!MS(i))throw new ue(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ue(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=-62135596800,tT=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*tT);return new et(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<eT)throw new ue(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/tT}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Vu(e,et._jsonSchema))return new et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-eT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}et._jsonSchemaVersion="firestore/timestamp/1.0",et._jsonSchema={type:bt("string",et._jsonSchemaVersion),seconds:bt("number"),nanoseconds:bt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new et(0,0))}static max(){return new Ae(new et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=-1;function $N(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Ae.fromTimestamp(s===1e9?new et(t+1,0):new et(t,s));return new Jr(o,pe.empty(),e)}function GN(i){return new Jr(i.readTime,i.key,pu)}class Jr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Jr(Ae.min(),pe.empty(),pu)}static max(){return new Jr(Ae.max(),pe.empty(),pu)}}function KN(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(i.documentKey,e.documentKey),t!==0?t:Ce(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(i){if(i.code!==W.FAILED_PRECONDITION||i.message!==QN)throw i;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,s)=>{t(e)})}static reject(e){return new Z((t,s)=>{s(e)})}static waitFor(e){return new Z((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},p=>s(p))}),h=!0,u===o&&t()})}static or(e){let t=Z.resolve(!1);for(const s of e)t=t.next(o=>o?Z.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new Z((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let p=0;p<u;p++){const g=p;t(e[g]).next(E=>{h[g]=E,++m,m===u&&s(h)},E=>o(E))}})}static doWhile(e,t){return new Z((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function XN(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Po(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}df.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=-1;function mf(i){return i==null}function Fh(i){return i===0&&1/i==-1/0}function WN(i){return typeof i=="number"&&Number.isInteger(i)&&!Fh(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="";function JN(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=nT(e)),e=ZN(i.get(t),e);return nT(e)}function ZN(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case PS:t+="";break;default:t+=u}}return t}function nT(i){return i+PS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function aa(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function VS(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.comparator=e,this.root=t||Ft.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ph(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ph(this.root,e,this.comparator,!1)}getReverseIterator(){return new ph(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ph(this.root,e,this.comparator,!0)}}class ph{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Ft.RED,this.left=o??Ft.EMPTY,this.right=u??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Ft(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ft.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Ft(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rT(this.data.getIterator())}getIteratorFrom(e){return new rT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Nt(this.comparator);return t.data=e,t}}class rT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort($t.comparator)}static empty(){return new qn([])}unionWith(e){let t=new Nt($t.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new kS("Invalid base64 string: "+u):u}}(e);return new Gt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Gt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const eO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(i){if(Fe(!!i,39018),typeof i=="string"){let e=0;const t=eO.exec(i);if(Fe(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:gt(i.seconds),nanos:gt(i.nanos)}}function gt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function es(i){return typeof i=="string"?Gt.fromBase64String(i):Gt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS="server_timestamp",LS="__type__",US="__previous_value__",BS="__local_write_time__";function og(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[LS])===null||t===void 0?void 0:t.stringValue)===xS}function pf(i){const e=i.mapValue.fields[US];return og(e)?pf(e):e}function gu(i){const e=Zr(i.mapValue.fields[BS].timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,t,s,o,u,h,m,p,g,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=E}}const $h="(default)";class _u{constructor(e,t){this.projectId=e,this.database=t||$h}static empty(){return new _u("","")}get isDefaultDatabase(){return this.database===$h}isEqual(e){return e instanceof _u&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS="__type__",nO="__max__",gh={mapValue:{}},jS="__vector__",Gh="value";function ts(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?og(i)?4:rO(i)?9007199254740991:iO(i)?10:11:Ee(28295,{value:i})}function vi(i,e){if(i===e)return!0;const t=ts(i);if(t!==ts(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return gu(i).isEqual(gu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Zr(o.timestampValue),m=Zr(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return es(o.bytesValue).isEqual(es(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return gt(o.geoPointValue.latitude)===gt(u.geoPointValue.latitude)&&gt(o.geoPointValue.longitude)===gt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return gt(o.integerValue)===gt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=gt(o.doubleValue),m=gt(u.doubleValue);return h===m?Fh(h)===Fh(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return Eo(i.arrayValue.values||[],e.arrayValue.values||[],vi);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(iT(h)!==iT(m))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(m[p]===void 0||!vi(h[p],m[p])))return!1;return!0}(i,e);default:return Ee(52216,{left:i})}}function yu(i,e){return(i.values||[]).find(t=>vi(t,e))!==void 0}function To(i,e){if(i===e)return 0;const t=ts(i),s=ts(e);if(t!==s)return Ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=gt(u.integerValue||u.doubleValue),p=gt(h.integerValue||h.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(i,e);case 3:return sT(i.timestampValue,e.timestampValue);case 4:return sT(gu(i),gu(e));case 5:return dp(i.stringValue,e.stringValue);case 6:return function(u,h){const m=es(u),p=es(h);return m.compareTo(p)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),p=h.split("/");for(let g=0;g<m.length&&g<p.length;g++){const E=Ce(m[g],p[g]);if(E!==0)return E}return Ce(m.length,p.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Ce(gt(u.latitude),gt(h.latitude));return m!==0?m:Ce(gt(u.longitude),gt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return aT(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,p,g,E;const S=u.fields||{},A=h.fields||{},k=(m=S[Gh])===null||m===void 0?void 0:m.arrayValue,P=(p=A[Gh])===null||p===void 0?void 0:p.arrayValue,K=Ce(((g=k?.values)===null||g===void 0?void 0:g.length)||0,((E=P?.values)===null||E===void 0?void 0:E.length)||0);return K!==0?K:aT(k,P)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===gh.mapValue&&h===gh.mapValue)return 0;if(u===gh.mapValue)return 1;if(h===gh.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),g=h.fields||{},E=Object.keys(g);p.sort(),E.sort();for(let S=0;S<p.length&&S<E.length;++S){const A=dp(p[S],E[S]);if(A!==0)return A;const k=To(m[p[S]],g[E[S]]);if(k!==0)return k}return Ce(p.length,E.length)}(i.mapValue,e.mapValue);default:throw Ee(23264,{le:t})}}function sT(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ce(i,e);const t=Zr(i),s=Zr(e),o=Ce(t.seconds,s.seconds);return o!==0?o:Ce(t.nanos,s.nanos)}function aT(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=To(t[o],s[o]);if(u)return u}return Ce(t.length,s.length)}function So(i){return mp(i)}function mp(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=Zr(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return es(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return pe.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=mp(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${mp(t.fields[h])}`;return o+"}"}(i.mapValue):Ee(61005,{value:i})}function Ch(i){switch(ts(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pf(i);return e?16+Ch(e):16;case 5:return 2*i.stringValue.length;case 6:return es(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Ch(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return aa(s.fields,(u,h)=>{o+=u.length+Ch(h)}),o}(i.mapValue);default:throw Ee(13486,{value:i})}}function oT(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function pp(i){return!!i&&"integerValue"in i}function lg(i){return!!i&&"arrayValue"in i}function lT(i){return!!i&&"nullValue"in i}function uT(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Dh(i){return!!i&&"mapValue"in i}function iO(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[zS])===null||t===void 0?void 0:t.stringValue)===jS}function su(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return aa(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=su(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=su(i.arrayValue.values[t]);return e}return Object.assign({},i)}function rO(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===nO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.value=e}static empty(){return new Vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Dh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=su(t)}setAll(e){let t=$t.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const p=this.getFieldsMap(t);this.applyChanges(p,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=su(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Dh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Dh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){aa(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Vn(su(this.value))}}function HS(i){const e=[];return aa(i.fields,(t,s)=>{const o=new $t([t]);if(Dh(s)){const u=HS(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Jt(e,0,Ae.min(),Ae.min(),Ae.min(),Vn.empty(),0)}static newFoundDocument(e,t,s,o){return new Jt(e,1,t,Ae.min(),s,o,0)}static newNoDocument(e,t){return new Jt(e,2,t,Ae.min(),Ae.min(),Vn.empty(),0)}static newUnknownDocument(e,t){return new Jt(e,3,t,Ae.min(),Ae.min(),Vn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t){this.position=e,this.inclusive=t}}function cT(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=pe.comparator(pe.fromName(h.referenceValue),t.key):s=To(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function hT(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!vi(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t="asc"){this.field=e,this.dir=t}}function sO(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{}class St extends qS{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new oO(e,t,s):t==="array-contains"?new cO(e,s):t==="in"?new hO(e,s):t==="not-in"?new fO(e,s):t==="array-contains-any"?new dO(e,s):new St(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new lO(e,s):new uO(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(To(t,this.value)):t!==null&&ts(this.value)===ts(t)&&this.matchesComparison(To(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gn extends qS{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Gn(e,t)}matches(e){return FS(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function FS(i){return i.op==="and"}function $S(i){return aO(i)&&FS(i)}function aO(i){for(const e of i.filters)if(e instanceof Gn)return!1;return!0}function gp(i){if(i instanceof St)return i.field.canonicalString()+i.op.toString()+So(i.value);if($S(i))return i.filters.map(e=>gp(e)).join(",");{const e=i.filters.map(t=>gp(t)).join(",");return`${i.op}(${e})`}}function GS(i,e){return i instanceof St?function(s,o){return o instanceof St&&s.op===o.op&&s.field.isEqual(o.field)&&vi(s.value,o.value)}(i,e):i instanceof Gn?function(s,o){return o instanceof Gn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&GS(h,o.filters[m]),!0):!1}(i,e):void Ee(19439)}function KS(i){return i instanceof St?function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`}(i):i instanceof Gn?function(t){return t.op.toString()+" {"+t.getFilters().map(KS).join(" ,")+"}"}(i):"Filter"}class oO extends St{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class lO extends St{constructor(e,t){super(e,"in",t),this.keys=QS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class uO extends St{constructor(e,t){super(e,"not-in",t),this.keys=QS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function QS(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>pe.fromName(s.referenceValue))}class cO extends St{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return lg(t)&&yu(t.arrayValue,this.value)}}class hO extends St{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yu(this.value.arrayValue,t)}}class fO extends St{constructor(e,t){super(e,"not-in",t)}matches(e){if(yu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!yu(this.value.arrayValue,t)}}class dO extends St{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!lg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>yu(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Pe=null}}function fT(i,e=null,t=[],s=[],o=null,u=null,h=null){return new mO(i,e,t,s,o,u,h)}function ug(i){const e=we(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>gp(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),mf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>So(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>So(s)).join(",")),e.Pe=t}return e.Pe}function cg(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!sO(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!GS(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!hT(i.startAt,e.startAt)&&hT(i.endAt,e.endAt)}function _p(i){return pe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function pO(i,e,t,s,o,u,h,m){return new Vo(i,e,t,s,o,u,h,m)}function hg(i){return new Vo(i)}function dT(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function YS(i){return i.collectionGroup!==null}function au(i){const e=we(i);if(e.Te===null){e.Te=[];const t=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Nt($t.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(m=m.add(g.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Te.push(new vu(u,s))}),t.has($t.keyField().canonicalString())||e.Te.push(new vu($t.keyField(),s))}return e.Te}function mi(i){const e=we(i);return e.Ie||(e.Ie=gO(e,au(i))),e.Ie}function gO(i,e){if(i.limitType==="F")return fT(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new vu(o.field,u)});const t=i.endAt?new Kh(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Kh(i.startAt.position,i.startAt.inclusive):null;return fT(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function yp(i,e){const t=i.filters.concat([e]);return new Vo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function vp(i,e,t){return new Vo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function gf(i,e){return cg(mi(i),mi(e))&&i.limitType===e.limitType}function XS(i){return`${ug(mi(i))}|lt:${i.limitType}`}function so(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>KS(o)).join(", ")}]`),mf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>So(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>So(o)).join(",")),`Target(${s})`}(mi(i))}; limitType=${i.limitType})`}function _f(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):pe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of au(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,p){const g=cT(h,m,p);return h.inclusive?g<=0:g<0}(s.startAt,au(s),o)||s.endAt&&!function(h,m,p){const g=cT(h,m,p);return h.inclusive?g>=0:g>0}(s.endAt,au(s),o))}(i,e)}function _O(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function WS(i){return(e,t)=>{let s=!1;for(const o of au(i)){const u=yO(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function yO(i,e,t){const s=i.field.isKeyField()?pe.comparator(e.key,t.key):function(u,h,m){const p=h.data.field(u),g=m.data.field(u);return p!==null&&g!==null?To(p,g):Ee(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Ee(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){aa(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return VS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=new lt(pe.comparator);function rr(){return vO}const JS=new lt(pe.comparator);function Zl(...i){let e=JS;for(const t of i)e=e.insert(t.key,t);return e}function ZS(i){let e=JS;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Ks(){return ou()}function eb(){return ou()}function ou(){return new oa(i=>i.toString(),(i,e)=>i.isEqual(e))}const EO=new lt(pe.comparator),TO=new Nt(pe.comparator);function Ve(...i){let e=TO;for(const t of i)e=e.add(t);return e}const SO=new Nt(Ce);function bO(){return SO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fh(e)?"-0":e}}function tb(i){return{integerValue:""+i}}function AO(i,e){return WN(e)?tb(e):fg(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this._=void 0}}function wO(i,e,t){return i instanceof Qh?function(o,u){const h={fields:{[LS]:{stringValue:xS},[BS]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&og(u)&&(u=pf(u)),u&&(h.fields[US]=u),{mapValue:h}}(t,e):i instanceof Eu?ib(i,e):i instanceof Tu?rb(i,e):function(o,u){const h=nb(o,u),m=mT(h)+mT(o.Ee);return pp(h)&&pp(o.Ee)?tb(m):fg(o.serializer,m)}(i,e)}function RO(i,e,t){return i instanceof Eu?ib(i,e):i instanceof Tu?rb(i,e):t}function nb(i,e){return i instanceof Yh?function(s){return pp(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Qh extends yf{}class Eu extends yf{constructor(e){super(),this.elements=e}}function ib(i,e){const t=sb(e);for(const s of i.elements)t.some(o=>vi(o,s))||t.push(s);return{arrayValue:{values:t}}}class Tu extends yf{constructor(e){super(),this.elements=e}}function rb(i,e){let t=sb(e);for(const s of i.elements)t=t.filter(o=>!vi(o,s));return{arrayValue:{values:t}}}class Yh extends yf{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function mT(i){return gt(i.integerValue||i.doubleValue)}function sb(i){return lg(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function IO(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Eu&&o instanceof Eu||s instanceof Tu&&o instanceof Tu?Eo(s.elements,o.elements,vi):s instanceof Yh&&o instanceof Yh?vi(s.Ee,o.Ee):s instanceof Qh&&o instanceof Qh}(i.transform,e.transform)}class CO{constructor(e,t){this.version=e,this.transformResults=t}}class pi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pi}static exists(e){return new pi(void 0,e)}static updateTime(e){return new pi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nh(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class vf{}function ab(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new lb(i.key,pi.none()):new ku(i.key,i.data,pi.none());{const t=i.data,s=Vn.empty();let o=new Nt($t.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new la(i.key,s,new qn(o.toArray()),pi.none())}}function DO(i,e,t){i instanceof ku?function(o,u,h){const m=o.value.clone(),p=gT(o.fieldTransforms,u,h.transformResults);m.setAll(p),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof la?function(o,u,h){if(!Nh(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=gT(o.fieldTransforms,u,h.transformResults),p=u.data;p.setAll(ob(o)),p.setAll(m),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function lu(i,e,t,s){return i instanceof ku?function(u,h,m,p){if(!Nh(u.precondition,h))return m;const g=u.value.clone(),E=_T(u.fieldTransforms,p,h);return g.setAll(E),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null}(i,e,t,s):i instanceof la?function(u,h,m,p){if(!Nh(u.precondition,h))return m;const g=_T(u.fieldTransforms,p,h),E=h.data;return E.setAll(ob(u)),E.setAll(g),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(i,e,t,s):function(u,h,m){return Nh(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function NO(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=nb(s.transform,o||null);u!=null&&(t===null&&(t=Vn.empty()),t.set(s.field,u))}return t||null}function pT(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Eo(s,o,(u,h)=>IO(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class ku extends vf{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class la extends vf{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function ob(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function gT(i,e,t){const s=new Map;Fe(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,RO(h,m,t[o]))}return s}function _T(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,wO(u,h,e))}return s}class lb extends vf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OO extends vf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&DO(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=lu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=lu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=eb();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const p=ab(h,m);p!==null&&s.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(Ae.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ve())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,(t,s)=>pT(t,s))&&Eo(this.baseMutations,e.baseMutations,(t,s)=>pT(t,s))}}class dg{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=function(){return EO}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new dg(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt,Ue;function kO(i){switch(i){case W.OK:return Ee(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return Ee(15467,{code:i})}}function ub(i){if(i===void 0)return ir("GRPC error has no .code"),W.UNKNOWN;switch(i){case Tt.OK:return W.OK;case Tt.CANCELLED:return W.CANCELLED;case Tt.UNKNOWN:return W.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return W.INTERNAL;case Tt.UNAVAILABLE:return W.UNAVAILABLE;case Tt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Tt.NOT_FOUND:return W.NOT_FOUND;case Tt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Tt.ABORTED:return W.ABORTED;case Tt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Tt.DATA_LOSS:return W.DATA_LOSS;default:return Ee(39323,{code:i})}}(Ue=Tt||(Tt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=new Qr([4294967295,4294967295],0);function yT(i){const e=NS().encode(i),t=new SS;return t.update(e),new Uint8Array(t.digest())}function vT(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Qr([t,s],0),new Qr([o,u],0)]}class mg{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new eu(`Invalid padding: ${t}`);if(s<0)throw new eu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new eu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new eu(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Qr.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(Qr.fromNumber(s)));return o.compare(xO)===1&&(o=new Qr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=yT(e),[s,o]=vT(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new mg(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.fe===0)return;const t=yT(e),[s,o]=vT(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class eu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,xu.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ef(Ae.min(),o,new lt(Ce),rr(),Ve())}}class xu{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new xu(s,t,Ve(),Ve(),Ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class cb{constructor(e,t){this.targetId=e,this.De=t}}class hb{constructor(e,t,s=Gt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class ET{constructor(){this.ve=0,this.Ce=TT(),this.Fe=Gt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ve(),t=Ve(),s=Ve();return this.Ce.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Ee(38017,{changeType:u})}}),new xu(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=TT()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class LO{constructor(e){this.We=e,this.Ge=new Map,this.ze=rr(),this.je=_h(),this.Je=_h(),this.He=new lt(Ce)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:Ee(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,o)=>{this.nt(o)&&t(o)})}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const u=o.target;if(_p(u))if(s===0){const h=new pe(u.path);this.Xe(t,h,Jt.newNoDocument(h,Ae.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),p=m?this.ut(m,e,h):1;if(p!==0){this.rt(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,g)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=es(s).toUint8Array()}catch(p){if(p instanceof kS)return Wr("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new mg(h,o,u)}catch(p){return Wr(p instanceof eu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,u,null),o++)}),o}Pt(e){const t=new Map;this.Ge.forEach((u,h)=>{const m=this.st(h);if(m){if(u.current&&_p(m.target)){const p=new pe(m.target.path);this.Tt(p).has(h)||this.It(h,p)||this.Xe(h,p,Jt.newNoDocument(p,e))}u.Ne&&(t.set(h,u.Le()),u.ke())}});let s=Ve();this.Je.forEach((u,h)=>{let m=!0;h.forEachWhile(p=>{const g=this.st(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ze.forEach((u,h)=>h.setReadTime(e));const o=new Ef(e,t,this.He,this.ze,s);return this.ze=rr(),this.je=_h(),this.Je=_h(),this.He=new lt(Ce),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new ET,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Nt(Ce),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Nt(Ce),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ET),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function _h(){return new lt(pe.comparator)}function TT(){return new lt(pe.comparator)}const UO={asc:"ASCENDING",desc:"DESCENDING"},BO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zO={and:"AND",or:"OR"};class jO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ep(i,e){return i.useProto3Json||mf(e)?e:{value:e}}function Xh(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fb(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function HO(i,e){return Xh(i,e.toTimestamp())}function gi(i){return Fe(!!i,49232),Ae.fromTimestamp(function(t){const s=Zr(t);return new et(s.seconds,s.nanos)}(i))}function pg(i,e){return Tp(i,e).canonicalString()}function Tp(i,e){const t=function(o){return new it(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function db(i){const e=it.fromString(i);return Fe(yb(e),10190,{key:e.toString()}),e}function Sp(i,e){return pg(i.databaseId,e.path)}function qm(i,e){const t=db(e);if(t.get(1)!==i.databaseId.projectId)throw new ue(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ue(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new pe(pb(t))}function mb(i,e){return pg(i.databaseId,e)}function qO(i){const e=db(i);return e.length===4?it.emptyPath():pb(e)}function bp(i){return new it(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function pb(i){return Fe(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function ST(i,e,t){return{name:Sp(i,e),fields:t.value.mapValue.fields}}function FO(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ee(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,E){return g.useProto3Json?(Fe(E===void 0||typeof E=="string",58123),Gt.fromBase64String(E||"")):(Fe(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Gt.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(g){const E=g.code===void 0?W.UNKNOWN:ub(g.code);return new ue(E,g.message||"")}(h);t=new hb(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=qm(i,s.document.name),u=gi(s.document.updateTime),h=s.document.createTime?gi(s.document.createTime):Ae.min(),m=new Vn({mapValue:{fields:s.document.fields}}),p=Jt.newFoundDocument(o,u,h,m),g=s.targetIds||[],E=s.removedTargetIds||[];t=new Oh(g,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=qm(i,s.document),u=s.readTime?gi(s.readTime):Ae.min(),h=Jt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Oh([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=qm(i,s.document),u=s.removedTargetIds||[];t=new Oh([],u,o,null)}else{if(!("filter"in e))return Ee(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new VO(o,u),m=s.targetId;t=new cb(m,h)}}return t}function $O(i,e){let t;if(e instanceof ku)t={update:ST(i,e.key,e.value)};else if(e instanceof lb)t={delete:Sp(i,e.key)};else if(e instanceof la)t={update:ST(i,e.key,e.data),updateMask:e2(e.fieldMask)};else{if(!(e instanceof OO))return Ee(16599,{Rt:e.type});t={verify:Sp(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Qh)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Eu)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Tu)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Yh)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw Ee(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:HO(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Ee(27497)}(i,e.precondition)),t}function GO(i,e){return i&&i.length>0?(Fe(e!==void 0,14353),i.map(t=>function(o,u){let h=o.updateTime?gi(o.updateTime):gi(u);return h.isEqual(Ae.min())&&(h=gi(u)),new CO(h,o.transformResults||[])}(t,e))):[]}function KO(i,e){return{documents:[mb(i,e.path)]}}function QO(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=mb(i,o);const u=function(g){if(g.length!==0)return _b(Gn.create(g,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(g){if(g.length!==0)return g.map(E=>function(A){return{field:ao(A.field),direction:WO(A.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Ep(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{Vt:t,parent:o}}function YO(i){let e=qO(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(S){const A=gb(S);return A instanceof Gn&&$S(A)?A.getFilters():[A]}(t.where));let h=[];t.orderBy&&(h=function(S){return S.map(A=>function(P){return new vu(oo(P.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(A))}(t.orderBy));let m=null;t.limit&&(m=function(S){let A;return A=typeof S=="object"?S.value:S,mf(A)?null:A}(t.limit));let p=null;t.startAt&&(p=function(S){const A=!!S.before,k=S.values||[];return new Kh(k,A)}(t.startAt));let g=null;return t.endAt&&(g=function(S){const A=!S.before,k=S.values||[];return new Kh(k,A)}(t.endAt)),pO(e,o,h,u,m,"F",p,g)}function XO(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gb(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=oo(t.unaryFilter.field);return St.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=oo(t.unaryFilter.field);return St.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=oo(t.unaryFilter.field);return St.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=oo(t.unaryFilter.field);return St.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}}(i):i.fieldFilter!==void 0?function(t){return St.create(oo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Gn.create(t.compositeFilter.filters.map(s=>gb(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}}(t.compositeFilter.op))}(i):Ee(30097,{filter:i})}function WO(i){return UO[i]}function JO(i){return BO[i]}function ZO(i){return zO[i]}function ao(i){return{fieldPath:i.canonicalString()}}function oo(i){return $t.fromServerFormat(i.fieldPath)}function _b(i){return i instanceof St?function(t){if(t.op==="=="){if(uT(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NAN"}};if(lT(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(uT(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NOT_NAN"}};if(lT(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ao(t.field),op:JO(t.op),value:t.value}}}(i):i instanceof Gn?function(t){const s=t.getFilters().map(o=>_b(o));return s.length===1?s[0]:{compositeFilter:{op:ZO(t.op),filters:s}}}(i):Ee(54877,{filter:i})}function e2(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function yb(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t,s,o,u=Ae.min(),h=Ae.min(),m=Gt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e){this.gt=e}}function n2(i){const e=YO({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?vp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(){this.Dn=new r2}addToCollectionParentIndex(e,t){return this.Dn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(Jr.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(Jr.min())}updateCollectionGroup(e,t,s){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class r2{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Nt(it.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Nt(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vb=41943040;class un{static withCacheSize(e){return new un(e,un.DEFAULT_COLLECTION_PERCENTILE,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un.DEFAULT_COLLECTION_PERCENTILE=10,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,un.DEFAULT=new un(vb,un.DEFAULT_COLLECTION_PERCENTILE,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),un.DISABLED=new un(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new bo(0)}static ur(){return new bo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="LruGarbageCollector",s2=1048576;function wT([i,e],[t,s]){const o=Ce(i,t);return o===0?Ce(e,s):o}class a2{constructor(e){this.Tr=e,this.buffer=new Nt(wT),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();wT(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class o2{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){le(AT,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Po(t)?le(AT,"Ignoring IndexedDB error during garbage collection: ",t):await Mo(t)}await this.Rr(3e5)})}}class l2{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(df.ue);const s=new a2(t);return this.Vr.forEachTarget(e,o=>s.Er(o.sequenceNumber)).next(()=>this.Vr.gr(e,o=>s.Er(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(bT)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bT):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,u,h,m,p,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o))).next(S=>(s=S,m=Date.now(),this.removeTargets(e,s,t))).next(S=>(u=S,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(S=>(g=Date.now(),ro()<=Pe.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${S} documents in `+(g-p)+`ms
Total Duration: ${g-E}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function u2(i,e){return new l2(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(){this.changes=new oa(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&lu(s.mutation,o,qn.empty(),et.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ve()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ve()){const o=Ks();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Zl();return u.forEach((m,p)=>{h=h.insert(m,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Ks();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ve()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=rr();const h=ou(),m=function(){return ou()}();return t.forEach((p,g)=>{const E=s.get(g.key);o.has(g.key)&&(E===void 0||E.mutation instanceof la)?u=u.insert(g.key,g):E!==void 0?(h.set(g.key,E.mutation.getFieldMask()),lu(E.mutation,g,E.mutation.getFieldMask(),et.now())):h.set(g.key,qn.empty())}),this.recalculateAndSaveOverlays(e,u).next(p=>(p.forEach((g,E)=>h.set(g,E)),t.forEach((g,E)=>{var S;return m.set(g,new h2(E,(S=h.get(g))!==null&&S!==void 0?S:null))}),m))}recalculateAndSaveOverlays(e,t){const s=ou();let o=new lt((h,m)=>h-m),u=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let E=s.get(p)||qn.empty();E=m.applyToLocalView(g,E),s.set(p,E);const S=(o.get(m.batchId)||Ve()).add(p);o=o.insert(m.batchId,S)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,E=p.value,S=eb();E.forEach(A=>{if(!u.has(A)){const k=ab(t.get(A),s.get(A));k!==null&&S.set(A,k),u=u.add(A)}}),h.push(this.documentOverlayCache.saveOverlays(e,g,S))}return Z.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):YS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):Z.resolve(Ks());let m=pu,p=u;return h.next(g=>Z.forEach(g,(E,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(E)?Z.resolve():this.remoteDocumentCache.getEntry(e,E).next(A=>{p=p.insert(E,A)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,p,g,Ve())).next(E=>({batchId:m,changes:ZS(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next(s=>{let o=Zl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Zl();return this.indexManager.getCollectionParents(e,u).next(m=>Z.forEach(m,p=>{const g=function(S,A){return new Vo(A,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(t,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,o).next(E=>{E.forEach((S,A)=>{h=h.insert(S,A)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((p,g)=>{const E=g.getKey();h.get(E)===null&&(h=h.insert(E,Jt.newInvalidDocument(E)))});let m=Zl();return h.forEach((p,g)=>{const E=u.get(p);E!==void 0&&lu(E.mutation,g,qn.empty(),et.now()),_f(t,g)&&(m=m.insert(p,g))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Z.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(o){return{id:o.id,version:o.version,createTime:gi(o.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(o){return{name:o.name,query:n2(o.bundledQuery),readTime:gi(o.readTime)}}(t)),Z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(){this.overlays=new lt(pe.comparator),this.kr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ks();return Z.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.wt(e,t,u)}),Z.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.kr.delete(s)),Z.resolve()}getOverlaysForCollection(e,t,s){const o=Ks(),u=t.length+1,h=new pe(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return Z.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new lt((g,E)=>g-E);const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let E=u.get(g.largestBatchId);E===null&&(E=Ks(),u=u.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const m=Ks(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,E)=>m.set(g,E)),!(m.size()>=o)););return Z.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new PO(t,s));let u=this.kr.get(t);u===void 0&&(u=Ve(),this.kr.set(t,u)),this.kr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.qr=new Nt(Lt.Qr),this.$r=new Nt(Lt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new Lt(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new Lt(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){const t=new pe(new it([])),s=new Lt(t,e),o=new Lt(t,e+1),u=[];return this.$r.forEachInRange([s,o],h=>{this.Wr(h),u.push(h.key)}),u}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new pe(new it([])),s=new Lt(t,e),o=new Lt(t,e+1);let u=Ve();return this.$r.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Lt(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Lt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return pe.comparator(e.key,t.key)||Ce(e.Hr,t.Hr)}static Ur(e,t){return Ce(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Nt(Lt.Qr)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new MO(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new Lt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return Z.resolve(h)}lookupMutationBatch(e,t){return Z.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return Z.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?ag:this.er-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Lt(t,0),o=new Lt(t,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],h=>{const m=this.Zr(h.Hr);u.push(m)}),Z.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Nt(Ce);return t.forEach(o=>{const u=new Lt(o,0),h=new Lt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,h],m=>{s=s.add(m.Hr)})}),Z.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;pe.isDocumentKey(u)||(u=u.child(""));const h=new Lt(new pe(u),0);let m=new Nt(Ce);return this.Yr.forEachWhile(p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(m=m.add(p.Hr)),!0)},h),Z.resolve(this.ei(m))}ei(e){const t=[];return e.forEach(s=>{const o=this.Zr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Fe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return Z.forEach(t.mutations,o=>{const u=new Lt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){const s=new Lt(t,0),o=this.Yr.firstAfterOrEqual(s);return Z.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e){this.ni=e,this.docs=function(){return new lt(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Z.resolve(s?s.document.mutableCopy():Jt.newInvalidDocument(t))}getEntries(e,t){let s=rr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Jt.newInvalidDocument(o))}),Z.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=rr();const h=t.path,m=new pe(h.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:E}}=p.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||KN(GN(E),s)<=0||(o.has(E.key)||_f(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return Z.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Ee(9500)}ri(e,t){return Z.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new y2(this)}getSize(e){return Z.resolve(this.size)}}class y2 extends c2{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)}),Z.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e){this.persistence=e,this.ii=new oa(t=>ug(t),cg),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.si=0,this.oi=new gg,this.targetCount=0,this._i=bo.ar()}forEachTarget(e,t){return this.ii.forEach((s,o)=>t(o)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),Z.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new bo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.hr(t),Z.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ii.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),Z.waitFor(u).next(()=>o)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return Z.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),Z.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),Z.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return Z.resolve(s)}containsKey(e,t){return Z.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,t){this.ai={},this.overlays={},this.ui=new df(0),this.ci=!1,this.ci=!0,this.li=new p2,this.referenceDelegate=e(this),this.hi=new v2(this),this.indexManager=new i2,this.remoteDocumentCache=function(o){return new _2(o)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new t2(t),this.Ti=new d2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new m2,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new g2(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){le("MemoryPersistence","Starting transaction:",e);const o=new E2(this.ui.next());return this.referenceDelegate.Ii(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ei(e,t){return Z.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}}class E2 extends YN{constructor(e){super(),this.currentSequenceNumber=e}}class _g{constructor(e){this.persistence=e,this.Ai=new gg,this.Ri=null}static Vi(e){return new _g(e)}get mi(){if(this.Ri)return this.Ri;throw Ee(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),Z.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(o=>this.mi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.mi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.mi,s=>{const o=pe.fromPath(s);return this.fi(e,o).next(u=>{u||t.removeEntry(o,Ae.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return Z.or([()=>Z.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Wh{constructor(e,t){this.persistence=e,this.gi=new oa(s=>JN(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=u2(this,t)}static Vi(e,t){return new Wh(e,t)}Ii(){}di(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return Z.forEach(this.gi,(s,o)=>this.Sr(e,s,o).next(u=>u?Z.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,h=>this.Sr(e,h,t).next(m=>{m||(s++,u.removeEntry(h,Ae.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Z.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ch(e.data.value)),t}Sr(e,t,s){return Z.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return Z.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Ve(),o=Ve();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new yg(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return ZR()?8:XN(Zt())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ps(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ys(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new T2;return this.ws(e,t,h).next(m=>{if(u.result=m,this.Rs)return this.Ss(e,t,h,m.size)})}).next(()=>u.result)}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(ro()<=Pe.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",so(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Z.resolve()):(ro()<=Pe.DEBUG&&le("QueryEngine","Query:",so(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(ro()<=Pe.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",so(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mi(t))):Z.resolve())}ps(e,t){if(dT(t))return Z.resolve(null);let s=mi(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=vp(t,null,"F"),s=mi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ve(...u);return this.gs.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(p=>{const g=this.bs(t,m);return this.Ds(t,g,h,p.readTime)?this.ps(e,vp(t,null,"F")):this.vs(e,g,t,p)}))})))}ys(e,t,s,o){return dT(t)||o.isEqual(Ae.min())?Z.resolve(null):this.gs.getDocuments(e,s).next(u=>{const h=this.bs(t,u);return this.Ds(t,h,s,o)?Z.resolve(null):(ro()<=Pe.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),so(t)),this.vs(e,h,t,$N(o,pu)).next(m=>m))})}bs(e,t){let s=new Nt(WS(e));return t.forEach((o,u)=>{_f(e,u)&&(s=s.add(u))}),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,t,s){return ro()<=Pe.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",so(t)),this.gs.getDocumentsMatchingQuery(e,t,Jr.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="LocalStore",b2=3e8;class A2{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new lt(Ce),this.Ms=new oa(u=>ug(u),cg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new f2(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function w2(i,e,t,s){return new A2(i,e,t,s)}async function Tb(i,e){const t=we(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let p=Ve();for(const g of o){h.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}for(const g of u){m.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(s,p).next(g=>({Bs:g,removedBatchIds:h,addedBatchIds:m}))})})}function R2(i,e){const t=we(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Os.newChangeBuffer({trackRemovals:!0});return function(m,p,g,E){const S=g.batch,A=S.keys();let k=Z.resolve();return A.forEach(P=>{k=k.next(()=>E.getEntry(p,P)).next(K=>{const q=g.docVersions.get(P);Fe(q!==null,48541),K.version.compareTo(q)<0&&(S.applyToRemoteDocument(K,g),K.isValidDocument()&&(K.setReadTime(g.commitVersion),E.addEntry(K)))})}),k.next(()=>m.mutationQueue.removeMutationBatch(p,S))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let p=Ve();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Sb(i){const e=we(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function I2(i,e){const t=we(i),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach((E,S)=>{const A=o.get(S);if(!A)return;m.push(t.hi.removeMatchingKeys(u,E.removedDocuments,S).next(()=>t.hi.addMatchingKeys(u,E.addedDocuments,S)));let k=A.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?k=k.withResumeToken(Gt.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):E.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(E.resumeToken,s)),o=o.insert(S,k),function(K,q,$){return K.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=b2?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(A,k,E)&&m.push(t.hi.updateTargetData(u,k))});let p=rr(),g=Ve();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(C2(u,h,e.documentUpdates).next(E=>{p=E.Ls,g=E.ks})),!s.isEqual(Ae.min())){const E=t.hi.getLastRemoteSnapshotVersion(u).next(S=>t.hi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return Z.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,p,g)).next(()=>p)}).then(u=>(t.Fs=o,u))}function C2(i,e,t){let s=Ve(),o=Ve();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=rr();return t.forEach((m,p)=>{const g=u.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Ae.min())?(e.removeEntry(m,p.readTime),h=h.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),h=h.insert(m,p)):le(vg,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)}),{Ls:h,ks:o}})}function D2(i,e){const t=we(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=ag),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function N2(i,e){const t=we(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.hi.getTargetData(s,e).next(u=>u?(o=u,Z.resolve(o)):t.hi.allocateTargetId(s).next(h=>(o=new qr(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function Ap(i,e,t){const s=we(i),o=s.Fs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Po(h))throw h;le(vg,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function RT(i,e,t){const s=we(i);let o=Ae.min(),u=Ve();return s.persistence.runTransaction("Execute query","readwrite",h=>function(p,g,E){const S=we(p),A=S.Ms.get(E);return A!==void 0?Z.resolve(S.Fs.get(A)):S.hi.getTargetData(g,E)}(s,h,mi(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next(p=>{u=p})}).next(()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Ae.min(),t?u:Ve())).next(m=>(O2(s,_O(e),m),{documents:m,qs:u})))}function O2(i,e,t){let s=i.xs.get(e)||Ae.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.xs.set(e,s)}class IT{constructor(){this.activeTargetIds=bO()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class M2{constructor(){this.Fo=new IT,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new IT,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="ConnectivityMonitor";class DT{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){le(CT,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){le(CT,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yh=null;function wp(){return yh===null?yh=function(){return 268435456+Math.round(2147483648*Math.random())}():yh++,"0x"+yh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="RestConnection",V2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class k2{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===$h?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=wp(),m=this.Go(e,t.toUriEncodedString());le(Fm,`Sending RPC '${e}' ${h}:`,m,s);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,o,u);const{host:g}=new URL(m),E=Co(g);return this.jo(e,m,p,s,E).then(S=>(le(Fm,`Received RPC '${e}' ${h}: `,S),S),S=>{throw Wr(Fm,`RPC '${e}' ${h} failed with error: `,S,"url: ",m,"request:",s),S})}Jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}Go(e,t){const s=V2[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="WebChannelConnection";class L2 extends k2{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,u){const h=wp();return new Promise((m,p)=>{const g=new bS;g.setWithCredentials(!0),g.listenOnce(AS.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Ih.NO_ERROR:const S=g.getResponseJson();le(Xt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(S)),m(S);break;case Ih.TIMEOUT:le(Xt,`RPC '${e}' ${h} timed out`),p(new ue(W.DEADLINE_EXCEEDED,"Request time out"));break;case Ih.HTTP_ERROR:const A=g.getStatus();if(le(Xt,`RPC '${e}' ${h} failed with status:`,A,"response text:",g.getResponseText()),A>0){let k=g.getResponseJson();Array.isArray(k)&&(k=k[0]);const P=k?.error;if(P&&P.status&&P.message){const K=function($){const ie=$.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ie)>=0?ie:W.UNKNOWN}(P.status);p(new ue(K,P.message))}else p(new ue(W.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ue(W.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{c_:e,streamId:h,l_:g.getLastErrorCode(),h_:g.getLastError()})}}finally{le(Xt,`RPC '${e}' ${h} completed.`)}});const E=JSON.stringify(o);le(Xt,`RPC '${e}' ${h} sending request:`,o),g.send(t,"POST",E,s,15)})}P_(e,t,s){const o=wp(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=IS(),m=RS(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const E=u.join("");le(Xt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const S=h.createWebChannel(E,p);this.T_(S);let A=!1,k=!1;const P=new x2({Ho:q=>{k?le(Xt,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(A||(le(Xt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),A=!0),le(Xt,`RPC '${e}' stream ${o} sending:`,q),S.send(q))},Yo:()=>S.close()}),K=(q,$,ie)=>{q.listen($,re=>{try{ie(re)}catch(de){setTimeout(()=>{throw de},0)}})};return K(S,Jl.EventType.OPEN,()=>{k||(le(Xt,`RPC '${e}' stream ${o} transport opened.`),P.s_())}),K(S,Jl.EventType.CLOSE,()=>{k||(k=!0,le(Xt,`RPC '${e}' stream ${o} transport closed`),P.__(),this.I_(S))}),K(S,Jl.EventType.ERROR,q=>{k||(k=!0,Wr(Xt,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),P.__(new ue(W.UNAVAILABLE,"The operation could not be completed")))}),K(S,Jl.EventType.MESSAGE,q=>{var $;if(!k){const ie=q.data[0];Fe(!!ie,16349);const re=ie,de=re?.error||(($=re[0])===null||$===void 0?void 0:$.error);if(de){le(Xt,`RPC '${e}' stream ${o} received error:`,de);const he=de.status;let Se=function(R){const N=Tt[R];if(N!==void 0)return ub(N)}(he),M=de.message;Se===void 0&&(Se=W.INTERNAL,M="Unknown error status: "+he+" with message "+de.message),k=!0,P.__(new ue(Se,M)),S.close()}else le(Xt,`RPC '${e}' stream ${o} received:`,ie),P.a_(ie)}}),K(m,wS.STAT_EVENT,q=>{q.stat===fp.PROXY?le(Xt,`RPC '${e}' stream ${o} detected buffering proxy`):q.stat===fp.NOPROXY&&le(Xt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{P.o_()},0),P}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function $m(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(i){return new jO(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="PersistentStream";class Ab{constructor(e,t,s,o,u,h,m,p){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new bb(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(ir(t.toString()),ir("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.b_===t&&this.W_(s,o)},s=>{e(()=>{const o=new ue(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)})})}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(o=>{s(()=>this.G_(o))}),this.stream.onMessage(o=>{s(()=>++this.C_==1?this.j_(o):this.onNext(o))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return le(NT,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(le(NT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class U2 extends Ab{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=FO(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ae.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ae.min():h.readTime?gi(h.readTime):Ae.min()}(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=bp(this.serializer),t.addTarget=function(u,h){let m;const p=h.target;if(m=_p(p)?{documents:KO(u,p)}:{query:QO(u,p).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=fb(u,h.resumeToken);const g=Ep(u,h.expectedCount);g!==null&&(m.expectedCount=g)}else if(h.snapshotVersion.compareTo(Ae.min())>0){m.readTime=Xh(u,h.snapshotVersion.toTimestamp());const g=Ep(u,h.expectedCount);g!==null&&(m.expectedCount=g)}return m}(this.serializer,e);const s=XO(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=bp(this.serializer),t.removeTarget=e,this.k_(t)}}class B2 extends Ab{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=GO(e.writeResults,e.commitTime),s=gi(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=bp(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>$O(this.serializer,s))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{}class j2 extends z2{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ue(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Wo(e,Tp(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ue(W.UNKNOWN,u.toString())})}Jo(e,t,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Jo(e,Tp(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ue(W.UNKNOWN,h.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class H2{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ir(t),this._a=!1):le("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="RemoteStore";class q2{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo(h=>{s.enqueueAndForget(async()=>{ua(this)&&(le(ia,"Restarting streams for network reachability change."),await async function(p){const g=we(p);g.Ia.add(4),await Lu(g),g.Aa.set("Unknown"),g.Ia.delete(4),await Sf(g)}(this))})}),this.Aa=new H2(s,o)}}async function Sf(i){if(ua(i))for(const e of i.da)await e(!0)}async function Lu(i){for(const e of i.da)await e(!1)}function wb(i,e){const t=we(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),bg(t)?Sg(t):ko(t).x_()&&Tg(t,e))}function Eg(i,e){const t=we(i),s=ko(t);t.Ta.delete(e),s.x_()&&Rb(t,e),t.Ta.size===0&&(s.x_()?s.B_():ua(t)&&t.Aa.set("Unknown"))}function Tg(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ko(i).H_(e)}function Rb(i,e){i.Ra.$e(e),ko(i).Y_(e)}function Sg(i){i.Ra=new LO({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),ko(i).start(),i.Aa.aa()}function bg(i){return ua(i)&&!ko(i).M_()&&i.Ta.size>0}function ua(i){return we(i).Ia.size===0}function Ib(i){i.Ra=void 0}async function F2(i){i.Aa.set("Online")}async function $2(i){i.Ta.forEach((e,t)=>{Tg(i,e)})}async function G2(i,e){Ib(i),bg(i)?(i.Aa.la(e),Sg(i)):i.Aa.set("Unknown")}async function K2(i,e,t){if(i.Aa.set("Online"),e instanceof hb&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))}(i,e)}catch(s){le(ia,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Jh(i,s)}else if(e instanceof Oh?i.Ra.Ye(e):e instanceof cb?i.Ra.it(e):i.Ra.et(e),!t.isEqual(Ae.min()))try{const s=await Sb(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.Ra.Pt(h);return m.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.Ta.get(g);E&&u.Ta.set(g,E.withResumeToken(p.resumeToken,h))}}),m.targetMismatches.forEach((p,g)=>{const E=u.Ta.get(p);if(!E)return;u.Ta.set(p,E.withResumeToken(Gt.EMPTY_BYTE_STRING,E.snapshotVersion)),Rb(u,p);const S=new qr(E.target,p,g,E.sequenceNumber);Tg(u,S)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){le(ia,"Failed to raise snapshot:",s),await Jh(i,s)}}async function Jh(i,e,t){if(!Po(e))throw e;i.Ia.add(1),await Lu(i),i.Aa.set("Offline"),t||(t=()=>Sb(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{le(ia,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await Sf(i)})}function Cb(i,e){return e().catch(t=>Jh(i,t,e))}async function bf(i){const e=we(i),t=ns(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:ag;for(;Q2(e);)try{const o=await D2(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,Y2(e,o)}catch(o){await Jh(e,o)}Db(e)&&Nb(e)}function Q2(i){return ua(i)&&i.Pa.length<10}function Y2(i,e){i.Pa.push(e);const t=ns(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function Db(i){return ua(i)&&!ns(i).M_()&&i.Pa.length>0}function Nb(i){ns(i).start()}async function X2(i){ns(i).na()}async function W2(i){const e=ns(i);for(const t of i.Pa)e.X_(t.mutations)}async function J2(i,e,t){const s=i.Pa.shift(),o=dg.from(s,e,t);await Cb(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await bf(i)}async function Z2(i,e){e&&ns(i).Z_&&await async function(s,o){if(function(h){return kO(h)&&h!==W.ABORTED}(o.code)){const u=s.Pa.shift();ns(s).N_(),await Cb(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await bf(s)}}(i,e),Db(i)&&Nb(i)}async function OT(i,e){const t=we(i);t.asyncQueue.verifyOperationInProgress(),le(ia,"RemoteStore received new credentials");const s=ua(t);t.Ia.add(3),await Lu(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Sf(t)}async function eM(i,e){const t=we(i);e?(t.Ia.delete(2),await Sf(t)):e||(t.Ia.add(2),await Lu(t),t.Aa.set("Unknown"))}function ko(i){return i.Va||(i.Va=function(t,s,o){const u=we(t);return u.ia(),new U2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Zo:F2.bind(null,i),e_:$2.bind(null,i),n_:G2.bind(null,i),J_:K2.bind(null,i)}),i.da.push(async e=>{e?(i.Va.N_(),bg(i)?Sg(i):i.Aa.set("Unknown")):(await i.Va.stop(),Ib(i))})),i.Va}function ns(i){return i.ma||(i.ma=function(t,s,o){const u=we(t);return u.ia(),new B2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:X2.bind(null,i),n_:Z2.bind(null,i),ea:W2.bind(null,i),ta:J2.bind(null,i)}),i.da.push(async e=>{e?(i.ma.N_(),await bf(i)):(await i.ma.stop(),i.Pa.length>0&&(le(ia,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))})),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Ys,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Ag(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wg(i,e){if(ir("AsyncQueue",`${e}: ${i}`),Po(i))return new ue(W.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{static emptySet(e){return new fo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=Zl(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new fo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(){this.fa=new lt(pe.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ee(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}}class Ao{constructor(e,t,s,o,u,h,m,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new Ao(e,t,fo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class nM{constructor(){this.queries=PT(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=we(t),u=o.queries;o.queries=PT(),u.forEach((h,m)=>{for(const p of m.wa)p.onError(s)})})(this,new ue(W.ABORTED,"Firestore shutting down"))}}function PT(){return new oa(i=>XS(i),gf)}async function iM(i,e){const t=we(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new tM,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await t.onListen(o,!0);break;case 1:u.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=wg(h,`Initialization of query '${so(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.wa.push(e),e.va(t.onlineState),u.ya&&e.Ca(u.ya)&&Rg(t)}async function rM(i,e){const t=we(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.wa.indexOf(e);h>=0&&(u.wa.splice(h,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function sM(i,e){const t=we(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&Rg(t)}function aM(i,e,t){const s=we(i),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(t);s.queries.delete(e)}function Rg(i){i.Da.forEach(e=>{e.next()})}var Rp,VT;(VT=Rp||(Rp={})).Fa="default",VT.Cache="cache";class oM{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Ao(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Rp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.key=e}}class Mb{constructor(e){this.key=e}}class lM{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ve(),this.mutatedKeys=Ve(),this.Xa=WS(e),this.eu=new fo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new MT,o=t?t.eu:this.eu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,S)=>{const A=o.get(E),k=_f(this.query,S)?S:null,P=!!A&&this.mutatedKeys.has(A.key),K=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let q=!1;A&&k?A.data.isEqual(k.data)?P!==K&&(s.track({type:3,doc:k}),q=!0):this.iu(A,k)||(s.track({type:2,doc:k}),q=!0,(p&&this.Xa(k,p)>0||g&&this.Xa(k,g)<0)&&(m=!0)):!A&&k?(s.track({type:0,doc:k}),q=!0):A&&!k&&(s.track({type:1,doc:A}),q=!0,(p||g)&&(m=!0)),q&&(k?(h=h.add(k),u=K?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{eu:h,ru:s,Ds:m,mutatedKeys:u}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort((E,S)=>function(k,P){const K=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{At:q})}};return K(k)-K(P)}(E.type,S.type)||this.Xa(E.doc,S.doc)),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],p=this.Za.size===0&&this.current&&!o?1:0,g=p!==this.Ya;return this.Ya=p,h.length!==0||g?{snapshot:new Ao(this.query,e.eu,u,h,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new MT,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ve(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new Mb(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new Ob(s))}),t}uu(e){this.Ha=e.qs,this.Za=Ve();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ao.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ig="SyncEngine";class uM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class cM{constructor(e){this.key=e,this.lu=!1}}class hM{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new oa(m=>XS(m),gf),this.Tu=new Map,this.Iu=new Set,this.du=new lt(pe.comparator),this.Eu=new Map,this.Au=new gg,this.Ru={},this.Vu=new Map,this.mu=bo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function fM(i,e,t=!0){const s=Ub(i);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await Pb(s,e,t,!0),o}async function dM(i,e){const t=Ub(i);await Pb(t,e,!0,!1)}async function Pb(i,e,t,s){const o=await N2(i.localStore,mi(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await mM(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&wb(i.remoteStore,o),m}async function mM(i,e,t,s,o){i.gu=(S,A,k)=>async function(K,q,$,ie){let re=q.view.nu($);re.Ds&&(re=await RT(K.localStore,q.query,!1).then(({documents:M})=>q.view.nu(M,re)));const de=ie&&ie.targetChanges.get(q.targetId),he=ie&&ie.targetMismatches.get(q.targetId)!=null,Se=q.view.applyChanges(re,K.isPrimaryClient,de,he);return xT(K,q.targetId,Se._u),Se.snapshot}(i,S,A,k);const u=await RT(i.localStore,e,!0),h=new lM(e,u.qs),m=h.nu(u.documents),p=xu.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),g=h.applyChanges(m,i.isPrimaryClient,p);xT(i,t,g._u);const E=new uM(e,t,h);return i.Pu.set(e,E),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),g.snapshot}async function pM(i,e,t){const s=we(i),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter(h=>!gf(h,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Ap(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Eg(s.remoteStore,o.targetId),Ip(s,o.targetId)}).catch(Mo)):(Ip(s,o.targetId),await Ap(s.localStore,o.targetId,!0))}async function gM(i,e){const t=we(i),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Eg(t.remoteStore,s.targetId))}async function _M(i,e,t){const s=AM(i);try{const o=await function(h,m){const p=we(h),g=et.now(),E=m.reduce((k,P)=>k.add(P.key),Ve());let S,A;return p.persistence.runTransaction("Locally write mutations","readwrite",k=>{let P=rr(),K=Ve();return p.Os.getEntries(k,E).next(q=>{P=q,P.forEach(($,ie)=>{ie.isValidDocument()||(K=K.add($))})}).next(()=>p.localDocuments.getOverlayedDocuments(k,P)).next(q=>{S=q;const $=[];for(const ie of m){const re=NO(ie,S.get(ie.key).overlayedDocument);re!=null&&$.push(new la(ie.key,re,HS(re.value.mapValue),pi.exists(!0)))}return p.mutationQueue.addMutationBatch(k,g,$,m)}).next(q=>{A=q;const $=q.applyToLocalDocumentSet(S,K);return p.documentOverlayCache.saveOverlays(k,q.batchId,$)})}).then(()=>({batchId:A.batchId,changes:ZS(S)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,p){let g=h.Ru[h.currentUser.toKey()];g||(g=new lt(Ce)),g=g.insert(m,p),h.Ru[h.currentUser.toKey()]=g}(s,o.batchId,t),await Uu(s,o.changes),await bf(s.remoteStore)}catch(o){const u=wg(o,"Failed to persist write");t.reject(u)}}async function Vb(i,e){const t=we(i);try{const s=await I2(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Eu.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Fe(h.lu,14607):o.removedDocuments.size>0&&(Fe(h.lu,42227),h.lu=!1))}),await Uu(t,s,e)}catch(s){await Mo(s)}}function kT(i,e,t){const s=we(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const p=we(h);p.onlineState=m;let g=!1;p.queries.forEach((E,S)=>{for(const A of S.wa)A.va(m)&&(g=!0)}),g&&Rg(p)}(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function yM(i,e,t){const s=we(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new lt(pe.comparator);h=h.insert(u,Jt.newNoDocument(u,Ae.min()));const m=Ve().add(u),p=new Ef(Ae.min(),new Map,new lt(Ce),h,m);await Vb(s,p),s.du=s.du.remove(u),s.Eu.delete(e),Cg(s)}else await Ap(s.localStore,e,!1).then(()=>Ip(s,e,t)).catch(Mo)}async function vM(i,e){const t=we(i),s=e.batch.batchId;try{const o=await R2(t.localStore,e);xb(t,s,null),kb(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Uu(t,o)}catch(o){await Mo(o)}}async function EM(i,e,t){const s=we(i);try{const o=await function(h,m){const p=we(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let E;return p.mutationQueue.lookupMutationBatch(g,m).next(S=>(Fe(S!==null,37113),E=S.keys(),p.mutationQueue.removeMutationBatch(g,S))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,E,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E)).next(()=>p.localDocuments.getDocuments(g,E))})}(s.localStore,e);xb(s,e,t),kb(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Uu(s,o)}catch(o){await Mo(o)}}function kb(i,e){(i.Vu.get(e)||[]).forEach(t=>{t.resolve()}),i.Vu.delete(e)}function xb(i,e,t){const s=we(i);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function Ip(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach(s=>{i.Au.containsKey(s)||Lb(i,s)})}function Lb(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(Eg(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),Cg(i))}function xT(i,e,t){for(const s of t)s instanceof Ob?(i.Au.addReference(s.key,e),TM(i,s)):s instanceof Mb?(le(Ig,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||Lb(i,s.key)):Ee(19791,{yu:s})}function TM(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(le(Ig,"New document in limbo: "+t),i.Iu.add(s),Cg(i))}function Cg(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new pe(it.fromString(e)),s=i.mu.next();i.Eu.set(s,new cM(t)),i.du=i.du.insert(t,s),wb(i.remoteStore,new qr(mi(hg(t.path)),s,"TargetPurposeLimboResolution",df.ue))}}async function Uu(i,e,t){const s=we(i),o=[],u=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach((m,p)=>{h.push(s.gu(p,e,t).then(g=>{var E;if((g||t)&&s.isPrimaryClient){const S=g?!g.fromCache:(E=t?.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,S?"current":"not-current")}if(g){o.push(g);const S=yg.Es(p.targetId,g);u.push(S)}}))}),await Promise.all(h),s.hu.J_(o),await async function(p,g){const E=we(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>Z.forEach(g,A=>Z.forEach(A.Is,k=>E.persistence.referenceDelegate.addReference(S,A.targetId,k)).next(()=>Z.forEach(A.ds,k=>E.persistence.referenceDelegate.removeReference(S,A.targetId,k)))))}catch(S){if(!Po(S))throw S;le(vg,"Failed to update sequence numbers: "+S)}for(const S of g){const A=S.targetId;if(!S.fromCache){const k=E.Fs.get(A),P=k.snapshotVersion,K=k.withLastLimboFreeSnapshotVersion(P);E.Fs=E.Fs.insert(A,K)}}}(s.localStore,u))}async function SM(i,e){const t=we(i);if(!t.currentUser.isEqual(e)){le(Ig,"User change. New user:",e.toKey());const s=await Tb(t.localStore,e);t.currentUser=e,function(u,h){u.Vu.forEach(m=>{m.forEach(p=>{p.reject(new ue(W.CANCELLED,h))})}),u.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Uu(t,s.Bs)}}function bM(i,e){const t=we(i),s=t.Eu.get(e);if(s&&s.lu)return Ve().add(s.key);{let o=Ve();const u=t.Tu.get(e);if(!u)return o;for(const h of u){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function Ub(i){const e=we(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yM.bind(null,e),e.hu.J_=sM.bind(null,e.eventManager),e.hu.pu=aM.bind(null,e.eventManager),e}function AM(i){const e=we(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EM.bind(null,e),e}class Zh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tf(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return w2(this.persistence,new S2,e.initialUser,this.serializer)}Du(e){return new Eb(_g.Vi,this.serializer)}bu(e){return new M2}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zh.provider={build:()=>new Zh};class wM extends Zh{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Fe(this.persistence.referenceDelegate instanceof Wh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new o2(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?un.withCacheSize(this.cacheSizeBytes):un.DEFAULT;return new Eb(s=>Wh.Vi(s,t),this.serializer)}}class Cp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>kT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=SM.bind(null,this.syncEngine),await eM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nM}()}createDatastore(e){const t=Tf(e.databaseInfo.databaseId),s=function(u){return new L2(u)}(e.databaseInfo);return function(u,h,m,p){return new j2(u,h,m,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new q2(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>kT(this.syncEngine,t,0),function(){return DT.C()?new DT:new P2}())}createSyncEngine(e,t){return function(o,u,h,m,p,g,E){const S=new hM(o,u,h,m,p,g);return E&&(S.fu=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=we(o);le(ia,"RemoteStore shutting down."),u.Ia.add(5),await Lu(u),u.Ea.shutdown(),u.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Cp.provider={build:()=>new Cp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):ir("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="FirestoreClient";class IM{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Wt.UNAUTHENTICATED,this.clientId=sg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{le(is,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(le(is,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ys;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=wg(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Gm(i,e){i.asyncQueue.verifyOperationInProgress(),le(is,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Tb(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>{Wr("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then(()=>{le("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(o=>{Wr("Terminating Firestore due to IndexedDb database deletion failed",o)})}),i._offlineComponents=e}async function LT(i,e){i.asyncQueue.verifyOperationInProgress();const t=await CM(i);le(is,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>OT(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>OT(e.remoteStore,o)),i._onlineComponents=e}async function CM(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){le(is,"Using user provided OfflineComponentProvider");try{await Gm(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Wr("Error using user provided cache. Falling back to memory cache: "+t),await Gm(i,new Zh)}}else le(is,"Using default OfflineComponentProvider"),await Gm(i,new wM(void 0));return i._offlineComponents}async function Bb(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(le(is,"Using user provided OnlineComponentProvider"),await LT(i,i._uninitializedComponentsProvider._online)):(le(is,"Using default OnlineComponentProvider"),await LT(i,new Cp))),i._onlineComponents}function DM(i){return Bb(i).then(e=>e.syncEngine)}async function UT(i){const e=await Bb(i),t=e.eventManager;return t.onListen=fM.bind(null,e.syncEngine),t.onUnlisten=pM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=dM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=gM.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb="firestore.googleapis.com",zT=!0;class jT{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jb,this.ssl=zT}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:zT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<s2)throw new ue(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}FN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ue(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ue(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ue(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Af{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new kN;switch(s.type){case"firstParty":return new BN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=BT.get(t);s&&(le("ComponentProvider","Removing Datastore"),BT.delete(t),s.terminate())}(this),Promise.resolve()}}function NM(i,e,t,s={}){var o;i=Xs(i,Af);const u=Co(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),p=`${e}:${t}`;u&&(P0(`https://${p}`),V0("Firestore",!0)),h.host!==jb&&h.host!==p&&Wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},h),{host:p,ssl:u,emulatorOptions:s});if(!Js(g,m)&&(i._setSettings(g),s.mockUserToken)){let E,S;if(typeof s.mockUserToken=="string")E=s.mockUserToken,S=Wt.MOCK_USER;else{E=FR(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new ue(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Wt(A)}i._authCredentials=new xN(new DS(E,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ca(this.firestore,e,this._query)}}class At{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}toJSON(){return{type:At._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Vu(t,At._jsonSchema))return new At(e,s||null,new pe(it.fromString(t.referencePath)))}}At._jsonSchemaVersion="firestore/documentReference/1.0",At._jsonSchema={type:bt("string",At._jsonSchemaVersion),referencePath:bt("string")};class Yr extends ca{constructor(e,t,s){super(e,t,hg(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new pe(e))}withConverter(e){return new Yr(this.firestore,e,this._path)}}function Dp(i,e,...t){if(i=en(i),OS("collection","path",e),i instanceof Af){const s=it.fromString(e,...t);return ZE(s),new Yr(i,null,s)}{if(!(i instanceof At||i instanceof Yr))throw new ue(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(it.fromString(e,...t));return ZE(s),new Yr(i.firestore,null,s)}}function wf(i,e,...t){if(i=en(i),arguments.length===1&&(e=sg.newId()),OS("doc","path",e),i instanceof Af){const s=it.fromString(e,...t);return JE(s),new At(i,null,new pe(s))}{if(!(i instanceof At||i instanceof Yr))throw new ue(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(it.fromString(e,...t));return JE(s),new At(i.firestore,i instanceof Yr?i.converter:null,new pe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="AsyncQueue";class qT{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new bb(this,"async_queue_retry"),this.oc=()=>{const s=$m();s&&le(HT,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=$m();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=$m();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Ys;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Po(e))throw e;le(HT,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,ir("INTERNAL UNHANDLED ERROR: ",FT(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=Ag.createAndSchedule(this,e,t,s,u=>this.lc(u));return this.ec.push(o),o}ac(){this.tc&&Ee(47125,{hc:FT(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function FT(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(i){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(i,["next","error","complete"])}class Su extends Af{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new qT,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qT(e),this._firestoreClient=void 0,await e}}}function OM(i,e){const t=typeof i=="object"?i:B0(),s=typeof i=="string"?i:$h,o=Gp(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=HR("firestore");u&&NM(o,...u)}return o}function Hb(i){if(i._terminated)throw new ue(W.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||MM(i),i._firestoreClient}function MM(i){var e,t,s;const o=i._freezeSettings(),u=function(m,p,g,E){return new tO(m,p,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,zb(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new IM(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const p=m?._online.build();return{_offline:m?._offline.build(p),_online:p}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kn(Gt.fromBase64String(e))}catch(t){throw new ue(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kn(Gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Vu(e,kn._jsonSchema))return kn.fromBase64String(e.bytes)}}kn._jsonSchemaVersion="firestore/bytes/1.0",kn._jsonSchema={type:bt("string",kn._jsonSchemaVersion),bytes:bt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_i._jsonSchemaVersion}}static fromJSON(e){if(Vu(e,_i._jsonSchema))return new _i(e.latitude,e.longitude)}}_i._jsonSchemaVersion="firestore/geoPoint/1.0",_i._jsonSchema={type:bt("string",_i._jsonSchemaVersion),latitude:bt("number"),longitude:bt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:yi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Vu(e,yi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new yi(e.vectorValues);throw new ue(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yi._jsonSchemaVersion="firestore/vectorValue/1.0",yi._jsonSchema={type:bt("string",yi._jsonSchemaVersion),vectorValues:bt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PM=/^__.*__$/;class VM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new la(e,this.data,this.fieldMask,t,this.fieldTransforms):new ku(e,this.data,t,this.fieldTransforms)}}function Fb(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{Ec:i})}}class Ng{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ng(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ef(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Fb(this.Ec)&&PM.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class kM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Tf(e)}Dc(e,t,s,o=!1){return new Ng({Ec:e,methodName:t,bc:s,path:$t.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Og(i){const e=i._freezeSettings(),t=Tf(i._databaseId);return new kM(i._databaseId,!!e.ignoreUndefinedProperties,t)}function $b(i,e,t,s,o,u={}){const h=i.Dc(u.merge||u.mergeFields?2:0,e,t,o);Qb("Data must be an object, but it was:",h,s);const m=Gb(s,h);let p,g;if(u.merge)p=new qn(h.fieldMask),g=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const S of u.mergeFields){const A=LM(e,S,t);if(!h.contains(A))throw new ue(W.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);BM(E,A)||E.push(A)}p=new qn(E),g=h.fieldTransforms.filter(S=>p.covers(S.field))}else p=null,g=h.fieldTransforms;return new VM(new Vn(m),p,g)}function xM(i,e,t,s=!1){return Mg(t,i.Dc(s?4:3,e))}function Mg(i,e){if(Kb(i=en(i)))return Qb("Unsupported field value:",e,i),Gb(i,e);if(i instanceof qb)return function(s,o){if(!Fb(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let p=Mg(m,o.yc(h));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=en(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return AO(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=et.fromDate(s);return{timestampValue:Xh(o.serializer,u)}}if(s instanceof et){const u=new et(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Xh(o.serializer,u)}}if(s instanceof _i)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof kn)return{bytesValue:fb(o.serializer,s._byteString)};if(s instanceof At){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:pg(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof yi)return function(h,m){return{mapValue:{fields:{[zS]:{stringValue:jS},[Gh]:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw m.wc("VectorValues must only contain numeric values.");return fg(m.serializer,g)})}}}}}}(s,o);throw o.wc(`Unsupported field value: ${ff(s)}`)}(i,e)}function Gb(i,e){const t={};return VS(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):aa(i,(s,o)=>{const u=Mg(o,e.Vc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function Kb(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof et||i instanceof _i||i instanceof kn||i instanceof At||i instanceof qb||i instanceof yi)}function Qb(i,e,t){if(!Kb(t)||!MS(t)){const s=ff(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function LM(i,e,t){if((e=en(e))instanceof Dg)return e._internalPath;if(typeof e=="string")return Yb(i,e);throw ef("Field path arguments must be of type string or ",i,!1,void 0,t)}const UM=new RegExp("[~\\*/\\[\\]]");function Yb(i,e,t){if(e.search(UM)>=0)throw ef(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Dg(...e.split("."))._internalPath}catch{throw ef(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function ef(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||h)&&(p+=" (found",u&&(p+=` in field ${s}`),h&&(p+=` in document ${o}`),p+=")"),new ue(W.INVALID_ARGUMENT,m+i+p)}function BM(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Pg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class zM extends Xb{data(){return super.data()}}function Pg(i,e){return typeof e=="string"?Yb(i,e):e instanceof Dg?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ue(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vg{}class Wb extends Vg{}function Jb(i,e,...t){let s=[];e instanceof Vg&&s.push(e),s=s.concat(t),function(u){const h=u.filter(p=>p instanceof xg).length,m=u.filter(p=>p instanceof kg).length;if(h>1||h>0&&m>0)throw new ue(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class kg extends Wb{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new kg(e,t,s)}_apply(e){const t=this._parse(e);return Zb(e._query,t),new ca(e.firestore,e.converter,yp(e._query,t))}_parse(e){const t=Og(e.firestore);return function(u,h,m,p,g,E,S){let A;if(g.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ue(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){KT(S,E);const P=[];for(const K of S)P.push(GT(p,u,K));A={arrayValue:{values:P}}}else A=GT(p,u,S)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||KT(S,E),A=xM(m,h,S,E==="in"||E==="not-in");return St.create(g,E,A)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class xg extends Vg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xg(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Gn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const m=u.getFlattenedFilters();for(const p of m)Zb(h,p),h=yp(h,p)}(e._query,t),new ca(e.firestore,e.converter,yp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Lg extends Wb{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Lg(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new ue(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ue(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vu(u,h)}(e._query,this._field,this._direction);return new ca(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new Vo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function HM(i,e="asc"){const t=e,s=Pg("orderBy",i);return Lg._create(s,t)}function GT(i,e,t){if(typeof(t=en(t))=="string"){if(t==="")throw new ue(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!YS(e)&&t.indexOf("/")!==-1)throw new ue(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(it.fromString(t));if(!pe.isDocumentKey(s))throw new ue(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return oT(i,new pe(s))}if(t instanceof At)return oT(i,t._key);throw new ue(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ff(t)}.`)}function KT(i,e){if(!Array.isArray(i)||i.length===0)throw new ue(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zb(i,e){const t=function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ue(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class qM{convertValue(e,t="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return aa(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Gh].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>gt(h.doubleValue));return new yi(u)}convertGeoPoint(e){return new _i(gt(e.latitude),gt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=pf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(gu(e));default:return null}}convertTimestamp(e){const t=Zr(e);return new et(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=it.fromString(e);Fe(yb(s),9688,{name:e});const o=new _u(s.get(1),s.get(3)),u=new pe(s.popFirst(5));return o.isEqual(t)||ir(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(i,e,t){let s;return s=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,s}class tu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ws extends Xb{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Mh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Pg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ws._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ws._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ws._jsonSchema={type:bt("string",Ws._jsonSchemaVersion),bundleSource:bt("string","DocumentSnapshot"),bundleName:bt("string"),bundle:bt("string")};class Mh extends Ws{data(e={}){return super.data(e)}}class mo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new tu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Mh(this._firestore,this._userDataWriter,s.key,s,new tu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const p=new Mh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new tu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const p=new Mh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new tu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,E=-1;return m.type!==0&&(g=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:FM(m.type),doc:p,oldIndex:g,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=mo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=sg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function FM(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:i})}}mo._jsonSchemaVersion="firestore/querySnapshot/1.0",mo._jsonSchema={type:bt("string",mo._jsonSchemaVersion),bundleSource:bt("string","QuerySnapshot"),bundleName:bt("string"),bundle:bt("string")};class tA extends qM{constructor(e){super(),this.firestore=e}convertBytes(e){return new kn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,t)}}function nA(i,e,t){i=Xs(i,At);const s=Xs(i.firestore,Su),o=eA(i.converter,e,t);return iA(s,[$b(Og(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,pi.none())])}function $M(i,e){const t=Xs(i.firestore,Su),s=wf(i),o=eA(i.converter,e);return iA(t,[$b(Og(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,pi.exists(!1))]).then(()=>s)}function Np(i,...e){var t,s,o;i=en(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||$T(e[h])||(u=e[h++]);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if($T(e[h])){const S=e[h];e[h]=(t=S.next)===null||t===void 0?void 0:t.bind(S),e[h+1]=(s=S.error)===null||s===void 0?void 0:s.bind(S),e[h+2]=(o=S.complete)===null||o===void 0?void 0:o.bind(S)}let p,g,E;if(i instanceof At)g=Xs(i.firestore,Su),E=hg(i._key.path),p={next:S=>{e[h]&&e[h](GM(g,i,S))},error:e[h+1],complete:e[h+2]};else{const S=Xs(i,ca);g=Xs(S.firestore,Su),E=S._query;const A=new tA(g);p={next:k=>{e[h]&&e[h](new mo(g,A,S,k))},error:e[h+1],complete:e[h+2]},jM(i._query)}return function(A,k,P,K){const q=new RM(K),$=new oM(k,q,P);return A.asyncQueue.enqueueAndForget(async()=>iM(await UT(A),$)),()=>{q.Ou(),A.asyncQueue.enqueueAndForget(async()=>rM(await UT(A),$))}}(Hb(g),E,m,p)}function iA(i,e){return function(s,o){const u=new Ys;return s.asyncQueue.enqueueAndForget(async()=>_M(await DM(s),o,u)),u.promise}(Hb(i),e)}function GM(i,e,t){const s=t.docs.get(e._key),o=new tA(i);return new Ws(i,o,e._key,s,new tu(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Oo=o})(Do),yo(new Zs("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Su(new LN(s.getProvider("auth-internal")),new zN(h,s.getProvider("app-check-internal")),function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ue(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _u(g.options.projectId,E)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Kr(KE,QE,e),Kr(KE,QE,"esm2017")})();const KM={apiKey:"AIzaSyD_JhbbqQj3hyvdg3sacFsheaT3HEyw0PE",authDomain:"react-http-d3494.firebaseapp.com",databaseURL:"https://react-http-d3494-default-rtdb.firebaseio.com",projectId:"react-http-d3494",storageBucket:"react-http-d3494.appspot.com",messagingSenderId:"289164766852",appId:"1:289164766852:web:b135ba2137fb148b205cd1"},rA=U0(KM),po=OM(rA),sr=ON(rA),QM="_container_qvqcp_1",YM={container:QM},XM=()=>ne.jsx("div",{className:YM.container,children:"h"}),WM="_center_1wa5v_1",JM="_container_1wa5v_27",ZM="_title_1wa5v_53",eP="_inputs_1wa5v_67",tP="_input_1wa5v_67",nP="_buttons_1wa5v_115",iP="_button_1wa5v_115",rP="_acc_1wa5v_161",hi={center:WM,container:JM,title:ZM,inputs:eP,input:tP,buttons:nP,button:iP,acc:rP};function sP(){F.useEffect(()=>(document.body.classList.add("auth-background"),()=>document.body.classList.remove("auth-background")),[]);const[i,e]=F.useState(""),[t,s]=F.useState(""),[o,u]=F.useState(""),h=af(),m=async g=>{g.preventDefault();try{await gD(sr,i,t),h("/")}catch(E){E instanceof Error&&u(E.message)}},p=async()=>{const g=new Yi;try{await zD(sr,g),h("/")}catch(E){E instanceof Error&&u(E.message)}};return ne.jsx("div",{className:hi.center,children:ne.jsxs("form",{onSubmit:m,className:hi.container,children:[ne.jsx("h2",{className:hi.title,children:"Login"}),o&&ne.jsx("p",{children:o}),ne.jsxs("div",{className:hi.inputs,children:[ne.jsx("input",{type:"email",className:hi.input,placeholder:"Email",value:i,onChange:g=>e(g.target.value),required:!0}),ne.jsx("input",{type:"password",className:hi.input,placeholder:"Password",value:t,onChange:g=>s(g.target.value),required:!0})]}),ne.jsxs("div",{className:hi.buttons,children:[ne.jsx("button",{type:"submit",className:hi.button,children:"Login"}),ne.jsx("button",{className:hi.button,type:"button",onClick:p,children:"Login with Google"})]}),ne.jsxs("div",{className:hi.acc,children:[ne.jsx("p",{children:"Don't have an account?"}),ne.jsx("p",{children:ne.jsx(co,{to:"/signup",children:"Sign up"})})]})]})})}const aP="_center_1ka2d_1",oP="_container_1ka2d_29",lP="_title_1ka2d_55",uP="_inputs_1ka2d_69",cP="_input_1ka2d_69",hP="_buttons_1ka2d_117",fP="_button_1ka2d_117",Qi={center:aP,container:oP,title:lP,inputs:uP,input:cP,buttons:hP,button:fP};function dP(){F.useEffect(()=>(document.body.classList.add("auth-background"),()=>document.body.classList.remove("auth-background")),[]);const[i,e]=F.useState(""),[t,s]=F.useState(""),[o,u]=F.useState(""),[h,m]=F.useState(""),p=af(),g=async E=>{E.preventDefault(),m("");try{const S=await pD(sr,i,t);await yD(S.user,{displayName:o}),await nA(wf(po,"users",S.user.uid),{name:o,email:i,avatarUrl:""}),console.log("User document created in Firestore",S.user.uid),p("/chat")}catch(S){S instanceof Error&&m(S.message)}};return ne.jsx("div",{className:Qi.center,children:ne.jsxs("form",{className:Qi.container,onSubmit:g,children:[ne.jsx("h1",{className:Qi.title,children:"Create Account"}),h&&ne.jsx("p",{style:{color:"red"},children:h}),ne.jsxs("div",{className:Qi.inputs,children:[ne.jsx("input",{type:"text",className:Qi.input,placeholder:"Name",value:o,onChange:E=>u(E.target.value),required:!0}),ne.jsx("input",{type:"email",className:Qi.input,placeholder:"Email",value:i,onChange:E=>e(E.target.value),required:!0}),ne.jsx("input",{type:"password",className:Qi.input,placeholder:"Password",value:t,onChange:E=>s(E.target.value),required:!0})]}),ne.jsx("div",{className:Qi.buttons,children:ne.jsx("button",{type:"submit",className:Qi.button,children:"Sign Up"})})]})})}const mP="_contactsList_xrr76_1",pP="_title_xrr76_21",gP="_selectedContact_xrr76_95",_P="_avatar_xrr76_105",yP="_contactInfo_xrr76_127",vP="_contactName_xrr76_143",EP="_lastMessage_xrr76_157",TP="_lastMessageTime_xrr76_177",Lr={contactsList:mP,title:pP,selectedContact:gP,avatar:_P,contactInfo:yP,contactName:vP,lastMessage:EP,lastMessageTime:TP};function SP({selectedContact:i,onSelectContact:e}){const[t,s]=F.useState([]),[o,u]=F.useState(sr.currentUser);return F.useEffect(()=>{const h=cS(sr,u);return()=>h()},[]),F.useEffect(()=>{if(!o)return;const h=Jb(Dp(po,"users")),m=Np(h,async p=>{const g=p.docs.filter(S=>S.id!==o.uid).map(async S=>{const A={id:S.id,...S.data()},k=o.uid<A.id?`${o.uid}_${A.id}`:`${A.id}_${o.uid}`,P=wf(po,"chats",k);return new Promise(K=>{Np(P,q=>{if(q.exists()){const $=q.data();A.lastMessage=$.lastMessage||"",A.lastTime=$.lastTimestamp?.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})||""}else A.lastMessage="",A.lastTime="";K(A)})})}),E=await Promise.all(g);s(E)});return()=>m()},[o]),ne.jsxs("aside",{className:Lr.contactsList,children:[ne.jsx("h3",{className:Lr.title,children:"Chats"}),ne.jsx("ul",{children:t.map(h=>ne.jsxs("li",{className:i?.id===h.id?Lr.selectedContact:"",onClick:()=>e(h),children:[ne.jsx("img",{className:Lr.avatar,src:h.avatarUrl||"/default-avatar.jpg",alt:h.name}),ne.jsxs("div",{className:Lr.contactInfo,children:[ne.jsx("div",{className:Lr.contactName,children:h.name}),ne.jsx("div",{className:Lr.lastMessage,children:h.lastMessage||"No messages yet"})]}),ne.jsx("div",{className:Lr.lastMessageTime,children:h.lastTime||""})]},h.id))})]})}const bP="_chatWindow_5u0ix_1",AP="_chatHeader_5u0ix_19",wP="_backButton_5u0ix_43",RP="_avatar_5u0ix_65",IP="_messagesContainer_5u0ix_97",CP="_message_5u0ix_97",DP="_sent_5u0ix_145",NP="_received_5u0ix_159",OP="_messageText_5u0ix_177",MP="_messageInputContainer_5u0ix_187",PP="_messageInput_5u0ix_187",VP="_sendButton_5u0ix_237",Pn={chatWindow:bP,chatHeader:AP,backButton:wP,avatar:RP,messagesContainer:IP,message:CP,sent:DP,received:NP,messageText:OP,messageInputContainer:MP,messageInput:PP,sendButton:VP};function kP({otherUser:i,onBack:e}){const[t,s]=F.useState([]),[o,u]=F.useState(""),h=sr.currentUser,m=F.useRef(null),p=h&&i?[h.uid,i.id].sort().join("_"):"";F.useEffect(()=>{if(!h||!p)return;const E=Jb(Dp(po,"chats",p,"messages"),HM("timestamp")),S=Np(E,A=>{const k=[];A.forEach(P=>{const K=P.data();k.push({id:P.id,...K})}),s(k)});return()=>S()},[p,h]),F.useEffect(()=>{m.current?.scrollIntoView({behavior:"smooth"})},[t]);const g=async()=>{if(!o.trim()||!h)return;const E=o.trim(),S={text:E,senderId:h.uid,receiverId:i.id,timestamp:et.now()};await $M(Dp(po,"chats",p,"messages"),S),await nA(wf(po,"chats",p),{lastMessage:E,lastTimestamp:et.now(),users:[h.uid,i.id]},{merge:!0}),u("")};return ne.jsxs("div",{className:Pn.chatWindow,children:[ne.jsxs("header",{className:Pn.chatHeader,children:[e&&ne.jsx("button",{className:Pn.backButton,onClick:e,"aria-label":"Back to contacts",children:"← Back"}),ne.jsx("img",{className:Pn.avatar,src:i.avatarUrl||"/default-avatar.jpg",alt:i.name}),ne.jsx("h2",{children:i.name})]}),ne.jsxs("main",{className:Pn.messagesContainer,children:[t.map(E=>{const S=E.senderId===h?.uid;return ne.jsx("div",{className:`${Pn.message} ${S?Pn.sent:Pn.received}`,children:ne.jsx("div",{className:Pn.messageText,children:E.text})},E.id)}),ne.jsx("div",{ref:m})]}),ne.jsxs("footer",{className:Pn.messageInputContainer,children:[ne.jsx("input",{type:"text",placeholder:"Type a message",value:o,onChange:E=>u(E.target.value),onKeyDown:E=>{E.key==="Enter"&&g()},className:Pn.messageInput}),ne.jsx("button",{onClick:g,className:Pn.sendButton,children:"Send"})]})]})}const xP="_container_bjcu4_3",LP="_contactsList_bjcu4_23",UP="_chatWindow_bjcu4_45",BP="_noChatSelected_bjcu4_67",zP="_chatOpen_bjcu4_119",Ql={container:xP,contactsList:LP,chatWindow:UP,noChatSelected:BP,chatOpen:zP};function jP(){const[i,e]=F.useState(null),[t,s]=F.useState(!1),o=h=>{e(h),s(!0)},u=()=>{s(!1),e(null)};return ne.jsxs("div",{className:`${Ql.container} ${t?Ql.chatOpen:""}`,children:[ne.jsx("aside",{className:Ql.contactsList,children:ne.jsx(SP,{selectedContact:i,onSelectContact:o})}),ne.jsx("section",{className:Ql.chatWindow,children:i?ne.jsx(kP,{otherUser:i,onBack:t?u:void 0}):ne.jsx("div",{className:Ql.noChatSelected,children:"Select a chat to start messaging"})})]})}var QT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},HP=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],p=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},aA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,p=o+2<i.length,g=p?i[o+2]:0,E=u>>2,S=(u&3)<<4|m>>4;let A=(m&15)<<2|g>>6,k=g&63;p||(k=64,h||(A=64)),s.push(t[E],t[S],t[A],t[k])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(sA(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):HP(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const g=o<i.length?t[i.charAt(o)]:64;++o;const S=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||g==null||S==null)throw new qP;const A=u<<2|m>>4;if(s.push(A),g!==64){const k=m<<4&240|g>>2;if(s.push(k),S!==64){const P=g<<6&192|S;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class qP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FP=function(i){const e=sA(i);return aA.encodeByteArray(e,!0)},oA=function(i){return FP(i).replace(/\./g,"")},lA=function(i){try{return aA.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=()=>$P().__FIREBASE_DEFAULTS__,KP=()=>{if(typeof process>"u"||typeof QT>"u")return;const i=QT.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},QP=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&lA(i[1]);return e&&JSON.parse(e)},YP=()=>{try{return GP()||KP()||QP()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},XP=i=>{var e;return(e=YP())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ei())}function JP(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function ZP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eV(){try{return typeof indexedDB=="object"}catch{return!1}}function tV(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nV="FirebaseError";class ha extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=nV,Object.setPrototypeOf(this,ha.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bu.prototype.create)}}class Bu{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?iV(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new ha(o,m,s)}}function iV(i,e){return i.replace(rV,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const rV=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function sV(i,e){const t=new aV(i,e);return t.subscribe.bind(t)}class aV{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");oV(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Km),o.error===void 0&&(o.error=Km),o.complete===void 0&&(o.complete=Km);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oV(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Km(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(i){return i&&i._delegate?i._delegate:i}class bu{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ze||(Ze={}));const lV={debug:Ze.DEBUG,verbose:Ze.VERBOSE,info:Ze.INFO,warn:Ze.WARN,error:Ze.ERROR,silent:Ze.SILENT},uV=Ze.INFO,cV={[Ze.DEBUG]:"log",[Ze.VERBOSE]:"log",[Ze.INFO]:"info",[Ze.WARN]:"warn",[Ze.ERROR]:"error"},hV=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=cV[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cA{constructor(e){this.name=e,this._logLevel=uV,this._logHandler=hV,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lV[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ze.DEBUG,...e),this._logHandler(this,Ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ze.VERBOSE,...e),this._logHandler(this,Ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ze.INFO,...e),this._logHandler(this,Ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ze.WARN,...e),this._logHandler(this,Ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ze.ERROR,...e),this._logHandler(this,Ze.ERROR,...e)}}const fV=(i,e)=>e.some(t=>i instanceof t);let YT,XT;function dV(){return YT||(YT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mV(){return XT||(XT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hA=new WeakMap,Op=new WeakMap,fA=new WeakMap,Qm=new WeakMap,Ug=new WeakMap;function pV(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(Xr(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&hA.set(t,i)}).catch(()=>{}),Ug.set(e,i),e}function gV(i){if(Op.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Op.set(i,e)}let Mp={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Op.get(i);if(e==="objectStoreNames")return i.objectStoreNames||fA.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function _V(i){Mp=i(Mp)}function yV(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Ym(this),e,...t);return fA.set(s,e.sort?e.sort():[e]),Xr(s)}:mV().includes(i)?function(...e){return i.apply(Ym(this),e),Xr(hA.get(this))}:function(...e){return Xr(i.apply(Ym(this),e))}}function vV(i){return typeof i=="function"?yV(i):(i instanceof IDBTransaction&&gV(i),fV(i,dV())?new Proxy(i,Mp):i)}function Xr(i){if(i instanceof IDBRequest)return pV(i);if(Qm.has(i))return Qm.get(i);const e=vV(i);return e!==i&&(Qm.set(i,e),Ug.set(e,i)),e}const Ym=i=>Ug.get(i);function EV(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=Xr(h);return s&&h.addEventListener("upgradeneeded",p=>{s(Xr(h.result),p.oldVersion,p.newVersion,Xr(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const TV=["get","getKey","getAll","getAllKeys","count"],SV=["put","add","delete","clear"],Xm=new Map;function WT(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Xm.get(e))return Xm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=SV.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||TV.includes(t)))return;const u=async function(h,...m){const p=this.transaction(h,o?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(m.shift())),(await Promise.all([g[t](...m),o&&p.done]))[0]};return Xm.set(e,u),u}_V(i=>({...i,get:(e,t,s)=>WT(e,t)||i.get(e,t,s),has:(e,t)=>!!WT(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(AV(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function AV(i){const e=i.getComponent();return e?.type==="VERSION"}const Pp="@firebase/app",JT="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new cA("@firebase/app"),wV="@firebase/app-compat",RV="@firebase/analytics-compat",IV="@firebase/analytics",CV="@firebase/app-check-compat",DV="@firebase/app-check",NV="@firebase/auth",OV="@firebase/auth-compat",MV="@firebase/database",PV="@firebase/database-compat",VV="@firebase/functions",kV="@firebase/functions-compat",xV="@firebase/installations",LV="@firebase/installations-compat",UV="@firebase/messaging",BV="@firebase/messaging-compat",zV="@firebase/performance",jV="@firebase/performance-compat",HV="@firebase/remote-config",qV="@firebase/remote-config-compat",FV="@firebase/storage",$V="@firebase/storage-compat",GV="@firebase/firestore",KV="@firebase/firestore-compat",QV="firebase",YV="10.11.1",XV={[Pp]:"fire-core",[wV]:"fire-core-compat",[IV]:"fire-analytics",[RV]:"fire-analytics-compat",[DV]:"fire-app-check",[CV]:"fire-app-check-compat",[NV]:"fire-auth",[OV]:"fire-auth-compat",[MV]:"fire-rtdb",[PV]:"fire-rtdb-compat",[VV]:"fire-fn",[kV]:"fire-fn-compat",[xV]:"fire-iid",[LV]:"fire-iid-compat",[UV]:"fire-fcm",[BV]:"fire-fcm-compat",[zV]:"fire-perf",[jV]:"fire-perf-compat",[HV]:"fire-rc",[qV]:"fire-rc-compat",[FV]:"fire-gcs",[$V]:"fire-gcs-compat",[GV]:"fire-fst",[KV]:"fire-fst-compat","fire-js":"fire-js",[QV]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WV=new Map,JV=new Map,ZT=new Map;function e0(i,e){try{i.container.addComponent(e)}catch(t){ra.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Au(i){const e=i.name;if(ZT.has(e))return ra.debug(`There were multiple attempts to register component ${e}.`),!1;ZT.set(e,i);for(const t of WV.values())e0(t,i);for(const t of JV.values())e0(t,i);return!0}function nu(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bg=new Bu("app","Firebase",ZV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=YV;function uu(i,e,t){var s;let o=(s=XV[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ra.warn(m.join(" "));return}Au(new bu(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek="firebase-heartbeat-database",tk=1,wu="firebase-heartbeat-store";let Wm=null;function dA(){return Wm||(Wm=EV(ek,tk,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(wu)}catch(t){console.warn(t)}}}}).catch(i=>{throw Bg.create("idb-open",{originalErrorMessage:i.message})})),Wm}async function nk(i){try{const t=(await dA()).transaction(wu),s=await t.objectStore(wu).get(mA(i));return await t.done,s}catch(e){if(e instanceof ha)ra.warn(e.message);else{const t=Bg.create("idb-get",{originalErrorMessage:e?.message});ra.warn(t.message)}}}async function t0(i,e){try{const s=(await dA()).transaction(wu,"readwrite");await s.objectStore(wu).put(e,mA(i)),await s.done}catch(t){if(t instanceof ha)ra.warn(t.message);else{const s=Bg.create("idb-set",{originalErrorMessage:t?.message});ra.warn(s.message)}}}function mA(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=1024,rk=30*24*60*60*1e3;class sk{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ok(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=n0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)))return this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=rk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=n0(),{heartbeatsToSend:s,unsentEntries:o}=ak(this._heartbeatsCache.heartbeats),u=oA(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}}function n0(){return new Date().toISOString().substring(0,10)}function ak(i,e=ik){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),i0(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),i0(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class ok{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eV()?tV().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await nk(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return t0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return t0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function i0(i){return oA(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(i){Au(new bu("platform-logger",e=>new bV(e),"PRIVATE")),Au(new bu("heartbeat",e=>new sk(e),"PRIVATE")),uu(Pp,JT,i),uu(Pp,JT,"esm2017"),uu("fire-js","")}lk("");function pA(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function gA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uk=gA,_A=new Bu("auth","Firebase",gA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=new cA("@firebase/auth");function ck(i,...e){tf.logLevel<=Ze.WARN&&tf.warn(`Auth (${zg}): ${i}`,...e)}function Ph(i,...e){tf.logLevel<=Ze.ERROR&&tf.error(`Auth (${zg}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(i,...e){throw jg(i,...e)}function yA(i,...e){return jg(i,...e)}function vA(i,e,t){const s=Object.assign(Object.assign({},uk()),{[e]:t});return new Bu("auth","Firebase",s).create(e,{appName:i.name})}function Vh(i){return vA(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jg(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return _A.create(i,...e)}function He(i,e,...t){if(!i)throw jg(e,...t)}function cu(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Ph(e),new Error(e)}function nf(i,e){i||cu(e)}function hk(){return s0()==="http:"||s0()==="https:"}function s0(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hk()||JP()||"connection"in navigator)?navigator.onLine:!0}function dk(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t){this.shortDelay=e,this.longDelay=t,nf(t>e,"Short delay should be less than long delay!"),this.isMobile=WP()||ZP()}get(){return fk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(i,e){nf(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cu("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cu("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cu("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=new ju(3e4,6e4);function TA(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Rf(i,e,t,s,o={}){return SA(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=uA(Object.assign({key:i.config.apiKey},h)).slice(1),p=await i._getAdditionalHeaders();return p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode),EA.fetch()(bA(i,i.config.apiHost,t,m),Object.assign({method:e,headers:p,referrerPolicy:"no-referrer"},u))})}async function SA(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},pk),e);try{const o=new _k(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw vh(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw vh(i,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw vh(i,"email-already-in-use",h);if(p==="USER_DISABLED")throw vh(i,"user-disabled",h);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw vA(i,E,g);r0(i,E)}}catch(o){if(o instanceof ha)throw o;r0(i,"network-request-failed",{message:String(o)})}}function bA(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?mk(i.config,o):`${i.config.apiScheme}://${o}`}class _k{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(yA(this.auth,"network-request-failed")),gk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vh(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=yA(i,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yk(i,e){return Rf(i,"POST","/v1/accounts:delete",e)}async function AA(i,e){return Rf(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vk(i,e=!1){const t=zu(i),s=await t.getIdToken(e),o=wA(s);He(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u?.sign_in_provider;return{claims:o,token:s,authTime:hu(Jm(o.auth_time)),issuedAtTime:hu(Jm(o.iat)),expirationTime:hu(Jm(o.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Jm(i){return Number(i)*1e3}function wA(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Ph("JWT malformed, contained fewer than 3 sections"),null;try{const o=lA(t);return o?JSON.parse(o):(Ph("Failed to decode base64 JWT payload"),null)}catch(o){return Ph("Caught error parsing JWT payload as JSON",o?.toString()),null}}function a0(i){const e=wA(i);return He(e,"internal-error"),He(typeof e.exp<"u","internal-error"),He(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ha&&Ek(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Ek({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hu(this.lastLoginAt),this.creationTime=hu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rf(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Vp(i,AA(t,{idToken:s}));He(o?.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?RA(u.providerUserInfo):[],m=bk(i.providerData,h),p=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!m?.length,E=p?g:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new kp(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,S)}async function Sk(i){const e=zu(i);await rf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bk(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function RA(i){return i.map(e=>{var{providerId:t}=e,s=pA(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(i,e){const t=await SA(i,{},async()=>{const s=uA({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=bA(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",EA.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wk(i,e){return Rf(i,"POST","/v2/accounts:revokeToken",TA(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){He(e.idToken,"internal-error"),He(typeof e.idToken<"u","internal-error"),He(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):a0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){He(e.length!==0,"internal-error");const t=a0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(He(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await Ak(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new go;return s&&(He(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(He(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(He(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return cu("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(i,e){He(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Fr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=pA(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new kp(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Vp(this,this.stsTokenManager.getToken(this.auth,e));return He(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vk(this,e)}reload(){return Sk(this)}_assign(e){this!==e&&(He(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){He(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await rf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nu(this.auth.app))return Promise.reject(Vh(this.auth));const e=await this.getIdToken();return await Vp(this,yk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,p,g,E;const S=(s=t.displayName)!==null&&s!==void 0?s:void 0,A=(o=t.email)!==null&&o!==void 0?o:void 0,k=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,P=(h=t.photoURL)!==null&&h!==void 0?h:void 0,K=(m=t.tenantId)!==null&&m!==void 0?m:void 0,q=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,$=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ie=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:re,emailVerified:de,isAnonymous:he,providerData:Se,stsTokenManager:M}=t;He(re&&M,e,"internal-error");const w=go.fromJSON(this.name,M);He(typeof re=="string",e,"internal-error"),Ur(S,e.name),Ur(A,e.name),He(typeof de=="boolean",e,"internal-error"),He(typeof he=="boolean",e,"internal-error"),Ur(k,e.name),Ur(P,e.name),Ur(K,e.name),Ur(q,e.name),Ur($,e.name),Ur(ie,e.name);const R=new Fr({uid:re,auth:e,email:A,emailVerified:de,displayName:S,isAnonymous:he,photoURL:P,phoneNumber:k,tenantId:K,stsTokenManager:w,createdAt:$,lastLoginAt:ie});return Se&&Array.isArray(Se)&&(R.providerData=Se.map(N=>Object.assign({},N))),q&&(R._redirectEventId=q),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new go;o.updateFromServerResponse(t);const u=new Fr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await rf(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];He(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?RA(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!u?.length,m=new go;m.updateFromIdToken(s);const p=new Fr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new kp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=new Map;function Qs(i){nf(i instanceof Function,"Expected a class definition");let e=o0.get(i);return e?(nf(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,o0.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}IA.type="NONE";const l0=IA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(i,e,t){return`firebase:${i}:${e}:${t}`}class _o{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Zm(this.userKey,o.apiKey,u),this.fullPersistenceKey=Zm("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new _o(Qs(l0),e,s);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||Qs(l0);const h=Zm(s,e.config.apiKey,e.name);let m=null;for(const g of t)try{const E=await g._get(h);if(E){const S=Fr._fromJSON(e,E);g!==u&&(m=S),u=g;break}}catch{}const p=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new _o(u,e,s):(u=p[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(h)}catch{}})),new _o(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rk(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ok(e))return"Blackberry";if(Mk(e))return"Webos";if(Ik(e))return"Safari";if((e.includes("chrome/")||Ck(e))&&!e.includes("edge/"))return"Chrome";if(Nk(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function Rk(i=Ei()){return/firefox\//i.test(i)}function Ik(i=Ei()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ck(i=Ei()){return/crios\//i.test(i)}function Dk(i=Ei()){return/iemobile/i.test(i)}function Nk(i=Ei()){return/android/i.test(i)}function Ok(i=Ei()){return/blackberry/i.test(i)}function Mk(i=Ei()){return/webos/i.test(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(i,e=[]){let t;switch(i){case"Browser":t=u0(Ei());break;case"Worker":t=`${u0(Ei())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zg}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const p=e(u);h(p)}catch(p){m(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(i,e={}){return Rf(i,"GET","/v2/passwordPolicy",TA(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=6;class xk{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:kk,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new c0(this),this.idTokenSubscription=new c0(this),this.beforeStateQueue=new Pk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_A,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qs(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await _o.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await AA(this,{idToken:e}),s=await Fr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(nu(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o?._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===m)&&p?.user&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return He(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await rf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nu(this.app))return Promise.reject(Vh(this));const t=e?zu(e):null;return t&&He(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&He(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nu(this.app)?Promise.reject(Vh(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nu(this.app)?Promise.reject(Vh(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vk(this),t=new xk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bu("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await wk(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qs(e)||this._popupRedirectResolver;He(t,this,"argument-error"),this.redirectPersistenceManager=await _o.create(this,[Qs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(He(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return He(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=CA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&ck(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Uk(i){return zu(i)}class c0{constructor(e){this.auth=e,this.observer=null,this.addObserver=sV(t=>this.observer=t)}get next(){return He(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Bk(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Qs);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function zk(i,e,t,s){return zu(i).onAuthStateChanged(e,t,s)}new ju(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ju(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ju(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ju(5e3,15e3);var h0="@firebase/auth",f0="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){He(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qk(i){Au(new bu("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;He(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CA(i)},g=new Lk(s,o,u,p);return Bk(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Au(new bu("auth-internal",e=>{const t=Uk(e.getProvider("auth").getImmediate());return(s=>new jk(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),uu(h0,f0,Hk(i)),uu(h0,f0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=5*60;XP("authIdTokenMaxAge");qk("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function $k(i,e,t,s){function o(u){return u instanceof t?u:new t(function(h){h(u)})}return new(t||(t=Promise))(function(u,h){function m(E){try{g(s.next(E))}catch(S){h(S)}}function p(E){try{g(s.throw(E))}catch(S){h(S)}}function g(E){E.done?u(E.value):o(E.value).then(m,p)}g((s=s.apply(i,[])).next())})}function Gk(i,e){var t={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},s,o,u,h;return h={next:m(0),throw:m(1),return:m(2)},typeof Symbol=="function"&&(h[Symbol.iterator]=function(){return this}),h;function m(g){return function(E){return p([g,E])}}function p(g){if(s)throw new TypeError("Generator is already executing.");for(;t;)try{if(s=1,o&&(u=g[0]&2?o.return:g[0]?o.throw||((u=o.return)&&u.call(o),0):o.next)&&!(u=u.call(o,g[1])).done)return u;switch(o=0,u&&(g=[g[0]&2,u.value]),g[0]){case 0:case 1:u=g;break;case 4:return t.label++,{value:g[1],done:!1};case 5:t.label++,o=g[1],g=[0];continue;case 7:g=t.ops.pop(),t.trys.pop();continue;default:if(u=t.trys,!(u=u.length>0&&u[u.length-1])&&(g[0]===6||g[0]===2)){t=0;continue}if(g[0]===3&&(!u||g[1]>u[0]&&g[1]<u[3])){t.label=g[1];break}if(g[0]===6&&t.label<u[1]){t.label=u[1],u=g;break}if(u&&t.label<u[2]){t.label=u[2],t.ops.push(g);break}u[2]&&t.ops.pop(),t.trys.pop();continue}g=e.call(i,t)}catch(E){g=[6,E],o=0}finally{s=u=0}if(g[0]&5)throw g[1];return{value:g[0]?g[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var uo=function(){return uo=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++){t=arguments[s];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},uo.apply(this,arguments)},DA=function(i){return{loading:i==null,value:i}},Kk=function(){return function(i,e){switch(e.type){case"error":return uo(uo({},i),{error:e.error,loading:!1,value:void 0});case"reset":return DA(e.defaultValue);case"value":return uo(uo({},i),{error:void 0,loading:!1,value:e.value});default:return i}}},Qk=function(i){var e=i?i():void 0,t=F.useReducer(Kk(),DA(e)),s=t[0],o=t[1],u=F.useCallback(function(){var p=i?i():void 0;o({type:"reset",defaultValue:p})},[i]),h=F.useCallback(function(p){o({type:"error",error:p})},[]),m=F.useCallback(function(p){o({type:"value",value:p})},[]);return F.useMemo(function(){return{error:s.error,loading:s.loading,reset:u,setError:h,setValue:m,value:s.value}},[s.error,s.loading,u,h,m,s.value])},Yk=function(i,e){var t=Qk(function(){return i.currentUser}),s=t.error,o=t.loading,u=t.setError,h=t.setValue,m=t.value;return F.useEffect(function(){var p=zk(i,function(g){return $k(void 0,void 0,void 0,function(){var E;return Gk(this,function(S){switch(S.label){case 0:return[3,4];case 1:return S.trys.push([1,3,,4]),[4,e.onUserChanged(g)];case 2:return S.sent(),[3,4];case 3:return E=S.sent(),u(E),[3,4];case 4:return h(g),[2]}})})},u);return function(){p()}},[i]),[m,o,s]};const Xk="_header_dxzsm_1",Wk="_buttons_dxzsm_19",Jk="_button_dxzsm_19",Zk="_logo_dxzsm_55",ex="_hello_dxzsm_63",tx="_right_dxzsm_73",Br={header:Xk,buttons:Wk,button:Jk,logo:Zk,hello:ex,right:tx};function nx(){const[i]=Yk(sr);return ne.jsxs("header",{className:Br.header,children:[ne.jsx("h1",{className:Br.logo,children:ne.jsx(co,{to:"/",children:"CHATI"})}),ne.jsx("nav",{children:i?ne.jsxs("div",{className:Br.right,children:[ne.jsxs("span",{className:Br.hello,children:[" ","Hello, ",i.displayName||i.email]}),ne.jsx("button",{onClick:()=>sr.signOut(),className:Br.button,children:"Logout"})]}):ne.jsx(ne.Fragment,{children:ne.jsxs("div",{className:Br.buttons,children:[ne.jsx(co,{to:"/login",children:ne.jsx("button",{className:Br.button,children:"Log in"})}),ne.jsx(co,{to:"/signup",children:ne.jsx("button",{className:Br.button,children:"Sign up"})})]})})})]})}function ix(){const[i,e]=F.useState(null),[t,s]=F.useState(!0);return F.useEffect(()=>cS(sr,u=>{e(u),s(!1)}),[]),t?ne.jsx("p",{children:"Loading..."}):ne.jsxs(AR,{children:[ne.jsx(nx,{}),ne.jsxs(eR,{children:[!i&&ne.jsxs(ne.Fragment,{children:[ne.jsx(Fs,{path:"/",element:ne.jsx(XM,{})}),ne.jsx(Fs,{path:"/login",element:ne.jsx(sP,{})}),ne.jsx(Fs,{path:"/signup",element:ne.jsx(dP,{})}),ne.jsx(Fs,{path:"*",element:ne.jsx(dE,{to:"/",replace:!0})})]}),i&&ne.jsxs(ne.Fragment,{children:[ne.jsx(Fs,{path:"/chat",element:ne.jsx(jP,{})}),ne.jsx(Fs,{path:"*",element:ne.jsx(dE,{to:"/chat",replace:!0})})]})]})]})}u1.createRoot(document.getElementById("root")).render(ne.jsx(F.StrictMode,{children:ne.jsx(ix,{})}));
