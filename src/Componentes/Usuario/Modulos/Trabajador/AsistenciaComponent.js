import React from 'react'
import QrReader from 'react-qr-reader2'
import UsuarioService from '../../../../Servicios/UsuarioService';
import AsistenciaService from '../../../../Servicios/AsistenciaService';
import HeaderComponent from '../../../Complementos/HeaderComponent';
import Sidebar from '../../../Complementos/SidebarComponent';
import Swal from 'sweetalert2';

class AsistenciaComponent extends React.Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this);
    this.state = {
      currentUser: UsuarioService.getCurrentUser(),
    }
    this.state = {
      detected: false,
      delay: 100
    }

    this.handleScan = this.handleScan.bind(this)
  }
  componentDidMount() {
    if (localStorage.getItem("isLandingPage")) {
      localStorage.removeItem("isLandingPage");
      window.location.reload();
    }
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
              //this.props.history.push('/asistencia')
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
    const previewStyle = {
      height: 240,
      width: 340
    }
    localStorage.removeItem("paciente");
    localStorage.removeItem("trabajador");
    return (
        <div className="wrapper">
          <HeaderComponent />
          <Sidebar />
                  <QrReader
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    facingMode={'environment'}
                  />
        </div>
    )
  }
}
export default AsistenciaComponent;