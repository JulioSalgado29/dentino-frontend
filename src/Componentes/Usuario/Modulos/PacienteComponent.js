import React from 'react';
import UsuarioService from '../../../Servicios/UsuarioService';
import HeaderComponent from '../../Complementos/HeaderComponent';
import Sidebar from '../../Complementos/SidebarComponent';
import { NavLink } from 'react-router-dom';
import {Table, Button} from 'reactstrap';
import '../Theme/style.css';

class PacienteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: UsuarioService.getCurrentUser(),
            pacientes: [],
            keyword: "",
        }
        this.onChangeKeyword = this.onChangeKeyword.bind(this);
    }
    onChangeKeyword= (event) => {
        this.setState({keyword: event.target.value})
        UsuarioService.listar_pacientes(event.target.value)
          .then((response) => {
            this.setState({
                pacientes: response
            });
          })
          .catch((e) => {
            //console.log(e);
          });
    }
    componentDidMount() {
        if (localStorage.getItem("isLandingPage")) {
            localStorage.removeItem("isLandingPage");
            window.location.reload();
        }
        if(localStorage.getItem("init")){
            localStorage.removeItem("init")
            UsuarioService.listar_pacientes("")
            .then((response) => {
                this.setState({
                    pacientes: response
                });
              })
              .catch((e) => {
                //console.log(e);
              });
        }
    }
    onlyPaciente (e){
        localStorage.setItem("paciente", true)
    }
    render() {
        localStorage.setItem("init",true)
        return (
                <div className="wrapper">
                    <HeaderComponent />
                    <Sidebar />
                    <div className="content-wrapper"  style={{background:"white"}}>
                        <div className="container-modulos">
                            <NavLink style={{marginBottom:"1%"}} class="registrar100-form-btn" to="/pacientes-add" onClick={this.onlyPaciente}> Agregar Paciente</NavLink>
                            <div className="search-bar">
                                <input name="search" type="text" required value={this.state.keyword} onChange={this.onChangeKeyword}/>
                                <button className="search-btn" type="button">
                                    <span>Search</span>
                                </button>
                            </div>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Direccion</th>
                                        <th>Email</th>
                                        <th>Fecha de Nacimiento</th>
                                        <th>Telefono</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                {this.state.pacientes.map((paciente) => (
                                    <tr key={paciente.id}>
                                    <td>{paciente.nombre}</td>
                                    <td>{paciente.apellido}</td>
                                    <td>{paciente.direccion}</td>
                                    <td>{paciente.email}</td>
                                    <td>{paciente.fechaNac}</td>
                                    <td>{paciente.telefono}</td>
                                    <td>
                                        <Button color="primary" style={{padding:"6px 20px 6px 20px"}}/*onClick={() => this.mostrarModalActualizar(dato)}*/>Editar</Button>
                                        <Button color="danger" /*onClick={()=> this.eliminar(dato)}*/>Eliminar</Button>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
        )
    }
}
export default PacienteComponent