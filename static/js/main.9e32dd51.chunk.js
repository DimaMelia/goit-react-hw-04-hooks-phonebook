(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"Form_form__1xmcB",label:"Form_label__2fwHV",input:"Form_input__2a3Md",button:"Form_button__djCz6"}},,,,,,,function(t,e,n){t.exports={container:"Container_container__2mY4D",title:"Container_title__1K1k3"}},function(t,e,n){t.exports={label:"Filter_label__2jrom",input:"Filter_input__2aNrt"}},,function(t,e,n){t.exports={button:"ContactListItem_button__348RD"}},,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(11),i=n.n(r),u=(n(19),n(3)),l=n(13),s=n(5),b=(n(20),n(6)),m=n(23),j=n(2),f=n.n(j);var d=function(t){var e=t.onSubmit,n=Object(c.useState)({id:"",name:"",number:""}),o=Object(s.a)(n,2),r=o[0],i=o[1],l=function(t){var e=t.target,n=e.name,a=e.value;i(Object(u.a)(Object(u.a)({},r),{},Object(b.a)({},n,a)))};return Object(a.jsxs)("form",{className:f.a.form,onSubmit:function(t){t.preventDefault(),e(r,Object(m.a)()),i({id:"",name:"",number:""})},children:[Object(a.jsxs)("label",{className:f.a.label,children:["Name",Object(a.jsx)("input",{className:f.a.input,type:"text",name:"name",value:r.name,onChange:l})]}),Object(a.jsxs)("label",{className:f.a.label,children:["Number",Object(a.jsx)("input",{className:f.a.input,type:"text",name:"number",value:r.number,onChange:l})]}),Object(a.jsx)("button",{className:f.a.button,type:"submit",children:"Add contact"})]})},O=n(9),h=n.n(O);var p=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("section",{className:h.a.container,children:[Object(a.jsx)("h1",{className:h.a.title,children:e}),n]})},x=n(12),v=n.n(x);var _=function(t){var e=t.id,n=t.name,c=t.number,o=t.onDelete;return Object(a.jsxs)("li",{children:[n,": ",c,Object(a.jsx)("button",{className:v.a.button,type:"button",onClick:function(){return o(e)},children:"Delete"})]})};var g=function(t){var e=t.contacts,n=t.onDelete;return Object(a.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,o=t.number;return Object(a.jsx)(_,{id:e,name:c,number:o,onDelete:n},e)}))})},C=n(10),N=n.n(C);var S=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:N.a.label,children:["Find contacts by name",Object(a.jsx)("input",{className:N.a.input,type:"text",value:e,onChange:n})]})};var w=function(){var t,e=Object(c.useState)(null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:[]),n=Object(s.a)(e,2),o=n[0],r=n[1],i=Object(c.useState)(""),b=Object(s.a)(i,2),m=b[0],j=b[1];return Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(o))}),[o]),Object(a.jsxs)(p,{title:"Phonebook",children:[Object(a.jsx)(d,{onSubmit:function(t,e){""!==t.name.trim()||""!==t.number.trim()?o.find((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contacts")):r([].concat(Object(l.a)(o),[Object(u.a)(Object(u.a)({},t),{},{id:e})])):alert("Enter contact name and number")}}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(S,{value:m,onChange:function(t){j(t.target.value)}}),Object(a.jsx)(g,{contacts:function(){var t=m.toLowerCase();return o.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onDelete:function(t){var e;r(null!==(e=o.filter((function(e){return e.id!==t})))&&void 0!==e?e:[])}})]})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),F()}],[[21,1,2]]]);
//# sourceMappingURL=main.9e32dd51.chunk.js.map