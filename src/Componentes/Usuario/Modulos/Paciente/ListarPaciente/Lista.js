import React from 'react'
import {Button} from 'reactstrap';
import {Table} from 'reactstrap';

const Lista = ({datos}) => {
    return(
        <ul className='list-group mb-4'>
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
                                {datos.map((dato) => (
                                    <tr key={dato.id}>
                                    <td>{dato.nombre}</td>
                                    <td>{dato.apellido}</td>
                                    <td>{dato.direccion}</td>
                                    <td>{dato.email}</td>
                                    <td>{dato.fechaNac}</td>
                                    <td>{dato.telefono}</td>
                                    <td>
                                        <Button color="primary" style={{padding:"6px 20px 6px 20px"}}/*onClick={() => this.mostrarModalActualizar(dato)}*/>Editar</Button>
                                        <Button color="danger" /*onClick={()=> this.eliminar(dato)}*/>Eliminar</Button>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
        </ul>
    );
};

export default Lista;