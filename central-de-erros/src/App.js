import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Páginas */
import Login from './components/login';
import NovoUsuario from './components/usuario-novo';
import Home from './components/home';


function App() {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route exact path='/novousuario' component={NovoUsuario} />
      <Route exact path='/home' component={Home} />
    </Router>

  );
}

export default App;
