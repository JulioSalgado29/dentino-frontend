import {BrowserRouter as Redirect, Route, Switch, HashRouter}from 'react-router-dom';
import InicioComponent from './Componentes/Usuario/InicioComponent';
import PacienteComponent from './Componentes/Usuario/Modulos/PacienteComponent';
import ScrollTop from './ScrollTop';
import {ProtectedRoute} from './Servicios/Protected.Route';
import AgregarPacienteComponent from './Componentes/Usuario/Modulos/AgregarPacienteComponent';
//import {NoProtected} from './Servicios/NoProtected.Route';
//<NoProtected exact path ="/register" component = {RegistrarComponent}/>

function App(){
  return (
    <HashRouter>
          <ScrollTop/>
          <Switch>
            <ProtectedRoute path ="/pacientes" component = {PacienteComponent}/>
            <ProtectedRoute path ="/pacientes-add" component = {AgregarPacienteComponent}/>
            <Route exact path ="/" component = {InicioComponent}/>

            <Redirect path="/*" to="/"/>
          </Switch>
      </HashRouter>
)
}
export default App;