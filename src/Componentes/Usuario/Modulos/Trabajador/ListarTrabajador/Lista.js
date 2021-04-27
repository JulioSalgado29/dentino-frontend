import React from 'react'
import { Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import TrabajadorService from '../../../../../Servicios/TrabajadorService';
import Swal from 'sweetalert2';
import './lista.css';

function EnviarTrabajador(dato) {
    localStorage.setItem("dato", JSON.stringify(dato));
}
function Eliminar(usuarioId, nombre, apellido) {
    Swal.fire
        ({
            title: "Estas seguro de eliminar al trabajador: '" + nombre + " " + apellido + "'",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            backdrop: 'rgba(100, 100, 43, 0.4)'
        }).then((result) => {
            if (result.value) {
                TrabajadorService.eliminarTrabajador(usuarioId).then((response) => {
                    Swal.fire
                        ({
                            title: response,
                            icon: 'success',
                            confirmButtonColor: '#3085d6',
                            backdrop: 'rgba(61, 0, 0, 0.4)'
                        }).then((result) => {
                            if (result.value) {
                                window.location.reload();
                            }
                        })
                })
            }
        })
}
const Lista = ({ datos }) => {
    return (
        <ul className='list-group mb-4'>
            <Table>
                <thead>
                    <tr>
                        <th className="row5" style={{ textAlign: "center", verticalAlign: "middle" }}>Id</th>
                        <th className="row5" style={{ textAlign: "center", verticalAlign: "middle" }}>Dni</th>
                        <th style={{ textAlign: "center", verticalAlign: "middle" }}>Nombre</th>
                        <th style={{ textAlign: "center", verticalAlign: "middle" }}>Apellido</th>
                        <th className="row3" style={{ textAlign: "center", verticalAlign: "middle" }}>Direccion</th>
                        <th className="row4" style={{ textAlign: "center", verticalAlign: "middle" }}>Email</th>
                        <th className="row2" style={{ textAlign: "center", verticalAlign: "middle" }}>Fecha de Nacimiento</th>
                        <th className="row1" style={{ textAlign: "center", verticalAlign: "middle" }}>Telefono</th>
                        <th style={{ textAlign: "center", verticalAlign: "middle" }}>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((dato) => (
                        <tr key={dato.id} style={{ borderTop: "1px solid #e9ecef", borderBottomWidth: "1px" }}>
                            <td className="row5" style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.persona.id}</td>
                            <td className="row5" style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.persona.dni}</td>
                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.persona.nombre}</td>
                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.persona.apellido}</td>
                            <td className="row3" style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.persona.direccion}</td>
                            <td className="row4" style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.persona.email}</td>
                            <td className="row2" style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.persona.fechaNac}</td>
                            <td className="row1" style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.persona.telefono}</td>
                            <td style={{ display: "grid", border: "none" }}>
                                <Link to="/trabajadores-edit" className="btn btn-primary" style={{ padding: "6px 20px 6px 20px" }} onClick={EnviarTrabajador.bind(this, dato)}>Editar</Link>
                                <Link to="/trabajadores-info" className="btn btn-warning" style={{ padding: "6px 20px 6px 20px", color: "white" }} onClick={EnviarTrabajador.bind(this, dato)}>Info</Link>
                                <Button className="btn btn-danger" onClick={Eliminar.bind(this, dato.id, dato.persona.nombre, dato.persona.apellido)}>Eliminar</Button>
                            </td>
                        </tr>))
                        }
                </tbody>
            </Table>
        </ul>
    );
};

export default Lista;