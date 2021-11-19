(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},"0366":function(e,t,n){var r=n("e330"),i=n("59ed"),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?o(e,t):function(){return e.apply(t,arguments)}}},"057f":function(e,t,n){var r=n("c6b6"),i=n("fc6a"),o=n("241c").f,s=n("f36a"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return o(e)}catch(t){return s(c)}};e.exports.f=function(e){return c&&"Window"==r(e)?a(e):o(i(e))}},"06cf":function(e,t,n){var r=n("83ab"),i=n("c65b"),o=n("d1e7"),s=n("5c6c"),c=n("fc6a"),a=n("a04b"),l=n("1a2d"),u=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=c(e),t=a(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return s(!i(o.f,e,t),e[t])}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0b42":function(e,t,n){var r=n("da84"),i=n("e8b5"),o=n("68ee"),s=n("861d"),c=n("b622"),a=c("species"),l=r.Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,o(t)&&(t===l||i(t.prototype))?t=void 0:s(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?l:t}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),o=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"19aa":function(e,t,n){var r=n("da84"),i=n("3a9b"),o=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw o("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),i=n("7b0b"),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,c={next:function(){return{done:!!s++}},return:function(){o=!0}};c[i]=function(){return this},Array.from(c,(function(){throw 2}))}catch(a){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(a){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return L})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return N})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return D})),n.d(t,"l",(function(){return q})),n.d(t,"m",(function(){return z})),n.d(t,"n",(function(){return I})),n.d(t,"o",(function(){return R})),n.d(t,"p",(function(){return v})),n.d(t,"q",(function(){return y})),n.d(t,"r",(function(){return b})),n.d(t,"s",(function(){return k})),n.d(t,"t",(function(){return T})),n.d(t,"u",(function(){return A})),n.d(t,"v",(function(){return M})),n.d(t,"w",(function(){return P})),n.d(t,"x",(function(){return W})),n.d(t,"y",(function(){return U})),n.d(t,"z",(function(){return S}));
/**
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
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},c=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],c=e[n++],a=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&c)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,c=i+2<e.length,a=c?e[i+2]:0,l=t>>2,u=(3&t)<<4|s>>4;let h=(15&s)<<2|a>>6,d=63&a;c||(d=64,o||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):c(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const c=i<e.length,a=c?n[e.charAt(i)]:64;++i;const l=i<e.length,u=l?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==a||null==u)throw Error();const h=t<<2|s>>4;if(r.push(h),64!==a){const e=s<<4&240|a>>2;if(r.push(e),64!==u){const e=a<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},l=function(e){const t=s(e);return a.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return a.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
/**
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
 */
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]));return e}function p(e){return"__proto__"!==e}
/**
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
 */class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
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
 */function g(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[u(JSON.stringify(n)),u(JSON.stringify(s)),c].join(".")}
/**
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
 */function m(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function b(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function y(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}
/**
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
 */
const w="FirebaseError";class C extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=w,Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?E(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,c=new C(r,s,n);return c}}function E(e,t){return e.replace(x,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const x=/\{\$([^}]+)}/g;
/**
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
 */function T(e){return JSON.parse(e)}function S(e){return JSON.stringify(e)}
/**
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
 */const j=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=T(h(o[0])||""),n=T(h(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:t,claims:n,data:r,signature:i}},k=function(e){const t=j(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},I=function(e){const t=j(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
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
 */
function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function P(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function R(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function A(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function D(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(F(n)&&F(o)){if(!D(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F(e){return null!==e&&"object"===typeof e}
/**
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
 */function M(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}
/**
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
 */
class L{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],c=this.chain_[2],a=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=a^s&(c^a),i=1518500249):(r=s^c^a,i=1859775393):u<60?(r=s&c|a&(s|c),i=2400959708):(r=s^c^a,i=3395469782);const e=(o<<5|o>>>27)+r+l+i+n[u]&4294967295;l=a,a=c,c=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function q(e,t){return`${e} failed: ${t} argument `}
/**
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
 */
const U=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o>=55296&&o<=56319){const t=o-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;o=65536+(t<<10)+n}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},W=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
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
 */
function z(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("825a"),c=n("0d51"),a=n("e95a"),l=n("07fa"),u=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=r.TypeError,_=function(e,t){this.stopped=e,this.result=t},g=_.prototype;e.exports=function(e,t,n){var r,m,v,b,y,w,C,O=n&&n.that,E=!(!n||!n.AS_ENTRIES),x=!(!n||!n.IS_ITERATOR),T=!(!n||!n.INTERRUPTED),S=i(t,O),j=function(e){return r&&f(r,"normal",e),new _(!0,e)},k=function(e){return E?(s(e),T?S(e[0],e[1],j):S(e[0],e[1])):T?S(e,j):S(e)};if(x)r=e;else{if(m=d(e),!m)throw p(c(e)+" is not iterable");if(a(m)){for(v=0,b=l(e);b>v;v++)if(y=k(e[v]),y&&u(g,y))return y;return new _(!1)}r=h(e,m)}w=r.next;while(!(C=o(w,r)).done){try{y=k(C.value)}catch(I){f(r,"throw",I)}if("object"==typeof y&&y&&u(g,y))return y}return new _(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const o="[DEFAULT]";
/**
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
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(a(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:c(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function c(e){return e===o?void 0:e}function a(e){return"EAGER"===e.instantiationMode}
/**
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
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),c=n("ce4e"),a=n("e893"),l=n("94ca");e.exports=function(e,t){var n,u,h,d,f,p,_=e.target,g=e.global,m=e.stat;if(u=g?r:m?r[_]||c(_,{}):(r[_]||{}).prototype,u)for(h in t){if(f=t[h],e.noTargetGet?(p=i(u,h),d=p&&p.value):d=u[h],n=l(g?h:_+(m?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;a(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(u,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},"260b":function(e,t,n){"use strict";var r=n("589b");n.d(t,"a",(function(){return r["e"]}));var i="firebase",o="9.4.1";
/**
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
 */
Object(r["f"])(i,o,"app")},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),c=o("species");e.exports=function(e){var t=r(e),n=i.f;s&&t&&!t[c]&&n(t,c,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("c65b"),i=n("825a"),o=n("dc4a");e.exports=function(e,t,n){var s,c;i(e);try{if(s=o(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(a){c=!0,s=a}if("throw"===t)throw n;if(c)throw s;return i(s),n}},"2ba4":function(e,t){var n=Function.prototype,r=n.apply,i=n.bind,o=n.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(r):function(){return o.apply(r,arguments)})},"2cf4":function(e,t,n){var r,i,o,s,c=n("da84"),a=n("2ba4"),l=n("0366"),u=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),_=n("cc12"),g=n("1cdc"),m=n("605d"),v=c.setImmediate,b=c.clearImmediate,y=c.process,w=c.Dispatch,C=c.Function,O=c.MessageChannel,E=c.String,x=0,T={},S="onreadystatechange";try{r=c.location}catch(P){}var j=function(e){if(h(T,e)){var t=T[e];delete T[e],t()}},k=function(e){return function(){j(e)}},I=function(e){j(e.data)},N=function(e){c.postMessage(E(e),r.protocol+"//"+r.host)};v&&b||(v=function(e){var t=p(arguments,1);return T[++x]=function(){a(u(e)?e:C(e),void 0,t)},i(x),x},b=function(e){delete T[e]},m?i=function(e){y.nextTick(k(e))}:w&&w.now?i=function(e){w.now(k(e))}:O&&!g?(o=new O,s=o.port2,o.port1.onmessage=I,i=l(s.postMessage,s)):c.addEventListener&&u(c.postMessage)&&!c.importScripts&&r&&"file:"!==r.protocol&&!d(N)?(i=N,c.addEventListener("message",I,!1)):i=S in _("script")?function(e){f.appendChild(_("script"))[S]=function(){f.removeChild(this),j(e)}}:function(e){setTimeout(k(e),0)}),e.exports={set:v,clear:b}},"2d00":function(e,t,n){var r,i,o=n("da84"),s=n("342f"),c=o.process,a=o.Deno,l=c&&c.versions||a&&a.version,u=l&&l.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),c=s("iterator");e.exports=function(e){if(void 0!=e)return i(e,c)||i(e,"@@iterator")||o[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("fc6a"),c=n("df75");e.exports=r?Object.defineProperties:function(e,t){o(e);var n,r=s(t),a=c(t),l=a.length,u=0;while(l>u)i.f(e,n=a[u++],r[n]);return e}},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),i=n("1626"),o=r.String,s=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw s("Can't set "+o(e)+" as a prototype")}},"3f8c":function(e,t){e.exports={}},"428f":function(e,t,n){var r=n("da84");e.exports=r},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("da84"),i=n("e330"),o=n("d039"),s=n("c6b6"),c=r.Object,a=i("".split);e.exports=o((function(){return!c("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):c(e)}:c},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),c=Array.prototype;void 0==c[s]&&o.f(c,s,{configurable:!0,value:i(null)}),e.exports=function(e){c[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4795:function(e,t,n){var r=n("23e7"),i=n("da84"),o=n("2ba4"),s=n("1626"),c=n("342f"),a=n("f36a"),l=/MSIE .\./.test(c),u=i.Function,h=function(e){return function(t,n){var r=arguments.length>2,i=r?a(arguments,2):void 0;return e(r?function(){o(s(t)?t:u(t),this,i)}:t,n)}};r({global:!0,bind:!0,forced:l},{setTimeout:h(i.setTimeout),setInterval:h(i.setInterval)})},4840:function(e,t,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[s])?t:i(n)}},"485a":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("1626"),s=n("861d"),c=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&o(n=e.toString)&&!s(r=i(n,e)))return r;if(o(n=e.valueOf)&&!s(r=i(n,e)))return r;if("string"!==t&&o(n=e.toString)&&!s(r=i(n,e)))return r;throw c("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"498a":function(e,t,n){"use strict";var r=n("23e7"),i=n("58a8").trim,o=n("c8d2");r({target:"String",proto:!0,forced:o("trim")},{trim:function(){return i(this)}})},"4d64":function(e,t,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),s=function(e){return function(t,n,s){var c,a=r(t),l=o(a),u=i(s,l);if(e&&n!=n){while(l>u)if(c=a[u++],c!=c)return!0}else for(;l>u;u++)if((e||u in a)&&a[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},5087:function(e,t,n){var r=n("da84"),i=n("68ee"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return tc})),n.d(t,"b",(function(){return Gs})),n.d(t,"c",(function(){return Ws})),n.d(t,"d",(function(){return qs})),n.d(t,"e",(function(){return zs}));var r=n("589b"),i=n("22e5"),o=n("1fd5"),s=n("e691");const c="@firebase/database",a="0.12.4";
/**
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
 */
let l="";function u(e){l=e}
/**
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
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(o["z"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(o["t"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
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
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(o["h"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
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
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),_=f("sessionStorage"),g=new s["b"]("@firebase/database"),m=function(){let e=1;return function(){return e++}}(),v=function(e){const t=Object(o["y"])(e),n=new o["c"];n.update(t);const r=n.digest();return o["f"].encodeByteArray(r)},b=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=b.apply(null,r):t+="object"===typeof r?Object(o["z"])(r):r,t+=" "}return t};let y=null,w=!0;const C=function(e,t){Object(o["d"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=s["a"].VERBOSE,y=g.log.bind(g),t&&_.set("logging_enabled",!0)):"function"===typeof e?y=e:(y=null,_.remove("logging_enabled"))},O=function(...e){if(!0===w&&(w=!1,null===y&&!0===_.get("logging_enabled")&&C(!0)),y){const t=b.apply(null,e);y(t)}},E=function(e){return function(...t){O(e,...t)}},x=function(...e){const t="FIREBASE INTERNAL ERROR: "+b(...e);g.error(t)},T=function(...e){const t="FIREBASE FATAL ERROR: "+b(...e);throw g.error(t),new Error(t)},S=function(...e){const t="FIREBASE WARNING: "+b(...e);g.warn(t)},j=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},k=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},I=function(e){if(Object(o["q"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},N="[MIN_NAME]",P="[MAX_NAME]",R=function(e,t){if(e===t)return 0;if(e===N||t===P)return-1;if(t===N||e===P)return 1;{const n=$(e),r=$(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},A=function(e,t){return e===t?0:e<t?-1:1},D=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(o["z"])(t))},F=function(e){if("object"!==typeof e||null===e)return Object(o["z"])(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Object(o["z"])(t[r]),n+=":",n+=F(e[t[r]]);return n+="}",n},M=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function L(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const q=function(e){Object(o["d"])(!k(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,c,a,l;0===e?(s=0,c=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=a+r,c=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,c=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(c%2?1:0),c=Math.floor(c/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},U=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},W=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function z(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const B=new RegExp("^-?(0*)\\d{1,10}$"),V=-2147483648,H=2147483647,$=function(e){if(B.test(e)){const t=Number(e);if(t>=V&&t<=H)return t}return null},G=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw S("Exception was thrown by user callback.",e),t},Math.floor(0))}},Y=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},K=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
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
 */
class Q{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){S(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class J{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(O("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',S(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
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
 */
const Z="5",ee="v",te="s",ne="r",re="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oe="ls",se="p",ce="ac",ae="websocket",le="long_polling";
/**
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
 */
class ue{constructor(e,t,n,r,i=!1,o="",s=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let r;if(Object(o["d"])("string"===typeof t,"typeof type must == string"),Object(o["d"])("object"===typeof n,"typeof params must == object"),t===ae)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const i=[];return L(n,(e,t)=>{i.push(e+"="+t)}),r+i.join("&")}
/**
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
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(o["h"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(o["j"])(this.counters_)}}
/**
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
 */const pe={},_e={};function ge(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function me(e,t){const n=e.toString();return _e[n]||(_e[n]=t()),_e[n]}
/**
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
 */class ve{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&G(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */const be="start",ye="close",we="pLPCommand",Ce="pRTLPCB",Oe="id",Ee="pw",xe="ser",Te="cb",Se="seg",je="ts",ke="d",Ie="dframe",Ne=1870,Pe=30,Re=Ne-Pe,Ae=25e3,De=3e4;class Fe{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=E(e),this.stats_=ge(t),this.urlFn=e=>(this.appCheckToken&&(e[ce]=this.appCheckToken),de(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ve(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(De)),I(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Me((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===be)this.id=n,this.password=r;else{if(t!==ye)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[be]="t",e[xe]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Te]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[oe]=this.lastSessionId),this.applicationId&&(e[se]=this.applicationId),this.appCheckToken&&(e[ce]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[ne]=re);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fe.forceAllow_=!0}static forceDisallow(){Fe.forceDisallow_=!0}static isAvailable(){return!Object(o["q"])()&&(!!Fe.forceAllow_||!Fe.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!U()&&!W())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(o["z"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(o["g"])(t),r=M(n,Re);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(o["q"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ie]="t",n[Oe]=e,n[Ee]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(o["z"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Me{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(o["q"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=m(),window[we+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=Me.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){O("frame writing exception"),i.stack&&O(i.stack),O(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||O("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Oe]=this.myID,e[Ee]=this.myPW,e[xe]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Pe+n.length<=Ne))break;{const e=this.pendingSegs.shift();n=n+"&"+Se+r+"="+e.seg+"&"+je+r+"="+e.ts+"&"+ke+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Ae)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){Object(o["q"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{O("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
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
 */const Le=16384,qe=45e3;let Ue=null;"undefined"!==typeof MozWebSocket?Ue=MozWebSocket:"undefined"!==typeof WebSocket&&(Ue=WebSocket);class We{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=E(this.connId),this.stats_=ge(t),this.connURL=We.connectionURL_(t,o,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={};return i[ee]=Z,!Object(o["q"])()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(i[ne]=re),t&&(i[te]=t),n&&(i[oe]=n),r&&(i[ce]=r),de(e,ae,i)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(o["q"])()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${Z}/${l}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r=Object({NODE_ENV:"production",BASE_URL:"/"}),i=0===this.connURL.indexOf("wss://")?r["HTTPS_PROXY"]||r["https_proxy"]:r["HTTP_PROXY"]||r["http_proxy"];i&&(n["proxy"]={origin:i}),this.mySock=new Ue(this.connURL,[],n)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ue(this.connURL,[],e)}}catch(r){this.log_("Error instantiating WebSocket.");const e=r.message||r.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){We.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ue&&!We.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(o["t"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(o["d"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(o["z"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=M(t,Le);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qe))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}We.responsesRequiredToBeHealthy=2,We.healthyTimeout=3e4;
/**
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
 */
class ze{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fe,We]}initTransports_(e){const t=We&&We["isAvailable"]();let n=t&&!We.previouslyFailed();if(e.webSocketOnly&&(t||S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[We];else{const e=this.transports_=[];for(const t of ze.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
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
 */const Be=6e4,Ve=5e3,He=10240,$e=102400,Ge="t",Ye="d",Ke="s",Qe="r",Je="e",Xe="o",Ze="a",et="n",tt="p",nt="h";class rt{constructor(e,t,n,r,i,o,s,c,a,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=E("c:"+this.id+":"),this.transportManager_=new ze(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=K(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$e?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>He?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ge in e){const t=e[Ge];t===Ze?this.upgradeIfSecondaryHealthy_():t===Qe?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=D("t",e),n=D("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=D("t",e),n=D("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=D(Ge,e);if(Ye in e){const n=e[Ye];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ke?this.onConnectionShutdown_(n):t===Qe?this.onReset_(n):t===Je?x("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):x("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&S("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),K(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Be))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):K(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ve))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class it{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class ot{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(o["d"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){Object(o["d"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
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
 */class st extends ot{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(o["p"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new st}getInitialEvent(e){return Object(o["d"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */const ct=32,at=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new lt("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function _t(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function gt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function mt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function vt(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof lt)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function bt(e){return e.pieceNum_>=e.pieces_.length}function yt(e,t){const n=ht(e),r=ht(t);if(null===n)return t;if(n===r)return yt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Ct(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Ot{constructor(e,t){this.errorPrefix_=t,this.parts_=gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(o["x"])(this.parts_[n]);Tt(this)}}function Et(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(o["x"])(t),Tt(e)}function xt(e){const t=e.parts_.pop();e.byteLength_-=Object(o["x"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function Tt(e){if(e.byteLength_>at)throw new Error(e.errorPrefix_+"has a key path longer than "+at+" bytes ("+e.byteLength_+").");if(e.parts_.length>ct)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ct+") or object contains a cycle "+St(e))}function St(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class jt extends ot{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new jt}getInitialEvent(e){return Object(o["d"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
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
 */const kt=1e3,It=3e5,Nt=3e3,Pt=3e4,Rt=1.3,At=3e4,Dt="server_kill",Ft=3;class Mt extends it{constructor(e,t,n,r,i,s,c,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=c,this.authOverride_=a,this.id=Mt.nextPersistentConnectionId_++,this.log_=E("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=kt,this.maxReconnectDelay_=It,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Object(o["q"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&st.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Object(o["z"])(i)),Object(o["d"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new o["a"],n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))},Nt),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),Object(o["d"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(o["d"])(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const c={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(o,i,i=>{const o=i["d"],s=i["s"];Mt.warnOnListenWarnings_(o,t);const c=this.listens.get(n)&&this.listens.get(n).get(r);c===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(o["h"])(e,"w")){const n=Object(o["w"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();S(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(o["n"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(o["s"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(o["d"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(o["z"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):x("Unrecognized action received from server: "+Object(o["z"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(o["d"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=kt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=kt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>At&&(this.reconnectDelay_=kt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Rt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Mt.nextConnectionId_++,i=this.lastSessionId;let s=!1,c=null;const a=function(){c?c.close():(s=!0,n())},l=function(e){Object(o["d"])(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,a]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?O("getToken() completed but was canceled"):(O("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=a&&a.token,c=new rt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{S(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Dt)},i))}catch(x){this.log_("Failed to get token: "+x),s||(this.repoInfo_.nodeAdmin&&S(x),a())}}}interrupt(e){O("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){O("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(o["o"])(this.interruptReasons_)&&(this.reconnectDelay_=kt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>F(e)).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){O("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ft&&(this.reconnectDelay_=Pt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){O("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ft&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(o["q"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,Object(o["p"])()?e["framework.cordova"]=1:Object(o["r"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=st.getInstance().currentlyOnline();return Object(o["o"])(this.interruptReasons_)&&e}}Mt.nextPersistentConnectionId_=0,Mt.nextConnectionId_=0;
/**
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
 */
class Lt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Lt(e,t)}}
/**
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
 */class qt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Lt(N,e),r=new Lt(N,t);return 0!==this.compare(n,r)}minPost(){return Lt.MIN}}
/**
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
 */let Ut;class Wt extends qt{static get __EMPTY_NODE(){return Ut}static set __EMPTY_NODE(e){Ut=e}compare(e,t){return R(e.name,t.name)}isDefinedOn(e){throw Object(o["e"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Lt.MIN}maxPost(){return new Lt(P,Ut)}makePost(e,t){return Object(o["d"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new Lt(e,Ut)}toString(){return".key"}}const zt=new Wt;
/**
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
 */class Bt{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!e.isEmpty())if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Vt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Vt.RED,this.left=null!=r?r:$t.EMPTY_NODE,this.right=null!=i?i:$t.EMPTY_NODE}copy(e,t,n,r,i){return new Vt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return $t.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return $t.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Vt.RED=!0,Vt.BLACK=!1;class Ht{copy(e,t,n,r,i){return this}insert(e,t,n){return new Vt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $t{constructor(e,t=$t.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new $t(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Vt.BLACK,null,null))}remove(e){return new $t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Vt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Bt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Bt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Bt(this.root_,null,this.comparator_,!0,e)}}
/**
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
 */
function Gt(e,t){return R(e.name,t.name)}function Yt(e,t){return R(e,t)}
/**
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
 */let Kt;function Qt(e){Kt=e}$t.EMPTY_NODE=new Ht;const Jt=function(e){return"number"===typeof e?"number:"+q(e):"string:"+e},Xt=function(e){if(e.isLeafNode()){const t=e.val();Object(o["d"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(o["h"])(t,".sv"),"Priority must be a string or number.")}else Object(o["d"])(e===Kt||e.isEmpty(),"priority of unexpected type.");Object(o["d"])(e===Kt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let Zt,en,tn;class nn{constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(o["d"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xt(this.priorityNode_)}static set __childrenNodeConstructor(e){Zt=e}static get __childrenNodeConstructor(){return Zt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return bt(e)?this:".priority"===ht(e)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(o["d"])(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?q(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:(Object(o["d"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=nn.VALUE_TYPE_ORDER.indexOf(t),i=nn.VALUE_TYPE_ORDER.indexOf(n);return Object(o["d"])(r>=0,"Unknown leaf type: "+t),Object(o["d"])(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function rn(e){en=e}function on(e){tn=e}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends qt{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?R(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Lt.MIN}maxPost(){return new Lt(P,new nn("[PRIORITY-POST]",tn))}makePost(e,t){const n=en(e);return new Lt(t,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const cn=new sn,an=Math.log(2);
/**
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
 */class ln{constructor(e){const t=e=>parseInt(Math.log(e)/an,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const un=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,c;if(0===o)return null;if(1===o)return s=e[t],c=n?n(s):s,new Vt(c,s.node,Vt.BLACK,null,null);{const a=parseInt(o/2,10)+t,l=i(t,a),u=i(a+1,r);return s=e[a],c=n?n(s):s,new Vt(c,s.node,Vt.BLACK,l,u)}},o=function(t){let r=null,o=null,s=e.length;const c=function(t,r){const o=s-t,c=s;s-=t;const l=i(o+1,c),u=e[o],h=n?n(u):u;a(new Vt(h,u.node,r,null,l))},a=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?c(r,Vt.BLACK):(c(r,Vt.BLACK),c(r,Vt.RED))}return o},s=new ln(e.length),c=o(s);return new $t(r||t,c)};
/**
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
 */let hn;const dn={};class fn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(o["d"])(dn&&cn,"ChildrenNode.ts has not been loaded"),hn=hn||new fn({".priority":dn},{".priority":cn}),hn}get(e){const t=Object(o["w"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof $t?t:null}hasIndex(e){return Object(o["h"])(this.indexSet_,e.toString())}addIndex(e,t){Object(o["d"])(e!==zt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Lt.Wrap);let s,c=i.getNext();while(c)r=r||e.isDefinedOn(c.node),n.push(c),c=i.getNext();s=r?un(n,e.getCompare()):dn;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const u=Object.assign({},this.indexes_);return u[a]=s,new fn(u,l)}addToIndexes(e,t){const n=Object(o["u"])(this.indexes_,(n,r)=>{const i=Object(o["w"])(this.indexSet_,r);if(Object(o["d"])(i,"Missing index implementation for "+r),n===dn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Lt.Wrap);let o=r.getNext();while(o)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),un(n,i.getCompare())}return dn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Lt(e.name,r))),i.insert(e,e.node)}});return new fn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(o["u"])(this.indexes_,n=>{if(n===dn)return n;{const r=t.get(e.name);return r?n.remove(new Lt(e.name,r)):n}});return new fn(n,this.indexSet_)}}
/**
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
 */let pn;class _n{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xt(this.priorityNode_),this.children_.isEmpty()&&Object(o["d"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new _n(new $t(Yt),null,fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(e){return this.children_.isEmpty()?this:new _n(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?pn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(o["d"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Lt(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?pn:this.priorityNode_;return new _n(r,o,i)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{Object(o["d"])(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(cn,(o,s)=>{t[o]=s.val(e),n++,i&&_n.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jt(this.getPriority().val())+":"),this.forEachChild(cn,(t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)}),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Lt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Lt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Lt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Lt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Lt.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mn?-1:0}withIndex(e){if(e===zt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new _n(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===zt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(cn),n=t.getIterator(cn);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===zt?null:this.indexMap_.get(e.toString())}}_n.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gn extends _n{constructor(){super(new $t(Yt),_n.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _n.EMPTY_NODE}isEmpty(){return!1}}const mn=new gn;Object.defineProperties(Lt,{MIN:{value:new Lt(N,_n.EMPTY_NODE)},MAX:{value:new Lt(P,mn)}}),Wt.__EMPTY_NODE=_n.EMPTY_NODE,nn.__childrenNodeConstructor=_n,Qt(mn),on(mn);
/**
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
 */
const vn=!0;function bn(e,t=null){if(null===e)return _n.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(o["d"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new nn(n,bn(t))}if(e instanceof Array||!vn){let n=_n.EMPTY_NODE;return L(e,(t,r)=>{if(Object(o["h"])(e,t)&&"."!==t.substring(0,1)){const e=bn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(bn(t))}{const n=[];let r=!1;const i=e;if(L(i,(e,t)=>{if("."!==e.substring(0,1)){const i=bn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Lt(e,i)))}}),0===n.length)return _n.EMPTY_NODE;const o=un(n,Gt,e=>e.name,Yt);if(r){const e=un(n,cn.getCompare());return new _n(o,bn(t),new fn({".priority":e},{".priority":cn}))}return new _n(o,bn(t),fn.Default)}}rn(bn);
/**
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
 */
class yn extends qt{constructor(e){super(),this.indexPath_=e,Object(o["d"])(!bt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?R(e.name,t.name):i}makePost(e,t){const n=bn(e),r=_n.EMPTY_NODE.updateChild(this.indexPath_,n);return new Lt(t,r)}maxPost(){const e=_n.EMPTY_NODE.updateChild(this.indexPath_,mn);return new Lt(P,e)}toString(){return gt(this.indexPath_,0).join("/")}}
/**
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
 */class wn extends qt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?R(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Lt.MIN}maxPost(){return Lt.MAX}makePost(e,t){const n=bn(e);return new Lt(t,n)}toString(){return".value"}}const Cn=new wn,On="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",En=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=On.charAt(n%64),n=Math.floor(n/64);Object(o["d"])(0===n,"Cannot push at time == 0");let c=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)c+=On.charAt(t[i]);return Object(o["d"])(20===c.length,"nextPushId: Length should be 20."),c}}();
/**
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
 */
/**
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
 */
function xn(e){return{type:"value",snapshotNode:e}}function Tn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Sn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function jn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function kn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
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
 */class In{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){Object(o["d"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const c=e.getImmediateChild(t);return c.getChild(r).equals(n.getChild(r))&&c.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Sn(t,c)):Object(o["d"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):c.isEmpty()?s.trackChildChange(Tn(t,n)):s.trackChildChange(jn(t,n,c))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(cn,(e,r)=>{t.hasChild(e)||n.trackChildChange(Sn(e,r))}),t.isLeafNode()||t.forEachChild(cn,(t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(jn(t,r,i))}else n.trackChildChange(Tn(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?_n.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
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
 */class Nn{constructor(e){this.indexedFilter_=new In(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Nn.getStartPost_(e),this.endPost_=Nn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,o){return this.matches(new Lt(t,n))||(n=_n.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=_n.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(_n.EMPTY_NODE);const i=this;return t.forEachChild(cn,(e,t)=>{i.matches(new Lt(e,t))||(r=r.updateImmediateChild(e,_n.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
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
 */class Pn{constructor(e){this.rangedFilter_=new Nn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new Lt(t,n))||(n=_n.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=_n.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=_n.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,o;if(r=t.withIndex(this.index_),r=r.updatePriority(_n.EMPTY_NODE),this.reverse_){o=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else o=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let s=0,c=!1;while(o.hasNext()){const t=o.getNext();!c&&i(e,t)<=0&&(c=!0);const a=c&&s<this.limit_&&i(t,n)<=0;a?s++:r=r.updateImmediateChild(t.name,_n.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const c=e;Object(o["d"])(c.numChildren()===this.limit_,"");const a=new Lt(t,n),l=this.reverse_?c.getFirstChild(this.index_):c.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(c.hasChild(t)){const e=c.getImmediateChild(t);let o=r.getChildAfterChild(this.index_,l,this.reverse_);while(null!=o&&(o.name===t||c.hasChild(o.name)))o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,a),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(jn(t,n,e)),c.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Sn(t,e));const n=c.updateImmediateChild(t,_n.EMPTY_NODE),r=null!=o&&this.rangedFilter_.matches(o);return r?(null!=i&&i.trackChildChange(Tn(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:u&&s(l,a)>=0?(null!=i&&(i.trackChildChange(Sn(l.name,l.node)),i.trackChildChange(Tn(t,n))),c.updateImmediateChild(t,n).updateImmediateChild(l.name,_n.EMPTY_NODE)):e}}
/**
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
 */class Rn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cn}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(o["d"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(o["d"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:N}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(o["d"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(o["d"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:P}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(o["d"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===cn}copy(){const e=new Rn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function An(e){return e.loadsAllData()?new In(e.getIndex()):e.hasLimit()?new Pn(e):new Nn(e)}function Dn(e){const t={};if(e.isDefault())return t;let n;return e.index_===cn?n="$priority":e.index_===Cn?n="$value":e.index_===zt?n="$key":(Object(o["d"])(e.index_ instanceof yn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(o["z"])(n),e.startSet_&&(t["startAt"]=Object(o["z"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(o["z"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(o["z"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(o["z"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Fn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==cn&&(t["i"]=e.index_.toString()),t}
/**
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
 */class Mn extends it{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=E("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(o["d"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Mn.getListenId_(e,n),c={};this.listens_[s]=c;const a=Dn(e._queryParams);this.restRequest_(i+".json",a,(e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),Object(o["w"])(this.listens_,s)===c){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}})}unlisten(e,t){const n=Mn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Dn(e._queryParams),n=e._path.toString(),r=new o["a"];return this.restRequest_(n+".json",t,(e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(o["v"])(t);this.log_("Sending REST request for "+s);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(n&&4===c.readyState){this.log_("REST Response for "+s+" received. status:",c.status,"response:",c.responseText);let t=null;if(c.status>=200&&c.status<300){try{t=Object(o["t"])(c.responseText)}catch(e){S("Failed to parse JSON response for "+s+": "+c.responseText)}n(null,t)}else 401!==c.status&&404!==c.status&&S("Got unsuccessful REST response for "+s+" Status: "+c.status),n(c.status);n=null}},c.open("GET",s,!0),c.send()})}}
/**
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
 */class Ln{constructor(){this.rootNode_=_n.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
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
 */function qn(){return{value:null,children:new Map}}function Un(e,t,n){if(bt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ht(t);e.children.has(r)||e.children.set(r,qn());const i=e.children.get(r);t=ft(t),Un(i,t,n)}}function Wn(e,t,n){null!==e.value?n(t,e.value):zn(e,(e,r)=>{const i=new lt(t.toString()+"/"+e);Wn(r,i,n)})}function zn(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
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
 */class Bn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&L(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
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
 */const Vn=1e4,Hn=3e4,$n=3e5;class Gn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Bn(e);const n=Vn+(Hn-Vn)*Math.random();K(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;L(e,(e,r)=>{r>0&&Object(o["h"])(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),K(this.reportStats_.bind(this),Math.floor(2*Math.random()*$n))}}
/**
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
 */var Yn;function Kn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Yn||(Yn={}));class Xn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Yn.ACK_USER_WRITE,this.source=Kn()}operationForChild(e){if(bt(this.path)){if(null!=this.affectedTree.value)return Object(o["d"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new Xn(ut(),t,this.revert)}}return Object(o["d"])(ht(this.path)===e,"operationForChild called for unrelated child."),new Xn(ft(this.path),this.affectedTree,this.revert)}}
/**
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
 */class Zn{constructor(e,t){this.source=e,this.path=t,this.type=Yn.LISTEN_COMPLETE}operationForChild(e){return bt(this.path)?new Zn(this.source,ut()):new Zn(this.source,ft(this.path))}}
/**
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
 */class er{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Yn.OVERWRITE}operationForChild(e){return bt(this.path)?new er(this.source,ut(),this.snap.getImmediateChild(e)):new er(this.source,ft(this.path),this.snap)}}
/**
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
 */class tr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Yn.MERGE}operationForChild(e){if(bt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new er(this.source,ut(),t.value):new tr(this.source,ut(),t)}return Object(o["d"])(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tr(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class nr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(bt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
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
 */class rr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ir(e,t,n,r){const i=[],o=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(kn(t.childName,t.snapshotNode))}),or(e,i,"child_removed",t,r,n),or(e,i,"child_added",t,r,n),or(e,i,"child_moved",o,r,n),or(e,i,"child_changed",t,r,n),or(e,i,"value",t,r,n),i}function or(e,t,n,r,i,o){const s=r.filter(e=>e.type===n);s.sort((t,n)=>cr(e,t,n)),s.forEach(n=>{const r=sr(e,n,o);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function sr(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function cr(e,t,n){if(null==t.childName||null==n.childName)throw Object(o["e"])("Should only compare child_ events.");const r=new Lt(t.childName,t.snapshotNode),i=new Lt(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
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
 */function ar(e,t){return{eventCache:e,serverCache:t}}function lr(e,t,n,r){return ar(new nr(t,n,r),e.serverCache)}function ur(e,t,n,r){return ar(e.eventCache,new nr(t,n,r))}function hr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function dr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let fr;const pr=()=>(fr||(fr=new $t(A)),fr);class _r{constructor(e,t=pr()){this.value=e,this.children=t}static fromObject(e){let t=new _r(null);return L(e,(e,n)=>{t=t.set(new lt(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(bt(e))return null;{const n=ht(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ft(e),t);if(null!=i){const e=vt(new lt(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(bt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new _r(null)}}set(e,t){if(bt(e))return new _r(t,this.children);{const n=ht(e),r=this.children.get(n)||new _r(null),i=r.set(ft(e),t),o=this.children.insert(n,i);return new _r(this.value,o)}}remove(e){if(bt(e))return this.children.isEmpty()?new _r(null):new _r(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const r=n.remove(ft(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new _r(null):new _r(this.value,i)}return this}}get(e){if(bt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(bt(e))return t;{const n=ht(e),r=this.children.get(n)||new _r(null),i=r.setTree(ft(e),t);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new _r(this.value,o)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(vt(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(bt(e))return null;{const r=ht(e),i=this.children.get(r);return i?i.findOnPath_(ft(e),vt(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(bt(e))return this;{this.value&&n(t,this.value);const r=ht(e),i=this.children.get(r);return i?i.foreachOnPath_(ft(e),vt(t,r),n):new _r(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(vt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
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
 */class gr{constructor(e){this.writeTree_=e}static empty(){return new gr(new _r(null))}}function mr(e,t,n){if(bt(t))return new gr(new _r(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=yt(i,t);return o=o.updateChild(s,n),new gr(e.writeTree_.set(i,o))}{const r=new _r(n),i=e.writeTree_.setTree(t,r);return new gr(i)}}}function vr(e,t,n){let r=e;return L(n,(e,n)=>{r=mr(r,vt(t,e),n)}),r}function br(e,t){if(bt(t))return gr.empty();{const n=e.writeTree_.setTree(t,new _r(null));return new gr(n)}}function yr(e,t){return null!=wr(e,t)}function wr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(yt(n.path,t)):null}function Cr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(cn,(e,n)=>{t.push(new Lt(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Lt(e,n.value))}),t}function Or(e,t){if(bt(t))return e;{const n=wr(e,t);return new gr(null!=n?new _r(n):e.writeTree_.subtree(t))}}function Er(e){return e.writeTree_.isEmpty()}function xr(e,t){return Tr(ut(),e.writeTree_,t)}function Tr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((t,i)=>{".priority"===t?(Object(o["d"])(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Tr(vt(e,t),i,n)}),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(vt(e,".priority"),r)),n}}
/**
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
 */function Sr(e,t){return Kr(t,e)}function jr(e,t,n,r,i){Object(o["d"])(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=mr(e.visibleWrites,t,n)),e.lastWriteId=r}function kr(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function Ir(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(o["d"])(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,c=e.allWrites.length-1;while(i&&c>=0){const t=e.allWrites[c];t.visible&&(c>=n&&Nr(t,r.path)?i=!1:Ct(r.path,t.path)&&(s=!0)),c--}if(i){if(s)return Pr(e),!0;if(r.snap)e.visibleWrites=br(e.visibleWrites,r.path);else{const t=r.children;L(t,t=>{e.visibleWrites=br(e.visibleWrites,vt(r.path,t))})}return!0}return!1}function Nr(e,t){if(e.snap)return Ct(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ct(vt(e.path,n),t))return!0;return!1}function Pr(e){e.visibleWrites=Ar(e.allWrites,Rr,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Rr(e){return e.visible}function Ar(e,t,n){let r=gr.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)Ct(n,e)?(t=yt(n,e),r=mr(r,t,s.snap)):Ct(e,n)&&(t=yt(e,n),r=mr(r,ut(),s.snap.getChild(t)));else{if(!s.children)throw Object(o["e"])("WriteRecord should have .snap or .children");if(Ct(n,e))t=yt(n,e),r=vr(r,t,s.children);else if(Ct(e,n))if(t=yt(e,n),bt(t))r=vr(r,ut(),s.children);else{const e=Object(o["w"])(s.children,ht(t));if(e){const n=e.getChild(ft(t));r=mr(r,ut(),n)}}}}}return r}function Dr(e,t,n,r,i){if(r||i){const o=Or(e.visibleWrites,t);if(!i&&Er(o))return n;if(i||null!=n||yr(o,ut())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Ct(e.path,t)||Ct(t,e.path))},s=Ar(e.allWrites,o,t),c=n||_n.EMPTY_NODE;return xr(s,c)}return null}{const r=wr(e.visibleWrites,t);if(null!=r)return r;{const r=Or(e.visibleWrites,t);if(Er(r))return n;if(null!=n||yr(r,ut())){const e=n||_n.EMPTY_NODE;return xr(r,e)}return null}}}function Fr(e,t,n){let r=_n.EMPTY_NODE;const i=wr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(cn,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){const i=Or(e.visibleWrites,t);return n.forEachChild(cn,(e,t)=>{const n=xr(Or(i,new lt(e)),t);r=r.updateImmediateChild(e,n)}),Cr(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}{const n=Or(e.visibleWrites,t);return Cr(n).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}}function Mr(e,t,n,r,i){Object(o["d"])(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=vt(t,n);if(yr(e.visibleWrites,s))return null;{const t=Or(e.visibleWrites,s);return Er(t)?i.getChild(n):xr(t,i.getChild(n))}}function Lr(e,t,n,r){const i=vt(t,n),o=wr(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const t=Or(e.visibleWrites,i);return xr(t,r.getNode().getImmediateChild(n))}return null}function qr(e,t){return wr(e.visibleWrites,t)}function Ur(e,t,n,r,i,o,s){let c;const a=Or(e.visibleWrites,t),l=wr(a,ut());if(null!=l)c=l;else{if(null==n)return[];c=xr(a,n)}if(c=c.withIndex(s),c.isEmpty()||c.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?c.getReverseIteratorFrom(r,s):c.getIteratorFrom(r,s);let a=n.getNext();while(a&&e.length<i)0!==t(a,r)&&e.push(a),a=n.getNext();return e}}function Wr(){return{visibleWrites:gr.empty(),allWrites:[],lastWriteId:-1}}function zr(e,t,n,r){return Dr(e.writeTree,e.treePath,t,n,r)}function Br(e,t){return Fr(e.writeTree,e.treePath,t)}function Vr(e,t,n,r){return Mr(e.writeTree,e.treePath,t,n,r)}function Hr(e,t){return qr(e.writeTree,vt(e.treePath,t))}function $r(e,t,n,r,i,o){return Ur(e.writeTree,e.treePath,t,n,r,i,o)}function Gr(e,t,n){return Lr(e.writeTree,e.treePath,t,n)}function Yr(e,t){return Kr(vt(e.treePath,t),e.writeTree)}function Kr(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class Qr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(o["d"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(o["d"])(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,jn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Sn(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Tn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Object(o["e"])("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,jn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */class Jr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Xr=new Jr;class Zr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new nr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:dr(this.viewCache_),i=$r(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
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
 */function ei(e){return{filter:e}}function ti(e,t){Object(o["d"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(o["d"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ni(e,t,n,r,i){const s=new Qr;let c,a;if(n.type===Yn.OVERWRITE){const l=n;l.source.fromUser?c=si(e,t,l.path,l.snap,r,i,s):(Object(o["d"])(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!bt(l.path),c=oi(e,t,l.path,l.snap,r,i,a,s))}else if(n.type===Yn.MERGE){const l=n;l.source.fromUser?c=ai(e,t,l.path,l.children,r,i,s):(Object(o["d"])(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),c=ui(e,t,l.path,l.children,r,i,a,s))}else if(n.type===Yn.ACK_USER_WRITE){const o=n;c=o.revert?fi(e,t,o.path,r,i,s):hi(e,t,o.path,o.affectedTree,r,i,s)}else{if(n.type!==Yn.LISTEN_COMPLETE)throw Object(o["e"])("Unknown operation type: "+n.type);c=di(e,t,n.path,r,s)}const l=s.getChanges();return ri(t,c,l),{viewCache:c,changes:l}}function ri(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=hr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(xn(hr(t)))}}function ii(e,t,n,r,i,s){const c=t.eventCache;if(null!=Hr(r,n))return t;{let a,l;if(bt(n))if(Object(o["d"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=dr(t),i=n instanceof _n?n:_n.EMPTY_NODE,o=Br(r,i);a=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=zr(r,dr(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const u=ht(n);if(".priority"===u){Object(o["d"])(1===dt(n),"Can't have a priority with additional path components");const i=c.getNode();l=t.serverCache.getNode();const s=Vr(r,n,i,l);a=null!=s?e.filter.updatePriority(i,s):c.getNode()}else{const o=ft(n);let h;if(c.isCompleteForChild(u)){l=t.serverCache.getNode();const e=Vr(r,n,c.getNode(),l);h=null!=e?c.getNode().getImmediateChild(u).updateChild(o,e):c.getNode().getImmediateChild(u)}else h=Gr(r,u,t.serverCache);a=null!=h?e.filter.updateChild(c.getNode(),u,h,o,i,s):c.getNode()}}return lr(t,a,c.isFullyInitialized()||bt(n),e.filter.filtersNodes())}}function oi(e,t,n,r,i,o,s,c){const a=t.serverCache;let l;const u=s?e.filter:e.filter.getIndexedFilter();if(bt(n))l=u.updateFullNode(a.getNode(),r,null);else if(u.filtersNodes()&&!a.isFiltered()){const e=a.getNode().updateChild(n,r);l=u.updateFullNode(a.getNode(),e,null)}else{const e=ht(n);if(!a.isCompleteForPath(n)&&dt(n)>1)return t;const i=ft(n),o=a.getNode().getImmediateChild(e),s=o.updateChild(i,r);l=".priority"===e?u.updatePriority(a.getNode(),s):u.updateChild(a.getNode(),e,s,i,Xr,null)}const h=ur(t,l,a.isFullyInitialized()||bt(n),u.filtersNodes()),d=new Zr(i,h,o);return ii(e,h,n,i,d,c)}function si(e,t,n,r,i,o,s){const c=t.eventCache;let a,l;const u=new Zr(i,t,o);if(bt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,s),a=lr(t,l,!0,e.filter.filtersNodes());else{const i=ht(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),a=lr(t,l,c.isFullyInitialized(),c.isFiltered());else{const o=ft(n),l=c.getNode().getImmediateChild(i);let h;if(bt(o))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===pt(o)&&e.getChild(mt(o)).isEmpty()?e:e.updateChild(o,r):_n.EMPTY_NODE}if(l.equals(h))a=t;else{const n=e.filter.updateChild(c.getNode(),i,h,o,u,s);a=lr(t,n,c.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function ci(e,t){return e.eventCache.isCompleteForChild(t)}function ai(e,t,n,r,i,o,s){let c=t;return r.foreach((r,a)=>{const l=vt(n,r);ci(t,ht(l))&&(c=si(e,c,l,a,i,o,s))}),r.foreach((r,a)=>{const l=vt(n,r);ci(t,ht(l))||(c=si(e,c,l,a,i,o,s))}),c}function li(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function ui(e,t,n,r,i,o,s,c){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let a,l=t;a=bt(n)?r:new _r(null).setTree(n,r);const u=t.serverCache.getNode();return a.children.inorderTraversal((n,r)=>{if(u.hasChild(n)){const a=t.serverCache.getNode().getImmediateChild(n),u=li(e,a,r);l=oi(e,l,new lt(n),u,i,o,s,c)}}),a.children.inorderTraversal((n,r)=>{const a=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!a){const a=t.serverCache.getNode().getImmediateChild(n),u=li(e,a,r);l=oi(e,l,new lt(n),u,i,o,s,c)}}),l}function hi(e,t,n,r,i,o,s){if(null!=Hr(i,n))return t;const c=t.serverCache.isFiltered(),a=t.serverCache;if(null!=r.value){if(bt(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return oi(e,t,n,a.getNode().getChild(n),i,o,c,s);if(bt(n)){let r=new _r(null);return a.getNode().forEachChild(zt,(e,t)=>{r=r.set(new lt(e),t)}),ui(e,t,n,r,i,o,c,s)}return t}{let l=new _r(null);return r.foreach((e,t)=>{const r=vt(n,e);a.isCompleteForPath(r)&&(l=l.set(e,a.getNode().getChild(r)))}),ui(e,t,n,l,i,o,c,s)}}function di(e,t,n,r,i){const o=t.serverCache,s=ur(t,o.getNode(),o.isFullyInitialized()||bt(n),o.isFiltered());return ii(e,s,n,r,Xr,i)}function fi(e,t,n,r,i,s){let c;if(null!=Hr(r,n))return t;{const a=new Zr(r,t,i),l=t.eventCache.getNode();let u;if(bt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=zr(r,dr(t));else{const e=t.serverCache.getNode();Object(o["d"])(e instanceof _n,"serverChildren would be complete if leaf node"),n=Br(r,e)}n=n,u=e.filter.updateFullNode(l,n,s)}else{const i=ht(n);let o=Gr(r,i,t.serverCache);null==o&&t.serverCache.isCompleteForChild(i)&&(o=l.getImmediateChild(i)),u=null!=o?e.filter.updateChild(l,i,o,ft(n),a,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,_n.EMPTY_NODE,ft(n),a,s):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(c=zr(r,dr(t)),c.isLeafNode()&&(u=e.filter.updateFullNode(u,c,s)))}return c=t.serverCache.isFullyInitialized()||null!=Hr(r,ut()),lr(t,u,c,e.filter.filtersNodes())}}
/**
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
 */class pi{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new In(n.getIndex()),i=An(n);this.processor_=ei(i);const o=t.serverCache,s=t.eventCache,c=r.updateFullNode(_n.EMPTY_NODE,o.getNode(),null),a=i.updateFullNode(_n.EMPTY_NODE,s.getNode(),null),l=new nr(c,o.isFullyInitialized(),r.filtersNodes()),u=new nr(a,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=ar(u,l),this.eventGenerator_=new rr(this.query_)}get query(){return this.query_}}function _i(e){return e.viewCache_.serverCache.getNode()}function gi(e,t){const n=dr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!bt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function mi(e){return 0===e.eventRegistrations_.length}function vi(e,t){e.eventRegistrations_.push(t)}function bi(e,t,n){const r=[];if(n){Object(o["d"])(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)})}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function yi(e,t,n,r){t.type===Yn.MERGE&&null!==t.source.queryId&&(Object(o["d"])(dr(e.viewCache_),"We should always have a full cache before handling merges"),Object(o["d"])(hr(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=ni(e.processor_,i,t,n,r);return ti(e.processor_,s.viewCache),Object(o["d"])(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Ci(e,s.changes,s.viewCache.eventCache.getNode(),null)}function wi(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(cn,(e,t)=>{r.push(Tn(e,t))})}return n.isFullyInitialized()&&r.push(xn(n.getNode())),Ci(e,r,n.getNode(),t)}function Ci(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return ir(e.eventGenerator_,t,n,i)}
/**
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
 */let Oi,Ei;class xi{constructor(){this.views=new Map}}function Ti(e){Object(o["d"])(!Oi,"__referenceConstructor has already been defined"),Oi=e}function Si(){return Object(o["d"])(Oi,"Reference.ts has not been loaded"),Oi}function ji(e){return 0===e.views.size}function ki(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return Object(o["d"])(null!=s,"SyncTree gave us an op for an invalid query."),yi(s,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(yi(o,t,n,r));return i}}function Ii(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=zr(n,i?r:null),o=!1;e?o=!0:r instanceof _n?(e=Br(n,r),o=!1):(e=_n.EMPTY_NODE,o=!1);const s=ar(new nr(e,o,!1),new nr(r,i,!1));return new pi(t,s)}return s}function Ni(e,t,n,r,i,o){const s=Ii(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),vi(s,n),wi(s,n)}function Pi(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const c=Mi(e);if("default"===i)for(const[a,l]of e.views.entries())s=s.concat(bi(l,n,r)),mi(l)&&(e.views.delete(a),l.query._queryParams.loadsAllData()||o.push(l.query));else{const t=e.views.get(i);t&&(s=s.concat(bi(t,n,r)),mi(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return c&&!Mi(e)&&o.push(new(Si())(t._repo,t._path)),{removed:o,events:s}}function Ri(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Ai(e,t){let n=null;for(const r of e.views.values())n=n||gi(r,t);return n}function Di(e,t){const n=t._queryParams;if(n.loadsAllData())return Li(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Fi(e,t){return null!=Di(e,t)}function Mi(e){return null!=Li(e)}function Li(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
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
 */function qi(e){Object(o["d"])(!Ei,"__referenceConstructor has already been defined"),Ei=e}function Ui(){return Object(o["d"])(Ei,"Reference.ts has not been loaded"),Ei}let Wi=1;class zi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _r(null),this.pendingWriteTree_=Wr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Bi(e,t,n,r,i){return jr(e.pendingWriteTree_,t,n,r,i),i?eo(e,new er(Kn(),t,n)):[]}function Vi(e,t,n=!1){const r=kr(e.pendingWriteTree_,t),i=Ir(e.pendingWriteTree_,t);if(i){let t=new _r(null);return null!=r.snap?t=t.set(ut(),!0):L(r.children,e=>{t=t.set(new lt(e),!0)}),eo(e,new Xn(r.path,t,n))}return[]}function Hi(e,t,n){return eo(e,new er(Qn(),t,n))}function $i(e,t,n){const r=_r.fromObject(n);return eo(e,new tr(Qn(),t,r))}function Gi(e,t){return eo(e,new Zn(Qn(),t))}function Yi(e,t,n){const r=so(e,n);if(r){const n=co(r),i=n.path,o=n.queryId,s=yt(i,t),c=new Zn(Jn(o),s);return ao(e,i,c)}return[]}function Ki(e,t,n,r){const i=t._path,o=e.syncPointTree_.get(i);let s=[];if(o&&("default"===t._queryIdentifier||Fi(o,t))){const c=Pi(o,t,n,r);ji(o)&&(e.syncPointTree_=e.syncPointTree_.remove(i));const a=c.removed;s=c.events;const l=-1!==a.findIndex(e=>e._queryParams.loadsAllData()),u=e.syncPointTree_.findOnPath(i,(e,t)=>Mi(t));if(l&&!u){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=lo(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=ro(e,r);e.listenProvider_.startListening(uo(i),io(e,i),o.hashFn,o.onComplete)}}}if(!u&&a.length>0&&!r)if(l){const n=null;e.listenProvider_.stopListening(uo(t),n)}else a.forEach(t=>{const n=e.queryToTagMap.get(oo(t));e.listenProvider_.stopListening(uo(t),n)});ho(e,a)}return s}function Qi(e,t,n,r){const i=so(e,r);if(null!=i){const r=co(i),o=r.path,s=r.queryId,c=yt(o,t),a=new er(Jn(s),c,n);return ao(e,o,a)}return[]}function Ji(e,t,n,r){const i=so(e,r);if(i){const r=co(i),o=r.path,s=r.queryId,c=yt(o,t),a=_r.fromObject(n),l=new tr(Jn(s),c,a);return ao(e,o,l)}return[]}function Xi(e,t,n){const r=t._path;let i=null,s=!1;e.syncPointTree_.foreachOnPath(r,(e,t)=>{const n=yt(e,r);i=i||Ai(t,n),s=s||Mi(t)});let c,a=e.syncPointTree_.get(r);if(a?(s=s||Mi(a),i=i||Ai(a,ut())):(a=new xi,e.syncPointTree_=e.syncPointTree_.set(r,a)),null!=i)c=!0;else{c=!1,i=_n.EMPTY_NODE;const t=e.syncPointTree_.subtree(r);t.foreachChild((e,t)=>{const n=Ai(t,ut());n&&(i=i.updateImmediateChild(e,n))})}const l=Fi(a,t);if(!l&&!t._queryParams.loadsAllData()){const n=oo(t);Object(o["d"])(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=fo();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const u=Sr(e.pendingWriteTree_,r);let h=Ni(a,t,n,u,i,c);if(!l&&!s){const n=Di(a,t);h=h.concat(po(e,t,n))}return h}function Zi(e,t,n){const r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,(e,n)=>{const r=yt(e,t),i=Ai(n,r);if(i)return i});return Dr(i,t,o,n,r)}function eo(e,t){return to(t,e.syncPointTree_,null,Sr(e.pendingWriteTree_,ut()))}function to(e,t,n,r){if(bt(e.path))return no(e,t,n,r);{const i=t.get(ut());null==n&&null!=i&&(n=Ai(i,ut()));let o=[];const s=ht(e.path),c=e.operationForChild(s),a=t.children.get(s);if(a&&c){const e=n?n.getImmediateChild(s):null,t=Yr(r,s);o=o.concat(to(c,a,e,t))}return i&&(o=o.concat(ki(i,e,r,n))),o}}function no(e,t,n,r){const i=t.get(ut());null==n&&null!=i&&(n=Ai(i,ut()));let o=[];return t.children.inorderTraversal((t,i)=>{const s=n?n.getImmediateChild(t):null,c=Yr(r,t),a=e.operationForChild(t);a&&(o=o.concat(no(a,i,s,c)))}),i&&(o=o.concat(ki(i,e,r,n))),o}function ro(e,t){const n=t.query,r=io(e,n);return{hashFn:()=>{const e=_i(t)||_n.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?Yi(e,n._path,r):Gi(e,n._path);{const r=z(t,n);return Ki(e,n,null,r)}}}}function io(e,t){const n=oo(t);return e.queryToTagMap.get(n)}function oo(e){return e._path.toString()+"$"+e._queryIdentifier}function so(e,t){return e.tagToQueryMap.get(t)}function co(e){const t=e.indexOf("$");return Object(o["d"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function ao(e,t,n){const r=e.syncPointTree_.get(t);Object(o["d"])(r,"Missing sync point for query tag that we're tracking");const i=Sr(e.pendingWriteTree_,t);return ki(r,n,i,null)}function lo(e){return e.fold((e,t,n)=>{if(t&&Mi(t)){const e=Li(t);return[e]}{let e=[];return t&&(e=Ri(t)),L(n,(t,n)=>{e=e.concat(n)}),e}})}function uo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Ui())(e._repo,e._path):e}function ho(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=oo(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function fo(){return Wi++}function po(e,t,n){const r=t._path,i=io(e,t),s=ro(e,n),c=e.listenProvider_.startListening(uo(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)Object(o["d"])(!Mi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold((e,t,n)=>{if(!bt(e)&&t&&Mi(t))return[Li(t).query];{let e=[];return t&&(e=e.concat(Ri(t).map(e=>e.query))),L(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(uo(r),io(e,r))}}return c}
/**
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
 */class _o{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new _o(t)}node(){return this.node_}}class go{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new go(this.syncTree_,t)}node(){return Zi(this.syncTree_,this.path_)}}const mo=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},vo=function(e,t,n){return e&&"object"===typeof e?(Object(o["d"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?bo(e[".sv"],t,n):"object"===typeof e[".sv"]?yo(e[".sv"],t):void Object(o["d"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},bo=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(o["d"])(!1,"Unexpected server value: "+e)}},yo=function(e,t,n){e.hasOwnProperty("increment")||Object(o["d"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&Object(o["d"])(!1,"Unexpected increment value: "+r);const i=t.node();if(Object(o["d"])(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,c=s.getValue();return"number"!==typeof c?r:c+r},wo=function(e,t,n,r){return Oo(t,new go(n,e),r)},Co=function(e,t,n){return Oo(e,new _o(t),n)};function Oo(e,t,n){const r=e.getPriority().val(),i=vo(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=vo(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new nn(o,bn(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new nn(i))),r.forEachChild(cn,(e,r)=>{const i=Oo(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))}),o}}
/**
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
 */class Eo{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function xo(e,t){let n=t instanceof lt?t:new lt(t),r=e,i=ht(n);while(null!==i){const e=Object(o["w"])(r.node.children,i)||{children:{},childCount:0};r=new Eo(i,r,e),n=ft(n),i=ht(n)}return r}function To(e){return e.node.value}function So(e,t){e.node.value=t,Ao(e)}function jo(e){return e.node.childCount>0}function ko(e){return void 0===To(e)&&!jo(e)}function Io(e,t){L(e.node.children,(n,r)=>{t(new Eo(n,e,r))})}function No(e,t,n,r){n&&!r&&t(e),Io(e,e=>{No(e,t,!0,r)}),n&&r&&t(e)}function Po(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Ro(e){return new lt(null===e.parent?e.name:Ro(e.parent)+"/"+e.name)}function Ao(e){null!==e.parent&&Do(e.parent,e.name,e)}function Do(e,t,n){const r=ko(n),i=Object(o["h"])(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Ao(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Ao(e))}
/**
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
 */const Fo=/[\[\].#$\/\u0000-\u001F\u007F]/,Mo=/[\[\].#$\u0000-\u001F\u007F]/,Lo=10485760,qo=function(e){return"string"===typeof e&&0!==e.length&&!Fo.test(e)},Uo=function(e){return"string"===typeof e&&0!==e.length&&!Mo.test(e)},Wo=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Uo(e)},zo=function(e,t,n,r){r&&void 0===t||Bo(Object(o["l"])(e,"value"),t,n)},Bo=function(e,t,n){const r=n instanceof lt?new Ot(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+St(r));if("function"===typeof t)throw new Error(e+"contains a function "+St(r)+" with contents = "+t.toString());if(k(t))throw new Error(e+"contains "+t.toString()+" "+St(r));if("string"===typeof t&&t.length>Lo/3&&Object(o["x"])(t)>Lo)throw new Error(e+"contains a string greater than "+Lo+" utf8 bytes "+St(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(L(t,(t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!qo(t)))throw new Error(e+" contains an invalid key ("+t+") "+St(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Et(r,t),Bo(e,o,r),xt(r)}),n&&i)throw new Error(e+' contains ".value" child '+St(r)+" in addition to actual children.")}},Vo=function(e,t,n,r){if((!r||void 0!==n)&&!Uo(n))throw new Error(Object(o["l"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ho=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Vo(e,t,n,r)},$o=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},Go=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!qo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Wo(n))throw new Error(Object(o["l"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class Yo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ko(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||wt(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function Qo(e,t,n){Ko(e,n),Xo(e,e=>wt(e,t))}function Jo(e,t,n){Ko(e,n),Xo(e,e=>Ct(e,t)||Ct(t,e))}function Xo(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(Zo(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Zo(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();y&&O("event: "+n.toString()),G(r)}}}
/**
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
 */const es="repo_interrupt",ts=25;class ns{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qn(),this.transactionQueueTree_=new Eo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rs(e,t,n){if(e.stats_=ge(e.repoInfo_),e.forceRestClient_||Y())e.server_=new Mn(e.repoInfo_,(t,n,r,i)=>{ss(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>cs(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(o["z"])(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Mt(e.repoInfo_,t,(t,n,r,i)=>{ss(e,t,n,r,i)},t=>{cs(e,t)},t=>{as(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=me(e.repoInfo_,()=>new Gn(e.stats_,e.server_)),e.infoData_=new Ln,e.infoSyncTree_=new zi({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=Hi(e.infoSyncTree_,t._path,s),setTimeout(()=>{i("ok")},0)),o},stopListening:()=>{}}),ls(e,"connected",!1),e.serverSyncTree_=new zi({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{const o=i(n,r);Jo(e.eventQueue_,t._path,o)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function is(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function os(e){return mo({timestamp:is(e)})}function ss(e,t,n,r,i){e.dataUpdateCount++;const s=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let c=[];if(i)if(r){const t=Object(o["u"])(n,e=>bn(e));c=Ji(e.serverSyncTree_,s,t,i)}else{const t=bn(n);c=Qi(e.serverSyncTree_,s,t,i)}else if(r){const t=Object(o["u"])(n,e=>bn(e));c=$i(e.serverSyncTree_,s,t)}else{const t=bn(n);c=Hi(e.serverSyncTree_,s,t)}let a=s;c.length>0&&(a=ws(e,s)),Jo(e.eventQueue_,a,c)}function cs(e,t){ls(e,"connected",t),!1===t&&ds(e)}function as(e,t){L(t,(t,n)=>{ls(e,t,n)})}function ls(e,t,n){const r=new lt("/.info/"+t),i=bn(n);e.infoData_.updateSnapshot(r,i);const o=Hi(e.infoSyncTree_,r,i);Jo(e.eventQueue_,r,o)}function us(e){return e.nextWriteId_++}function hs(e,t,n,r,i){gs(e,"set",{path:t.toString(),value:n,priority:r});const o=os(e),s=bn(n,r),c=Zi(e.serverSyncTree_,t),a=Co(s,c,o),l=us(e),u=Bi(e.serverSyncTree_,t,a,l,!0);Ko(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),(n,r)=>{const o="ok"===n;o||S("set at "+t+" failed: "+n);const s=Vi(e.serverSyncTree_,l,!o);Jo(e.eventQueue_,t,s),ms(e,i,n,r)});const h=Ss(e,t);ws(e,h),Jo(e.eventQueue_,h,[])}function ds(e){gs(e,"onDisconnectEvents");const t=os(e),n=qn();Wn(e.onDisconnect_,ut(),(r,i)=>{const o=wo(r,i,e.serverSyncTree_,t);Un(n,r,o)});let r=[];Wn(n,ut(),(t,n)=>{r=r.concat(Hi(e.serverSyncTree_,t,n));const i=Ss(e,t);ws(e,i)}),e.onDisconnect_=qn(),Jo(e.eventQueue_,ut(),r)}function fs(e,t,n){let r;r=".info"===ht(t._path)?Xi(e.infoSyncTree_,t,n):Xi(e.serverSyncTree_,t,n),Qo(e.eventQueue_,t._path,r)}function ps(e,t,n){let r;r=".info"===ht(t._path)?Ki(e.infoSyncTree_,t,n):Ki(e.serverSyncTree_,t,n),Qo(e.eventQueue_,t._path,r)}function _s(e){e.persistentConnection_&&e.persistentConnection_.interrupt(es)}function gs(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),O(n,...t)}function ms(e,t,n,r){t&&G(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}})}function vs(e,t,n){return Zi(e.serverSyncTree_,t,n)||_n.EMPTY_NODE}function bs(e,t=e.transactionQueueTree_){if(t||Ts(e,t),To(t)){const n=Es(e,t);Object(o["d"])(n.length>0,"Sending zero length transaction queue");const r=n.every(e=>0===e.status);r&&ys(e,Ro(t),n)}else jo(t)&&Io(t,t=>{bs(e,t)})}function ys(e,t,n){const r=n.map(e=>e.currentWriteId),i=vs(e,t,r);let s=i;const c=i.hash();for(let u=0;u<n.length;u++){const e=n[u];Object(o["d"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=yt(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,r=>{gs(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Vi(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();Ts(e,xo(e.transactionQueueTree_,t)),bs(e,e.transactionQueueTree_),Jo(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)G(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{S("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}ws(e,t)}},c)}function ws(e,t){const n=Os(e,t),r=Ro(n),i=Es(e,n);return Cs(e,i,r),r}function Cs(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter(e=>0===e.status),c=s.map(e=>e.currentWriteId);for(let a=0;a<t.length;a++){const s=t[a],l=yt(n,s.path);let u,h=!1;if(Object(o["d"])(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,u=s.abortReason,i=i.concat(Vi(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=ts)h=!0,u="maxretry",i=i.concat(Vi(e.serverSyncTree_,s.currentWriteId,!0));else{const n=vs(e,s.path,c);s.currentInputSnapshot=n;const r=t[a].update(n.val());if(void 0!==r){Bo("transaction failed: Data returned ",r,s.path);let t=bn(r);const a="object"===typeof r&&null!=r&&Object(o["h"])(r,".priority");a||(t=t.updatePriority(n.getPriority()));const l=s.currentWriteId,u=os(e),h=Co(t,n,u);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=h,s.currentWriteId=us(e),c.splice(c.indexOf(l),1),i=i.concat(Bi(e.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(Vi(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",i=i.concat(Vi(e.serverSyncTree_,s.currentWriteId,!0))}Jo(e.eventQueue_,n,i),i=[],h&&(t[a].status=2,function(e){setTimeout(e,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&("nodata"===u?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(new Error(u),!1,null))))}Ts(e,e.transactionQueueTree_);for(let o=0;o<r.length;o++)G(r[o]);bs(e,e.transactionQueueTree_)}function Os(e,t){let n,r=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===To(r))r=xo(r,n),t=ft(t),n=ht(t);return r}function Es(e,t){const n=[];return xs(e,t,n),n.sort((e,t)=>e.order-t.order),n}function xs(e,t,n){const r=To(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Io(t,t=>{xs(e,t,n)})}function Ts(e,t){const n=To(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,So(t,n.length>0?n:void 0)}Io(t,t=>{Ts(e,t)})}function Ss(e,t){const n=Ro(Os(e,t)),r=xo(e.transactionQueueTree_,t);return Po(r,t=>{js(e,t)}),js(e,r),No(r,t=>{js(e,t)}),n}function js(e,t){const n=To(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(o["d"])(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Object(o["d"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Vi(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?So(t,void 0):n.length=s+1,Jo(e.eventQueue_,Ro(t),i);for(let e=0;e<r.length;e++)G(r[e])}}
/**
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
 */function ks(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function Is(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):S(`Invalid query segment '${n}' in query '${e}'`)}return t}const Ns=function(e,t){const n=Ps(e),r=n.namespace;"firebase.com"===n.domain&&T(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||T("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||j();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new lt(n.pathString)}},Ps=function(e){let t="",n="",r="",i="",o="",s=!0,c="https",a=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(c=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=ks(e.substring(u,h)));const d=Is(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(s="https"===c||"wss"===c,a=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d["ns"])}return{host:t,port:a,domain:n,subdomain:r,secure:s,scheme:c,pathString:i,namespace:o}};
/**
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
 */
class Rs{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(o["z"])(this.snapshot.exportVal())}}class As{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
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
 */class Ds{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(o["d"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
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
 */
/**
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
 */
class Fs{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return bt(this._path)?null:pt(this._path)}get ref(){return new Ms(this._repo,this._path)}get _queryIdentifier(){const e=Fn(this._queryParams),t=F(e);return"{}"===t?"default":t}get _queryObject(){return Fn(this._queryParams)}isEqual(e){if(e=Object(o["m"])(e),!(e instanceof Fs))return!1;const t=this._repo===e._repo,n=wt(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+_t(this._path)}}class Ms extends Fs{constructor(e,t){super(e,t,new Rn,!1)}get parent(){const e=mt(this._path);return null===e?null:new Ms(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Ls{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=Us(this.ref,e);return new Ls(this._node.getChild(t),n,cn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new Ls(n,Us(this.ref,t),cn)))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function qs(e,t){return e=Object(o["m"])(e),e._checkNotDeleted("ref"),void 0!==t?Us(e._root,t):e._root}function Us(e,t){return e=Object(o["m"])(e),null===ht(e._path)?Ho("child","path",t,!1):Vo("child","path",t,!1),new Ms(e._repo,vt(e._path,t))}function Ws(e,t){e=Object(o["m"])(e),$o("push",e._path),zo("push",t,e._path,!0);const n=is(e._repo),r=En(n),i=Us(e,r),s=Us(e,r);let c;return c=null!=t?Bs(s,t).then(()=>s):Promise.resolve(s),i.then=c.then.bind(c),i.catch=c.then.bind(c,void 0),i}function zs(e){return $o("remove",e._path),Bs(e,null)}function Bs(e,t){e=Object(o["m"])(e),$o("set",e._path),zo("set",t,e._path,!1);const n=new o["a"];return hs(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}class Vs{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Rs("value",this,new Ls(e.snapshotNode,new Ms(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new As(this,e,t):null}matches(e){return e instanceof Vs&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Hs{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new As(this,e,t):null}createEvent(e,t){Object(o["d"])(null!=e.childName,"Child events should have a childName.");const n=Us(new Ms(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Rs(e.type,this,new Ls(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Hs&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function $s(e,t,n,r,i){let o;if("object"===typeof r&&(o=void 0,i=r),"function"===typeof r&&(o=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{ps(e._repo,e,c),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const s=new Ds(n,o||void 0),c="value"===t?new Vs(s):new Hs(t,s);return fs(e._repo,e,c),()=>ps(e._repo,e,c)}function Gs(e,t,n,r){return $s(e,"value",t,n,r)}Ti(Ms),qi(Ms);
/**
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
 */
const Ys="FIREBASE_DATABASE_EMULATOR_HOST",Ks={};let Qs=!1;function Js(t,n,r,i,o){let s=i||t.options.databaseURL;void 0===s&&(t.options.projectId||T("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),O("Using default host for project ",t.options.projectId),s=t.options.projectId+"-default-rtdb.firebaseio.com");let c,a=Ns(s,o),l=a.repoInfo,u=void 0;"undefined"!==typeof e&&(u=Object({NODE_ENV:"production",BASE_URL:"/"})[Ys]),u?(c=!0,s=`http://${u}?ns=${l.namespace}`,a=Ns(s,o),l=a.repoInfo):c=!a.repoInfo.secure;const h=o&&c?new X(X.OWNER):new J(t.name,t.options,n);Go("Invalid Firebase Database URL",a),bt(a.path)||T("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Zs(l,t,h,new Q(t.name,r));return new ec(d,t)}function Xs(e,t){const n=Ks[t];n&&n[e.key]===e||T(`Database ${t}(${e.repoInfo_}) has already been deleted.`),_s(e),delete n[e.key]}function Zs(e,t,n,r){let i=Ks[t.name];i||(i={},Ks[t.name]=i);let o=i[e.toURLString()];return o&&T("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new ns(e,Qs,n,r),i[e.toURLString()]=o,o}class ec{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rs(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ms(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Xs(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&T("Cannot call "+e+" on a deleted database.")}}function tc(e=Object(r["d"])(),t){return Object(r["b"])(e,"database").getImmediate({identifier:t})}
/**
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
 */
function nc(e){u(r["a"]),Object(r["c"])(new i["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Js(n,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Object(r["f"])(c,a,e),Object(r["f"])(c,a,"esm2017")}
/**
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
 */Mt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Mt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};nc()}).call(this,n("4362"))},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.19.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),i=n("e330"),o=n("241c"),s=n("7418"),c=n("825a"),a=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(c(e)),n=s.f;return n?a(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),i=n("f5df"),o=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return $})),n.d(t,"b",(function(){return z})),n.d(t,"c",(function(){return W})),n.d(t,"d",(function(){return Y})),n.d(t,"e",(function(){return G})),n.d(t,"f",(function(){return K}));var r=n("22e5"),i=n("e691"),o=n("1fd5");
/**
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
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(c(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function c(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const a="@firebase/app",l="0.7.8",u=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",_="@firebase/app-check",g="@firebase/auth",m="@firebase/auth-compat",v="@firebase/database",b="@firebase/database-compat",y="@firebase/functions",w="@firebase/functions-compat",C="@firebase/installations",O="@firebase/installations-compat",E="@firebase/messaging",x="@firebase/messaging-compat",T="@firebase/performance",S="@firebase/performance-compat",j="@firebase/remote-config",k="@firebase/remote-config-compat",I="@firebase/storage",N="@firebase/storage-compat",P="@firebase/firestore",R="@firebase/firestore-compat",A="firebase",D="9.4.1",F="[DEFAULT]",M={[a]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[_]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[m]:"fire-auth-compat",[v]:"fire-rtdb",[b]:"fire-rtdb-compat",[y]:"fire-fn",[w]:"fire-fn-compat",[C]:"fire-iid",[O]:"fire-iid-compat",[E]:"fire-fcm",[x]:"fire-fcm-compat",[T]:"fire-perf",[S]:"fire-perf-compat",[j]:"fire-rc",[k]:"fire-rc-compat",[I]:"fire-gcs",[N]:"fire-gcs-compat",[P]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[A]:"fire-js-all"},L=new Map,q=new Map;function U(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function W(e){const t=e.name;if(q.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;q.set(t,e);for(const n of L.values())U(n,e);return!0}function z(e,t){return e.container.getProvider(t)}
/**
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
 */
const B={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},V=new o["b"]("app","Firebase",B);
/**
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
 */
class H{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw V.create("app-deleted",{appName:this._name})}}
/**
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
 */const $=D;function G(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:F,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw V.create("bad-app-name",{appName:String(i)});const s=L.get(i);if(s){if(Object(o["k"])(e,s.options)&&Object(o["k"])(n,s.config))return s;throw V.create("duplicate-app",{appName:i})}const c=new r["b"](i);for(const r of q.values())c.addComponent(r);const a=new H(e,n,c);return L.set(i,a),a}function Y(e=F){const t=L.get(e);if(!t)throw V.create("no-app",{appName:e});return t}function K(e,t,n){var i;let o=null!==(i=M[e])&&void 0!==i?i:e;n&&(o+="-"+n);const s=o.match(/\s|\//),c=t.match(/\s|\//);if(s||c){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&c&&e.push("and"),c&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}W(new r["a"](o+"-version",()=>({library:o,version:t}),"VERSION"))}
/**
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
 */
function Q(e){W(new r["a"]("platform-logger",e=>new s(e),"PRIVATE")),K(a,l,e),K(a,l,"esm2017"),K("fire-js","")}Q("")},"58a8":function(e,t,n){var r=n("e330"),i=n("1d80"),o=n("577e"),s=n("5899"),c=r("".replace),a="["+s+"]",l=RegExp("^"+a+a+"*"),u=RegExp(a+a+"*$"),h=function(e){return function(t){var n=o(i(t));return 1&e&&(n=c(n,l,"")),2&e&&(n=c(n,u,"")),n}};e.exports={start:h(1),end:h(2),trim:h(3)}},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},"59ed":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,c=i(o,"name"),a=c&&"something"===function(){}.name,l=c&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:c,PROPER:a,CONFIGURABLE:l}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("e330"),o=n("c65b"),s=n("d039"),c=n("df75"),a=n("7418"),l=n("d1e7"),u=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!d||s((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||c(d({},t)).join("")!=i}))?function(e,t){var n=u(e),i=arguments.length,s=1,d=a.f,f=l.f;while(i>s){var _,g=h(arguments[s++]),m=d?p(c(g),d(g)):c(g),v=m.length,b=0;while(v>b)_=m[b++],r&&!o(f,g,_)||(n[_]=g[_])}return n}:d},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"66ce":function(e,t,n){"use strict";var r=n("51b0");n.d(t,"a",(function(){return r["a"]})),n.d(t,"b",(function(){return r["b"]})),n.d(t,"c",(function(){return r["d"]}))},"68ee":function(e,t,n){var r=n("e330"),i=n("d039"),o=n("1626"),s=n("f5df"),c=n("d066"),a=n("8925"),l=function(){},u=[],h=c("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(l),_=function(e){if(!o(e))return!1;try{return h(l,u,e),!0}catch(t){return!1}},g=function(e){if(!o(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return p||!!f(d,a(e))};e.exports=!h||i((function(){var e;return _(_.call)||!_(Object)||!_((function(){e=!0}))||e}))?g:_},"69f3":function(e,t,n){var r,i,o,s=n("7f9a"),c=n("da84"),a=n("e330"),l=n("861d"),u=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),_="Object already initialized",g=c.TypeError,m=c.WeakMap,v=function(e){return o(e)?i(e):r(e,{})},b=function(e){return function(t){var n;if(!l(t)||(n=i(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var y=d.state||(d.state=new m),w=a(y.get),C=a(y.has),O=a(y.set);r=function(e,t){if(C(y,e))throw new g(_);return t.facade=e,O(y,e,t),t},i=function(e){return w(y,e)||{}},o=function(e){return C(y,e)}}else{var E=f("state");p[E]=!0,r=function(e,t){if(h(e,E))throw new g(_);return t.facade=e,u(e,E,t),t},i=function(e){return h(e,E)?e[E]:{}},o=function(e){return h(e,E)}}e.exports={set:r,get:i,has:o,enforce:v,getterFor:b}},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),s=n("9112"),c=n("ce4e"),a=n("8925"),l=n("69f3"),u=n("5e77").CONFIGURABLE,h=l.get,d=l.enforce,f=String(String).split("String");(e.exports=function(e,t,n,a){var l,h=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,_=!!a&&!!a.noTargetGet,g=a&&void 0!==a.name?a.name:t;i(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||u&&n.name!==g)&&s(n,"name",g),l=d(n),l.source||(l.source=f.join("string"==typeof g?g:""))),e!==r?(h?!_&&e[t]&&(p=!0):delete e[t],p?e[t]=n:s(e,t,n)):p?e[t]=n:c(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||a(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"746f":function(e,t,n){var r=n("428f"),i=n("1a2d"),o=n("e538"),s=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||s(t,e,{value:o.f(e)})}},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7a23":function(e,t,n){"use strict";n.d(t,"c",(function(){return Ve})),n.d(t,"q",(function(){return Me})),n.d(t,"l",(function(){return r["I"]})),n.d(t,"u",(function(){return r["L"]})),n.d(t,"a",(function(){return Vn})),n.d(t,"b",(function(){return Ln})),n.d(t,"e",(function(){return nr})),n.d(t,"f",(function(){return pr})),n.d(t,"g",(function(){return tr})),n.d(t,"h",(function(){return ar})),n.d(t,"i",(function(){return fr})),n.d(t,"j",(function(){return lr})),n.d(t,"k",(function(){return yt})),n.d(t,"m",(function(){return Rt})),n.d(t,"n",(function(){return Qn})),n.d(t,"o",(function(){return Xe})),n.d(t,"p",(function(){return Je})),n.d(t,"r",(function(){return br})),n.d(t,"s",(function(){return yr})),n.d(t,"t",(function(){return Un})),n.d(t,"v",(function(){return Ze})),n.d(t,"d",(function(){return ko})),n.d(t,"w",(function(){return xo}));var r=n("9ff4");let i;const o=[];class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(o.push(this),i=this)}off(){this.active&&(o.pop(),i=o[o.length-1])}stop(e){if(this.active){if(this.effects.forEach(e=>e.stop()),this.cleanups.forEach(e=>e()),this.scopes&&this.scopes.forEach(e=>e.stop(!0)),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function c(e,t){t=t||i,t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&_)>0,u=e=>(e.n&_)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=_},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];l(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~_,i.n&=~_}t.length=n}},f=new WeakMap;let p=0,_=1;const g=30,m=[];let v;const b=Symbol(""),y=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],c(this,n)}run(){if(!this.active)return this.fn();if(!m.includes(this))try{return m.push(v=this),T(),_=1<<++p,p<=g?h(this):C(this),this.fn()}finally{p<=g&&d(this),_=1<<--p,S(),m.pop();const e=m.length;v=e>0?m[e-1]:void 0}}stop(){this.active&&(C(this),this.onStop&&this.onStop(),this.active=!1)}}function C(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let O=!0;const E=[];function x(){E.push(O),O=!1}function T(){E.push(O),O=!0}function S(){const e=E.pop();O=void 0===e||e}function j(e,t,n){if(!k())return;let r=f.get(e);r||f.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=a());const o=void 0;I(i,o)}function k(){return O&&void 0!==v}function I(e,t){let n=!1;p<=g?u(e)||(e.n|=_,n=!l(e)):n=!e.has(v),n&&(e.add(v),v.deps.push(e))}function N(e,t,n,i,o,s){const c=f.get(e);if(!c)return;let l=[];if("clear"===t)l=[...c.values()];else if("length"===n&&Object(r["o"])(e))c.forEach((e,t)=>{("length"===t||t>=i)&&l.push(e)});else switch(void 0!==n&&l.push(c.get(n)),t){case"add":Object(r["o"])(e)?Object(r["s"])(n)&&l.push(c.get("length")):(l.push(c.get(b)),Object(r["t"])(e)&&l.push(c.get(y)));break;case"delete":Object(r["o"])(e)||(l.push(c.get(b)),Object(r["t"])(e)&&l.push(c.get(y)));break;case"set":Object(r["t"])(e)&&l.push(c.get(b));break}if(1===l.length)l[0]&&P(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);P(a(e))}}function P(e,t){for(const n of Object(r["o"])(e)?e:[...e])(n!==v||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const R=Object(r["H"])("__proto__,__v_isRef,__isVue"),A=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["E"])),D=U(),F=U(!1,!0),M=U(!0),L=q();function q(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Ie(this);for(let t=0,i=this.length;t<i;t++)j(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ie)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){x();const n=Ie(this)[t].apply(this,e);return S(),n}}),e}function U(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&o===(e?t?ye:be:t?ve:me).get(n))return n;const s=Object(r["o"])(n);if(!e&&s&&Object(r["k"])(L,i))return Reflect.get(L,i,o);const c=Reflect.get(n,i,o);if(Object(r["E"])(i)?A.has(i):R(i))return c;if(e||j(n,"get",i),t)return c;if(Fe(c)){const e=!s||!Object(r["s"])(i);return e?c.value:c}return Object(r["v"])(c)?e?xe(c):Oe(c):c}}const W=B(),z=B(!0);function B(e=!1){return function(t,n,i,o){let s=t[n];if(!e&&(i=Ie(i),s=Ie(s),!Object(r["o"])(t)&&Fe(s)&&!Fe(i)))return s.value=i,!0;const c=Object(r["o"])(t)&&Object(r["s"])(n)?Number(n)<t.length:Object(r["k"])(t,n),a=Reflect.set(t,n,i,o);return t===Ie(o)&&(c?Object(r["j"])(i,s)&&N(t,"set",n,i,s):N(t,"add",n,i)),a}}function V(e,t){const n=Object(r["k"])(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&N(e,"delete",t,void 0,i),o}function H(e,t){const n=Reflect.has(e,t);return Object(r["E"])(t)&&A.has(t)||j(e,"has",t),n}function $(e){return j(e,"iterate",Object(r["o"])(e)?"length":b),Reflect.ownKeys(e)}const G={get:D,set:W,deleteProperty:V,has:H,ownKeys:$},Y={get:M,set(e,t){return!0},deleteProperty(e,t){return!0}},K=Object(r["h"])({},G,{get:F,set:z}),Q=e=>e,J=e=>Reflect.getPrototypeOf(e);function X(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ie(e),o=Ie(t);t!==o&&!n&&j(i,"get",t),!n&&j(i,"get",o);const{has:s}=J(i),c=r?Q:n?Re:Pe;return s.call(i,t)?c(e.get(t)):s.call(i,o)?c(e.get(o)):void(e!==i&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],r=Ie(n),i=Ie(e);return e!==i&&!t&&j(r,"has",e),!t&&j(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function ee(e,t=!1){return e=e["__v_raw"],!t&&j(Ie(e),"iterate",b),Reflect.get(e,"size",e)}function te(e){e=Ie(e);const t=Ie(this),n=J(t),r=n.has.call(t,e);return r||(t.add(e),N(t,"add",e,e)),this}function ne(e,t){t=Ie(t);const n=Ie(this),{has:i,get:o}=J(n);let s=i.call(n,e);s||(e=Ie(e),s=i.call(n,e));const c=o.call(n,e);return n.set(e,t),s?Object(r["j"])(t,c)&&N(n,"set",e,t,c):N(n,"add",e,t),this}function re(e){const t=Ie(this),{has:n,get:r}=J(t);let i=n.call(t,e);i||(e=Ie(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&N(t,"delete",e,void 0,o),s}function ie(){const e=Ie(this),t=0!==e.size,n=void 0,r=e.clear();return t&&N(e,"clear",void 0,void 0,n),r}function oe(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Ie(o),c=t?Q:e?Re:Pe;return!e&&j(s,"iterate",b),o.forEach((e,t)=>n.call(r,c(e),c(t),i))}}function se(e,t,n){return function(...i){const o=this["__v_raw"],s=Ie(o),c=Object(r["t"])(s),a="entries"===e||e===Symbol.iterator&&c,l="keys"===e&&c,u=o[e](...i),h=n?Q:t?Re:Pe;return!t&&j(s,"iterate",l?y:b),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:a?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ce(e){return function(...t){return"delete"!==e&&this}}function ae(){const e={get(e){return X(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:oe(!1,!1)},t={get(e){return X(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:oe(!1,!0)},n={get(e){return X(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ce("add"),set:ce("set"),delete:ce("delete"),clear:ce("clear"),forEach:oe(!0,!1)},r={get(e){return X(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ce("add"),set:ce("set"),delete:ce("delete"),clear:ce("clear"),forEach:oe(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=se(i,!1,!1),n[i]=se(i,!0,!1),t[i]=se(i,!1,!0),r[i]=se(i,!0,!0)}),[e,n,t,r]}const[le,ue,he,de]=ae();function fe(e,t){const n=t?e?de:he:e?ue:le;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["k"])(n,i)&&i in t?n:t,i,o)}const pe={get:fe(!1,!1)},_e={get:fe(!1,!0)},ge={get:fe(!0,!1)};const me=new WeakMap,ve=new WeakMap,be=new WeakMap,ye=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ce(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we(Object(r["O"])(e))}function Oe(e){return e&&e["__v_isReadonly"]?e:Te(e,!1,G,pe,me)}function Ee(e){return Te(e,!1,K,_e,ve)}function xe(e){return Te(e,!0,Y,ge,be)}function Te(e,t,n,i,o){if(!Object(r["v"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const c=Ce(e);if(0===c)return e;const a=new Proxy(e,2===c?i:n);return o.set(e,a),a}function Se(e){return je(e)?Se(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function je(e){return!(!e||!e["__v_isReadonly"])}function ke(e){return Se(e)||je(e)}function Ie(e){const t=e&&e["__v_raw"];return t?Ie(t):e}function Ne(e){return Object(r["g"])(e,"__v_skip",!0),e}const Pe=e=>Object(r["v"])(e)?Oe(e):e,Re=e=>Object(r["v"])(e)?xe(e):e;function Ae(e){k()&&(e=Ie(e),e.dep||(e.dep=a()),I(e.dep))}function De(e,t){e=Ie(e),e.dep&&P(e.dep)}function Fe(e){return Boolean(e&&!0===e.__v_isRef)}function Me(e){return Le(e,!1)}function Le(e,t){return Fe(e)?e:new qe(e,t)}class qe{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ie(e),this._value=t?e:Pe(e)}get value(){return Ae(this),this._value}set value(e){e=this._shallow?e:Ie(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Pe(e),De(this,e))}}function Ue(e){return Fe(e)?e.value:e}const We={get:(e,t,n)=>Ue(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Fe(i)&&!Fe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function ze(e){return Se(e)?e:new Proxy(e,We)}class Be{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new w(e,()=>{this._dirty||(this._dirty=!0,De(this))}),this["__v_isReadonly"]=n}get value(){const e=Ie(this);return Ae(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ve(e,t){let n,i;const o=Object(r["p"])(e);o?(n=e,i=r["d"]):(n=e.get,i=e.set);const s=new Be(n,i,o||!i);return s}Promise.resolve();new Set;new Map;function He(e,t,...n){const i=e.vnode.props||r["b"];let o=n;const s=t.startsWith("update:"),c=s&&t.slice(7);if(c&&c in i){const e=("modelValue"===c?"model":c)+"Modifiers",{number:t,trim:s}=i[e]||r["b"];s?o=n.map(e=>e.trim()):t&&(o=n.map(r["N"]))}let a;let l=i[a=Object(r["M"])(t)]||i[a=Object(r["M"])(Object(r["e"])(t))];!l&&s&&(l=i[a=Object(r["M"])(Object(r["l"])(t))]),l&&$r(l,e,6,o);const u=i[a+"Once"];if(u){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,$r(u,e,6,o)}}function $e(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(void 0!==o)return o;const s=e.emits;let c={},a=!1;if(!Object(r["p"])(e)){const i=e=>{const n=$e(e,t,!0);n&&(a=!0,Object(r["h"])(c,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return s||a?(Object(r["o"])(s)?s.forEach(e=>c[e]=null):Object(r["h"])(c,s),i.set(e,c),c):(i.set(e,null),null)}function Ge(e,t){return!(!e||!Object(r["w"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let Ye=null,Ke=null;function Qe(e){const t=Ye;return Ye=e,Ke=e&&e.type.__scopeId||null,t}function Je(e){Ke=e}function Xe(){Ke=null}function Ze(e,t=Ye,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Zn(-1);const i=Qe(t),o=e(...n);return Qe(i),r._d&&Zn(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function et(e){const{type:t,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[c],slots:a,attrs:l,emit:u,render:h,renderCache:d,data:f,setupState:p,ctx:_,inheritAttrs:g}=e;let m,v;const b=Qe(e);try{if(4&n.shapeFlag){const e=o||i;m=_r(h.call(e,e,d,s,p,f,_)),v=l}else{const e=t;0,m=_r(e.length>1?e(s,{attrs:l,slots:a,emit:u}):e(s,null)),v=t.props?l:tt(l)}}catch(w){Yn.length=0,Gr(w,e,1),m=lr($n)}let y=m;if(v&&!1!==g){const e=Object.keys(v),{shapeFlag:t}=y;e.length&&7&t&&(c&&e.some(r["u"])&&(v=nt(v,c)),y=dr(y,v))}return n.dirs&&(y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),m=y,Qe(b),m}const tt=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["w"])(n))&&((t||(t={}))[n]=e[n]);return t},nt=(e,t)=>{const n={};for(const i in e)Object(r["u"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function rt(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:c,patchFlag:a}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&a>=0))return!(!i&&!c||c&&c.$stable)||r!==s&&(r?!s||it(r,s,l):!!s);if(1024&a)return!0;if(16&a)return r?it(r,s,l):!!s;if(8&a){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!Ge(l,n))return!0}}return!1}function it(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!Ge(n,o))return!0}return!1}function ot({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const st=e=>e.__isSuspense;function ct(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):_i(e)}function at(e,t){if(jr){let n=jr.provides;const r=jr.parent&&jr.parent.provides;r===n&&(n=jr.provides=Object.create(r)),n[e]=t}else 0}function lt(e,t,n=!1){const i=jr||Ye;if(i){const o=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Object(r["p"])(t)?t.call(i.proxy):t}else 0}function ut(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rt(()=>{e.isMounted=!0}),Ft(()=>{e.isUnmounting=!0}),e}const ht=[Function,Array],dt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ht,onEnter:ht,onAfterEnter:ht,onEnterCancelled:ht,onBeforeLeave:ht,onLeave:ht,onAfterLeave:ht,onLeaveCancelled:ht,onBeforeAppear:ht,onAppear:ht,onAfterAppear:ht,onAppearCancelled:ht},setup(e,{slots:t}){const n=kr(),r=ut();let i;return()=>{const o=t.default&&bt(t.default(),!0);if(!o||!o.length)return;const s=Ie(e),{mode:c}=s;const a=o[0];if(r.isLeaving)return gt(a);const l=mt(a);if(!l)return gt(a);const u=_t(l,s,r,n);vt(l,u);const h=n.subTree,d=h&&mt(h);let f=!1;const{getTransitionKey:p}=l.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(d&&d.type!==$n&&(!ir(l,d)||f)){const e=_t(d,s,r,n);if(vt(d,e),"out-in"===c)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},gt(a);"in-out"===c&&l.type!==$n&&(e.delayLeave=(e,t,n)=>{const i=pt(r,d);i[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return a}}},ft=dt;function pt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function _t(e,t,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:a,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:_,onAppear:g,onAfterAppear:m,onAppearCancelled:v}=t,b=String(e.key),y=pt(n,e),w=(e,t)=>{e&&$r(e,r,9,t)},C={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted){if(!i)return;r=_||c}t._leaveCb&&t._leaveCb(!0);const o=y[b];o&&ir(e,o)&&o.el._leaveCb&&o.el._leaveCb(),w(r,[t])},enter(e){let t=a,r=l,o=u;if(!n.isMounted){if(!i)return;t=g||a,r=m||l,o=v||u}let s=!1;const c=e._enterCb=t=>{s||(s=!0,w(t?o:r,[e]),C.delayedLeave&&C.delayedLeave(),e._enterCb=void 0)};t?(t(e,c),t.length<=1&&c()):c()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(h,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),w(n?p:f,[t]),t._leaveCb=void 0,y[i]===e&&delete y[i])};y[i]=e,d?(d(t,s),d.length<=1&&s()):s()},clone(e){return _t(e,t,n,r)}};return C}function gt(e){if(Ct(e))return e=dr(e),e.children=null,e}function mt(e){return Ct(e)?e.children?e.children[0]:void 0:e}function vt(e,t){6&e.shapeFlag&&e.component?vt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function bt(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const o=e[i];o.type===Vn?(128&o.patchFlag&&r++,n=n.concat(bt(o.children,t))):(t||o.type!==$n)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function yt(e){return Object(r["p"])(e)?{setup:e,name:e.name}:e}const wt=e=>!!e.type.__asyncLoader;const Ct=e=>e.type.__isKeepAlive;RegExp,RegExp;function Ot(e,t){return Object(r["o"])(e)?e.some(e=>Ot(e,t)):Object(r["D"])(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function Et(e,t){Tt(e,"a",t)}function xt(e,t){Tt(e,"da",t)}function Tt(e,t,n=jr){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}e()});if(It(t,r,n),n){let e=n.parent;while(e&&e.parent)Ct(e.parent.vnode)&&St(r,t,n,e),e=e.parent}}function St(e,t,n,i){const o=It(t,e,i,!0);Mt(()=>{Object(r["K"])(i[t],o)},n)}function jt(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function kt(e){return 128&e.shapeFlag?e.ssContent:e}function It(e,t,n=jr,r=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;x(),Ir(n);const i=$r(t,n,e,r);return Nr(),S(),i});return r?i.unshift(o):i.push(o),o}}const Nt=e=>(t,n=jr)=>(!Dr||"sp"===e)&&It(e,t,n),Pt=Nt("bm"),Rt=Nt("m"),At=Nt("bu"),Dt=Nt("u"),Ft=Nt("bum"),Mt=Nt("um"),Lt=Nt("sp"),qt=Nt("rtg"),Ut=Nt("rtc");function Wt(e,t=jr){It("ec",e,t)}let zt=!0;function Bt(e){const t=Gt(e),n=e.proxy,i=e.ctx;zt=!1,t.beforeCreate&&Ht(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:c,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:_,activated:g,deactivated:m,beforeDestroy:v,beforeUnmount:b,destroyed:y,unmounted:w,render:C,renderTracked:O,renderTriggered:E,errorCaptured:x,serverPrefetch:T,expose:S,inheritAttrs:j,components:k,directives:I,filters:N}=t,P=null;if(u&&Vt(u,i,P,e.appContext.config.unwrapInjectedRef),c)for(const A in c){const e=c[A];Object(r["p"])(e)&&(i[A]=e.bind(n))}if(o){0;const t=o.call(n,n);0,Object(r["v"])(t)&&(e.data=Oe(t))}if(zt=!0,s)for(const A in s){const e=s[A],t=Object(r["p"])(e)?e.bind(n,n):Object(r["p"])(e.get)?e.get.bind(n,n):r["d"];0;const o=!Object(r["p"])(e)&&Object(r["p"])(e.set)?e.set.bind(n):r["d"],c=Ve({get:t,set:o});Object.defineProperty(i,A,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(a)for(const r in a)$t(a[r],i,n,r);if(l){const e=Object(r["p"])(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{at(t,e[t])})}function R(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&Ht(h,e,"c"),R(Pt,d),R(Rt,f),R(At,p),R(Dt,_),R(Et,g),R(xt,m),R(Wt,x),R(Ut,O),R(qt,E),R(Ft,b),R(Mt,w),R(Lt,T),Object(r["o"])(S))if(S.length){const t=e.exposed||(e.exposed={});S.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});C&&e.render===r["d"]&&(e.render=C),null!=j&&(e.inheritAttrs=j),k&&(e.components=k),I&&(e.directives=I)}function Vt(e,t,n=r["d"],i=!1){Object(r["o"])(e)&&(e=Xt(e));for(const o in e){const n=e[o];let s;s=Object(r["v"])(n)?"default"in n?lt(n.from||o,n.default,!0):lt(n.from||o):lt(n),Fe(s)&&i?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function Ht(e,t,n){$r(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function $t(e,t,n,i){const o=i.includes(".")?Ei(n,i):()=>n[i];if(Object(r["D"])(e)){const n=t[e];Object(r["p"])(n)&&wi(o,n)}else if(Object(r["p"])(e))wi(o,e.bind(n));else if(Object(r["v"])(e))if(Object(r["o"])(e))e.forEach(e=>$t(e,t,n,i));else{const i=Object(r["p"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["p"])(i)&&wi(o,i,e)}else 0}function Gt(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,c=o.get(t);let a;return c?a=c:i.length||n||r?(a={},i.length&&i.forEach(e=>Yt(a,e,s,!0)),Yt(a,t,s)):a=t,o.set(t,a),a}function Yt(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Yt(e,o,n,!0),i&&i.forEach(t=>Yt(e,t,n,!0));for(const s in t)if(r&&"expose"===s);else{const r=Kt[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Kt={data:Qt,props:en,emits:en,methods:en,computed:en,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:en,directives:en,watch:tn,provide:Qt,inject:Jt};function Qt(e,t){return t?e?function(){return Object(r["h"])(Object(r["p"])(e)?e.call(this,this):e,Object(r["p"])(t)?t.call(this,this):t)}:t:e}function Jt(e,t){return en(Xt(e),Xt(t))}function Xt(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Zt(e,t){return e?[...new Set([].concat(e,t))]:t}function en(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function tn(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=Zt(e[r],t[r]);return n}function nn(e,t,n,i=!1){const o={},s={};Object(r["g"])(s,or,1),e.propsDefaults=Object.create(null),on(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:Ee(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function rn(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:c}}=e,a=Ie(o),[l]=e.propsOptions;let u=!1;if(!(i||c>0)||16&c){let i;on(e,t,o,s)&&(u=!0);for(const s in a)t&&(Object(r["k"])(t,s)||(i=Object(r["l"])(s))!==s&&Object(r["k"])(t,i))||(l?!n||void 0===n[s]&&void 0===n[i]||(o[s]=sn(l,a,s,void 0,e,!0)):delete o[s]);if(s!==a)for(const e in s)t&&Object(r["k"])(t,e)||(delete s[e],u=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let c=n[i];const h=t[c];if(l)if(Object(r["k"])(s,c))h!==s[c]&&(s[c]=h,u=!0);else{const t=Object(r["e"])(c);o[t]=sn(l,a,t,h,e,!1)}else h!==s[c]&&(s[c]=h,u=!0)}}u&&N(e,"set","$attrs")}function on(e,t,n,i){const[o,s]=e.propsOptions;let c,a=!1;if(t)for(let l in t){if(Object(r["z"])(l))continue;const u=t[l];let h;o&&Object(r["k"])(o,h=Object(r["e"])(l))?s&&s.includes(h)?(c||(c={}))[h]=u:n[h]=u:Ge(e.emitsOptions,l)||u!==i[l]&&(i[l]=u,a=!0)}if(s){const t=Ie(n),i=c||r["b"];for(let c=0;c<s.length;c++){const a=s[c];n[a]=sn(o,t,a,i[a],e,!Object(r["k"])(i,a))}}return a}function sn(e,t,n,i,o,s){const c=e[n];if(null!=c){const e=Object(r["k"])(c,"default");if(e&&void 0===i){const e=c.default;if(c.type!==Function&&Object(r["p"])(e)){const{propsDefaults:r}=o;n in r?i=r[n]:(Ir(o),i=r[n]=e.call(null,t),Nr())}else i=e}c[0]&&(s&&!e?i=!1:!c[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function cn(e,t,n=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const s=e.props,c={},a=[];let l=!1;if(!Object(r["p"])(e)){const i=e=>{l=!0;const[n,i]=cn(e,t,!0);Object(r["h"])(c,n),i&&a.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!s&&!l)return i.set(e,r["a"]),r["a"];if(Object(r["o"])(s))for(let h=0;h<s.length;h++){0;const e=Object(r["e"])(s[h]);an(e)&&(c[e]=r["b"])}else if(s){0;for(const e in s){const t=Object(r["e"])(e);if(an(t)){const n=s[e],i=c[t]=Object(r["o"])(n)||Object(r["p"])(n)?{type:n}:n;if(i){const e=hn(Boolean,i.type),n=hn(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||Object(r["k"])(i,"default"))&&a.push(t)}}}}const u=[c,a];return i.set(e,u),u}function an(e){return"$"!==e[0]}function ln(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function un(e,t){return ln(e)===ln(t)}function hn(e,t){return Object(r["o"])(t)?t.findIndex(t=>un(t,e)):Object(r["p"])(t)&&un(t,e)?0:-1}const dn=e=>"_"===e[0]||"$stable"===e,fn=e=>Object(r["o"])(e)?e.map(_r):[_r(e)],pn=(e,t,n)=>{const r=Ze((...e)=>fn(t(...e)),n);return r._c=!1,r},_n=(e,t,n)=>{const i=e._ctx;for(const o in e){if(dn(o))continue;const n=e[o];if(Object(r["p"])(n))t[o]=pn(o,n,i);else if(null!=n){0;const e=fn(n);t[o]=()=>e}}},gn=(e,t)=>{const n=fn(t);e.slots.default=()=>n},mn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Ie(t),Object(r["g"])(t,"_",n)):_n(t,e.slots={})}else e.slots={},t&&gn(e,t);Object(r["g"])(e.slots,or,1)},vn=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,c=r["b"];if(32&i.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Object(r["h"])(o,t),n||1!==e||delete o._):(s=!t.$stable,_n(t,o)),c=t}else t&&(gn(e,t),c={default:1});if(s)for(const r in o)dn(r)||r in c||delete o[r]};function bn(e,t,n,r){const i=e.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const c=i[s];o&&(c.oldValue=o[s].value);let a=c.dir[r];a&&(x(),$r(a,n,8,[e.el,c,e,t]),S())}}function yn(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wn=0;function Cn(e,t){return function(n,i=null){null==i||Object(r["v"])(i)||(i=null);const o=yn(),s=new Set;let c=!1;const a=o.app={_uid:wn++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:Si,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(r["p"])(e.install)?(s.add(e),e.install(a,...t)):Object(r["p"])(e)&&(s.add(e),e(a,...t))),a},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),a},component(e,t){return t?(o.components[e]=t,a):o.components[e]},directive(e,t){return t?(o.directives[e]=t,a):o.directives[e]},mount(r,s,l){if(!c){const u=lr(n,i);return u.appContext=o,s&&t?t(u,r):e(u,r,l),c=!0,a._container=r,r.__vue_app__=a,zr(u.component)||u.component.proxy}},unmount(){c&&(e(null,a._container),delete a._container.__vue_app__)},provide(e,t){return o.provides[e]=t,a}};return a}}function On(){}const En=ct;function xn(e){return Tn(e)}function Tn(e,t){On();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:c,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=r["d"],cloneNode:_,insertStaticContent:g}=e,m=(e,t,n,r=null,i=null,o=null,s=!1,c=null,a=!!t.dynamicChildren)=>{if(e===t)return;e&&!ir(e,t)&&(r=Y(e),B(e,i,o,!0),e=null),-2===t.patchFlag&&(a=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Hn:v(e,t,n,r);break;case $n:b(e,t,n,r);break;case Gn:null==e&&y(t,n,r,s);break;case Vn:R(e,t,n,r,i,o,s,c,a);break;default:1&h?E(e,t,n,r,i,o,s,c,a):6&h?A(e,t,n,r,i,o,s,c,a):(64&h||128&h)&&l.process(e,t,n,r,i,o,s,c,a,Q)}null!=u&&i&&Sn(u,e&&e.ref,o,t||e,!t)},v=(e,t,n,r)=>{if(null==e)i(t.el=a(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&u(n,t.children)}},b=(e,t,n,r)=>{null==e?i(t.el=l(t.children||""),n,r):t.el=e.el},y=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r)},C=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=f(e),i(e,n,r),e=o;i(t,n,r)},O=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),o(e),e=n;o(t)},E=(e,t,n,r,i,o,s,c,a)=>{s=s||"svg"===t.type,null==e?T(t,n,r,i,o,s,c,a):I(e,t,i,o,s,c,a)},T=(e,t,n,o,a,l,u,d)=>{let f,p;const{type:g,props:m,shapeFlag:v,transition:b,patchFlag:y,dirs:w}=e;if(e.el&&void 0!==_&&-1===y)f=e.el=_(e.el);else{if(f=e.el=c(e.type,l,m&&m.is,m),8&v?h(f,e.children):16&v&&k(e.children,f,null,o,a,l&&"foreignObject"!==g,u,d),w&&bn(e,null,o,"created"),m){for(const t in m)"value"===t||Object(r["z"])(t)||s(f,t,null,m[t],l,e.children,o,a,G);"value"in m&&s(f,"value",null,m.value),(p=m.onVnodeBeforeMount)&&jn(p,o,e)}j(f,e,e.scopeId,u,o)}w&&bn(e,null,o,"beforeMount");const C=(!a||a&&!a.pendingBranch)&&b&&!b.persisted;C&&b.beforeEnter(f),i(f,t,n),((p=m&&m.onVnodeMounted)||C||w)&&En(()=>{p&&jn(p,o,e),C&&b.enter(f),w&&bn(e,null,o,"mounted")},a)},j=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let o=0;o<r.length;o++)p(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;j(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},k=(e,t,n,r,i,o,s,c,a=0)=>{for(let l=a;l<e.length;l++){const a=e[l]=c?gr(e[l]):_r(e[l]);m(null,a,t,n,r,i,o,s,c)}},I=(e,t,n,i,o,c,a)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||r["b"],_=t.props||r["b"];let g;(g=_.onVnodeBeforeUpdate)&&jn(g,n,t,e),f&&bn(t,e,n,"beforeUpdate");const m=o&&"foreignObject"!==t.type;if(d?N(e.dynamicChildren,d,l,n,i,m,c):a||q(e,t,l,null,n,i,m,c,!1),u>0){if(16&u)P(l,t,p,_,n,i,o);else if(2&u&&p.class!==_.class&&s(l,"class",null,_.class,o),4&u&&s(l,"style",p.style,_.style,o),8&u){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const c=r[t],a=p[c],u=_[c];u===a&&"value"!==c||s(l,c,a,u,o,e.children,n,i,G)}}1&u&&e.children!==t.children&&h(l,t.children)}else a||null!=d||P(l,t,p,_,n,i,o);((g=_.onVnodeUpdated)||f)&&En(()=>{g&&jn(g,n,t,e),f&&bn(t,e,n,"updated")},i)},N=(e,t,n,r,i,o,s)=>{for(let c=0;c<t.length;c++){const a=e[c],l=t[c],u=a.el&&(a.type===Vn||!ir(a,l)||70&a.shapeFlag)?d(a.el):n;m(a,l,u,null,r,i,o,s,!0)}},P=(e,t,n,i,o,c,a)=>{if(n!==i){for(const l in i){if(Object(r["z"])(l))continue;const u=i[l],h=n[l];u!==h&&"value"!==l&&s(e,l,h,u,a,t.children,o,c,G)}if(n!==r["b"])for(const l in n)Object(r["z"])(l)||l in i||s(e,l,n[l],null,a,t.children,o,c,G);"value"in i&&s(e,"value",n.value,i.value)}},R=(e,t,n,r,o,s,c,l,u)=>{const h=t.el=e?e.el:a(""),d=t.anchor=e?e.anchor:a("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:_}=t;_&&(l=l?l.concat(_):_),null==e?(i(h,n,r),i(d,n,r),k(t.children,n,d,o,s,c,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,o,s,c,l),(null!=t.key||o&&t===o.subTree)&&kn(e,t,!0)):q(e,t,n,d,o,s,c,l,u)},A=(e,t,n,r,i,o,s,c,a)=>{t.slotScopeIds=c,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,a):D(t,n,r,i,o,s,a):F(e,t,a)},D=(e,t,n,r,i,o,s)=>{const c=e.component=Sr(e,r,i);if(Ct(e)&&(c.ctx.renderer=Q),Fr(c),c.asyncDep){if(i&&i.registerDep(c,M),!e.el){const e=c.subTree=lr($n);b(null,e,t,n)}}else M(c,e,t,n,i,o,s)},F=(e,t,n)=>{const r=t.component=e.component;if(rt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void L(r,t,n);r.next=t,di(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},M=(e,t,n,i,o,s,c)=>{const a=()=>{if(e.isMounted){let t,{next:n,bu:i,u:a,parent:u,vnode:h}=e,f=n;0,l.allowRecurse=!1,n?(n.el=h.el,L(e,n,c)):n=h,i&&Object(r["n"])(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&jn(t,u,n,h),l.allowRecurse=!0;const p=et(e);0;const _=e.subTree;e.subTree=p,m(_,p,d(_.el),Y(_),e,o,s),n.el=p.el,null===f&&ot(e,p.el),a&&En(a,o),(t=n.props&&n.props.onVnodeUpdated)&&En(()=>jn(t,u,n,h),o)}else{let c;const{el:a,props:u}=t,{bm:h,m:d,parent:f}=e,p=wt(t);if(l.allowRecurse=!1,h&&Object(r["n"])(h),!p&&(c=u&&u.onVnodeBeforeMount)&&jn(c,f,t),l.allowRecurse=!0,a&&X){const n=()=>{e.subTree=et(e),X(a,e.subTree,e,o,null)};p?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=et(e);0,m(null,r,n,i,e,o,s),t.el=r.el}if(d&&En(d,o),!p&&(c=u&&u.onVnodeMounted)){const e=t;En(()=>jn(c,f,e),o)}256&t.shapeFlag&&e.a&&En(e.a,o),e.isMounted=!0,t=n=i=null}},l=new w(a,()=>ui(e.update),e.scope),u=e.update=l.run.bind(l);u.id=e.uid,l.allowRecurse=u.allowRecurse=!0,u()},L=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,rn(e,t.props,r,n),vn(e,t.children,n),x(),gi(void 0,e.update),S()},q=(e,t,n,r,i,o,s,c,a=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void W(l,d,n,r,i,o,s,c,a);if(256&f)return void U(l,d,n,r,i,o,s,c,a)}8&p?(16&u&&G(l,i,o),d!==l&&h(n,d)):16&u?16&p?W(l,d,n,r,i,o,s,c,a):G(l,i,o,!0):(8&u&&h(n,""),16&p&&k(d,n,r,i,o,s,c,a))},U=(e,t,n,i,o,s,c,a,l)=>{e=e||r["a"],t=t||r["a"];const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=l?gr(t[f]):_r(t[f]);m(e[f],r,n,null,o,s,c,a,l)}u>h?G(e,o,s,!0,!1,d):k(t,n,i,o,s,c,a,l,d)},W=(e,t,n,i,o,s,c,a,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=l?gr(t[u]):_r(t[u]);if(!ir(r,i))break;m(r,i,n,null,o,s,c,a,l),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=l?gr(t[f]):_r(t[f]);if(!ir(r,i))break;m(r,i,n,null,o,s,c,a,l),d--,f--}if(u>d){if(u<=f){const e=f+1,r=e<h?t[e].el:i;while(u<=f)m(null,t[u]=l?gr(t[u]):_r(t[u]),n,r,o,s,c,a,l),u++}}else if(u>f)while(u<=d)B(e[u],o,s,!0),u++;else{const p=u,_=u,g=new Map;for(u=_;u<=f;u++){const e=t[u]=l?gr(t[u]):_r(t[u]);null!=e.key&&g.set(e.key,u)}let v,b=0;const y=f-_+1;let w=!1,C=0;const O=new Array(y);for(u=0;u<y;u++)O[u]=0;for(u=p;u<=d;u++){const r=e[u];if(b>=y){B(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=_;v<=f;v++)if(0===O[v-_]&&ir(r,t[v])){i=v;break}void 0===i?B(r,o,s,!0):(O[i-_]=u+1,i>=C?C=i:w=!0,m(r,t[i],n,null,o,s,c,a,l),b++)}const E=w?In(O):r["a"];for(v=E.length-1,u=y-1;u>=0;u--){const e=_+u,r=t[e],d=e+1<h?t[e+1].el:i;0===O[u]?m(null,r,n,d,o,s,c,a,l):w&&(v<0||u!==E[v]?z(r,n,d,2):v--)}}},z=(e,t,n,r,o=null)=>{const{el:s,type:c,transition:a,children:l,shapeFlag:u}=e;if(6&u)return void z(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void c.move(e,t,n,Q);if(c===Vn){i(s,t,n);for(let e=0;e<l.length;e++)z(l[e],t,n,r);return void i(e.anchor,t,n)}if(c===Gn)return void C(e,t,n);const h=2!==r&&1&u&&a;if(h)if(0===r)a.beforeEnter(s),i(s,t,n),En(()=>a.enter(s),o);else{const{leave:e,delayLeave:r,afterLeave:o}=a,c=()=>i(s,t,n),l=()=>{e(s,()=>{c(),o&&o()})};r?r(s,c,l):l()}else i(s,t,n)},B=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:c,children:a,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=c&&Sn(c,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!wt(e);let _;if(p&&(_=s&&s.onVnodeBeforeUnmount)&&jn(_,t,e),6&u)$(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&bn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,Q,r):l&&(o!==Vn||h>0&&64&h)?G(l,t,n,!1,!0):(o===Vn&&384&h||!i&&16&u)&&G(a,t,n),r&&V(e)}(p&&(_=s&&s.onVnodeUnmounted)||f)&&En(()=>{_&&jn(_,t,e),f&&bn(e,null,t,"unmounted")},n)},V=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Vn)return void H(n,r);if(t===Gn)return void O(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},H=(e,t)=>{let n;while(e!==t)n=f(e),o(e),e=n;o(t)},$=(e,t,n)=>{const{bum:i,scope:o,update:s,subTree:c,um:a}=e;i&&Object(r["n"])(i),o.stop(),s&&(s.active=!1,B(c,e,t,n)),a&&En(a,t),En(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},G=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)B(e[s],t,n,r,i)},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),K=(e,t,n)=>{null==e?t._vnode&&B(t._vnode,null,null,!0):m(t._vnode||null,e,t,null,null,null,n),mi(),t._vnode=e},Q={p:m,um:B,m:z,r:V,mt:D,mc:k,pc:q,pbc:N,n:Y,o:e};let J,X;return t&&([J,X]=t(Q)),{render:K,hydrate:J,createApp:Cn(K,J)}}function Sn(e,t,n,i,o=!1){if(Object(r["o"])(e))return void e.forEach((e,s)=>Sn(e,t&&(Object(r["o"])(t)?t[s]:t),n,i,o));if(wt(i)&&!o)return;const s=4&i.shapeFlag?zr(i.component)||i.component.proxy:i.el,c=o?null:s,{i:a,r:l}=e;const u=t&&t.r,h=a.refs===r["b"]?a.refs={}:a.refs,d=a.setupState;if(null!=u&&u!==l&&(Object(r["D"])(u)?(h[u]=null,Object(r["k"])(d,u)&&(d[u]=null)):Fe(u)&&(u.value=null)),Object(r["D"])(l)){const e=()=>{h[l]=c,Object(r["k"])(d,l)&&(d[l]=c)};c?(e.id=-1,En(e,n)):e()}else if(Fe(l)){const e=()=>{l.value=c};c?(e.id=-1,En(e,n)):e()}else Object(r["p"])(l)&&Hr(l,a,12,[c,h])}function jn(e,t,n,r=null){$r(e,t,7,[n,r])}function kn(e,t,n=!1){const i=e.children,o=t.children;if(Object(r["o"])(i)&&Object(r["o"])(o))for(let r=0;r<i.length;r++){const e=i[r];let t=o[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[r]=gr(o[r]),t.el=e.el),n||kn(e,t))}}function In(e){const t=e.slice(),n=[0];let r,i,o,s,c;const a=e.length;for(r=0;r<a;r++){const a=e[r];if(0!==a){if(i=n[n.length-1],e[i]<a){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)c=o+s>>1,e[n[c]]<a?o=c+1:s=c;a<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const Nn=e=>e.__isTeleport,Pn=e=>e&&(e.disabled||""===e.disabled),Rn=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,An=(e,t)=>{const n=e&&e.to;if(Object(r["D"])(n)){if(t){const e=t(n);return e}return null}return n},Dn={__isTeleport:!0,process(e,t,n,r,i,o,s,c,a,l){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:_,createComment:g}}=l,m=Pn(t.props);let{shapeFlag:v,children:b,dynamicChildren:y}=t;if(null==e){const e=t.el=_(""),l=t.anchor=_("");f(e,n,r),f(l,n,r);const h=t.target=An(t.props,p),d=t.targetAnchor=_("");h&&(f(d,h),s=s||Rn(h));const g=(e,t)=>{16&v&&u(b,e,t,i,o,s,c,a)};m?g(n,l):h&&g(h,d)}else{t.el=e.el;const r=t.anchor=e.anchor,u=t.target=e.target,f=t.targetAnchor=e.targetAnchor,_=Pn(e.props),g=_?n:u,v=_?r:f;if(s=s||Rn(u),y?(d(e.dynamicChildren,y,g,i,o,s,c),kn(e,t,!0)):a||h(e,t,g,v,i,o,s,c,!1),m)_||Fn(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=An(t.props,p);e&&Fn(t,e,null,l,0)}else _&&Fn(t,u,f,l,1)}},remove(e,t,n,r,{um:i,o:{remove:o}},s){const{shapeFlag:c,children:a,anchor:l,targetAnchor:u,target:h,props:d}=e;if(h&&o(u),(s||!Pn(d))&&(o(l),16&c))for(let f=0;f<a.length;f++){const e=a[f];i(e,t,n,!0,!!e.dynamicChildren)}},move:Fn,hydrate:Mn};function Fn(e,t,n,{o:{insert:r},m:i},o=2){0===o&&r(e.targetAnchor,t,n);const{el:s,anchor:c,shapeFlag:a,children:l,props:u}=e,h=2===o;if(h&&r(s,t,n),(!h||Pn(u))&&16&a)for(let d=0;d<l.length;d++)i(l[d],t,n,2);h&&r(c,t,n)}function Mn(e,t,n,r,i,o,{o:{nextSibling:s,parentNode:c,querySelector:a}},l){const u=t.target=An(t.props,a);if(u){const a=u._lpa||u.firstChild;16&t.shapeFlag&&(Pn(t.props)?(t.anchor=l(s(e),t,c(e),n,r,i,o),t.targetAnchor=a):(t.anchor=s(e),t.targetAnchor=l(a,t,u,n,r,i,o)),u._lpa=t.targetAnchor&&s(t.targetAnchor))}return t.anchor&&s(t.anchor)}const Ln=Dn,qn="components";function Un(e,t){return zn(qn,e,!0,t)||e}const Wn=Symbol();function zn(e,t,n=!0,i=!1){const o=Ye||jr;if(o){const n=o.type;if(e===qn){const e=Br(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const s=Bn(o[e]||n[e],t)||Bn(o.appContext[e],t);return!s&&i?n:s}}function Bn(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const Vn=Symbol(void 0),Hn=Symbol(void 0),$n=Symbol(void 0),Gn=Symbol(void 0),Yn=[];let Kn=null;function Qn(e=!1){Yn.push(Kn=e?null:[])}function Jn(){Yn.pop(),Kn=Yn[Yn.length-1]||null}let Xn=1;function Zn(e){Xn+=e}function er(e){return e.dynamicChildren=Xn>0?Kn||r["a"]:null,Jn(),Xn>0&&Kn&&Kn.push(e),e}function tr(e,t,n,r,i,o){return er(ar(e,t,n,r,i,o,!0))}function nr(e,t,n,r,i){return er(lr(e,t,n,r,i,!0))}function rr(e){return!!e&&!0===e.__v_isVNode}function ir(e,t){return e.type===t.type&&e.key===t.key}const or="__vInternal",sr=({key:e})=>null!=e?e:null,cr=({ref:e})=>null!=e?Object(r["D"])(e)||Fe(e)||Object(r["p"])(e)?{i:Ye,r:e}:e:null;function ar(e,t=null,n=null,i=0,o=null,s=(e===Vn?0:1),c=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&sr(t),ref:t&&cr(t),scopeId:Ke,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null};return a?(mr(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=Object(r["D"])(n)?8:16),Xn>0&&!c&&Kn&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Kn.push(l),l}const lr=ur;function ur(e,t=null,n=null,i=0,o=null,s=!1){if(e&&e!==Wn||(e=$n),rr(e)){const r=dr(e,t,!0);return n&&mr(r,n),r}if(Vr(e)&&(e=e.__vccOpts),t){t=hr(t);let{class:e,style:n}=t;e&&!Object(r["D"])(e)&&(t.class=Object(r["I"])(e)),Object(r["v"])(n)&&(ke(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["J"])(n))}const c=Object(r["D"])(e)?1:st(e)?128:Nn(e)?64:Object(r["v"])(e)?4:Object(r["p"])(e)?2:0;return ar(e,t,n,i,o,c,s,!0)}function hr(e){return e?ke(e)||or in e?Object(r["h"])({},e):e:null}function dr(e,t,n=!1){const{props:i,ref:o,patchFlag:s,children:c}=e,a=t?vr(i||{},t):i,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&sr(a),ref:t&&t.ref?n&&o?Object(r["o"])(o)?o.concat(cr(t)):[o,cr(t)]:cr(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Vn?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dr(e.ssContent),ssFallback:e.ssFallback&&dr(e.ssFallback),el:e.el,anchor:e.anchor};return l}function fr(e=" ",t=0){return lr(Hn,null,e,t)}function pr(e="",t=!1){return t?(Qn(),nr($n,null,e)):lr($n,null,e)}function _r(e){return null==e||"boolean"===typeof e?lr($n):Object(r["o"])(e)?lr(Vn,null,e.slice()):"object"===typeof e?gr(e):lr(Hn,null,String(e))}function gr(e){return null===e.el||e.memo?e:dr(e)}function mr(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),mr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||or in t?3===r&&Ye&&(1===Ye.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Ye}}else Object(r["p"])(t)?(t={default:t,_ctx:Ye},n=32):(t=String(t),64&i?(n=16,t=[fr(t)]):n=8);e.children=t,e.shapeFlag|=n}function vr(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["I"])([t.class,i.class]));else if("style"===e)t.style=Object(r["J"])([t.style,i.style]);else if(Object(r["w"])(e)){const n=t[e],o=i[e];n===o||Object(r["o"])(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=i[e])}return t}function br(e,t,n,i){let o;const s=n&&n[i];if(Object(r["o"])(e)||Object(r["D"])(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if(Object(r["v"])(e))if(e[Symbol.iterator])o=Array.from(e,(e,n)=>t(e,n,void 0,s&&s[n]));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[i]=o),o}function yr(e,t,n={},r,i){if(Ye.isCE)return lr("slot","default"===t?null:{name:t},r&&r());let o=e[t];o&&o._c&&(o._d=!1),Qn();const s=o&&wr(o(n)),c=nr(Vn,{key:n.key||"_"+t},s||(r?r():[]),s&&1===e._?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),o&&o._c&&(o._d=!0),c}function wr(e){return e.some(e=>!rr(e)||e.type!==$n&&!(e.type===Vn&&!wr(e.children)))?e:null}const Cr=e=>e?Pr(e)?zr(e)||e.proxy:Cr(e.parent):null,Or=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Cr(e.parent),$root:e=>Cr(e.root),$emit:e=>e.emit,$options:e=>Gt(e),$forceUpdate:e=>()=>ui(e.update),$nextTick:e=>ai.bind(e.proxy),$watch:e=>Oi.bind(e)}),Er={get({_:e},t){const{ctx:n,setupState:i,data:o,props:s,accessCache:c,type:a,appContext:l}=e;let u;if("$"!==t[0]){const a=c[t];if(void 0!==a)switch(a){case 0:return i[t];case 1:return o[t];case 3:return n[t];case 2:return s[t]}else{if(i!==r["b"]&&Object(r["k"])(i,t))return c[t]=0,i[t];if(o!==r["b"]&&Object(r["k"])(o,t))return c[t]=1,o[t];if((u=e.propsOptions[0])&&Object(r["k"])(u,t))return c[t]=2,s[t];if(n!==r["b"]&&Object(r["k"])(n,t))return c[t]=3,n[t];zt&&(c[t]=4)}}const h=Or[t];let d,f;return h?("$attrs"===t&&j(e,"get",t),h(e)):(d=a.__cssModules)&&(d=d[t])?d:n!==r["b"]&&Object(r["k"])(n,t)?(c[t]=3,n[t]):(f=l.config.globalProperties,Object(r["k"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;if(o!==r["b"]&&Object(r["k"])(o,t))o[t]=n;else if(i!==r["b"]&&Object(r["k"])(i,t))i[t]=n;else if(Object(r["k"])(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:s}},c){let a;return void 0!==n[c]||e!==r["b"]&&Object(r["k"])(e,c)||t!==r["b"]&&Object(r["k"])(t,c)||(a=s[0])&&Object(r["k"])(a,c)||Object(r["k"])(i,c)||Object(r["k"])(Or,c)||Object(r["k"])(o.config.globalProperties,c)}};const xr=yn();let Tr=0;function Sr(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||xr,c={uid:Tr++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cn(i,o),emitsOptions:$e(i,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx={_:c},c.root=t?t.root:c,c.emit=He.bind(null,c),e.ce&&e.ce(c),c}let jr=null;const kr=()=>jr||Ye,Ir=e=>{jr=e,e.scope.on()},Nr=()=>{jr&&jr.scope.off(),jr=null};function Pr(e){return 4&e.vnode.shapeFlag}let Rr,Ar,Dr=!1;function Fr(e,t=!1){Dr=t;const{props:n,children:r}=e.vnode,i=Pr(e);nn(e,n,i,t),mn(e,r);const o=i?Mr(e,t):void 0;return Dr=!1,o}function Mr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ne(new Proxy(e.ctx,Er));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?Wr(e):null;Ir(e),x();const o=Hr(i,e,0,[e.props,n]);if(S(),Nr(),Object(r["y"])(o)){if(o.then(Nr,Nr),t)return o.then(n=>{Lr(e,n,t)}).catch(t=>{Gr(t,e,0)});e.asyncDep=o}else Lr(e,o,t)}else qr(e,t)}function Lr(e,t,n){Object(r["p"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["v"])(t)&&(e.setupState=ze(t)),qr(e,n)}function qr(e,t,n){const i=e.type;if(!e.render){if(!t&&Rr&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:c}=i,a=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},o),c);i.render=Rr(t,a)}}e.render=i.render||r["d"],Ar&&Ar(e)}Ir(e),x(),Bt(e),S(),Nr()}function Ur(e){return new Proxy(e.attrs,{get(t,n){return j(e,"get","$attrs"),t[n]}})}function Wr(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Ur(e))},slots:e.slots,emit:e.emit,expose:t}}function zr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ze(Ne(e.exposed)),{get(t,n){return n in t?t[n]:n in Or?Or[n](e):void 0}}))}function Br(e){return Object(r["p"])(e)&&e.displayName||e.name}function Vr(e){return Object(r["p"])(e)&&"__vccOpts"in e}function Hr(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){Gr(o,t,n)}return i}function $r(e,t,n,i){if(Object(r["p"])(e)){const o=Hr(e,t,n,i);return o&&Object(r["y"])(o)&&o.catch(e=>{Gr(e,t,n)}),o}const o=[];for(let r=0;r<e.length;r++)o.push($r(e[r],t,n,i));return o}function Gr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void Hr(s,null,10,[e,i,o])}Yr(e,n,i,r)}function Yr(e,t,n,r=!0){console.error(e)}let Kr=!1,Qr=!1;const Jr=[];let Xr=0;const Zr=[];let ei=null,ti=0;const ni=[];let ri=null,ii=0;const oi=Promise.resolve();let si=null,ci=null;function ai(e){const t=si||oi;return e?t.then(this?e.bind(this):e):t}function li(e){let t=Xr+1,n=Jr.length;while(t<n){const r=t+n>>>1,i=vi(Jr[r]);i<e?t=r+1:n=r}return t}function ui(e){Jr.length&&Jr.includes(e,Kr&&e.allowRecurse?Xr+1:Xr)||e===ci||(null==e.id?Jr.push(e):Jr.splice(li(e.id),0,e),hi())}function hi(){Kr||Qr||(Qr=!0,si=oi.then(bi))}function di(e){const t=Jr.indexOf(e);t>Xr&&Jr.splice(t,1)}function fi(e,t,n,i){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),hi()}function pi(e){fi(e,ei,Zr,ti)}function _i(e){fi(e,ri,ni,ii)}function gi(e,t=null){if(Zr.length){for(ci=t,ei=[...new Set(Zr)],Zr.length=0,ti=0;ti<ei.length;ti++)ei[ti]();ei=null,ti=0,ci=null,gi(e,t)}}function mi(e){if(ni.length){const e=[...new Set(ni)];if(ni.length=0,ri)return void ri.push(...e);for(ri=e,ri.sort((e,t)=>vi(e)-vi(t)),ii=0;ii<ri.length;ii++)ri[ii]();ri=null,ii=0}}const vi=e=>null==e.id?1/0:e.id;function bi(e){Qr=!1,Kr=!0,gi(e),Jr.sort((e,t)=>vi(e)-vi(t));r["d"];try{for(Xr=0;Xr<Jr.length;Xr++){const e=Jr[Xr];e&&!1!==e.active&&Hr(e,null,14)}}finally{Xr=0,Jr.length=0,mi(e),Kr=!1,si=null,(Jr.length||Zr.length||ni.length)&&bi(e)}}const yi={};function wi(e,t,n){return Ci(e,t,n)}function Ci(e,t,{immediate:n,deep:i,flush:o,onTrack:s,onTrigger:c}=r["b"]){const a=jr;let l,u,h=!1,d=!1;if(Fe(e)?(l=()=>e.value,h=!!e._shallow):Se(e)?(l=()=>e,i=!0):Object(r["o"])(e)?(d=!0,h=e.some(Se),l=()=>e.map(e=>Fe(e)?e.value:Se(e)?xi(e):Object(r["p"])(e)?Hr(e,a,2):void 0)):l=Object(r["p"])(e)?t?()=>Hr(e,a,2):()=>{if(!a||!a.isUnmounted)return u&&u(),$r(e,a,3,[f])}:r["d"],t&&i){const e=l;l=()=>xi(e())}let f=e=>{u=m.onStop=()=>{Hr(e,a,4)}};if(Dr)return f=r["d"],t?n&&$r(t,a,3,[l(),d?[]:void 0,f]):l(),r["d"];let p=d?[]:yi;const _=()=>{if(m.active)if(t){const e=m.run();(i||h||(d?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(u&&u(),$r(t,a,3,[e,p===yi?void 0:p,f]),p=e)}else m.run()};let g;_.allowRecurse=!!t,g="sync"===o?_:"post"===o?()=>En(_,a&&a.suspense):()=>{!a||a.isMounted?pi(_):_()};const m=new w(l,g);return t?n?_():p=m.run():"post"===o?En(m.run.bind(m),a&&a.suspense):m.run(),()=>{m.stop(),a&&a.scope&&Object(r["K"])(a.scope.effects,m)}}function Oi(e,t,n){const i=this.proxy,o=Object(r["D"])(e)?e.includes(".")?Ei(i,e):()=>i[e]:e.bind(i,i);let s;Object(r["p"])(t)?s=t:(s=t.handler,n=t);const c=jr;Ir(this);const a=Ci(o,s.bind(i),n);return c?Ir(c):Nr(),a}function Ei(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function xi(e,t){if(!Object(r["v"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),Fe(e))xi(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)xi(e[n],t);else if(Object(r["B"])(e)||Object(r["t"])(e))e.forEach(e=>{xi(e,t)});else if(Object(r["x"])(e))for(const n in e)xi(e[n],t);return e}function Ti(e,t,n){const i=arguments.length;return 2===i?Object(r["v"])(t)&&!Object(r["o"])(t)?rr(t)?lr(e,null,[t]):lr(e,t):lr(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&rr(n)&&(n=[n]),lr(e,t,n))}Symbol("");const Si="3.2.22",ji="http://www.w3.org/2000/svg",ki="undefined"!==typeof document?document:null,Ii=new Map,Ni={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?ki.createElementNS(ji,e):ki.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>ki.createTextNode(e),createComment:e=>ki.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ki.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let o=Ii.get(e);if(!o){const t=ki.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,o=t.content,r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}Ii.set(e,o)}return t.insertBefore(o.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Pi(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ri(e,t,n){const i=e.style,o=Object(r["D"])(n);if(n&&!o){for(const e in n)Di(i,e,n[e]);if(t&&!Object(r["D"])(t))for(const e in t)null==n[e]&&Di(i,e,"")}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const Ai=/\s*!important$/;function Di(e,t,n){if(Object(r["o"])(n))n.forEach(n=>Di(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=Li(e,t);Ai.test(n)?e.setProperty(Object(r["l"])(i),n.replace(Ai,""),"important"):e[i]=n}}const Fi=["Webkit","Moz","ms"],Mi={};function Li(e,t){const n=Mi[t];if(n)return n;let i=Object(r["e"])(t);if("filter"!==i&&i in e)return Mi[t]=i;i=Object(r["f"])(i);for(let r=0;r<Fi.length;r++){const n=Fi[r]+i;if(n in e)return Mi[t]=n}return t}const qi="http://www.w3.org/1999/xlink";function Ui(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(qi,t.slice(6,t.length)):e.setAttributeNS(qi,t,n);else{const i=Object(r["C"])(t);null==n||i&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Wi(e,t,n,i,o,s,c){if("innerHTML"===t||"textContent"===t)return i&&c(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName){e._value=n;const r=null==n?"":n;return e.value!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=Object(r["m"])(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(a){}return void e.removeAttribute(t)}}try{e[t]=n}catch(l){0}}let zi=Date.now,Bi=!1;if("undefined"!==typeof window){zi()>document.createEvent("Event").timeStamp&&(zi=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Bi=!!(e&&Number(e[1])<=53)}let Vi=0;const Hi=Promise.resolve(),$i=()=>{Vi=0},Gi=()=>Vi||(Hi.then($i),Vi=zi());function Yi(e,t,n,r){e.addEventListener(t,n,r)}function Ki(e,t,n,r){e.removeEventListener(t,n,r)}function Qi(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,c]=Xi(t);if(r){const s=o[t]=Zi(r,i);Yi(e,n,s,c)}else s&&(Ki(e,n,s,c),o[t]=void 0)}}const Ji=/(?:Once|Passive|Capture)$/;function Xi(e){let t;if(Ji.test(e)){let n;t={};while(n=e.match(Ji))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function Zi(e,t){const n=e=>{const r=e.timeStamp||zi();(Bi||r>=n.attached-1)&&$r(eo(e,n.value),t,5,[e])};return n.value=e,n.attached=Gi(),n}function eo(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}const to=/^on[a-z]/,no=(e,t,n,i,o=!1,s,c,a,l)=>{"class"===t?Pi(e,i,o):"style"===t?Ri(e,n,i):Object(r["w"])(t)?Object(r["u"])(t)||Qi(e,t,n,i,c):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ro(e,t,i,o))?Wi(e,t,i,s,c,a,l):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),Ui(e,t,i,o))};function ro(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&to.test(t)&&Object(r["p"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!to.test(t)||!Object(r["D"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const io="transition",oo="animation",so=(e,{slots:t})=>Ti(ft,uo(e),t);so.displayName="Transition";const co={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ao=(so.props=Object(r["h"])({},ft.props,co),(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),lo=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function uo(e){const t={};for(const r in e)r in co||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=n+"-enter-from",enterActiveClass:c=n+"-enter-active",enterToClass:a=n+"-enter-to",appearFromClass:l=s,appearActiveClass:u=c,appearToClass:h=a,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,_=ho(o),g=_&&_[0],m=_&&_[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:y,onLeave:w,onLeaveCancelled:C,onBeforeAppear:O=v,onAppear:E=b,onAppearCancelled:x=y}=t,T=(e,t,n)=>{_o(e,t?h:a),_o(e,t?u:c),n&&n()},S=(e,t)=>{_o(e,p),_o(e,f),t&&t()},j=e=>(t,n)=>{const r=e?E:b,o=()=>T(t,e,n);ao(r,[t,o]),go(()=>{_o(t,e?l:s),po(t,e?h:a),lo(r)||vo(t,i,g,o)})};return Object(r["h"])(t,{onBeforeEnter(e){ao(v,[e]),po(e,s),po(e,c)},onBeforeAppear(e){ao(O,[e]),po(e,l),po(e,u)},onEnter:j(!1),onAppear:j(!0),onLeave(e,t){const n=()=>S(e,t);po(e,d),Co(),po(e,f),go(()=>{_o(e,d),po(e,p),lo(w)||vo(e,i,m,n)}),ao(w,[e,n])},onEnterCancelled(e){T(e,!1),ao(y,[e])},onAppearCancelled(e){T(e,!0),ao(x,[e])},onLeaveCancelled(e){S(e),ao(C,[e])}})}function ho(e){if(null==e)return null;if(Object(r["v"])(e))return[fo(e.enter),fo(e.leave)];{const t=fo(e);return[t,t]}}function fo(e){const t=Object(r["N"])(e);return t}function po(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function _o(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function go(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let mo=0;function vo(e,t,n,r){const i=e._endId=++mo,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:c,propCount:a}=bo(e,t);if(!s)return r();const l=s+"end";let u=0;const h=()=>{e.removeEventListener(l,d),o()},d=t=>{t.target===e&&++u>=a&&h()};setTimeout(()=>{u<a&&h()},c+1),e.addEventListener(l,d)}function bo(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(io+"Delay"),o=r(io+"Duration"),s=yo(i,o),c=r(oo+"Delay"),a=r(oo+"Duration"),l=yo(c,a);let u=null,h=0,d=0;t===io?s>0&&(u=io,h=s,d=o.length):t===oo?l>0&&(u=oo,h=l,d=a.length):(h=Math.max(s,l),u=h>0?s>l?io:oo:null,d=u?u===io?o.length:a.length:0);const f=u===io&&/\b(transform|all)(,|$)/.test(n[io+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function yo(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>wo(t)+wo(e[n])))}function wo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Co(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Oo=["ctrl","shift","alt","meta"],Eo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Oo.some(n=>e[n+"Key"]&&!t.includes(n))},xo=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Eo[t[e]];if(r&&r(n,t))return}return e(n,...r)};const To=Object(r["h"])({patchProp:no},Ni);let So;function jo(){return So||(So=xn(To))}const ko=(...e)=>{const t=jo().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Io(e);if(!i)return;const o=t._component;Object(r["p"])(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function Io(e){if(Object(r["D"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("da84"),i=n("1d80"),o=r.Object;e.exports=function(e){return o(i(e))}},"7c73":function(e,t,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),c=n("d012"),a=n("1be4"),l=n("cc12"),u=n("f772"),h=">",d="<",f="prototype",p="script",_=u("IE_PROTO"),g=function(){},m=function(e){return d+p+h+e+d+"/"+p+h},v=function(e){e.write(m("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=l("iframe"),n="java"+p+":";return t.style.display="none",a.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(m("document.F=Object")),e.close(),e.F},y=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}y="undefined"!=typeof document?document.domain&&r?v(r):b():v(r);var e=s.length;while(e--)delete y[f][s[e]];return y()};c[_]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[_]=e):n=y(),void 0===t?n:o(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("c430"),s=n("5e77"),c=n("1626"),a=n("9ed3"),l=n("e163"),u=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),_=n("3f8c"),g=n("ae93"),m=s.PROPER,v=s.CONFIGURABLE,b=g.IteratorPrototype,y=g.BUGGY_SAFARI_ITERATORS,w=p("iterator"),C="keys",O="values",E="entries",x=function(){return this};e.exports=function(e,t,n,s,p,g,T){a(n,t,s);var S,j,k,I=function(e){if(e===p&&D)return D;if(!y&&e in R)return R[e];switch(e){case C:return function(){return new n(this,e)};case O:return function(){return new n(this,e)};case E:return function(){return new n(this,e)}}return function(){return new n(this)}},N=t+" Iterator",P=!1,R=e.prototype,A=R[w]||R["@@iterator"]||p&&R[p],D=!y&&A||I(p),F="Array"==t&&R.entries||A;if(F&&(S=l(F.call(new e)),S!==Object.prototype&&S.next&&(o||l(S)===b||(u?u(S,b):c(S[w])||f(S,w,x)),h(S,N,!0,!0),o&&(_[N]=x))),m&&p==O&&A&&A.name!==O&&(!o&&v?d(R,"name",O):(P=!0,D=function(){return i(A,this)})),p)if(j={values:I(O),keys:g?D:I(C),entries:I(E)},T)for(k in j)(y||P||!(k in R))&&f(R,k,j[k]);else r({target:t,proto:!0,forced:y||P},j);return o&&!T||R[w]===D||f(R,w,D,{name:p}),_[t]=D,j}},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;e.exports=i(s)&&/native code/.test(o(s))},"825a":function(e,t,n){var r=n("da84"),i=n("861d"),o=r.String,s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var s=r(t);s in e?i.f(e,s,o(0,n)):e[s]=n}},"857a":function(e,t,n){var r=n("e330"),i=n("1d80"),o=n("577e"),s=/"/g,c=r("".replace);e.exports=function(e,t,n,r){var a=o(i(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+c(o(r),s,"&quot;")+'"'),l+">"+a+"</"+t+">"}},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("e330"),i=n("1626"),o=n("c6cd"),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},"90e3":function(e,t,n){var r=n("e330"),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(e,t){var n=a[c(e)];return n==u||n!=l&&(i(t)?r(t):!!t)},c=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},a=s.data={},l=s.NATIVE="N",u=s.POLYFILL="P";e.exports=s},9911:function(e,t,n){"use strict";var r=n("23e7"),i=n("857a"),o=n("af03");r({target:"String",proto:!0,forced:o("link")},{link:function(e){return i(this,"a","href",e)}})},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d039"),s=n("e8b5"),c=n("861d"),a=n("7b0b"),l=n("07fa"),u=n("8418"),h=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),_=f("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",v=i.TypeError,b=p>=51||!o((function(){var e=[];return e[_]=!1,e.concat()[0]!==e})),y=d("concat"),w=function(e){if(!c(e))return!1;var t=e[_];return void 0!==t?!!t:s(e)},C=!b||!y;r({target:"Array",proto:!0,forced:C},{concat:function(e){var t,n,r,i,o,s=a(this),c=h(s,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?s:arguments[t],w(o)){if(i=l(o),d+i>g)throw v(m);for(n=0;n<i;n++,d++)n in o&&u(c,d,o[n])}else{if(d>=g)throw v(m);u(c,d++,o)}return c.length=d,c}})},"9a1f":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("59ed"),s=n("825a"),c=n("0d51"),a=n("35a1"),l=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?a(e):t;if(o(n))return s(i(n,e));throw l(c(e)+" is not iterable")}},"9bf2":function(e,t,n){var r=n("da84"),i=n("83ab"),o=n("0cfb"),s=n("825a"),c=n("a04b"),a=r.TypeError,l=Object.defineProperty;t.f=i?l:function(e,t,n){if(s(e),t=c(t),s(n),o)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),c=n("3f8c"),a=function(){return this};e.exports=function(e,t,n){var l=t+" Iterator";return e.prototype=i(r,{next:o(1,n)}),s(e,l,!1,!0),c[l]=a,e}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return T})),n.d(t,"d",(function(){return x})),n.d(t,"e",(function(){return J})),n.d(t,"f",(function(){return ee})),n.d(t,"g",(function(){return ie})),n.d(t,"h",(function(){return I})),n.d(t,"i",(function(){return ce})),n.d(t,"j",(function(){return ne})),n.d(t,"k",(function(){return R})),n.d(t,"l",(function(){return Z})),n.d(t,"m",(function(){return a})),n.d(t,"n",(function(){return re})),n.d(t,"o",(function(){return A})),n.d(t,"p",(function(){return L})),n.d(t,"q",(function(){return o})),n.d(t,"r",(function(){return g})),n.d(t,"s",(function(){return G})),n.d(t,"t",(function(){return D})),n.d(t,"u",(function(){return k})),n.d(t,"v",(function(){return W})),n.d(t,"w",(function(){return j})),n.d(t,"x",(function(){return $})),n.d(t,"y",(function(){return z})),n.d(t,"z",(function(){return Y})),n.d(t,"A",(function(){return m})),n.d(t,"B",(function(){return F})),n.d(t,"C",(function(){return c})),n.d(t,"D",(function(){return q})),n.d(t,"E",(function(){return U})),n.d(t,"F",(function(){return b})),n.d(t,"G",(function(){return y})),n.d(t,"H",(function(){return r})),n.d(t,"I",(function(){return f})),n.d(t,"J",(function(){return l})),n.d(t,"K",(function(){return N})),n.d(t,"L",(function(){return w})),n.d(t,"M",(function(){return te})),n.d(t,"N",(function(){return oe})),n.d(t,"O",(function(){return H}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",c=r(s);function a(e){return!!e||""===e}function l(e){if(A(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=q(r)?d(r):l(r);if(i)for(const e in i)t[e]=i[e]}return t}return q(e)||W(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(q(e))t=e;else if(A(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(W(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",_="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",g=r(p),m=r(_);function v(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=b(e[r],t[r]);return n}function b(e,t){if(e===t)return!0;let n=M(e),r=M(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=A(e),r=A(t),n||r)return!(!n||!r)&&v(e,t);if(n=W(e),r=W(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function y(e,t){return e.findIndex(e=>b(e,t))}const w=e=>null==e?"":A(e)||W(e)&&(e.toString===B||!L(e.toString))?JSON.stringify(e,C,2):String(e),C=(e,t)=>t&&t.__v_isRef?C(e,t.value):D(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:F(t)?{[`Set(${t.size})`]:[...t.values()]}:!W(t)||A(t)||$(t)?t:String(t),O={},E=[],x=()=>{},T=()=>!1,S=/^on[^a-z]/,j=e=>S.test(e),k=e=>e.startsWith("onUpdate:"),I=Object.assign,N=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},P=Object.prototype.hasOwnProperty,R=(e,t)=>P.call(e,t),A=Array.isArray,D=e=>"[object Map]"===V(e),F=e=>"[object Set]"===V(e),M=e=>e instanceof Date,L=e=>"function"===typeof e,q=e=>"string"===typeof e,U=e=>"symbol"===typeof e,W=e=>null!==e&&"object"===typeof e,z=e=>W(e)&&L(e.then)&&L(e.catch),B=Object.prototype.toString,V=e=>B.call(e),H=e=>V(e).slice(8,-1),$=e=>"[object Object]"===V(e),G=e=>q(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,Y=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),K=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},Q=/-(\w)/g,J=K(e=>e.replace(Q,(e,t)=>t?t.toUpperCase():"")),X=/\B([A-Z])/g,Z=K(e=>e.replace(X,"-$1").toLowerCase()),ee=K(e=>e.charAt(0).toUpperCase()+e.slice(1)),te=K(e=>e?"on"+ee(e):""),ne=(e,t)=>!Object.is(e,t),re=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ie=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},oe=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let se;const ce=()=>se||(se="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("2ba4"),c=n("c65b"),a=n("e330"),l=n("c430"),u=n("83ab"),h=n("4930"),d=n("d039"),f=n("1a2d"),p=n("e8b5"),_=n("1626"),g=n("861d"),m=n("3a9b"),v=n("d9b5"),b=n("825a"),y=n("7b0b"),w=n("fc6a"),C=n("a04b"),O=n("577e"),E=n("5c6c"),x=n("7c73"),T=n("df75"),S=n("241c"),j=n("057f"),k=n("7418"),I=n("06cf"),N=n("9bf2"),P=n("d1e7"),R=n("f36a"),A=n("6eeb"),D=n("5692"),F=n("f772"),M=n("d012"),L=n("90e3"),q=n("b622"),U=n("e538"),W=n("746f"),z=n("d44e"),B=n("69f3"),V=n("b727").forEach,H=F("hidden"),$="Symbol",G="prototype",Y=q("toPrimitive"),K=B.set,Q=B.getterFor($),J=Object[G],X=i.Symbol,Z=X&&X[G],ee=i.TypeError,te=i.QObject,ne=o("JSON","stringify"),re=I.f,ie=N.f,oe=j.f,se=P.f,ce=a([].push),ae=D("symbols"),le=D("op-symbols"),ue=D("string-to-symbol-registry"),he=D("symbol-to-string-registry"),de=D("wks"),fe=!te||!te[G]||!te[G].findChild,pe=u&&d((function(){return 7!=x(ie({},"a",{get:function(){return ie(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=re(J,t);r&&delete J[t],ie(e,t,n),r&&e!==J&&ie(J,t,r)}:ie,_e=function(e,t){var n=ae[e]=x(Z);return K(n,{type:$,tag:e,description:t}),u||(n.description=t),n},ge=function(e,t,n){e===J&&ge(le,t,n),b(e);var r=C(t);return b(n),f(ae,r)?(n.enumerable?(f(e,H)&&e[H][r]&&(e[H][r]=!1),n=x(n,{enumerable:E(0,!1)})):(f(e,H)||ie(e,H,E(1,{})),e[H][r]=!0),pe(e,r,n)):ie(e,r,n)},me=function(e,t){b(e);var n=w(t),r=T(n).concat(Ce(n));return V(r,(function(t){u&&!c(be,n,t)||ge(e,t,n[t])})),e},ve=function(e,t){return void 0===t?x(e):me(x(e),t)},be=function(e){var t=C(e),n=c(se,this,t);return!(this===J&&f(ae,t)&&!f(le,t))&&(!(n||!f(this,t)||!f(ae,t)||f(this,H)&&this[H][t])||n)},ye=function(e,t){var n=w(e),r=C(t);if(n!==J||!f(ae,r)||f(le,r)){var i=re(n,r);return!i||!f(ae,r)||f(n,H)&&n[H][r]||(i.enumerable=!0),i}},we=function(e){var t=oe(w(e)),n=[];return V(t,(function(e){f(ae,e)||f(M,e)||ce(n,e)})),n},Ce=function(e){var t=e===J,n=oe(t?le:w(e)),r=[];return V(n,(function(e){!f(ae,e)||t&&!f(J,e)||ce(r,ae[e])})),r};if(h||(X=function(){if(m(Z,this))throw ee("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?O(arguments[0]):void 0,t=L(e),n=function(e){this===J&&c(n,le,e),f(this,H)&&f(this[H],t)&&(this[H][t]=!1),pe(this,t,E(1,e))};return u&&fe&&pe(J,t,{configurable:!0,set:n}),_e(t,e)},Z=X[G],A(Z,"toString",(function(){return Q(this).tag})),A(X,"withoutSetter",(function(e){return _e(L(e),e)})),P.f=be,N.f=ge,I.f=ye,S.f=j.f=we,k.f=Ce,U.f=function(e){return _e(q(e),e)},u&&(ie(Z,"description",{configurable:!0,get:function(){return Q(this).description}}),l||A(J,"propertyIsEnumerable",be,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:X}),V(T(de),(function(e){W(e)})),r({target:$,stat:!0,forced:!h},{for:function(e){var t=O(e);if(f(ue,t))return ue[t];var n=X(t);return ue[t]=n,he[n]=t,n},keyFor:function(e){if(!v(e))throw ee(e+" is not a symbol");if(f(he,e))return he[e]},useSetter:function(){fe=!0},useSimple:function(){fe=!1}}),r({target:"Object",stat:!0,forced:!h,sham:!u},{create:ve,defineProperty:ge,defineProperties:me,getOwnPropertyDescriptor:ye}),r({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:we,getOwnPropertySymbols:Ce}),r({target:"Object",stat:!0,forced:d((function(){k.f(1)}))},{getOwnPropertySymbols:function(e){return k.f(y(e))}}),ne){var Oe=!h||d((function(){var e=X();return"[null]"!=ne([e])||"{}"!=ne({a:e})||"{}"!=ne(Object(e))}));r({target:"JSON",stat:!0,forced:Oe},{stringify:function(e,t,n){var r=R(arguments),i=t;if((g(t)||void 0!==e)&&!v(e))return p(t)||(t=function(e,t){if(_(i)&&(t=c(i,this,e,t)),!v(t))return t}),r[1]=t,s(ne,null,r)}})}if(!Z[Y]){var Ee=Z.valueOf;A(Z,Y,(function(e){return c(Ee,this)}))}z(X,$),M[H]=!0},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),c=n("d066"),a=n("1626"),l=n("4840"),u=n("cdf9"),h=n("6eeb"),d=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=l(this,c("Promise")),n=a(e);return this.then(n?function(n){return u(t,e()).then((function(){return n}))}:e,n?function(n){return u(t,e()).then((function(){throw n}))}:e)}}),!i&&a(o)){var f=c("Promise").prototype["finally"];o.prototype["finally"]!==f&&h(o.prototype,"finally",f,{unsafe:!0})}},ae93:function(e,t,n){"use strict";var r,i,o,s=n("d039"),c=n("1626"),a=n("7c73"),l=n("e163"),u=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=l(l(o)),i!==Object.prototype&&(r=i)):p=!0);var _=void 0==r||s((function(){var e={};return r[f].call(e)!==e}));_?r={}:d&&(r=a(r)),c(r[f])||u(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},af03:function(e,t,n){var r=n("d039");e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},b575:function(e,t,n){var r,i,o,s,c,a,l,u,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,_=n("1cdc"),g=n("d4c3"),m=n("a4b4"),v=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,y=h.document,w=h.process,C=h.Promise,O=f(h,"queueMicrotask"),E=O&&O.value;E||(r=function(){var e,t;v&&(e=w.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?s():o=void 0,n}}o=void 0,e&&e.enter()},_||v||m||!b||!y?!g&&C&&C.resolve?(l=C.resolve(void 0),l.constructor=C,u=d(l.then,l),s=function(){u(r)}):v?s=function(){w.nextTick(r)}:(p=d(p,h),s=function(){p(r)}):(c=!0,a=y.createTextNode(""),new b(r).observe(a,{characterData:!0}),s=function(){a.data=c=!c})),e.exports=E||function(e){var t={fn:e,next:void 0};o&&(o.next=t),i||(i=t,s()),o=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),s=n("90e3"),c=n("4930"),a=n("fdbf"),l=i("wks"),u=r.Symbol,h=u&&u["for"],d=a?u:u&&u.withoutSetter||s;e.exports=function(e){if(!o(l,e)||!c&&"string"!=typeof l[e]){var t="Symbol."+e;c&&o(u,e)?l[e]=u[e]:l[e]=a&&h?h(t):d(t)}return l[e]}},b727:function(e,t,n){var r=n("0366"),i=n("e330"),o=n("44ad"),s=n("7b0b"),c=n("07fa"),a=n("65f0"),l=i([].push),u=function(e){var t=1==e,n=2==e,i=3==e,u=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,_,g,m){for(var v,b,y=s(p),w=o(y),C=r(_,g),O=c(w),E=0,x=m||a,T=t?x(p,O):n||d?x(p,0):void 0;O>E;E++)if((f||E in w)&&(v=w[E],b=C(v,E,y),e))if(t)T[E]=b;else if(b)switch(e){case 3:return!0;case 5:return v;case 6:return E;case 2:l(T,v)}else switch(e){case 4:return!1;case 7:l(T,v)}return h?-1:i||u?u:T}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},c04e:function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("861d"),s=n("d9b5"),c=n("dc4a"),a=n("485a"),l=n("b622"),u=r.TypeError,h=l("toPrimitive");e.exports=function(e,t){if(!o(e)||s(e))return e;var n,r=c(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!o(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t){var n=Function.prototype.call;e.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(e,t,n){var r=n("e330"),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},c8d2:function(e,t,n){var r=n("5e77").PROPER,i=n("d039"),o=n("5899"),s="​᠎";e.exports=function(e){return i((function(){return!!o[e]()||s[e]()!==s||r&&o[e].name!==e}))}},ca84:function(e,t,n){var r=n("e330"),i=n("1a2d"),o=n("fc6a"),s=n("4d64").indexOf,c=n("d012"),a=r([].push);e.exports=function(e,t){var n,r=o(e),l=0,u=[];for(n in r)!i(c,n)&&i(r,n)&&a(u,n);while(t.length>l)i(r,n=t[l++])&&(~s(u,n)||a(u,n));return u}},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),o=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("e330"),i=n("825a"),o=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d44e:function(e,t,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),s=o("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,s)&&r(e,s,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d959:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},d9b5:function(e,t,n){var r=n("da84"),i=n("d066"),o=n("1626"),s=n("3a9b"),c=n("fdbf"),a=r.Object;e.exports=c?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return o(t)&&s(t.prototype,a(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),s="/"===o(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&s&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),c=s,a=0;a<s;a++)if(i[a]!==o[a]){c=a;break}var l=[];for(a=c;a<i.length;a++)l.push("..");return l=l.concat(o.slice(c)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,o=e.length-1;o>=1;--o)if(t=e.charCodeAt(o),47===t){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,o=0,s=e.length-1;s>=0;--s){var c=e.charCodeAt(s);if(47!==c)-1===r&&(i=!1,r=s+1),46===c?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){n=s+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e01a:function(e,t,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),s=n("e330"),c=n("1a2d"),a=n("1626"),l=n("3a9b"),u=n("577e"),h=n("9bf2").f,d=n("e893"),f=o.Symbol,p=f&&f.prototype;if(i&&a(f)&&(!("description"in p)||void 0!==f().description)){var _={},g=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),t=l(p,this)?new f(e):void 0===e?f():f(e);return""===e&&(_[t]=!0),t};d(g,f),g.prototype=p,p.constructor=g;var m="Symbol(test)"==String(f("test")),v=s(p.toString),b=s(p.valueOf),y=/^Symbol\((.*)\)[^)]+$/,w=s("".replace),C=s("".slice);h(p,"description",{configurable:!0,get:function(){var e=b(this),t=v(e);if(c(_,e))return"";var n=m?C(t,7,-1):w(t,y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:g})}},e163:function(e,t,n){var r=n("da84"),i=n("1a2d"),o=n("1626"),s=n("7b0b"),c=n("f772"),a=n("e177"),l=c("IE_PROTO"),u=r.Object,h=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(i(t,l))return t[l];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof u?h:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),c=n("7dd0"),a="Array Iterator",l=s.set,u=s.getterFor(a);e.exports=c(Array,"Array",(function(e,t){l(this,{type:a,target:r(e),index:0,kind:t})}),(function(){var e=u(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e330:function(e,t){var n=Function.prototype,r=n.bind,i=n.call,o=r&&r.bind(i);e.exports=r?function(e){return e&&o(i,e)}:function(e){return e&&function(){return i.apply(e,arguments)}}},e538:function(e,t,n){var r=n("b622");t.f=r},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return h}));
/**
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
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,c={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},a=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=c[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=a,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function u(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var r,i,o,s,c=n("23e7"),a=n("c430"),l=n("da84"),u=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),_=n("d2bb"),g=n("d44e"),m=n("2626"),v=n("59ed"),b=n("1626"),y=n("861d"),w=n("19aa"),C=n("8925"),O=n("2266"),E=n("1c7e"),x=n("4840"),T=n("2cf4").set,S=n("b575"),j=n("cdf9"),k=n("44de"),I=n("f069"),N=n("e667"),P=n("69f3"),R=n("94ca"),A=n("b622"),D=n("6069"),F=n("605d"),M=n("2d00"),L=A("species"),q="Promise",U=P.get,W=P.set,z=P.getterFor(q),B=d&&d.prototype,V=d,H=B,$=l.TypeError,G=l.document,Y=l.process,K=I.f,Q=K,J=!!(G&&G.createEvent&&l.dispatchEvent),X=b(l.PromiseRejectionEvent),Z="unhandledrejection",ee="rejectionhandled",te=0,ne=1,re=2,ie=1,oe=2,se=!1,ce=R(q,(function(){var e=C(V),t=e!==String(V);if(!t&&66===M)return!0;if(a&&!H["finally"])return!0;if(M>=51&&/native code/.test(e))return!1;var n=new V((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[L]=r,se=n.then((function(){}))instanceof r,!se||!t&&D&&!X})),ae=ce||!E((function(e){V.all(e)["catch"]((function(){}))})),le=function(e){var t;return!(!y(e)||!b(t=e.then))&&t},ue=function(e,t){if(!e.notified){e.notified=!0;var n=e.reactions;S((function(){var r=e.value,i=e.state==ne,o=0;while(n.length>o){var s,c,a,l=n[o++],u=i?l.ok:l.fail,d=l.resolve,f=l.reject,p=l.domain;try{u?(i||(e.rejection===oe&&pe(e),e.rejection=ie),!0===u?s=r:(p&&p.enter(),s=u(r),p&&(p.exit(),a=!0)),s===l.promise?f($("Promise-chain cycle")):(c=le(s))?h(c,s,d,f):d(s)):f(r)}catch(_){p&&!a&&p.exit(),f(_)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&de(e)}))}},he=function(e,t,n){var r,i;J?(r=G.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),l.dispatchEvent(r)):r={promise:t,reason:n},!X&&(i=l["on"+e])?i(r):e===Z&&k("Unhandled promise rejection",n)},de=function(e){h(T,l,(function(){var t,n=e.facade,r=e.value,i=fe(e);if(i&&(t=N((function(){F?Y.emit("unhandledRejection",r,n):he(Z,n,r)})),e.rejection=F||fe(e)?oe:ie,t.error))throw t.value}))},fe=function(e){return e.rejection!==ie&&!e.parent},pe=function(e){h(T,l,(function(){var t=e.facade;F?Y.emit("rejectionHandled",t):he(ee,t,e.value)}))},_e=function(e,t,n){return function(r){e(t,r,n)}},ge=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=re,ue(e,!0))},me=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw $("Promise can't be resolved itself");var r=le(t);r?S((function(){var n={done:!1};try{h(r,t,_e(me,n,e),_e(ge,n,e))}catch(i){ge(n,i,e)}})):(e.value=t,e.state=ne,ue(e,!1))}catch(i){ge({done:!1},i,e)}}};if(ce&&(V=function(e){w(this,H),v(e),h(r,this);var t=U(this);try{e(_e(me,t),_e(ge,t))}catch(n){ge(t,n)}},H=V.prototype,r=function(e){W(this,{type:q,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:te,value:void 0})},r.prototype=p(H,{then:function(e,t){var n=z(this),r=n.reactions,i=K(x(this,V));return i.ok=!b(e)||e,i.fail=b(t)&&t,i.domain=F?Y.domain:void 0,n.parent=!0,r[r.length]=i,n.state!=te&&ue(n,!1),i.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=U(e);this.promise=e,this.resolve=_e(me,t),this.reject=_e(ge,t)},I.f=K=function(e){return e===V||e===o?new i(e):Q(e)},!a&&b(d)&&B!==Object.prototype)){s=B.then,se||(f(B,"then",(function(e,t){var n=this;return new V((function(e,t){h(s,n,e,t)})).then(e,t)}),{unsafe:!0}),f(B,"catch",H["catch"],{unsafe:!0}));try{delete B.constructor}catch(ve){}_&&_(B,H)}c({global:!0,wrap:!0,forced:ce},{Promise:V}),g(V,q,!1,!0),m(q),o=u(q),c({target:q,stat:!0,forced:ce},{reject:function(e){var t=K(this);return h(t.reject,void 0,e),t.promise}}),c({target:q,stat:!0,forced:a||ce},{resolve:function(e){return j(a&&this===o?V:this,e)}}),c({target:q,stat:!0,forced:ae},{all:function(e){var t=this,n=K(t),r=n.resolve,i=n.reject,o=N((function(){var n=v(t.resolve),o=[],s=0,c=1;O(e,(function(e){var a=s++,l=!1;c++,h(n,t,e).then((function(e){l||(l=!0,o[a]=e,--c||r(o))}),i)})),--c||r(o)}));return o.error&&i(o.value),n.promise},race:function(e){var t=this,n=K(t),r=n.reject,i=N((function(){var i=v(t.resolve);O(e,(function(e){h(i,t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(e,t,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),s=n("9bf2");e.exports=function(e,t){for(var n=i(t),c=s.f,a=o.f,l=0;l<n.length;l++){var u=n[l];r(e,u)||c(e,u,a(t,u))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),i=n("00ee"),o=n("1626"),s=n("c6b6"),c=n("b622"),a=c("toStringTag"),l=r.Object,u="Arguments"==s(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=l(e),a))?n:u?s(t):"Object"==(r=s(t))&&o(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.37c9ac0a.js.map