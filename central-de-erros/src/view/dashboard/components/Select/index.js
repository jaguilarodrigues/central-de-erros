import React from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 200px;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
function Selects({ opcao1, opcao2, opcao3, opcao4, onChange }) {
  return (
    <Select onChange={onChange}>
      <option value="" hidden>
        Escolha o Ambiente
      </option>
      <option value={0}>{opcao1}</option>
      <option value={1}>{opcao2}</option>
      <option value={2}>{opcao3}</option>
      <option value={3}>{opcao4}</option>
    </Select>
  );
}

export default Selects;
