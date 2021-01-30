import {BrowserRouter as Router, Redirect, Route, Switch, HashRouter}from 'react-router-dom';
import RegistrarComponent from './Componentes/Administrador/RegistrarComponent';
import InicioComponent from './Componentes/Usuario/InicioComponent';
import PacienteComponent from './Componentes/Usuario/Modulos/PacienteComponent';
import ScrollTop from './ScrollTop';
import {ProtectedRoute} from './Servicios/Protected.Route';
import {NoProtected} from './Servicios/NoProtected.Route';
import AgregarPacienteComponent from './Componentes/Usuario/Modulos/AgregarPacienteComponent';

function App(){
  return (
    <HashRouter>
          <ScrollTop/>
          <Switch>
            <ProtectedRoute path ="/pacientes" component = {PacienteComponent}/>
            <ProtectedRoute path ="/pacientes-add" component = {AgregarPacienteComponent}/>
            <Route exact path ="/" component = {InicioComponent}/>
            <NoProtected exact path ="/register" component = {RegistrarComponent}/>

            <Redirect path="/*" to="/"/>
          </Switch>
      </HashRouter>
)
}
export default App;