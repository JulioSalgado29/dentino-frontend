import React from 'react'
import {Button} from 'reactstrap';
import {Table} from 'reactstrap';
import {Link} from 'react-router-dom';
import './lista.css';

function EnviarPaciente(dato) {
    localStorage.setItem("dato", JSON.stringify(dato));
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
                    <tr key={dato.id}>
                        <td className="row5" style={{textAlign:"center",verticalAlign:"middle"}}>{dato.id}</td>
                        <td className="row5" style={{textAlign:"center",verticalAlign:"middle"}}>{dato.dni}</td>
                        <td style={{textAlign:"center",verticalAlign:"middle"}}>{dato.nombre}</td>
                        <td style={{textAlign:"center",verticalAlign:"middle"}}>{dato.apellido}</td>
                        <td className="row3" style={{textAlign:"center",verticalAlign:"middle"}}>{dato.direccion}</td>
                        <td className="row4" style={{textAlign:"center",verticalAlign:"middle"}}>{dato.email}</td>
                        <td className="row2" style={{textAlign:"center",verticalAlign:"middle"}}>{dato.fechaNac}</td>
                        <td className="row1" style={{textAlign:"center",verticalAlign:"middle"}}>{dato.telefono}</td>
                        <td style={{display:"inline-grid"}}>
                            <Link to="/pacientes-edit" className="btn btn-primary" style={{padding:"6px 20px 6px 20px"}} onClick={EnviarPaciente.bind(this,dato)}>Editar</Link>
                            <Link to="/pacientes-info" className="btn btn-warning btn-infor" style={{padding:"6px 20px 6px 20px"}} onClick={EnviarPaciente.bind(this,dato)}>Info</Link>
                            <Button className="btn btn-danger" /*onClick={()=> this.eliminar(dato)}*/>Eliminar</Button>
                        </td>
                    </tr>))}
                </tbody>
            </Table>
        </ul>
    );
};

export default Lista;