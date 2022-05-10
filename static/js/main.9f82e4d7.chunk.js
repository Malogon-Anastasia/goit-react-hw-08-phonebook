(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{136:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(37),o=n.n(a),u=n(25),i=(n(87),n(16)),s=n(45),l=n.n(s),b=n(2),d=function(){return Object(b.jsxs)("nav",{children:[Object(b.jsx)(u.b,{to:"/",className:function(t){return t.isActive?l.a.active:l.a.link},children:"Home"}),Object(b.jsx)(u.b,{to:"/contacts",className:function(t){return t.isActive?l.a.active:l.a.link},children:"Contacts"})]})},j=n(18),f=n(152),h={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}};function O(){var t=Object(i.b)(),e=Object(i.c)(j.c.getUsername);return Object(b.jsxs)("div",{style:h.container,children:[Object(b.jsxs)("span",{style:h.name,children:["Welcome, ",e]}),Object(b.jsx)(f.a,{variant:"contained",type:"button",onClick:function(){return t(j.a.logOut())},children:"Log out"})]})}var g=n(47),p=n.n(g);function v(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(u.b,{to:"/register",className:function(t){return t.isActive?p.a.active:p.a.link},children:"Sign up"}),Object(b.jsx)(u.b,{to:"/login",className:function(t){return t.isActive?p.a.active:p.a.link},children:"Sign in"})]})}var x={header:{display:"flex",justifyContent:"space-between",alignItems:"center",textDecoration:"none",padding:12,fontWeight:700,borderBottom:"1px solid #2A363B",fontSize:"18px"}};function m(){var t=Object(i.c)(j.c.getIsLoggedIn);return Object(b.jsxs)("header",{style:x.header,children:[Object(b.jsx)(d,{}),t?Object(b.jsx)(O,{}):Object(b.jsx)(v,{})]})}var C=n(72),k=n(4);function y(t){var e=t.children,n=t.redirectTo,c=void 0===n?"/":n;return Object(i.c)(j.c.getIsLoggedIn)?e:Object(b.jsx)(k.a,{to:c})}function w(t){var e=t.children,n=t.restricted,c=void 0!==n&&n,r=t.redirectTo,a=void 0===r?"/":r;return Object(i.c)(j.c.getIsLoggedIn)&&c?Object(b.jsx)(k.a,{to:a}):e}var I=n(59),L=n(73);function _(){var t=Object(i.b)(),e=Object(i.c)(j.c.getFetchingCurrent);Object(c.useEffect)((function(){t(j.a.fetchCurrentUser())}),[t]);var r=Object(c.lazy)((function(){return n.e(2).then(n.bind(null,162))})),a=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,163))})),o=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,165))})),u=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(8),n.e(1)]).then(n.bind(null,167))}));return Object(b.jsxs)(C.a,{children:[Object(b.jsx)(L.a,{}),e?Object(b.jsx)(I.Audio,{heigth:"300",width:"300",color:"grey",arialLabel:"loading"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)(c.Suspense,{fallback:Object(b.jsx)(I.Audio,{heigth:"300",width:"300",color:"grey",arialLabel:"loading"}),children:Object(b.jsxs)(k.d,{children:[Object(b.jsx)(k.b,{path:"/",element:Object(b.jsx)(w,{children:Object(b.jsx)(r,{})})}),Object(b.jsx)(k.b,{path:"/register",element:Object(b.jsx)(w,{restricted:!0,children:Object(b.jsx)(a,{})})}),Object(b.jsx)(k.b,{path:"/login",element:Object(b.jsx)(w,{redirectTo:"/contacts",restricted:!0,children:Object(b.jsx)(o,{})})}),Object(b.jsx)(k.b,{path:"/contacts",element:Object(b.jsx)(y,{redirectTo:"/login",children:Object(b.jsx)(u,{})})})]})})]})]})}var U=n(8),A=n(77),F=n.n(A),N=n(34),S=n(78),T=n.n(S),z=n(62),R={key:"auth",storage:T.a,whitelist:["token"]},E=Object(U.a)({reducer:{auth:Object(N.g)(R,j.b),contacts:z.b},middleware:function(t){return t({serializableCheck:{ignoredActions:[N.a,N.f,N.b,N.c,N.d,N.e]}}).concat(F.a)},devTools:!1}),q=Object(N.h)(E),B=n(79);o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(i.a,{store:E,children:Object(b.jsx)(B.a,{loading:null,persistor:q,children:Object(b.jsx)(u.a,{children:Object(b.jsx)(_,{})})})})}),document.getElementById("root"))},18:function(t,e,n){"use strict";n.d(e,"a",(function(){return g})),n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return x}));var c=n(33),r=n.n(c),a=n(46),o=n(24),u=n.n(o),i=n(8),s=n(30);u.a.defaults.baseURL="https://connections-api.herokuapp.com/";var l,b=function(t){u.a.defaults.headers.common.Authorization="Bearer ".concat(t)},d=function(){u.a.defaults.headers.common.Authorization=""},j=Object(i.c)("auth/register",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.post("/users/signup",e);case 3:return n=t.sent,c=n.data,b(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0),s.a.error(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),f=Object(i.c)("auth/login",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.post("/users/login",e);case 3:return n=t.sent,c=n.data,b(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0),s.a.error(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),h=Object(i.c)("auth/logout",Object(a.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.post("/users/logout");case 3:d(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),s.a.error(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))),O=Object(i.c)("auth/refresh",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,o,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.getState(),null!==(a=c.auth.token)){t.next=5;break}return console.log("\u0422\u043e\u043a\u0435\u043d\u0430 \u043d\u0435\u0442, \u0443\u0445\u043e\u0434\u0438\u043c \u0438\u0437 fetchCurrentUser"),t.abrupt("return",n.rejectWithValue());case 5:return b(a),t.prev=6,t.next=9,u.a.get("/users/current");case 9:return o=t.sent,i=o.data,t.abrupt("return",i);case 14:t.prev=14,t.t0=t.catch(6),s.a.error(t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[6,14]])})));return function(e,n){return t.apply(this,arguments)}}()),g={register:j,logOut:h,logIn:f,fetchCurrentUser:O},p={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUsername:function(t){return t.auth.user.name},getFetchingCurrent:function(t){return t.auth.isFetchingCurrentUser}},v=n(3),x=Object(i.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCarrentUser:!1},extraReducers:(l={},Object(v.a)(l,g.register.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(v.a)(l,g.logIn.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(v.a)(l,g.logOut.fulfilled,(function(t,e){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(v.a)(l,g.fetchCurrentUser.pending,(function(t){t.isFetchingCurrentUser=!0})),Object(v.a)(l,g.fetchCurrentUser.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0,t.isFetchingCurrentUser=!1})),Object(v.a)(l,g.fetchCurrentUser.rejected,(function(t){t.isFetchingCurrentUser=!1})),l)}).reducer},45:function(t,e,n){t.exports={link:"Navigation_link__1TLkn",active:"Navigation_active__2ho22 Navigation_link__1TLkn"}},47:function(t,e,n){t.exports={link:"AuthNav_link__EmqT-",active:"AuthNav_active__1DJ10"}},6:function(t,e,n){"use strict";n.d(e,"i",(function(){return r})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return b})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return j}));var c=n(8),r=Object(c.b)("contacts/fetchContactsRequest"),a=Object(c.b)("contacts/fetchContactsSuccess"),o=Object(c.b)("contacts/fetchContactsError"),u=Object(c.b)("contacts/addContactRequest"),i=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),l=Object(c.b)("contacts/deleteContactRequest"),b=Object(c.b)("contacts/deleteContactSuccess"),d=Object(c.b)("contacts/deleteContactError"),j=Object(c.b)("contacts/changeFilter")},60:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a}));var c=function(t){return t.contacts.items},r=function(t){return t.contacts.filter},a=function(t){var e=c(t),n=r(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},o={getLoading:function(t){return t.contacts.loading},getFilter:r,getVisibleContacts:a,getTotalContactCount:function(t){return c(t).length}};e.a=o},61:function(t,e,n){"use strict";var c=n(24),r=n.n(c),a=n(30),o=n(6),u={fetchContacts:function(){return function(t){t(Object(o.i)()),r.a.get("/contacts").then((function(e){var n=e.data;return t(Object(o.j)(n))})).catch((function(e){return t(Object(o.h)(e.message))}))}},addContact:function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(Object(o.b)()),r.a.post("/contacts",c).then((function(e){var n=e.data;t(Object(o.c)(n)),a.a.success("Contact successfully created")})).catch((function(e){return t(Object(o.a)(e.message))}))}},deleteContact:function(t){return function(e){e(Object(o.f)()),r.a.delete("/contacts/".concat(t)).then((function(){e(Object(o.g)(t)),a.a.success("Contact successfully deleted")})).catch((function(t){return e(Object(o.e)(t.message))}))}}};e.a=u},62:function(t,e,n){"use strict";n.d(e,"a",(function(){return o.a})),n.d(e,"c",(function(){return u.a})),n.d(e,"b",(function(){return p}));var c,r,a,o=n(61),u=n(60),i=n(23),s=n(3),l=n(14),b=n(8),d=n(30),j=n(6),f=Object(b.d)(!1,(c={},Object(s.a)(c,j.i,(function(){return!0})),Object(s.a)(c,j.j,(function(){return!1})),Object(s.a)(c,j.h,(function(){return!1})),Object(s.a)(c,j.b,(function(){return!0})),Object(s.a)(c,j.c,(function(){return!1})),Object(s.a)(c,j.a,(function(){return!1})),Object(s.a)(c,j.f,(function(){return!0})),Object(s.a)(c,j.g,(function(){return!1})),Object(s.a)(c,j.e,(function(){return!1})),c)),h=Object(b.d)([],(r={},Object(s.a)(r,j.j,(function(t,e){return e.payload})),Object(s.a)(r,j.c,(function(t,e){var n=e.payload;return[].concat(Object(i.a)(t),[n])})),Object(s.a)(r,j.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),O=Object(b.d)("",Object(s.a)({},j.d,(function(t,e){return e.payload}))),g=Object(b.d)(null,(a={},Object(s.a)(a,j.h,(function(t,e){var n=e.payload;return d.a.error(n)})),Object(s.a)(a,j.a,(function(t){return console.log(t)})),Object(s.a)(a,j.e,(function(t){return console.log(t)})),a)),p=Object(l.b)({loading:f,items:h,filter:O,error:g})},72:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(76),r=n.n(c),a=n(2);function o(t){var e=t.children;return Object(a.jsx)("div",{className:r.a.container,children:e})}},76:function(t,e,n){t.exports={container:"Container_container__3-9M4"}},87:function(t,e,n){}},[[136,6,7]]]);
//# sourceMappingURL=main.9f82e4d7.chunk.js.map