(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"0db8":function(t,e,n){"use strict";n.r(e);var r=n("c2a6"),a=n("b4a1");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("f1c9");var c,i=n("f0c5"),o=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"692a7542",null,!1,r["a"],c);e["default"]=o.exports},"20ab":function(t,e,n){},8883:function(t,e,n){"use strict";(function(t){n("3448");r(n("66fd"));var e=r(n("0db8"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},b4a1:function(t,e,n){"use strict";n.r(e);var r=n("bc32"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=a.a},bc32:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=c(n("a34a")),a=c(n("872a")),u=c(n("16e5"));function c(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=o(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,c=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){i=!0,u=t},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw u}}}}function o(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e,n,r,a,u,c){try{var i=t[u](c),o=i.value}catch(s){return void n(s)}i.done?e(o):Promise.resolve(o).then(r,a)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var u=t.apply(e,n);function c(t){p(u,r,a,c,i,"next",t)}function i(t){p(u,r,a,c,i,"throw",t)}c(void 0)}))}}var v={data:function(){return{siteKey:"",id:"",detail:{},playShow:!1,playList:[],starShow:!1}},methods:{BackEvent:function(){t.navigateBack()},moreShowEvent:function(){this.moreShow=!this.moreShow},moreConfirm:function(t){var e=this;return h(r.default.mark((function n(){var u,c,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(u=t[0].value,"star"!==u){n.next=8;break}return c=f({},e.detail),c.key="".concat(e.siteKey,"-").concat(e.id),n.next=6,a.default.add("star",c);case 6:i=n.sent,i.flag&&e.$refs.uToast.show({title:"收藏成功",type:"success",duration:"2300"});case 8:case"end":return n.stop()}}),n)})))()},playEvent:function(){var t=this;return h(r.default.mark((function e(){var n,a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.playList.length<=1)){e.next=8;break}return n=t.playList[0],a="/pages/play/play?site=".concat(n.extra.site,"&id=").concat(n.extra.id,"&name=").concat(n.label,"&url=").concat(n.value),e.next=5,t.addHistory(n.label,n.value);case 5:t.$u.route({url:a}),e.next=9;break;case 8:t.playShow=!t.playShow;case 9:case"end":return e.stop()}}),e)})))()},playConfirm:function(t){var e=this;return h(r.default.mark((function n(){var a,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t[0],u="/pages/play/play?site=".concat(a.extra.site,"&id=").concat(a.extra.id,"&name=").concat(a.label,"&url=").concat(a.value),n.next=4,e.addHistory(a.label,a.value);case 4:e.$u.route({url:u});case 5:case"end":return n.stop()}}),n)})))()},addHistory:function(t,e){var n=this;return h(r.default.mark((function u(){var c,i;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return c=f({},n.detail),c.key="".concat(n.siteKey,"-").concat(n.id),r.next=4,a.default.get("history","".concat(n.siteKey,"-").concat(n.id));case 4:if(i=r.sent,i.flag){r.next=10;break}return c.label=t,c.url=e,r.next=10,a.default.add("history",c);case 10:case"end":return r.stop()}}),u)})))()},getDetail:function(t,e){var n=this;return h(r.default.mark((function a(){var c,o,s,l,f,d,p,h,v,b,y;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u.default.detail(t,e);case 2:c=r.sent,n.detail=c,o=[],s=1,l=i(c.m3u8List),r.prev=7,l.s();case 9:if((f=l.n()).done){r.next=30;break}if(d=f.value,p=d.split("$"),h=c.m3u8List.length>1?"第".concat(s,"集"):n.detail.name,!(p.length>1)){r.next=25;break}v=0;case 15:if(!(v<p.length)){r.next=23;break}if(!(p[v].indexOf(".m3u8")>=0&&p[v].startsWith("http"))){r.next=20;break}return b={index:d,value:p[v],label:h,extra:{site:t,id:e}},o.push(b),r.abrupt("break",23);case 20:v++,r.next=15;break;case 23:r.next=27;break;case 25:y={index:d,value:p[0],label:h,extra:{site:t,id:e}},o.push(y);case 27:s++;case 28:r.next=9;break;case 30:r.next=35;break;case 32:r.prev=32,r.t0=r["catch"](7),l.e(r.t0);case 35:return r.prev=35,l.f(),r.finish(35);case 38:n.playList=o;case 39:case"end":return r.stop()}}),a,null,[[7,32,35,38]])})))()},checkStar:function(){var t=this;return h(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.default.get("star","".concat(t.siteKey,"-").concat(t.id));case 2:n=e.sent,t.starShow=n.flag;case 4:case"end":return e.stop()}}),e)})))()},removeStar:function(){var t=this;return h(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.default.remove("star","".concat(t.siteKey,"-").concat(t.id));case 2:n=e.sent,n.flag?t.$refs.uToast.show({title:"移除收藏成功",type:"success",duration:"1500"}):t.$refs.uToast.show({title:"移除收藏失败",type:"warning",duration:"1500"}),t.checkStar();case 5:case"end":return e.stop()}}),e)})))()},addStar:function(){var t=this;return h(r.default.mark((function e(){var n,u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=f({},t.detail),n.key="".concat(t.siteKey,"-").concat(t.id),e.next=4,a.default.add("star",n);case 4:u=e.sent,u.flag?t.$refs.uToast.show({title:"添加收藏成功",type:"success",duration:"1500"}):t.$refs.uToast.show({title:"添加收藏失败",type:"warning",duration:"1500"}),t.checkStar();case 7:case"end":return e.stop()}}),e)})))()},starEvent:function(){this.starShow?this.removeStar():this.addStar()}},onLoad:function(t){this.siteKey=t.site,this.id=t.id,this.getDetail(t.site,t.id),this.checkStar()}};e.default=v}).call(this,n("543d")["default"])},c2a6:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var r={uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"7ecc"))},uSelect:function(){return n.e("uview-ui/components/u-select/u-select").then(n.bind(null,"a89c"))},uToast:function(){return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null,"5e75"))}},a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},f1c9:function(t,e,n){"use strict";var r=n("20ab"),a=n.n(r);a.a}},[["8883","common/runtime","common/vendor"]]]);