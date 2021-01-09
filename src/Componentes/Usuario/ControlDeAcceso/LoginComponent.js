import React from 'react';
import UsuarioService from '../../../Servicios/UsuarioService';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import image from '../../../Images/Dentino.png';
import '../Theme/style.scss';
import Swal from 'sweetalert2';

const required = value => {
  if (value.length===0) {
      return (<div className="alert-validate" data-validate="Este campo es requerido" style={{width:"100%"}}/>);
  }
};

class LoginComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          currentUser: UsuarioService.getCurrentUser(),
          username: '',
          password: '',
          loading: false,
          message: "",
          estado: '',
          token: ""
        }
        this.ChangeUsernameHandler = this.ChangeUsernameHandler.bind(this);
        this.ChangePasswordHandler = this.ChangePasswordHandler.bind(this);
        this.loginUsuario = this.loginUsuario.bind(this);
        //this.verificarUsuario = this.verificarUsuario.bind(this);
        //this.register = this.register.bind(this);
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
                icon: 'error'})
            });
          }else {
            this.setState({
              loading: false
            });
        }
    }
    /*verificarUsuario(e){
      e.preventDefault();
      this.setState({
          message: "",
          loading: true
        });
      const { currentUser } = this.state;
      console.log(currentUser);
      UsuarioService.verificacion(currentUser.username,currentUser.token)
      .then(() => {
          window.location.reload(false);
        },
        error => {
          const resMessage =
          (error.response && error.response.data) || error.message 
          || error.toString();
          this.setState({
            loading: false,
            message: resMessage
          });
          console.log(resMessage)
        });
    }*/
    ChangeTokenHandler= (event) => {
      this.setState({token: event.target.value})
    }
    ChangeUsernameHandler= (event) => {
        this.setState({username: event.target.value})
    }
    ChangePasswordHandler= (event) => {
        this.setState({password: event.target.value})
    }
    /*register(){
        this.props.history.push('/registrar-usuario')
    }*/
    logOut() {
      UsuarioService.logout();
    }

    render (){
      const { currentUser } = this.state;
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
                        <div className="wrap-input100">
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

                        <button style={{display:"none"}}className="registrar100-form-btn" onClick={this.register}><b>Regístrate</b></button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
    }
}

export default LoginComponent