import React from 'react';
import TrabajadorService from '../../../../../Servicios/TrabajadorService';
import HeaderComponent from '../../../../Complementos/HeaderComponent';
import Sidebar from '../../../../Complementos/SidebarComponent';
import { NavLink } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import Lista from './Lista';
import Paginacion from './Paginacion';
import '../../../Theme/style.css';

class TrabajadorComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            keyword: "",
            antkeyword: "",
            currentPage: 1,
            postsPerPage: 10,
            loading: false
        }
        this.buscarKeyword = this.buscarKeyword.bind(this);
        this.ChangeKeywordHandler = this.ChangeKeywordHandler.bind(this);
    }
    buscarKeyword = (evento) => {
        if (this.state.keyword !== this.state.antkeyword) {
            this.setState({ loading: true });
            TrabajadorService.listarTrabajadores(this.state.keyword)
                .then((response) => {
                    this.setState({
                        antkeyword: this.state.keyword,
                        loading: false,
                        datos: response
                    });
                })
                .catch((e) => {
                    //console.log(e);
                });
        }
    }
    ChangeKeywordHandler = (event) => {
        this.setState({ keyword: event.target.value })
    }
    onKeyPress = (event) => {
        if (event.key === 'Enter' && this.state.keyword !== this.state.antkeyword) {
            this.setState({ loading: true });
            TrabajadorService.listarTrabajadores(this.state.keyword)
                .then((response) => {
                    this.setState({
                        antkeyword: this.state.keyword,
                        loading: false,
                        datos: response
                    });
                })
                .catch((e) => {
                    //console.log(e);
                });
        }
    }
    componentDidMount() {
        if (localStorage.getItem("isLandingPage")) {
            localStorage.removeItem("isLandingPage");
            window.location.reload();
        }
        if (localStorage.getItem("init")) {
            localStorage.removeItem("init")
            this.setState({ loading: true })
            TrabajadorService.listarTrabajadores("")
                .then((response) => {
                    this.setState({
                        datos: response,
                        loading: false,
                    });
                })
                .catch((e) => {
                    //console.log(e);
                });
        }
    }
    onlyTrabajador(e) {
        localStorage.setItem("trabajador", true)
    }
    render() {
        // Get current posts
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.datos.slice(indexOfFirstPost, indexOfLastPost);

        // Change page
        const paginate = pageNumber => this.setState({ currentPage: pageNumber });;

        localStorage.removeItem("paciente")
        localStorage.setItem("init", true)
        return (
            <div className="wrapper" style={{ background: "white", color: "black" }}>
                <HeaderComponent />
                <Sidebar />
                <div className="content-wrapper" style={{ background: "white", color: "black" }}>
                    <div className="container-modulos">
                        <NavLink style={{ marginBottom: "1%" }} className   ="registrar100-form-btn" to="/trabajadores-add" onClick={this.onlyTrabajador}> Agregar Trabajador</NavLink>
                        <div className="search-bar">
                            <input name="search" type="text" value={this.state.keyword} onChange={this.ChangeKeywordHandler} onKeyPress={this.onKeyPress} />
                            <button className="search-btn" type="button" onClick={this.buscarKeyword}>
                                <span>Search</span>
                            </button>
                        </div>
                        {(this.state.loading === false &&
                            <div>
                                <Lista datos={currentPosts} />
                                <Paginacion postsPerPage={this.state.postsPerPage} totalPosts={this.state.datos.length} paginate={paginate} />
                            </div>)
                            || (this.state.loading === true &&
                                <div style={{ textAlign: "center", fontSize: "xxx-large", display: "grid", alignItems: "center", justifyContent: "center", minHeight: "49vh" }}>
                                    <Spinner color="primary" style={{ position: "relative", marginTop: "22%", width: "10rem", height: "10rem" }}></Spinner>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}
export default TrabajadorComponent