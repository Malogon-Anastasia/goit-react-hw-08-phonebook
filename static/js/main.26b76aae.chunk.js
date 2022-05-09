(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{102:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(18),o=n.n(a),u=n(13),i=(n(51),n(8)),s=n(21),l=n.n(s),b=n(1),d=function(){return Object(b.jsxs)("nav",{children:[Object(b.jsx)(u.b,{to:"/",className:function(t){return t.isActive?l.a.active:l.a.link},children:"Home"}),Object(b.jsx)(u.b,{to:"/contacts",className:function(t){return t.isActive?l.a.active:l.a.link},children:"Contacts"})]})},j=n(9),f={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}};function h(){var t=Object(i.b)(),e=Object(i.c)(j.c.getUsername);return Object(b.jsxs)("div",{style:f.container,children:[Object(b.jsxs)("span",{style:f.name,children:["Welcome, ",e]}),Object(b.jsx)("button",{type:"button",onClick:function(){return t(j.a.logOut())},children:"Log out"})]})}var O=n(23),g=n.n(O);function p(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(u.b,{to:"/register",className:function(t){return t.isActive?g.a.active:g.a.link},children:"Sign up"}),Object(b.jsx)(u.b,{to:"/login",className:function(t){return t.isActive?g.a.active:g.a.link},children:"Sign in"})]})}var v={header:{display:"flex",justifyContent:"space-between",alignItems:"center",textDecoration:"none",padding:12,fontWeight:700,borderBottom:"1px solid #2A363B",fontSize:"18px"}};function x(){var t=Object(i.c)(j.c.getIsLoggedIn);return Object(b.jsxs)("header",{style:v.header,children:[Object(b.jsx)(d,{}),t?Object(b.jsx)(h,{}):Object(b.jsx)(p,{})]})}var m=n(40),C=n(2);function k(t){var e=t.children,n=t.redirectTo,c=void 0===n?"/":n;return Object(i.c)(j.c.getIsLoggedIn)?e:Object(b.jsx)(C.a,{to:c})}function y(t){var e=t.children,n=t.restricted,c=void 0!==n&&n,r=t.redirectTo,a=void 0===r?"/":r;return Object(i.c)(j.c.getIsLoggedIn)&&c?Object(b.jsx)(C.a,{to:a}):e}var _=n(28);n(98);function I(){var t=Object(i.b)(),e=Object(i.c)(j.c.getFetchingCurrent);Object(c.useEffect)((function(){t(j.a.fetchCurrentUser())}),[t]);var r=Object(c.lazy)((function(){return n.e(1).then(n.bind(null,108))})),a=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,109))})),o=Object(c.lazy)((function(){return n.e(2).then(n.bind(null,110))})),u=Object(c.lazy)((function(){return Promise.all([n.e(7),n.e(0)]).then(n.bind(null,111))}));return Object(b.jsx)(m.a,{children:e?Object(b.jsx)(_.Audio,{heigth:"300",width:"300",color:"grey",arialLabel:"loading"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x,{}),Object(b.jsx)(c.Suspense,{fallback:Object(b.jsx)(_.Audio,{heigth:"300",width:"300",color:"grey",arialLabel:"loading"}),children:Object(b.jsxs)(C.d,{children:[Object(b.jsx)(C.b,{path:"/",element:Object(b.jsx)(y,{children:Object(b.jsx)(r,{})})}),Object(b.jsx)(C.b,{path:"/register",element:Object(b.jsx)(y,{restricted:!0,children:Object(b.jsx)(a,{})})}),Object(b.jsx)(C.b,{path:"/login",element:Object(b.jsx)(y,{redirectTo:"/contacts",restricted:!0,children:Object(b.jsx)(o,{})})}),Object(b.jsx)(C.b,{path:"/contacts",element:Object(b.jsx)(k,{redirectTo:"/login",children:Object(b.jsx)(u,{})})})]})})]})})}var L=n(4),w=n(43),A=n.n(w),U=n(16),F=n(44),N=n.n(F),S=n(31),T={key:"auth",storage:N.a,whitelist:["token"]},z=Object(L.a)({reducer:{auth:Object(U.g)(T,j.b),contacts:S.b},middleware:function(t){return t({serializableCheck:{ignoredActions:[U.a,U.f,U.b,U.c,U.d,U.e]}}).concat(A.a)},devTools:!1}),R=Object(U.h)(z),E=n(45);o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(i.a,{store:z,children:Object(b.jsx)(E.a,{loading:null,persistor:R,children:Object(b.jsx)(u.a,{children:Object(b.jsx)(I,{})})})})}),document.getElementById("root"))},21:function(t,e,n){t.exports={link:"Navigation_link__1TLkn",active:"Navigation_active__2ho22 Navigation_link__1TLkn"}},23:function(t,e,n){t.exports={link:"AuthNav_link__EmqT-",active:"AuthNav_active__1DJ10"}},29:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a}));var c=function(t){return t.contacts.items},r=function(t){return t.contacts.filter},a=function(t){var e=c(t),n=r(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},o={getLoading:function(t){return t.contacts.loading},getFilter:r,getVisibleContacts:a,getTotalContactCount:function(t){return c(t).length}};e.a=o},3:function(t,e,n){"use strict";n.d(e,"i",(function(){return r})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return b})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return j}));var c=n(4),r=Object(c.b)("contacts/fetchContactsRequest"),a=Object(c.b)("contacts/fetchContactsSuccess"),o=Object(c.b)("contacts/fetchContactsError"),u=Object(c.b)("contacts/addContactRequest"),i=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),l=Object(c.b)("contacts/deleteContactRequest"),b=Object(c.b)("contacts/deleteContactSuccess"),d=Object(c.b)("contacts/deleteContactError"),j=Object(c.b)("contacts/changeFilter")},30:function(t,e,n){"use strict";var c=n(12),r=n.n(c),a=n(14),o=n(3),u={fetchContacts:function(){return function(t){t(Object(o.i)()),r.a.get("/contacts").then((function(e){var n=e.data;return t(Object(o.j)(n))})).catch((function(e){return t(Object(o.h)(e.message))}))}},addContact:function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(Object(o.b)()),r.a.post("/contacts",c).then((function(e){var n=e.data;t(Object(o.c)(n)),a.a.success("Contact successfully created")})).catch((function(e){return t(Object(o.a)(e.message))}))}},deleteContact:function(t){return function(e){e(Object(o.f)()),r.a.delete("/contacts/".concat(t)).then((function(){e(Object(o.g)(t)),a.a.success("Contact successfully deleted")})).catch((function(t){return e(Object(o.e)(t.message))}))}}};e.a=u},31:function(t,e,n){"use strict";n.d(e,"a",(function(){return o.a})),n.d(e,"c",(function(){return u.a})),n.d(e,"b",(function(){return p}));var c,r,a,o=n(30),u=n(29),i=n(46),s=n(5),l=n(6),b=n(4),d=n(14),j=n(3),f=Object(b.d)(!1,(c={},Object(s.a)(c,j.i,(function(){return!0})),Object(s.a)(c,j.j,(function(){return!1})),Object(s.a)(c,j.h,(function(){return!1})),Object(s.a)(c,j.b,(function(){return!0})),Object(s.a)(c,j.c,(function(){return!1})),Object(s.a)(c,j.a,(function(){return!1})),Object(s.a)(c,j.f,(function(){return!0})),Object(s.a)(c,j.g,(function(){return!1})),Object(s.a)(c,j.e,(function(){return!1})),c)),h=Object(b.d)([],(r={},Object(s.a)(r,j.j,(function(t,e){return e.payload})),Object(s.a)(r,j.c,(function(t,e){var n=e.payload;return[].concat(Object(i.a)(t),[n])})),Object(s.a)(r,j.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),O=Object(b.d)("",Object(s.a)({},j.d,(function(t,e){return e.payload}))),g=Object(b.d)(null,(a={},Object(s.a)(a,j.h,(function(t,e){var n=e.payload;return d.a.error(n)})),Object(s.a)(a,j.a,(function(t){return console.log(t)})),Object(s.a)(a,j.e,(function(t){return console.log(t)})),a)),p=Object(l.b)({loading:f,items:h,filter:O,error:g})},40:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(42),r=n.n(c),a=n(1);function o(t){var e=t.children;return Object(a.jsx)("div",{className:r.a.container,children:e})}},42:function(t,e,n){t.exports={container:"Container_container__3-9M4"}},51:function(t,e,n){},9:function(t,e,n){"use strict";n.d(e,"a",(function(){return g})),n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return x}));var c=n(15),r=n.n(c),a=n(22),o=n(12),u=n.n(o),i=n(4),s=n(14);u.a.defaults.baseURL="https://connections-api.herokuapp.com/";var l,b=function(t){u.a.defaults.headers.common.Authorization="Bearer ".concat(t)},d=function(){u.a.defaults.headers.common.Authorization=""},j=Object(i.c)("auth/register",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.post("/users/signup",e);case 3:return n=t.sent,c=n.data,b(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0),s.a.error(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),f=Object(i.c)("auth/login",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.post("/users/login",e);case 3:return n=t.sent,c=n.data,b(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0),s.a.error(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),h=Object(i.c)("auth/logout",Object(a.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.post("/users/logout");case 3:d(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),s.a.error(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))),O=Object(i.c)("auth/refresh",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,o,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.getState(),null!==(a=c.auth.token)){t.next=5;break}return console.log("\u0422\u043e\u043a\u0435\u043d\u0430 \u043d\u0435\u0442, \u0443\u0445\u043e\u0434\u0438\u043c \u0438\u0437 fetchCurrentUser"),t.abrupt("return",n.rejectWithValue());case 5:return b(a),t.prev=6,t.next=9,u.a.get("/users/current");case 9:return o=t.sent,i=o.data,t.abrupt("return",i);case 14:t.prev=14,t.t0=t.catch(6),s.a.error(t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[6,14]])})));return function(e,n){return t.apply(this,arguments)}}()),g={register:j,logOut:h,logIn:f,fetchCurrentUser:O},p={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUsername:function(t){return t.auth.user.name},getFetchingCurrent:function(t){return t.auth.isFetchingCurrentUser}},v=n(5),x=Object(i.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCarrentUser:!1},extraReducers:(l={},Object(v.a)(l,g.register.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(v.a)(l,g.logIn.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(v.a)(l,g.logOut.fulfilled,(function(t,e){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(v.a)(l,g.fetchCurrentUser.pending,(function(t){t.isFetchingCurrentUser=!0})),Object(v.a)(l,g.fetchCurrentUser.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0,t.isFetchingCurrentUser=!1})),Object(v.a)(l,g.fetchCurrentUser.rejected,(function(t){t.isFetchingCurrentUser=!1})),l)}).reducer},98:function(t,e,n){t.exports={App:"App_App__20WD1",loader:"App_loader__39LFI"}}},[[102,5,6]]]);
//# sourceMappingURL=main.26b76aae.chunk.js.map