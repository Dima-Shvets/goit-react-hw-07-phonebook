(this["webpackJsonpgoit-react-07-phonebook"]=this["webpackJsonpgoit-react-07-phonebook"]||[]).push([[0],{21:function(t,e,n){t.exports={element:"ContactList_element__2i2bX",button:"ContactList_button__1gsrr"}},22:function(t,e,n){t.exports={label:"Filter_label__39c0g",input:"Filter_input__2NZNY"}},38:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"fetchContacts",(function(){return x})),n.d(c,"addContact",(function(){return _})),n.d(c,"deleteContact",(function(){return F}));var r={};n.r(r),n.d(r,"getContacts",(function(){return L})),n.d(r,"getFilter",(function(){return k})),n.d(r,"getIsLoading",(function(){return w})),n.d(r,"getIsAddingContact",(function(){return N})),n.d(r,"getError",(function(){return A})),n.d(r,"getFilteredContacts",(function(){return I}));var a={};n.r(a),n.d(a,"updateFilter",(function(){return P}));var o=n(0),u=n.n(o),i=n(14),s=n.n(i),l=(n(38),n(2)),b=n(17),d=n(23),f=n(8),j=n.n(f),p=n(10),m=n(18),O=n(7),h=n.n(O),g=n(4),v=n(11),C=n.n(v);C.a.defaults.baseURL="https://61ec45e3f3011500174d212a.mockapi.io";var x=Object(g.c)("contacts/fetchContacts",function(){var t=Object(m.a)(h.a.mark((function t(e,n){var c,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.get("/contacts");case 3:return c=t.sent,r=c.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",n(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}()),_=Object(g.c)("contacts/addContact",function(){var t=Object(m.a)(h.a.mark((function t(e,n){var c,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.post("/contacts",e);case 3:return c=t.sent,r=c.data,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",n(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}()),F=Object(g.c)("contacts/deleteContact",function(){var t=Object(m.a)(h.a.mark((function t(e,n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.delete("/contacts/".concat(e));case 3:return t.abrupt("return",e);case 6:t.prev=6,t.t0=t.catch(0),n(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e,n){return t.apply(this,arguments)}}()),y=n(15),L=function(t){return t.contacts.items},k=function(t){return t.contacts.filter},w=function(t){return t.contacts.isLoading},N=function(t){return t.contacts.isAddingContact},A=function(t){return t.contacts.error},I=Object(y.a)([L,k],(function(t,e){var n=e.toLocaleLowerCase();return t.filter((function(t){return t.name.toLocaleLowerCase().includes(n)}))})),P=Object(g.b)("contacts/updateFilter"),T=n(1),z=Object(p.a)(),S=Object(p.a)();function E(){var t=Object(o.useState)(""),e=Object(d.a)(t,2),n=e[0],a=e[1],u=Object(o.useState)(""),i=Object(d.a)(u,2),s=i[0],f=i[1],p=Object(l.c)(r.getContacts),m=Object(l.c)(r.getIsAddingContact),O=Object(l.b)(),h=function(t){var e=t.target,n=e.value;switch(e.name){case"name":a(n);break;case"number":f(n);break;default:return}},g=function(){a(""),f("")};return Object(T.jsxs)("form",{className:j.a["contact-form"],onSubmit:function(t){t.preventDefault(),function(t){var e=t.name,n=p.find((function(t){return t.name===e}));n?alert("This contact is already in the list!"):O(c.addContact(t))}({name:n,number:s}),g()},children:[Object(T.jsx)("label",{htmlFor:z,className:j.a["name-label"],children:"Name"}),Object(T.jsx)("input",{id:z,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:h}),Object(T.jsx)("label",{htmlFor:S,className:j.a["number-label"],children:"Number"}),Object(T.jsx)("input",{id:S,className:j.a["number-input"],type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:s,onChange:h}),Object(T.jsxs)("button",{className:j.a.btn,type:"submit",children:["Add contact",m&&Object(T.jsx)(b.b,{ariaLabel:"loading-indicator",height:12,width:12,strokeWidth:5,color:"black",secondaryColor:"grey"})]})]})}var J=n(21),Z=n.n(J);function B(){var t=Object(l.c)(r.getFilteredContacts),e=Object(l.b)();return Object(T.jsx)("ul",{children:t.map((function(t){var n=t.id,r=t.name,a=t.number;return Object(T.jsxs)("li",{className:Z.a.element,children:[r,": ",a,Object(T.jsx)("button",{className:Z.a.button,type:"button",onClick:function(){return function(t){return e(c.deleteContact(t))}(n)},children:"Delete"})]},n)}))})}var D=n(22),M=n.n(D),q=Object(p.a)();function U(){var t=Object(l.c)(r.getFilter),e=Object(l.b)();return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("label",{className:M.a.label,htmlFor:q,children:"Find contacts by name"}),Object(T.jsx)("input",{className:M.a.input,id:q,type:"text",name:"filter",value:t,onChange:function(t){!function(t){e(a.updateFilter(t))}(t.target.value)}})]})}n(62),n(63);var W,G,R,V,X=function(){var t=Object(l.c)(r.getIsLoading),e=Object(l.c)(r.getError),n=Object(l.b)();return Object(o.useEffect)((function(){n(c.fetchContacts())}),[n]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("h1",{children:"Phonebook"}),Object(T.jsx)(E,{}),Object(T.jsx)("h2",{children:"Contacts"}),Object(T.jsx)(U,{}),t&&Object(T.jsx)(b.a,{heigth:"150",width:"150",color:"grey",ariaLabel:"loading-indicator"}),e&&Object(T.jsx)("p",{children:"404. Unable to load the contacts"}),Object(T.jsx)(B,{filteredContacts:!0})]})},Y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))},$=n(3),H=n(33),K=n(6),Q=Object(g.d)([],(W={},Object($.a)(W,x.fulfilled,(function(t,e){return e.payload})),Object($.a)(W,_.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(H.a)(t),[n])})),Object($.a)(W,F.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),W)),tt=Object(g.d)("",Object($.a)({},P,(function(t,e){return e.payload}))),et=Object(g.d)(!1,(G={},Object($.a)(G,x.pending,(function(){return!0})),Object($.a)(G,x.fulfilled,(function(){return!1})),Object($.a)(G,x.rejected,(function(){return!1})),G)),nt=Object(g.d)(!1,(R={},Object($.a)(R,_.pending,(function(){return!0})),Object($.a)(R,_.fulfilled,(function(){return!1})),Object($.a)(R,_.rejected,(function(){return!1})),R)),ct=Object(g.d)(null,(V={},Object($.a)(V,x.pending,(function(){return null})),Object($.a)(V,x.fulfilled,(function(){return null})),Object($.a)(V,x.rejected,(function(){return!0})),V)),rt=Object(K.b)({items:Q,filter:tt,isLoading:et,isAddingContact:nt,error:ct}),at=Object(g.a)({reducer:{contacts:rt},devTools:!1});s.a.render(Object(T.jsx)(u.a.StrictMode,{children:Object(T.jsx)(l.a,{store:at,children:Object(T.jsx)(X,{})})}),document.getElementById("root")),Y()},8:function(t,e,n){t.exports={"contact-form":"ContactForm_contact-form__15rPT","name-label":"ContactForm_name-label__33mM1","number-label":"ContactForm_number-label__1TVWG","number-input":"ContactForm_number-input__160zg",btn:"ContactForm_btn__J-oP0"}}},[[64,1,2]]]);
//# sourceMappingURL=main.7c12a7c2.chunk.js.map