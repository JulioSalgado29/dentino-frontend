(this["webpackJsonpdentino-frontend"]=this["webpackJsonpdentino-frontend"]||[]).push([[0],{175:function(e,a,s){},176:function(e,a,s){"use strict";s.r(a);var t=s(0),c=s(2),n=s.n(c),i=s(62),l=s.n(i),r=(s(69),s(11)),o=s(6),d=s(7),j=s(8),b=s(4),u=s(10),m=s(9),h=s(22),O=s.n(h),x="https://dentino-303017.rj.r.appspot.com/login",p="https://dentino-303017.rj.r.appspot.com/usuario",g=new(function(){function e(){Object(d.a)(this,e)}return Object(j.a)(e,[{key:"registrar_admin",value:function(){return O.a.post("https://dentino-303017.rj.r.appspot.com/admin/registration",{persona:{nombre:"Gregory",apellido:"Recalde",email:"juliosalgado2998@gmail.com",fechaNac:"1999-02-07",direccion:"Heredia586",telefono:"920691763",genero:"M"},usuario:{username:"username",password:"password",fechaCre:"2020-07-10"}},{auth:{username:"admin",password:"1234abcd"}})}},{key:"registrar_user",value:function(){return O.a.post(p+"/registration",{persona:{nombre:"Gregory",apellido:"Recalde",email:"gregoryrecaldegutierrez@gmail.com",fechaNac:"1999-02-07",direccion:"Heredia586",telefono:"920691763",genero:"M"},usuario:{username:"gregory",password:"password"}})}},{key:"login",value:function(e,a){var s={username:e,password:a};return O.a.post(x+"/verificando",s).then((function(e){localStorage.setItem("usuario",JSON.stringify(e.data))}))}},{key:"actualizar_estado",value:function(e,a){return O.a.post(x+"/actualizar-estado",{username:e,token:a}).then((function(e){localStorage.setItem("usuario",JSON.stringify(e.data))}))}},{key:"verificar_usuario",value:function(e){return O.a.put(p+"/verificar-estado",{username:e}).then((function(e){localStorage.setItem("usuario2",JSON.stringify(e.data))}))}},{key:"getCurrentUser",value:function(){return JSON.parse(localStorage.getItem("usuario"))}},{key:"getCurrentState",value:function(){return JSON.parse(localStorage.getItem("usuario2"))}},{key:"logout",value:function(){localStorage.removeItem("usuario")}}]),e}()),f=s(27),v=s.n(f),N=s(24),y=s.n(N),k=s(28),w=s.n(k),C=(s(29),s(20)),S=s.n(C),U=(n.a.Component,function(e){Object(u.a)(s,e);var a=Object(m.a)(s);function s(e){var t;return Object(d.a)(this,s),(t=a.call(this,e)).state={currentUser:g.getCurrentUser()},t.logOut=t.logOut.bind(Object(b.a)(t)),t}return Object(j.a)(s,[{key:"logOut",value:function(){g.logout(),window.location.reload(!1)}},{key:"render",value:function(){this.state.currentUser;return Object(t.jsxs)("nav",{className:"main-header navbar navbar-expand navbar-white navbar-light",children:[Object(t.jsx)("ul",{className:"navbar-nav",children:Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)("a",{className:"nav-link","data-widget":"pushmenu",role:"button",children:Object(t.jsx)("i",{className:"fas fa-bars"})})})}),Object(t.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(t.jsxs)("li",{className:"nav-item dropdown",children:[Object(t.jsxs)("a",{className:"nav-link","data-toggle":"dropdown",style:{cursor:"pointer"},children:[Object(t.jsx)("i",{className:"far fa-bell"}),Object(t.jsx)("span",{className:"badge badge-warning navbar-badge",children:"15"})]}),Object(t.jsxs)("div",{className:"dropdown-menu dropdown-menu-lg dropdown-menu-right",children:[Object(t.jsx)("span",{className:"dropdown-item dropdown-header",children:"15 Notifications"}),Object(t.jsx)("div",{className:"dropdown-divider"}),Object(t.jsxs)("a",{className:"dropdown-item",children:[Object(t.jsx)("i",{className:"fas fa-envelope mr-2"})," 4 new messages",Object(t.jsx)("span",{className:"float-right text-muted text-sm",children:"3 mins"})]}),Object(t.jsx)("div",{className:"dropdown-divider"}),Object(t.jsxs)("a",{className:"dropdown-item",children:[Object(t.jsx)("i",{className:"fas fa-users mr-2"})," 8 friend requests",Object(t.jsx)("span",{className:"float-right text-muted text-sm",children:"12 hours"})]}),Object(t.jsx)("div",{className:"dropdown-divider"}),Object(t.jsxs)("a",{className:"dropdown-item",children:[Object(t.jsx)("i",{className:"fas fa-file mr-2"})," 3 new reports",Object(t.jsx)("span",{className:"float-right text-muted text-sm",children:"2 days"})]}),Object(t.jsx)("div",{className:"dropdown-divider"}),Object(t.jsx)("a",{className:"dropdown-item dropdown-footer",children:"See All Notifications"})]})]}),Object(t.jsxs)("li",{className:"nav-item dropdown",children:[Object(t.jsx)("a",{className:"nav-link","data-toggle":"dropdown",href:"#",children:Object(t.jsx)("i",{className:"fas fa-cog"})}),Object(t.jsx)("div",{className:"dropdown-menu dropdown-menu-lg dropdown-menu-right",children:Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsxs)(r.b,{exact:!0,to:"/logout",className:"nav-link",onClick:this.logOut,style:{cursor:"pointer"},children:[Object(t.jsx)("i",{className:"nav-icon fas fa-power-off",style:{marginRight:"4%",color:"black"}})," ",Object(t.jsx)("a",{style:{marginRight:"4%",display:"inline",color:"black"},children:"Cerrar Sesi\xf3n"})]})})})]})]})]})}}]),s}(n.a.Component)),H=s.p+"static/media/favicon.983d1cbb.png",P=s.p+"static/media/imagen-perfil.8a7d7084.png",F=function(e){Object(u.a)(s,e);var a=Object(m.a)(s);function s(e){var t;return Object(d.a)(this,s),(t=a.call(this,e)).state={currentUser:g.getCurrentUser()},t.isLandingPage=t.isLandingPage.bind(Object(b.a)(t)),t}return Object(j.a)(s,[{key:"isLandingPage",value:function(){localStorage.setItem("isLandingPage",!0)}},{key:"render",value:function(){var e=this.state.currentUser;return Object(t.jsxs)("aside",{className:"main-sidebar sidebar-dark-primary elevation-4",style:{backgroundColor:"black"},children:[Object(t.jsxs)("a",{className:"brand-link",style:{color:"white",cursor:"context-menu"},children:[Object(t.jsx)("img",{src:H,alt:"AdminLTE Logo",className:"brand-image img-circle elevation-3"}),Object(t.jsx)("span",{className:"brand-text font-weight-light",children:"Dentino"})]}),Object(t.jsxs)("div",{className:"sidebar",children:[Object(t.jsxs)("div",{class:"user-panel mt-3 pb-3 mb-3 d-flex",children:[Object(t.jsx)("div",{class:"image",children:Object(t.jsx)("img",{src:P,class:"img-circle elevation-2",alt:"User Image"})}),Object(t.jsx)("div",{class:"info",children:Object(t.jsxs)("a",{style:{cursor:"context-menu"},class:"d-block",children:[e.persona.nombre," ",e.persona.apellido]})})]}),Object(t.jsx)("nav",{className:"mt-2",children:Object(t.jsxs)("ul",{className:"nav nav-pills nav-sidebar flex-column","data-widget":"treeview",role:"menu","data-accordion":"false",children:[Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsxs)(r.c,{exact:!0,to:"/",className:"nav-link",onClick:this.isLandingPage,activeClassName:"active",children:[Object(t.jsx)("i",{className:"nav-icon fas fa-th"}),Object(t.jsx)("p",{children:"Dashboard"})]})}),Object(t.jsx)("li",{className:"nav-item",children:null===localStorage.getItem("paciente")&&Object(t.jsxs)(r.c,{to:"/pacientes",className:"nav-link",onClick:this.isLandingPage,activeClassName:"active",children:[Object(t.jsx)("i",{className:"nav-icon fas fa-head-side-mask"}),Object(t.jsxs)("p",{children:["Pacientes",Object(t.jsx)("span",{className:"right badge badge-danger",children:"New"})]})]})||"true"===localStorage.getItem("paciente")&&Object(t.jsxs)(r.c,{to:"/pacientes",className:"nav-link",onClick:this.isLandingPage,activeClassName:"active",isActive:function(){return"true"===localStorage.getItem("paciente")},children:[Object(t.jsx)("i",{className:"nav-icon fas fa-head-side-mask"}),Object(t.jsxs)("p",{children:["Pacientes",Object(t.jsx)("span",{className:"right badge badge-danger",children:"New"})]})]})})]})})]})]})}}]),s}(n.a.Component),I=function(e){Object(u.a)(s,e);var a=Object(m.a)(s);function s(e){var t;return Object(d.a)(this,s),(t=a.call(this,e)).logOut=t.logOut.bind(Object(b.a)(t)),t.state={currentUser:g.getCurrentUser()},t}return Object(j.a)(s,[{key:"logOut",value:function(){g.logout(),window.location.reload(!1)}},{key:"render",value:function(){return localStorage.removeItem("paciente"),Object(t.jsx)("body",{class:"hold-transition sidebar-mini layout-fixed",children:Object(t.jsxs)("div",{class:"wrapper",children:[Object(t.jsx)(U,{}),Object(t.jsx)(F,{}),Object(t.jsx)("div",{className:"content-wrapper",children:Object(t.jsx)("section",{className:"content",style:{padding:"15px"},children:Object(t.jsxs)("div",{className:"container-fluid",children:[Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"col-lg-3 col-6",children:Object(t.jsxs)("div",{className:"small-box bg-info",children:[Object(t.jsxs)("div",{className:"inner",children:[Object(t.jsx)("h3",{children:"150"}),Object(t.jsx)("p",{children:"New Orders"})]}),Object(t.jsx)("div",{className:"icon",children:Object(t.jsx)("i",{className:"ion ion-bag"})}),Object(t.jsxs)("a",{className:"small-box-footer",children:["More info ",Object(t.jsx)("i",{className:"fas fa-arrow-circle-right"})]})]})}),Object(t.jsx)("div",{className:"col-lg-3 col-6",children:Object(t.jsxs)("div",{className:"small-box bg-success",children:[Object(t.jsxs)("div",{className:"inner",children:[Object(t.jsxs)("h3",{children:["53",Object(t.jsx)("sup",{style:{fontSize:20},children:"%"})]}),Object(t.jsx)("p",{children:"Bounce Rate"})]}),Object(t.jsx)("div",{className:"icon",children:Object(t.jsx)("i",{className:"ion ion-stats-bars"})}),Object(t.jsxs)("a",{className:"small-box-footer",children:["More info ",Object(t.jsx)("i",{className:"fas fa-arrow-circle-right"})]})]})}),Object(t.jsx)("div",{className:"col-lg-3 col-6",children:Object(t.jsxs)("div",{className:"small-box bg-warning",children:[Object(t.jsxs)("div",{className:"inner",children:[Object(t.jsx)("h3",{children:"44"}),Object(t.jsx)("p",{children:"User Registrations"})]}),Object(t.jsx)("div",{className:"icon",children:Object(t.jsx)("i",{className:"ion ion-person-add"})}),Object(t.jsxs)("a",{className:"small-box-footer",children:["More info ",Object(t.jsx)("i",{className:"fas fa-arrow-circle-right"})]})]})}),Object(t.jsx)("div",{className:"col-lg-3 col-6",children:Object(t.jsxs)("div",{className:"small-box bg-danger",children:[Object(t.jsxs)("div",{className:"inner",children:[Object(t.jsx)("h3",{children:"65"}),Object(t.jsx)("p",{children:"Unique Visitors"})]}),Object(t.jsx)("div",{className:"icon",children:Object(t.jsx)("i",{className:"ion ion-pie-graph"})}),Object(t.jsxs)("a",{className:"small-box-footer",children:["More info ",Object(t.jsx)("i",{className:"fas fa-arrow-circle-right"})]})]})})]}),Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("section",{className:"col-lg-7 connectedSortable",children:Object(t.jsxs)("div",{className:"card",children:[Object(t.jsxs)("div",{className:"card-header",children:[Object(t.jsxs)("h3",{className:"card-title",children:[Object(t.jsx)("i",{className:"ion ion-clipboard mr-1"}),"To Do List"]}),Object(t.jsx)("div",{className:"card-tools",children:Object(t.jsxs)("ul",{className:"pagination pagination-sm",children:[Object(t.jsx)("li",{className:"page-item",children:Object(t.jsx)("a",{className:"page-link",children:"\xab"})}),Object(t.jsx)("li",{className:"page-item",children:Object(t.jsx)("a",{className:"page-link",children:"1"})}),Object(t.jsx)("li",{className:"page-item",children:Object(t.jsx)("a",{className:"page-link",children:"2"})}),Object(t.jsx)("li",{className:"page-item",children:Object(t.jsx)("a",{className:"page-link",children:"3"})}),Object(t.jsx)("li",{className:"page-item",children:Object(t.jsx)("a",{className:"page-link",children:"\xbb"})})]})})]}),Object(t.jsx)("div",{className:"card-body",children:Object(t.jsxs)("ul",{className:"todo-list","data-widget":"todo-list",children:[Object(t.jsxs)("li",{children:[Object(t.jsxs)("span",{className:"handle",children:[Object(t.jsx)("i",{className:"fas fa-ellipsis-v"}),Object(t.jsx)("i",{className:"fas fa-ellipsis-v"})]}),Object(t.jsxs)("div",{className:"icheck-primary d-inline ml-2",children:[Object(t.jsx)("input",{type:"checkbox",defaultValue:!0,name:"todo1",id:"todoCheck1"}),Object(t.jsx)("label",{htmlFor:"todoCheck1"})]}),Object(t.jsx)("span",{className:"text",children:"Design a nice theme"}),Object(t.jsxs)("small",{className:"badge badge-danger",children:[Object(t.jsx)("i",{className:"far fa-clock"})," 2 mins"]}),Object(t.jsxs)("div",{className:"tools",children:[Object(t.jsx)("i",{className:"fas fa-edit"}),Object(t.jsx)("i",{className:"fas fa-trash-o"})]})]}),Object(t.jsxs)("li",{children:[Object(t.jsxs)("span",{className:"handle",children:[Object(t.jsx)("i",{className:"fas fa-ellipsis-v"}),Object(t.jsx)("i",{className:"fas fa-ellipsis-v"})]}),Object(t.jsxs)("div",{className:"icheck-primary d-inline ml-2",children:[Object(t.jsx)("input",{type:"checkbox",defaultValue:!0,name:"todo2",id:"todoCheck2",defaultChecked:!0}),Object(t.jsx)("label",{htmlFor:"todoCheck2"})]}),Object(t.jsx)("span",{className:"text",children:"Make the theme responsive"}),Object(t.jsxs)("small",{className:"badge badge-info",children:[Object(t.jsx)("i",{className:"far fa-clock"})," 4 hours"]}),Object(t.jsxs)("div",{className:"tools",children:[Object(t.jsx)("i",{className:"fas fa-edit"}),Object(t.jsx)("i",{className:"fas fa-trash-o"})]})]}),Object(t.jsxs)("li",{children:[Object(t.jsxs)("span",{className:"handle",children:[Object(t.jsx)("i",{className:"fas fa-ellipsis-v"}),Object(t.jsx)("i",{className:"fas fa-ellipsis-v"})]}),Object(t.jsxs)("div",{className:"icheck-primary d-inline ml-2",children:[Object(t.jsx)("input",{type:"checkbox",defaultValue:!0,name:"todo3",id:"todoCheck3"}),Object(t.jsx)("label",{htmlFor:"todoCheck3"})]}),Object(t.jsx)("span",{className:"text",children:"Let theme shine like a star"}),Object(t.jsxs)("small",{className:"badge badge-warning",children:[Object(t.jsx)("i",{className:"far fa-clock"})," 1 day"]}),Object(t.jsxs)("div",{className:"tools",children:[Object(t.jsx)("i",{className:"fas fa-edit"}),Object(t.jsx)("i",{className:"fas fa-trash-o"})]})]}),Object(t.jsxs)("li",{children:[Object(t.jsxs)("span",{className:"handle",children:[Object(t.jsx)("i",{className:"fas fa-ellipsis-v"}),Object(t.jsx)("i",{className:"fas fa-ellipsis-v"})]}),Object(t.jsxs)("div",{className:"icheck-primary d-inline ml-2",children:[Object(t.jsx)("input",{type:"checkbox",defaultValue:!0,name:"todo4",id:"todoCheck4"}),Object(t.jsx)("label",{htmlFor:"todoCheck4"})]}),Object(t.jsx)("span",{className:"text",children:"Let theme shine like a star"}),Object(t.jsxs)("small",{className:"badge badge-success",children:[Object(t.jsx)("i",{className:"far fa-clock"})," 3 days"]}),Object(t.jsxs)("div",{className:"tools",children:[Object(t.jsx)("i",{className:"fas fa-edit"}),Object(t.jsx)("i",{className:"fas fa-trash-o"})]})]}),Object(t.jsxs)("li",{children:[Object(t.jsxs)("span",{className:"handle",children:[Object(t.jsx)("i",{className:"fas fa-ellipsis-v"}),Object(t.jsx)("i",{className:"fas fa-ellipsis-v"})]}),Object(t.jsxs)("div",{className:"icheck-primary d-inline ml-2",children:[Object(t.jsx)("input",{type:"checkbox",defaultValue:!0,name:"todo5",id:"todoCheck5"}),Object(t.jsx)("label",{htmlFor:"todoCheck5"})]}),Object(t.jsx)("span",{className:"text",children:"Check your messages and notifications"}),Object(t.jsxs)("small",{className:"badge badge-primary",children:[Object(t.jsx)("i",{className:"far fa-clock"})," 1 week"]}),Object(t.jsxs)("div",{className:"tools",children:[Object(t.jsx)("i",{className:"fas fa-edit"}),Object(t.jsx)("i",{className:"fas fa-trash-o"})]})]}),Object(t.jsxs)("li",{children:[Object(t.jsxs)("span",{className:"handle",children:[Object(t.jsx)("i",{className:"fas fa-ellipsis-v"}),Object(t.jsx)("i",{className:"fas fa-ellipsis-v"})]}),Object(t.jsxs)("div",{className:"icheck-primary d-inline ml-2",children:[Object(t.jsx)("input",{type:"checkbox",defaultValue:!0,name:"todo6",id:"todoCheck6"}),Object(t.jsx)("label",{htmlFor:"todoCheck6"})]}),Object(t.jsx)("span",{className:"text",children:"Let theme shine like a star"}),Object(t.jsxs)("small",{className:"badge badge-secondary",children:[Object(t.jsx)("i",{className:"far fa-clock"})," 1 month"]}),Object(t.jsxs)("div",{className:"tools",children:[Object(t.jsx)("i",{className:"fas fa-edit"}),Object(t.jsx)("i",{className:"fas fa-trash-o"})]})]})]})}),Object(t.jsx)("div",{className:"card-footer clearfix",children:Object(t.jsxs)("button",{type:"button",className:"btn btn-info float-right",children:[Object(t.jsx)("i",{className:"fas fa-plus"})," Add item"]})})]})})})]})})})]})})}}]),s}(n.a.Component),L=s.p+"static/media/Dentino.e113557e.png",M=(s(175),function(e){if(0===e.length)return Object(t.jsx)("div",{className:"alert-validate","data-validate":"Este campo es requerido",style:{width:"100%"}})}),E=function(e){Object(u.a)(s,e);var a=Object(m.a)(s);function s(e){var t;return Object(d.a)(this,s),(t=a.call(this,e)).ChangeTokenHandler=function(e){t.setState({token:e.target.value})},t.ChangeUsernameHandler=function(e){t.setState({username:e.target.value})},t.ChangePasswordHandler=function(e){t.setState({password:e.target.value})},t.state={currentUser:g.getCurrentUser(),username:"",password:"",loading:!1,message:"",estado:"",token:""},t.ChangeUsernameHandler=t.ChangeUsernameHandler.bind(Object(b.a)(t)),t.ChangePasswordHandler=t.ChangePasswordHandler.bind(Object(b.a)(t)),t.loginUsuario=t.loginUsuario.bind(Object(b.a)(t)),t.register=t.register.bind(Object(b.a)(t)),t.logOut=t.logOut.bind(Object(b.a)(t)),t}return Object(j.a)(s,[{key:"loginUsuario",value:function(e){var a=this;e.preventDefault(),this.setState({message:"",loading:!0}),this.form.validateAll(),0===this.checkBtn.context._errors.length?g.login(this.state.username,this.state.password).then((function(){window.location.reload(!0)}),(function(e){var s=e.response&&e.response.data||e.message||e.toString();a.setState({loading:!1,message:s}),S.a.fire({title:s,icon:"error",backdrop:"rgba(61, 0, 0, 0.4)"})})):this.setState({loading:!1})}},{key:"register",value:function(){}},{key:"logOut",value:function(){g.logout()}},{key:"render",value:function(){var e=this;return Object(t.jsx)("div",{className:"limiter",children:Object(t.jsx)("div",{className:"container-login100",children:Object(t.jsxs)("div",{className:"wrap-login100",children:[Object(t.jsx)("div",{className:"wrap",children:Object(t.jsx)("div",{className:"container-prueba",children:Object(t.jsx)("img",{className:"box box logo",src:L,alt:"Logo"})})}),Object(t.jsxs)(v.a,{className:"login100-form validate-form",onSubmit:this.loginUsuario,ref:function(a){e.form=a},children:[Object(t.jsx)("span",{className:"login100-form-title",children:"Login"}),Object(t.jsxs)("div",{className:"wrap-input100",children:[Object(t.jsx)(y.a,{className:"input100-julio",type:"text",placeholder:"Username",value:this.state.username,onChange:this.ChangeUsernameHandler,validations:[M]}),Object(t.jsx)("span",{className:"symbol-input100",children:Object(t.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})})]}),Object(t.jsxs)("div",{className:"wrap-input100",children:[Object(t.jsx)(y.a,{className:"input100-julio",type:"password",placeholder:"Password",value:this.state.password,onChange:this.ChangePasswordHandler,validations:[M]}),Object(t.jsx)("span",{className:"symbol-input100",children:Object(t.jsx)("i",{className:"fa fa-lock","aria-hidden":"true"})})]}),Object(t.jsxs)("div",{className:"container-login100-form-btn",children:[Object(t.jsxs)("button",{className:"login100-form-btn",onClick:this.loginUsuario,ref:function(a){e.checkBtn=a},disabled:this.state.loading,children:[" ",this.state.loading&&Object(t.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(t.jsx)("b",{children:"Ingresar"})]}),Object(t.jsx)(w.a,{style:{display:"none"},ref:function(a){e.checkBtn=a}})]}),Object(t.jsx)(r.b,{style:{display:"none"},className:"registrar100-form-btn",exact:!0,to:"/register",children:Object(t.jsx)("b",{children:"Reg\xedstrate"})})]})]})})})}}]),s}(n.a.Component),D=function(e){Object(u.a)(s,e);var a=Object(m.a)(s);function s(e){var t;return Object(d.a)(this,s),(t=a.call(this,e)).logOut=t.logOut.bind(Object(b.a)(t)),t.state={currentUser:g.getCurrentUser()},t}return Object(j.a)(s,[{key:"logOut",value:function(){g.logout(),window.location.reload(!1)}},{key:"render",value:function(){var e=this.state.currentUser;return Object(t.jsxs)("div",{children:[1===e.estado&&Object(t.jsx)(I,{}),Object(t.jsx)("button",{type:"button",className:"btn btn-danger",onClick:this.logOut,children:"Cerrar Sesion"}),Object(t.jsxs)("label",{children:["Aduana: estado=",e.estado]})]})}}]),s}(n.a.Component),A=function(e){Object(u.a)(s,e);var a=Object(m.a)(s);function s(e){var t;return Object(d.a)(this,s),(t=a.call(this,e)).state={currentUser:g.getCurrentUser(),currentState:g.getCurrentState(),loading:!1,message:""},t}return Object(j.a)(s,[{key:"componentDidMount",value:function(){localStorage.getItem("isLandingPage")&&(localStorage.removeItem("isLandingPage"),window.location.reload())}},{key:"render",value:function(){var e=this.state.currentUser;return Object(t.jsx)("div",{children:null===e&&Object(t.jsx)(E,{})||0===e.estado&&Object(t.jsx)(D,{})||1===e.estado&&Object(t.jsx)(I,{})})}}]),s}(n.a.Component),B=s(178),T=s(179),V=[{id:1,personaje:"Naruto",anime:"Naruto"},{id:2,personaje:"Goku",anime:"Dragon Ball"},{id:3,personaje:"Kenshin Himura",anime:"Rurouni Kenshin"},{id:4,personaje:"Monkey D. Luffy",anime:"One Piece"},{id:5,personaje:"Edward Elric",anime:"Fullmetal Alchemist: Brotherhood"},{id:6,personaje:"Seto Kaiba",anime:"Yu-Gi-Oh!"}],q=function(e){Object(u.a)(s,e);var a=Object(m.a)(s);function s(e){var t;return Object(d.a)(this,s),(t=a.call(this,e)).state={currentUser:g.getCurrentUser(),data:V,form:{id:"",personaje:"",anime:""}},t}return Object(j.a)(s,[{key:"componentDidMount",value:function(){localStorage.getItem("isLandingPage")&&(localStorage.removeItem("isLandingPage"),window.location.reload())}},{key:"onlyPaciente",value:function(e){localStorage.setItem("paciente",!0),localStorage.setItem("isLandingPage",!0)}},{key:"render",value:function(){return localStorage.getItem("page"),Object(t.jsx)("body",{class:"hold-transition sidebar-mini layout-fixed",children:Object(t.jsxs)("div",{class:"wrapper",children:[Object(t.jsx)(U,{}),Object(t.jsx)(F,{}),Object(t.jsx)("div",{className:"content-wrapper",children:Object(t.jsxs)("div",{className:"container-modulos",children:[Object(t.jsx)("br",{}),Object(t.jsx)(r.c,{style:{marginBottom:"3%"},class:"registrar100-form-btn",to:"/pacientes-add",onClick:this.onlyPaciente,children:" Agregar Paciente"}),Object(t.jsxs)(B.a,{children:[Object(t.jsx)("thead",{children:Object(t.jsxs)("tr",{children:[Object(t.jsx)("th",{children:"ID"}),Object(t.jsx)("th",{children:"Personaje"}),Object(t.jsx)("th",{children:"Anime"}),Object(t.jsx)("th",{children:"Acci\xf3n"})]})}),Object(t.jsx)("tbody",{children:this.state.data.map((function(e){return Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{children:e.id}),Object(t.jsx)("td",{children:e.personaje}),Object(t.jsx)("td",{children:e.anime}),Object(t.jsxs)("td",{children:[Object(t.jsx)(T.a,{color:"primary",children:"Editar"})," ",Object(t.jsx)(T.a,{color:"danger",children:"Eliminar"})]})]},e.id)}))})]})]})})]})})}}]),s}(n.a.Component);function R(){var e=Object(o.g)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var z=s(19),G=s(31),J=function(e){var a=e.component,s=Object(G.a)(e,["component"]);return Object(t.jsx)(o.b,Object(z.a)(Object(z.a)({},s),{},{render:function(e){return g.getCurrentUser()?Object(t.jsx)(a,Object(z.a)({},e)):Object(t.jsx)(o.a,{to:{pathname:"/",state:"{from: props location}"}})}}))},_=s(21),K=function(e){Object(u.a)(s,e);var a=Object(m.a)(s);function s(e){var t;return Object(d.a)(this,s),(t=a.call(this,e)).ChangeNombreHandler=function(e){t.setState({nombre:e.target.value})},t.ChangeApellidoHandler=function(e){t.setState({apellido:e.target.value})},t.ChangeFechaNacHandler=function(e){t.setState({fechaNac:e.target.value})},t.ChangeEmailHandler=function(e){t.setState({email:e.target.value})},t.ChangeDireccionHandler=function(e){t.setState({direccion:e.target.value})},t.ChangeTelefonoHandler=function(e){t.setState({telefono:e.target.value})},t.ChangeGeneroHandler=function(e){t.setState({genero:e.target.value})},t.state={nombre:"",apellido:"",fechaNac:"",email:"",direccion:"",telefono:"",genero:"",username:"",password:"",loading:!1,message:"",isFocus:!1},t.ChangeNombreHandler=t.ChangeNombreHandler.bind(Object(b.a)(t)),t.ChangeApellidoHandler=t.ChangeApellidoHandler.bind(Object(b.a)(t)),t.ChangeFechaNacHandler=t.ChangeFechaNacHandler.bind(Object(b.a)(t)),t.ChangeEmailHandler=t.ChangeEmailHandler.bind(Object(b.a)(t)),t.ChangeDireccionHandler=t.ChangeDireccionHandler.bind(Object(b.a)(t)),t.ChangeTelefonoHandler=t.ChangeTelefonoHandler.bind(Object(b.a)(t)),t.ChangeGeneroHandler=t.ChangeGeneroHandler.bind(Object(b.a)(t)),t.saveUsuario=t.saveUsuario.bind(Object(b.a)(t)),t.cancel=t.cancel.bind(Object(b.a)(t)),t.onMouseEnter=t.onMouseEnter.bind(Object(b.a)(t)),t.onBlur=t.onBlur.bind(Object(b.a)(t)),t.onFocus=t.onFocus.bind(Object(b.a)(t)),t.onMouseOut=t.onMouseOut.bind(Object(b.a)(t)),t}return Object(j.a)(s,[{key:"componentDidMount",value:function(){localStorage.getItem("isLandingPage")&&(localStorage.removeItem("isLandingPage"),window.location.reload())}},{key:"saveUsuario",value:function(e){var a=this;e.preventDefault(),this.setState({message:"",loading:!0}),void 0===this.form?(this.setState({loading:!1}),S.a.fire({title:"Esta opci\xf3n aun no se encuentra habilitada",icon:"warning",backdrop:"rgba(50, 50, 30, 0.5)"})):(this.form.validateAll(),0===this.checkBtn.context._errors.length?g.registrar_user().then((function(){a.props.history.push("/")}),(function(e){if(401===e.response.status)a.setState({loading:!1,message:"Personal No autorizado"});else{var s=e.response&&e.response.data||e.message||e.toString();a.setState({loading:!1,message:s})}})).catch(function(e){this.setState({loading:!1,message:"Error de Conexi\xf3n con el Servidor"})}.bind(this)):this.setState({loading:!1}))}},{key:"cancel",value:function(){this.props.history.push("/pacientes"),window.location.reload()}},{key:"onBlur",value:function(e){this.state.isFocus=!1,e.currentTarget.type="text"}},{key:"onFocus",value:function(e){this.state.isFocus=!0,e.currentTarget.type="month"}},{key:"onMouseEnter",value:function(e){e.currentTarget.type="month"}},{key:"onMouseOut",value:function(e){!1===this.state.isFocus&&(e.currentTarget.type="text")}},{key:"render",value:function(){var e;return localStorage.setItem("paciente",!0),Object(t.jsx)("body",{class:"hold-transition sidebar-mini layout-fixed",children:Object(t.jsxs)("div",{class:"wrapper",children:[Object(t.jsx)(U,{}),Object(t.jsx)(F,{}),Object(t.jsx)("div",{className:"content-wrapper",style:{background:"white"},children:Object(t.jsx)("div",{className:"container-modulos",children:Object(t.jsxs)("div",{class:"wrap-register200",style:{width:""},children:[Object(t.jsx)("span",{class:"login100-form-title",children:"Registrar Paciente"}),Object(t.jsxs)("form",{class:"register100-form validate-form",style:{display:"contents"},children:[Object(t.jsxs)("div",{class:"container container-register",children:[Object(t.jsxs)("div",{class:"wrap-input100 validate-input","data-validate":"Valid email is required: ex@abc.xyz",children:[Object(t.jsx)("input",{class:"input100-julio",type:"text",name:"email",placeholder:"Nombres",autofocus:!0}),Object(t.jsx)("span",{class:"focus-input100"}),Object(t.jsx)("span",{class:"symbol-input100",children:Object(t.jsx)("i",{class:"fa fa-user","aria-hidden":"true"})})]}),Object(t.jsxs)("div",{class:"wrap-input100 validate-input","data-validate":"Password is required",children:[Object(t.jsx)("input",{class:"input100-julio",type:"text",name:"pass",placeholder:"Apellidos"}),Object(t.jsx)("span",{class:"focus-input100"}),Object(t.jsx)("span",{class:"symbol-input100",children:Object(t.jsx)("i",{class:"fa fa-user","aria-hidden":"true"})})]})]}),Object(t.jsxs)("div",{class:"container container-register",children:[Object(t.jsxs)("div",{class:"wrap-input100 validate-input","data-validate":"Valid email is required: ex@abc.xyz",children:[Object(t.jsx)("input",{class:"input100-julio textbox-n",type:"text",name:"bday-month",placeholder:"Fecha de Nacimiento",onFocus:this.onFocus,onBlur:this.onBlur,onMouseEnter:this.onMouseEnter,onMouseOut:this.onMouseOut}),Object(t.jsx)("span",{class:"focus-input100"}),Object(t.jsx)("span",{class:"symbol-input100",children:Object(t.jsx)("i",{class:"fa fa-calendar","aria-hidden":"true"})})]}),Object(t.jsxs)("div",{class:"wrap-input100 validate-input","data-validate":"Valid email is required: ex@abc.xyz",children:[Object(t.jsx)("input",{class:"input100-julio",type:"text",name:"email",placeholder:"Email"}),Object(t.jsx)("span",{class:"focus-input100"}),Object(t.jsx)("span",{class:"symbol-input100",children:Object(t.jsx)("i",{class:"fa fa-envelope","aria-hidden":"true"})})]})]}),Object(t.jsxs)("div",{class:"container container-register",children:[Object(t.jsxs)("div",{class:"wrap-input100 validate-input","data-validate":"Password is required",children:[Object(t.jsxs)("select",{className:"input100-julio",style:{border:"none"},children:[Object(t.jsx)("option",(e={disabled:!0,selected:!0,value:!0,hidden:!0},Object(_.a)(e,"selected",!0),Object(_.a)(e,"style",{color:"red"}),Object(_.a)(e,"children","Eliga el G\xe9nero"),e)),Object(t.jsx)("option",{value:"M",children:"Masculino"}),Object(t.jsx)("option",{value:"F",children:"Femenino"})]}),Object(t.jsx)("span",{class:"focus-input100"}),Object(t.jsx)("span",{class:"symbol-input100",children:Object(t.jsx)("i",{class:"fa fa-transgender","aria-hidden":"true"})})]}),Object(t.jsxs)("div",{class:"wrap-input100 validate-input","data-validate":"Valid email is required: ex@abc.xyz",children:[Object(t.jsx)("input",{class:"input100-julio",type:"text",name:"email",placeholder:"Tel\xe9fono"}),Object(t.jsx)("span",{class:"focus-input100"}),Object(t.jsx)("span",{class:"symbol-input100",children:Object(t.jsx)("i",{class:"fa fa-phone","aria-hidden":"true"})})]})]}),Object(t.jsx)("div",{class:"container container-register",children:Object(t.jsxs)("div",{class:"wrap-input100 validate-input","data-validate":"Password is required",children:[Object(t.jsx)("input",{class:"input100-julio",type:"text",name:"pass",placeholder:"Direcci\xf3n"}),Object(t.jsx)("span",{class:"focus-input100"}),Object(t.jsx)("span",{class:"symbol-input100",children:Object(t.jsx)("i",{class:"fa fa-home","aria-hidden":"true"})})]})}),Object(t.jsxs)("div",{class:"container-login100-form-btn",children:[Object(t.jsx)("button",{className:"registrar100-form-btn",onClick:this.saveUsuario,style:{maxWidth:"1140px"},children:Object(t.jsx)("b",{children:"Registrar"})}),Object(t.jsx)("button",{className:"volver100-form-btn",onClick:this.cancel,style:{maxWidth:"1140px"},children:Object(t.jsx)("b",{children:"Volver"})})]})]})]})})})]})})}}]),s}(n.a.Component);var W=function(){return Object(t.jsxs)(r.a,{children:[Object(t.jsx)(R,{}),Object(t.jsxs)(o.d,{children:[Object(t.jsx)(J,{path:"/pacientes",component:q}),Object(t.jsx)(J,{path:"/pacientes-add",component:K}),Object(t.jsx)(o.b,{exact:!0,path:"/",component:A}),Object(t.jsx)(o.a,{path:"/*",to:"/"})]})]})},Y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,180)).then((function(a){var s=a.getCLS,t=a.getFID,c=a.getFCP,n=a.getLCP,i=a.getTTFB;s(e),t(e),c(e),n(e),i(e)}))};l.a.render(Object(t.jsx)(n.a.Fragment,{children:Object(t.jsx)(W,{})}),document.getElementById("root")),Y()},69:function(e,a,s){}},[[176,1,2]]]);
//# sourceMappingURL=main.4afbd738.chunk.js.map