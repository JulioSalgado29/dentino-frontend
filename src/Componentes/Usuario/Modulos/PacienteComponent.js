import React from 'react';
import UsuarioService from '../../../Servicios/UsuarioService';
import HeaderComponent from '../../Complementos/HeaderComponent';
import Sidebar from '../../Complementos/SidebarComponent';

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
    render() {
        const { currentUser } = this.state;
        return (
            <body class="hold-transition sidebar-mini layout-fixed">
                <div class="wrapper">
                    <HeaderComponent />
                    <Sidebar />
                    <div className="content-wrapper">
                        <h2 style={{textAlign:"center"}}>PACIENTES</h2>
                    </div>
                </div>
            </body>
        )
    }
}
export default PacienteComponent