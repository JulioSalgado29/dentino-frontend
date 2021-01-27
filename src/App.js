import {BrowserRouter as Router, Redirect, Route, Switch, HashRouter}from 'react-router-dom';
import RegistrarComponent from './Componentes/Administrador/RegistrarComponent';
import InicioComponent from './Componentes/Usuario/InicioComponent';
import ScrollTop from './ScrollTop';
//<Redirect path="/*" to="/"></Redirect>

function App(){
  return (
    <HashRouter>
          <ScrollTop/>
                <Switch>
                    <Route path ="/" component = {InicioComponent}></Route>
                    <Route exact path ="/julio" component = {RegistrarComponent}></Route>
                </Switch>
        </HashRouter>
)
}
export default App;