import React from 'react';
import UsuarioService from '../../../Servicios/UsuarioService';
import IndexComponent from '../Index/IndexComponent';
import LoginComponent from '../ControlDeAcceso/LoginComponent';
import AduanaComponent from '../Index/AduanaComponent';

class InicioComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentUser: UsuarioService.getCurrentUser(),
        }
    }
render (){
    const { currentUser } = this.state;
    
    return(
        <div>
            {  currentUser===null && <LoginComponent/>
            || currentUser.estado===0 && <AduanaComponent/>
            || currentUser.estado===1 && <IndexComponent/>}
        </div>
    )}
}
export default InicioComponent