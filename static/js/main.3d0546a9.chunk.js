(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__1IuJX",labelForm:"ContactForm_labelForm__xttIX",inputForm:"ContactForm_inputForm__3sm9d",buttonForm:"ContactForm_buttonForm__1STab"}},19:function(t,e,n){t.exports={labelFilter:"Filter_labelFilter__2pzAg",inputFilter:"Filter_inputFilter__1vqpK"}},20:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__17kFs",buttonListItem:"ContactListItem_buttonListItem__1e2PL"}},27:function(t,e,n){t.exports={contactList:"ContactList_contactList__1oLsN"}},39:function(t,e,n){},40:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(12),i=n.n(o),s=n(7),l=n(13),u=n(10),b=n(2),m=n(3),j=n(43),d={addContact:Object(m.b)("ContactForm/AddContact",(function(t){return{payload:{name:t.name,number:t.number,id:Object(j.a)()}}})),deleteContact:Object(m.b)("ContactForm/DeleteContact"),filterChange:Object(m.b)("ContactForm/FilterChange")},O=Object(m.c)([],(a={},Object(u.a)(a,d.addContact,(function(t,e){var n=e.payload;return t.find((function(t){return t.name===n.name}))?(alert("".concat(n.name," is already in contacts.")),t):[].concat(Object(l.a)(t),[n])})),Object(u.a)(a,d.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),h=Object(m.c)("",Object(u.a)({},d.filterChange,(function(t,e){return e.payload}))),f=Object(b.c)({items:O,filter:h}),p=n(24),C=n.n(p),F=n(4),v=n(25),x={key:"contacts",storage:n.n(v).a,blacklist:["filter"]},_={contacts:Object(F.g)(x,f)},g=[].concat(Object(l.a)(Object(m.d)({serializableCheck:{ignoredActions:[F.a,F.f,F.b,F.c,F.d,F.e]}})),[C.a]),y=Object(m.a)({reducer:_,middleware:g,devTools:!1}),L={store:y,persistor:Object(F.h)(y)},k=n(26),N=(n(39),n(5)),I=n(6),S=n(9),w=n(8),D=(n(40),n(18)),A=n(11),J=n.n(A),T=n(1),z=function(t){Object(S.a)(n,t);var e=Object(w.a)(n);function n(){var t;Object(N.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.reset=function(){t.setState({name:"",number:""})},t.handleChange=function(e){e.preventDefault();var n=e.currentTarget,a=n.name,c=n.value,r=t.state,o=Object(u.a)({},a,c);t.setState(Object(D.a)(Object(D.a)({},r),o))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t}return Object(I.a)(n,[{key:"render",value:function(){var t=Object(j.a)(),e=Object(j.a)();return Object(T.jsxs)("form",{onSubmit:this.handleSubmit,className:J.a.contactForm,children:[Object(T.jsxs)("label",{htmlFor:t,className:J.a.labelForm,children:["Name",Object(T.jsx)("input",{type:"text",name:"name",id:t,value:this.state.name,onChange:this.handleChange,className:J.a.inputForm})]}),Object(T.jsxs)("label",{htmlFor:e,className:J.a.labelForm,children:["Number",Object(T.jsx)("input",{type:"tel",name:"number",id:e,value:this.state.number,onChange:this.handleChange,className:J.a.inputForm})]}),Object(T.jsx)("button",{type:"submit",className:J.a.buttonForm,children:"Add contact"})]})}}]),n}(c.Component),P=Object(s.b)(null,(function(t){return{onSubmit:function(e){return t(d.addContact(e))}}}))(z),X=n(19),q=n.n(X),B=function(t){Object(S.a)(n,t);var e=Object(w.a)(n);function n(){return Object(N.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){var t=Object(j.a)(),e=this.props,n=e.filterState,a=e.onFilterChange;return Object(T.jsxs)("label",{htmlFor:t,className:q.a.labelFilter,children:["Find contacts by name",Object(T.jsx)("input",{type:"text",name:"filter",id:t,value:n,onChange:a,className:q.a.inputFilter})]})}}]),n}(c.Component),E=Object(s.b)((function(t){return{filterState:t.contacts.filter}}),(function(t){return{onFilterChange:function(e){return t(d.filterChange(e.target.value))}}}))(B),K=n(20),M=n.n(K),G=function(t){var e=t.name,n=t.number,a=t.id,c=t.onDeleteContact;return Object(T.jsxs)("li",{id:a,className:M.a.listItem,children:[e,": ",n,Object(T.jsx)("button",{onClick:function(){c(a)},className:M.a.buttonListItem,children:"Delete"})]})},H=n(27),Q=n.n(H),R=function(t){Object(S.a)(n,t);var e=Object(w.a)(n);function n(){return Object(N.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contactsList,n=t.onDeleteContact;return Object(T.jsx)("ul",{children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(T.jsx)(G,{name:e,number:a,id:c,onDeleteContact:n,className:Q.a.contactList},c)}))})}}]),n}(c.Component),U=function(t){var e=t.filter,n=t.items,a=e.toLowerCase();return n.filter((function(t){var e=t.name;return!!e&&e.toLowerCase().includes(a)}))},V=Object(s.b)((function(t){return{contactsList:U(t.contacts)}}),(function(t){return{onDeleteContact:function(e){return t(d.deleteContact(e))}}}))(R),W=function(t){Object(S.a)(n,t);var e=Object(w.a)(n);function n(){return Object(N.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("h1",{children:"Phonebook"}),Object(T.jsx)(P,{}),Object(T.jsx)("h2",{children:"Contacts"}),Object(T.jsx)(E,{}),Object(T.jsx)(V,{})]})}}]),n}(c.Component);i.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(s.a,{store:L.store,children:Object(T.jsx)(k.a,{loading:null,persistor:L.persistor,children:Object(T.jsx)(W,{})})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.3d0546a9.chunk.js.map