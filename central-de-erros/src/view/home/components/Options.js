import React from "react";
import Option from "./Option";
import "./index.css";

function Options({ id, homologacao, dev, producao, handleSelected }) {
  id = "ambiente";
  producao = "Produção";
  homologacao = "Homologação";
  dev = "Dev";

  return (
    <div className="filters">
      <Option
        id={id}
        opcao1={producao}
        opcao2={homologacao}
        opcao3={dev}
        handleSelected={handleSelected}
      />

      <Option
        id={"Ordener"}
        opcao1={"Ordenar por"}
        opcao2={"Level"}
        opcao3={"Frequencia"}
      />
      <Option
        id={"Buscar Por"}
        opcao1={"Buscar Por"}
        opcao2={"Level"}
        opcao3={"Descrição"}
        opcao4={"Origem"}
      />
    </div>
  );
}

export default Options;
