(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Oo(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ye={},Kn=[],It=()=>{},Jf=()=>!1,Yi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ko=t=>t.startsWith("onUpdate:"),Pe=Object.assign,No=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xf=Object.prototype.hasOwnProperty,pe=(t,e)=>Xf.call(t,e),te=Array.isArray,Gn=t=>Qi(t)==="[object Map]",$l=t=>Qi(t)==="[object Set]",ne=t=>typeof t=="function",Re=t=>typeof t=="string",ln=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Hl=t=>(Te(t)||ne(t))&&ne(t.then)&&ne(t.catch),Vl=Object.prototype.toString,Qi=t=>Vl.call(t),Yf=t=>Qi(t).slice(8,-1),Bl=t=>Qi(t)==="[object Object]",Do=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Rr=Oo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Qf=/-(\w)/g,ct=Zi(t=>t.replace(Qf,(e,n)=>n?n.toUpperCase():"")),Zf=/\B([A-Z])/g,Cn=Zi(t=>t.replace(Zf,"-$1").toLowerCase()),es=Zi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ns=Zi(t=>t?`on${es(t)}`:""),sn=(t,e)=>!Object.is(t,e),Ai=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Wl=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},no=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let oc;const ts=()=>oc||(oc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xo(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Re(r)?rd(r):xo(r);if(i)for(const o in i)e[o]=i[o]}return e}else if(Re(t)||Te(t))return t}const ed=/;(?![^(]*\))/g,td=/:([^]+)/,nd=/\/\*[^]*?\*\//g;function rd(t){const e={};return t.replace(nd,"").split(ed).forEach(n=>{if(n){const r=n.split(td);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Lo(t){let e="";if(Re(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const r=Lo(t[n]);r&&(e+=r+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const id="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sd=Oo(id);function Kl(t){return!!t||t===""}const Gl=t=>!!(t&&t.__v_isRef===!0),zl=t=>Re(t)?t:t==null?"":te(t)||Te(t)&&(t.toString===Vl||!ne(t.toString))?Gl(t)?zl(t.value):JSON.stringify(t,ql,2):String(t),ql=(t,e)=>Gl(e)?ql(t,e.value):Gn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],o)=>(n[Ds(r,o)+" =>"]=i,n),{})}:$l(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ds(n))}:ln(e)?Ds(e):Te(e)&&!te(e)&&!Bl(e)?String(e):e,Ds=(t,e="")=>{var n;return ln(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ze;class od{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ze,!e&&Ze&&(this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ze;try{return Ze=this,e()}finally{Ze=n}}}on(){Ze=this}off(){Ze=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ad(){return Ze}let Ee;const xs=new WeakSet;class Jl{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ze&&Ze.active&&Ze.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xs.has(this)&&(xs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ac(this),Ql(this);const e=Ee,n=dt;Ee=this,dt=!0;try{return this.fn()}finally{Zl(this),Ee=e,dt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)jo(e);this.deps=this.depsTail=void 0,ac(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ro(this)&&this.run()}get dirty(){return ro(this)}}let Xl=0,Cr,Pr;function Yl(t,e=!1){if(t.flags|=8,e){t.next=Pr,Pr=t;return}t.next=Cr,Cr=t}function Mo(){Xl++}function Uo(){if(--Xl>0)return;if(Pr){let e=Pr;for(Pr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Cr;){let e=Cr;for(Cr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ql(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zl(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),jo(r),cd(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function ro(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(eu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function eu(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Hr))return;t.globalVersion=Hr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ro(t)){t.flags&=-3;return}const n=Ee,r=dt;Ee=t,dt=!0;try{Ql(t);const i=t.fn(t._value);(e.version===0||sn(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Ee=n,dt=r,Zl(t),t.flags&=-3}}function jo(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)jo(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function cd(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let dt=!0;const tu=[];function un(){tu.push(dt),dt=!1}function hn(){const t=tu.pop();dt=t===void 0?!0:t}function ac(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ee;Ee=void 0;try{e()}finally{Ee=n}}}let Hr=0;class ld{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ee||!dt||Ee===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ee)n=this.activeLink=new ld(Ee,this),Ee.deps?(n.prevDep=Ee.depsTail,Ee.depsTail.nextDep=n,Ee.depsTail=n):Ee.deps=Ee.depsTail=n,nu(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ee.depsTail,n.nextDep=void 0,Ee.depsTail.nextDep=n,Ee.depsTail=n,Ee.deps===n&&(Ee.deps=r)}return n}trigger(e){this.version++,Hr++,this.notify(e)}notify(e){Mo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Uo()}}}function nu(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)nu(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const io=new WeakMap,In=Symbol(""),so=Symbol(""),Vr=Symbol("");function je(t,e,n){if(dt&&Ee){let r=io.get(t);r||io.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new Fo),i.map=r,i.key=n),i.track()}}function Dt(t,e,n,r,i,o){const a=io.get(t);if(!a){Hr++;return}const l=u=>{u&&u.trigger()};if(Mo(),e==="clear")a.forEach(l);else{const u=te(t),d=u&&Do(n);if(u&&n==="length"){const p=Number(r);a.forEach((m,w)=>{(w==="length"||w===Vr||!ln(w)&&w>=p)&&l(m)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),d&&l(a.get(Vr)),e){case"add":u?d&&l(a.get("length")):(l(a.get(In)),Gn(t)&&l(a.get(so)));break;case"delete":u||(l(a.get(In)),Gn(t)&&l(a.get(so)));break;case"set":Gn(t)&&l(a.get(In));break}}Uo()}function jn(t){const e=de(t);return e===t?e:(je(e,"iterate",Vr),pt(t)?e:e.map(Ge))}function $o(t){return je(t=de(t),"iterate",Vr),t}const ud={__proto__:null,[Symbol.iterator](){return Ls(this,Symbol.iterator,Ge)},concat(...t){return jn(this).concat(...t.map(e=>te(e)?jn(e):e))},entries(){return Ls(this,"entries",t=>(t[1]=Ge(t[1]),t))},every(t,e){return Pt(this,"every",t,e,void 0,arguments)},filter(t,e){return Pt(this,"filter",t,e,n=>n.map(Ge),arguments)},find(t,e){return Pt(this,"find",t,e,Ge,arguments)},findIndex(t,e){return Pt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Pt(this,"findLast",t,e,Ge,arguments)},findLastIndex(t,e){return Pt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Pt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ms(this,"includes",t)},indexOf(...t){return Ms(this,"indexOf",t)},join(t){return jn(this).join(t)},lastIndexOf(...t){return Ms(this,"lastIndexOf",t)},map(t,e){return Pt(this,"map",t,e,void 0,arguments)},pop(){return wr(this,"pop")},push(...t){return wr(this,"push",t)},reduce(t,...e){return cc(this,"reduce",t,e)},reduceRight(t,...e){return cc(this,"reduceRight",t,e)},shift(){return wr(this,"shift")},some(t,e){return Pt(this,"some",t,e,void 0,arguments)},splice(...t){return wr(this,"splice",t)},toReversed(){return jn(this).toReversed()},toSorted(t){return jn(this).toSorted(t)},toSpliced(...t){return jn(this).toSpliced(...t)},unshift(...t){return wr(this,"unshift",t)},values(){return Ls(this,"values",Ge)}};function Ls(t,e,n){const r=$o(t),i=r[e]();return r!==t&&!pt(t)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=n(o.value)),o}),i}const hd=Array.prototype;function Pt(t,e,n,r,i,o){const a=$o(t),l=a!==t&&!pt(t),u=a[e];if(u!==hd[e]){const m=u.apply(t,o);return l?Ge(m):m}let d=n;a!==t&&(l?d=function(m,w){return n.call(this,Ge(m),w,t)}:n.length>2&&(d=function(m,w){return n.call(this,m,w,t)}));const p=u.call(a,d,r);return l&&i?i(p):p}function cc(t,e,n,r){const i=$o(t);let o=n;return i!==t&&(pt(t)?n.length>3&&(o=function(a,l,u){return n.call(this,a,l,u,t)}):o=function(a,l,u){return n.call(this,a,Ge(l),u,t)}),i[e](o,...r)}function Ms(t,e,n){const r=de(t);je(r,"iterate",Vr);const i=r[e](...n);return(i===-1||i===!1)&&Bo(n[0])?(n[0]=de(n[0]),r[e](...n)):i}function wr(t,e,n=[]){un(),Mo();const r=de(t)[e].apply(t,n);return Uo(),hn(),r}const fd=Oo("__proto__,__v_isRef,__isVue"),ru=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ln));function dd(t){ln(t)||(t=String(t));const e=de(this);return je(e,"has",t),e.hasOwnProperty(t)}class iu{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const i=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(i?o?Id:cu:o?au:ou).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=te(e);if(!i){let u;if(a&&(u=ud[n]))return u;if(n==="hasOwnProperty")return dd}const l=Reflect.get(e,n,$e(e)?e:r);return(ln(n)?ru.has(n):fd(n))||(i||je(e,"get",n),o)?l:$e(l)?a&&Do(n)?l:l.value:Te(l)?i?uu(l):Zr(l):l}}class su extends iu{constructor(e=!1){super(!1,e)}set(e,n,r,i){let o=e[n];if(!this._isShallow){const u=Tn(o);if(!pt(r)&&!Tn(r)&&(o=de(o),r=de(r)),!te(e)&&$e(o)&&!$e(r))return u?!1:(o.value=r,!0)}const a=te(e)&&Do(n)?Number(n)<e.length:pe(e,n),l=Reflect.set(e,n,r,$e(e)?e:i);return e===de(i)&&(a?sn(r,o)&&Dt(e,"set",n,r):Dt(e,"add",n,r)),l}deleteProperty(e,n){const r=pe(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&Dt(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!ln(n)||!ru.has(n))&&je(e,"has",n),r}ownKeys(e){return je(e,"iterate",te(e)?"length":In),Reflect.ownKeys(e)}}class pd extends iu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gd=new su,md=new pd,vd=new su(!0);const oo=t=>t,wi=t=>Reflect.getPrototypeOf(t);function _d(t,e,n){return function(...r){const i=this.__v_raw,o=de(i),a=Gn(o),l=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,d=i[t](...r),p=n?oo:e?ao:Ge;return!e&&je(o,"iterate",u?so:In),{next(){const{value:m,done:w}=d.next();return w?{value:m,done:w}:{value:l?[p(m[0]),p(m[1])]:p(m),done:w}},[Symbol.iterator](){return this}}}}function bi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function yd(t,e){const n={get(i){const o=this.__v_raw,a=de(o),l=de(i);t||(sn(i,l)&&je(a,"get",i),je(a,"get",l));const{has:u}=wi(a),d=e?oo:t?ao:Ge;if(u.call(a,i))return d(o.get(i));if(u.call(a,l))return d(o.get(l));o!==a&&o.get(i)},get size(){const i=this.__v_raw;return!t&&je(de(i),"iterate",In),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,a=de(o),l=de(i);return t||(sn(i,l)&&je(a,"has",i),je(a,"has",l)),i===l?o.has(i):o.has(i)||o.has(l)},forEach(i,o){const a=this,l=a.__v_raw,u=de(l),d=e?oo:t?ao:Ge;return!t&&je(u,"iterate",In),l.forEach((p,m)=>i.call(o,d(p),d(m),a))}};return Pe(n,t?{add:bi("add"),set:bi("set"),delete:bi("delete"),clear:bi("clear")}:{add(i){!e&&!pt(i)&&!Tn(i)&&(i=de(i));const o=de(this);return wi(o).has.call(o,i)||(o.add(i),Dt(o,"add",i,i)),this},set(i,o){!e&&!pt(o)&&!Tn(o)&&(o=de(o));const a=de(this),{has:l,get:u}=wi(a);let d=l.call(a,i);d||(i=de(i),d=l.call(a,i));const p=u.call(a,i);return a.set(i,o),d?sn(o,p)&&Dt(a,"set",i,o):Dt(a,"add",i,o),this},delete(i){const o=de(this),{has:a,get:l}=wi(o);let u=a.call(o,i);u||(i=de(i),u=a.call(o,i)),l&&l.call(o,i);const d=o.delete(i);return u&&Dt(o,"delete",i,void 0),d},clear(){const i=de(this),o=i.size!==0,a=i.clear();return o&&Dt(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=_d(i,t,e)}),n}function Ho(t,e){const n=yd(t,e);return(r,i,o)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(pe(n,i)&&i in r?n:r,i,o)}const Ed={get:Ho(!1,!1)},wd={get:Ho(!1,!0)},bd={get:Ho(!0,!1)};const ou=new WeakMap,au=new WeakMap,cu=new WeakMap,Id=new WeakMap;function Td(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sd(t){return t.__v_skip||!Object.isExtensible(t)?0:Td(Yf(t))}function Zr(t){return Tn(t)?t:Vo(t,!1,gd,Ed,ou)}function lu(t){return Vo(t,!1,vd,wd,au)}function uu(t){return Vo(t,!0,md,bd,cu)}function Vo(t,e,n,r,i){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=i.get(t);if(o)return o;const a=Sd(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return i.set(t,l),l}function Or(t){return Tn(t)?Or(t.__v_raw):!!(t&&t.__v_isReactive)}function Tn(t){return!!(t&&t.__v_isReadonly)}function pt(t){return!!(t&&t.__v_isShallow)}function Bo(t){return t?!!t.__v_raw:!1}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function Ad(t){return!pe(t,"__v_skip")&&Object.isExtensible(t)&&Wl(t,"__v_skip",!0),t}const Ge=t=>Te(t)?Zr(t):t,ao=t=>Te(t)?uu(t):t;function $e(t){return t?t.__v_isRef===!0:!1}function Rd(t){return hu(t,!1)}function Cd(t){return hu(t,!0)}function hu(t,e){return $e(t)?t:new Pd(t,e)}class Pd{constructor(e,n){this.dep=new Fo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:de(e),this._value=n?e:Ge(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||pt(e)||Tn(e);e=r?e:de(e),sn(e,n)&&(this._rawValue=e,this._value=r?e:Ge(e),this.dep.trigger())}}function zn(t){return $e(t)?t.value:t}const Od={get:(t,e,n)=>e==="__v_raw"?t:zn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return $e(i)&&!$e(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function fu(t){return Or(t)?t:new Proxy(t,Od)}class kd{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Fo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ee!==this)return Yl(this,!0),!0}get value(){const e=this.dep.track();return eu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Nd(t,e,n=!1){let r,i;return ne(t)?r=t:(r=t.get,i=t.set),new kd(r,i,n)}const Ii={},xi=new WeakMap;let En;function Dd(t,e=!1,n=En){if(n){let r=xi.get(n);r||xi.set(n,r=[]),r.push(t)}}function xd(t,e,n=ye){const{immediate:r,deep:i,once:o,scheduler:a,augmentJob:l,call:u}=n,d=B=>i?B:pt(B)||i===!1||i===0?xt(B,1):xt(B);let p,m,w,S,D=!1,U=!1;if($e(t)?(m=()=>t.value,D=pt(t)):Or(t)?(m=()=>d(t),D=!0):te(t)?(U=!0,D=t.some(B=>Or(B)||pt(B)),m=()=>t.map(B=>{if($e(B))return B.value;if(Or(B))return d(B);if(ne(B))return u?u(B,2):B()})):ne(t)?e?m=u?()=>u(t,2):t:m=()=>{if(w){un();try{w()}finally{hn()}}const B=En;En=p;try{return u?u(t,3,[S]):t(S)}finally{En=B}}:m=It,e&&i){const B=m,ie=i===!0?1/0:i;m=()=>xt(B(),ie)}const z=ad(),X=()=>{p.stop(),z&&No(z.effects,p)};if(o&&e){const B=e;e=(...ie)=>{B(...ie),X()}}let W=U?new Array(t.length).fill(Ii):Ii;const G=B=>{if(!(!(p.flags&1)||!p.dirty&&!B))if(e){const ie=p.run();if(i||D||(U?ie.some((ce,b)=>sn(ce,W[b])):sn(ie,W))){w&&w();const ce=En;En=p;try{const b=[ie,W===Ii?void 0:U&&W[0]===Ii?[]:W,S];u?u(e,3,b):e(...b),W=ie}finally{En=ce}}}else p.run()};return l&&l(G),p=new Jl(m),p.scheduler=a?()=>a(G,!1):G,S=B=>Dd(B,!1,p),w=p.onStop=()=>{const B=xi.get(p);if(B){if(u)u(B,4);else for(const ie of B)ie();xi.delete(p)}},e?r?G(!0):W=p.run():a?a(G.bind(null,!0),!0):p.run(),X.pause=p.pause.bind(p),X.resume=p.resume.bind(p),X.stop=X,X}function xt(t,e=1/0,n){if(e<=0||!Te(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,$e(t))xt(t.value,e,n);else if(te(t))for(let r=0;r<t.length;r++)xt(t[r],e,n);else if($l(t)||Gn(t))t.forEach(r=>{xt(r,e,n)});else if(Bl(t)){for(const r in t)xt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&xt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ei(t,e,n,r){try{return r?t(...r):t()}catch(i){ns(i,e,n)}}function At(t,e,n,r){if(ne(t)){const i=ei(t,e,n,r);return i&&Hl(i)&&i.catch(o=>{ns(o,e,n)}),i}if(te(t)){const i=[];for(let o=0;o<t.length;o++)i.push(At(t[o],e,n,r));return i}}function ns(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ye;if(e){let l=e.parent;const u=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const p=l.ec;if(p){for(let m=0;m<p.length;m++)if(p[m](t,u,d)===!1)return}l=l.parent}if(o){un(),ei(o,null,10,[t,u,d]),hn();return}}Ld(t,n,i,r,a)}function Ld(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const ze=[];let Et=-1;const qn=[];let Yt=null,Hn=0;const du=Promise.resolve();let Li=null;function pu(t){const e=Li||du;return t?e.then(this?t.bind(this):t):e}function Md(t){let e=Et+1,n=ze.length;for(;e<n;){const r=e+n>>>1,i=ze[r],o=Br(i);o<t||o===t&&i.flags&2?e=r+1:n=r}return e}function Wo(t){if(!(t.flags&1)){const e=Br(t),n=ze[ze.length-1];!n||!(t.flags&2)&&e>=Br(n)?ze.push(t):ze.splice(Md(e),0,t),t.flags|=1,gu()}}function gu(){Li||(Li=du.then(vu))}function Ud(t){te(t)?qn.push(...t):Yt&&t.id===-1?Yt.splice(Hn+1,0,t):t.flags&1||(qn.push(t),t.flags|=1),gu()}function lc(t,e,n=Et+1){for(;n<ze.length;n++){const r=ze[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ze.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function mu(t){if(qn.length){const e=[...new Set(qn)].sort((n,r)=>Br(n)-Br(r));if(qn.length=0,Yt){Yt.push(...e);return}for(Yt=e,Hn=0;Hn<Yt.length;Hn++){const n=Yt[Hn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Yt=null,Hn=0}}const Br=t=>t.id==null?t.flags&2?-1:1/0:t.id;function vu(t){try{for(Et=0;Et<ze.length;Et++){const e=ze[Et];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ei(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Et<ze.length;Et++){const e=ze[Et];e&&(e.flags&=-2)}Et=-1,ze.length=0,mu(),Li=null,(ze.length||qn.length)&&vu()}}let et=null,_u=null;function Mi(t){const e=et;return et=t,_u=t&&t.type.__scopeId||null,e}function yu(t,e=et,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&_c(-1);const o=Mi(e);let a;try{a=t(...i)}finally{Mi(o),r._d&&_c(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function kr(t,e){if(et===null)return t;const n=cs(et),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,u=ye]=e[i];o&&(ne(o)&&(o={mounted:o,updated:o}),o.deep&&xt(a),r.push({dir:o,instance:n,value:a,oldValue:void 0,arg:l,modifiers:u}))}return t}function _n(t,e,n,r){const i=t.dirs,o=e&&e.dirs;for(let a=0;a<i.length;a++){const l=i[a];o&&(l.oldValue=o[a].value);let u=l.dir[r];u&&(un(),At(u,n,8,[t.el,l,t,e]),hn())}}const jd=Symbol("_vte"),Fd=t=>t.__isTeleport;function Ko(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ko(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Eu(t,e){return ne(t)?Pe({name:t.name},e,{setup:t}):t}function wu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function co(t,e,n,r,i=!1){if(te(t)){t.forEach((D,U)=>co(D,e&&(te(e)?e[U]:e),n,r,i));return}if(Nr(r)&&!i)return;const o=r.shapeFlag&4?cs(r.component):r.el,a=i?null:o,{i:l,r:u}=t,d=e&&e.r,p=l.refs===ye?l.refs={}:l.refs,m=l.setupState,w=de(m),S=m===ye?()=>!1:D=>pe(w,D);if(d!=null&&d!==u&&(Re(d)?(p[d]=null,S(d)&&(m[d]=null)):$e(d)&&(d.value=null)),ne(u))ei(u,l,12,[a,p]);else{const D=Re(u),U=$e(u);if(D||U){const z=()=>{if(t.f){const X=D?S(u)?m[u]:p[u]:u.value;i?te(X)&&No(X,o):te(X)?X.includes(o)||X.push(o):D?(p[u]=[o],S(u)&&(m[u]=p[u])):(u.value=[o],t.k&&(p[t.k]=u.value))}else D?(p[u]=a,S(u)&&(m[u]=a)):U&&(u.value=a,t.k&&(p[t.k]=a))};a?(z.id=-1,Qe(z,n)):z()}}}ts().requestIdleCallback;ts().cancelIdleCallback;const Nr=t=>!!t.type.__asyncLoader,bu=t=>t.type.__isKeepAlive;function $d(t,e){Iu(t,"a",e)}function Hd(t,e){Iu(t,"da",e)}function Iu(t,e,n=Fe){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(rs(e,r,n),n){let i=n.parent;for(;i&&i.parent;)bu(i.parent.vnode)&&Vd(r,e,n,i),i=i.parent}}function Vd(t,e,n,r){const i=rs(e,t,r,!0);Tu(()=>{No(r[e],i)},n)}function rs(t,e,n=Fe,r=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{un();const l=ti(n),u=At(e,n,t,a);return l(),hn(),u});return r?i.unshift(o):i.push(o),o}}const Vt=t=>(e,n=Fe)=>{(!Gr||t==="sp")&&rs(t,(...r)=>e(...r),n)},Bd=Vt("bm"),Wd=Vt("m"),Kd=Vt("bu"),Gd=Vt("u"),zd=Vt("bum"),Tu=Vt("um"),qd=Vt("sp"),Jd=Vt("rtg"),Xd=Vt("rtc");function Yd(t,e=Fe){rs("ec",t,e)}const Qd="components";function Su(t,e){return ep(Qd,t,!0,e)||t}const Zd=Symbol.for("v-ndc");function ep(t,e,n=!0,r=!1){const i=et||Fe;if(i){const o=i.type;{const l=Hp(o,!1);if(l&&(l===e||l===ct(e)||l===es(ct(e))))return o}const a=uc(i[t]||o[t],e)||uc(i.appContext[t],e);return!a&&r?o:a}}function uc(t,e){return t&&(t[e]||t[ct(e)]||t[es(ct(e))])}const lo=t=>t?Ku(t)?cs(t):lo(t.parent):null,Dr=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>lo(t.parent),$root:t=>lo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Go(t),$forceUpdate:t=>t.f||(t.f=()=>{Wo(t.update)}),$nextTick:t=>t.n||(t.n=pu.bind(t.proxy)),$watch:t=>wp.bind(t)}),Us=(t,e)=>t!==ye&&!t.__isScriptSetup&&pe(t,e),tp={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:o,accessCache:a,type:l,appContext:u}=t;let d;if(e[0]!=="$"){const S=a[e];if(S!==void 0)switch(S){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return o[e]}else{if(Us(r,e))return a[e]=1,r[e];if(i!==ye&&pe(i,e))return a[e]=2,i[e];if((d=t.propsOptions[0])&&pe(d,e))return a[e]=3,o[e];if(n!==ye&&pe(n,e))return a[e]=4,n[e];uo&&(a[e]=0)}}const p=Dr[e];let m,w;if(p)return e==="$attrs"&&je(t.attrs,"get",""),p(t);if((m=l.__cssModules)&&(m=m[e]))return m;if(n!==ye&&pe(n,e))return a[e]=4,n[e];if(w=u.config.globalProperties,pe(w,e))return w[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;return Us(i,e)?(i[e]=n,!0):r!==ye&&pe(r,e)?(r[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:o}},a){let l;return!!n[a]||t!==ye&&pe(t,a)||Us(e,a)||(l=o[0])&&pe(l,a)||pe(r,a)||pe(Dr,a)||pe(i.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function hc(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let uo=!0;function np(t){const e=Go(t),n=t.proxy,r=t.ctx;uo=!1,e.beforeCreate&&fc(e.beforeCreate,t,"bc");const{data:i,computed:o,methods:a,watch:l,provide:u,inject:d,created:p,beforeMount:m,mounted:w,beforeUpdate:S,updated:D,activated:U,deactivated:z,beforeDestroy:X,beforeUnmount:W,destroyed:G,unmounted:B,render:ie,renderTracked:ce,renderTriggered:b,errorCaptured:v,serverPrefetch:E,expose:I,inheritAttrs:T,components:A,directives:y,filters:He}=e;if(d&&rp(d,r,null),a)for(const se in a){const re=a[se];ne(re)&&(r[se]=re.bind(n))}if(i){const se=i.call(n,n);Te(se)&&(t.data=Zr(se))}if(uo=!0,o)for(const se in o){const re=o[se],Ye=ne(re)?re.bind(n,n):ne(re.get)?re.get.bind(n,n):It,lt=!ne(re)&&ne(re.set)?re.set.bind(n):It,it=ht({get:Ye,set:lt});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>it.value,set:be=>it.value=be})}if(l)for(const se in l)Au(l[se],r,n,se);if(u){const se=ne(u)?u.call(n):u;Reflect.ownKeys(se).forEach(re=>{Ri(re,se[re])})}p&&fc(p,t,"c");function Ae(se,re){te(re)?re.forEach(Ye=>se(Ye.bind(n))):re&&se(re.bind(n))}if(Ae(Bd,m),Ae(Wd,w),Ae(Kd,S),Ae(Gd,D),Ae($d,U),Ae(Hd,z),Ae(Yd,v),Ae(Xd,ce),Ae(Jd,b),Ae(zd,W),Ae(Tu,B),Ae(qd,E),te(I))if(I.length){const se=t.exposed||(t.exposed={});I.forEach(re=>{Object.defineProperty(se,re,{get:()=>n[re],set:Ye=>n[re]=Ye})})}else t.exposed||(t.exposed={});ie&&t.render===It&&(t.render=ie),T!=null&&(t.inheritAttrs=T),A&&(t.components=A),y&&(t.directives=y),E&&wu(t)}function rp(t,e,n=It){te(t)&&(t=ho(t));for(const r in t){const i=t[r];let o;Te(i)?"default"in i?o=jt(i.from||r,i.default,!0):o=jt(i.from||r):o=jt(i),$e(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function fc(t,e,n){At(te(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Au(t,e,n,r){let i=r.includes(".")?$u(n,r):()=>n[r];if(Re(t)){const o=e[t];ne(o)&&Xn(i,o)}else if(ne(t))Xn(i,t.bind(n));else if(Te(t))if(te(t))t.forEach(o=>Au(o,e,n,r));else{const o=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(o)&&Xn(i,o,t)}}function Go(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,l=o.get(e);let u;return l?u=l:!i.length&&!n&&!r?u=e:(u={},i.length&&i.forEach(d=>Ui(u,d,a,!0)),Ui(u,e,a)),Te(e)&&o.set(e,u),u}function Ui(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&Ui(t,o,n,!0),i&&i.forEach(a=>Ui(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=ip[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const ip={data:dc,props:pc,emits:pc,methods:Tr,computed:Tr,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:Tr,directives:Tr,watch:op,provide:dc,inject:sp};function dc(t,e){return e?t?function(){return Pe(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function sp(t,e){return Tr(ho(t),ho(e))}function ho(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function Tr(t,e){return t?Pe(Object.create(null),t,e):e}function pc(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:Pe(Object.create(null),hc(t),hc(e??{})):e}function op(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const r in e)n[r]=We(t[r],e[r]);return n}function Ru(){return{app:null,config:{isNativeTag:Jf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ap=0;function cp(t,e){return function(r,i=null){ne(r)||(r=Pe({},r)),i!=null&&!Te(i)&&(i=null);const o=Ru(),a=new WeakSet,l=[];let u=!1;const d=o.app={_uid:ap++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:Bp,get config(){return o.config},set config(p){},use(p,...m){return a.has(p)||(p&&ne(p.install)?(a.add(p),p.install(d,...m)):ne(p)&&(a.add(p),p(d,...m))),d},mixin(p){return o.mixins.includes(p)||o.mixins.push(p),d},component(p,m){return m?(o.components[p]=m,d):o.components[p]},directive(p,m){return m?(o.directives[p]=m,d):o.directives[p]},mount(p,m,w){if(!u){const S=d._ceVNode||nt(r,i);return S.appContext=o,w===!0?w="svg":w===!1&&(w=void 0),m&&e?e(S,p):t(S,p,w),u=!0,d._container=p,p.__vue_app__=d,cs(S.component)}},onUnmount(p){l.push(p)},unmount(){u&&(At(l,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(p,m){return o.provides[p]=m,d},runWithContext(p){const m=Jn;Jn=d;try{return p()}finally{Jn=m}}};return d}}let Jn=null;function Ri(t,e){if(Fe){let n=Fe.provides;const r=Fe.parent&&Fe.parent.provides;r===n&&(n=Fe.provides=Object.create(r)),n[t]=e}}function jt(t,e,n=!1){const r=Fe||et;if(r||Jn){const i=Jn?Jn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ne(e)?e.call(r&&r.proxy):e}}const Cu={},Pu=()=>Object.create(Cu),Ou=t=>Object.getPrototypeOf(t)===Cu;function lp(t,e,n,r=!1){const i={},o=Pu();t.propsDefaults=Object.create(null),ku(t,e,i,o);for(const a in t.propsOptions[0])a in i||(i[a]=void 0);n?t.props=r?i:lu(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function up(t,e,n,r){const{props:i,attrs:o,vnode:{patchFlag:a}}=t,l=de(i),[u]=t.propsOptions;let d=!1;if((r||a>0)&&!(a&16)){if(a&8){const p=t.vnode.dynamicProps;for(let m=0;m<p.length;m++){let w=p[m];if(is(t.emitsOptions,w))continue;const S=e[w];if(u)if(pe(o,w))S!==o[w]&&(o[w]=S,d=!0);else{const D=ct(w);i[D]=fo(u,l,D,S,t,!1)}else S!==o[w]&&(o[w]=S,d=!0)}}}else{ku(t,e,i,o)&&(d=!0);let p;for(const m in l)(!e||!pe(e,m)&&((p=Cn(m))===m||!pe(e,p)))&&(u?n&&(n[m]!==void 0||n[p]!==void 0)&&(i[m]=fo(u,l,m,void 0,t,!0)):delete i[m]);if(o!==l)for(const m in o)(!e||!pe(e,m))&&(delete o[m],d=!0)}d&&Dt(t.attrs,"set","")}function ku(t,e,n,r){const[i,o]=t.propsOptions;let a=!1,l;if(e)for(let u in e){if(Rr(u))continue;const d=e[u];let p;i&&pe(i,p=ct(u))?!o||!o.includes(p)?n[p]=d:(l||(l={}))[p]=d:is(t.emitsOptions,u)||(!(u in r)||d!==r[u])&&(r[u]=d,a=!0)}if(o){const u=de(n),d=l||ye;for(let p=0;p<o.length;p++){const m=o[p];n[m]=fo(i,u,m,d[m],t,!pe(d,m))}}return a}function fo(t,e,n,r,i,o){const a=t[n];if(a!=null){const l=pe(a,"default");if(l&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&ne(u)){const{propsDefaults:d}=i;if(n in d)r=d[n];else{const p=ti(i);r=d[n]=u.call(null,e),p()}}else r=u;i.ce&&i.ce._setProp(n,r)}a[0]&&(o&&!l?r=!1:a[1]&&(r===""||r===Cn(n))&&(r=!0))}return r}const hp=new WeakMap;function Nu(t,e,n=!1){const r=n?hp:e.propsCache,i=r.get(t);if(i)return i;const o=t.props,a={},l=[];let u=!1;if(!ne(t)){const p=m=>{u=!0;const[w,S]=Nu(m,e,!0);Pe(a,w),S&&l.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!o&&!u)return Te(t)&&r.set(t,Kn),Kn;if(te(o))for(let p=0;p<o.length;p++){const m=ct(o[p]);gc(m)&&(a[m]=ye)}else if(o)for(const p in o){const m=ct(p);if(gc(m)){const w=o[p],S=a[m]=te(w)||ne(w)?{type:w}:Pe({},w),D=S.type;let U=!1,z=!0;if(te(D))for(let X=0;X<D.length;++X){const W=D[X],G=ne(W)&&W.name;if(G==="Boolean"){U=!0;break}else G==="String"&&(z=!1)}else U=ne(D)&&D.name==="Boolean";S[0]=U,S[1]=z,(U||pe(S,"default"))&&l.push(m)}}const d=[a,l];return Te(t)&&r.set(t,d),d}function gc(t){return t[0]!=="$"&&!Rr(t)}const Du=t=>t[0]==="_"||t==="$stable",zo=t=>te(t)?t.map(wt):[wt(t)],fp=(t,e,n)=>{if(e._n)return e;const r=yu((...i)=>zo(e(...i)),n);return r._c=!1,r},xu=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Du(i))continue;const o=t[i];if(ne(o))e[i]=fp(i,o,r);else if(o!=null){const a=zo(o);e[i]=()=>a}}},Lu=(t,e)=>{const n=zo(e);t.slots.default=()=>n},Mu=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},dp=(t,e,n)=>{const r=t.slots=Pu();if(t.vnode.shapeFlag&32){const i=e._;i?(Mu(r,e,n),n&&Wl(r,"_",i,!0)):xu(e,r)}else e&&Lu(t,e)},pp=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,a=ye;if(r.shapeFlag&32){const l=e._;l?n&&l===1?o=!1:Mu(i,e,n):(o=!e.$stable,xu(e,i)),a=e}else e&&(Lu(t,e),a={default:1});if(o)for(const l in i)!Du(l)&&a[l]==null&&delete i[l]},Qe=Cp;function gp(t){return mp(t)}function mp(t,e){const n=ts();n.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:a,createText:l,createComment:u,setText:d,setElementText:p,parentNode:m,nextSibling:w,setScopeId:S=It,insertStaticContent:D}=t,U=(g,_,C,N=null,O=null,x=null,$=void 0,j=null,M=!!_.dynamicChildren)=>{if(g===_)return;g&&!br(g,_)&&(N=k(g),be(g,O,x,!0),g=null),_.patchFlag===-2&&(M=!1,_.dynamicChildren=null);const{type:L,ref:Q,shapeFlag:V}=_;switch(L){case ss:z(g,_,C,N);break;case Wr:X(g,_,C,N);break;case $s:g==null&&W(_,C,N,$);break;case Nt:A(g,_,C,N,O,x,$,j,M);break;default:V&1?ie(g,_,C,N,O,x,$,j,M):V&6?y(g,_,C,N,O,x,$,j,M):(V&64||V&128)&&L.process(g,_,C,N,O,x,$,j,M,q)}Q!=null&&O&&co(Q,g&&g.ref,x,_||g,!_)},z=(g,_,C,N)=>{if(g==null)r(_.el=l(_.children),C,N);else{const O=_.el=g.el;_.children!==g.children&&d(O,_.children)}},X=(g,_,C,N)=>{g==null?r(_.el=u(_.children||""),C,N):_.el=g.el},W=(g,_,C,N)=>{[g.el,g.anchor]=D(g.children,_,C,N,g.el,g.anchor)},G=({el:g,anchor:_},C,N)=>{let O;for(;g&&g!==_;)O=w(g),r(g,C,N),g=O;r(_,C,N)},B=({el:g,anchor:_})=>{let C;for(;g&&g!==_;)C=w(g),i(g),g=C;i(_)},ie=(g,_,C,N,O,x,$,j,M)=>{_.type==="svg"?$="svg":_.type==="math"&&($="mathml"),g==null?ce(_,C,N,O,x,$,j,M):E(g,_,O,x,$,j,M)},ce=(g,_,C,N,O,x,$,j)=>{let M,L;const{props:Q,shapeFlag:V,transition:Y,dirs:J}=g;if(M=g.el=a(g.type,x,Q&&Q.is,Q),V&8?p(M,g.children):V&16&&v(g.children,M,null,N,O,js(g,x),$,j),J&&_n(g,null,N,"created"),b(M,g,g.scopeId,$,N),Q){for(const he in Q)he!=="value"&&!Rr(he)&&o(M,he,null,Q[he],x,N);"value"in Q&&o(M,"value",null,Q.value,x),(L=Q.onVnodeBeforeMount)&&yt(L,N,g)}J&&_n(g,null,N,"beforeMount");const Z=vp(O,Y);Z&&Y.beforeEnter(M),r(M,_,C),((L=Q&&Q.onVnodeMounted)||Z||J)&&Qe(()=>{L&&yt(L,N,g),Z&&Y.enter(M),J&&_n(g,null,N,"mounted")},O)},b=(g,_,C,N,O)=>{if(C&&S(g,C),N)for(let x=0;x<N.length;x++)S(g,N[x]);if(O){let x=O.subTree;if(_===x||Vu(x.type)&&(x.ssContent===_||x.ssFallback===_)){const $=O.vnode;b(g,$,$.scopeId,$.slotScopeIds,O.parent)}}},v=(g,_,C,N,O,x,$,j,M=0)=>{for(let L=M;L<g.length;L++){const Q=g[L]=j?Qt(g[L]):wt(g[L]);U(null,Q,_,C,N,O,x,$,j)}},E=(g,_,C,N,O,x,$)=>{const j=_.el=g.el;let{patchFlag:M,dynamicChildren:L,dirs:Q}=_;M|=g.patchFlag&16;const V=g.props||ye,Y=_.props||ye;let J;if(C&&yn(C,!1),(J=Y.onVnodeBeforeUpdate)&&yt(J,C,_,g),Q&&_n(_,g,C,"beforeUpdate"),C&&yn(C,!0),(V.innerHTML&&Y.innerHTML==null||V.textContent&&Y.textContent==null)&&p(j,""),L?I(g.dynamicChildren,L,j,C,N,js(_,O),x):$||re(g,_,j,null,C,N,js(_,O),x,!1),M>0){if(M&16)T(j,V,Y,C,O);else if(M&2&&V.class!==Y.class&&o(j,"class",null,Y.class,O),M&4&&o(j,"style",V.style,Y.style,O),M&8){const Z=_.dynamicProps;for(let he=0;he<Z.length;he++){const le=Z[he],xe=V[le],Ce=Y[le];(Ce!==xe||le==="value")&&o(j,le,xe,Ce,O,C)}}M&1&&g.children!==_.children&&p(j,_.children)}else!$&&L==null&&T(j,V,Y,C,O);((J=Y.onVnodeUpdated)||Q)&&Qe(()=>{J&&yt(J,C,_,g),Q&&_n(_,g,C,"updated")},N)},I=(g,_,C,N,O,x,$)=>{for(let j=0;j<_.length;j++){const M=g[j],L=_[j],Q=M.el&&(M.type===Nt||!br(M,L)||M.shapeFlag&70)?m(M.el):C;U(M,L,Q,null,N,O,x,$,!0)}},T=(g,_,C,N,O)=>{if(_!==C){if(_!==ye)for(const x in _)!Rr(x)&&!(x in C)&&o(g,x,_[x],null,O,N);for(const x in C){if(Rr(x))continue;const $=C[x],j=_[x];$!==j&&x!=="value"&&o(g,x,j,$,O,N)}"value"in C&&o(g,"value",_.value,C.value,O)}},A=(g,_,C,N,O,x,$,j,M)=>{const L=_.el=g?g.el:l(""),Q=_.anchor=g?g.anchor:l("");let{patchFlag:V,dynamicChildren:Y,slotScopeIds:J}=_;J&&(j=j?j.concat(J):J),g==null?(r(L,C,N),r(Q,C,N),v(_.children||[],C,Q,O,x,$,j,M)):V>0&&V&64&&Y&&g.dynamicChildren?(I(g.dynamicChildren,Y,C,O,x,$,j),(_.key!=null||O&&_===O.subTree)&&Uu(g,_,!0)):re(g,_,C,Q,O,x,$,j,M)},y=(g,_,C,N,O,x,$,j,M)=>{_.slotScopeIds=j,g==null?_.shapeFlag&512?O.ctx.activate(_,C,N,$,M):He(_,C,N,O,x,$,M):rt(g,_,M)},He=(g,_,C,N,O,x,$)=>{const j=g.component=Mp(g,N,O);if(bu(g)&&(j.ctx.renderer=q),Up(j,!1,$),j.asyncDep){if(O&&O.registerDep(j,Ae,$),!g.el){const M=j.subTree=nt(Wr);X(null,M,_,C)}}else Ae(j,g,_,C,O,x,$)},rt=(g,_,C)=>{const N=_.component=g.component;if(Ap(g,_,C))if(N.asyncDep&&!N.asyncResolved){se(N,_,C);return}else N.next=_,N.update();else _.el=g.el,N.vnode=_},Ae=(g,_,C,N,O,x,$)=>{const j=()=>{if(g.isMounted){let{next:V,bu:Y,u:J,parent:Z,vnode:he}=g;{const Le=ju(g);if(Le){V&&(V.el=he.el,se(g,V,$)),Le.asyncDep.then(()=>{g.isUnmounted||j()});return}}let le=V,xe;yn(g,!1),V?(V.el=he.el,se(g,V,$)):V=he,Y&&Ai(Y),(xe=V.props&&V.props.onVnodeBeforeUpdate)&&yt(xe,Z,V,he),yn(g,!0);const Ce=Fs(g),Oe=g.subTree;g.subTree=Ce,U(Oe,Ce,m(Oe.el),k(Oe),g,O,x),V.el=Ce.el,le===null&&Rp(g,Ce.el),J&&Qe(J,O),(xe=V.props&&V.props.onVnodeUpdated)&&Qe(()=>yt(xe,Z,V,he),O)}else{let V;const{el:Y,props:J}=_,{bm:Z,m:he,parent:le,root:xe,type:Ce}=g,Oe=Nr(_);if(yn(g,!1),Z&&Ai(Z),!Oe&&(V=J&&J.onVnodeBeforeMount)&&yt(V,le,_),yn(g,!0),Y&&ve){const Le=()=>{g.subTree=Fs(g),ve(Y,g.subTree,g,O,null)};Oe&&Ce.__asyncHydrate?Ce.__asyncHydrate(Y,g,Le):Le()}else{xe.ce&&xe.ce._injectChildStyle(Ce);const Le=g.subTree=Fs(g);U(null,Le,C,N,g,O,x),_.el=Le.el}if(he&&Qe(he,O),!Oe&&(V=J&&J.onVnodeMounted)){const Le=_;Qe(()=>yt(V,le,Le),O)}(_.shapeFlag&256||le&&Nr(le.vnode)&&le.vnode.shapeFlag&256)&&g.a&&Qe(g.a,O),g.isMounted=!0,_=C=N=null}};g.scope.on();const M=g.effect=new Jl(j);g.scope.off();const L=g.update=M.run.bind(M),Q=g.job=M.runIfDirty.bind(M);Q.i=g,Q.id=g.uid,M.scheduler=()=>Wo(Q),yn(g,!0),L()},se=(g,_,C)=>{_.component=g;const N=g.vnode.props;g.vnode=_,g.next=null,up(g,_.props,N,C),pp(g,_.children,C),un(),lc(g),hn()},re=(g,_,C,N,O,x,$,j,M=!1)=>{const L=g&&g.children,Q=g?g.shapeFlag:0,V=_.children,{patchFlag:Y,shapeFlag:J}=_;if(Y>0){if(Y&128){lt(L,V,C,N,O,x,$,j,M);return}else if(Y&256){Ye(L,V,C,N,O,x,$,j,M);return}}J&8?(Q&16&&Je(L,O,x),V!==L&&p(C,V)):Q&16?J&16?lt(L,V,C,N,O,x,$,j,M):Je(L,O,x,!0):(Q&8&&p(C,""),J&16&&v(V,C,N,O,x,$,j,M))},Ye=(g,_,C,N,O,x,$,j,M)=>{g=g||Kn,_=_||Kn;const L=g.length,Q=_.length,V=Math.min(L,Q);let Y;for(Y=0;Y<V;Y++){const J=_[Y]=M?Qt(_[Y]):wt(_[Y]);U(g[Y],J,C,null,O,x,$,j,M)}L>Q?Je(g,O,x,!0,!1,V):v(_,C,N,O,x,$,j,M,V)},lt=(g,_,C,N,O,x,$,j,M)=>{let L=0;const Q=_.length;let V=g.length-1,Y=Q-1;for(;L<=V&&L<=Y;){const J=g[L],Z=_[L]=M?Qt(_[L]):wt(_[L]);if(br(J,Z))U(J,Z,C,null,O,x,$,j,M);else break;L++}for(;L<=V&&L<=Y;){const J=g[V],Z=_[Y]=M?Qt(_[Y]):wt(_[Y]);if(br(J,Z))U(J,Z,C,null,O,x,$,j,M);else break;V--,Y--}if(L>V){if(L<=Y){const J=Y+1,Z=J<Q?_[J].el:N;for(;L<=Y;)U(null,_[L]=M?Qt(_[L]):wt(_[L]),C,Z,O,x,$,j,M),L++}}else if(L>Y)for(;L<=V;)be(g[L],O,x,!0),L++;else{const J=L,Z=L,he=new Map;for(L=Z;L<=Y;L++){const Ve=_[L]=M?Qt(_[L]):wt(_[L]);Ve.key!=null&&he.set(Ve.key,L)}let le,xe=0;const Ce=Y-Z+1;let Oe=!1,Le=0;const Kt=new Array(Ce);for(L=0;L<Ce;L++)Kt[L]=0;for(L=J;L<=V;L++){const Ve=g[L];if(xe>=Ce){be(Ve,O,x,!0);continue}let st;if(Ve.key!=null)st=he.get(Ve.key);else for(le=Z;le<=Y;le++)if(Kt[le-Z]===0&&br(Ve,_[le])){st=le;break}st===void 0?be(Ve,O,x,!0):(Kt[st-Z]=L+1,st>=Le?Le=st:Oe=!0,U(Ve,_[st],C,null,O,x,$,j,M),xe++)}const kn=Oe?_p(Kt):Kn;for(le=kn.length-1,L=Ce-1;L>=0;L--){const Ve=Z+L,st=_[Ve],Nn=Ve+1<Q?_[Ve+1].el:N;Kt[L]===0?U(null,st,C,Nn,O,x,$,j,M):Oe&&(le<0||L!==kn[le]?it(st,C,Nn,2):le--)}}},it=(g,_,C,N,O=null)=>{const{el:x,type:$,transition:j,children:M,shapeFlag:L}=g;if(L&6){it(g.component.subTree,_,C,N);return}if(L&128){g.suspense.move(_,C,N);return}if(L&64){$.move(g,_,C,q);return}if($===Nt){r(x,_,C);for(let V=0;V<M.length;V++)it(M[V],_,C,N);r(g.anchor,_,C);return}if($===$s){G(g,_,C);return}if(N!==2&&L&1&&j)if(N===0)j.beforeEnter(x),r(x,_,C),Qe(()=>j.enter(x),O);else{const{leave:V,delayLeave:Y,afterLeave:J}=j,Z=()=>r(x,_,C),he=()=>{V(x,()=>{Z(),J&&J()})};Y?Y(x,Z,he):he()}else r(x,_,C)},be=(g,_,C,N=!1,O=!1)=>{const{type:x,props:$,ref:j,children:M,dynamicChildren:L,shapeFlag:Q,patchFlag:V,dirs:Y,cacheIndex:J}=g;if(V===-2&&(O=!1),j!=null&&co(j,null,C,g,!0),J!=null&&(_.renderCache[J]=void 0),Q&256){_.ctx.deactivate(g);return}const Z=Q&1&&Y,he=!Nr(g);let le;if(he&&(le=$&&$.onVnodeBeforeUnmount)&&yt(le,_,g),Q&6)_t(g.component,C,N);else{if(Q&128){g.suspense.unmount(C,N);return}Z&&_n(g,null,_,"beforeUnmount"),Q&64?g.type.remove(g,_,C,q,N):L&&!L.hasOnce&&(x!==Nt||V>0&&V&64)?Je(L,_,C,!1,!0):(x===Nt&&V&384||!O&&Q&16)&&Je(M,_,C),N&&Ie(g)}(he&&(le=$&&$.onVnodeUnmounted)||Z)&&Qe(()=>{le&&yt(le,_,g),Z&&_n(g,null,_,"unmounted")},C)},Ie=g=>{const{type:_,el:C,anchor:N,transition:O}=g;if(_===Nt){Wt(C,N);return}if(_===$s){B(g);return}const x=()=>{i(C),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(g.shapeFlag&1&&O&&!O.persisted){const{leave:$,delayLeave:j}=O,M=()=>$(C,x);j?j(g.el,x,M):M()}else x()},Wt=(g,_)=>{let C;for(;g!==_;)C=w(g),i(g),g=C;i(_)},_t=(g,_,C)=>{const{bum:N,scope:O,job:x,subTree:$,um:j,m:M,a:L}=g;mc(M),mc(L),N&&Ai(N),O.stop(),x&&(x.flags|=8,be($,g,_,C)),j&&Qe(j,_),Qe(()=>{g.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},Je=(g,_,C,N=!1,O=!1,x=0)=>{for(let $=x;$<g.length;$++)be(g[$],_,C,N,O)},k=g=>{if(g.shapeFlag&6)return k(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const _=w(g.anchor||g.el),C=_&&_[jd];return C?w(C):_};let K=!1;const H=(g,_,C)=>{g==null?_._vnode&&be(_._vnode,null,null,!0):U(_._vnode||null,g,_,null,null,null,C),_._vnode=g,K||(K=!0,lc(),mu(),K=!1)},q={p:U,um:be,m:it,r:Ie,mt:He,mc:v,pc:re,pbc:I,n:k,o:t};let oe,ve;return{render:H,hydrate:oe,createApp:cp(H,oe)}}function js({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function yn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function vp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Uu(t,e,n=!1){const r=t.children,i=e.children;if(te(r)&&te(i))for(let o=0;o<r.length;o++){const a=r[o];let l=i[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[o]=Qt(i[o]),l.el=a.el),!n&&l.patchFlag!==-2&&Uu(a,l)),l.type===ss&&(l.el=a.el)}}function _p(t){const e=t.slice(),n=[0];let r,i,o,a,l;const u=t.length;for(r=0;r<u;r++){const d=t[r];if(d!==0){if(i=n[n.length-1],t[i]<d){e[r]=i,n.push(r);continue}for(o=0,a=n.length-1;o<a;)l=o+a>>1,t[n[l]]<d?o=l+1:a=l;d<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function ju(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ju(e)}function mc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const yp=Symbol.for("v-scx"),Ep=()=>jt(yp);function Xn(t,e,n){return Fu(t,e,n)}function Fu(t,e,n=ye){const{immediate:r,deep:i,flush:o,once:a}=n,l=Pe({},n),u=e&&r||!e&&o!=="post";let d;if(Gr){if(o==="sync"){const S=Ep();d=S.__watcherHandles||(S.__watcherHandles=[])}else if(!u){const S=()=>{};return S.stop=It,S.resume=It,S.pause=It,S}}const p=Fe;l.call=(S,D,U)=>At(S,p,D,U);let m=!1;o==="post"?l.scheduler=S=>{Qe(S,p&&p.suspense)}:o!=="sync"&&(m=!0,l.scheduler=(S,D)=>{D?S():Wo(S)}),l.augmentJob=S=>{e&&(S.flags|=4),m&&(S.flags|=2,p&&(S.id=p.uid,S.i=p))};const w=xd(t,e,l);return Gr&&(d?d.push(w):u&&w()),w}function wp(t,e,n){const r=this.proxy,i=Re(t)?t.includes(".")?$u(r,t):()=>r[t]:t.bind(r,r);let o;ne(e)?o=e:(o=e.handler,n=e);const a=ti(this),l=Fu(i,o.bind(r),n);return a(),l}function $u(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const bp=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ct(e)}Modifiers`]||t[`${Cn(e)}Modifiers`];function Ip(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ye;let i=n;const o=e.startsWith("update:"),a=o&&bp(r,e.slice(7));a&&(a.trim&&(i=n.map(p=>Re(p)?p.trim():p)),a.number&&(i=n.map(no)));let l,u=r[l=Ns(e)]||r[l=Ns(ct(e))];!u&&o&&(u=r[l=Ns(Cn(e))]),u&&At(u,t,6,i);const d=r[l+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,At(d,t,6,i)}}function Hu(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const o=t.emits;let a={},l=!1;if(!ne(t)){const u=d=>{const p=Hu(d,e,!0);p&&(l=!0,Pe(a,p))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!o&&!l?(Te(t)&&r.set(t,null),null):(te(o)?o.forEach(u=>a[u]=null):Pe(a,o),Te(t)&&r.set(t,a),a)}function is(t,e){return!t||!Yi(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,Cn(e))||pe(t,e))}function Fs(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[o],slots:a,attrs:l,emit:u,render:d,renderCache:p,props:m,data:w,setupState:S,ctx:D,inheritAttrs:U}=t,z=Mi(t);let X,W;try{if(n.shapeFlag&4){const B=i||r,ie=B;X=wt(d.call(ie,B,p,m,S,w,D)),W=l}else{const B=e;X=wt(B.length>1?B(m,{attrs:l,slots:a,emit:u}):B(m,null)),W=e.props?l:Tp(l)}}catch(B){xr.length=0,ns(B,t,1),X=nt(Wr)}let G=X;if(W&&U!==!1){const B=Object.keys(W),{shapeFlag:ie}=G;B.length&&ie&7&&(o&&B.some(ko)&&(W=Sp(W,o)),G=tr(G,W,!1,!0))}return n.dirs&&(G=tr(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&Ko(G,n.transition),X=G,Mi(z),X}const Tp=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yi(n))&&((e||(e={}))[n]=t[n]);return e},Sp=(t,e)=>{const n={};for(const r in t)(!ko(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ap(t,e,n){const{props:r,children:i,component:o}=t,{props:a,children:l,patchFlag:u}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?vc(r,a,d):!!a;if(u&8){const p=e.dynamicProps;for(let m=0;m<p.length;m++){const w=p[m];if(a[w]!==r[w]&&!is(d,w))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?vc(r,a,d):!0:!!a;return!1}function vc(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!is(n,o))return!0}return!1}function Rp({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Vu=t=>t.__isSuspense;function Cp(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):Ud(t)}const Nt=Symbol.for("v-fgt"),ss=Symbol.for("v-txt"),Wr=Symbol.for("v-cmt"),$s=Symbol.for("v-stc"),xr=[];let tt=null;function os(t=!1){xr.push(tt=t?null:[])}function Pp(){xr.pop(),tt=xr[xr.length-1]||null}let Kr=1;function _c(t){Kr+=t,t<0&&tt&&(tt.hasOnce=!0)}function Op(t){return t.dynamicChildren=Kr>0?tt||Kn:null,Pp(),Kr>0&&tt&&tt.push(t),t}function as(t,e,n,r,i,o){return Op(fe(t,e,n,r,i,o,!0))}function ji(t){return t?t.__v_isVNode===!0:!1}function br(t,e){return t.type===e.type&&t.key===e.key}const Bu=({key:t})=>t??null,Ci=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||$e(t)||ne(t)?{i:et,r:t,k:e,f:!!n}:t:null);function fe(t,e=null,n=null,r=0,i=null,o=t===Nt?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bu(e),ref:e&&Ci(e),scopeId:_u,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:et};return l?(qo(u,n),o&128&&t.normalize(u)):n&&(u.shapeFlag|=Re(n)?8:16),Kr>0&&!a&&tt&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&tt.push(u),u}const nt=kp;function kp(t,e=null,n=null,r=0,i=null,o=!1){if((!t||t===Zd)&&(t=Wr),ji(t)){const l=tr(t,e,!0);return n&&qo(l,n),Kr>0&&!o&&tt&&(l.shapeFlag&6?tt[tt.indexOf(t)]=l:tt.push(l)),l.patchFlag=-2,l}if(Vp(t)&&(t=t.__vccOpts),e){e=Np(e);let{class:l,style:u}=e;l&&!Re(l)&&(e.class=Lo(l)),Te(u)&&(Bo(u)&&!te(u)&&(u=Pe({},u)),e.style=xo(u))}const a=Re(t)?1:Vu(t)?128:Fd(t)?64:Te(t)?4:ne(t)?2:0;return fe(t,e,n,r,i,a,o,!0)}function Np(t){return t?Bo(t)||Ou(t)?Pe({},t):t:null}function tr(t,e,n=!1,r=!1){const{props:i,ref:o,patchFlag:a,children:l,transition:u}=t,d=e?Dp(i||{},e):i,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Bu(d),ref:e&&e.ref?n&&o?te(o)?o.concat(Ci(e)):[o,Ci(e)]:Ci(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Nt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tr(t.ssContent),ssFallback:t.ssFallback&&tr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&Ko(p,u.clone(p)),p}function Wu(t=" ",e=0){return nt(ss,null,t,e)}function wt(t){return t==null||typeof t=="boolean"?nt(Wr):te(t)?nt(Nt,null,t.slice()):ji(t)?Qt(t):nt(ss,null,String(t))}function Qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:tr(t)}function qo(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),qo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Ou(e)?e._ctx=et:i===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:et},n=32):(e=String(e),r&64?(n=16,e=[Wu(e)]):n=8);t.children=e,t.shapeFlag|=n}function Dp(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Lo([e.class,r.class]));else if(i==="style")e.style=xo([e.style,r.style]);else if(Yi(i)){const o=e[i],a=r[i];a&&o!==a&&!(te(o)&&o.includes(a))&&(e[i]=o?[].concat(o,a):a)}else i!==""&&(e[i]=r[i])}return e}function yt(t,e,n,r=null){At(t,e,7,[n,r])}const xp=Ru();let Lp=0;function Mp(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||xp,o={uid:Lp++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new od(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nu(r,i),emitsOptions:Hu(r,i),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:r.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Ip.bind(null,o),t.ce&&t.ce(o),o}let Fe=null,Fi,po;{const t=ts(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),o=>{i.length>1?i.forEach(a=>a(o)):i[0](o)}};Fi=e("__VUE_INSTANCE_SETTERS__",n=>Fe=n),po=e("__VUE_SSR_SETTERS__",n=>Gr=n)}const ti=t=>{const e=Fe;return Fi(t),t.scope.on(),()=>{t.scope.off(),Fi(e)}},yc=()=>{Fe&&Fe.scope.off(),Fi(null)};function Ku(t){return t.vnode.shapeFlag&4}let Gr=!1;function Up(t,e=!1,n=!1){e&&po(e);const{props:r,children:i}=t.vnode,o=Ku(t);lp(t,r,o,e),dp(t,i,n);const a=o?jp(t,e):void 0;return e&&po(!1),a}function jp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,tp);const{setup:r}=n;if(r){un();const i=t.setupContext=r.length>1?$p(t):null,o=ti(t),a=ei(r,t,0,[t.props,i]),l=Hl(a);if(hn(),o(),(l||t.sp)&&!Nr(t)&&wu(t),l){if(a.then(yc,yc),e)return a.then(u=>{Ec(t,u,e)}).catch(u=>{ns(u,t,0)});t.asyncDep=a}else Ec(t,a,e)}else Gu(t,e)}function Ec(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=fu(e)),Gu(t,n)}let wc;function Gu(t,e,n){const r=t.type;if(!t.render){if(!e&&wc&&!r.render){const i=r.template||Go(t).template;if(i){const{isCustomElement:o,compilerOptions:a}=t.appContext.config,{delimiters:l,compilerOptions:u}=r,d=Pe(Pe({isCustomElement:o,delimiters:l},a),u);r.render=wc(i,d)}}t.render=r.render||It}{const i=ti(t);un();try{np(t)}finally{hn(),i()}}}const Fp={get(t,e){return je(t,"get",""),t[e]}};function $p(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Fp),slots:t.slots,emit:t.emit,expose:e}}function cs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(fu(Ad(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Dr)return Dr[n](t)},has(e,n){return n in e||n in Dr}})):t.proxy}function Hp(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function Vp(t){return ne(t)&&"__vccOpts"in t}const ht=(t,e)=>Nd(t,e,Gr);function zu(t,e,n){const r=arguments.length;return r===2?Te(e)&&!te(e)?ji(e)?nt(t,null,[e]):nt(t,e):nt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ji(n)&&(n=[n]),nt(t,e,n))}const Bp="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let go;const bc=typeof window<"u"&&window.trustedTypes;if(bc)try{go=bc.createPolicy("vue",{createHTML:t=>t})}catch{}const qu=go?t=>go.createHTML(t):t=>t,Wp="http://www.w3.org/2000/svg",Kp="http://www.w3.org/1998/Math/MathML",kt=typeof document<"u"?document:null,Ic=kt&&kt.createElement("template"),Gp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?kt.createElementNS(Wp,t):e==="mathml"?kt.createElementNS(Kp,t):n?kt.createElement(t,{is:n}):kt.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>kt.createTextNode(t),createComment:t=>kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,o){const a=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{Ic.innerHTML=qu(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Ic.content;if(r==="svg"||r==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zp=Symbol("_vtc");function qp(t,e,n){const r=t[zp];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Tc=Symbol("_vod"),Jp=Symbol("_vsh"),Xp=Symbol(""),Yp=/(^|;)\s*display\s*:/;function Qp(t,e,n){const r=t.style,i=Re(n);let o=!1;if(n&&!i){if(e)if(Re(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Pi(r,l,"")}else for(const a in e)n[a]==null&&Pi(r,a,"");for(const a in n)a==="display"&&(o=!0),Pi(r,a,n[a])}else if(i){if(e!==n){const a=r[Xp];a&&(n+=";"+a),r.cssText=n,o=Yp.test(n)}}else e&&t.removeAttribute("style");Tc in t&&(t[Tc]=o?r.display:"",t[Jp]&&(r.display="none"))}const Sc=/\s*!important$/;function Pi(t,e,n){if(te(n))n.forEach(r=>Pi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Zp(t,e);Sc.test(n)?t.setProperty(Cn(r),n.replace(Sc,""),"important"):t[r]=n}}const Ac=["Webkit","Moz","ms"],Hs={};function Zp(t,e){const n=Hs[e];if(n)return n;let r=ct(e);if(r!=="filter"&&r in t)return Hs[e]=r;r=es(r);for(let i=0;i<Ac.length;i++){const o=Ac[i]+r;if(o in t)return Hs[e]=o}return e}const Rc="http://www.w3.org/1999/xlink";function Cc(t,e,n,r,i,o=sd(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Rc,e.slice(6,e.length)):t.setAttributeNS(Rc,e,n):n==null||o&&!Kl(n)?t.removeAttribute(e):t.setAttribute(e,o?"":ln(n)?String(n):n)}function Pc(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?qu(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Kl(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(i||e)}function Vn(t,e,n,r){t.addEventListener(e,n,r)}function eg(t,e,n,r){t.removeEventListener(e,n,r)}const Oc=Symbol("_vei");function tg(t,e,n,r,i=null){const o=t[Oc]||(t[Oc]={}),a=o[e];if(r&&a)a.value=r;else{const[l,u]=ng(e);if(r){const d=o[e]=sg(r,i);Vn(t,l,d,u)}else a&&(eg(t,l,a,u),o[e]=void 0)}}const kc=/(?:Once|Passive|Capture)$/;function ng(t){let e;if(kc.test(t)){e={};let r;for(;r=t.match(kc);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cn(t.slice(2)),e]}let Vs=0;const rg=Promise.resolve(),ig=()=>Vs||(rg.then(()=>Vs=0),Vs=Date.now());function sg(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;At(og(r,n.value),e,5,[r])};return n.value=t,n.attached=ig(),n}function og(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Nc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ag=(t,e,n,r,i,o)=>{const a=i==="svg";e==="class"?qp(t,r,a):e==="style"?Qp(t,n,r):Yi(e)?ko(e)||tg(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cg(t,e,r,a))?(Pc(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Cc(t,e,r,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Re(r))?Pc(t,ct(e),r,o,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Cc(t,e,r,a))};function cg(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Nc(e)&&ne(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Nc(e)&&Re(n)?!1:e in t}const Dc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>Ai(e,n):e};function lg(t){t.target.composing=!0}function xc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Bs=Symbol("_assign"),Lr={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[Bs]=Dc(i);const o=r||i.props&&i.props.type==="number";Vn(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),o&&(l=no(l)),t[Bs](l)}),n&&Vn(t,"change",()=>{t.value=t.value.trim()}),e||(Vn(t,"compositionstart",lg),Vn(t,"compositionend",xc),Vn(t,"change",xc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:i,number:o}},a){if(t[Bs]=Dc(a),t.composing)return;const l=(o||t.type==="number")&&!/^0\d/.test(t.value)?no(t.value):t.value,u=e??"";l!==u&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||i&&t.value.trim()===u)||(t.value=u))}},ug=["ctrl","shift","alt","meta"],hg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ug.some(n=>t[`${n}Key`]&&!e.includes(n))},Ju=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...o)=>{for(let a=0;a<e.length;a++){const l=hg[e[a]];if(l&&l(i,e))return}return t(i,...o)})},fg=Pe({patchProp:ag},Gp);let Lc;function dg(){return Lc||(Lc=gp(fg))}const pg=(...t)=>{const e=dg().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=mg(r);if(!i)return;const o=e._component;!ne(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=n(i,!1,gg(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function gg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function mg(t){return Re(t)?document.querySelector(t):t}const ls=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},vg={name:"App"};function _g(t,e,n,r,i,o){const a=Su("router-view");return os(),as("div",null,[nt(a)])}const yg=ls(vg,[["render",_g]]);function Eg(){return Xu().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Xu(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const wg=typeof Proxy=="function",bg="devtools-plugin:setup",Ig="plugin:settings:set";let Fn,mo;function Tg(){var t;return Fn!==void 0||(typeof window<"u"&&window.performance?(Fn=!0,mo=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(Fn=!0,mo=globalThis.perf_hooks.performance):Fn=!1),Fn}function Sg(){return Tg()?mo.now():Date.now()}class Ag{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const a in e.settings){const l=e.settings[a];r[a]=l.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let o=Object.assign({},r);try{const a=localStorage.getItem(i),l=JSON.parse(a);Object.assign(o,l)}catch{}this.fallbacks={getSettings(){return o},setSettings(a){try{localStorage.setItem(i,JSON.stringify(a))}catch{}o=a},now(){return Sg()}},n&&n.on(Ig,(a,l)=>{a===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(a,l)=>this.target?this.target.on[l]:(...u)=>{this.onQueue.push({method:l,args:u})}}),this.proxiedTarget=new Proxy({},{get:(a,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...u)=>(this.targetQueue.push({method:l,args:u,resolve:()=>{}}),this.fallbacks[l](...u)):(...u)=>new Promise(d=>{this.targetQueue.push({method:l,args:u,resolve:d})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Rg(t,e){const n=t,r=Xu(),i=Eg(),o=wg&&n.enableEarlyProxy;if(i&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!o))i.emit(bg,t,e);else{const a=o?new Ag(n,i):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:a}),a&&e(a.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Cg="store";function or(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Yu(t){return t!==null&&typeof t=="object"}function Pg(t){return t&&typeof t.then=="function"}function Og(t,e){return function(){return t(e)}}function Qu(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Zu(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;us(t,n,[],t._modules.root,!0),Jo(t,n,e)}function Jo(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={};or(i,function(a,l){o[l]=Og(a,t),Object.defineProperty(t.getters,l,{get:function(){return o[l]()},enumerable:!0})}),t._state=Zr({data:e}),t.strict&&Lg(t),r&&n&&t._withCommit(function(){r.data=null})}function us(t,e,n,r,i){var o=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a],t._modulesNamespaceMap[a]=r),!o&&!i){var l=Xo(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){l[u]=r.state})}var d=r.context=kg(t,a,n);r.forEachMutation(function(p,m){var w=a+m;Ng(t,w,p,d)}),r.forEachAction(function(p,m){var w=p.root?m:a+m,S=p.handler||p;Dg(t,w,S,d)}),r.forEachGetter(function(p,m){var w=a+m;xg(t,w,p,d)}),r.forEachChild(function(p,m){us(t,e,n.concat(m),p,i)})}function kg(t,e,n){var r=e==="",i={dispatch:r?t.dispatch:function(o,a,l){var u=$i(o,a,l),d=u.payload,p=u.options,m=u.type;return(!p||!p.root)&&(m=e+m),t.dispatch(m,d)},commit:r?t.commit:function(o,a,l){var u=$i(o,a,l),d=u.payload,p=u.options,m=u.type;(!p||!p.root)&&(m=e+m),t.commit(m,d,p)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return eh(t,e)}},state:{get:function(){return Xo(t.state,n)}}}),i}function eh(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Ng(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(a){n.call(t,r.state,a)})}function Dg(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(a){var l=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},a);return Pg(l)||(l=Promise.resolve(l)),t._devtoolHook?l.catch(function(u){throw t._devtoolHook.emit("vuex:error",u),u}):l})}function xg(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(o){return n(r.state,r.getters,o.state,o.getters)})}function Lg(t){Xn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Xo(t,e){return e.reduce(function(n,r){return n[r]},t)}function $i(t,e,n){return Yu(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Mg="vuex bindings",Mc="vuex:mutations",Ws="vuex:actions",$n="vuex",Ug=0;function jg(t,e){Rg({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Mg]},function(n){n.addTimelineLayer({id:Mc,label:"Vuex Mutations",color:Uc}),n.addTimelineLayer({id:Ws,label:"Vuex Actions",color:Uc}),n.addInspector({id:$n,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===$n)if(r.filter){var i=[];ih(i,e._modules.root,r.filter,""),r.rootNodes=i}else r.rootNodes=[rh(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===$n){var i=r.nodeId;eh(e,i),r.state=Hg(Bg(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===$n){var i=r.nodeId,o=r.path;i!=="root"&&(o=i.split("/").filter(Boolean).concat(o)),e._withCommit(function(){r.set(e._state.data,o,r.state.value)})}}),e.subscribe(function(r,i){var o={};r.payload&&(o.payload=r.payload),o.state=i,n.notifyComponentUpdate(),n.sendInspectorTree($n),n.sendInspectorState($n),n.addTimelineEvent({layerId:Mc,event:{time:Date.now(),title:r.type,data:o}})}),e.subscribeAction({before:function(r,i){var o={};r.payload&&(o.payload=r.payload),r._id=Ug++,r._time=Date.now(),o.state=i,n.addTimelineEvent({layerId:Ws,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:o}})},after:function(r,i){var o={},a=Date.now()-r._time;o.duration={_custom:{type:"duration",display:a+"ms",tooltip:"Action duration",value:a}},r.payload&&(o.payload=r.payload),o.state=i,n.addTimelineEvent({layerId:Ws,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:o}})}})})}var Uc=8702998,Fg=6710886,$g=16777215,th={label:"namespaced",textColor:$g,backgroundColor:Fg};function nh(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function rh(t,e){return{id:e||"root",label:nh(e),tags:t.namespaced?[th]:[],children:Object.keys(t._children).map(function(n){return rh(t._children[n],e+n+"/")})}}function ih(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[th]:[]}),Object.keys(e._children).forEach(function(i){ih(t,e._children[i],n,r+i+"/")})}function Hg(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map(function(a){return{key:a,editable:!0,value:t.state[a]}})};if(r.length){var o=Vg(e);i.getters=Object.keys(o).map(function(a){return{key:a.endsWith("/")?nh(a):a,editable:!1,value:vo(function(){return o[a]})}})}return i}function Vg(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var i=e,o=r.pop();r.forEach(function(a){i[a]||(i[a]={_custom:{value:{},display:a,tooltip:"Module",abstract:!0}}),i=i[a]._custom.value}),i[o]=vo(function(){return t[n]})}else e[n]=vo(function(){return t[n]})}),e}function Bg(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,i,o){var a=r[i];if(!a)throw new Error('Missing module "'+i+'" for path "'+e+'".');return o===n.length-1?a:a._children},e==="root"?t:t.root._children)}function vo(t){try{return t()}catch(e){return e}}var vt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},sh={namespaced:{configurable:!0}};sh.namespaced.get=function(){return!!this._rawModule.namespaced};vt.prototype.addChild=function(e,n){this._children[e]=n};vt.prototype.removeChild=function(e){delete this._children[e]};vt.prototype.getChild=function(e){return this._children[e]};vt.prototype.hasChild=function(e){return e in this._children};vt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};vt.prototype.forEachChild=function(e){or(this._children,e)};vt.prototype.forEachGetter=function(e){this._rawModule.getters&&or(this._rawModule.getters,e)};vt.prototype.forEachAction=function(e){this._rawModule.actions&&or(this._rawModule.actions,e)};vt.prototype.forEachMutation=function(e){this._rawModule.mutations&&or(this._rawModule.mutations,e)};Object.defineProperties(vt.prototype,sh);var Pn=function(e){this.register([],e,!1)};Pn.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Pn.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};Pn.prototype.update=function(e){oh([],this.root,e)};Pn.prototype.register=function(e,n,r){var i=this;r===void 0&&(r=!0);var o=new vt(n,r);if(e.length===0)this.root=o;else{var a=this.get(e.slice(0,-1));a.addChild(e[e.length-1],o)}n.modules&&or(n.modules,function(l,u){i.register(e.concat(u),l,r)})};Pn.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],i=n.getChild(r);i&&i.runtime&&n.removeChild(r)};Pn.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function oh(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;oh(t.concat(r),e.getChild(r),n.modules[r])}}function Wg(t){return new Xe(t)}var Xe=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var i=e.strict;i===void 0&&(i=!1);var o=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Pn(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var a=this,l=this,u=l.dispatch,d=l.commit;this.dispatch=function(w,S){return u.call(a,w,S)},this.commit=function(w,S,D){return d.call(a,w,S,D)},this.strict=i;var p=this._modules.root.state;us(this,p,[],this._modules.root),Jo(this,p),r.forEach(function(m){return m(n)})},Yo={state:{configurable:!0}};Xe.prototype.install=function(e,n){e.provide(n||Cg,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&jg(e,this)};Yo.state.get=function(){return this._state.data};Yo.state.set=function(t){};Xe.prototype.commit=function(e,n,r){var i=this,o=$i(e,n,r),a=o.type,l=o.payload,u={type:a,payload:l},d=this._mutations[a];d&&(this._withCommit(function(){d.forEach(function(m){m(l)})}),this._subscribers.slice().forEach(function(p){return p(u,i.state)}))};Xe.prototype.dispatch=function(e,n){var r=this,i=$i(e,n),o=i.type,a=i.payload,l={type:o,payload:a},u=this._actions[o];if(u){try{this._actionSubscribers.slice().filter(function(p){return p.before}).forEach(function(p){return p.before(l,r.state)})}catch{}var d=u.length>1?Promise.all(u.map(function(p){return p(a)})):u[0](a);return new Promise(function(p,m){d.then(function(w){try{r._actionSubscribers.filter(function(S){return S.after}).forEach(function(S){return S.after(l,r.state)})}catch{}p(w)},function(w){try{r._actionSubscribers.filter(function(S){return S.error}).forEach(function(S){return S.error(l,r.state,w)})}catch{}m(w)})})}};Xe.prototype.subscribe=function(e,n){return Qu(e,this._subscribers,n)};Xe.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Qu(r,this._actionSubscribers,n)};Xe.prototype.watch=function(e,n,r){var i=this;return Xn(function(){return e(i.state,i.getters)},n,Object.assign({},r))};Xe.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Xe.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),us(this,this.state,e,this._modules.get(e),r.preserveState),Jo(this,this.state)};Xe.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Xo(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Zu(this)};Xe.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Xe.prototype.hotUpdate=function(e){this._modules.update(e),Zu(this,!0)};Xe.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Xe.prototype,Yo);var Kg=lh(function(t,e){var n={};return ch(e).forEach(function(r){var i=r.key,o=r.val;n[i]=function(){var l=this.$store.state,u=this.$store.getters;if(t){var d=uh(this.$store,"mapState",t);if(!d)return;l=d.context.state,u=d.context.getters}return typeof o=="function"?o.call(this,l,u):l[o]},n[i].vuex=!0}),n}),ah=lh(function(t,e){var n={};return ch(e).forEach(function(r){var i=r.key,o=r.val;n[i]=function(){for(var l=[],u=arguments.length;u--;)l[u]=arguments[u];var d=this.$store.dispatch;if(t){var p=uh(this.$store,"mapActions",t);if(!p)return;d=p.context.dispatch}return typeof o=="function"?o.apply(this,[d].concat(l)):d.apply(this.$store,[o].concat(l))}}),n});function ch(t){return Gg(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function Gg(t){return Array.isArray(t)||Yu(t)}function lh(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function uh(t,e,n){var r=t._modulesNamespaceMap[n];return r}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Bn=typeof document<"u";function hh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&hh(t.default)}const me=Object.assign;function Ks(t,e){const n={};for(const r in e){const i=e[r];n[r]=gt(i)?i.map(t):t(i)}return n}const Mr=()=>{},gt=Array.isArray,fh=/#/g,qg=/&/g,Jg=/\//g,Xg=/=/g,Yg=/\?/g,dh=/\+/g,Qg=/%5B/g,Zg=/%5D/g,ph=/%5E/g,em=/%60/g,gh=/%7B/g,tm=/%7C/g,mh=/%7D/g,nm=/%20/g;function Qo(t){return encodeURI(""+t).replace(tm,"|").replace(Qg,"[").replace(Zg,"]")}function rm(t){return Qo(t).replace(gh,"{").replace(mh,"}").replace(ph,"^")}function _o(t){return Qo(t).replace(dh,"%2B").replace(nm,"+").replace(fh,"%23").replace(qg,"%26").replace(em,"`").replace(gh,"{").replace(mh,"}").replace(ph,"^")}function im(t){return _o(t).replace(Xg,"%3D")}function sm(t){return Qo(t).replace(fh,"%23").replace(Yg,"%3F")}function om(t){return t==null?"":sm(t).replace(Jg,"%2F")}function zr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const am=/\/$/,cm=t=>t.replace(am,"");function Gs(t,e,n="/"){let r,i={},o="",a="";const l=e.indexOf("#");let u=e.indexOf("?");return l<u&&l>=0&&(u=-1),u>-1&&(r=e.slice(0,u),o=e.slice(u+1,l>-1?l:e.length),i=t(o)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=fm(r??e,n),{fullPath:r+(o&&"?")+o+a,path:r,query:i,hash:zr(a)}}function lm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function um(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&nr(e.matched[r],n.matched[i])&&vh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function nr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hm(t[n],e[n]))return!1;return!0}function hm(t,e){return gt(t)?Fc(t,e):gt(e)?Fc(e,t):t===e}function Fc(t,e){return gt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function fm(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let o=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(a).join("/")}const Jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var qr;(function(t){t.pop="pop",t.push="push"})(qr||(qr={}));var Ur;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ur||(Ur={}));function dm(t){if(!t)if(Bn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cm(t)}const pm=/^[^#]+#/;function gm(t,e){return t.replace(pm,"#")+e}function mm(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const hs=()=>({left:window.scrollX,top:window.scrollY});function vm(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=mm(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function $c(t,e){return(history.state?history.state.position-e:-1)+t}const yo=new Map;function _m(t,e){yo.set(t,e)}function ym(t){const e=yo.get(t);return yo.delete(t),e}let Em=()=>location.protocol+"//"+location.host;function _h(t,e){const{pathname:n,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){let l=i.includes(t.slice(o))?t.slice(o).length:1,u=i.slice(l);return u[0]!=="/"&&(u="/"+u),jc(u,"")}return jc(n,t)+r+i}function wm(t,e,n,r){let i=[],o=[],a=null;const l=({state:w})=>{const S=_h(t,location),D=n.value,U=e.value;let z=0;if(w){if(n.value=S,e.value=w,a&&a===D){a=null;return}z=U?w.position-U.position:0}else r(S);i.forEach(X=>{X(n.value,D,{delta:z,type:qr.pop,direction:z?z>0?Ur.forward:Ur.back:Ur.unknown})})};function u(){a=n.value}function d(w){i.push(w);const S=()=>{const D=i.indexOf(w);D>-1&&i.splice(D,1)};return o.push(S),S}function p(){const{history:w}=window;w.state&&w.replaceState(me({},w.state,{scroll:hs()}),"")}function m(){for(const w of o)w();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:u,listen:d,destroy:m}}function Hc(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?hs():null}}function bm(t){const{history:e,location:n}=window,r={value:_h(t,n)},i={value:e.state};i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(u,d,p){const m=t.indexOf("#"),w=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+u:Em()+t+u;try{e[p?"replaceState":"pushState"](d,"",w),i.value=d}catch(S){console.error(S),n[p?"replace":"assign"](w)}}function a(u,d){const p=me({},e.state,Hc(i.value.back,u,i.value.forward,!0),d,{position:i.value.position});o(u,p,!0),r.value=u}function l(u,d){const p=me({},i.value,e.state,{forward:u,scroll:hs()});o(p.current,p,!0);const m=me({},Hc(r.value,u,null),{position:p.position+1},d);o(u,m,!1),r.value=u}return{location:r,state:i,push:l,replace:a}}function Im(t){t=dm(t);const e=bm(t),n=wm(t,e.state,e.location,e.replace);function r(o,a=!0){a||n.pauseListeners(),history.go(o)}const i=me({location:"",base:t,go:r,createHref:gm.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Tm(t){return typeof t=="string"||t&&typeof t=="object"}function yh(t){return typeof t=="string"||typeof t=="symbol"}const Eh=Symbol("");var Vc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Vc||(Vc={}));function rr(t,e){return me(new Error,{type:t,[Eh]:!0},e)}function Ot(t,e){return t instanceof Error&&Eh in t&&(e==null||!!(t.type&e))}const Bc="[^/]+?",Sm={sensitive:!1,strict:!1,start:!0,end:!0},Am=/[.+*?^${}()[\]/\\]/g;function Rm(t,e){const n=me({},Sm,e),r=[];let i=n.start?"^":"";const o=[];for(const d of t){const p=d.length?[]:[90];n.strict&&!d.length&&(i+="/");for(let m=0;m<d.length;m++){const w=d[m];let S=40+(n.sensitive?.25:0);if(w.type===0)m||(i+="/"),i+=w.value.replace(Am,"\\$&"),S+=40;else if(w.type===1){const{value:D,repeatable:U,optional:z,regexp:X}=w;o.push({name:D,repeatable:U,optional:z});const W=X||Bc;if(W!==Bc){S+=10;try{new RegExp(`(${W})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${D}" (${W}): `+B.message)}}let G=U?`((?:${W})(?:/(?:${W}))*)`:`(${W})`;m||(G=z&&d.length<2?`(?:/${G})`:"/"+G),z&&(G+="?"),i+=G,S+=20,z&&(S+=-8),U&&(S+=-20),W===".*"&&(S+=-50)}p.push(S)}r.push(p)}if(n.strict&&n.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function l(d){const p=d.match(a),m={};if(!p)return null;for(let w=1;w<p.length;w++){const S=p[w]||"",D=o[w-1];m[D.name]=S&&D.repeatable?S.split("/"):S}return m}function u(d){let p="",m=!1;for(const w of t){(!m||!p.endsWith("/"))&&(p+="/"),m=!1;for(const S of w)if(S.type===0)p+=S.value;else if(S.type===1){const{value:D,repeatable:U,optional:z}=S,X=D in d?d[D]:"";if(gt(X)&&!U)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const W=gt(X)?X.join("/"):X;if(!W)if(z)w.length<2&&(p.endsWith("/")?p=p.slice(0,-1):m=!0);else throw new Error(`Missing required param "${D}"`);p+=W}}return p||"/"}return{re:a,score:r,keys:o,parse:l,stringify:u}}function Cm(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function wh(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const o=Cm(r[n],i[n]);if(o)return o;n++}if(Math.abs(i.length-r.length)===1){if(Wc(r))return 1;if(Wc(i))return-1}return i.length-r.length}function Wc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Pm={type:0,value:""},Om=/[a-zA-Z0-9_]/;function km(t){if(!t)return[[]];if(t==="/")return[[Pm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(S){throw new Error(`ERR (${n})/"${d}": ${S}`)}let n=0,r=n;const i=[];let o;function a(){o&&i.push(o),o=[]}let l=0,u,d="",p="";function m(){d&&(n===0?o.push({type:0,value:d}):n===1||n===2||n===3?(o.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:d,regexp:p,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),d="")}function w(){d+=u}for(;l<t.length;){if(u=t[l++],u==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:u==="/"?(d&&m(),a()):u===":"?(m(),n=1):w();break;case 4:w(),n=r;break;case 1:u==="("?n=2:Om.test(u)?w():(m(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--);break;case 2:u===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+u:n=3:p+=u;break;case 3:m(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--,p="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${d}"`),m(),a(),i}function Nm(t,e,n){const r=Rm(km(t.path),n),i=me(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Dm(t,e){const n=[],r=new Map;e=qc({strict:!1,end:!0,sensitive:!1},e);function i(m){return r.get(m)}function o(m,w,S){const D=!S,U=Gc(m);U.aliasOf=S&&S.record;const z=qc(e,m),X=[U];if("alias"in m){const B=typeof m.alias=="string"?[m.alias]:m.alias;for(const ie of B)X.push(Gc(me({},U,{components:S?S.record.components:U.components,path:ie,aliasOf:S?S.record:U})))}let W,G;for(const B of X){const{path:ie}=B;if(w&&ie[0]!=="/"){const ce=w.record.path,b=ce[ce.length-1]==="/"?"":"/";B.path=w.record.path+(ie&&b+ie)}if(W=Nm(B,w,z),S?S.alias.push(W):(G=G||W,G!==W&&G.alias.push(W),D&&m.name&&!zc(W)&&a(m.name)),bh(W)&&u(W),U.children){const ce=U.children;for(let b=0;b<ce.length;b++)o(ce[b],W,S&&S.children[b])}S=S||W}return G?()=>{a(G)}:Mr}function a(m){if(yh(m)){const w=r.get(m);w&&(r.delete(m),n.splice(n.indexOf(w),1),w.children.forEach(a),w.alias.forEach(a))}else{const w=n.indexOf(m);w>-1&&(n.splice(w,1),m.record.name&&r.delete(m.record.name),m.children.forEach(a),m.alias.forEach(a))}}function l(){return n}function u(m){const w=Mm(m,n);n.splice(w,0,m),m.record.name&&!zc(m)&&r.set(m.record.name,m)}function d(m,w){let S,D={},U,z;if("name"in m&&m.name){if(S=r.get(m.name),!S)throw rr(1,{location:m});z=S.record.name,D=me(Kc(w.params,S.keys.filter(G=>!G.optional).concat(S.parent?S.parent.keys.filter(G=>G.optional):[]).map(G=>G.name)),m.params&&Kc(m.params,S.keys.map(G=>G.name))),U=S.stringify(D)}else if(m.path!=null)U=m.path,S=n.find(G=>G.re.test(U)),S&&(D=S.parse(U),z=S.record.name);else{if(S=w.name?r.get(w.name):n.find(G=>G.re.test(w.path)),!S)throw rr(1,{location:m,currentLocation:w});z=S.record.name,D=me({},w.params,m.params),U=S.stringify(D)}const X=[];let W=S;for(;W;)X.unshift(W.record),W=W.parent;return{name:z,path:U,params:D,matched:X,meta:Lm(X)}}t.forEach(m=>o(m));function p(){n.length=0,r.clear()}return{addRoute:o,resolve:d,removeRoute:a,clearRoutes:p,getRoutes:l,getRecordMatcher:i}}function Kc(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Gc(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:xm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function xm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function zc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Lm(t){return t.reduce((e,n)=>me(e,n.meta),{})}function qc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Mm(t,e){let n=0,r=e.length;for(;n!==r;){const o=n+r>>1;wh(t,e[o])<0?r=o:n=o+1}const i=Um(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function Um(t){let e=t;for(;e=e.parent;)if(bh(e)&&wh(t,e)===0)return e}function bh({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function jm(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const o=r[i].replace(dh," "),a=o.indexOf("="),l=zr(a<0?o:o.slice(0,a)),u=a<0?null:zr(o.slice(a+1));if(l in e){let d=e[l];gt(d)||(d=e[l]=[d]),d.push(u)}else e[l]=u}return e}function Jc(t){let e="";for(let n in t){const r=t[n];if(n=im(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(gt(r)?r.map(o=>o&&_o(o)):[r&&_o(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function Fm(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=gt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const $m=Symbol(""),Xc=Symbol(""),Zo=Symbol(""),Ih=Symbol(""),Eo=Symbol("");function Ir(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Zt(t,e,n,r,i,o=a=>a()){const a=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,u)=>{const d=w=>{w===!1?u(rr(4,{from:n,to:e})):w instanceof Error?u(w):Tm(w)?u(rr(2,{from:e,to:w})):(a&&r.enterCallbacks[i]===a&&typeof w=="function"&&a.push(w),l())},p=o(()=>t.call(r&&r.instances[i],e,n,d));let m=Promise.resolve(p);t.length<3&&(m=m.then(d)),m.catch(w=>u(w))})}function zs(t,e,n,r,i=o=>o()){const o=[];for(const a of t)for(const l in a.components){let u=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(hh(u)){const p=(u.__vccOpts||u)[e];p&&o.push(Zt(p,n,r,a,l,i))}else{let d=u();o.push(()=>d.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const m=zg(p)?p.default:p;a.mods[l]=p,a.components[l]=m;const S=(m.__vccOpts||m)[e];return S&&Zt(S,n,r,a,l,i)()}))}}return o}function Yc(t){const e=jt(Zo),n=jt(Ih),r=ht(()=>{const u=zn(t.to);return e.resolve(u)}),i=ht(()=>{const{matched:u}=r.value,{length:d}=u,p=u[d-1],m=n.matched;if(!p||!m.length)return-1;const w=m.findIndex(nr.bind(null,p));if(w>-1)return w;const S=Qc(u[d-2]);return d>1&&Qc(p)===S&&m[m.length-1].path!==S?m.findIndex(nr.bind(null,u[d-2])):w}),o=ht(()=>i.value>-1&&Wm(n.params,r.value.params)),a=ht(()=>i.value>-1&&i.value===n.matched.length-1&&vh(n.params,r.value.params));function l(u={}){return Bm(u)?e[zn(t.replace)?"replace":"push"](zn(t.to)).catch(Mr):Promise.resolve()}return{route:r,href:ht(()=>r.value.href),isActive:o,isExactActive:a,navigate:l}}const Hm=Eu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yc,setup(t,{slots:e}){const n=Zr(Yc(t)),{options:r}=jt(Zo),i=ht(()=>({[Zc(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Zc(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:zu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),Vm=Hm;function Bm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Wm(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!gt(i)||i.length!==r.length||r.some((o,a)=>o!==i[a]))return!1}return!0}function Qc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zc=(t,e,n)=>t??e??n,Km=Eu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=jt(Eo),i=ht(()=>t.route||r.value),o=jt(Xc,0),a=ht(()=>{let d=zn(o);const{matched:p}=i.value;let m;for(;(m=p[d])&&!m.components;)d++;return d}),l=ht(()=>i.value.matched[a.value]);Ri(Xc,ht(()=>a.value+1)),Ri($m,l),Ri(Eo,i);const u=Rd();return Xn(()=>[u.value,l.value,t.name],([d,p,m],[w,S,D])=>{p&&(p.instances[m]=d,S&&S!==p&&d&&d===w&&(p.leaveGuards.size||(p.leaveGuards=S.leaveGuards),p.updateGuards.size||(p.updateGuards=S.updateGuards))),d&&p&&(!S||!nr(p,S)||!w)&&(p.enterCallbacks[m]||[]).forEach(U=>U(d))},{flush:"post"}),()=>{const d=i.value,p=t.name,m=l.value,w=m&&m.components[p];if(!w)return el(n.default,{Component:w,route:d});const S=m.props[p],D=S?S===!0?d.params:typeof S=="function"?S(d):S:null,z=zu(w,me({},D,e,{onVnodeUnmounted:X=>{X.component.isUnmounted&&(m.instances[p]=null)},ref:u}));return el(n.default,{Component:z,route:d})||z}}});function el(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Gm=Km;function zm(t){const e=Dm(t.routes,t),n=t.parseQuery||jm,r=t.stringifyQuery||Jc,i=t.history,o=Ir(),a=Ir(),l=Ir(),u=Cd(Jt);let d=Jt;Bn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Ks.bind(null,k=>""+k),m=Ks.bind(null,om),w=Ks.bind(null,zr);function S(k,K){let H,q;return yh(k)?(H=e.getRecordMatcher(k),q=K):q=k,e.addRoute(q,H)}function D(k){const K=e.getRecordMatcher(k);K&&e.removeRoute(K)}function U(){return e.getRoutes().map(k=>k.record)}function z(k){return!!e.getRecordMatcher(k)}function X(k,K){if(K=me({},K||u.value),typeof k=="string"){const _=Gs(n,k,K.path),C=e.resolve({path:_.path},K),N=i.createHref(_.fullPath);return me(_,C,{params:w(C.params),hash:zr(_.hash),redirectedFrom:void 0,href:N})}let H;if(k.path!=null)H=me({},k,{path:Gs(n,k.path,K.path).path});else{const _=me({},k.params);for(const C in _)_[C]==null&&delete _[C];H=me({},k,{params:m(_)}),K.params=m(K.params)}const q=e.resolve(H,K),oe=k.hash||"";q.params=p(w(q.params));const ve=lm(r,me({},k,{hash:rm(oe),path:q.path})),g=i.createHref(ve);return me({fullPath:ve,hash:oe,query:r===Jc?Fm(k.query):k.query||{}},q,{redirectedFrom:void 0,href:g})}function W(k){return typeof k=="string"?Gs(n,k,u.value.path):me({},k)}function G(k,K){if(d!==k)return rr(8,{from:K,to:k})}function B(k){return b(k)}function ie(k){return B(me(W(k),{replace:!0}))}function ce(k){const K=k.matched[k.matched.length-1];if(K&&K.redirect){const{redirect:H}=K;let q=typeof H=="function"?H(k):H;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=W(q):{path:q},q.params={}),me({query:k.query,hash:k.hash,params:q.path!=null?{}:k.params},q)}}function b(k,K){const H=d=X(k),q=u.value,oe=k.state,ve=k.force,g=k.replace===!0,_=ce(H);if(_)return b(me(W(_),{state:typeof _=="object"?me({},oe,_.state):oe,force:ve,replace:g}),K||H);const C=H;C.redirectedFrom=K;let N;return!ve&&um(r,q,H)&&(N=rr(16,{to:C,from:q}),it(q,q,!0,!1)),(N?Promise.resolve(N):I(C,q)).catch(O=>Ot(O)?Ot(O,2)?O:lt(O):re(O,C,q)).then(O=>{if(O){if(Ot(O,2))return b(me({replace:g},W(O.to),{state:typeof O.to=="object"?me({},oe,O.to.state):oe,force:ve}),K||C)}else O=A(C,q,!0,g,oe);return T(C,q,O),O})}function v(k,K){const H=G(k,K);return H?Promise.reject(H):Promise.resolve()}function E(k){const K=Wt.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(k):k()}function I(k,K){let H;const[q,oe,ve]=qm(k,K);H=zs(q.reverse(),"beforeRouteLeave",k,K);for(const _ of q)_.leaveGuards.forEach(C=>{H.push(Zt(C,k,K))});const g=v.bind(null,k,K);return H.push(g),Je(H).then(()=>{H=[];for(const _ of o.list())H.push(Zt(_,k,K));return H.push(g),Je(H)}).then(()=>{H=zs(oe,"beforeRouteUpdate",k,K);for(const _ of oe)_.updateGuards.forEach(C=>{H.push(Zt(C,k,K))});return H.push(g),Je(H)}).then(()=>{H=[];for(const _ of ve)if(_.beforeEnter)if(gt(_.beforeEnter))for(const C of _.beforeEnter)H.push(Zt(C,k,K));else H.push(Zt(_.beforeEnter,k,K));return H.push(g),Je(H)}).then(()=>(k.matched.forEach(_=>_.enterCallbacks={}),H=zs(ve,"beforeRouteEnter",k,K,E),H.push(g),Je(H))).then(()=>{H=[];for(const _ of a.list())H.push(Zt(_,k,K));return H.push(g),Je(H)}).catch(_=>Ot(_,8)?_:Promise.reject(_))}function T(k,K,H){l.list().forEach(q=>E(()=>q(k,K,H)))}function A(k,K,H,q,oe){const ve=G(k,K);if(ve)return ve;const g=K===Jt,_=Bn?history.state:{};H&&(q||g?i.replace(k.fullPath,me({scroll:g&&_&&_.scroll},oe)):i.push(k.fullPath,oe)),u.value=k,it(k,K,H,g),lt()}let y;function He(){y||(y=i.listen((k,K,H)=>{if(!_t.listening)return;const q=X(k),oe=ce(q);if(oe){b(me(oe,{replace:!0}),q).catch(Mr);return}d=q;const ve=u.value;Bn&&_m($c(ve.fullPath,H.delta),hs()),I(q,ve).catch(g=>Ot(g,12)?g:Ot(g,2)?(b(g.to,q).then(_=>{Ot(_,20)&&!H.delta&&H.type===qr.pop&&i.go(-1,!1)}).catch(Mr),Promise.reject()):(H.delta&&i.go(-H.delta,!1),re(g,q,ve))).then(g=>{g=g||A(q,ve,!1),g&&(H.delta&&!Ot(g,8)?i.go(-H.delta,!1):H.type===qr.pop&&Ot(g,20)&&i.go(-1,!1)),T(q,ve,g)}).catch(Mr)}))}let rt=Ir(),Ae=Ir(),se;function re(k,K,H){lt(k);const q=Ae.list();return q.length?q.forEach(oe=>oe(k,K,H)):console.error(k),Promise.reject(k)}function Ye(){return se&&u.value!==Jt?Promise.resolve():new Promise((k,K)=>{rt.add([k,K])})}function lt(k){return se||(se=!k,He(),rt.list().forEach(([K,H])=>k?H(k):K()),rt.reset()),k}function it(k,K,H,q){const{scrollBehavior:oe}=t;if(!Bn||!oe)return Promise.resolve();const ve=!H&&ym($c(k.fullPath,0))||(q||!H)&&history.state&&history.state.scroll||null;return pu().then(()=>oe(k,K,ve)).then(g=>g&&vm(g)).catch(g=>re(g,k,K))}const be=k=>i.go(k);let Ie;const Wt=new Set,_t={currentRoute:u,listening:!0,addRoute:S,removeRoute:D,clearRoutes:e.clearRoutes,hasRoute:z,getRoutes:U,resolve:X,options:t,push:B,replace:ie,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:o.add,beforeResolve:a.add,afterEach:l.add,onError:Ae.add,isReady:Ye,install(k){const K=this;k.component("RouterLink",Vm),k.component("RouterView",Gm),k.config.globalProperties.$router=K,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>zn(u)}),Bn&&!Ie&&u.value===Jt&&(Ie=!0,B(i.location).catch(oe=>{}));const H={};for(const oe in Jt)Object.defineProperty(H,oe,{get:()=>u.value[oe],enumerable:!0});k.provide(Zo,K),k.provide(Ih,lu(H)),k.provide(Eo,u);const q=k.unmount;Wt.add(k),k.unmount=function(){Wt.delete(k),Wt.size<1&&(d=Jt,y&&y(),y=null,u.value=Jt,Ie=!1,se=!1),q()}}};function Je(k){return k.reduce((K,H)=>K.then(()=>E(H)),Promise.resolve())}return _t}function qm(t,e){const n=[],r=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const l=e.matched[a];l&&(t.matched.find(d=>nr(d,l))?r.push(l):n.push(l));const u=t.matched[a];u&&(e.matched.find(d=>nr(d,u))||i.push(u))}return[n,r,i]}const Jm={computed:{...Kg(["user"])},methods:{logout(){this.$store.dispatch("logout"),this.$router.push("/login")}}};function Xm(t,e,n,r,i,o){return os(),as("div",null,[fe("h2",null,"Bienvenido a la página de inicio, "+zl(t.user.email),1),fe("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=(...a)=>o.logout&&o.logout(...a))},"Cerrar sesión")])}const Ym=ls(Jm,[["render",Xm]]),Qm={data(){return{email:"",password:""}},methods:{...ah(["login"]),async onLogin(){const t={email:this.email,password:this.password};await this.login(t)?this.$router.push("/home"):alert("Usuario o contraseña incorrectos")},clicRegister(){this.$router.push("/register")}}},Zm={class:"d-flex justify-content-center align-items-center min-vh-100"},ev={class:"card p-4 w-100",style:{"max-width":"400px"}},tv={class:"form-group"},nv={class:"form-group mt-3"},rv={class:"d-flex justify-content-end mt-3"};function iv(t,e,n,r,i,o){return os(),as("div",Zm,[fe("div",ev,[e[5]||(e[5]=fe("h3",{class:"text-center"},"Iniciar sesión",-1)),fe("form",{onSubmit:e[3]||(e[3]=Ju((...a)=>o.onLogin&&o.onLogin(...a),["prevent"]))},[fe("div",tv,[kr(fe("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=a=>i.email=a),class:"form-control",placeholder:"Correo electrónico",required:""},null,512),[[Lr,i.email]])]),fe("div",nv,[kr(fe("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=a=>i.password=a),class:"form-control",placeholder:"Contraseña",required:""},null,512),[[Lr,i.password]])]),fe("div",rv,[fe("a",{href:"#",onClick:e[2]||(e[2]=(...a)=>o.clicRegister&&o.clicRegister(...a)),class:"text-primary"},"Registro")]),e[4]||(e[4]=fe("div",{class:"text-center"},[fe("button",{type:"submit",class:"btn btn-primary btn-block mt-4"},"Iniciar sesión")],-1))],32),e[6]||(e[6]=fe("p",{class:"text-muted mt-3 text-center"},"Bienvenido a nuestro sistema.",-1))])])}const sv=ls(Qm,[["render",iv]]),ov={data(){return{name:"",email:"",password:""}},methods:{...ah(["register"]),onRegister(){const t={name:this.name,email:this.email,password:this.password};this.register(t)}}},av={class:"d-flex justify-content-center align-items-center min-vh-100"},cv={class:"card p-4 w-100",style:{"max-width":"400px"}},lv={class:"form-group"},uv={class:"form-group mt-3"},hv={class:"form-group mt-3"},fv={class:"d-flex justify-content-end mt-3"};function dv(t,e,n,r,i,o){const a=Su("router-link");return os(),as("div",av,[fe("div",cv,[e[9]||(e[9]=fe("h3",{class:"text-center"},"Regístrate",-1)),fe("form",{onSubmit:e[3]||(e[3]=Ju((...l)=>o.onRegister&&o.onRegister(...l),["prevent"]))},[fe("div",lv,[e[4]||(e[4]=fe("label",{for:"name"},"Nombre:",-1)),kr(fe("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=l=>i.name=l),class:"form-control",required:""},null,512),[[Lr,i.name]])]),fe("div",uv,[e[5]||(e[5]=fe("label",{for:"email"},"Email:",-1)),kr(fe("input",{type:"email",id:"email","onUpdate:modelValue":e[1]||(e[1]=l=>i.email=l),class:"form-control",required:""},null,512),[[Lr,i.email]])]),fe("div",hv,[e[6]||(e[6]=fe("label",{for:"password"},"Contraseña:",-1)),kr(fe("input",{type:"password",id:"password","onUpdate:modelValue":e[2]||(e[2]=l=>i.password=l),class:"form-control",required:""},null,512),[[Lr,i.password]])]),fe("div",fv,[nt(a,{to:"/login",class:"text-primary"},{default:yu(()=>e[7]||(e[7]=[Wu("Login")])),_:1})]),e[8]||(e[8]=fe("div",{class:"d-flex justify-content-end mt-4"},[fe("button",{type:"submit",class:"btn btn-primary"},"Registrarse")],-1))],32)])])}const pv=ls(ov,[["render",dv]]),gv=[{path:"/login",name:"Login",component:sv},{path:"/register",name:"Register",component:pv},{path:"/home",name:"Home",component:Ym,meta:{requiresAuth:!0}},{path:"/:catchAll(.*)",redirect:"/login"}],Th=zm({history:Im(),routes:gv});Th.beforeEach((t,e,n)=>{const r=If.getters.isAuthenticated;t.matched.some(o=>o.meta.requiresAuth)&&!r?(console.log("no autenticado"),n("/login")):(console.log("siguiente pagina"),n())});var tl={};/**
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
 */const Sh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,p=o>>2,m=(o&3)<<4|l>>4;let w=(l&15)<<2|d>>6,S=d&63;u||(S=64,a||(w=64)),r.push(n[p],n[m],n[w],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||d==null||m==null)throw new vv;const w=o<<2|l>>4;if(r.push(w),d!==64){const S=l<<4&240|d>>2;if(r.push(S),m!==64){const D=d<<6&192|m;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _v=function(t){const e=Sh(t);return Ah.encodeByteArray(e,!0)},Hi=function(t){return _v(t).replace(/\./g,"")},Rh=function(t){try{return Ah.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ev=()=>yv().__FIREBASE_DEFAULTS__,wv=()=>{if(typeof process>"u"||typeof tl>"u")return;const t=tl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rh(t[1]);return e&&JSON.parse(e)},ea=()=>{try{return Ev()||wv()||bv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ch=t=>{var e,n;return(n=(e=ea())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Iv=t=>{const e=Ch(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ph=()=>{var t;return(t=ea())===null||t===void 0?void 0:t.config},Oh=t=>{var e;return(e=ea())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Tv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Sv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Hi(JSON.stringify(n)),Hi(JSON.stringify(a)),""].join(".")}/**
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
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Av(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function Rv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ov(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kv(){try{return typeof indexedDB=="object"}catch{return!1}}function Nv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const Dv="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Dv,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?xv(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Bt(i,l,r)}}function xv(t,e){return t.replace(Lv,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Lv=/\{\$([^}]+)}/g;function Mv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],a=e[i];if(nl(o)&&nl(a)){if(!Vi(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function nl(t){return t!==null&&typeof t=="object"}/**
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
 */function ri(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Sr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Ar(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Uv(t,e){const n=new jv(t,e);return n.subscribe.bind(n)}class jv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Fv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qs),i.error===void 0&&(i.error=qs),i.complete===void 0&&(i.complete=qs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qs(){}/**
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
 */function fn(t){return t&&t._delegate?t._delegate:t}class Sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wn="[DEFAULT]";/**
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
 */class $v{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Tv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vv(e))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wn){return this.instances.has(e)}getOptions(e=wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wn){return this.component?this.component.multipleInstances?e:wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hv(t){return t===wn?void 0:t}function Vv(t){return t.instantiationMode==="EAGER"}/**
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
 */class Bv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $v(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Wv={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Kv=ge.INFO,Gv={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},zv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Gv[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ta{constructor(e){this.name=e,this._logLevel=Kv,this._logHandler=zv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const qv=(t,e)=>e.some(n=>t instanceof n);let rl,il;function Jv(){return rl||(rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xv(){return il||(il=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kh=new WeakMap,wo=new WeakMap,Nh=new WeakMap,Js=new WeakMap,na=new WeakMap;function Yv(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(on(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&kh.set(n,t)}).catch(()=>{}),na.set(e,t),e}function Qv(t){if(wo.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});wo.set(t,e)}let bo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zv(t){bo=t(bo)}function e_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xs(this),e,...n);return Nh.set(r,e.sort?e.sort():[e]),on(r)}:Xv().includes(t)?function(...e){return t.apply(Xs(this),e),on(kh.get(this))}:function(...e){return on(t.apply(Xs(this),e))}}function t_(t){return typeof t=="function"?e_(t):(t instanceof IDBTransaction&&Qv(t),qv(t,Jv())?new Proxy(t,bo):t)}function on(t){if(t instanceof IDBRequest)return Yv(t);if(Js.has(t))return Js.get(t);const e=t_(t);return e!==t&&(Js.set(t,e),na.set(e,t)),e}const Xs=t=>na.get(t);function n_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(t,e),l=on(a);return r&&a.addEventListener("upgradeneeded",u=>{r(on(a.result),u.oldVersion,u.newVersion,on(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const r_=["get","getKey","getAll","getAllKeys","count"],i_=["put","add","delete","clear"],Ys=new Map;function sl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ys.get(e))return Ys.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=i_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||r_.includes(n)))return;const o=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Ys.set(e,o),o}Zv(t=>({...t,get:(e,n,r)=>sl(e,n)||t.get(e,n,r),has:(e,n)=>!!sl(e,n)||t.has(e,n)}));/**
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
 */class s_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(o_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function o_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Io="@firebase/app",ol="0.10.15";/**
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
 */const $t=new ta("@firebase/app"),a_="@firebase/app-compat",c_="@firebase/analytics-compat",l_="@firebase/analytics",u_="@firebase/app-check-compat",h_="@firebase/app-check",f_="@firebase/auth",d_="@firebase/auth-compat",p_="@firebase/database",g_="@firebase/data-connect",m_="@firebase/database-compat",v_="@firebase/functions",__="@firebase/functions-compat",y_="@firebase/installations",E_="@firebase/installations-compat",w_="@firebase/messaging",b_="@firebase/messaging-compat",I_="@firebase/performance",T_="@firebase/performance-compat",S_="@firebase/remote-config",A_="@firebase/remote-config-compat",R_="@firebase/storage",C_="@firebase/storage-compat",P_="@firebase/firestore",O_="@firebase/vertexai",k_="@firebase/firestore-compat",N_="firebase",D_="11.0.1";/**
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
 */const To="[DEFAULT]",x_={[Io]:"fire-core",[a_]:"fire-core-compat",[l_]:"fire-analytics",[c_]:"fire-analytics-compat",[h_]:"fire-app-check",[u_]:"fire-app-check-compat",[f_]:"fire-auth",[d_]:"fire-auth-compat",[p_]:"fire-rtdb",[g_]:"fire-data-connect",[m_]:"fire-rtdb-compat",[v_]:"fire-fn",[__]:"fire-fn-compat",[y_]:"fire-iid",[E_]:"fire-iid-compat",[w_]:"fire-fcm",[b_]:"fire-fcm-compat",[I_]:"fire-perf",[T_]:"fire-perf-compat",[S_]:"fire-rc",[A_]:"fire-rc-compat",[R_]:"fire-gcs",[C_]:"fire-gcs-compat",[P_]:"fire-fst",[k_]:"fire-fst-compat",[O_]:"fire-vertex","fire-js":"fire-js",[N_]:"fire-js-all"};/**
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
 */const Bi=new Map,L_=new Map,So=new Map;function al(t,e){try{t.container.addComponent(e)}catch(n){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ir(t){const e=t.name;if(So.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;So.set(e,t);for(const n of Bi.values())al(n,t);for(const n of L_.values())al(n,t);return!0}function ra(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bt(t){return t.settings!==void 0}/**
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
 */const M_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new ni("app","Firebase",M_);/**
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
 */class U_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
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
 */const ar=D_;function Dh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:To,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(n||(n=Ph()),!n)throw an.create("no-options");const o=Bi.get(i);if(o){if(Vi(n,o.options)&&Vi(r,o.config))return o;throw an.create("duplicate-app",{appName:i})}const a=new Bv(i);for(const u of So.values())a.addComponent(u);const l=new U_(n,r,a);return Bi.set(i,l),l}function xh(t=To){const e=Bi.get(t);if(!e&&t===To&&Ph())return Dh();if(!e)throw an.create("no-app",{appName:t});return e}function cn(t,e,n){var r;let i=(r=x_[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(l.join(" "));return}ir(new Sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const j_="firebase-heartbeat-database",F_=1,Jr="firebase-heartbeat-store";let Qs=null;function Lh(){return Qs||(Qs=n_(j_,F_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Jr)}catch(n){console.warn(n)}}}}).catch(t=>{throw an.create("idb-open",{originalErrorMessage:t.message})})),Qs}async function $_(t){try{const n=(await Lh()).transaction(Jr),r=await n.objectStore(Jr).get(Mh(t));return await n.done,r}catch(e){if(e instanceof Bt)$t.warn(e.message);else{const n=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(n.message)}}}async function cl(t,e){try{const r=(await Lh()).transaction(Jr,"readwrite");await r.objectStore(Jr).put(e,Mh(t)),await r.done}catch(n){if(n instanceof Bt)$t.warn(n.message);else{const r=an.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(r.message)}}}function Mh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const H_=1024,V_=30*24*60*60*1e3;class B_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new K_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ll();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=V_}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ll(),{heartbeatsToSend:r,unsentEntries:i}=W_(this._heartbeatsCache.heartbeats),o=Hi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return $t.warn(n),""}}}function ll(){return new Date().toISOString().substring(0,10)}function W_(t,e=H_){const n=[];let r=t.slice();for(const i of t){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),ul(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ul(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class K_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kv()?Nv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ul(t){return Hi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function G_(t){ir(new Sn("platform-logger",e=>new s_(e),"PRIVATE")),ir(new Sn("heartbeat",e=>new B_(e),"PRIVATE")),cn(Io,ol,t),cn(Io,ol,"esm2017"),cn("fire-js","")}G_("");var hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Uh;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function E(){}E.prototype=v.prototype,b.D=v.prototype,b.prototype=new E,b.prototype.constructor=b,b.C=function(I,T,A){for(var y=Array(arguments.length-2),He=2;He<arguments.length;He++)y[He-2]=arguments[He];return v.prototype[T].apply(I,y)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,v,E){E||(E=0);var I=Array(16);if(typeof v=="string")for(var T=0;16>T;++T)I[T]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(T=0;16>T;++T)I[T]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=b.g[0],E=b.g[1],T=b.g[2];var A=b.g[3],y=v+(A^E&(T^A))+I[0]+3614090360&4294967295;v=E+(y<<7&4294967295|y>>>25),y=A+(T^v&(E^T))+I[1]+3905402710&4294967295,A=v+(y<<12&4294967295|y>>>20),y=T+(E^A&(v^E))+I[2]+606105819&4294967295,T=A+(y<<17&4294967295|y>>>15),y=E+(v^T&(A^v))+I[3]+3250441966&4294967295,E=T+(y<<22&4294967295|y>>>10),y=v+(A^E&(T^A))+I[4]+4118548399&4294967295,v=E+(y<<7&4294967295|y>>>25),y=A+(T^v&(E^T))+I[5]+1200080426&4294967295,A=v+(y<<12&4294967295|y>>>20),y=T+(E^A&(v^E))+I[6]+2821735955&4294967295,T=A+(y<<17&4294967295|y>>>15),y=E+(v^T&(A^v))+I[7]+4249261313&4294967295,E=T+(y<<22&4294967295|y>>>10),y=v+(A^E&(T^A))+I[8]+1770035416&4294967295,v=E+(y<<7&4294967295|y>>>25),y=A+(T^v&(E^T))+I[9]+2336552879&4294967295,A=v+(y<<12&4294967295|y>>>20),y=T+(E^A&(v^E))+I[10]+4294925233&4294967295,T=A+(y<<17&4294967295|y>>>15),y=E+(v^T&(A^v))+I[11]+2304563134&4294967295,E=T+(y<<22&4294967295|y>>>10),y=v+(A^E&(T^A))+I[12]+1804603682&4294967295,v=E+(y<<7&4294967295|y>>>25),y=A+(T^v&(E^T))+I[13]+4254626195&4294967295,A=v+(y<<12&4294967295|y>>>20),y=T+(E^A&(v^E))+I[14]+2792965006&4294967295,T=A+(y<<17&4294967295|y>>>15),y=E+(v^T&(A^v))+I[15]+1236535329&4294967295,E=T+(y<<22&4294967295|y>>>10),y=v+(T^A&(E^T))+I[1]+4129170786&4294967295,v=E+(y<<5&4294967295|y>>>27),y=A+(E^T&(v^E))+I[6]+3225465664&4294967295,A=v+(y<<9&4294967295|y>>>23),y=T+(v^E&(A^v))+I[11]+643717713&4294967295,T=A+(y<<14&4294967295|y>>>18),y=E+(A^v&(T^A))+I[0]+3921069994&4294967295,E=T+(y<<20&4294967295|y>>>12),y=v+(T^A&(E^T))+I[5]+3593408605&4294967295,v=E+(y<<5&4294967295|y>>>27),y=A+(E^T&(v^E))+I[10]+38016083&4294967295,A=v+(y<<9&4294967295|y>>>23),y=T+(v^E&(A^v))+I[15]+3634488961&4294967295,T=A+(y<<14&4294967295|y>>>18),y=E+(A^v&(T^A))+I[4]+3889429448&4294967295,E=T+(y<<20&4294967295|y>>>12),y=v+(T^A&(E^T))+I[9]+568446438&4294967295,v=E+(y<<5&4294967295|y>>>27),y=A+(E^T&(v^E))+I[14]+3275163606&4294967295,A=v+(y<<9&4294967295|y>>>23),y=T+(v^E&(A^v))+I[3]+4107603335&4294967295,T=A+(y<<14&4294967295|y>>>18),y=E+(A^v&(T^A))+I[8]+1163531501&4294967295,E=T+(y<<20&4294967295|y>>>12),y=v+(T^A&(E^T))+I[13]+2850285829&4294967295,v=E+(y<<5&4294967295|y>>>27),y=A+(E^T&(v^E))+I[2]+4243563512&4294967295,A=v+(y<<9&4294967295|y>>>23),y=T+(v^E&(A^v))+I[7]+1735328473&4294967295,T=A+(y<<14&4294967295|y>>>18),y=E+(A^v&(T^A))+I[12]+2368359562&4294967295,E=T+(y<<20&4294967295|y>>>12),y=v+(E^T^A)+I[5]+4294588738&4294967295,v=E+(y<<4&4294967295|y>>>28),y=A+(v^E^T)+I[8]+2272392833&4294967295,A=v+(y<<11&4294967295|y>>>21),y=T+(A^v^E)+I[11]+1839030562&4294967295,T=A+(y<<16&4294967295|y>>>16),y=E+(T^A^v)+I[14]+4259657740&4294967295,E=T+(y<<23&4294967295|y>>>9),y=v+(E^T^A)+I[1]+2763975236&4294967295,v=E+(y<<4&4294967295|y>>>28),y=A+(v^E^T)+I[4]+1272893353&4294967295,A=v+(y<<11&4294967295|y>>>21),y=T+(A^v^E)+I[7]+4139469664&4294967295,T=A+(y<<16&4294967295|y>>>16),y=E+(T^A^v)+I[10]+3200236656&4294967295,E=T+(y<<23&4294967295|y>>>9),y=v+(E^T^A)+I[13]+681279174&4294967295,v=E+(y<<4&4294967295|y>>>28),y=A+(v^E^T)+I[0]+3936430074&4294967295,A=v+(y<<11&4294967295|y>>>21),y=T+(A^v^E)+I[3]+3572445317&4294967295,T=A+(y<<16&4294967295|y>>>16),y=E+(T^A^v)+I[6]+76029189&4294967295,E=T+(y<<23&4294967295|y>>>9),y=v+(E^T^A)+I[9]+3654602809&4294967295,v=E+(y<<4&4294967295|y>>>28),y=A+(v^E^T)+I[12]+3873151461&4294967295,A=v+(y<<11&4294967295|y>>>21),y=T+(A^v^E)+I[15]+530742520&4294967295,T=A+(y<<16&4294967295|y>>>16),y=E+(T^A^v)+I[2]+3299628645&4294967295,E=T+(y<<23&4294967295|y>>>9),y=v+(T^(E|~A))+I[0]+4096336452&4294967295,v=E+(y<<6&4294967295|y>>>26),y=A+(E^(v|~T))+I[7]+1126891415&4294967295,A=v+(y<<10&4294967295|y>>>22),y=T+(v^(A|~E))+I[14]+2878612391&4294967295,T=A+(y<<15&4294967295|y>>>17),y=E+(A^(T|~v))+I[5]+4237533241&4294967295,E=T+(y<<21&4294967295|y>>>11),y=v+(T^(E|~A))+I[12]+1700485571&4294967295,v=E+(y<<6&4294967295|y>>>26),y=A+(E^(v|~T))+I[3]+2399980690&4294967295,A=v+(y<<10&4294967295|y>>>22),y=T+(v^(A|~E))+I[10]+4293915773&4294967295,T=A+(y<<15&4294967295|y>>>17),y=E+(A^(T|~v))+I[1]+2240044497&4294967295,E=T+(y<<21&4294967295|y>>>11),y=v+(T^(E|~A))+I[8]+1873313359&4294967295,v=E+(y<<6&4294967295|y>>>26),y=A+(E^(v|~T))+I[15]+4264355552&4294967295,A=v+(y<<10&4294967295|y>>>22),y=T+(v^(A|~E))+I[6]+2734768916&4294967295,T=A+(y<<15&4294967295|y>>>17),y=E+(A^(T|~v))+I[13]+1309151649&4294967295,E=T+(y<<21&4294967295|y>>>11),y=v+(T^(E|~A))+I[4]+4149444226&4294967295,v=E+(y<<6&4294967295|y>>>26),y=A+(E^(v|~T))+I[11]+3174756917&4294967295,A=v+(y<<10&4294967295|y>>>22),y=T+(v^(A|~E))+I[2]+718787259&4294967295,T=A+(y<<15&4294967295|y>>>17),y=E+(A^(T|~v))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var E=v-this.blockSize,I=this.B,T=this.h,A=0;A<v;){if(T==0)for(;A<=E;)i(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<v;)if(I[T++]=b.charCodeAt(A++),T==this.blockSize){i(this,I),T=0;break}}else for(;A<v;)if(I[T++]=b[A++],T==this.blockSize){i(this,I),T=0;break}}this.h=T,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var E=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=E&255,E/=256;for(this.u(b),b=Array(16),v=E=0;4>v;++v)for(var I=0;32>I;I+=8)b[E++]=this.g[v]>>>I&255;return b};function o(b,v){var E=l;return Object.prototype.hasOwnProperty.call(E,b)?E[b]:E[b]=v(b)}function a(b,v){this.h=v;for(var E=[],I=!0,T=b.length-1;0<=T;T--){var A=b[T]|0;I&&A==v||(E[T]=A,I=!1)}this.g=E}var l={};function u(b){return-128<=b&&128>b?o(b,function(v){return new a([v|0],0>v?-1:0)}):new a([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return m;if(0>b)return z(d(-b));for(var v=[],E=1,I=0;b>=E;I++)v[I]=b/E|0,E*=4294967296;return new a(v,0)}function p(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return z(p(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=d(Math.pow(v,8)),I=m,T=0;T<b.length;T+=8){var A=Math.min(8,b.length-T),y=parseInt(b.substring(T,T+A),v);8>A?(A=d(Math.pow(v,A)),I=I.j(A).add(d(y))):(I=I.j(E),I=I.add(d(y)))}return I}var m=u(0),w=u(1),S=u(16777216);t=a.prototype,t.m=function(){if(U(this))return-z(this).m();for(var b=0,v=1,E=0;E<this.g.length;E++){var I=this.i(E);b+=(0<=I?I:4294967296+I)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(D(this))return"0";if(U(this))return"-"+z(this).toString(b);for(var v=d(Math.pow(b,6)),E=this,I="";;){var T=B(E,v).g;E=X(E,T.j(v));var A=((0<E.g.length?E.g[0]:E.h)>>>0).toString(b);if(E=T,D(E))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function D(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function U(b){return b.h==-1}t.l=function(b){return b=X(this,b),U(b)?-1:D(b)?0:1};function z(b){for(var v=b.g.length,E=[],I=0;I<v;I++)E[I]=~b.g[I];return new a(E,~b.h).add(w)}t.abs=function(){return U(this)?z(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),E=[],I=0,T=0;T<=v;T++){var A=I+(this.i(T)&65535)+(b.i(T)&65535),y=(A>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);I=y>>>16,A&=65535,y&=65535,E[T]=y<<16|A}return new a(E,E[E.length-1]&-2147483648?-1:0)};function X(b,v){return b.add(z(v))}t.j=function(b){if(D(this)||D(b))return m;if(U(this))return U(b)?z(this).j(z(b)):z(z(this).j(b));if(U(b))return z(this.j(z(b)));if(0>this.l(S)&&0>b.l(S))return d(this.m()*b.m());for(var v=this.g.length+b.g.length,E=[],I=0;I<2*v;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var T=0;T<b.g.length;T++){var A=this.i(I)>>>16,y=this.i(I)&65535,He=b.i(T)>>>16,rt=b.i(T)&65535;E[2*I+2*T]+=y*rt,W(E,2*I+2*T),E[2*I+2*T+1]+=A*rt,W(E,2*I+2*T+1),E[2*I+2*T+1]+=y*He,W(E,2*I+2*T+1),E[2*I+2*T+2]+=A*He,W(E,2*I+2*T+2)}for(I=0;I<v;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=v;I<2*v;I++)E[I]=0;return new a(E,0)};function W(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function G(b,v){this.g=b,this.h=v}function B(b,v){if(D(v))throw Error("division by zero");if(D(b))return new G(m,m);if(U(b))return v=B(z(b),v),new G(z(v.g),z(v.h));if(U(v))return v=B(b,z(v)),new G(z(v.g),v.h);if(30<b.g.length){if(U(b)||U(v))throw Error("slowDivide_ only works with positive integers.");for(var E=w,I=v;0>=I.l(b);)E=ie(E),I=ie(I);var T=ce(E,1),A=ce(I,1);for(I=ce(I,2),E=ce(E,2);!D(I);){var y=A.add(I);0>=y.l(b)&&(T=T.add(E),A=y),I=ce(I,1),E=ce(E,1)}return v=X(b,T.j(v)),new G(T,v)}for(T=m;0<=b.l(v);){for(E=Math.max(1,Math.floor(b.m()/v.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=d(E),y=A.j(v);U(y)||0<y.l(b);)E-=I,A=d(E),y=A.j(v);D(A)&&(A=w),T=T.add(A),b=X(b,y)}return new G(T,b)}t.A=function(b){return B(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)&b.i(I);return new a(E,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)|b.i(I);return new a(E,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)^b.i(I);return new a(E,this.h^b.h)};function ie(b){for(var v=b.g.length+1,E=[],I=0;I<v;I++)E[I]=b.i(I)<<1|b.i(I-1)>>>31;return new a(E,b.h)}function ce(b,v){var E=v>>5;v%=32;for(var I=b.g.length-E,T=[],A=0;A<I;A++)T[A]=0<v?b.i(A+E)>>>v|b.i(A+E+1)<<32-v:b.i(A+E);return new a(T,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Uh=a}).apply(typeof hl<"u"?hl:typeof self<"u"?self:typeof window<"u"?window:{});var Ti=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,h){return s==Array.prototype||s==Object.prototype||(s[c]=h.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ti=="object"&&Ti];for(var c=0;c<s.length;++c){var h=s[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(s,c){if(c)e:{var h=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var R=s[f];if(!(R in h))break e;h=h[R]}s=s[s.length-1],f=h[s],c=c(f),c!=f&&c!=null&&e(h,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var h=0,f=!1,R={next:function(){if(!f&&h<s.length){var P=h++;return{value:c(P,s[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,h){return s.call.apply(s.bind,arguments)}function m(s,c,h){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,f),s.apply(c,R)}}return function(){return s.apply(c,arguments)}}function w(s,c,h){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,w.apply(null,arguments)}function S(s,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function D(s,c){function h(){}h.prototype=c.prototype,s.aa=c.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(f,R,P){for(var F=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)F[_e-2]=arguments[_e];return c.prototype[R].apply(f,F)}}function U(s){const c=s.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=s[f];return h}return[]}function z(s,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const R=s.length||0,P=f.length||0;s.length=R+P;for(let F=0;F<P;F++)s[R+F]=f[F]}else s.push(f)}}class X{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function W(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function B(s){return B[" "](s),s}B[" "]=function(){};var ie=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ce(s,c,h){for(const f in s)c.call(h,s[f],f,s)}function b(s,c){for(const h in s)c.call(void 0,s[h],h,s)}function v(s){const c={};for(const h in s)c[h]=s[h];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(s,c){let h,f;for(let R=1;R<arguments.length;R++){f=arguments[R];for(h in f)s[h]=f[h];for(let P=0;P<E.length;P++)h=E[P],Object.prototype.hasOwnProperty.call(f,h)&&(s[h]=f[h])}}function T(s){var c=1;s=s.split(":");const h=[];for(;0<c&&s.length;)h.push(s.shift()),c--;return s.length&&h.push(s.join(":")),h}function A(s){l.setTimeout(()=>{throw s},0)}function y(){var s=Ye;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class He{constructor(){this.h=this.g=null}add(c,h){const f=rt.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var rt=new X(()=>new Ae,s=>s.reset());class Ae{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let se,re=!1,Ye=new He,lt=()=>{const s=l.Promise.resolve(void 0);se=()=>{s.then(it)}};var it=()=>{for(var s;s=y();){try{s.h.call(s.g)}catch(h){A(h)}var c=rt;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}re=!1};function be(){this.s=this.s,this.C=this.C}be.prototype.s=!1,be.prototype.ma=function(){this.s||(this.s=!0,this.N())},be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Wt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return s}();function _t(s,c){if(Ie.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(ie){e:{try{B(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else h=="mouseover"?c=s.fromElement:h=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Je[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&_t.aa.h.call(this)}}D(_t,Ie);var Je={2:"touch",3:"pen",4:"mouse"};_t.prototype.h=function(){_t.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),K=0;function H(s,c,h,f,R){this.listener=s,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=R,this.key=++K,this.da=this.fa=!1}function q(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function oe(s){this.src=s,this.g={},this.h=0}oe.prototype.add=function(s,c,h,f,R){var P=s.toString();s=this.g[P],s||(s=this.g[P]=[],this.h++);var F=g(s,c,f,R);return-1<F?(c=s[F],h||(c.fa=!1)):(c=new H(c,this.src,P,!!f,R),c.fa=h,s.push(c)),c};function ve(s,c){var h=c.type;if(h in s.g){var f=s.g[h],R=Array.prototype.indexOf.call(f,c,void 0),P;(P=0<=R)&&Array.prototype.splice.call(f,R,1),P&&(q(c),s.g[h].length==0&&(delete s.g[h],s.h--))}}function g(s,c,h,f){for(var R=0;R<s.length;++R){var P=s[R];if(!P.da&&P.listener==c&&P.capture==!!h&&P.ha==f)return R}return-1}var _="closure_lm_"+(1e6*Math.random()|0),C={};function N(s,c,h,f,R){if(Array.isArray(c)){for(var P=0;P<c.length;P++)N(s,c[P],h,f,R);return null}return h=Y(h),s&&s[k]?s.K(c,h,d(f)?!!f.capture:!!f,R):O(s,c,h,!1,f,R)}function O(s,c,h,f,R,P){if(!c)throw Error("Invalid event type");var F=d(R)?!!R.capture:!!R,_e=Q(s);if(_e||(s[_]=_e=new oe(s)),h=_e.add(c,h,f,F,P),h.proxy)return h;if(f=x(),h.proxy=f,f.src=s,f.listener=h,s.addEventListener)Wt||(R=F),R===void 0&&(R=!1),s.addEventListener(c.toString(),f,R);else if(s.attachEvent)s.attachEvent(M(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function x(){function s(h){return c.call(s.src,s.listener,h)}const c=L;return s}function $(s,c,h,f,R){if(Array.isArray(c))for(var P=0;P<c.length;P++)$(s,c[P],h,f,R);else f=d(f)?!!f.capture:!!f,h=Y(h),s&&s[k]?(s=s.i,c=String(c).toString(),c in s.g&&(P=s.g[c],h=g(P,h,f,R),-1<h&&(q(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete s.g[c],s.h--)))):s&&(s=Q(s))&&(c=s.g[c.toString()],s=-1,c&&(s=g(c,h,f,R)),(h=-1<s?c[s]:null)&&j(h))}function j(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[k])ve(c.i,s);else{var h=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(h,f,s.capture):c.detachEvent?c.detachEvent(M(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Q(c))?(ve(h,s),h.h==0&&(h.src=null,c[_]=null)):q(s)}}}function M(s){return s in C?C[s]:C[s]="on"+s}function L(s,c){if(s.da)s=!0;else{c=new _t(c,this);var h=s.listener,f=s.ha||s.src;s.fa&&j(s),s=h.call(f,c)}return s}function Q(s){return s=s[_],s instanceof oe?s:null}var V="__closure_events_fn_"+(1e9*Math.random()>>>0);function Y(s){return typeof s=="function"?s:(s[V]||(s[V]=function(c){return s.handleEvent(c)}),s[V])}function J(){be.call(this),this.i=new oe(this),this.M=this,this.F=null}D(J,be),J.prototype[k]=!0,J.prototype.removeEventListener=function(s,c,h,f){$(this,s,c,h,f)};function Z(s,c){var h,f=s.F;if(f)for(h=[];f;f=f.F)h.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new Ie(c,s);else if(c instanceof Ie)c.target=c.target||s;else{var R=c;c=new Ie(f,s),I(c,R)}if(R=!0,h)for(var P=h.length-1;0<=P;P--){var F=c.g=h[P];R=he(F,f,!0,c)&&R}if(F=c.g=s,R=he(F,f,!0,c)&&R,R=he(F,f,!1,c)&&R,h)for(P=0;P<h.length;P++)F=c.g=h[P],R=he(F,f,!1,c)&&R}J.prototype.N=function(){if(J.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var h=s.g[c],f=0;f<h.length;f++)q(h[f]);delete s.g[c],s.h--}}this.F=null},J.prototype.K=function(s,c,h,f){return this.i.add(String(s),c,!1,h,f)},J.prototype.L=function(s,c,h,f){return this.i.add(String(s),c,!0,h,f)};function he(s,c,h,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,P=0;P<c.length;++P){var F=c[P];if(F&&!F.da&&F.capture==h){var _e=F.listener,ke=F.ha||F.src;F.fa&&ve(s.i,F),R=_e.call(ke,f)!==!1&&R}}return R&&!f.defaultPrevented}function le(s,c,h){if(typeof s=="function")h&&(s=w(s,h));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function xe(s){s.g=le(()=>{s.g=null,s.i&&(s.i=!1,xe(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class Ce extends be{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:xe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oe(s){be.call(this),this.h=s,this.g={}}D(Oe,be);var Le=[];function Kt(s){ce(s.g,function(c,h){this.g.hasOwnProperty(h)&&j(c)},s),s.g={}}Oe.prototype.N=function(){Oe.aa.N.call(this),Kt(this)},Oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kn=l.JSON.stringify,Ve=l.JSON.parse,st=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Nn(){}Nn.prototype.h=null;function va(s){return s.h||(s.h=s.i())}function Tf(){}var lr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ms(){Ie.call(this,"d")}D(ms,Ie);function vs(){Ie.call(this,"c")}D(vs,Ie);var Dn={},_a=null;function _s(){return _a=_a||new J}Dn.La="serverreachability";function ya(s){Ie.call(this,Dn.La,s)}D(ya,Ie);function ur(s){const c=_s();Z(c,new ya(c))}Dn.STAT_EVENT="statevent";function Ea(s,c){Ie.call(this,Dn.STAT_EVENT,s),this.stat=c}D(Ea,Ie);function Be(s){const c=_s();Z(c,new Ea(c,s))}Dn.Ma="timingevent";function wa(s,c){Ie.call(this,Dn.Ma,s),this.size=c}D(wa,Ie);function hr(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function fr(){this.g=!0}fr.prototype.xa=function(){this.g=!1};function Sf(s,c,h,f,R,P){s.info(function(){if(s.g)if(P)for(var F="",_e=P.split("&"),ke=0;ke<_e.length;ke++){var ue=_e[ke].split("=");if(1<ue.length){var Me=ue[0];ue=ue[1];var Ue=Me.split("_");F=2<=Ue.length&&Ue[1]=="type"?F+(Me+"="+ue+"&"):F+(Me+"=redacted&")}}else F=null;else F=P;return"XMLHTTP REQ ("+f+") [attempt "+R+"]: "+c+`
`+h+`
`+F})}function Af(s,c,h,f,R,P,F){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+R+"]: "+c+`
`+h+`
`+P+" "+F})}function xn(s,c,h,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Cf(s,h)+(f?" "+f:"")})}function Rf(s,c){s.info(function(){return"TIMEOUT: "+c})}fr.prototype.info=function(){};function Cf(s,c){if(!s.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var f=h[s];if(!(2>f.length)){var R=f[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var F=1;F<R.length;F++)R[F]=""}}}}return kn(h)}catch{return c}}var ys={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Es;function li(){}D(li,Nn),li.prototype.g=function(){return new XMLHttpRequest},li.prototype.i=function(){return{}},Es=new li;function Gt(s,c,h,f){this.j=s,this.i=c,this.l=h,this.R=f||1,this.U=new Oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ba}function ba(){this.i=null,this.g="",this.h=!1}var Ia={},ws={};function bs(s,c,h){s.L=1,s.v=di(Rt(c)),s.m=h,s.P=!0,Ta(s,null)}function Ta(s,c){s.F=Date.now(),ui(s),s.A=Rt(s.v);var h=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),ja(h.i,"t",f),s.C=0,h=s.j.J,s.h=new ba,s.g=nc(s.j,h?c:null,!s.m),0<s.O&&(s.M=new Ce(w(s.Y,s,s.g),s.O)),c=s.U,h=s.g,f=s.ca;var R="readystatechange";Array.isArray(R)||(R&&(Le[0]=R.toString()),R=Le);for(var P=0;P<R.length;P++){var F=N(h,R[P],f||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=s.H?v(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),ur(),Sf(s.i,s.u,s.A,s.l,s.R,s.m)}Gt.prototype.ca=function(s){s=s.target;const c=this.M;c&&Ct(s)==3?c.j():this.Y(s)},Gt.prototype.Y=function(s){try{if(s==this.g)e:{const Ue=Ct(this.g);var c=this.g.Ba();const Un=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||Ka(this.g)))){this.J||Ue!=4||c==7||(c==8||0>=Un?ur(3):ur(2)),Is(this);var h=this.g.Z();this.X=h;t:if(Sa(this)){var f=Ka(this.g);s="";var R=f.length,P=Ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),dr(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(P&&c==R-1)});f.length=0,this.h.g+=s,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=h==200,Af(this.i,this.u,this.A,this.l,this.R,Ue,h),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,ke=this.g;if((_e=ke.g?ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(_e)){var ue=_e;break t}}ue=null}if(h=ue)xn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ts(this,h);else{this.o=!1,this.s=3,Be(12),gn(this),dr(this);break e}}if(this.P){h=!0;let ut;for(;!this.J&&this.C<F.length;)if(ut=Of(this,F),ut==ws){Ue==4&&(this.s=4,Be(14),h=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==Ia){this.s=4,Be(15),xn(this.i,this.l,F,"[Invalid Chunk]"),h=!1;break}else xn(this.i,this.l,ut,null),Ts(this,ut);if(Sa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||F.length!=0||this.h.h||(this.s=1,Be(16),h=!1),this.o=this.o&&h,!h)xn(this.i,this.l,F,"[Invalid Chunked Response]"),gn(this),dr(this);else if(0<F.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Os(Me),Me.M=!0,Be(11))}}else xn(this.i,this.l,F,null),Ts(this,F);Ue==4&&gn(this),this.o&&!this.J&&(Ue==4?Qa(this.j,this):(this.o=!1,ui(this)))}else zf(this.g),h==400&&0<F.indexOf("Unknown SID")?(this.s=3,Be(12)):(this.s=0,Be(13)),gn(this),dr(this)}}}catch{}finally{}};function Sa(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Of(s,c){var h=s.C,f=c.indexOf(`
`,h);return f==-1?ws:(h=Number(c.substring(h,f)),isNaN(h)?Ia:(f+=1,f+h>c.length?ws:(c=c.slice(f,f+h),s.C=f+h,c)))}Gt.prototype.cancel=function(){this.J=!0,gn(this)};function ui(s){s.S=Date.now()+s.I,Aa(s,s.I)}function Aa(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=hr(w(s.ba,s),c)}function Is(s){s.B&&(l.clearTimeout(s.B),s.B=null)}Gt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Rf(this.i,this.A),this.L!=2&&(ur(),Be(17)),gn(this),this.s=2,dr(this)):Aa(this,this.S-s)};function dr(s){s.j.G==0||s.J||Qa(s.j,s)}function gn(s){Is(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,Kt(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function Ts(s,c){try{var h=s.j;if(h.G!=0&&(h.g==s||Ss(h.h,s))){if(!s.K&&Ss(h.h,s)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var R=f;if(R[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)yi(h),vi(h);else break e;Ps(h),Be(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=hr(w(h.Za,h),6e3));if(1>=Pa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else vn(h,11)}else if((s.K||h.g==s)&&yi(h),!W(c))for(R=h.Da.g.parse(c),c=0;c<R.length;c++){let ue=R[c];if(h.T=ue[0],ue=ue[1],h.G==2)if(ue[0]=="c"){h.K=ue[1],h.ia=ue[2];const Me=ue[3];Me!=null&&(h.la=Me,h.j.info("VER="+h.la));const Ue=ue[4];Ue!=null&&(h.Aa=Ue,h.j.info("SVER="+h.Aa));const Un=ue[5];Un!=null&&typeof Un=="number"&&0<Un&&(f=1.5*Un,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const ut=s.g;if(ut){const Ei=ut.g?ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ei){var P=f.h;P.g||Ei.indexOf("spdy")==-1&&Ei.indexOf("quic")==-1&&Ei.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(As(P,P.h),P.h=null))}if(f.D){const ks=ut.g?ut.g.getResponseHeader("X-HTTP-Session-Id"):null;ks&&(f.ya=ks,we(f.I,f.D,ks))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var F=s;if(f.qa=tc(f,f.J?f.ia:null,f.W),F.K){Oa(f.h,F);var _e=F,ke=f.L;ke&&(_e.I=ke),_e.B&&(Is(_e),ui(_e)),f.g=F}else Xa(f);0<h.i.length&&_i(h)}else ue[0]!="stop"&&ue[0]!="close"||vn(h,7);else h.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?vn(h,7):Cs(h):ue[0]!="noop"&&h.l&&h.l.ta(ue),h.v=0)}}ur(4)}catch{}}var kf=class{constructor(s,c){this.g=s,this.map=c}};function Ra(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ca(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Pa(s){return s.h?1:s.g?s.g.size:0}function Ss(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function As(s,c){s.g?s.g.add(c):s.h=c}function Oa(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Ra.prototype.cancel=function(){if(this.i=ka(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ka(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const h of s.g.values())c=c.concat(h.D);return c}return U(s.i)}function Nf(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(u(s)){for(var c=[],h=s.length,f=0;f<h;f++)c.push(s[f]);return c}c=[],h=0;for(f in s)c[h++]=s[f];return c}function Df(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(u(s)||typeof s=="string"){var c=[];s=s.length;for(var h=0;h<s;h++)c.push(h);return c}c=[],h=0;for(const f in s)c[h++]=f;return c}}}function Na(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(u(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var h=Df(s),f=Nf(s),R=f.length,P=0;P<R;P++)c.call(void 0,f[P],h&&h[P],s)}var Da=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xf(s,c){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var f=s[h].indexOf("="),R=null;if(0<=f){var P=s[h].substring(0,f);R=s[h].substring(f+1)}else P=s[h];c(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function mn(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof mn){this.h=s.h,hi(this,s.j),this.o=s.o,this.g=s.g,fi(this,s.s),this.l=s.l;var c=s.i,h=new mr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),xa(this,h),this.m=s.m}else s&&(c=String(s).match(Da))?(this.h=!1,hi(this,c[1]||"",!0),this.o=pr(c[2]||""),this.g=pr(c[3]||"",!0),fi(this,c[4]),this.l=pr(c[5]||"",!0),xa(this,c[6]||"",!0),this.m=pr(c[7]||"")):(this.h=!1,this.i=new mr(null,this.h))}mn.prototype.toString=function(){var s=[],c=this.j;c&&s.push(gr(c,La,!0),":");var h=this.g;return(h||c=="file")&&(s.push("//"),(c=this.o)&&s.push(gr(c,La,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(gr(h,h.charAt(0)=="/"?Uf:Mf,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",gr(h,Ff)),s.join("")};function Rt(s){return new mn(s)}function hi(s,c,h){s.j=h?pr(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function fi(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function xa(s,c,h){c instanceof mr?(s.i=c,$f(s.i,s.h)):(h||(c=gr(c,jf)),s.i=new mr(c,s.h))}function we(s,c,h){s.i.set(c,h)}function di(s){return we(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function pr(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function gr(s,c,h){return typeof s=="string"?(s=encodeURI(s).replace(c,Lf),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Lf(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var La=/[#\/\?@]/g,Mf=/[#\?:]/g,Uf=/[#\?]/g,jf=/[#\?@]/g,Ff=/#/g;function mr(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function zt(s){s.g||(s.g=new Map,s.h=0,s.i&&xf(s.i,function(c,h){s.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=mr.prototype,t.add=function(s,c){zt(this),this.i=null,s=Ln(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(c),this.h+=1,this};function Ma(s,c){zt(s),c=Ln(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Ua(s,c){return zt(s),c=Ln(s,c),s.g.has(c)}t.forEach=function(s,c){zt(this),this.g.forEach(function(h,f){h.forEach(function(R){s.call(c,R,f,this)},this)},this)},t.na=function(){zt(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const R=s[f];for(let P=0;P<R.length;P++)h.push(c[f])}return h},t.V=function(s){zt(this);let c=[];if(typeof s=="string")Ua(this,s)&&(c=c.concat(this.g.get(Ln(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)c=c.concat(s[h])}return c},t.set=function(s,c){return zt(this),this.i=null,s=Ln(this,s),Ua(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},t.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function ja(s,c,h){Ma(s,c),0<h.length&&(s.i=null,s.g.set(Ln(s,c),U(h)),s.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const P=encodeURIComponent(String(f)),F=this.V(f);for(f=0;f<F.length;f++){var R=P;F[f]!==""&&(R+="="+encodeURIComponent(String(F[f]))),s.push(R)}}return this.i=s.join("&")};function Ln(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function $f(s,c){c&&!s.j&&(zt(s),s.i=null,s.g.forEach(function(h,f){var R=f.toLowerCase();f!=R&&(Ma(this,f),ja(this,R,h))},s)),s.j=c}function Hf(s,c){const h=new fr;if(l.Image){const f=new Image;f.onload=S(qt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=S(qt,h,"TestLoadImage: error",!1,c,f),f.onabort=S(qt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(qt,h,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function Vf(s,c){const h=new fr,f=new AbortController,R=setTimeout(()=>{f.abort(),qt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(P=>{clearTimeout(R),P.ok?qt(h,"TestPingServer: ok",!0,c):qt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),qt(h,"TestPingServer: error",!1,c)})}function qt(s,c,h,f,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),f(h)}catch{}}function Bf(){this.g=new st}function Wf(s,c,h){const f=h||"";try{Na(s,function(R,P){let F=R;d(R)&&(F=kn(R)),c.push(f+P+"="+encodeURIComponent(F))})}catch(R){throw c.push(f+"type="+encodeURIComponent("_badmap")),R}}function pi(s){this.l=s.Ub||null,this.j=s.eb||!1}D(pi,Nn),pi.prototype.g=function(){return new gi(this.l,this.j)},pi.prototype.i=function(s){return function(){return s}}({});function gi(s,c){J.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(gi,J),t=gi.prototype,t.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,_r(this)},t.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vr(this)),this.readyState=0},t.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,_r(this)),this.g&&(this.readyState=3,_r(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fa(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fa(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}t.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?vr(this):_r(this),this.readyState==3&&Fa(this)}},t.Ra=function(s){this.g&&(this.response=this.responseText=s,vr(this))},t.Qa=function(s){this.g&&(this.response=s,vr(this))},t.ga=function(){this.g&&vr(this)};function vr(s){s.readyState=4,s.l=null,s.j=null,s.v=null,_r(s)}t.setRequestHeader=function(s,c){this.u.append(s,c)},t.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=c.next();return s.join(`\r
`)};function _r(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function $a(s){let c="";return ce(s,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Rs(s,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=$a(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):we(s,c,h))}function Se(s){J.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Se,J);var Kf=/^https?$/i,Gf=["POST","PUT"];t=Se.prototype,t.Ha=function(s){this.J=s},t.ea=function(s,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Es.g(),this.v=this.o?va(this.o):va(Es),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(P){Ha(this,P);return}if(s=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var R in f)h.set(R,f[R]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())h.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Gf,c,void 0))||f||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,F]of h)this.g.setRequestHeader(P,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wa(this),this.u=!0,this.g.send(s),this.u=!1}catch(P){Ha(this,P)}};function Ha(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,Va(s),mi(s)}function Va(s){s.A||(s.A=!0,Z(s,"complete"),Z(s,"error"))}t.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Z(this,"complete"),Z(this,"abort"),mi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mi(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ba(this):this.bb())},t.bb=function(){Ba(this)};function Ba(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Ct(s)!=4||s.Z()!=2)){if(s.u&&Ct(s)==4)le(s.Ea,0,s);else if(Z(s,"readystatechange"),Ct(s)==4){s.h=!1;try{const F=s.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=F===0){var R=String(s.D).match(Da)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),f=!Kf.test(R?R.toLowerCase():"")}h=f}if(h)Z(s,"complete"),Z(s,"success");else{s.m=6;try{var P=2<Ct(s)?s.g.statusText:""}catch{P=""}s.l=P+" ["+s.Z()+"]",Va(s)}}finally{mi(s)}}}}function mi(s,c){if(s.g){Wa(s);const h=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Z(s,"ready");try{h.onreadystatechange=f}catch{}}}function Wa(s){s.I&&(l.clearTimeout(s.I),s.I=null)}t.isActive=function(){return!!this.g};function Ct(s){return s.g?s.g.readyState:0}t.Z=function(){try{return 2<Ct(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Ve(c)}};function Ka(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function zf(s){const c={};s=(s.g&&2<=Ct(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(W(s[f]))continue;var h=T(s[f]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=c[R]||[];c[R]=P,P.push(h)}b(c,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yr(s,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||c}function Ga(s){this.Aa=0,this.i=[],this.j=new fr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yr("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yr("baseRetryDelayMs",5e3,s),this.cb=yr("retryDelaySeedMs",1e4,s),this.Wa=yr("forwardChannelMaxRetries",2,s),this.wa=yr("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ra(s&&s.concurrentRequestLimit),this.Da=new Bf,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ga.prototype,t.la=8,t.G=1,t.connect=function(s,c,h,f){Be(0),this.W=s,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=tc(this,null,this.W),_i(this)};function Cs(s){if(za(s),s.G==3){var c=s.U++,h=Rt(s.I);if(we(h,"SID",s.K),we(h,"RID",c),we(h,"TYPE","terminate"),Er(s,h),c=new Gt(s,s.j,c),c.L=2,c.v=di(Rt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=nc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ui(c)}ec(s)}function vi(s){s.g&&(Os(s),s.g.cancel(),s.g=null)}function za(s){vi(s),s.u&&(l.clearTimeout(s.u),s.u=null),yi(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function _i(s){if(!Ca(s.h)&&!s.s){s.s=!0;var c=s.Ga;se||lt(),re||(se(),re=!0),Ye.add(c,s),s.B=0}}function qf(s,c){return Pa(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=hr(w(s.Ga,s,c),Za(s,s.B)),s.B++,!0)}t.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const R=new Gt(this,this.j,s);let P=this.o;if(this.S&&(P?(P=v(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Ja(this,R,c),h=Rt(this.I),we(h,"RID",s),we(h,"CVER",22),this.D&&we(h,"X-HTTP-Session-Id",this.D),Er(this,h),P&&(this.O?c="headers="+encodeURIComponent(String($a(P)))+"&"+c:this.m&&Rs(h,this.m,P)),As(this.h,R),this.Ua&&we(h,"TYPE","init"),this.P?(we(h,"$req",c),we(h,"SID","null"),R.T=!0,bs(R,h,null)):bs(R,h,c),this.G=2}}else this.G==3&&(s?qa(this,s):this.i.length==0||Ca(this.h)||qa(this))};function qa(s,c){var h;c?h=c.l:h=s.U++;const f=Rt(s.I);we(f,"SID",s.K),we(f,"RID",h),we(f,"AID",s.T),Er(s,f),s.m&&s.o&&Rs(f,s.m,s.o),h=new Gt(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),c&&(s.i=c.D.concat(s.i)),c=Ja(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),As(s.h,h),bs(h,f,c)}function Er(s,c){s.H&&ce(s.H,function(h,f){we(c,f,h)}),s.l&&Na({},function(h,f){we(c,f,h)})}function Ja(s,c,h){h=Math.min(s.i.length,h);var f=s.l?w(s.l.Na,s.l,s):null;e:{var R=s.i;let P=-1;for(;;){const F=["count="+h];P==-1?0<h?(P=R[0].g,F.push("ofs="+P)):P=0:F.push("ofs="+P);let _e=!0;for(let ke=0;ke<h;ke++){let ue=R[ke].g;const Me=R[ke].map;if(ue-=P,0>ue)P=Math.max(0,R[ke].g-100),_e=!1;else try{Wf(Me,F,"req"+ue+"_")}catch{f&&f(Me)}}if(_e){f=F.join("&");break e}}}return s=s.i.splice(0,h),c.D=s,f}function Xa(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;se||lt(),re||(se(),re=!0),Ye.add(c,s),s.v=0}}function Ps(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=hr(w(s.Fa,s),Za(s,s.v)),s.v++,!0)}t.Fa=function(){if(this.u=null,Ya(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=hr(w(this.ab,this),s)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Be(10),vi(this),Ya(this))};function Os(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Ya(s){s.g=new Gt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=Rt(s.qa);we(c,"RID","rpc"),we(c,"SID",s.K),we(c,"AID",s.T),we(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&we(c,"TO",s.ja),we(c,"TYPE","xmlhttp"),Er(s,c),s.m&&s.o&&Rs(c,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=di(Rt(c)),h.m=null,h.P=!0,Ta(h,s)}t.Za=function(){this.C!=null&&(this.C=null,vi(this),Ps(this),Be(19))};function yi(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Qa(s,c){var h=null;if(s.g==c){yi(s),Os(s),s.g=null;var f=2}else if(Ss(s.h,c))h=c.D,Oa(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var R=s.B;f=_s(),Z(f,new wa(f,h)),_i(s)}else Xa(s);else if(R=c.s,R==3||R==0&&0<c.X||!(f==1&&qf(s,c)||f==2&&Ps(s)))switch(h&&0<h.length&&(c=s.h,c.i=c.i.concat(h)),R){case 1:vn(s,5);break;case 4:vn(s,10);break;case 3:vn(s,6);break;default:vn(s,2)}}}function Za(s,c){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*c}function vn(s,c){if(s.j.info("Error code "+c),c==2){var h=w(s.fb,s),f=s.Xa;const R=!f;f=new mn(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||hi(f,"https"),di(f),R?Hf(f.toString(),h):Vf(f.toString(),h)}else Be(2);s.G=0,s.l&&s.l.sa(c),ec(s),za(s)}t.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function ec(s){if(s.G=0,s.ka=[],s.l){const c=ka(s.h);(c.length!=0||s.i.length!=0)&&(z(s.ka,c),z(s.ka,s.i),s.h.i.length=0,U(s.i),s.i.length=0),s.l.ra()}}function tc(s,c,h){var f=h instanceof mn?Rt(h):new mn(h);if(f.g!="")c&&(f.g=c+"."+f.g),fi(f,f.s);else{var R=l.location;f=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var P=new mn(null);f&&hi(P,f),c&&(P.g=c),R&&fi(P,R),h&&(P.l=h),f=P}return h=s.D,c=s.ya,h&&c&&we(f,h,c),we(f,"VER",s.la),Er(s,f),f}function nc(s,c,h){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new Se(new pi({eb:h})):new Se(s.pa),c.Ha(s.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rc(){}t=rc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ot(s,c){J.call(this),this.g=new Ga(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!W(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!W(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Mn(this)}D(ot,J),ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ot.prototype.close=function(){Cs(this.g)},ot.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=kn(s),s=h);c.i.push(new kf(c.Ya++,s)),c.G==3&&_i(c)},ot.prototype.N=function(){this.g.l=null,delete this.j,Cs(this.g),delete this.g,ot.aa.N.call(this)};function ic(s){ms.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const h in c){s=h;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}D(ic,ms);function sc(){vs.call(this),this.status=1}D(sc,vs);function Mn(s){this.g=s}D(Mn,rc),Mn.prototype.ua=function(){Z(this.g,"a")},Mn.prototype.ta=function(s){Z(this.g,new ic(s))},Mn.prototype.sa=function(s){Z(this.g,new sc)},Mn.prototype.ra=function(){Z(this.g,"b")},ot.prototype.send=ot.prototype.o,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,ys.NO_ERROR=0,ys.TIMEOUT=8,ys.HTTP_ERROR=6,Pf.COMPLETE="complete",Tf.EventType=lr,lr.OPEN="a",lr.CLOSE="b",lr.ERROR="c",lr.MESSAGE="d",J.prototype.listen=J.prototype.K,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha}).apply(typeof Ti<"u"?Ti:typeof self<"u"?self:typeof window<"u"?window:{});const fl="@firebase/firestore";/**
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
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
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
 */let ii="11.0.0";/**
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
 */const sr=new ta("@firebase/firestore");function ft(t,...e){if(sr.logLevel<=ge.DEBUG){const n=e.map(ia);sr.debug(`Firestore (${ii}): ${t}`,...n)}}function jh(t,...e){if(sr.logLevel<=ge.ERROR){const n=e.map(ia);sr.error(`Firestore (${ii}): ${t}`,...n)}}function z_(t,...e){if(sr.logLevel<=ge.WARN){const n=e.map(ia);sr.warn(`Firestore (${ii}): ${t}`,...n)}}function ia(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Xr(t="Unexpected state"){const e=`FIRESTORE (${ii}) INTERNAL ASSERTION FAILED: `+t;throw jh(e),new Error(e)}function jr(t,e){t||Xr()}/**
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
 */const Ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class De extends Bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Fh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class q_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class J_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class X_{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){jr(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Fr,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{ft("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ft("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Fr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ft("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(jr(typeof r.accessToken=="string"),new Fh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return jr(e===null||typeof e=="string"),new Ke(e)}}class Y_{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Q_{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Y_(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Z_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ey{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){jr(this.o===void 0);const r=o=>{o.error!=null&&ft("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,ft("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{ft("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):ft("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(jr(typeof n.token=="string"),this.R=n.token,new Z_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Wi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Xr(),r===void 0?r=e.length-n:r>e.length-n&&Xr(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),a=n.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class at extends Wi{construct(e,n,r){return new at(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new De(Ne.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new at(n)}static emptyPath(){return new at([])}}/**
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
 */class bn{constructor(e){this.path=e}static fromPath(e){return new bn(at.fromString(e))}static fromName(e){return new bn(at.fromString(e).popFirst(5))}static empty(){return new bn(at.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&at.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return at.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new bn(new at(e.slice()))}}function ty(t){return t.name==="IndexedDbTransactionError"}class Ki{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ki("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ki&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class ny{constructor(e,n=null,r=[],i=[],o=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ry(t){return new ny(t)}/**
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
 */var dl,ae;(ae=dl||(dl={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Uh([4294967295,4294967295],0);function Zs(){return typeof document<"u"?document:null}/**
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
 */class iy{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&ft("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class sa{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const a=Date.now()+r,l=new sa(e,n,a,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new De(Ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var pl,gl;(gl=pl||(pl={})).ea="default",gl.Cache="cache";/**
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
 */function sy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ml=new Map;function oy(t,e,n,r){if(e===!0&&r===!0)throw new De(Ne.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vl(t){if(bn.isDocumentKey(t))throw new De(Ne.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ay(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Xr()}function cy(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new De(Ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ay(t);throw new De(Ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class _l{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new De(Ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new De(Ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new De(Ne.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new De(Ne.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new De(Ne.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oa{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _l({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new De(Ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new De(Ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _l(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new q_;switch(r.type){case"firstParty":return new Q_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new De(Ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ml.get(n);r&&(ft("ComponentProvider","Removing Datastore"),ml.delete(n),r.terminate())}(this),Promise.resolve()}}function ly(t,e,n,r={}){var i;const o=(t=cy(t,oa))._getSettings(),a=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&z_("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ke.MOCK_USER;else{l=Sv(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new De(Ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ke(d)}t._authCredentials=new J_(new Fh(l,u))}}/**
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
 */class aa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new aa(this.firestore,e,this._query)}}class fs{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fs(this.firestore,e,this._key)}}class Yn extends aa{constructor(e,n,r){super(e,n,ry(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fs(this.firestore,null,new bn(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function uy(t,e,...n){if(t=fn(t),t instanceof oa){const r=at.fromString(e,...n);return vl(r),new Yn(t,null,r)}{if(!(t instanceof fs||t instanceof Yn))throw new De(Ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(at.fromString(e,...n));return vl(r),new Yn(t.firestore,null,r)}}/**
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
 */class yl{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new iy(this,"async_queue_retry"),this.Vu=()=>{const r=Zs();r&&ft("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Zs();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Zs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Fr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ty(e))throw e;ft("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw jh("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=sa.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&Xr()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class hy extends oa{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new yl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yl(e),this._firestoreClient=void 0,await e}}}function fy(t,e){const n=typeof t=="object"?t:xh(),r=typeof t=="string"?t:"(default)",i=ra(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Iv("firestore");o&&ly(i,...o)}return i}(function(e,n=!0){(function(i){ii=i})(ar),ir(new Sn("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new hy(new X_(r.getProvider("auth-internal")),new ey(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new De(Ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ki(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),cn(fl,"4.7.4",e),cn(fl,"4.7.4","esm2017")})();var dy="firebase",py="11.0.1";/**
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
 */cn(dy,py,"app");const gy={apiKey:"AIzaSyAiRApJLEoNlVYAyHNTDKCZQzjlQh-2Nx8",authDomain:"prueba-a742b.firebaseapp.com",projectId:"prueba-a742b",storageBucket:"prueba-a742b.firebasestorage.app",messagingSenderId:"841305033941",appId:"1:841305033941:web:7361aa15a4805a0a9fa65c"},$h=Dh(gy);function ca(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Hh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const my=Hh,Vh=new ni("auth","Firebase",Hh());/**
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
 */const Gi=new ta("@firebase/auth");function vy(t,...e){Gi.logLevel<=ge.WARN&&Gi.warn(`Auth (${ar}): ${t}`,...e)}function Oi(t,...e){Gi.logLevel<=ge.ERROR&&Gi.error(`Auth (${ar}): ${t}`,...e)}/**
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
 */function mt(t,...e){throw la(t,...e)}function Tt(t,...e){return la(t,...e)}function Bh(t,e,n){const r=Object.assign(Object.assign({},my()),{[e]:n});return new ni("auth","Firebase",r).create(e,{appName:t.name})}function Ft(t){return Bh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function la(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vh.create(t,...e)}function ee(t,e,...n){if(!t)throw la(e,...n)}function Lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oi(e),new Error(e)}function Ht(t,e){t||Lt(e)}/**
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
 */function Ao(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _y(){return El()==="http:"||El()==="https:"}function El(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function yy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_y()||Cv()||"connection"in navigator)?navigator.onLine:!0}function Ey(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class si{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=Av()||Pv()}get(){return yy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ua(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Wh{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const by=new si(3e4,6e4);function dn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pn(t,e,n,r,i={}){return Kh(t,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=ri(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},o);return Rv()||(d.referrerPolicy="no-referrer"),Wh.fetch()(Gh(t,t.config.apiHost,n,l),d)})}async function Kh(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wy),e);try{const i=new Ty(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Si(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Si(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Si(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Si(t,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Bh(t,p,d);mt(t,p)}}catch(i){if(i instanceof Bt)throw i;mt(t,"network-request-failed",{message:String(i)})}}async function oi(t,e,n,r,i={}){const o=await pn(t,e,n,r,i);return"mfaPendingCredential"in o&&mt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Gh(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ua(t.config,i):`${t.config.apiScheme}://${i}`}function Iy(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ty{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),by.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Si(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tt(t,e,r);return i.customData._tokenResponse=n,i}function wl(t){return t!==void 0&&t.enterprise!==void 0}class Sy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Iy(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ay(t,e){return pn(t,"GET","/v2/recaptchaConfig",dn(t,e))}/**
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
 */async function Ry(t,e){return pn(t,"POST","/v1/accounts:delete",e)}async function zh(t,e){return pn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function $r(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cy(t,e=!1){const n=fn(t),r=await n.getIdToken(e),i=ha(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:$r(eo(i.auth_time)),issuedAtTime:$r(eo(i.iat)),expirationTime:$r(eo(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function eo(t){return Number(t)*1e3}function ha(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rh(n);return i?JSON.parse(i):(Oi("Failed to decode base64 JWT payload"),null)}catch(i){return Oi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bl(t){const e=ha(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&Py(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Py({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Oy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ro{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$r(this.lastLoginAt),this.creationTime=$r(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zi(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Yr(t,zh(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?qh(o.providerUserInfo):[],l=Ny(t.providerData,a),u=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Ro(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function ky(t){const e=fn(t);await zi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ny(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qh(t){return t.map(e=>{var{providerId:n}=e,r=ca(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Dy(t,e){const n=await Kh(t,{},async()=>{const r=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,a=Gh(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Wh.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xy(t,e){return pn(t,"POST","/v2/accounts:revokeToken",dn(t,e))}/**
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
 */class Qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=bl(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Dy(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new Qn;return r&&(ee(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(ee(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qn,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
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
 */function Xt(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=ca(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Oy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ro(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Yr(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Cy(this,e)}reload(){return ky(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(Ft(this.auth));const e=await this.getIdToken();return await Yr(this,Ry(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,a,l,u,d,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(i=n.email)!==null&&i!==void 0?i:void 0,S=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,D=(a=n.photoURL)!==null&&a!==void 0?a:void 0,U=(l=n.tenantId)!==null&&l!==void 0?l:void 0,z=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,X=(d=n.createdAt)!==null&&d!==void 0?d:void 0,W=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:G,emailVerified:B,isAnonymous:ie,providerData:ce,stsTokenManager:b}=n;ee(G&&b,e,"internal-error");const v=Qn.fromJSON(this.name,b);ee(typeof G=="string",e,"internal-error"),Xt(m,e.name),Xt(w,e.name),ee(typeof B=="boolean",e,"internal-error"),ee(typeof ie=="boolean",e,"internal-error"),Xt(S,e.name),Xt(D,e.name),Xt(U,e.name),Xt(z,e.name),Xt(X,e.name),Xt(W,e.name);const E=new Mt({uid:G,auth:e,email:w,emailVerified:B,displayName:m,isAnonymous:ie,photoURL:D,phoneNumber:S,tenantId:U,stsTokenManager:v,createdAt:X,lastLoginAt:W});return ce&&Array.isArray(ce)&&(E.providerData=ce.map(I=>Object.assign({},I))),z&&(E._redirectEventId=z),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qn;i.updateFromServerResponse(n);const o=new Mt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zi(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?qh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new Qn;l.updateFromIdToken(r);const u=new Mt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ro(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
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
 */const Il=new Map;function Ut(t){Ht(t instanceof Function,"Expected a class definition");let e=Il.get(t);return e?(Ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Il.set(t,e),e)}/**
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
 */class Jh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jh.type="NONE";const Tl=Jh;/**
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
 */function ki(t,e,n){return`firebase:${t}:${e}:${n}`}class Zn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=ki(this.userKey,i.apiKey,o),this.fullPersistenceKey=ki("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zn(Ut(Tl),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Ut(Tl);const a=ki(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(a);if(p){const m=Mt._fromJSON(e,p);d!==o&&(l=m),o=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Zn(o,e,r):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new Zn(o,e,r))}}/**
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
 */function Sl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tf(e))return"Blackberry";if(nf(e))return"Webos";if(Yh(e))return"Safari";if((e.includes("chrome/")||Qh(e))&&!e.includes("edge/"))return"Chrome";if(ef(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xh(t=qe()){return/firefox\//i.test(t)}function Yh(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qh(t=qe()){return/crios\//i.test(t)}function Zh(t=qe()){return/iemobile/i.test(t)}function ef(t=qe()){return/android/i.test(t)}function tf(t=qe()){return/blackberry/i.test(t)}function nf(t=qe()){return/webos/i.test(t)}function fa(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ly(t=qe()){var e;return fa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function My(){return Ov()&&document.documentMode===10}function rf(t=qe()){return fa(t)||ef(t)||nf(t)||tf(t)||/windows phone/i.test(t)||Zh(t)}/**
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
 */function sf(t,e=[]){let n;switch(t){case"Browser":n=Sl(qe());break;case"Worker":n=`${Sl(qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ar}/${r}`}/**
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
 */class Uy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((a,l)=>{try{const u=e(o);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function jy(t,e={}){return pn(t,"GET","/v2/passwordPolicy",dn(t,e))}/**
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
 */const Fy=6;class $y{constructor(e){var n,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Fy,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class Hy{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Al(this),this.idTokenSubscription=new Al(this),this.beforeStateQueue=new Uy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zh(this,{idToken:e}),r=await Mt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(bt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ey()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(Ft(this));const n=e?fn(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(Ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(Ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jy(this),n=new $y(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Zn.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function On(t){return fn(t)}class Al{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uv(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ds={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vy(t){ds=t}function of(t){return ds.loadJS(t)}function By(){return ds.recaptchaEnterpriseScript}function Wy(){return ds.gapiScript}function Ky(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Gy{constructor(){this.enterprise=new zy}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class zy{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const qy="recaptcha-enterprise",af="NO_RECAPTCHA";class Jy{constructor(e){this.type=qy,this.auth=On(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{Ay(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Sy(u);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function i(o,a,l){const u=window.grecaptcha;wl(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(af)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Gy().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(l=>{if(!n&&wl(window.grecaptcha))i(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=By();u.length!==0&&(u+=l),of(u).then(()=>{i(l,o,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function Rl(t,e,n,r=!1,i=!1){const o=new Jy(t);let a;if(i)a=af;else try{a=await o.verify(n)}catch{a=await o.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Co(t,e,n,r,i){var o;if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Rl(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Rl(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)})}/**
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
 */function Xy(t,e){const n=ra(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Vi(o,e??{}))return i;mt(i,"already-initialized")}return n.initialize({options:e})}function Yy(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Qy(t,e,n){const r=On(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=cf(e),{host:a,port:l}=Zy(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),eE()}function cf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zy(t){const e=cf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Cl(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Cl(a)}}}function Cl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class da{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,n){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}async function tE(t,e){return pn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function nE(t,e){return oi(t,"POST","/v1/accounts:signInWithPassword",dn(t,e))}/**
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
 */async function rE(t,e){return oi(t,"POST","/v1/accounts:signInWithEmailLink",dn(t,e))}async function iE(t,e){return oi(t,"POST","/v1/accounts:signInWithEmailLink",dn(t,e))}/**
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
 */class Qr extends da{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Qr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Qr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Co(e,n,"signInWithPassword",nE);case"emailLink":return rE(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Co(e,r,"signUpPassword",tE);case"emailLink":return iE(e,{idToken:n,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function er(t,e){return oi(t,"POST","/v1/accounts:signInWithIdp",dn(t,e))}/**
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
 */const sE="http://localhost";class An extends da{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new An(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=ca(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new An(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return er(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,er(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,er(e,n)}buildRequest(){const e={requestUri:sE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ri(n)}return e}}/**
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
 */function oE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aE(t){const e=Sr(Ar(t)).link,n=e?Sr(Ar(e)).deep_link_id:null,r=Sr(Ar(t)).deep_link_id;return(r?Sr(Ar(r)).link:null)||r||n||e||t}class pa{constructor(e){var n,r,i,o,a,l;const u=Sr(Ar(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,m=oE((i=u.mode)!==null&&i!==void 0?i:null);ee(d&&p&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=p,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=aE(e);try{return new pa(n)}catch{return null}}}/**
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
 */class cr{constructor(){this.providerId=cr.PROVIDER_ID}static credential(e,n){return Qr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pa.parseLink(n);return ee(r,"argument-error"),Qr._fromEmailAndCode(e,r.code,r.tenantId)}}cr.PROVIDER_ID="password";cr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ai extends lf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class en extends ai{constructor(){super("facebook.com")}static credential(e){return An._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
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
 */class tn extends ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return An._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
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
 */class nn extends ai{constructor(){super("github.com")}static credential(e){return An._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
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
 */class rn extends ai{constructor(){super("twitter.com")}static credential(e,n){return An._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
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
 */async function cE(t,e){return oi(t,"POST","/v1/accounts:signUp",dn(t,e))}/**
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
 */class Rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Mt._fromIdTokenResponse(e,r,i),a=Pl(r);return new Rn({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Pl(r);return new Rn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Pl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qi extends Bt{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qi.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qi(e,n,r,i)}}function uf(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?qi._fromErrorAndOperation(t,o,e,r):o})}async function lE(t,e,n=!1){const r=await Yr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rn._forOperation(t,"link",r)}/**
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
 */async function uE(t,e,n=!1){const{auth:r}=t;if(bt(r.app))return Promise.reject(Ft(r));const i="reauthenticate";try{const o=await Yr(t,uf(r,i,e,t),n);ee(o.idToken,r,"internal-error");const a=ha(o.idToken);ee(a,r,"internal-error");const{sub:l}=a;return ee(t.uid===l,r,"user-mismatch"),Rn._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),o}}/**
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
 */async function hf(t,e,n=!1){if(bt(t.app))return Promise.reject(Ft(t));const r="signIn",i=await uf(t,r,e),o=await Rn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function hE(t,e){return hf(On(t),e)}/**
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
 */async function ff(t){const e=On(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fE(t,e,n){if(bt(t.app))return Promise.reject(Ft(t));const r=On(t),a=await Co(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cE).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ff(t),u}),l=await Rn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function dE(t,e,n){return bt(t.app)?Promise.reject(Ft(t)):hE(fn(t),cr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ff(t),r})}function pE(t,e,n,r){return fn(t).onIdTokenChanged(e,n,r)}function gE(t,e,n){return fn(t).beforeAuthStateChanged(e,n)}const Ji="__sak";/**
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
 */class df{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ji,"1"),this.storage.removeItem(Ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const mE=1e3,vE=10;class pf extends df{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);My()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vE):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pf.type="LOCAL";const _E=pf;/**
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
 */class gf extends df{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gf.type="SESSION";const mf=gf;/**
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
 */function yE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ps{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ps(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(n.origin,o)),u=await yE(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ps.receivers=[];/**
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
 */function ga(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class EE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const d=ga("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const w=m;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(w.data.response);break;default:clearTimeout(p),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function St(){return window}function wE(t){St().location.href=t}/**
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
 */function vf(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function bE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TE(){return vf()?self:null}/**
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
 */const _f="firebaseLocalStorageDb",SE=1,Xi="firebaseLocalStorage",yf="fbase_key";class ci{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gs(t,e){return t.transaction([Xi],e?"readwrite":"readonly").objectStore(Xi)}function AE(){const t=indexedDB.deleteDatabase(_f);return new ci(t).toPromise()}function Po(){const t=indexedDB.open(_f,SE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xi,{keyPath:yf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xi)?e(r):(r.close(),await AE(),e(await Po()))})})}async function Ol(t,e,n){const r=gs(t,!0).put({[yf]:e,value:n});return new ci(r).toPromise()}async function RE(t,e){const n=gs(t,!1).get(e),r=await new ci(n).toPromise();return r===void 0?null:r.value}function kl(t,e){const n=gs(t,!0).delete(e);return new ci(n).toPromise()}const CE=800,PE=3;class Ef{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Po(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>PE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ps._getInstance(TE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bE(),!this.activeServiceWorker)return;this.sender=new EE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Po();return await Ol(e,Ji,"1"),await kl(e,Ji),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ol(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RE(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=gs(i,!1).getAll();return new ci(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ef.type="LOCAL";const OE=Ef;new si(3e4,6e4);/**
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
 */function kE(t,e){return e?Ut(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ma extends da{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return er(e,this._buildIdpRequest())}_linkToIdToken(e,n){return er(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return er(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NE(t){return hf(t.auth,new ma(t),t.bypassAuthState)}function DE(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),uE(n,new ma(t),t.bypassAuthState)}async function xE(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),lE(n,new ma(t),t.bypassAuthState)}/**
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
 */class wf{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NE;case"linkViaPopup":case"linkViaRedirect":return xE;case"reauthViaPopup":case"reauthViaRedirect":return DE;default:mt(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const LE=new si(2e3,1e4);class Wn extends wf{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Wn.currentPopupAction&&Wn.currentPopupAction.cancel(),Wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=ga();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LE.get())};e()}}Wn.currentPopupAction=null;/**
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
 */const ME="pendingRedirect",Ni=new Map;class UE extends wf{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ni.get(this.auth._key());if(!e){try{const r=await jE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ni.set(this.auth._key(),e)}return this.bypassAuthState||Ni.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jE(t,e){const n=HE(e),r=$E(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function FE(t,e){Ni.set(t._key(),e)}function $E(t){return Ut(t._redirectPersistence)}function HE(t){return ki(ME,t.config.apiKey,t.name)}async function VE(t,e,n=!1){if(bt(t.app))return Promise.reject(Ft(t));const r=On(t),i=kE(r,e),a=await new UE(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const BE=10*60*1e3;class WE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bf(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nl(e))}saveEventToCache(e){this.cachedEventUids.add(Nl(e)),this.lastProcessedEventTime=Date.now()}}function Nl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bf(t);default:return!1}}/**
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
 */async function GE(t,e={}){return pn(t,"GET","/v1/projects",e)}/**
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
 */const zE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qE=/^https?/;async function JE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GE(t);for(const n of e)try{if(XE(n))return}catch{}mt(t,"unauthorized-domain")}function XE(t){const e=Ao(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!qE.test(n))return!1;if(zE.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const YE=new si(3e4,6e4);function Dl(){const t=St().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QE(t){return new Promise((e,n)=>{var r,i,o;function a(){Dl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dl(),n(Tt(t,"network-request-failed"))},timeout:YE.get()})}if(!((i=(r=St().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=St().gapi)===null||o===void 0)&&o.load)a();else{const l=Ky("iframefcb");return St()[l]=()=>{gapi.load?a():n(Tt(t,"network-request-failed"))},of(`${Wy()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Di=null,e})}let Di=null;function ZE(t){return Di=Di||QE(t),Di}/**
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
 */const ew=new si(5e3,15e3),tw="__/auth/iframe",nw="emulator/auth/iframe",rw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sw(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ua(e,nw):`https://${t.config.authDomain}/${tw}`,r={apiKey:e.apiKey,appName:t.name,v:ar},i=iw.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ri(r).slice(1)}`}async function ow(t){const e=await ZE(t),n=St().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:sw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rw,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Tt(t,"network-request-failed"),l=St().setTimeout(()=>{o(a)},ew.get());function u(){St().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const aw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cw=500,lw=600,uw="_blank",hw="http://localhost";class xl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fw(t,e,n,r=cw,i=lw){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},aw),{width:r.toString(),height:i.toString(),top:o,left:a}),d=qe().toLowerCase();n&&(l=Qh(d)?uw:n),Xh(d)&&(e=e||hw,u.scrollbars="yes");const p=Object.entries(u).reduce((w,[S,D])=>`${w}${S}=${D},`,"");if(Ly(d)&&l!=="_self")return dw(e||"",l),new xl(null);const m=window.open(e||"",l,p);ee(m,t,"popup-blocked");try{m.focus()}catch{}return new xl(m)}function dw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pw="__/auth/handler",gw="emulator/auth/handler",mw=encodeURIComponent("fac");async function Ll(t,e,n,r,i,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ar,eventId:i};if(e instanceof lf){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Mv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof ai){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),d=u?`#${mw}=${encodeURIComponent(u)}`:"";return`${vw(t)}?${ri(l).slice(1)}${d}`}function vw({config:t}){return t.emulator?ua(t,gw):`https://${t.authDomain}/${pw}`}/**
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
 */const to="webStorageSupport";class _w{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mf,this._completeRedirectFn=VE,this._overrideRedirectResult=FE}async _openPopup(e,n,r,i){var o;Ht((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Ll(e,n,r,Ao(),i);return fw(e,a,ga())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Ll(e,n,r,Ao(),i);return wE(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ow(e),r=new WE(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(to,{type:to},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[to];a!==void 0&&n(!!a),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rf()||Yh()||fa()}}const yw=_w;var Ml="@firebase/auth",Ul="1.8.0";/**
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
 */class Ew{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ww(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bw(t){ir(new Sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sf(t)},d=new Hy(r,i,o,u);return Yy(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ir(new Sn("auth-internal",e=>{const n=On(e.getProvider("auth").getImmediate());return(r=>new Ew(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(Ml,Ul,ww(t)),cn(Ml,Ul,"esm2017")}/**
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
 */const Iw=5*60,Tw=Oh("authIdTokenMaxAge")||Iw;let jl=null;const Sw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Tw)return;const i=n==null?void 0:n.token;jl!==i&&(jl=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Aw(t=xh()){const e=ra(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xy(t,{popupRedirectResolver:yw,persistence:[OE,_E,mf]}),r=Oh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Sw(o.toString());gE(n,a,()=>a(n.currentUser)),pE(n,l=>a(l))}}const i=Ch("auth");return i&&Qy(n,`http://${i}`),n}function Rw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Vy({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Tt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Rw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bw("Browser");const Fl=Aw($h),Cw=fy($h);uy(Cw,"usuarios");const If=Wg({state:{user:null},mutations:{setUser(t,e){t.user=e}},actions:{async login({commit:t},e){try{console.log("userData:",e);const r=(await dE(Fl,e.email,e.password)).user;return this.user=r,console.log("Usuario autenticado:",r),t("setUser",r),!0}catch(n){return console.error("Error al autenticar:",n.message),!1}},async register({commit:t},e){console.log("Registrando usuario:",e);try{const r=(await fE(Fl,e.email,e.password)).user;console.log("Usuario registrado:",r),t("setUser",r),this.$router.push("/home")}catch(n){console.error("Error al registrar:",n.message)}},logout({commit:t}){t("setUser",null)}},getters:{isAuthenticated:t=>!!t.user}});pg(yg).use(Th).use(If).mount("#app");
