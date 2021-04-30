import React from 'react'
import QrReader from 'react-qr-reader2'
import UsuarioService from '../../../../Servicios/UsuarioService';
import AsistenciaService from '../../../../Servicios/AsistenciaService';
import ConsultorioService from '../../../../Servicios/ConsultorioService';
import HeaderComponent from '../../../Complementos/HeaderComponent';
import Sidebar from '../../../Complementos/SidebarComponent';
import Form from "react-validation/build/form";
import Select from "react-validation/build/select";
import './ListarAsistencia/lista.css';
import Swal from 'sweetalert2'
import { Spinner } from 'reactstrap';
import Lista from './ListarAsistencia/Lista';
import Paginacion from './ListarAsistencia/Paginacion';

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
    this.state = {
      currentUser: UsuarioService.getCurrentUser(),
      detected: false,
      delay: 300,
      currentPage: 1,
      postsPerPage: 10,
      loading: false,
      showViewFinder: true,
      consultorios: [],
      codigoConsultorio: '',
      datos: [],
      activateCamera: false
    }

    this.handleScan = this.handleScan.bind(this)
    this.activateCamera = this.activateCamera.bind(this)
    this.ChangeConsultorioHandler = this.ChangeConsultorioHandler.bind(this)
  }

  ChangeConsultorioHandler = (event) => {
    this.setState({ codigoConsultorio: event.target.value })
  }

  componentDidMount() {
    if (localStorage.getItem("isLandingPage")) {
      localStorage.removeItem("isLandingPage");
      window.location.reload();
    }
    ConsultorioService.listarConsultorios().then((response) => {
      this.setState({
        consultorios: response
      })
    }).catch((e) => {
        //console.log(e);
      });
    this.setState({ loading: true })
    AsistenciaService.listarAsistencias()
      .then((response) => {
        this.setState({
          datos: response,
          loading: false,
        });
      }).catch((e) => {
        //console.log(e);
      });
  }
  handleScan(data) {
    if (data && !this.state.detected) {
      this.setState({
        result: data,
        detected: true
      });
      if (this.state.codigoConsultorio === "" || this.state.codigoConsultorio == null) {
        Swal.fire
          ({
            title: '¡Debe seleccionar un consultorio!',
            icon: 'warning',
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
      }
      else {
        AsistenciaService.marcarAsistencia(data, this.state.codigoConsultorio).then((response) => {
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

  }
  handleError(err) {
    console.error(err)
  }
  activateCamera(){
    if(!this.state.activateCamera){
      this.setState({activateCamera: true})
    }
    else{
      setTimeout(() => {
        this.setState({activateCamera: false})
      }, 250);
    }
  }
  
  render() {
    localStorage.removeItem("trabajador")
    localStorage.removeItem("paciente")
    localStorage.removeItem("consultorio")
    // Get current posts
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.datos.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => this.setState({ currentPage: pageNumber });
    return (
      <div className="wrapper">
        <HeaderComponent />
        <Sidebar />
        <div className="content-wrapper" style={{ background: "white" }}>
          <div className="container-modulos">
            <div style={{ marginBottom: "2%" }} className="title100">ASISTENCIA</div>
            <div className="wrap-input100 validate-input">
              <Form className="wrap-input100 validate-input" style={{ display: "contents" }} onSubmit={this.marcarAsistencia} ref={c => { this.form = c; }}>
                <Select onChange={this.ChangeConsultorioHandler} className="input100-julio" style={{ border: "none" }} validations={[required]}>
                  <option key="null" hidden style={{ color: "red" }} value="null">Elija el consultorio</option>
                  {this.state.consultorios.map((consultorio) => (
                    <option key={consultorio.id} value={consultorio.codigo}>{consultorio.nombre}</option>
                  ))
                  }
                </Select>
              </Form>
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fas fa-hospital" aria-hidden="true"></i>
              </span>
            </div>
            <div className="container container-register">
              <a type="button" className="collapseBtn btn btn-secondary login100-form-title border-color-an" data-toggle="collapse" href="#collapseInputs" role="button"
                aria-expanded="false" style={{ marginTop: "2%", background: "none", color: "black", borderColor: "white", fontSize: "24px" }} onClick={this.activateCamera}>Mostrar Escáner</a>
            </div>
            <div className="collapse" id="collapseInputs" style={{ width: "-webkit-fill-available", marginTop: "1%" }}>
              <div className="scanner-padding" style={{ textAlign: "-webkit-center", background: "black", borderRadius: "20px" }}>
                { this.state.activateCamera &&
                  <QrReader delay={this.state.delay} className="scanner" onScan={this.handleScan} showViewFinder={true} facingMode={'environment'}/>
                }
              </div>
            </div>

          </div>
          <div className="container-modulos">
            {(this.state.loading === false &&
              <div>
                <Lista datos={currentPosts} />
                <Paginacion postsPerPage={this.state.postsPerPage} totalPosts={this.state.datos.length} paginate={paginate} />
              </div>)
              || (this.state.loading === true &&
                <div style={{ textAlign: "center", fontSize: "xxx-large", display: "grid", alignItems: "center", justifyContent: "center", minHeight: "49vh" }}>
                  <Spinner color="primary" style={{ position: "relative", marginTop: "22%", width: "10rem", height: "10rem" }}></Spinner>
                </div>
              )}
          </div>
        </div>
      </div>
    )
  }
}
export default AsistenciaComponent;