import React from 'react'
import {Button} from 'reactstrap';
import {Table} from 'reactstrap';
import { Link } from 'react-router-dom';

function EnviarPaciente(dato) {
    localStorage.setItem("dato", JSON.stringify(dato));
}
const Lista = ({datos}) => {
    return(
        <ul className='list-group mb-4'>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>DNI</th>
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
                    {datos.map((dato) => (
                    <tr key={dato.id}>
                        <td>{dato.id}</td>
                        <td>{dato.dni}</td>
                        <td>{dato.nombre}</td>
                        <td>{dato.apellido}</td>
                        <td>{dato.direccion}</td>
                        <td>{dato.email}</td>
                        <td>{dato.fechaNac}</td>
                        <td>{dato.telefono}</td>
                        <td>
                            <Link to="/pacientes-edit" className="btn btn-primary" style={{padding:"6px 20px 6px 20px"}} onClick={EnviarPaciente.bind(this,dato)}>Editar</Link>
                            <Button className="btn btn-danger" /*onClick={()=> this.eliminar(dato)}*/>Eliminar</Button>
                        </td>
                    </tr>))}
                </tbody>
            </Table>
        </ul>
    );
};

export default Lista;