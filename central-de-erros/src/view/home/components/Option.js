import React from "react";

function Option({ opcao1, opcao2, opcao3, handleSelected }) {
  return (
    <div className="option-itens">
      <select onChange={handleSelected}>
        <option value={0}>{opcao1}</option>
        <option value={1}>{opcao2}</option>
        <option value={2}>{opcao3}</option>
      </select>
    </div>
  );
}

export default Option;
