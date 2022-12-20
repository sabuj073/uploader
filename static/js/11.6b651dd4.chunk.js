/*! For license information please see 11.6b651dd4.chunk.js.LICENSE.txt */
(this["webpackJsonpseba-bikroy"]=this["webpackJsonpseba-bikroy"]||[]).push([[11],{181:function(e,r,t){"use strict";var n=t(182),c=t.n(n),d=t(1);r.a=function(e){var r=e.title,t=e.length,n=e.background,a=e.isFilter;return Object(d.jsxs)("div",{className:c.a.orderTitleWrapper,style:{backgroundColor:n},children:[Object(d.jsxs)("h3",{className:c.a.orderTitle,children:[r,": ",Object(d.jsxs)("span",{children:[" ",t]})]}),a&&Object(d.jsxs)("select",{className:c.a.orderSelect,name:"",id:"",children:[Object(d.jsx)("option",{value:"",children:"Today's"}),Object(d.jsx)("option",{value:"",children:"This Week"}),Object(d.jsx)("option",{value:"",children:"This Month"}),Object(d.jsx)("option",{value:"",children:"This Year"})]})]})}},182:function(e,r,t){e.exports={orderTitleWrapper:"OrderTitle_orderTitleWrapper__1NHez",orderTitle:"OrderTitle_orderTitle__x9Jkp",orderSelect:"OrderTitle_orderSelect__1YGKZ"}},183:function(e,r,t){"use strict";e.exports=t(184)},184:function(e,r,t){"use strict";var n=60103,c=60106,d=60107,a=60108,l=60114,i=60109,s=60110,o=60112,b=60113,u=60120,j=60115,O=60116,p=60121,h=60122,m=60117,x=60129,f=60131;if("function"===typeof Symbol&&Symbol.for){var k=Symbol.for;n=k("react.element"),c=k("react.portal"),d=k("react.fragment"),a=k("react.strict_mode"),l=k("react.profiler"),i=k("react.provider"),s=k("react.context"),o=k("react.forward_ref"),b=k("react.suspense"),u=k("react.suspense_list"),j=k("react.memo"),O=k("react.lazy"),p=k("react.block"),h=k("react.server.block"),m=k("react.fundamental"),x=k("react.debug_trace_mode"),f=k("react.legacy_hidden")}function g(e){if("object"===typeof e&&null!==e){var r=e.$$typeof;switch(r){case n:switch(e=e.type){case d:case l:case a:case b:case u:return e;default:switch(e=e&&e.$$typeof){case s:case o:case O:case j:case i:return e;default:return r}}case c:return r}}}var v=i,y=n,_=o,N=d,S=O,w=j,C=c,T=l,L=a,$=b;r.ContextConsumer=s,r.ContextProvider=v,r.Element=y,r.ForwardRef=_,r.Fragment=N,r.Lazy=S,r.Memo=w,r.Portal=C,r.Profiler=T,r.StrictMode=L,r.Suspense=$,r.isAsyncMode=function(){return!1},r.isConcurrentMode=function(){return!1},r.isContextConsumer=function(e){return g(e)===s},r.isContextProvider=function(e){return g(e)===i},r.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},r.isForwardRef=function(e){return g(e)===o},r.isFragment=function(e){return g(e)===d},r.isLazy=function(e){return g(e)===O},r.isMemo=function(e){return g(e)===j},r.isPortal=function(e){return g(e)===c},r.isProfiler=function(e){return g(e)===l},r.isStrictMode=function(e){return g(e)===a},r.isSuspense=function(e){return g(e)===b},r.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===d||e===l||e===x||e===a||e===b||e===u||e===f||"object"===typeof e&&null!==e&&(e.$$typeof===O||e.$$typeof===j||e.$$typeof===i||e.$$typeof===s||e.$$typeof===o||e.$$typeof===m||e.$$typeof===p||e[0]===h)},r.typeOf=g},185:function(e,r,t){"use strict";var n=t(3),c=t(186),d=t.n(c),a=t(1);r.a=function(e){var r=e.orderLinks;return Object(a.jsx)("div",{className:d.a.orderLink,children:r.map((function(e){return Object(a.jsx)(n.b,{to:"".concat(e.link),className:d.a.orderLinkItem,style:{backgroundColor:e.background},children:e.title},e.id)}))})}},186:function(e,r,t){e.exports={orderLink:"OrderLink_orderLink__OVvJy",orderLinkItem:"OrderLink_orderLinkItem__3AgxE"}},187:function(e,r,t){"use strict";t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return c})),t.d(r,"a",(function(){return d}));var n=[{id:1,link:"/cms/orders/new-order",title:"New Order",background:"#004a7c"},{id:2,link:"/cms/orders/all-pending-order",title:"Pending Order",background:"#e74c3c"},{id:3,link:"/cms/orders/all-pickup-order",title:"Picked Order",background:"rgb(255, 179, 0)"},{id:4,link:"/cms/orders/all-residual-order",title:"Residual Order",background:"#3498db"},{id:5,link:"/cms/orders/all-cancel-order",title:"Cancel Order",background:"#ff0000"},{id:6,link:"/cms/orders/all-complete-order",title:"Complete Order",background:"green"},{id:6,link:"/cms/orders/total-orders",title:"Total Orders",background:"#333"}],c=[{id:1,link:"/vendor/dashboard/orders/new-order",title:"New Order",background:"#004a7c"},{id:2,link:"/vendor/dashboard/orders/all-pending-order",title:"Pending Order",background:"#e74c3c"},{id:3,link:"/vendor/dashboard/orders/all-pickup-order",title:"Picked Order",background:"rgb(255, 179, 0)"},{id:4,link:"/vendor/dashboard/orders/all-residual-order",title:"Residual Order",background:"#3498db"},{id:1,link:"/vendor/dashboard/orders/all-cancel-order",title:"Cancel Order",background:"#ff0000"},{id:1,link:"/vendor/dashboard/orders/all-complete-order",title:"Complete Order",background:"green"}],d=[{id:1,link:"/delivery-man/orders/new-order",title:"New Order",background:"#004a7c"},{id:2,link:"/delivery-man/orders/all-pending-order",title:"Pending Order",background:"#e74c3c"},{id:3,link:"/delivery-man/orders/all-pickup-order",title:"Picked Order",background:"rgb(255, 179, 0)"},{id:4,link:"/delivery-man/orders/all-residual-order",title:"Residual Order",background:"#3498db"},{id:1,link:"/delivery-man/orders/all-cancel-order",title:"Cancel Order",background:"#ff0000"},{id:1,link:"/delivery-man/orders/all-complete-order",title:"Complete Order",background:"green"}]},195:function(e,r,t){"use strict";var n=t(2),c=t.n(n),d=t(183),a=t(1),l=c.a.lazy((function(){return t.e(3).then(t.bind(null,191))}));r.a=function(e){var r=e.data,t=e.idName;return Object(a.jsx)("div",{class:"modal fade",id:"".concat(t),tabindex:"-1","aria-labelledby":"".concat(t,"Label"),"aria-hidden":"true",children:Object(a.jsx)("div",{class:"modal-dialog modal-xl",children:Object(a.jsxs)("div",{class:"modal-content",children:[Object(a.jsxs)("div",{class:"modal-header",children:[Object(a.jsx)("h5",{class:"modal-title",id:"".concat(t,"Label"),children:"Invoice Modal"}),Object(a.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(a.jsx)("div",{class:"modal-body",children:Object(a.jsx)(d.Suspense,{fallback:"Loading ...",children:Object(a.jsx)(l,{data:r})})}),Object(a.jsx)("div",{class:"modal-footer",children:Object(a.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"})})]})})})}},196:function(e,r,t){"use strict";var n=t(2),c=t.n(n),d=t(183),a=t(1),l=c.a.lazy((function(){return t.e(57).then(t.bind(null,213))}));r.a=function(e){var r=e.data,t=e.idName;return Object(a.jsx)("div",{class:"modal fade",id:"".concat(t),tabindex:"-1","aria-labelledby":"".concat(t,"Label"),"aria-hidden":"true",children:Object(a.jsx)("div",{class:"modal-dialog modal-xl",children:Object(a.jsxs)("div",{class:"modal-content",children:[Object(a.jsxs)("div",{class:"modal-header",children:[Object(a.jsx)("h5",{class:"modal-title",id:"".concat(t,"Label"),children:"Order Details Modal"}),Object(a.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(a.jsx)("div",{class:"modal-body",children:Object(a.jsx)(d.Suspense,{fallback:"Loading ...",children:Object(a.jsx)(l,{data:r})})}),Object(a.jsx)("div",{class:"modal-footer",children:Object(a.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"})})]})})})}},197:function(e,r,t){e.exports={newOrderTableWrapper:"Orders_newOrderTableWrapper__lN4Lz",newOrderTable:"Orders_newOrderTable__3H2pb",invoice:"Orders_invoice__3dB1u",details:"Orders_details__a3ZMv",location:"Orders_location__2pQxP",accept:"Orders_accept__2iDpK",cancel:"Orders_cancel__3NyM5",orderSelect:"Orders_orderSelect__3cadM",times:"Orders_times__1E9gY",payment:"Orders_payment__RylAK"}},488:function(e,r,t){"use strict";t.r(r);var n=t(4),c=t.n(n),d=t(10),a=t(7),l=t(195),i=t(196),s=t(185),o=t(187),b=t(181),u=t(197),j=t.n(u),O=t(9),p=t(2),h=t(1);r.default=function(){var e=Object(p.useState)([]),r=Object(a.a)(e,2),t=r[0],n=r[1],u=Object(p.useState)([]),m=Object(a.a)(u,2),x=(m[0],m[1]);return function(){var e=Object(d.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("get-complete-order").then((function(e){0==t.length&&Number(e.data.length)>0&&(n(e.data),x(Number(e.data.length)))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:j.a.newOrder,children:[Object(h.jsx)(b.a,{title:"Complete Orders",length:t.length,background:"green",isFilter:!0}),Object(h.jsx)("div",{className:j.a.newOrderTableWrapper,children:Object(h.jsxs)("table",{className:j.a.newOrderTable,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"SL"}),Object(h.jsx)("th",{children:"Date & Time"}),Object(h.jsx)("th",{children:"Amount"}),Object(h.jsx)("th",{children:"Invoice"}),Object(h.jsx)("th",{children:"O.Details"}),Object(h.jsx)("th",{children:"Location"}),Object(h.jsx)("th",{children:"Action"}),Object(h.jsx)("th",{children:"Accepted By "}),Object(h.jsx)("th",{children:"Status"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e,r){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:r+1}),Object(h.jsx)("td",{children:e.date_data}),Object(h.jsxs)("td",{children:["\u09f3",e.total_amount]}),Object(h.jsx)("td",{children:Object(h.jsxs)("button",{"data-bs-toggle":"modal","data-bs-target":"#invoiceModalCMS",className:j.a.invoice,children:["#SB",e.order_id]})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{"data-bs-toggle":"modal","data-bs-target":"#orderDetailsNew",className:j.a.details,children:"Details"})}),Object(h.jsx)("td",{className:j.a.location,children:Object(h.jsx)("span",{children:e.address})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{className:j.a.accept,children:"Accept"})}),Object(h.jsx)("td",{children:Object(h.jsxs)("select",{className:j.a.orderSelect,name:"",style:{background:"#1e88e5"},children:[Object(h.jsx)("option",{value:"",children:"Super Admin"}),Object(h.jsx)("option",{value:"",children:"Sub Admin"}),Object(h.jsx)("option",{value:"",children:"Admin One"})]})}),Object(h.jsx)("td",{children:Object(h.jsxs)("select",{value:e.status,className:j.a.orderSelect,name:"",id:"",style:{background:"#e74c3c"},children:[Object(h.jsx)("option",{style:{background:"#e74c3c"},value:"Pending",children:"Pending"}),Object(h.jsx)("option",{style:{background:"rgb(255, 179, 0)"},value:"Picked Up",children:"Picked Up"}),Object(h.jsx)("option",{style:{background:"#3498db"},value:"complete",children:"complete"}),Object(h.jsx)("option",{style:{background:"green"},value:"Complete",children:"Complete"}),Object(h.jsx)("option",{style:{background:"red"},value:"complete",children:"complete"}),Object(h.jsx)("option",{style:{background:"red"},value:"Spam",children:"Spam"})]})})]})}))})]})}),Object(h.jsx)(s.a,{orderLinks:o.b})]}),Object(h.jsx)(l.a,{data:[],idName:"invoiceModalCMS"}),Object(h.jsx)(i.a,{data:[],idName:"orderDetailsNew"})]})}}}]);
//# sourceMappingURL=11.6b651dd4.chunk.js.map