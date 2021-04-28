import React from 'react'
import QrReader from 'react-qr-reader2'
import UsuarioService from '../../../../Servicios/UsuarioService';
import AsistenciaService from '../../../../Servicios/AsistenciaService';
import HeaderComponent from '../../../Complementos/HeaderComponent';
import Sidebar from '../../../Complementos/SidebarComponent';
import Form from "react-validation/build/form";
import Select from "react-validation/build/select";
import './ListarTrabajador/lista.css';
import Swal from 'sweetalert2';
import ConsultorioService from '../../../../Servicios/ConsultorioService';

const required = value => {
  if (value.length === 0) {
    return (
      <div className="alert-validate" data-validate="Este campo es requerido" style={{ width: "100%" }} />
    );
  }
};

class AsistenciaComponent extends React.Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this);
    this.state = {
      currentUser: UsuarioService.getCurrentUser(),
      detected: false,
      delay: 100,
      consultorios: []
    }

    this.handleScan = this.handleScan.bind(this)
    this.ChangeConsultorioHandler = this.ChangeConsultorioHandler.bind(this)
  }

  ChangeConsultorioHandler = (event) => {
    this.setState({ consultorio: event.target.value })
  }

  componentDidMount() {
    if (localStorage.getItem("isLandingPage")) {
      localStorage.removeItem("isLandingPage");
      window.location.reload();
    }
    ConsultorioService.listar_consultorios().then((response) => {
      this.setState({
        consultorios : response
      })
    })
    .catch((e) => {
      //console.log(e);
    });
  }
  logOut() {
    UsuarioService.logout();
    window.location.reload(false);
  }
  handleScan(data) {
    if (data && !this.state.detected) {
      this.setState({
        result: data,
        detected: true
      });
      AsistenciaService.marcarAsistencia(data).then((response) => {

        Swal.fire
          ({
            title: response.content,
            icon: response.state,
            confirmButtonColor: '#3085d6',
            backdrop: 'rgba(0, 61, 0, 0.4)'
          }).then((result) => {
            if (result.value) {
              this.setState({
                data: null,
                detected: false
              });
            }
          })
      })
        .catch((e) => {
          //console.log(e);
        });
    }

  }
  handleError(err) {
    console.error(err)
  }
  render() {
    localStorage.removeItem("paciente");
    localStorage.removeItem("trabajador");
    return (
        <div className="wrapper">
            <HeaderComponent />
            <Sidebar />
            <div className="content-wrapper" style={{ background: "white" }}>
              <div className="container-modulos">
                <div style={{ marginBottom: "1%" }} className="title100">ESCÁNER DE ASISTENCIA QR</div>
                  <div className="wrap-input100 validate-input">
                  <Form className="register100-form validate-form" style={{ display: "contents" }} onSubmit={this.saveTrabajador} ref={c => { this.form = c; }}>
                  <Select onChange={this.ChangeConsultorioHandler} className="input100-julio" style={{ border: "none" }} validations={[required]}>
                      <option value="Dentino - Las Quintanas">Dentino - Las Quintanas</option>
                      {this.state.consultorios.map((consultorio) => (
                      <option value={consultorio.nombre}>{consultorio.nombre}</option>
                      ))
                      }
                    </Select>
                  </Form>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fas fa-hospital" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="scanner-padding" style={{textAlign:"-webkit-center", background:"black", borderRadius:"20px"}}>
                      <QrReader delay={this.state.delay} className="scanner" onError={this.handleError} onScan={this.handleScan} facingMode={'environment'}/>
                  </div>
                </div>
              </div>
        </div>
    )
  }
}
export default AsistenciaComponent;