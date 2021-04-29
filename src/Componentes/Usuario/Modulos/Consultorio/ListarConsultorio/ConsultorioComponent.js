import React from 'react';
import ConsultorioService from '../../../../../Servicios/ConsultorioService';
import HeaderComponent from '../../../../Complementos/HeaderComponent';
import Sidebar from '../../../../Complementos/SidebarComponent';
import { NavLink } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import Lista from './Lista';
import Paginacion from './Paginacion';
import '../../../Theme/style.css';

class ConsultorioComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            currentPage: 1,
            postsPerPage: 10,
            loading: false
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
            ConsultorioService.listarConsultorios("")
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
    onlyConsultorio(e) {
        localStorage.setItem("consultorio", true)
    }
    render() {
        // Get current posts
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.datos.slice(indexOfFirstPost, indexOfLastPost);

        // Change page
        const paginate = pageNumber => this.setState({ currentPage: pageNumber });;

        localStorage.removeItem("consultorio")
        localStorage.setItem("init", true)
        return (
            <div className="wrapper" style={{ background: "white", color: "black" }}>
                <HeaderComponent />
                <Sidebar />
                <div className="content-wrapper" style={{ background: "white", color: "black" }}>
                    <div className="container-modulos">
                        <NavLink style={{ marginBottom: "1%" }} className="registrar100-form-btn" to="/consultorios-add" onClick={this.onlyConsultorio}> Agregar Consultorio</NavLink>
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
export default ConsultorioComponent