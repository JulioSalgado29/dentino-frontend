// eslint-disable-next-line
import { BrowserRouter as Redirect, Route, Switch, HashRouter } from 'react-router-dom';
import InicioComponent from './Componentes/Usuario/InicioComponent';
import PacienteComponent from './Componentes/Usuario/Modulos/Paciente/ListarPaciente/PacienteComponent';
import AgregarPacienteComponent from './Componentes/Usuario/Modulos/Paciente/AgregarPacienteComponent';
import EditarPacienteComponent from './Componentes/Usuario/Modulos/Paciente/EditarPacienteComponent';
import InformacionPacienteComponent from './Componentes/Usuario/Modulos/Paciente/InformacionPacienteComponent';
import ScrollTop from './ScrollTop';
import { ProtectedRoute } from './Servicios/Protected.Route';
import { AdminProtectedRoute } from './Servicios/AdminProtected.Route';
import AsistenciaComponent from './Componentes/Usuario/Modulos/Asistencia/AsistenciaComponent';
import NotFound from './Componentes/Usuario/ControlDeAcceso/NotFound';
import TrabajadorComponent from './Componentes/Usuario/Modulos/Trabajador/ListarTrabajador/TrabajadorComponent';
import InformacionTrabajadorComponent from './Componentes/Usuario/Modulos/Trabajador/InformacionTrabajadorComponent';
import EditarTrabajadorComponent from './Componentes/Usuario/Modulos/Trabajador/EditarTrabajadorComponent';
import AgregarTrabajadorComponent from './Componentes/Usuario/Modulos/Trabajador/AgregarTrabajadorComponent';
import ConsultorioComponent from './Componentes/Usuario/Modulos/Consultorio/ListarConsultorio/ConsultorioComponent';
import InformacionConsultorioComponent from './Componentes/Usuario/Modulos/Consultorio/InformacionConsultorioComponent';
import EditarConsultorioComponent from './Componentes/Usuario/Modulos/Consultorio/EditarConsultorioComponent';
import AgregarConsultorioComponent from './Componentes/Usuario/Modulos/Consultorio/AgregarConsultorioComponent';

//import {NoProtected} from './Servicios/NoProtected.Route';
//<NoProtected exact path ="/register" component = {RegistrarComponent}/>

function App() {
  return (

    <HashRouter>
      <ScrollTop />
      <Switch>
        <ProtectedRoute exact path="/pacientes" component={PacienteComponent} />
        <ProtectedRoute exact path="/pacientes-add" component={AgregarPacienteComponent} />
        <ProtectedRoute exact path="/pacientes-edit" component={EditarPacienteComponent} />
        <ProtectedRoute exact path="/pacientes-info" component={InformacionPacienteComponent} />
        <ProtectedRoute exact path="/trabajadores" component={TrabajadorComponent} />
        <ProtectedRoute exact path="/trabajadores-add" component={AgregarTrabajadorComponent} />
        <ProtectedRoute exact path="/trabajadores-info" component={InformacionTrabajadorComponent} />
        <ProtectedRoute exact path="/trabajadores-edit" component={EditarTrabajadorComponent} />
        <AdminProtectedRoute exact path="/asistencia" component={AsistenciaComponent} />
        <AdminProtectedRoute exact path="/consultorios" component={ConsultorioComponent} />
        <AdminProtectedRoute exact path="/consultorios-add" component={AgregarConsultorioComponent} />
        <AdminProtectedRoute exact path="/consultorios-info" component={InformacionConsultorioComponent} />
        <AdminProtectedRoute exact path="/consultorios-edit" component={EditarConsultorioComponent} />
        <Route exact path="/" component={InicioComponent} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  )
}
export default App;