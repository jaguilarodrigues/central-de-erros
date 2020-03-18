import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import api from "../../../../api";
import { formatDate } from "../../../../utils";
import { Button, ButtonGroup } from "../../components/Button";
import { Card, CardHeader } from "../../components/Card";
import TableBody from "../../components/Table";
import HeaderTable from "../../components/HeaderTable";
import Filter from "../../components/Filter";
import Loading from "../../components/Loading";

export default function Homologação() {
  const { erroHomologacao, loading } = useSelector(({ erros }) => erros);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    api().then(datas => {
      dispatch({ type: "GET_ERROS", payload: datas });
    });
  }, [dispatch]);

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
  console.log("homologacao", erroHomologacao);
  return (
    <Card>
      <CardHeader>
        <Link to="/Login">sair</Link>
        <h4>Bem vindo usuário</h4>
        <Filter onChangeLink={handleSelected} />

        <ButtonGroup>
          <Button>Arquivar </Button>
          <Button>Apagar</Button>
        </ButtonGroup>
      </CardHeader>
      <HeaderTable />

      {loading ? (
        <Loading />
      ) : (
        erroHomologacao.map(err => (
          <TableBody
            level={err.level}
            descricao={err.descricao}
            origem={err.origem}
            data={formatDate(err.data)}
            eventos={err.eventos}
          />
        ))
      )}
    </Card>
  );
}
