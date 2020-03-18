import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import api from "../../../../api";
import FilterArea from "../../components/FilterArea";
import Buttons from "../../components/Buttons";
import HeaderTable from "../../components/HeaderTable";
import BodyTable from "../../components/BodyTable";
import Loading from "../../components/Loading";

export default function Producao() {
  const { erroProducao, loading } = useSelector(({ erros }) => erros);
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

  console.log("producao", erroProducao);
  console.log("loading", loading);

  return (
    <div>
      <Link to="/Login">sair</Link>
      <h4>Bem vindo usuário</h4>
      <FilterArea onChangeLink={handleSelected} />

      <Buttons />
      <HeaderTable />

      {loading ? (
        <Loading />
      ) : (
        erroProducao.map(err => (
          <BodyTable
            level={err.level}
            descricao={err.descricao}
            eventos={err.eventos}
          />
        ))
      )}
    </div>
  );
}
