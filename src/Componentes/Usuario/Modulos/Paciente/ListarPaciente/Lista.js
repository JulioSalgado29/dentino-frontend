import React from 'react'
import {Button,Table} from 'reactstrap';
import {Link} from 'react-router-dom';
import UsuarioService from '../../../../../Servicios/UsuarioService';
import Swal from 'sweetalert2';
import './lista.css';

function EnviarPaciente(dato) {
    localStorage.setItem("dato", JSON.stringify(dato));
}
function Eliminar(persona_id,dni) {
    Swal.fire
        ({title: "Estas seguro de eliminar al paciente de DNI: '" + dni +"'",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33', 
        confirmButtonText: 'Si',
        backdrop: 'rgba(100, 100, 43, 0.4)'}).then((result) => {
            if(result.value){
                UsuarioService.eliminar_pacientes(persona_id).then((response) => {
                    Swal.fire
                        ({title: response,
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        backdrop: 'rgba(61, 0, 0, 0.4)'}).then((result) => {
                            if(result.value){
                                window.location.reload();
                            }})
                })
            }
        })
}
const Lista = ({datos}) => {
    return(
        <ul className='list-group mb-4'>
            <Table>
                <thead>
                    <tr>
                        <th className="row5" style={{textAlign:"center",verticalAlign:"middle"}}>Id</th>
                        <th className="row5" style={{textAlign:"center",verticalAlign:"middle"}}>Dni</th>
                        <th style={{textAlign:"center",verticalAlign:"middle"}}>Nombre</th>
                        <th style={{textAlign:"center",verticalAlign:"middle"}}>Apellido</th>
                        <th className="row3" style={{textAlign:"center",verticalAlign:"middle"}}>Direccion</th>
                        <th className="row4" style={{textAlign:"center",verticalAlign:"middle"}}>Email</th>
                        <th className="row2" style={{textAlign:"center",verticalAlign:"middle"}}>Fecha de Nacimiento</th>
                        <th className="row1" style={{textAlign:"center",verticalAlign:"middle"}}>Telefono</th>
                        <th style={{textAlign:"center",verticalAlign:"middle"}}>Opciones</th>
                        </tr>
                </thead>
                <tbody>
                    {datos.map((dato) => (
                    <tr key={dato.id} style={{borderTop:"1px solid #e9ecef",borderBottomWidth:"1px"}}>
                        <td className="row5" style={{textAlign:"center",verticalAlign:"middle"}}>{dato.id}</td>
                        <td className="row5" style={{textAlign:"center",verticalAlign:"middle"}}>{dato.dni}</td>
                        <td style={{textAlign:"center",verticalAlign:"middle"}}>{dato.nombre}</td>
                        <td style={{textAlign:"center",verticalAlign:"middle"}}>{dato.apellido}</td>
                        <td className="row3" style={{textAlign:"center",verticalAlign:"middle"}}>{dato.direccion}</td>
                        <td className="row4" style={{textAlign:"center",verticalAlign:"middle"}}>{dato.email}</td>
                        <td className="row2" style={{textAlign:"center",verticalAlign:"middle"}}>{dato.fechaNac}</td>
                        <td className="row1" style={{textAlign:"center",verticalAlign:"middle"}}>{dato.telefono}</td>
                        <td style={{display:"grid",border:"none"}}>
                            <Link to="/pacientes-edit" className="btn btn-primary" style={{padding:"6px 20px 6px 20px"}} onClick={EnviarPaciente.bind(this,dato)}>Editar</Link>
                            <Link to="/pacientes-info" className="btn btn-warning btn-infor" style={{padding:"6px 20px 6px 20px"}} onClick={EnviarPaciente.bind(this,dato)}>Info</Link>
                            <Button className="btn btn-danger" onClick={Eliminar.bind(this,dato.id,dato.dni)}>Eliminar</Button>
                        </td>
                    </tr>))}
                </tbody>
            </Table>
        </ul>
    );
};

export default Lista;