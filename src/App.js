import {BrowserRouter as Router, Redirect, Route, Switch, HashRouter}from 'react-router-dom';
import RegistrarComponent from './Componentes/Administrador/RegistrarComponent';
import InicioComponent from './Componentes/Usuario/InicioComponent';
import PacienteComponent from './Componentes/Usuario/Modulos/PacienteComponent';
import ScrollTop from './ScrollTop';
//<Redirect path="/*" to="/"></Redirect>

function App(){
  return (
    <HashRouter>
          <ScrollTop/>
                <Switch>
                    <Route exact path ="/" component = {InicioComponent}></Route>
                    <Route exact path ="/pacientes" component = {PacienteComponent}></Route>
                    <Route exact path ="/julio" component = {RegistrarComponent}></Route>
                    <Redirect path="/*" to="/"></Redirect>
                </Switch>
        </HashRouter>
)
}
export default App;