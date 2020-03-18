import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, ButtonGroup } from "../../components/Button";
import { Card, CardHeader } from "../../components/Card";
import Filter from "../../components/Filter";

function NotFound() {
  const history = useHistory();
  const handleSelected = e => {
    const valor = e.target.value;
    console.log(valor);
    if (valor === "0") {
      history.push("/producao");
    }
    if (valor === "1") {
      history.push("/homologacao");
    }
    if (valor === "2") {
      history.push("/dev");
    }
  };
  return (
    <Card>
      <CardHeader>
        <Link to="/Login">sair</Link>
        <h4>Bem vindo usuário</h4>
        {/* <FilterArea onChangeLink={handleSelected} /> */}
        <Filter onChangeLink={handleSelected} />
        <ButtonGroup>
          <Button>Arquivar </Button>
          <Button>Apagar</Button>
        </ButtonGroup>
      </CardHeader>

      <h2>Pagina não encontrada</h2>
      <Link to="/producao">voltar</Link>
    </Card>
  );
}

export default NotFound;
