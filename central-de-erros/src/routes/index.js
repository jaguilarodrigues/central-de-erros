import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

/* Páginas */
import Login from "../view/login";
import NovoUsuario from "../view/usuario-novo";
import UsuarioRecuperarSenha from "../view/usuario-recuperar-senha";
import Home from "../view/dashboard";
import Producao from "../view/dashboard/pages/Producao";
import Homologação from "../view/dashboard/pages/Homologacao";
import Dev from "../view/dashboard/pages/Dev";
import NotFound from "../view/dashboard/pages/NotFound";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/novousuario" component={NovoUsuario} />
        <Route exact path="/producao" component={Producao} />
        <Route exact path="/producao/:erros" component={Producao} />
        <Route exact path="/homologacao" component={Homologação} />
        <Route exact path="/homologacao/:erros" component={Producao} />
        <Route exact path="/dev" component={Dev} />
        <Route exact path="/dev/:erros" component={Producao} />
        <Route exact path="/404" component={NotFound} />
        <Route
          exact
          path="/usuariorecuperarsenha"
          component={UsuarioRecuperarSenha}
        />
        <Route exact path="*" component={() => <Redirect to="/404" />} />
      </Switch>
    </>
  );
}
