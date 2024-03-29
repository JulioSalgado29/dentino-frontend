import React from 'react'
import { Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import ConsultorioService from '../../../../../Servicios/ConsultorioService';
import Swal from 'sweetalert2';
import './lista.css';

function EnviarConsultorio(dato) {
    localStorage.setItem("dato", JSON.stringify(dato));
}
function Eliminar(condigoConsultorio, nombre) {
    Swal.fire
        ({
            title: "Estas seguro de eliminar al consultorio: '" + nombre + "'",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            backdrop: 'rgba(100, 100, 43, 0.4)'
        }).then((result) => {
            if (result.value) {
                ConsultorioService.eliminarConsultorio(condigoConsultorio).then((response) => {
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
                            else {
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
                        <th style={{ textAlign: "center", verticalAlign: "middle" }}>Codigo</th>
                        <th style={{ textAlign: "center", verticalAlign: "middle" }}>Nombre</th>
                        <th className="row5" style={{ textAlign: "center", verticalAlign: "middle" }}>Direccion</th>
                        <th className="row4" style={{ textAlign: "center", verticalAlign: "middle" }}>Aforo</th>
                        <th style={{ textAlign: "center", verticalAlign: "middle" }}>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((dato) => (

                        <tr key={dato.id} style={{ borderTop: "1px solid #e9ecef", borderBottomWidth: "1px" }}>
                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.codigo}</td>
                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.nombre}</td>
                            <td className="row5" style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.direccion}</td>
                            <td className="row4" style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.aforo}</td>
                            <td style={{ display: "grid", border: "none" }}>
                                <Link to="/consultorios-edit" className="btn btn-primary" style={{ padding: "6px 20px 6px 20px" }} onClick={EnviarConsultorio.bind(this, dato)}>Editar</Link>
                                <Link to="/consultorios-info" className="btn btn-warning" style={{ padding: "6px 20px 6px 20px", color: "white" }} onClick={EnviarConsultorio.bind(this, dato)}>Info</Link>
                                <Button className="btn btn-danger" onClick={Eliminar.bind(this, dato.codigo, dato.nombre)}>Eliminar</Button>
                            </td>
                        </tr>))
                    }
                </tbody>
            </Table>
        </ul>
    );
};

export default Lista;