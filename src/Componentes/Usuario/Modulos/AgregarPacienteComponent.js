import React from 'react';
import UsuarioService from '../../../Servicios/UsuarioService';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail, isEmpty, isNumeric } from 'validator';
import HeaderComponent from '../../Complementos/HeaderComponent';
import Sidebar from '../../Complementos/SidebarComponent';
import Swal from 'sweetalert2';

  const required = value => {
    if (value.length===0) {
      return (
        <div className="alert alert-danger" role="alert">
          Este campo es requerido
        </div>
      );
    }
  }; 
  const email = value => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          El email no es valido
        </div>
      );
    }
  };
  const password = value => {
    if (value.length < 6 ) {
      return (
        <div className="alert alert-danger" role="alert">
          La contraseña debe tener mas de 6 caracteres.
        </div>
      );
    }
  };

class AgregarPacienteComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            fechaNac: '',
            email: '',
            direccion: '',
            telefono: '',
            genero: '',
            username: '',
            password: '',
            loading: false,
            message: "",
            isFocus: false,
        }
        this.ChangeNombreHandler = this.ChangeNombreHandler.bind(this);
        this.ChangeApellidoHandler = this.ChangeApellidoHandler.bind(this);
        this.ChangeFechaNacHandler = this.ChangeFechaNacHandler.bind(this);
        this.ChangeEmailHandler = this.ChangeEmailHandler.bind(this);
        this.ChangeDireccionHandler = this.ChangeDireccionHandler.bind(this);
        this.ChangeTelefonoHandler = this.ChangeTelefonoHandler.bind(this);
        this.ChangeGeneroHandler = this.ChangeGeneroHandler.bind(this);
        this.saveUsuario = this.saveUsuario.bind(this);
        this.cancel = this.cancel.bind(this);

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onBlur	 = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }

    componentDidMount() {
      if (localStorage.getItem("isLandingPage")) {
          localStorage.removeItem("isLandingPage");
          window.location.reload();
      }
  }

    saveUsuario(e){
        e.preventDefault();
        this.setState({
            message: "",
            loading: true,
          });
          if(this.form === undefined){
            this.setState({
              loading: false
            });
            Swal.fire
            ({title: "Esta opción aun no se encuentra habilitada",
              icon: 'warning',
              backdrop: 'rgba(50, 50, 30, 0.5)'})
          }
          else{
          this.form.validateAll();
          if (this.checkBtn.context._errors.length === 0){
            UsuarioService.registrar_user(/*this.state.nombre, this.state.apellido, this.state.fechaNac, this.state.email, this.state.direccion, this.state.telefono, 
                                    this.state.genero, this.state.username, this.state.password*/)
            .then(() => {
              this.props.history.push("/");
              //window.location.reload();
            },
            error => {
              if(error.response.status === 401){
                this.setState({
                  loading: false,
                  message: "Personal No autorizado"
                });
              }
              else{
              const resMessage =
              (error.response && error.response.data) || error.message 
              || error.toString();
              this.setState({
                loading: false,
                message: resMessage
              });
            }})
            .catch(function(error){
              this.setState({
                loading: false,
                message: "Error de Conexión con el Servidor"
              });
            }.bind(this))
          }else {
            this.setState({
              loading: false
            });
        }}
    }
    ChangeNombreHandler= (event) => {
      this.setState({nombre: event.target.value})
    }
    ChangeApellidoHandler= (event) => {
      this.setState({apellido: event.target.value})
    }
    ChangeFechaNacHandler= (event) => {
      this.setState({fechaNac: event.target.value})
    }
    ChangeEmailHandler= (event) => {
      this.setState({email: event.target.value})
    }
    ChangeDireccionHandler= (event) => {
      this.setState({direccion: event.target.value})
    }
    ChangeTelefonoHandler= (event) => {
      this.setState({telefono: event.target.value})
    }
    ChangeGeneroHandler= (event) => {
      this.setState({genero: event.target.value})
    }
    cancel(){
        this.props.history.push('/pacientes')
        window.location.reload();
    }
    onBlur(e) {
      this.state.isFocus=false;
      e.currentTarget.type = "text";
    }
    onFocus(e) {
      this.state.isFocus=true;
      e.currentTarget.type = "month";
    }
    onMouseEnter (e){
      e.currentTarget.type = "month";
    }
    onMouseOut (e){
      if(this.state.isFocus===false){
        e.currentTarget.type = "text";
      }
    }
    render (){
      localStorage.setItem("paciente",true);
        return(
            <body class="hold-transition sidebar-mini layout-fixed">
                <div class="wrapper">
                    <HeaderComponent />
                    <Sidebar />
                    <div className="content-wrapper" style={{background:"white"}}>
                        <div className="container-modulos">
                            <div class="wrap-register200" style={{width:''}}>
                            <span class="login100-form-title">
                                        Registrar Paciente
                                    </span>
                                <form class="register100-form validate-form" style={{display:"contents"}}>
                                <div class="container container-register">
                                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                        <input class="input100-julio" type="text" name="email" placeholder="Nombres" autofocus/>
                                        <span class="focus-input100"></span>
                                        <span class="symbol-input100">
                                            <i class="fa fa-user" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div class="wrap-input100 validate-input" data-validate = "Password is required">
                                        <input class="input100-julio" type="text" name="pass" placeholder="Apellidos"/>
                                        <span class="focus-input100"></span>
                                        <span class="symbol-input100">
                                            <i class="fa fa-user" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="container container-register">
                                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                        <input class="input100-julio textbox-n" type="text" name="bday-month" placeholder="Fecha de Nacimiento"
                                        onFocus={this.onFocus} onBlur={this.onBlur} onMouseEnter={this.onMouseEnter} onMouseOut={this.onMouseOut}/>
                                        <span class="focus-input100"></span>
                                        <span class="symbol-input100">
                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                        <input class="input100-julio" type="text" name="email" placeholder="Email"/>
                                        <span class="focus-input100"></span>
                                        <span class="symbol-input100">
                                            <i class="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="container container-register">
                                <div class="wrap-input100 validate-input" data-validate = "Password is required">
                                        <select className="input100-julio" style={{border:"none"}}>
                                          <option disabled selected value hidden selected style={{color:"red"}}>Eliga el Género</option>
                                          <option value="M">Masculino</option>
                                          <option value="F">Femenino</option>
                                        </select>
                                        <span class="focus-input100"></span>
                                        <span class="symbol-input100">
                                            <i class="fa fa-transgender" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                        <input class="input100-julio" type="text" name="email" placeholder="Teléfono"/>
                                        <span class="focus-input100"></span>
                                        <span class="symbol-input100">
                                            <i class="fa fa-phone" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="container container-register">
                                <div class="wrap-input100 validate-input" data-validate = "Password is required">
                                        <input class="input100-julio" type="text" name="pass" placeholder="Dirección"/>
                                        <span class="focus-input100"></span>
                                        <span class="symbol-input100">
                                            <i class="fa fa-home" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="container-login100-form-btn">
                                    <button className="registrar100-form-btn" onClick={this.saveUsuario} style={{maxWidth:"1140px"}}><b>Registrar</b></button>
                                    <button className="volver100-form-btn" onClick={this.cancel} style={{maxWidth:"1140px"}}><b>Volver</b></button>
                                </div>
                                </form>
                                </div>
                        </div>
                    </div>
                </div>
            </body>
        )}
}
export default AgregarPacienteComponent