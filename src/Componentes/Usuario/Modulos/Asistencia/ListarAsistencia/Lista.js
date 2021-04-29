import React from 'react'
import { Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import ConsultorioService from '../../../../../Servicios/ConsultorioService';
import Swal from 'sweetalert2';
import './lista.css';

const Lista = ({ datos }) => {
    return (
        <ul className='list-group mb-4'>
            <Table>
                <thead>
                    <tr>
                        <th className="row5" style={{ textAlign: "center", verticalAlign: "middle", display: "none" }}>Id</th>
                        <th className="row3" style={{ textAlign: "center", verticalAlign: "middle" }}>Fecha</th>
                        <th className="row4" style={{ textAlign: "center", verticalAlign: "middle" }}>Hora</th>
                        <th className="row4" style={{ textAlign: "center", verticalAlign: "middle" }}>Consultorio</th>
                        <th style={{ textAlign: "center", verticalAlign: "middle" }}>Nombres</th>
                        <th style={{ textAlign: "center", verticalAlign: "middle" }}>Apellidos</th>
                        <th className="row2" style={{ textAlign: "center", verticalAlign: "middle" }}>Estado Asistencia</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((dato) => (

                        <tr key={dato.id} style={{ borderTop: "1px solid #e9ecef", borderBottomWidth: "1px" }}>
                            <td className="row5" style={{ textAlign: "center", verticalAlign: "middle", display: "none" }}>{dato.id}</td>
                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.fecha}</td>
                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.hora}</td>
                            <td className="row2" style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.consultorio.nombre}</td>
                            <td className="row5" style={{ textAlign: "center", verticalAlign: "middle", display: "none" }}>{dato.id}</td>
                            <td className="row4" style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.usuario.persona.nombre}</td>
                            <td className="row4" style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.usuario.persona.apellido}</td>
                            <td className="row1" style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.estadoAsistencia}</td>
                        </tr>))
                    }
                </tbody>
            </Table>
        </ul>
    );
};

export default Lista;