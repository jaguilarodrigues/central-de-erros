import React from "react";
import { Link, useHistory } from "react-router-dom";
import FilterArea from "../../components/Options";
import Buttons from "../../components/Buttons";

function NotFound() {
  const history = useHistory();
  const handleSelected = e => {
    const valor = e.target.value;
    console.log(valor);
    if (valor == 0) {
      history.push("/producao");
    }
    if (valor == 1) {
      history.push("/homologacao");
    }
    if (valor == 2) {
      history.push("/dev");
    }
  };
  return (
    <div>
      <Link to="/Login">sair</Link>
      <h4>Bem vindo usuário</h4>
      <FilterArea onChangeLink={handleSelected} />

      <Buttons />

      <h2>Pagina não encontrada</h2>
    </div>
  );
}

export default NotFound;
