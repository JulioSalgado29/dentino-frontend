import React from 'react';
import UsuarioService from '../../Servicios/UsuarioService';
import IndexComponent from './Index/IndexComponent';
import LoginComponent from './ControlDeAcceso/LoginComponent';
import AduanaComponent from './Index/AduanaComponent';
import Swal from 'sweetalert2';

class InicioComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentUser: UsuarioService.getCurrentUser(),
            currentState: UsuarioService.getCurrentState(),
            loading: false,
            message: "",
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(){
          if(this.state.currentUser!==null){
            UsuarioService.verificar_usuario(this.state.currentUser.username).then(() => {
                if(this.state.currentState!==null){
                    if(this.state.currentUser.estado!==this.state.currentState.estado){
                        window.location.reload(true);
                        localStorage.removeItem("usuario");
                        localStorage.removeItem("usuario2");
                    }
                }
              },
              error => {
                const resMessage =
                (error.response && error.response.data) || error.message 
                || error.toString();
                this.setState({
                  loading: false,
                  message: resMessage
                });
                Swal.fire
                ({title: resMessage,
                  icon: 'error'})
              });
        }
    }
render (){
    const { currentUser } = this.state;
    return(
        <div>
            {  (currentUser===null     && <IndexComponent/>)
            || (currentUser.estado===0 && <AduanaComponent/>)
            || (currentUser.estado===1 && <LoginComponent/>)}
        </div>
    )}
}
export default InicioComponent