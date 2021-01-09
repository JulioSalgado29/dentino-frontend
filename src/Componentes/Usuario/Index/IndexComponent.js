import React from 'react';
import UsuarioService from '../../../Servicios/UsuarioService';

class IndexComponent extends React.Component{
    constructor(props){
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
render (){
    const { currentUser } = this.state;
    return(
        <div>
            <button type="button" className="btn btn-danger" onClick={this.logOut}>Cerrar Sesion</button>
            <label>Index:estado={currentUser.estado}</label>
        </div>
    )}
}
export default IndexComponent