import React from 'react';
import UsuarioService from '../../../Servicios/UsuarioService';
import HeaderComponent from '../../Complementos/HeaderComponent';
import Sidebar from '../../Complementos/SidebarComponent';
import { NavLink } from 'react-router-dom';
import {Table} from 'reactstrap';
import Lista from './Paginacion/Lista';
import Paginacion from './Paginacion/Paginacion';
import '../Theme/style.css';

class PacienteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: UsuarioService.getCurrentUser(),
            datos: [],
            keyword: "",
            currentPage: 1,
            postsPerPage: 5,
        }
        this.onChangeKeyword = this.onChangeKeyword.bind(this);
    }
    onChangeKeyword= (event) => {
        this.setState({keyword: event.target.value})
        UsuarioService.listar_pacientes(event.target.value)
          .then((response) => {
            this.setState({
                datos: response
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
                    datos: response
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
        // Get current posts
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.datos.slice(indexOfFirstPost, indexOfLastPost);

        // Change page
        const paginate = pageNumber => this.setState({currentPage: pageNumber});;

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
                                <Lista datos={currentPosts} />
                                <Paginacion
                                postsPerPage={this.state.postsPerPage}
                                totalPosts={this.state.datos.length}
                                paginate={paginate}
                                />
                        </div>
                    </div>
                </div>
        )
    }
}
export default PacienteComponent