import React from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isNumeric } from 'validator';
import HeaderComponent from '../../../Complementos/HeaderComponent';
import Sidebar from '../../../Complementos/SidebarComponent';
import Swal from 'sweetalert2';
import ConsultorioService from '../../../../Servicios/ConsultorioService';

const required = value => {
  if (value.length === 0) {
    return (
      <div className="alert-validate" data-validate="Este campo es requerido" style={{ width: "100%" }} />
    );
  }
};

const direccion = value => {
  if (value.length < 3) {
    return (
      <div className="alert-validate" data-validate="La direccion debe tener mínimo 3 letras" style={{ width: "100%" }} />
    );
  }
}
const nombre = value => {
  if (value.length < 3) {
    return (
      <div className="alert-validate" data-validate="El nombre debe tener mínimo 3 letras" style={{ width: "100%" }} />
    );
  }
}
const aforo = value => {
  if (!isNumeric(value) && value.length !== 0) {
    return (
      <div className="alert-validate" data-validate="El aforo debe solo contener numeros" style={{ width: "100%" }} />
    );
  }
  else if (value.length <= 0 && value.length !== 0) {
    return (
      <div className="alert-validate" data-validate="El aforo debe ser mayor a 0" style={{ width: "100%" }} />
    );
  }
}

class AgregarConsultorioComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      direccion: '',
      aforo: '',
      loading: false,
      message: '',
      isFocus: false,
    }
    this.ChangeNombreHandler = this.ChangeNombreHandler.bind(this);
    this.ChangeDireccionHandler = this.ChangeDireccionHandler.bind(this);
    this.ChangeAforoHandler = this.ChangeAforoHandler.bind(this);

    this.saveConsultorio = this.saveConsultorio.bind(this);
    this.cancel = this.cancel.bind(this);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("isLandingPage")) {
      localStorage.removeItem("isLandingPage");
      window.location.reload();
    }
  }

  saveConsultorio(e) {
    e.preventDefault();
    this.setState({
      message: "",
      loading: true,
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      ConsultorioService.registrarConsultorio(this.state.nombre, this.state.direccion, this.state.aforo)
        .then((response) => {
          Swal.fire
            ({
              title: "El Consultorio '" + this.state.nombre + "' fue registrado con éxito",
              icon: 'success',
              confirmButtonColor: '#3085d6',
              backdrop: 'rgba(0, 61, 0, 0.4)'
            }).then((result) => {
              if (result.value) {
                this.props.history.push('/consultorios')
              }
              else{
                this.props.history.push('/consultorios')
              }
            })
        },
          error => {
            console.log(error);
            if (error.response.status === 401) {
              this.setState({
                loading: false
              });
              Swal.fire
                ({
                  title: "Personal No autorizado",
                  icon: 'error',
                  backdrop: 'rgba(61, 0, 0, 0.4)'
                })
            }
            else {
              const resMessage =
                (error.response && error.response.data) || error.message
                || error.toString();
              this.setState({
                loading: false,
                message: resMessage
              });
              Swal.fire
                ({
                  title: resMessage,
                  icon: 'error',
                  backdrop: 'rgba(61, 0, 0, 0.4)'
                })
            }
          })
        .catch(function (error) {
          this.setState({
            loading: false,
          });
          Swal.fire
            ({
              title: "Error de Conexión con el Servidor",
              icon: 'error',
              backdrop: 'rgba(61, 0, 0, 0.4)'
            })
        }.bind(this))
    } else {
      this.setState({
        loading: false
      });
    }
  }
  ChangeNombreHandler = (event) => {
    this.setState({ nombre: event.target.value })
  }
  ChangeDireccionHandler = (event) => {
    this.setState({ direccion: event.target.value })
  }
  ChangeAforoHandler = (event) => {
    this.setState({ aforo: event.target.value })
  }

  cancel() {
    this.props.history.push('/consultorios')
  }


  onBlur(e) {
    /* eslint-disable */
    this.state.isFocus = false;
    e.currentTarget.type = "text";
  }
  onFocus(e) {
    /* eslint-disable */
    this.state.isFocus = true;
    e.currentTarget.type = "date";
  }
  onMouseEnter(e) {
    e.currentTarget.type = "date";
  }
  onMouseOut(e) {
    if (this.state.isFocus === false) {
      e.currentTarget.type = "text";
    }
  }
  render() {
    localStorage.removeItem("paciente");
    localStorage.removeItem("trabajador");
    localStorage.setItem("consultorio", true);
    return (
      <div className="wrapper">
        <HeaderComponent />
        <Sidebar />
        <div className="content-wrapper" style={{ background: "white" }}>
          <div className="container-modulos">
            <div className="wrap-register200" style={{ width: '' }}>
              <span className="login100-form-title">Registrar Consultorio</span>
              <Form className="register100-form validate-form" style={{ display: "contents" }} onSubmit={this.saveConsultorio} ref={c => { this.form = c; }}>
                <div className="container container-register">
                  <div className="wrap-input100 validate-input">
                    <Input className="input100-julio" type="text" placeholder="Nombre" value={this.state.nombre}
                      onChange={this.ChangeNombreHandler} validations={[required, nombre]} />
                    <span className="symbol-input100">
                      <i className="fa fa-N" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input">
                    <Input className="input100-julio" type="text" name="pass" placeholder="Aforo" value={this.state.aforo}
                      onChange={this.ChangeAforoHandler} validations={[aforo, required]} />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fas fa-user-check" aria-hidden="true"></i>
                    </span>
                  </div>

                </div>
                <div className="container container-register">

                  <div className="wrap-input100 validate-input">
                    <Input className="input100-julio" type="text" placeholder="Dirección" value={this.state.direccion}
                      onChange={this.ChangeDireccionHandler} validations={[required, direccion]} />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-home" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>

                <div className="container-login100-form-btn">
                  <button className="registrar100-form-btn" onClick={this.saveConsultorio} style={{ maxWidth: "1140px" }}
                    ref={c => { this.checkBtn = c; }} disabled={this.state.loading}>{this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>)}<b>Registrar</b></button>
                  <CheckButton style={{ display: "none" }} ref={c => { this.checkBtn = c; }} />
                  <button className="volver100-form-btn" onClick={this.cancel} style={{ maxWidth: "1140px" }}><b>Volver</b></button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AgregarConsultorioComponent