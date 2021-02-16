import React from 'react';
import UsuarioService from '../../../Servicios/UsuarioService';
import HeaderComponent from '../../Complementos/HeaderComponent';
import Sidebar from '../../Complementos/SidebarComponent';

class IndexComponent extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.state = {
            currentUser: UsuarioService.getCurrentUser(),
        }
    }
    logOut() {
        UsuarioService.logout();
        window.location.reload(false);
    }
    render() {
      localStorage.removeItem("paciente");
        return (
              <div className="wrapper">
                <HeaderComponent />
                <Sidebar />
                <div className="content-wrapper">
                {/* Main content */}
                <section className="content" style={{padding:"15px"}}>
                  <div className="container-fluid">
                    {/* Small boxes (Stat box) */}
                    <div className="row">
                      <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-info">
                          <div className="inner">
                            <h3>150</h3>
                            <p>Citas</p>
                          </div>
                          <div className="icon">
                            <i className="ion ion-calendar" />
                          </div>
                          {/* eslint-disable */}
                          <a className="small-box-footer">Más información <i className="fas fa-arrow-circle-right"/></a>
                        </div>
                      </div>
                      {/* ./col */}
                      <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-success">
                          <div className="inner">
                            <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                            <p>Ingresos</p>
                          </div>
                          <div className="icon">
                            <i className="ion ion-stats-bars" />
                          </div>
                          <a className="small-box-footer">Más información<i className="fas fa-arrow-circle-right"/></a>
                        </div>
                      </div>
                      {/* ./col */}
                      <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-warning">
                          <div className="inner">
                            <h3>44</h3>
                            <p>Nuevos pacientes</p>
                          </div>
                          <div className="icon">
                            <i className="ion ion-person-add" />
                          </div>
                          <a className="small-box-footer">Más información <i className="fas fa-arrow-circle-right"/></a>
                        </div>
                      </div>
                      {/* ./col */}
                      <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-danger">
                          <div className="inner">
                            <h3>65</h3>
                            <p>Reportes</p>
                          </div>
                          <div className="icon">
                            <i className="ion ion-pie-graph" />
                          </div>
                          <a className="small-box-footer" >Más información <i className="fas fa-arrow-circle-right"/></a>
                        </div>
                      </div>
                      {/* ./col */}
                    </div>
                    {/* /.row */}
                    {/* /.row (main row) */}
                  </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
                </div>
              </div>
        )
    }
}
export default IndexComponent