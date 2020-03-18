import React from "react";
import Option from "./Option";
import "./index.css";

function Options({ onchangeBuscar, onChangeOrder, onChangeLink }) {
  return (
    <div className="filters">
      <Option
        opcao1="producao"
        opcao2="homologacao"
        opcao3="dev"
        onChange={onChangeLink}
      />

      <Option
        opcao1="Ordenar Por"
        opcao2="Level"
        opcao3="Frequência"
        onChange={onChangeOrder}
      />
      <Option
        opcao1="Buscar Por"
        opcao2="Level"
        opcao3="Descrição"
        opcao4="Origem"
        onChange={onchangeBuscar}
      />
    </div>
  );
}

export default Options;
