(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{370:function(t,e,n){"use strict";n.r(e);var r=n(392),c=n(367),l=n(395),o=n(240),d=n(371),_=n(391),v=n(393),f=n(365),m=n(425),w=(n(36),n(34),n(51),{name:"TwitterCard",props:["t"]}),h=n(93),component=Object(h.a)(w,(function(){var t,e,n,w=this,h=w._self._c;return h("div",[h(r.a,{staticClass:"mt-3",attrs:{flat:"",outlined:"","max-width":"400"}},[h(c.c,[h(d.a,{staticClass:"pl-0"},[h(d.a,{staticClass:"pl-0",attrs:{href:"https://twitter.com/".concat(w.t.user.screen_name,"/status/").concat(w.t.id_str),target:"_blank"}},[h(v.a,{attrs:{color:"grey",size:"40"}},[h(o.a,{attrs:{src:w.t.user.profile_image_url}})],1),w._v(" "),h(f.a,[h(f.c,[w._v(w._s(w.t.user.name.length>15?w.t.user.name.slice(0,15)+"...":w.t.user.name))]),w._v(" "),h(f.b,{staticClass:"font-weight-light"},[w._v("@"+w._s(w.t.user.screen_name))])],1)],1),w._v(" "),h(m.a),w._v(" "),h(_.a,[h(l.a,{attrs:{color:"blue"}},[w._v("mdi-twitter")])],1)],1)],1),w._v(" "),h(c.b,{staticClass:"text--primary"},[h("p",[w._v(" "+w._s(w.t.text)+" ")]),w._v(" "),w._l(null===(t=w.t.extended_entities)||void 0===t?void 0:t.media,(function(t,i){return h("div",{key:i,staticClass:"pt-1"},[h(o.a,{attrs:{src:t.media_url}})],1)})),w._v(" "),w._l(null===(e=w.t.extended_tweet)||void 0===e||null===(n=e.extended_entities)||void 0===n?void 0:n.media,(function(t,i){return h("div",{key:i,staticClass:"pt-1"},[h(o.a,{attrs:{src:t.media_url}})],1)}))],2),w._v(" "),h(c.a,[h(m.a),w._v(" "),h("span",{staticClass:"body-2 font-weight-light"},[w._v(w._s(w.t.created_at))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},426:function(t,e,n){"use strict";n.r(e);var r=n(424),c=n(423),l=n(24),o=(n(82),n(7),{name:"IndexPage",components:{TweetCard:n(370).default},data:function(){return{tweetData:[],lastUpdate:""}},methods:{getTweetData:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://photo-contest-api.kokoa.dev");case 2:return data=e.sent,e.next=5,data.json();case 5:t.tweetData=e.sent;case 6:case"end":return e.stop()}}),e)})))()}},created:function(){this.getTweetData()}}),d=n(93),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e(c.a,t._l(t.tweetData,(function(t,n){return e(r.a,{key:n,attrs:{cols:"4"}},[e("TweetCard",{attrs:{t:t}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TweetCard:n(370).default})}}]);