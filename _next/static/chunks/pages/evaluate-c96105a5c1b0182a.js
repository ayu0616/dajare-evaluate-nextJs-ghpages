(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[491],{3673:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/evaluate",function(){return e(2618)}])},2618:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return z}});var r=e(4051),o=e.n(r),i=e(5893),u=e(9008),a=e.n(u),c=e(7294),s=e(3408),f=e(1604),l=e(3680);function p(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function d(n,t,e){return(d=h()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&m(o,e.prototype),o}).apply(null,arguments)}function v(n){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function y(n,t){return!t||"object"!==x(t)&&"function"!==typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function m(n,t){return(m=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function j(n){return function(n){if(Array.isArray(n))return p(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"===typeof n)return p(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return p(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=function(n){return n&&"undefined"!==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};function w(n){var t="function"===typeof Map?new Map:void 0;return w=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!==typeof n)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return d(n,arguments,v(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),m(r,n)},w(n)}function g(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=v(n);if(t){var o=v(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return y(this,e)}}var _=function(n){!function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&m(n,t)}(e,n);var t=g(e);function e(n){if(function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),"string"!==typeof n)throw Error("\u5165\u529b\u306f\u6587\u5b57\u5217\u306e\u307f\u3067\u3059");var r=n.split("");return t.call.apply(t,[this].concat(j(r)))}var r=e.prototype;return r.createChain=function(n){var t=[];if(this.length<n)throw Error("\u6587\u5b57\u6570\u304c\u591a\u3059\u304e\u307e\u3059");for(var e=0;e<this.length-n+1;e++)t.push(this.slice(e,e+n).join(""));return t},r.slice=function(n,t){if("undefined"===typeof n)return j(this);var e=[];"undefined"===typeof t&&(t=this.length);for(var r=n;r<t;r++)e.push(this[r]);return e},e}(w(Array)),b="["+["\u30c3","\u30fc"].join("")+"]*",E=function(n){var t=function(n){for(var t=function(n){r.createChain(n).forEach((function(t,e){var r=o.find((function(n){return n[0].dajare.match(new RegExp("^"+t.replaceAll(new RegExp(b,"g"),"").split("").join(b)+"$"))}));r?r.push({start:e,end:e+n-1,dajare:t}):o.push([{start:e,end:e+n-1,dajare:t}])}))},e=n.length,r=new _(n),o=[],i=e-1;i>=2;i--)t(i);return o.filter((function(n){return n.length>=2}))}(n);return function(n){var t=[];return n.forEach((function(n){var e=!1;t.forEach((function(t){var r=n.length===t.length,o=t[0].dajare.replaceAll(new RegExp(b,"g"),"").includes(n[0].dajare.replaceAll(new RegExp(b,"g"),""));e=e||r&&o})),e||t.push(n)})),t}(t)},k=e(3297),O=e.n(k)().builder({dicPath:"/dictionaries/"}),S=function(){return new Promise((function(n){O.build((function(t,e){n(e)}))}))};function C(n,t,e,r,o,i,u){try{var a=n[i](u),c=a.value}catch(s){return void e(s)}a.done?t(c):Promise.resolve(c).then(r,o)}var P=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.word_id=t.word_id,this.word_type=t.word_type,this.word_position=t.word_position,this.surface_form=t.surface_form,this.pos=t.pos,this.pos_detail_1=t.pos_detail_1,this.pos_detail_2=t.pos_detail_2,this.pos_detail_3=t.pos_detail_3,this.conjugated_type=t.conjugated_type,this.conjugated_form=t.conjugated_form,this.basic_form=t.basic_form,this.reading=t.reading,this.pronunciation=t.pronunciation}return n.fromArray=function(t){return t.map((function(t){return new n(t)}))},n.tokenize=function(t){return(e=o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return r=e.sent,e.abrupt("return",n.fromArray(r.tokenize(t)));case 4:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function u(n){C(i,r,o,u,a,"next",n)}function a(n){C(i,r,o,u,a,"throw",n)}u(void 0)}))})();var e},n}(),R=P,A=e(9755),N=e.n(A),T=function(n){return new Promise((function(t){return setTimeout(t,1e3*n)}))},Z=function(n){return(0,i.jsx)(s.Z.Control,{id:n.id,type:"text",as:"textarea",style:{resize:"none"},rows:1,value:n.value,onChange:function(t){!function(n){if(n)for(var t=1,e="#"+n;t<=N()(e)[0].scrollHeight+2;)N()(e).outerHeight(t),t++;else console.log("textarea\u306e\u9ad8\u3055\u3092\u81ea\u52d5\u5909\u66f4\u3059\u308b\u306b\u306fid\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059")}(t.currentTarget.id),n.onChange&&n.onChange(t)},disabled:n.disabled})};function M(n,t,e,r,o,i,u){try{var a=n[i](u),c=a.value}catch(s){return void e(s)}a.done?t(c):Promise.resolve(c).then(r,o)}function I(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function u(n){M(i,r,o,u,a,"next",n)}function a(n){M(i,r,o,u,a,"throw",n)}u(void 0)}))}}var z=function(){var n="\u30c0\u30b8\u30e3\u30ec\u8a55\u4fa1",t=(0,c.useState)(""),e=t[0],r=t[1],u=(0,c.useState)(!0),p=u[0],h=u[1],d=(0,c.useState)(""),v=d[0],y=d[1],m=(0,c.useState)([]),j=m[0],x=m[1],w=(0,c.useState)(0),g=w[0],_=w[1],b="fixing-kana",k=function(n){for(var t=1;t<=N()(n)[0].scrollHeight+2;)N()(n).outerHeight(t),t++},O=function(){var n=I(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=0;case 1:if(!(t<10)){n.next=8;break}return _(Math.floor(1e3*Math.random())),n.next=5,T(1/(11-t)*1.5);case 5:t++,n.next=1;break;case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a(),{children:(0,i.jsx)("title",{children:n})}),(0,i.jsxs)("div",{className:"m-3",children:[(0,i.jsx)("h1",{children:n}),(0,i.jsx)("hr",{})]}),(0,i.jsx)(s.Z,{className:"m-3",as:"div",children:(0,i.jsxs)(s.Z.Group,{controlId:"dajare",children:[(0,i.jsx)(s.Z.Label,{children:"\u30c0\u30b8\u30e3\u30ec\u3092\u5165\u529b"}),(0,i.jsxs)(f.Z,{children:[(0,i.jsx)(Z,{value:e,onChange:function(n){return r(n.currentTarget.value)}}),(0,i.jsx)(l.Z,{onClick:function(){I(o().mark((function n(){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h(!0),y("\u5909\u63db\u4e2d..."),n.next=4,R.tokenize(e);case 4:return t=n.sent,r=t.map((function(n){return n.reading})).join(""),y(r),h(!1),n.next=10,T(1/Math.pow(10,10));case 10:k("#fixing-kana");case 11:case"end":return n.stop()}}),n)})))()},children:"\u30ab\u30ca\u306b\u5909\u63db"})]})]})}),(0,i.jsx)(s.Z,{className:"m-3",as:"div",children:(0,i.jsxs)(s.Z.Group,{controlId:b,children:[(0,i.jsx)(s.Z.Label,{children:"\u4fee\u6b63\u3059\u308b\u30ab\u30ca\u304c\u3042\u308c\u3070\u4fee\u6b63\u3057\u3066\u304f\u3060\u3055\u3044"}),(0,i.jsxs)(f.Z,{children:[(0,i.jsx)(Z,{value:v,disabled:p,onChange:function(n){return y(n.currentTarget.value)}}),(0,i.jsx)(l.Z,{disabled:p,onClick:function(){x(E(v)),O()},children:"\u8a55\u4fa1\u3059\u308b\uff01"})]})]})}),(0,i.jsxs)("div",{className:"m-3",children:[(0,i.jsx)("p",{children:"\u3042\u306a\u305f\u306e\u30b9\u30b3\u30a2\u306f\u3001\u3001\u3001"}),(0,i.jsxs)("p",{className:"fs-1 text-center",children:[g,"\u70b9"]})]}),(0,i.jsx)("div",{className:"m-3",children:(0,i.jsx)("p",{children:"\u30b9\u30b3\u30a2\u8a73\u7d30"})}),(0,i.jsx)("div",{className:"m-3",children:j.map((function(n,t){return(0,i.jsx)("p",{children:n.map((function(n){return n.dajare})).join(", ")},t)}))})]})}}},function(n){n.O(0,[571,608,197,774,888,179],(function(){return t=3673,n(n.s=t);var t}));var t=n.O();_N_E=t}]);