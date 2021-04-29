import React from 'react';
import HeaderComponent from '../../../Complementos/HeaderComponent';
import Sidebar from '../../../Complementos/SidebarComponent';

class InformacionConsultorioComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      codigo: JSON.parse(localStorage.getItem("dato")).codigo,
      nombre: JSON.parse(localStorage.getItem("dato")).nombre,
      direccion: JSON.parse(localStorage.getItem("dato")).direccion,
      aforo: JSON.parse(localStorage.getItem("dato")).aforo,

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
  }
  imprimir() {
    window.print();
  }
  cancel() {
    this.props.history.push('/consultorios')
  }

  render() {
    localStorage.setItem("consultorio", true);
    return (
      <div className="wrapper">
        <HeaderComponent />
        <Sidebar />
        <div className="content-wrapper" style={{ background: "white" }}>
          <div className="container-modulos">
            <div className="wrap-register200" style={{ width: '' }}>
              <span className="login100-form-title">Informacion de Consultorio</span>
              <form className="register100-form validate-form" style={{ display: "contents" }}>
                <div className="container container-register">
                  <div className="wrap-input100 validate-input">
                    <input className="input100-julio" type="text" placeholder="Código" value={this.state.codigo} disabled />
                    <span className="symbol-input100">
                      <i className="fa fa-N" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input">
                    <input className="input100-julio" type="text" placeholder="Nombre" value={this.state.nombre} disabled />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-A" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div className="container container-register">
                  <div className="wrap-input100 validate-input">
                    <input className="input100-julio" type="text" placeholder="Direccion" value={this.state.direccion} disabled />
                    <span className="symbol-input100">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                  </div>

                  <div className="wrap-input100 validate-input">
                    <input className="input100-julio" type="text" placeholder="Aforo" value={this.state.aforo} disabled />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-key" aria-hidden="true"></i>
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
export default InformacionConsultorioComponent