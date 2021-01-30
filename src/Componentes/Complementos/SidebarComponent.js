import React from 'react';
import UsuarioService from '../../Servicios/UsuarioService';
import logo from '../../Images/favicon.png';
import perfil from '../../Images/imagen-perfil.png';
import { NavLink,Link } from 'react-router-dom';

class SidebarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: UsuarioService.getCurrentUser(),
        }
        this.isLandingPage = this.isLandingPage.bind(this);
    }
    isLandingPage(){
        localStorage.setItem("isLandingPage", true)
    }
    render() {
        const { currentUser } = this.state;
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{backgroundColor:"black"}}>
                <a className="brand-link" style={{color:"white",cursor: "context-menu"}}>
                    <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light">Dentino</span>
                </a>
                <div className="sidebar">
                    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div class="image">
                            <img src={perfil} class="img-circle elevation-2" alt="User Image"/>
                        </div>
                        <div class="info">
                            <a style={{cursor: "context-menu"}}class="d-block">{currentUser.persona.nombre} {currentUser.persona.apellido}</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Left navbar links *<li className="nav-item">
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
                            */}
                            <li className="nav-item">
                                <NavLink  exact to="/" className="nav-link" onClick={this.isLandingPage} activeClassName="active">
                                    <i className="nav-icon fas fa-th" />
                                    <p>
                                        Dashboard
                                    </p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                            {
                                (
                                    localStorage.getItem("paciente")===null && <NavLink to="/pacientes" className="nav-link" onClick={this.isLandingPage} 
                                    activeClassName="active">
                                    <i className="nav-icon fas fa-head-side-mask" />
                                    <p>
                                        Pacientes
                                    <span className="right badge badge-danger">New</span>
                                    </p>
                                </NavLink>
                                ||
                                localStorage.getItem("paciente")==="true" && <NavLink to="/pacientes" className="nav-link" 
                                onClick={this.isLandingPage} activeClassName="active" isActive={() => localStorage.getItem("paciente")==="true"}>
                                    <i className="nav-icon fas fa-head-side-mask" />
                                    <p>
                                        Pacientes
                                    <span className="right badge badge-danger">New</span>
                                    </p>
                                </NavLink>
                                )
                            }
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            
        )
    }
}
export default SidebarComponent