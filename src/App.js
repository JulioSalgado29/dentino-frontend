import {BrowserRouter as Router, Redirect, Route, Switch}from 'react-router-dom';
import InicioComponent from './Componentes/Usuario/Index/InicioComponent';
import ScrollTop from './ScrollTop';

function App(){
  return (
      <div>
          <Router>
            <ScrollTop/>
                  <Switch> https://contafast.herokuapp.com
                      <Route exact path ="/" component = {InicioComponent}></Route>
                      <Redirect path="/*" to="/registrar-usuario"></Redirect>
                  </Switch>
          </Router>
      </div>
  )
}
export default App;