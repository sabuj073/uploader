/*! For license information please see 25.bffa9833.chunk.js.LICENSE.txt */
(this["webpackJsonpseba-bikroy"]=this["webpackJsonpseba-bikroy"]||[]).push([[25],{181:function(e,r,t){"use strict";var n=t(182),d=t.n(n),c=t(1);r.a=function(e){var r=e.title,t=e.length,n=e.background,a=e.isFilter;return Object(c.jsxs)("div",{className:d.a.orderTitleWrapper,style:{backgroundColor:n},children:[Object(c.jsxs)("h3",{className:d.a.orderTitle,children:[r,": ",Object(c.jsxs)("span",{children:[" ",t]})]}),a&&Object(c.jsxs)("select",{className:d.a.orderSelect,name:"",id:"",children:[Object(c.jsx)("option",{value:"",children:"Today's"}),Object(c.jsx)("option",{value:"",children:"This Week"}),Object(c.jsx)("option",{value:"",children:"This Month"}),Object(c.jsx)("option",{value:"",children:"This Year"})]})]})}},182:function(e,r,t){e.exports={orderTitleWrapper:"OrderTitle_orderTitleWrapper__1NHez",orderTitle:"OrderTitle_orderTitle__x9Jkp",orderSelect:"OrderTitle_orderSelect__1YGKZ"}},183:function(e,r,t){"use strict";e.exports=t(184)},184:function(e,r,t){"use strict";var n=60103,d=60106,c=60107,a=60108,i=60114,l=60109,s=60110,o=60112,b=60113,j=60120,u=60115,O=60116,h=60121,m=60122,p=60117,x=60129,f=60131;if("function"===typeof Symbol&&Symbol.for){var k=Symbol.for;n=k("react.element"),d=k("react.portal"),c=k("react.fragment"),a=k("react.strict_mode"),i=k("react.profiler"),l=k("react.provider"),s=k("react.context"),o=k("react.forward_ref"),b=k("react.suspense"),j=k("react.suspense_list"),u=k("react.memo"),O=k("react.lazy"),h=k("react.block"),m=k("react.server.block"),p=k("react.fundamental"),x=k("react.debug_trace_mode"),f=k("react.legacy_hidden")}function g(e){if("object"===typeof e&&null!==e){var r=e.$$typeof;switch(r){case n:switch(e=e.type){case c:case i:case a:case b:case j:return e;default:switch(e=e&&e.$$typeof){case s:case o:case O:case u:case l:return e;default:return r}}case d:return r}}}var _=l,v=n,y=o,w=c,T=O,C=u,N=d,$=i,L=a,S=b;r.ContextConsumer=s,r.ContextProvider=_,r.Element=v,r.ForwardRef=y,r.Fragment=w,r.Lazy=T,r.Memo=C,r.Portal=N,r.Profiler=$,r.StrictMode=L,r.Suspense=S,r.isAsyncMode=function(){return!1},r.isConcurrentMode=function(){return!1},r.isContextConsumer=function(e){return g(e)===s},r.isContextProvider=function(e){return g(e)===l},r.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},r.isForwardRef=function(e){return g(e)===o},r.isFragment=function(e){return g(e)===c},r.isLazy=function(e){return g(e)===O},r.isMemo=function(e){return g(e)===u},r.isPortal=function(e){return g(e)===d},r.isProfiler=function(e){return g(e)===i},r.isStrictMode=function(e){return g(e)===a},r.isSuspense=function(e){return g(e)===b},r.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===c||e===i||e===x||e===a||e===b||e===j||e===f||"object"===typeof e&&null!==e&&(e.$$typeof===O||e.$$typeof===u||e.$$typeof===l||e.$$typeof===s||e.$$typeof===o||e.$$typeof===p||e.$$typeof===h||e[0]===m)},r.typeOf=g},185:function(e,r,t){"use strict";var n=t(3),d=t(186),c=t.n(d),a=t(1);r.a=function(e){var r=e.orderLinks;return Object(a.jsx)("div",{className:c.a.orderLink,children:r.map((function(e){return Object(a.jsx)(n.b,{to:"".concat(e.link),className:c.a.orderLinkItem,style:{backgroundColor:e.background},children:e.title},e.id)}))})}},186:function(e,r,t){e.exports={orderLink:"OrderLink_orderLink__OVvJy",orderLinkItem:"OrderLink_orderLinkItem__3AgxE"}},187:function(e,r,t){"use strict";t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return d})),t.d(r,"a",(function(){return c}));var n=[{id:1,link:"/cms/orders/new-order",title:"New Order",background:"#004a7c"},{id:2,link:"/cms/orders/all-pending-order",title:"Pending Order",background:"#e74c3c"},{id:3,link:"/cms/orders/all-pickup-order",title:"Picked Order",background:"rgb(255, 179, 0)"},{id:4,link:"/cms/orders/all-residual-order",title:"Residual Order",background:"#3498db"},{id:5,link:"/cms/orders/all-cancel-order",title:"Cancel Order",background:"#ff0000"},{id:6,link:"/cms/orders/all-complete-order",title:"Complete Order",background:"green"},{id:6,link:"/cms/orders/total-orders",title:"Total Orders",background:"#333"}],d=[{id:1,link:"/vendor/dashboard/orders/new-order",title:"New Order",background:"#004a7c"},{id:2,link:"/vendor/dashboard/orders/all-pending-order",title:"Pending Order",background:"#e74c3c"},{id:3,link:"/vendor/dashboard/orders/all-pickup-order",title:"Picked Order",background:"rgb(255, 179, 0)"},{id:4,link:"/vendor/dashboard/orders/all-residual-order",title:"Residual Order",background:"#3498db"},{id:1,link:"/vendor/dashboard/orders/all-cancel-order",title:"Cancel Order",background:"#ff0000"},{id:1,link:"/vendor/dashboard/orders/all-complete-order",title:"Complete Order",background:"green"}],c=[{id:1,link:"/delivery-man/orders/new-order",title:"New Order",background:"#004a7c"},{id:2,link:"/delivery-man/orders/all-pending-order",title:"Pending Order",background:"#e74c3c"},{id:3,link:"/delivery-man/orders/all-pickup-order",title:"Picked Order",background:"rgb(255, 179, 0)"},{id:4,link:"/delivery-man/orders/all-residual-order",title:"Residual Order",background:"#3498db"},{id:1,link:"/delivery-man/orders/all-cancel-order",title:"Cancel Order",background:"#ff0000"},{id:1,link:"/delivery-man/orders/all-complete-order",title:"Complete Order",background:"green"}]},200:function(e,r,t){e.exports={newOrderTableWrapper:"Order_newOrderTableWrapper__Flgdy",newOrderTable:"Order_newOrderTable__3787D",invoice:"Order_invoice__1Ek6c",details:"Order_details__ID4hW",location:"Order_location__2q3oF",accept:"Order_accept__mBCe9",cancel:"Order_cancel__gU2op",orderSelect:"Order_orderSelect__257PJ",times:"Order_times__1XrSt",payment:"Order_payment__1vE-J"}},201:function(e,r,t){"use strict";var n=t(2),d=t.n(n),c=t(183),a=t(1),i=d.a.lazy((function(){return t.e(51).then(t.bind(null,216))}));r.a=function(e){var r=e.data,t=e.idName;return Object(a.jsx)("div",{class:"modal fade",id:"".concat(t),tabindex:"-1","aria-labelledby":"".concat(t,"Label"),"aria-hidden":"true",children:Object(a.jsx)("div",{class:"modal-dialog modal-xl",children:Object(a.jsxs)("div",{class:"modal-content",children:[Object(a.jsxs)("div",{class:"modal-header",children:[Object(a.jsx)("h5",{class:"modal-title",id:"".concat(t,"Label"),children:"Order Details Modal"}),Object(a.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(a.jsx)("div",{class:"modal-body",children:Object(a.jsx)(c.Suspense,{fallback:"Loading ...",children:Object(a.jsx)(i,{data:r})})}),Object(a.jsx)("div",{class:"modal-footer",children:Object(a.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"})})]})})})}},475:function(e,r,t){"use strict";t.r(r);var n=t(5),d=t(185),c=t(187),a=t(181),i=t(200),l=t.n(i),s=t(201),o=t(1);r.default=function(){Object(n.f)();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:l.a.newOrder,children:[Object(o.jsx)(a.a,{title:"New Orders",length:3,background:"#004a7c",isFilter:!0}),Object(o.jsx)("div",{className:l.a.newOrderTableWrapper,children:Object(o.jsxs)("table",{className:l.a.newOrderTable,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"SL"}),Object(o.jsx)("th",{children:"Date & Time"}),Object(o.jsx)("th",{children:"Amount"}),Object(o.jsx)("th",{children:"Invoice"}),Object(o.jsx)("th",{children:"O.Details"}),Object(o.jsx)("th",{children:"Location"})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"1"}),Object(o.jsxs)("td",{children:["20-10-21",Object(o.jsx)("br",{}),"10.25 am"]}),Object(o.jsx)("td",{children:"\u09f345"}),Object(o.jsx)("td",{children:" IV00025 "}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{"data-bs-toggle":"modal","data-bs-target":"#vendorOrderDetailsModal",className:l.a.details,children:"Details"})}),Object(o.jsxs)("td",{className:l.a.location,children:[Object(o.jsx)("span",{children:"Dhaka"}),Object(o.jsx)("span",{children:"Banani"}),Object(o.jsx)("span",{children:"Chairman Bari"})]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"1"}),Object(o.jsxs)("td",{children:["20-10-21",Object(o.jsx)("br",{}),"10.25 am"]}),Object(o.jsx)("td",{children:"\u09f345"}),Object(o.jsx)("td",{children:" IV00025 "}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{"data-bs-toggle":"modal","data-bs-target":"#vendorOrderDetailsModal",className:l.a.details,children:"Details"})}),Object(o.jsxs)("td",{className:l.a.location,children:[Object(o.jsx)("span",{children:"Dhaka"}),Object(o.jsx)("span",{children:"Banani"}),Object(o.jsx)("span",{children:"Chairman Bari"})]})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"1"}),Object(o.jsxs)("td",{children:["20-10-21",Object(o.jsx)("br",{}),"10.25 am"]}),Object(o.jsx)("td",{children:"\u09f345"}),Object(o.jsx)("td",{children:" IV00025 "}),Object(o.jsx)("td",{children:Object(o.jsx)(s.a,{title:"Details"})}),Object(o.jsxs)("td",{className:l.a.location,children:[Object(o.jsx)("span",{children:"Dhaka"}),Object(o.jsx)("span",{children:"Banani"}),Object(o.jsx)("span",{children:"Chairman Bari"})]})]})]})]})}),Object(o.jsx)(d.a,{orderLinks:c.c})]}),Object(o.jsx)(s.a,{data:[],idName:"vendorOrderDetailsModal"})]})}}}]);
//# sourceMappingURL=25.bffa9833.chunk.js.map