(this.webpackJsonpsample_app=this.webpackJsonpsample_app||[]).push([[0],{16:function(e,n,a){e.exports={row:"Counter_row__1C_4f",value:"Counter_value__1d0te",button:"Counter_button__1xpSV",textbox:"Counter_textbox__3ODaX",asyncButton:"Counter_asyncButton__2UAr3 Counter_button__1xpSV"}},57:function(e,n,a){},63:function(e,n,a){},89:function(e,n,a){"use strict";a.r(n);var t=a(1),c=a.n(t),r=a(31),s=a.n(r),i=(a(57),a.p+"static/media/logo.b2e5a01e.svg"),l=a(22),o=a(29),u=function(){return Object(o.b)()},d=o.c,j=a(39),m=a.n(j),b=a(48),x=a(21);function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(n){return setTimeout((function(){return n({data:e})}),500)}))}var O=Object(x.b)("counter/fetchCount",function(){var e=Object(b.a)(m.a.mark((function e(n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),p=Object(x.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload}},extraReducers:function(e){e.addCase(O.pending,(function(e){e.status="loading"})).addCase(O.fulfilled,(function(e,n){e.status="idle",e.value+=n.payload}))}}),v=p.actions,f=v.increment,N=v.decrement,g=v.incrementByAmount,k=function(e){return e.counter.value},_=p.reducer,y=a(16),C=a.n(y),w=a(2);function S(){var e=d(k),n=u(),a=Object(t.useState)("2"),c=Object(l.a)(a,2),r=c[0],s=c[1],i=Number(r)||0;return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:C.a.row,children:[Object(w.jsx)("button",{className:C.a.button,"aria-label":"Decrement value",onClick:function(){return n(N())},children:"-"}),Object(w.jsx)("span",{className:C.a.value,children:e}),Object(w.jsx)("button",{className:C.a.button,"aria-label":"Increment value",onClick:function(){return n(f())},children:"+"})]}),Object(w.jsxs)("div",{className:C.a.row,children:[Object(w.jsx)("input",{className:C.a.textbox,"aria-label":"Set increment amount",value:r,onChange:function(e){return s(e.target.value)}}),Object(w.jsx)("button",{className:C.a.button,onClick:function(){return n(g(i))},children:"Add Amount"}),Object(w.jsx)("button",{className:C.a.asyncButton,onClick:function(){return n(O(i))},children:"Add Async"}),Object(w.jsx)("button",{className:C.a.button,onClick:function(){return n((e=i,function(n,a){k(a())%2===1&&n(g(e))}));var e},children:"Add If Odd"})]})]})}a(63);var A=a(8),D=a(19),B={name:"",surname:""},I=Object(x.c)({name:"userData",initialState:B,reducers:{setName:function(e,n){console.log("Updating redux name"),e.name=n.payload},setSurname:function(e,n){console.log("Updtaing redux surname"),e.surname=n.payload}}}),L=function(e){return e.userData.name},F=function(e){return e.userData.surname},E=I.actions,T=E.setName,U=E.setSurname,M=I.reducer;var q=function(){var e=u();return Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("button",{className:"btn btn-secondary",onClick:function(){e(T("")),e(U(""))},children:"Logout"})})};function J(){var e=d(L),n=d(F);return Object(w.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(w.jsx)(D.b,{to:"/",className:"navbar-brand",href:"#",children:Object(w.jsx)("span",{className:"mx-2",children:" Navbar"})}),Object(w.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(w.jsx)("span",{className:"navbar-toggler-icon"})}),Object(w.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(w.jsxs)("ul",{className:"navbar-nav",children:[Object(w.jsx)("li",{className:"nav-item active",children:Object(w.jsx)(D.b,{to:"/counter",className:"nav-link",href:"#",children:"Counter"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(D.b,{to:"/introduction",className:"nav-link",href:"#",children:"User name"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(D.b,{to:"/spacex",className:"nav-link",href:"#",children:"SpaceX"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link disabled",href:"#",children:"Disabled"})}),Object(w.jsx)("li",{className:"nav-link float-end "})]})}),Object(w.jsxs)("div",{className:"d-flex",children:[Object(w.jsxs)("span",{className:"",children:[e," ",n]}),Object(w.jsx)(q,{})]})]})}var P=a(30);var V=function(){var e=Object(t.useState)(B),n=Object(l.a)(e,2),a=n[0],c=n[1],r=u();return Object(w.jsx)("div",{className:"container w-25",children:Object(w.jsxs)("form",{children:[Object(w.jsx)("div",{className:"form-group",children:Object(w.jsx)("input",{type:"text",value:a.name,onChange:function(e){return c((function(n){return Object(P.a)(Object(P.a)({},n),{},{name:e.target.value})}))},className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Name"})}),Object(w.jsx)("div",{className:"form-group mt-2",children:Object(w.jsx)("input",{type:"text",value:a.surname,onChange:function(e){return c((function(n){return Object(P.a)(Object(P.a)({},n),{},{surname:e.target.value})}))},className:"form-control",id:"exampleInputPassword1",placeholder:"Surname"})}),Object(w.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),r(T(a.name)),r(U(a.surname)),c((function(){return console.log("Flushing local user state"),{name:"",surname:""}}))},children:"Submit"})]})})},X=a(49),$=a(104),H=a(106);var R=function(){return Object(w.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Error fetching data :-("})};function W(e){var n=e.missionName,a=e.missionDescription,t=e.articleLink,c=e.videoLink,r=e.wikipedia;c&&c.split("/").slice(-1).pop();return console.log(c),Object(w.jsxs)("div",{className:"card",children:[Object(w.jsx)("h5",{className:"card-header",children:n}),Object(w.jsxs)("div",{className:"card-body",children:[Object(w.jsx)("h5",{className:"card-title",children:"Mission details"}),Object(w.jsx)("p",{className:"card-text",children:a}),Object(w.jsx)("h5",{className:"card-title",children:"More information"}),Object(w.jsxs)("p",{className:"card-text",children:["For article click ",Object(w.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:"here"})]}),Object(w.jsxs)("p",{className:"card-text",children:["Wikipedia ",Object(w.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:"article"})]}),Object(w.jsx)("div",{className:"card-text",children:Object(w.jsx)("iframe",{src:"",frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"video"})})]})]})}var z,G=function(){return Object(w.jsxs)("div",{className:"alert alert-light",role:"alert",children:[Object(w.jsx)("span",{className:"text-primary m-2",children:"Fetching data"}),Object(w.jsx)("div",{className:"spinner-border text-primary",role:"status"})]})},K=Object($.a)(z||(z=Object(X.a)(["\n  query Launches($missionName:String!) {\n    launches(find:{mission_name:$missionName}) {\n    id\n    mission_name\n    mission_id\n    launch_success\n    details\n    rocket {\n      rocket_name\n    }\n    links {\n      article_link\n      reddit_recovery\n      video_link\n      wikipedia\n    }\n  }\n  }\n"]))),Q=function(){var e=Object(t.useState)(""),n=Object(l.a)(e,2),a=n[0],c=n[1],r=Object(H.a)(K),s=Object(l.a)(r,2),i=s[0],o=s[1],u=o.loading,d=o.error,j=o.data;return Object(t.useEffect)((function(){var e=setTimeout((function(){i({variables:{missionName:a}})}),800);return function(){clearTimeout(e)}}),[a]),Object(w.jsxs)("form",{children:[Object(w.jsx)("div",{className:"form-group",children:Object(w.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},className:"form-control","aria-describedby":"searchField",placeholder:"Search mission"})}),Object(w.jsxs)("div",{className:"mt-4",children:[u?Object(w.jsx)(G,{}):null,d?Object(w.jsx)(R,{}):null,j?j.launches.map((function(e){return Object(w.jsx)(W,{missionName:e.mission_name,missionDescription:e.details,articleLink:e.links.article_link,videoLink:"",wikipedia:e.links.wikipedia},"".concat(e.id,"_").concat(e.mission_name))})):null]})]})};var Y=function(){return console.log("I am rendering"),Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(J,{}),Object(w.jsxs)("header",{className:"container",children:[Object(w.jsx)("div",{className:"text-center",children:Object(w.jsx)("img",{src:i,className:"App-logo",alt:"logo"})}),Object(w.jsxs)(A.c,{children:[Object(w.jsx)(A.a,{path:"/counter",component:S}),Object(w.jsx)(A.a,{path:"/introduction",component:V}),Object(w.jsx)(A.a,{path:"/spacex",component:Q})]})]})]})},Z=Object(x.a)({reducer:{counter:_,userData:M}}),ee=(a(66),a(67),a(103)),ne=a(105),ae=a(102),te=new ee.a({uri:"https://api.spacex.land/graphql/",cache:new ne.a});s.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(D.a,{children:Object(w.jsx)(ae.a,{client:te,children:Object(w.jsx)(o.a,{store:Z,children:Object(w.jsx)(Y,{})})})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.b7bbb03a.chunk.js.map