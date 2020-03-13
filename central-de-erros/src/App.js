import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store";

/* Páginas */
import Login from "./view/login";
import NovoUsuario from "./view/usuario-novo";
import UsuarioRecuperarSenha from "./view/usuario-recuperar-senha";
import Home from "./view/home";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/novousuario" component={NovoUsuario} />
        <Route
          exact
          path="/usuariorecuperarsenha"
          component={UsuarioRecuperarSenha}
        />
        <Route exact path="/" component={Home} />
      </Router>
    </>
  );
}

export default App;
