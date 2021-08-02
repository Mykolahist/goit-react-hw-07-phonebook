(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{100:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),i=n(9),s=n(18),u=n(19),l=n(21),b=n(20),j=n(101),d=n(37),f=n.n(d),_=n(1),m=function(t){var e=t.children;return Object(_.jsx)("div",{className:f.a.container,children:e})},h=n(38),O=n.n(h),p=function(){return Object(_.jsx)("header",{children:Object(_.jsx)("h1",{className:O.a.title,children:"Phonebook"})})},x=n(3),v=n(39),C=n.n(v),g=n(26),N=n.n(g),y=function(t){var e=t.name;return Object(_.jsx)("div",{className:N.a.thumb,children:Object(_.jsxs)("p",{className:N.a.message,children:[e," is already in contacts"]})})},A=n(17),F=function(t){return t.phonebook.filter},L=function(t){return t.phonebook.contacts},E={getFilter:F,getContacts:L,getFilteredContacts:Object(A.a)([L,F],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),getLoading:function(t){return t.phonebook.loading},getError:function(t){return t.phonebook.error}},S=n(15),w=n.n(S),k=n(4),q=Object(k.b)("contact/fetchContactsRequest"),D=Object(k.b)("contact/fetchContactsSuccess"),B=Object(k.b)("contact/fetchContactsError"),T=Object(k.b)("contact/addContactRequest"),z=Object(k.b)("contact/addContactSuccess"),P=Object(k.b)("contact/addContactError"),R=Object(k.b)("contact/deleteContactRequest"),U=Object(k.b)("contact/deleteContactSuccess"),M=Object(k.b)("contact/deleteContactError"),W=Object(k.b)("contact/changeFilter");w.a.defaults.baseURL="http://localhost:4040";var H,I,J,V=function(t){return function(e){e(T()),w.a.post("/contacts",t).then((function(t){var n=t.data;return e(z(n))})).catch((function(t){return e(P(t))}))}},Z=function(t){return function(e){e(R()),w.a.delete("/contacts/".concat(t)).then((function(){return e(U(t))})).catch((function(t){return e(M(t))}))}},G=function(){return function(t){t(q()),w.a.get("./contacts").then((function(e){var n=e.data;return t(D(n))})).catch((function(e){return t(B(e))}))}},K=n(45),X=n(8),Y=Object(k.c)([],(H={},Object(x.a)(H,D,(function(t,e){return e.payload})),Object(x.a)(H,z,(function(t,e){return[e.payload].concat(Object(K.a)(t))})),Object(x.a)(H,U,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),H)),$=Object(k.c)(!1,(I={},Object(x.a)(I,q,(function(){return!0})),Object(x.a)(I,D,(function(){return!1})),Object(x.a)(I,B,(function(){return!1})),Object(x.a)(I,T,(function(){return!0})),Object(x.a)(I,z,(function(){return!1})),Object(x.a)(I,P,(function(){return!1})),Object(x.a)(I,R,(function(){return!0})),Object(x.a)(I,U,(function(){return!1})),Object(x.a)(I,M,(function(){return!1})),I)),Q=Object(k.c)("",Object(x.a)({},W,(function(t,e){return e.payload}))),tt=Object(k.c)(null,(J={},Object(x.a)(J,B,(function(t,e){return e.payload})),Object(x.a)(J,P,(function(t,e){return e.payload})),Object(x.a)(J,M,(function(t,e){return e.payload})),J)),et=Object(X.b)({contacts:Y,filter:Q,loading:$,error:tt}),nt=n(11),at=n.n(nt),ct=n(40),rt=n.n(ct),ot=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={id:"",name:"",number:"",isContactExists:!1},t.handleChange=function(e){var n,a=e.currentTarget,c=a.name,r=a.value;t.setState((n={},Object(x.a)(n,c,r),Object(x.a)(n,"id",C.a.generate()),n))},t.handleSubmit=function(e){e.preventDefault();var n=t.props.savedContacts,a=t.state.name.toLowerCase();if(n.find((function(t){return t.name.toLowerCase().includes(a)})))return t.setState({isContactExists:!0}),void setTimeout((function(){t.setState({isContactExists:!1})}),2500);t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:"",isContactExists:!1})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.isContactExists;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(_.jsxs)("div",{className:at.a.form__container,children:[Object(_.jsxs)("label",{className:at.a.label,children:["Name",Object(_.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:at.a.input,onChange:this.handleChange,value:e})]}),Object(_.jsxs)("label",{className:at.a.label,children:["Number",Object(_.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:at.a.input,onChange:this.handleChange,value:n})]})]}),Object(_.jsx)("button",{type:"submit",className:at.a.button,children:"Add contact"})]}),Object(_.jsx)(j.a,{in:a,timeout:250,classNames:rt.a,unmountOnExit:!0,children:Object(_.jsx)(y,{name:e})})]})}}]),n}(a.Component),it=Object(i.b)((function(t){return{savedContacts:E.getContacts(t)}}),(function(t){return{onSubmit:function(e){return t(V(e))}}}))(ot),st=n(22),ut=n.n(st),lt=function(t){var e=t.value,n=t.onChange;return Object(_.jsxs)("div",{children:[Object(_.jsx)("h2",{className:ut.a.title,children:"Contacts"}),Object(_.jsxs)("label",{className:ut.a.label,children:["Find contacts by name",Object(_.jsx)("input",{type:"text",className:ut.a.input,value:e,onChange:n})]})]})};lt.defaultProps={value:""};var bt=Object(i.b)((function(t){return{value:E.getFilter(t)}}),(function(t){return{onChange:function(e){return t(W(e.currentTarget.value))}}}))(lt),jt=n(102),dt=n(14),ft=n.n(dt),_t=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(_.jsx)(jt.a,{component:"ul",className:ft.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(_.jsx)(j.a,{timeout:250,classNames:ft.a,children:Object(_.jsxs)("li",{className:ft.a.item,children:[Object(_.jsxs)("p",{className:ft.a.name,children:[a,":"]}),Object(_.jsx)("p",{children:c}),Object(_.jsx)("button",{type:"button",className:ft.a.button,onClick:function(){return n(e)},children:"Delete"})]})},e)}))})};_t.defaultProps={name:"",number:""};var mt=Object(i.b)((function(t){return{contacts:E.getFilteredContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(Z(e))}}}))(_t),ht=n(41),Ot=n.n(ht),pt=n(42),xt=n.n(pt),vt=function(){return Object(_.jsx)("div",{className:xt.a.container,children:Object(_.jsx)(Ot.a,{type:"ThreeDots",color:"rgb(100, 150, 255)",height:60,width:60})})},Ct=n(43),gt=n.n(Ct),Nt=function(){return Object(_.jsx)("h2",{className:gt.a.message,children:"Ooops! Something went wrong. Please try again later."})},yt=(n(99),n(27)),At=n.n(yt),Ft=n(44),Lt=n.n(Ft),Et=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.isLoading,a=t.error,c=e.length>0;return Object(_.jsxs)(m,{children:[Object(_.jsx)(j.a,{in:!0,appear:!0,timeout:500,classNames:Lt.a,unmountOnExit:!0,children:Object(_.jsx)(p,{})}),Object(_.jsx)(it,{}),Object(_.jsx)(j.a,{in:c,timeout:250,classNames:At.a,unmountOnExit:!0,children:Object(_.jsx)(bt,{})}),n&&Object(_.jsx)(vt,{}),a&&Object(_.jsx)(Nt,{}),Object(_.jsx)(j.a,{in:!0,appear:!0,timeout:500,classNames:At.a,unmountOnExit:!0,children:Object(_.jsx)(mt,{})})]})}}]),n}(a.Component),St=Object(i.b)((function(t){return{contacts:E.getContacts(t),isLoading:E.getLoading(t),error:E.getError(t)}}),(function(t){return{fetchContacts:function(){return t(G())}}}))(Et),wt=Object(k.a)({reducer:{phonebook:et},devTools:!1});o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(i.a,{store:wt,children:Object(_.jsx)(St,{})})}),document.getElementById("root"))},11:function(t,e,n){t.exports={form__container:"Form_form__container__3EcVn",label:"Form_label__jfaB9",input:"Form_input__11Rvg",button:"Form_button__1fP9w"}},14:function(t,e,n){t.exports={list:"ContactList_list__1y7cx",item:"ContactList_item__2LAkt",name:"ContactList_name__3OBwk",button:"ContactList_button__OVWes",enter:"ContactList_enter__bD_Ic",enterActive:"ContactList_enterActive__2WVwm",exit:"ContactList_exit__2CWqc",exitActive:"ContactList_exitActive__3XKl5"}},22:function(t,e,n){t.exports={title:"Filter_title__3cNLf",label:"Filter_label__35hxc",input:"Filter_input__1y_oq"}},26:function(t,e,n){t.exports={thumb:"Notification_thumb__2ore8",message:"Notification_message__1pbfn"}},27:function(t,e,n){t.exports={appear:"fadeFilter_appear__NyhFb",appearActive:"fadeFilter_appearActive__EGD3S",enter:"fadeFilter_enter__2NCSY",enterActive:"fadeFilter_enterActive__1X4wz",exit:"fadeFilter_exit__1MBq-",exitActive:"fadeFilter_exitActive__1Ujsx"}},37:function(t,e,n){t.exports={container:"Container_container__2bUBU"}},38:function(t,e,n){t.exports={title:"Header_title__2Evbl"}},40:function(t,e,n){t.exports={enter:"fadeNotification_enter__2cKOm",enterActive:"fadeNotification_enterActive__TdWdi",exit:"fadeNotification_exit__3f-Bv",exitActive:"fadeNotification_exitActive__30_SS"}},42:function(t,e,n){t.exports={container:"Loader_container__1msjy"}},43:function(t,e,n){t.exports={message:"Error_message__3UqG7"}},44:function(t,e,n){t.exports={appear:"fadeHeader_appear__Itv6w",appearActive:"fadeHeader_appearActive__3hFtD"}},99:function(t,e,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.12774561.chunk.js.map