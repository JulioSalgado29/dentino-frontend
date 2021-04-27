import React from 'react';
import UsuarioService from '../../../Servicios/UsuarioService';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import image from '../../../Images/Dentino.png';
import '../Theme/style.scss';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const required = value => {
  if (value.length===0) {
      return (<div className="alert-validate" data-validate="Este campo es requerido" style={{width:"100%"}}/>);
  }
};

class LoginComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          username: '',
          password: '',
          loading: false,
          message: "",
          usuarioEstado: '',
          token: ""
        }
        this.ChangeUsernameHandler = this.ChangeUsernameHandler.bind(this);
        this.ChangePasswordHandler = this.ChangePasswordHandler.bind(this);
        this.loginUsuario = this.loginUsuario.bind(this);
        this.register = this.register.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    loginUsuario(e){
        e.preventDefault();
        this.setState({
            message: "",
            loading: true
          });
          this.form.validateAll();
          if (this.checkBtn.context._errors.length === 0){
            UsuarioService.login(this.state.username, this.state.password).then(() => {
              window.location.reload(true);
            },
            error => {
              const resMessage =
              (error.response && error.response.data) || error.message 
              || error.toString();
              this.setState({
                loading: false,
                message: resMessage
              });
              Swal.fire
              ({title: resMessage,
                icon: 'error',
                backdrop: 'rgba(61, 0, 0, 0.4)'})
            });
          }else {
            this.setState({
              loading: false
            });
        }
    }
    ChangeTokenHandler= (event) => {
      this.setState({token: event.target.value})
    }
    ChangeUsernameHandler= (event) => {
        this.setState({username: event.target.value})
    }
    ChangePasswordHandler= (event) => {
        this.setState({password: event.target.value})
    }
    register(){
    }
    logOut() {
      UsuarioService.logout();
    }

    render (){
      return(
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="wrap">
                        <div className="container-prueba">
                                <img className="box box logo" src={image} alt="Logo"/>
                        </div>
                    </div>

                    <Form className="login100-form validate-form" onSubmit={this.loginUsuario} ref={c => {this.form = c;}}>
                        <span className="login100-form-title">
                            Login
                        </span>
                        <div className="wrap-input100 validate-input">
                            <Input className="input100-julio" type="text" placeholder="Username" value={this.state.username} 
                                  onChange={this.ChangeUsernameHandler} validations={[required]}/>
                            <span className="symbol-input100">
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100">
                            <Input className="input100-julio" type="password" placeholder="Password" value={this.state.password}
                            onChange={this.ChangePasswordHandler} validations={[required]}/>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>
                        
                        <div className="container-login100-form-btn">
                        <button className="login100-form-btn" onClick={this.loginUsuario} 
                        ref={c => {this.checkBtn = c;}} disabled={this.state.loading}> {this.state.loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                        )}<b>Ingresar</b></button>
                        
                        <CheckButton style={{ display: "none" }} ref={c => {this.checkBtn = c;}}/>
                        </div>
                        <Link style={{display:"none"}}className="registrar100-form-btn" exact to="/register" ><b>Regístrate</b></Link>
                    </Form>
                </div>
            </div>
        </div>
    )
    }
}

export default LoginComponent