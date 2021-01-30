import React from 'react';
import UsuarioService from '../../Servicios/UsuarioService';
import cx from 'classnames';
import { Link } from 'react-router-dom';

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: UsuarioService.getCurrentUser(),
            isActiveClass: false,
        }
        this.logOut = this.logOut.bind(this);
        this.dropdown = this.dropdown.bind(this);
    }

    logOut() {
        UsuarioService.logout();
        window.location.reload(false);
    }

    dropdown() {
        if(this.state.isActiveClass===false){
            this.setState({ isActiveClass: true });
        }
        else{
            this.setState({ isActiveClass: false });
        }
        console.log(this.state.isActiveClass)
    }

    render() {
        const classdropdown_config = cx('ul-prueba','dropdown-menu-right', { 'ul-prueba-active': this.state.isActiveClass });
        return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav" >
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></a>
                    </li>
                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    {/* Notifications Dropdown Menu */}
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" style={{cursor:"pointer"}}>
                            <i className="far fa-bell" />
                            <span className="badge badge-warning navbar-badge">15</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item">
                                <i className="fas fa-envelope mr-2" /> 4 new messages
                            <span className="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item">
                                <i className="fas fa-users mr-2" /> 8 friend requests
                            <span className="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item">
                                <i className="fas fa-file mr-2" /> 3 new reports
                            <span className="float-right text-muted text-sm">2 days</span>
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item dropdown-footer">See All Notifications</a>
                        </div>
                    </li>
                    <div className="dropdown">
                        <a className="button-prueba" onClick={this.dropdown}>
                            <a className="nav-link">
                                <i className="fas fa-cog"/>
                            </a>
                        </a>
                        <ul className={classdropdown_config}>
                            <li className="nav-item" style={{whiteSpace:"pre"}}>
                                <Link exact to="/logout" className="nav-link" onClick={this.logOut} style={{cursor:"pointer", color:"black"}}>
                                    <i className="nav-icon fas fa-power-off" style={{marginRight:"4%",color:"black"}}/> Cerrar Sesión
                                </Link>
                            </li>
                        </ul>
                    </div>
                </ul>
            </nav>

        )
    }
}

export default HeaderComponent