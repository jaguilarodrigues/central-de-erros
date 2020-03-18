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

export default function Dev() {
  const { erroDev, loading } = useSelector(({ erros }) => erros);
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
    console.log(typeof valor);
    if (e.target.value === "0") {
      history.push("/producao");
    }
    if (e.target.value === "1") {
      history.push("/homologacao");
    }
    if (e.target.value === "2") {
      history.push("/dev");
    }
  };
  console.log("producao", erroDev);
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
      <HeaderTable />

      {loading ? (
        <Loading />
      ) : (
        erroDev.map(err => (
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
