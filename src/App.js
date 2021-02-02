import {BrowserRouter as Redirect, Route, Switch, HashRouter}from 'react-router-dom';
import InicioComponent from './Componentes/Usuario/InicioComponent';
import PacienteComponent from './Componentes/Usuario/Modulos/Paciente/ListarPaciente/PacienteComponent';
import AgregarPacienteComponent from './Componentes/Usuario/Modulos/Paciente/AgregarPacienteComponent';
import EditarPacienteComponent from './Componentes/Usuario/Modulos/Paciente/EditarPacienteComponent';
import ScrollTop from './ScrollTop';
import {ProtectedRoute} from './Servicios/Protected.Route';
//import {NoProtected} from './Servicios/NoProtected.Route';
//<NoProtected exact path ="/register" component = {RegistrarComponent}/>

function App(){
  return (
    <HashRouter>
          <ScrollTop/>
          <Switch>
            <ProtectedRoute path ="/pacientes" component = {PacienteComponent}/>
            <ProtectedRoute path ="/pacientes-add" component = {AgregarPacienteComponent}/>
            <ProtectedRoute path ="/pacientes-edit" component = {EditarPacienteComponent}/>
            <Route exact path ="/" component = {InicioComponent}/>
            <Redirect path="/*" to="/"/>
          </Switch>
      </HashRouter>
)
}
export default App;