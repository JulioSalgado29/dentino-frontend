import React from 'react';
import TrabajadorService from '../../../../Servicios/TrabajadorService';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select"
import CheckButton from "react-validation/build/button";
import { isEmail, isNumeric } from 'validator';
import HeaderComponent from '../../../Complementos/HeaderComponent';
import Sidebar from '../../../Complementos/SidebarComponent';
import Swal from 'sweetalert2';

const required = value => {
  if (value.length === 0) {
    return (
      <div className="alert-validate" data-validate="Este campo es requerido" style={{ width: "100%" }} />
    );
  }
};
const email = value => {
  if (!isEmail(value) && value.length !== 0) {
    return (
      <div className="alert-validate" data-validate="El formato del email no es valido" style={{ width: "100%" }} />
    );
  }
};
const telefono = value => {
  if (!isNumeric(value) && value.length !== 0) {
    return (
      <div className="alert-validate" data-validate="El telefono debe solo contener numeros" style={{ width: "100%" }} />
    );
  }
  else if (value < 100000000 && value.length !== 0) {
    return (
      <div className="alert-validate" data-validate="El numero de teléfono no debe tener menos 9 digitos" style={{ width: "100%" }} />
    );
  }
  else if (value > 1000000000 && value.length !== 0) {
    return (
      <div className="alert-validate" data-validate="El numero de teléfono no debe tener mas de 9 digitos" style={{ width: "100%" }} />
    );
  }
  else if (value < 900000000 && value.length !== 0) {
    return (
      <div className="alert-validate" data-validate="El numero de teléfono debe iniciar con el numero 9" style={{ width: "100%" }} />
    );
  }
}
const apellido = value => {
  if (value.length < 3) {
    return (
      <div className="alert-validate" data-validate="El apellido debe tener mínimo 3 letras" style={{ width: "100%" }} />
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
const dni = value => {
  if (!isNumeric(value) && value.length !== 0) {
    return (
      <div className="alert-validate" data-validate="El dni debe solo contener numeros" style={{ width: "100%" }} />
    );
  }
  else if (value.length !== 8 && value.length !== 0) {
    return (
      <div className="alert-validate" data-validate="El dni debe tener 8 digitos" style={{ width: "100%" }} />
    );
  }
}

function format(x, y) {
  var z = {
    M: x.getMonth() + 1,
    d: x.getDate() + 1,
    h: x.getHours(),
    m: x.getMinutes(),
    s: x.getSeconds()
  };
  y = y.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
    return ((v.length > 1 ? "0" : "") + z[v.slice(-1)]).slice(-2)
  });

  return y.replace(/(y+)/g, function (v) {
    return x.getFullYear().toString().slice(-v.length)
  });
}

class EditarTrabajadorComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: JSON.parse(localStorage.getItem("dato")).persona.id,
      nombre: JSON.parse(localStorage.getItem("dato")).persona.nombre,
      apellido: JSON.parse(localStorage.getItem("dato")).persona.apellido,
      fechaNac: null,
      email: JSON.parse(localStorage.getItem("dato")).persona.email,
      direccion: JSON.parse(localStorage.getItem("dato")).persona.direccion,
      telefono: String(JSON.parse(localStorage.getItem("dato")).persona.telefono),
      genero: JSON.parse(localStorage.getItem("dato")).persona.genero,
      dni: JSON.parse(localStorage.getItem("dato")).persona.dni,

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
    this.ChangeDniHandler = this.ChangeDniHandler.bind(this);

    this.editTrabajador = this.editTrabajador.bind(this);
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
    if (this.state.telefono === "null") {
      this.setState({
        telefono: "",
      });
    }
    if (JSON.parse(localStorage.getItem("dato")).persona.fechaNac !== null) {
      this.setState({
        fechaNac: format(new Date(JSON.parse(localStorage.getItem("dato")).persona.fechaNac), "yyyy-MM-dd"),
      });
    }
  }

  editTrabajador(e) {
    e.preventDefault();
    this.setState({
      message: "",
      loading: true,
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      Swal.fire
        ({
          title: "Estas seguro de editar al trabajador: '" + JSON.parse(localStorage.getItem("dato")).persona.nombre + " " + JSON.parse(localStorage.getItem("dato")).persona.apellido + "'",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si',
          backdrop: 'rgba(100, 100, 43, 0.4)'
        }).then((result) => {
          if (result.value) {
            TrabajadorService.editar_trabajador(this.state.id, this.state.nombre, this.state.apellido, this.state.email, this.state.fechaNac,
              this.state.direccion, this.state.telefono, this.state.genero, this.state.dni)
              .then(() => {
                Swal.fire
                  ({
                    title: "Trabajador actualizado",
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    backdrop: 'rgba(0, 61, 0, 0.4)'
                  }).then((result) => {
                    if (result.value) {
                      this.props.history.push('/trabajadores')
                    }else{
                      this.props.history.push('/trabajadores')
                    }
                  })
              },
                error => {
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
          }
          else {
            this.setState({
              loading: false
            });
          }
        })
    } else {
      this.setState({
        loading: false
      });
    }
  }
  ChangeNombreHandler = (event) => {
    this.setState({ nombre: event.target.value })
  }
  ChangeApellidoHandler = (event) => {
    this.setState({ apellido: event.target.value })
  }
  ChangeFechaNacHandler = (event) => {
    this.setState({ fechaNac: event.target.value })
  }
  ChangeEmailHandler = (event) => {
    this.setState({ email: event.target.value })
  }
  ChangeDireccionHandler = (event) => {
    this.setState({ direccion: event.target.value })
  }
  ChangeTelefonoHandler = (event) => {
    this.setState({ telefono: event.target.value })
  }
  ChangeGeneroHandler = (event) => {
    this.setState({ genero: event.target.value })
  }
  ChangeDniHandler = (event) => {
    this.setState({ dni: event.target.value })
  }

  cancel() {
    this.props.history.push('/trabajadores')
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
    localStorage.setItem("trabajador", true);
    return (
      <div className="wrapper">
        <HeaderComponent />
        <Sidebar />
        <div className="content-wrapper" style={{ background: "white" }}>
          <div className="container-modulos">
            <div className="wrap-register200" style={{ width: '' }}>
              <span className="login100-form-title">Actualizar Trabajador</span>
              <Form className="register100-form validate-form" style={{ display: "contents" }} onSubmit={this.editTrabajador} ref={c => { this.form = c; }}>
                <div className="container container-register">

                  <div className="wrap-input100 validate-input">
                    <Input className="input100-julio" type="text" placeholder="Nombres" value={this.state.nombre}
                      onChange={this.ChangeNombreHandler} validations={[required, nombre]} />
                    <span className="symbol-input100">
                      <i className="fa fa-N" aria-hidden="true"></i>
                    </span>
                  </div>

                  <div className="wrap-input100 validate-input">
                    <Input className="input100-julio" type="text" placeholder="Apellidos" value={this.state.apellido}
                      onChange={this.ChangeApellidoHandler} validations={[required, apellido]} />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-A" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div className="container container-register">
                  <div className="wrap-input100 validate-input">
                    <Input className="input100-julio textbox-n" type="text" placeholder="Fecha de Nacimiento"
                      value={this.state.fechaNac} onChange={this.ChangeFechaNacHandler}
                      onFocus={this.onFocus} onBlur={this.onBlur} onMouseEnter={this.onMouseEnter} onMouseOut={this.onMouseOut} />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input">
                    <Input className="input100-julio" type="text" placeholder="Email" value={this.state.email}
                      onChange={this.ChangeEmailHandler} validations={[email]} />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div className="container container-register">
                  <div className="wrap-input100 validate-input">
                    <Select value={this.state.genero} onChange={this.ChangeGeneroHandler} className="input100-julio" style={{ border: "none" }} validations={[required]}>
                      <option hidden style={{ color: "red" }} value="">Elija el Género</option>
                      <option value="M">Masculino</option>
                      <option value="F">Femenino</option>
                    </Select>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-transgender" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input">
                    <Input className="input100-julio" type="text" name="email" placeholder="Teléfono" value={this.state.telefono}
                      onChange={this.ChangeTelefonoHandler} validations={[telefono]} />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div className="container container-register">
                  <div className="wrap-input100 validate-input">
                    <Input className="input100-julio" type="text" name="pass" placeholder="Dirección" value={this.state.direccion}
                      onChange={this.ChangeDireccionHandler} />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-home" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input">
                    <Input className="input100-julio" type="text" name="pass" placeholder="DNI" value={this.state.dni}
                      onChange={this.ChangeDniHandler} validations={[dni,required]} />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fas fa-id-card" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>

                <div className="container-login100-form-btn">
                  <button className="registrar100-form-btn" onClick={this.editTrabajador} style={{ maxWidth: "1140px" }}
                    ref={c => { this.checkBtn = c; }} disabled={this.state.loading}>{this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>)}<b>Actualizar</b></button>
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
export default EditarTrabajadorComponent