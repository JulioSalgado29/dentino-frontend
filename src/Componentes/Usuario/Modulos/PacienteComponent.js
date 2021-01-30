import React from 'react';
import UsuarioService from '../../../Servicios/UsuarioService';
import HeaderComponent from '../../Complementos/HeaderComponent';
import Sidebar from '../../Complementos/SidebarComponent';
import { NavLink } from 'react-router-dom';
import {Table, Button} from 'reactstrap';

const data = [
    { id: 1, personaje: "Naruto", anime: "Naruto" },
    { id: 2, personaje: "Goku", anime: "Dragon Ball" },
    { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
    { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
    { id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood"},
    { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
  ];

class PacienteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: UsuarioService.getCurrentUser(),
            data: data,
            form: {
              id: "",
              personaje: "",
              anime: "",
            },
        }
    }

    componentDidMount() {
        if (localStorage.getItem("isLandingPage")) {
            localStorage.removeItem("isLandingPage");
            window.location.reload();
        }
    }
    onlyPaciente (e){
        localStorage.setItem("paciente", true)
        localStorage.setItem("isLandingPage", true)
    }
    render() {
        localStorage.getItem("page")
        return (
            <body class="hold-transition sidebar-mini layout-fixed">
                <div class="wrapper">
                    <HeaderComponent />
                    <Sidebar />
                    <div className="content-wrapper">
                        <div className="container-modulos">
                            <br/>
                            <NavLink style={{marginBottom:"3%"}} class="registrar100-form-btn" to="/pacientes-add" onClick={this.onlyPaciente}> Agregar Paciente</NavLink>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Personaje</th>
                                        <th>Anime</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>

                                <tbody>
                                {this.state.data.map((dato) => (
                                    <tr key={dato.id}>
                                    <td>{dato.id}</td>
                                    <td>{dato.personaje}</td>
                                    <td>{dato.anime}</td>
                                    <td>
                                        <Button
                                        color="primary"
                                        /*onClick={() => this.mostrarModalActualizar(dato)}*/
                                        >
                                        Editar
                                        </Button>{" "}
                                        <Button color="danger" /*onClick={()=> this.eliminar(dato)}*/>Eliminar</Button>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}
export default PacienteComponent