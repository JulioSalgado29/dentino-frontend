import React from 'react';
import UsuarioService from '../../Servicios/UsuarioService';
import cx from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler'
import { Link } from 'react-router-dom';

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: UsuarioService.getCurrentUser(),
            isActiveClassConfig: false,
            isActiveClassNotify: false,
            hiddenConfig: false,
            hiddenNotify: false
        }
        this.logOut = this.logOut.bind(this);
        this.dropdownConfig = this.dropdownConfig.bind(this);
        this.setHiddenConfig = this.setHiddenConfig.bind(this);
        this.setHiddenNotify = this.setHiddenNotify.bind(this);
        this.dropdownNotify = this.dropdownNotify.bind(this);
    }

    logOut() {
        UsuarioService.logout();
        window.location.reload(false);
    }

    dropdownConfig() {
        if(this.state.isActiveClassConfig===false){
            this.setState({ isActiveClassConfig: true });
            this.setState({hidden:false});
        }
        else{
            this.setState({ isActiveClassConfig: false });
            this.setState({hidden:true});
        }
    }
    setHiddenConfig(){
        this.setState({ isActiveClassConfig: false });
        this.setState({hidden:true});
    }
    dropdownNotify() {
        if(this.state.isActiveClassNotify===false){
            this.setState({ isActiveClassNotify: true });
            this.setState({hidden:false});
        }
        else{
            this.setState({ isActiveClassNotify: false });
            this.setState({hidden:true});
        }
    }
    setHiddenNotify(){
        this.setState({isActiveClassNotify: false });
        this.setState({hidden:true});
    }

    render() {
        const classdropdown_notify = cx('ul-prueba','dropdown-menu-lg dropdown-menu-right', { 'ul-prueba-active': this.state.isActiveClassNotify });
        const classdropdown_config = cx('ul-prueba','dropdown-menu-right', { 'ul-prueba-active': this.state.isActiveClassConfig });
        return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav" >
                    <li className="nav-item">
                    {/* eslint-disable */}
                        <a className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars"/></a>
                    </li>
                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    {/* Notifications Dropdown Menu */}
                    <OutsideClickHandler onOutsideClick={() => {this.setHiddenNotify();}}>
                        <li className="nav-item dropdown">
                            <a className="button-prueba"  onClick={this.dropdownNotify}>
                                <a className="nav-link">
                                    <i className="far fa-bell" />
                                    <span className="badge badge-warning navbar-badge">15</span>
                                </a>
                            </a>
                            <div className={classdropdown_notify} style={{background:"#fff",cursor:"context-menu"}}>
                                <span className="dropdown-item dropdown-header">15 Notifications</span>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" style={{cursor:"pointer"}}>
                                    <i className="fas fa-envelope mr-2" /> 4 new messages
                                <span className="float-right text-muted text-sm">3 mins</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" style={{cursor:"pointer"}}>
                                    <i className="fas fa-users mr-2" /> 8 friend requests
                                <span className="float-right text-muted text-sm">12 hours</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" style={{cursor:"pointer"}}>
                                    <i className="fas fa-file mr-2" /> 3 new reports
                                <span className="float-right text-muted text-sm">2 days</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item dropdown-footer" style={{cursor:"pointer"}}>See All Notifications</a>
                            </div>
                        </li>
                    </OutsideClickHandler>
                    <OutsideClickHandler onOutsideClick={() => {this.setHiddenConfig();}}>
                        <li className="nav-item dropdown">
                            <a className="button-prueba" onClick={this.dropdownConfig}>
                                <a className="nav-link">
                                    <i className="fas fa-cog"/>
                                </a>
                            </a>
                            <ul className={classdropdown_config}>
                                <li className="nav-item" style={{whiteSpace:"pre"}}>
                                    <Link exact to="/" className="nav-link" onClick={this.logOut} style={{cursor:"pointer", color:"black"}}>
                                        <i className="nav-icon fas fa-power-off" style={{marginRight:"4%",color:"black"}}/> Cerrar Sesión
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </OutsideClickHandler>
                </ul>
            </nav>

        )
    }
}

export default HeaderComponent