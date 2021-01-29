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
        const { currentUser } = this.state;
        return (
            <body class="hold-transition sidebar-mini layout-fixed">
              <div class="wrapper">
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
                              <p>New Orders</p>
                            </div>
                            <div className="icon">
                              <i className="ion ion-bag" />
                            </div>
                            <a className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                          </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                          {/* small box */}
                          <div className="small-box bg-success">
                            <div className="inner">
                              <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                              <p>Bounce Rate</p>
                            </div>
                            <div className="icon">
                              <i className="ion ion-stats-bars" />
                            </div>
                            <a className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                          </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                          {/* small box */}
                          <div className="small-box bg-warning">
                            <div className="inner">
                              <h3>44</h3>
                              <p>User Registrations</p>
                            </div>
                            <div className="icon">
                              <i className="ion ion-person-add" />
                            </div>
                            <a className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                          </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                          {/* small box */}
                          <div className="small-box bg-danger">
                            <div className="inner">
                              <h3>65</h3>
                              <p>Unique Visitors</p>
                            </div>
                            <div className="icon">
                              <i className="ion ion-pie-graph" />
                            </div>
                            <a className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                          </div>
                        </div>
                        {/* ./col */}
                      </div>
                      {/* /.row */}
                      {/* Main row */}
                      <div className="row">
                        {/* Left col */}
                        <section className="col-lg-7 connectedSortable">
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">
                                <i className="ion ion-clipboard mr-1" />
                                To Do List
                              </h3>
                              <div className="card-tools">
                                <ul className="pagination pagination-sm">
                                  <li className="page-item"><a className="page-link">«</a></li>
                                  <li className="page-item"><a className="page-link">1</a></li>
                                  <li className="page-item"><a className="page-link">2</a></li>
                                  <li className="page-item"><a className="page-link">3</a></li>
                                  <li className="page-item"><a className="page-link">»</a></li>
                                </ul>
                              </div>
                            </div>
                            {/* /.card-header */}
                            <div className="card-body">
                              <ul className="todo-list" data-widget="todo-list">
                                <li>
                                  {/* drag handle */}
                                  <span className="handle">
                                    <i className="fas fa-ellipsis-v" />
                                    <i className="fas fa-ellipsis-v" />
                                  </span>
                                  {/* checkbox */}
                                  <div className="icheck-primary d-inline ml-2">
                                    <input type="checkbox" defaultValue name="todo1" id="todoCheck1" />
                                    <label htmlFor="todoCheck1" />
                                  </div>
                                  {/* todo text */}
                                  <span className="text">Design a nice theme</span>
                                  {/* Emphasis label */}
                                  <small className="badge badge-danger"><i className="far fa-clock" /> 2 mins</small>
                                  {/* General tools such as edit or delete*/}
                                  <div className="tools">
                                    <i className="fas fa-edit" />
                                    <i className="fas fa-trash-o" />
                                  </div>
                                </li>
                                <li>
                                  <span className="handle">
                                    <i className="fas fa-ellipsis-v" />
                                    <i className="fas fa-ellipsis-v" />
                                  </span>
                                  <div className="icheck-primary d-inline ml-2">
                                    <input type="checkbox" defaultValue name="todo2" id="todoCheck2" defaultChecked />
                                    <label htmlFor="todoCheck2" />
                                  </div>
                                  <span className="text">Make the theme responsive</span>
                                  <small className="badge badge-info"><i className="far fa-clock" /> 4 hours</small>
                                  <div className="tools">
                                    <i className="fas fa-edit" />
                                    <i className="fas fa-trash-o" />
                                  </div>
                                </li>
                                <li>
                                  <span className="handle">
                                    <i className="fas fa-ellipsis-v" />
                                    <i className="fas fa-ellipsis-v" />
                                  </span>
                                  <div className="icheck-primary d-inline ml-2">
                                    <input type="checkbox" defaultValue name="todo3" id="todoCheck3" />
                                    <label htmlFor="todoCheck3" />
                                  </div>
                                  <span className="text">Let theme shine like a star</span>
                                  <small className="badge badge-warning"><i className="far fa-clock" /> 1 day</small>
                                  <div className="tools">
                                    <i className="fas fa-edit" />
                                    <i className="fas fa-trash-o" />
                                  </div>
                                </li>
                                <li>
                                  <span className="handle">
                                    <i className="fas fa-ellipsis-v" />
                                    <i className="fas fa-ellipsis-v" />
                                  </span>
                                  <div className="icheck-primary d-inline ml-2">
                                    <input type="checkbox" defaultValue name="todo4" id="todoCheck4" />
                                    <label htmlFor="todoCheck4" />
                                  </div>
                                  <span className="text">Let theme shine like a star</span>
                                  <small className="badge badge-success"><i className="far fa-clock" /> 3 days</small>
                                  <div className="tools">
                                    <i className="fas fa-edit" />
                                    <i className="fas fa-trash-o" />
                                  </div>
                                </li>
                                <li>
                                  <span className="handle">
                                    <i className="fas fa-ellipsis-v" />
                                    <i className="fas fa-ellipsis-v" />
                                  </span>
                                  <div className="icheck-primary d-inline ml-2">
                                    <input type="checkbox" defaultValue name="todo5" id="todoCheck5" />
                                    <label htmlFor="todoCheck5" />
                                  </div>
                                  <span className="text">Check your messages and notifications</span>
                                  <small className="badge badge-primary"><i className="far fa-clock" /> 1 week</small>
                                  <div className="tools">
                                    <i className="fas fa-edit" />
                                    <i className="fas fa-trash-o" />
                                  </div>
                                </li>
                                <li>
                                  <span className="handle">
                                    <i className="fas fa-ellipsis-v" />
                                    <i className="fas fa-ellipsis-v" />
                                  </span>
                                  <div className="icheck-primary d-inline ml-2">
                                    <input type="checkbox" defaultValue name="todo6" id="todoCheck6" />
                                    <label htmlFor="todoCheck6" />
                                  </div>
                                  <span className="text">Let theme shine like a star</span>
                                  <small className="badge badge-secondary"><i className="far fa-clock" /> 1 month</small>
                                  <div className="tools">
                                    <i className="fas fa-edit" />
                                    <i className="fas fa-trash-o" />
                                  </div>
                                </li>
                              </ul>
                            </div>
                            {/* /.card-body */}
                            <div className="card-footer clearfix">
                              <button type="button" className="btn btn-info float-right"><i className="fas fa-plus" /> Add item</button>
                            </div>
                          </div>
                          {/* /.card */}
                        </section>
                      </div>
                      {/* /.row (main row) */}
                    </div>{/* /.container-fluid */}
                  </section>
                  {/* /.content */}
                </div>
              </div>
            </body>
        )
    }
}
export default IndexComponent