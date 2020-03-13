import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";
import Options from "./components/Options";
import Buttons from "./components/Buttons";
import HeaderTable from "./components/HeaderTable";
import BodyTable from "./components/BodyTable";
import api from "../../api";

function Home() {
  const { erroAmbiente } = useSelector(({ erros }) => erros);
  const dispatch = useDispatch();

  useEffect(() => {
    api().then(datas => {
      dispatch({ type: "GET_ERROS", payload: datas });
    });
  }, []);

  return (
    <div>
      <Link to="/Login">sair</Link>
      <h4>Bem vindo usuário</h4>
      <Options />

      <Buttons />
      <HeaderTable />

      {erroAmbiente.map(err => (
        <BodyTable
          level={err.level}
          descricao={err.descricao}
          eventos={err.eventos}
        />
      ))}
    </div>
  );
}

export default Home;
