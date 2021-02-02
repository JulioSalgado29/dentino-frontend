// eslint-disable-next-line
import {BrowserRouter as Redirect, Route, Switch, HashRouter}from 'react-router-dom';
import InicioComponent from './Componentes/Usuario/InicioComponent';
import PacienteComponent from './Componentes/Usuario/Modulos/Paciente/ListarPaciente/PacienteComponent';
import AgregarPacienteComponent from './Componentes/Usuario/Modulos/Paciente/AgregarPacienteComponent';
import EditarPacienteComponent from './Componentes/Usuario/Modulos/Paciente/EditarPacienteComponent';
import ScrollTop from './ScrollTop';
import {ProtectedRoute} from './Servicios/Protected.Route';
import AsistenciaComponent from './Componentes/Usuario/Modulos/Empleado/AsistenciaComponent';
import NotFound from './Componentes/Usuario/ControlDeAcceso/NotFound';
//import {NoProtected} from './Servicios/NoProtected.Route';
//<NoProtected exact path ="/register" component = {RegistrarComponent}/>

function App(){
  return (
    
    <HashRouter>
          <ScrollTop/>
          <Switch>
            
            <ProtectedRoute exact path ="/pacientes" component = {PacienteComponent}/>
            <ProtectedRoute exact path ="/pacientes-add" component = {AgregarPacienteComponent}/>
            <ProtectedRoute exact path ="/pacientes-edit" component = {EditarPacienteComponent}/>
            <ProtectedRoute exact path ="/asistencia" component = {AsistenciaComponent}/>
            <Route exact path ="/" component = {InicioComponent}/>
            <Route component={NotFound}/>
          </Switch>
      </HashRouter>
)
}
export default App;