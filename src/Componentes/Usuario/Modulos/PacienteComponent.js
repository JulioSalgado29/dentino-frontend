import React from 'react';
import UsuarioService from '../../../Servicios/UsuarioService';
import HeaderComponent from '../../Complementos/HeaderComponent';
import Sidebar from '../../Complementos/SidebarComponent';
import {Table, Button, Container, Modal, ModalBody, ModalHeader ,FormGroup, ModalFooter} from 'reactstrap';

class PacienteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.state = {
            currentUser: UsuarioService.getCurrentUser(),
        }
        
    }
    logOut() {
        UsuarioService.logout();
        window.location.reload(false);
    }

    componentDidMount() {
        if (localStorage.getItem("isLandingPage")) {
            localStorage.removeItem("isLandingPage");
            window.location.reload();
        }
    }

    render() {
        localStorage.getItem("page")
        const { currentUser } = this.state;
        return (
            <body class="hold-transition sidebar-mini layout-fixed">
                <div class="wrapper">
                    <HeaderComponent />
                    <Sidebar />
                    <div className="content-wrapper">
                        <div className="container-modulos">
                            <br/>
                            <Button color="primary"> Insertar Nuevo Paciente</Button>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}
export default PacienteComponent