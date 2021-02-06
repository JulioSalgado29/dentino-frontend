import React from 'react';
import UsuarioService from '../../../Servicios/UsuarioService';
import cx from 'classnames';
import Swal from 'sweetalert2';
import {Spinner} from 'reactstrap'; 
import './AduanaTheme/css/main.css';
import './AduanaTheme/css/util.css';

class AduanaComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentUser: UsuarioService.getCurrentUser(),
            isNotNullInput: false,
            codigo: '',
            loading: false,
        }
        this.ChangeCodigoHandler = this.ChangeCodigoHandler.bind(this);

        this.enviarCodigo = this.enviarCodigo.bind(this);
        this.logOut = this.logOut.bind(this);
    }
    enviarCodigo() {
        this.setState({
            message: "",
            loading: true
          });
          if(this.state.codigo===""){
            this.setState({loading:false});
            Swal.fire
            ({title: 'El campo del Token es requerido',
            icon: 'error',
            backdrop: 'rgba(61, 0, 0, 0.4)'})
          }
          else{
            UsuarioService.actualizar_estado(this.state.currentUser.username,this.state.codigo).then(() => {
                window.location.reload(true);
              },
              error => {
                  console.log(error)
                const resMessage =
                (error.response && error.response.data) || error.message 
                || error.toString();
                this.setState({
                  loading: false,
                  message: resMessage
                });
                Swal.fire
                ({title: resMessage,
                  icon: 'error',
                  backdrop: 'rgba(61, 0, 0, 0.4)'})
              });
        }
    }
    logOut() {
        UsuarioService.logout();
        window.location.reload(false);
    }
    ChangeCodigoHandler= (event) => {
        this.setState({codigo: event.target.value})
        if(event.target.value!==""){
            this.setState({isNotNullInput: true})
        }
        else{
            this.setState({isNotNullInput: false})
        }
    }
    
render (){
    const input_in = cx('input400', { 'has-val': this.state.isNotNullInput });
    return(
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login200">
                    <div className="wrap-login400 p-b-160 p-t-50">
                        <div className="login400-form validate-form">
                            <span className="login100-form-title p-b-43">
                            Revise su Correo Electronico
                            </span>
                                <div className="wrap-input400 rs1 validate-input">
                                    <input className={input_in} type="text" name="username" onChange={this.ChangeCodigoHandler} style={{textTransform:"uppercase"}}/>
                                    <span className="label-input400">Token</span>
                                </div>
                                <div className="container-login400-form-btn">
                                
                                    <button className="login400-form-btn" style={{borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px",background:"green"}} onClick={this.enviarCodigo}>
                                    {(this.state.loading===true && <Spinner color="primary"></Spinner>)}
                                    Enviar
                                    </button>
                                    <button className="login400-form-btn" style={{background:"red"}} onClick={this.logOut}>
                                        Cerrar Sesion
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
}
export default AduanaComponent