import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Options from "./components/Options";
import Buttons from "./components/Buttons";
import HeaderTable from "./components/HeaderTable";
import BodyTable from "./components/BodyTable";
import getErros from "../../api";

function Home() {
  const [data, setData] = useState([]);
  const [erro, setErro] = useState([]);
  const [option, setOption] = useState(0);

  useEffect(() => {
    getErros().then(data => {
      setData(data[option]);
      setErro(data[option].erros);
    });
  }, [data]);

  function handleSelected(e) {
    setOption(e.target.value);
    setData(data[option]);

    console.log("handle", data[option]);
  }

  console.log("option", option);
  console.log("data-fora", data);
  console.log("data-erro", erro[0]);
  // console.log("erro-fora", data.erros);

  return (
    <div>
      <Link to="/Login">sair</Link>
      <h4>Bem vindo usuário</h4>
      {/* {data.map(item => (
        <p>{item.ambiente}</p>
      ))} */}
      <Options handleSelected={handleSelected} />

      <Buttons />
      <HeaderTable />
      {erro.map(err => (
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
