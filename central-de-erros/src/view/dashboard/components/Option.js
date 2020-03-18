import React from "react";

function Option({ opcao1, opcao2, opcao3, onChange, opcao4 }) {
  return (
    <div className="option-itens">
      <select onChange={onChange}>
        <option value={0}>{opcao1}</option>
        <option value={1}>{opcao2}</option>
        <option value={2}>{opcao3}</option>
        <option value={4}>{opcao4}</option>
      </select>
    </div>
  );
}

export default Option;
