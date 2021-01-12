import {BrowserRouter as Router, Redirect, Route, Switch, HashRouter}from 'react-router-dom';
import InicioComponent from './Componentes/Usuario/InicioComponent';
import ScrollTop from './ScrollTop';

function App(){
  return (
      <div>
        <HashRouter basename="https://juliosalgado29.github.io">
          <Router>
            <ScrollTop/>
                  <Switch>
                      <Route exact path ="/" component = {InicioComponent}></Route>
                      <Redirect path="/*" to="/"></Redirect>
                  </Switch>
          </Router>
          </HashRouter>
      </div>
  )
}
export default App;