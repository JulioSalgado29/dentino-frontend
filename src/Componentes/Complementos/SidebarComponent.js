import React from 'react';
import UsuarioService from '../../Servicios/UsuarioService';

class SidebarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: UsuarioService.getCurrentUser(),
        }
    }

    render() {
        const { currentUser } = this.state;
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{backgroundColor:"black"}}>
                <a className="brand-link" style={{color:"white",cursor:"pointer"}}>
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light">Dentino</span>
                </a>
                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <a className="nav-link active" style={{cursor:"pointer"}}>
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
                                    <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a className="nav-link" style={{cursor:"pointer"}}>
                                            <i className="far fa-circle nav-icon" />
                                            <p>Dashboard v1</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" style={{cursor:"pointer"}}>
                                            <i className="far fa-circle nav-icon" />
                                            <p>Dashboard v2</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" style={{cursor:"pointer"}}>
                                            <i className="far fa-circle nav-icon" />
                                            <p>Dashboard v3</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{cursor:"pointer"}}>
                                    <i className="nav-icon fas fa-th" />
                                    <p>
                                        Widgets
                                    <span className="right badge badge-danger">New</span>
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            
        )
    }
}
export default SidebarComponent