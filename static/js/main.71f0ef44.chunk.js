(this["webpackJsonpdentino-frontend"]=this["webpackJsonpdentino-frontend"]||[]).push([[0],{43:function(e,t,n){},69:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),s=n.n(r),o=n(34),i=n.n(o),c=(n(43),n(18)),l=n(2),u=n(9),d=n(10),j=n(5),g=n(13),b=n(12),h=n(15),m=n.n(h),f="http://dentino.sytes.net:8000/login",O="http://dentino.sytes.net:8000/usuario",p=new(function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,[{key:"registrar_admin",value:function(){return m.a.post("http://dentino.sytes.net:8000/admin/registration",{persona:{nombre:"Gregory",apellido:"Recalde",email:"juliosalgado2998@gmail.com",fechaNac:"1999-02-07",direccion:"Heredia586",telefono:"920691763",genero:"M"},usuario:{username:"username",password:"password",fechaCre:"2020-07-10"}},{auth:{username:"admin",password:"1234abcd"}})}},{key:"registrar_employee",value:function(){return m.a.post("http://dentino.sytes.net:8000/employee/registration",{persona:{nombre:"Gregory",apellido:"Recalde",email:"julio2@gmail.com",fechaNac:"1999-02-07",direccion:"Heredia586",telefono:"920691763",genero:"M"},usuario:{username:"username",password:"password",fechaCre:"2020-07-10"}},{auth:{username:"admin",password:"1234abcd"}})}},{key:"registrar_user",value:function(){return m.a.post(O+"/registration",{persona:{nombre:"Gregory",apellido:"Recalde",email:"julio2@gmail.com",fechaNac:"1999-02-07",direccion:"Heredia586",telefono:"920691763",genero:"M"},usuario:{username:"username",password:"password",fechaCre:"2020-07-10"}})}},{key:"login",value:function(e,t){var n={username:e,password:t};return m.a.post(f+"/verificando",n).then((function(e){localStorage.setItem("usuario",JSON.stringify(e.data))}))}},{key:"actualizar_estado",value:function(e,t){return m.a.post(f+"/actualizar-estado",{username:e,token:t}).then((function(e){localStorage.setItem("usuario",JSON.stringify(e.data))}))}},{key:"verificar_usuario",value:function(e){return m.a.put(O+"/verificar-estado",{username:e}).then((function(e){localStorage.setItem("usuario2",JSON.stringify(e.data))}))}},{key:"getCurrentUser",value:function(){return JSON.parse(localStorage.getItem("usuario"))}},{key:"getCurrentState",value:function(){return JSON.parse(localStorage.getItem("usuario2"))}},{key:"logout",value:function(){localStorage.removeItem("usuario")}}]),e}()),v=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).logOut=a.logOut.bind(Object(j.a)(a)),a.state={currentUser:p.getCurrentUser()},a}return Object(d.a)(n,[{key:"logOut",value:function(){p.logout(),window.location.reload(!1)}},{key:"render",value:function(){var e=this.state.currentUser;return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{type:"button",className:"btn btn-danger",onClick:this.logOut,children:"Cerrar Sesion"}),Object(a.jsxs)("label",{children:["Index:estado=",e.estado]})]})}}]),n}(s.a.Component),x=n(35),y=n.n(x),w=n(21),C=n.n(w),k=n(36),S=n.n(k),N=n.p+"static/media/Dentino.e113557e.png",U=(n(69),n(17)),H=n.n(U),I=function(e){if(0===e.length)return Object(a.jsx)("div",{className:"alert-validate","data-validate":"Este campo es requerido",style:{width:"100%"}})},J=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).ChangeTokenHandler=function(e){a.setState({token:e.target.value})},a.ChangeUsernameHandler=function(e){a.setState({username:e.target.value})},a.ChangePasswordHandler=function(e){a.setState({password:e.target.value})},a.state={currentUser:p.getCurrentUser(),username:"",password:"",loading:!1,message:"",estado:"",token:""},a.ChangeUsernameHandler=a.ChangeUsernameHandler.bind(Object(j.a)(a)),a.ChangePasswordHandler=a.ChangePasswordHandler.bind(Object(j.a)(a)),a.loginUsuario=a.loginUsuario.bind(Object(j.a)(a)),a.logOut=a.logOut.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"loginUsuario",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",loading:!0}),this.form.validateAll(),0===this.checkBtn.context._errors.length?p.login(this.state.username,this.state.password).then((function(){window.location.reload(!0)}),(function(e){var n=e.response&&e.response.data||e.message||e.toString();t.setState({loading:!1,message:n}),H.a.fire({title:n,icon:"error"})})):this.setState({loading:!1})}},{key:"logOut",value:function(){p.logout()}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"limiter",children:Object(a.jsx)("div",{className:"container-login100",children:Object(a.jsxs)("div",{className:"wrap-login100",children:[Object(a.jsx)("div",{className:"wrap",children:Object(a.jsx)("div",{className:"container-prueba",children:Object(a.jsx)("img",{className:"box box logo",src:N,alt:"Logo"})})}),Object(a.jsxs)(y.a,{className:"login100-form validate-form",onSubmit:this.loginUsuario,ref:function(t){e.form=t},children:[Object(a.jsx)("span",{className:"login100-form-title",children:"Login"}),Object(a.jsxs)("div",{className:"wrap-input100",children:[Object(a.jsx)(C.a,{className:"input100-julio",type:"text",placeholder:"Username",value:this.state.username,onChange:this.ChangeUsernameHandler,validations:[I]}),Object(a.jsx)("span",{className:"symbol-input100",children:Object(a.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})})]}),Object(a.jsxs)("div",{className:"wrap-input100",children:[Object(a.jsx)(C.a,{className:"input100-julio",type:"password",placeholder:"Password",value:this.state.password,onChange:this.ChangePasswordHandler,validations:[I]}),Object(a.jsx)("span",{className:"symbol-input100",children:Object(a.jsx)("i",{className:"fa fa-lock","aria-hidden":"true"})})]}),Object(a.jsxs)("div",{className:"container-login100-form-btn",children:[Object(a.jsxs)("button",{className:"login100-form-btn",onClick:this.loginUsuario,ref:function(t){e.checkBtn=t},disabled:this.state.loading,children:[" ",this.state.loading&&Object(a.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(a.jsx)("b",{children:"Ingresar"})]}),Object(a.jsx)(S.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}}),Object(a.jsx)("button",{style:{display:"none"},className:"registrar100-form-btn",onClick:this.register,children:Object(a.jsx)("b",{children:"Reg\xedstrate"})})]})]})]})})})}}]),n}(s.a.Component),P=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).logOut=a.logOut.bind(Object(j.a)(a)),a.state={currentUser:p.getCurrentUser()},a}return Object(d.a)(n,[{key:"logOut",value:function(){p.logout(),window.location.reload(!1)}},{key:"render",value:function(){var e=this.state.currentUser;return Object(a.jsxs)("div",{children:[1===e.estado&&Object(a.jsx)(v,{}),Object(a.jsx)("button",{type:"button",className:"btn btn-danger",onClick:this.logOut,children:"Cerrar Sesion"}),Object(a.jsxs)("label",{children:["Aduana: estado=",e.estado]})]})}}]),n}(s.a.Component),_=function(e){Object(g.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={currentUser:p.getCurrentUser(),currentState:p.getCurrentState(),loading:!1,message:""},a.componentDidMount=a.componentDidMount.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;null!==this.state.currentUser&&p.verificar_usuario(this.state.currentUser.username).then((function(){null!==e.state.currentState&&e.state.currentUser.estado!==e.state.currentState.estado&&(window.location.reload(!0),localStorage.removeItem("usuario"),localStorage.removeItem("usuario2"))}),(function(t){var n=t.response&&t.response.data||t.message||t.toString();e.setState({loading:!1,message:n}),H.a.fire({title:n,icon:"error"})}))}},{key:"render",value:function(){var e=this.state.currentUser;return Object(a.jsx)("div",{children:null===e&&Object(a.jsx)(J,{})||0===e.estado&&Object(a.jsx)(P,{})||1===e.estado&&Object(a.jsx)(v,{})})}}]),n}(s.a.Component);function D(){var e=Object(l.g)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var M=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(c.b,{basename:"http://JulioSalgado29.github.io/dentino-frontend",children:Object(a.jsxs)(c.a,{children:[Object(a.jsx)(D,{}),Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{exact:!0,path:"/dentino-frontend/",component:_}),Object(a.jsx)(l.a,{path:"/*",to:"/dentino-frontend/"})]})]})})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};i.a.render(Object(a.jsx)(s.a.Fragment,{children:Object(a.jsx)(M,{})}),document.getElementById("root")),B()}},[[72,1,2]]]);
//# sourceMappingURL=main.71f0ef44.chunk.js.map