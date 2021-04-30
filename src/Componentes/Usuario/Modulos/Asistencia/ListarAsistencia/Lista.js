import React from 'react'
import { Table } from 'reactstrap';
import './lista.css';

const Lista = ({ datos }) => {
    return (
        <ul className='list-group mb-4'>
            <Table>
                <thead>
                    <tr>
                        <th className="row5" style={{ textAlign: "center", verticalAlign: "middle" }}>Fecha</th>
                        <th className="row4" style={{ textAlign: "center", verticalAlign: "middle" }}>Hora</th>
                        <th style={{ textAlign: "center", verticalAlign: "middle" }}>Consultorio</th>
                        <th style={{ textAlign: "center", verticalAlign: "middle" }}>Nombres</th>
                        <th className="row4" style={{ textAlign: "center", verticalAlign: "middle" }}>Apellidos</th>
                        <th style={{ textAlign: "center", verticalAlign: "middle" }}>Estado Asistencia</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((dato) => (
                        <tr key={dato.id} style={{ borderTop: "1px solid #e9ecef", borderBottomWidth: "1px" }} className={dato.estadoAsistencia === "TARDE" ? 'pintarTarde' : 'pintarTemprano'}>
                            <td className="row5" style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.fecha}</td>
                            <td className="row4" style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.hora}</td>
                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.consultorio.nombre}</td>
                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.usuario.persona.nombre}</td>
                            <td className="row4" style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.usuario.persona.apellido}</td>
                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>{dato.estadoAsistencia}</td>
                        </tr>))
                    }
                </tbody>
            </Table>
        </ul>
    );
};

export default Lista;