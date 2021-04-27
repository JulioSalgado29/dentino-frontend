import React from 'react';
import UsuarioService from '../../Servicios/UsuarioService';
import IndexComponent from './Index/IndexComponent';
import LoginComponent from './ControlDeAcceso/LoginComponent';
import AduanaComponent from './ControlDeAcceso/AduanaComponent';

class InicioComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentUser: UsuarioService.getCurrentUser(),
            currentState: UsuarioService.getCurrentState(),
            loading: false,
            message: "",
        }
    }
    componentDidMount() {
        if (localStorage.getItem("isLandingPage")) {
            localStorage.removeItem("isLandingPage");
            window.location.reload();
        }
    }
render (){
    const { currentUser } = this.state;
    return(
        <div>
            {  (currentUser===null     && <LoginComponent/>)
            || (currentUser.usuarioEstado===2 && <AduanaComponent/>)
            || (currentUser.usuarioEstado===1 && <IndexComponent/>)}
        </div>
    )}
}
export default InicioComponent