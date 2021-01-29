import React from 'react';
import UsuarioService from '../../../Servicios/UsuarioService';
import HeaderComponent from '../../Complementos/HeaderComponent';
import Sidebar from '../../Complementos/SidebarComponent';

class IndexComponent extends React.Component {
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
                  hola
                </div>
              </div>
            </body>
        )
    }
}
export default IndexComponent