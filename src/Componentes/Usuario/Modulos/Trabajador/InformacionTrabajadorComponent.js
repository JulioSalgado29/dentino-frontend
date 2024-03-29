import React from 'react';
import HeaderComponent from '../../../Complementos/HeaderComponent';
import Sidebar from '../../../Complementos/SidebarComponent';
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

class InformacionTrabajadorComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: JSON.parse(localStorage.getItem("dato")).persona.id,
      username: JSON.parse(localStorage.getItem("dato")).username,
      password: JSON.parse(localStorage.getItem("dato")).password,
      nombre: JSON.parse(localStorage.getItem("dato")).persona.nombre,
      apellido: JSON.parse(localStorage.getItem("dato")).persona.apellido,
      fechaNac: format(new Date(JSON.parse(localStorage.getItem("dato")).persona.fechaNac), "yyyy-MM-dd"),
      email: JSON.parse(localStorage.getItem("dato")).persona.email,
      direccion: String(JSON.parse(localStorage.getItem("dato")).persona.direccion),
      telefono: String(JSON.parse(localStorage.getItem("dato")).persona.telefono),
      genero: JSON.parse(localStorage.getItem("dato")).persona.genero,
      dni: JSON.parse(localStorage.getItem("dato")).persona.dni,

      loading: false,
      message: "",
      isFocus: false,
    }
    this.cancel = this.cancel.bind(this);
    this.imprimir = this.imprimir.bind(this);
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
    if (this.state.direccion === "null") {
      this.setState({
        direccion: "",
      });
    }
  }
  imprimir(){
    window.print();
  }
  cancel() {
    this.props.history.push('/trabajadores')
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
              <span className="login100-form-title">Informacion de Trabajador</span>
              <form className="register100-form validate-form" style={{ display: "contents" }}>
                <div className="container container-register">
                  <div className="wrap-input100 validate-input">
                    <input className="input100-julio" type="text" placeholder="Nombres" value={this.state.nombre} disabled />
                    <span className="symbol-input100">
                      <i className="fa fa-N" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input">
                    <input className="input100-julio" type="text" placeholder="Apellidos" value={this.state.apellido} disabled />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-A" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div className="container container-register">
                  <div className="wrap-input100 validate-input">
                    <input className="input100-julio" type="text" placeholder="Usuario" value={this.state.username} disabled/>
                    <span className="symbol-input100">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                  </div>

                  <div className="wrap-input100 validate-input">
                    <input className="input100-julio" type="text" placeholder="Contraseña" value={this.state.password} disabled/>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-key" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div className="container container-register">
                  <div className="wrap-input100 validate-input">
                    <input className="input100-julio textbox-n" type="date" placeholder="Fecha de Nacimiento" value={this.state.fechaNac} disabled />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input">
                    <input className="input100-julio" type="text" placeholder="Email" value={this.state.email} disabled />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div className="container container-register">
                  <div className="wrap-input100 validate-input">
                    <select value={this.state.genero} onChange={this.ChangeGeneroHandler} className="input100-julio" disabled>
                      <option hidden value="M">Masculino</option>
                      <option hidden value="F">Femenino</option>
                    </select>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-transgender" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input">
                    <input className="input100-julio" type="text" name="email" placeholder="Teléfono" value={this.state.telefono} disabled />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div className="container container-register">
                  <div className="wrap-input100 validate-input">
                    <input className="input100-julio" type="text" name="pass" placeholder="Dirección" value={this.state.direccion} disabled />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-home" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input">
                    <input className="input100-julio" type="text" name="pass" placeholder="DNI" value={this.state.dni} disabled />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fas fa-id-card" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div className="container-login100-form-btn">
                  <button className="imprimir100-form-btn" onClick={this.imprimir} style={{ maxWidth: "1140px" }}><b>Imprimir</b></button>
                  <button className="volver100-form-btn" onClick={this.cancel} style={{ maxWidth: "1140px" }}><b>Volver</b></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default InformacionTrabajadorComponent