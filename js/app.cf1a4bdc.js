(function(e){function t(t){for(var a,r,s=t[0],c=t[1],f=t[2],d=0,u=[];d<s.length;d++)r=s[d],i[r]&&u.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(u.length)u.shift()();return o.push.apply(o,f||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"140a":function(e,t,n){"use strict";var a=n("9db7"),i=n.n(a);i.a},1639:function(e,t,n){"use strict";var a=n("ef7f"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var a=n("2b0e"),i=n("ce5b"),o=n.n(i),r=(n("bf40"),n("c0a4")),s=n.n(r);a["default"].use(o.a,{customProperties:!0,iconfont:"mdi",theme:{primary:s.a.blue.darken1,secondary:s.a.cyan.lighten4,accent:s.a.indigo.base}});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[n("app-menu",{model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),n("v-toolbar",{attrs:{color:"primary",app:""}},[n("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",{domProps:{textContent:e._s(e.title)}})],1),n("v-content",[n("landing")],1)],1)},f=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-slide-y-transition",{attrs:{mode:"out-in"}},[n("v-layout",{attrs:{column:"","align-center":""}},[n("v-flex",{attrs:{xs12:"",md4:""}},[n("div",{staticClass:"text-xs-center"},[n("v-avatar",{attrs:{size:"225px"}},[n("img",{staticClass:"img-circle elevation-7 mb-1",attrs:{src:e.jake}})]),n("div",{staticClass:"headline"},[e._v("Jake "),n("span",{staticStyle:{"font-weight":"bold"}},[e._v("Hassel")])]),n("div",{staticClass:"subheading text-xs-center grey--text pt-1 pb-3"},[e._v("Frontend Software Developer")]),n("v-layout",{attrs:{"justify-space-between":""}},[n("v-btn",{staticClass:"body-2",attrs:{fab:"",icon:"",href:"https://github.com/shadskii"}},[n("v-icon",[e._v("mdi-github-circle")])],1),n("v-btn",{staticClass:"body-2",attrs:{fab:"",icon:"",href:"https://www.linkedin.com/in/jacob-k-hassel/"}},[n("v-icon",[e._v("mdi-linkedin")])],1),n("v-btn",{staticClass:"body-2",attrs:{fab:"",icon:"",href:"https://www.facebook.com/jakehasssel"}},[n("v-icon",[e._v("mdi-facebook")])],1),n("v-btn",{staticClass:"body-2",attrs:{fab:"",icon:"",href:"mailto:me@shadskii.io"}},[n("v-icon",[e._v("mdi-email")])],1)],1)],1)])],1)],1)],1)},d=[],u=n("a87f"),p=n.n(u),b={name:"Landing",data:function(){return{jake:p.a}}},v=b,h=(n("140a"),n("2877")),m=Object(h["a"])(v,l,d,!1,null,"231caf0e",null);m.options.__file="Landing.vue";var g=m.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{persistent:"",fixed:"","disable-resize-watcher":"",app:""},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[n("v-list",{attrs:{"three-line":""}},e._l(e.items,function(t){return n("v-list-tile",{key:t.name,attrs:{href:t.url}},[n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:e._s(t.name)}}),n("v-list-tile-sub-title",{domProps:{textContent:e._s(t.description)}})],1)],1)})),n("v-footer",{staticClass:"footer",attrs:{fixed:""}},[n("span",[e._v("  © Jake made dis")])])],1)},y=[];function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _=function e(t,n,a){k(this,e),this.name=t,this.url=n,this.description=a},x={props:{value:{type:Boolean,default:!1}},data:function(){return{items:[new _("Crypto Stats","https://shadskii.github.io/crypto-stats/","Track your favorite cryptocurrencies!"),new _("Hungry Seals","https://shadskii.github.io/hungry-seals/","This dude eats fish"),new _("Boaty Boat","https://shadskii.github.io/boaty-boat/","Help Boaty Boat the boat survive his boating adventure"),new _("Jimmy Eats Dicks","https://shadskii.github.io/jimmy-eats-dicks/","Jimmy loves dicks"),new _("Jacob Loves Ding Dongs","https://shadskii.github.io/jacob-loves-ding-dong/","Jacob seriously loves ding dongs")]}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},j=x,C=(n("1639"),Object(h["a"])(j,w,y,!1,null,"70414a2e",null));C.options.__file="AppMenu.vue";var O=C.exports,P={name:"App",components:{Landing:g,AppMenu:O},data:function(){return{drawer:!1,title:"Shadskii.io"}}},S=P,J=Object(h["a"])(S,c,f,!1,null,null,null);J.options.__file="App.vue";var A=J.exports,B=(n("d5e8"),n("5363"),n("9483"));Object(B["a"])("".concat("","service-worker.js"),{ready:function(){window.alert("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){window.alert("Content has been cached for offline use.")},updated:function(){window.alert("New content is available; please refresh.")},offline:function(){window.alert("No internet connection found. App is running in offline mode.")},error:function(e){window.alert("Error during service worker registration:",e)}}),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(A)}}).$mount("#app")},"9db7":function(e,t,n){},a87f:function(e,t,n){e.exports=n.p+"img/jake.c51a5525.png"},ef7f:function(e,t,n){}});
//# sourceMappingURL=app.cf1a4bdc.js.map