import React from "react";
import styled from "styled-components";
import Select from "../../components/Select";

const Container = styled.div`
  display: flex;
  background-color: #2e74b5;
  width: 100%;
  justify-content: space-between;
  @media only screen and (max-width: 972px) {
    /* background-color: lightblue; */
    flex-direction: column;
  }
`;
const SelectContainer = styled.div`
  display: flex;
  /* background-color: red; */
  padding: 20px 20px;
  @media only screen and (max-width: 972px) {
    /* background-color: yellow; */
    justify-content: space-around;
  }
  @media only screen and (max-width: 660px) {
    /* background-color: pink; */
    flex-direction: column;
    align-items: center;
  }
`;
const Input = styled.input`
  width: 200px;
  margin: 10px;
  border-radius: 4px;
  @media only screen and (max-width: 660px) {
    width: 250px;
  }
`;
const InputContainer = styled.div`
  /* width: 25%; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* background-color: blue; */
  @media only screen and (max-width: 972px) {
    /* background-color: brown; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 660px) {
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default function Filter({
  onChangeLink,
  onChangeOrder,
  onchangeBuscar
}) {
  return (
    <Container>
      <SelectContainer>
        <Select
          type="Escolha um Ambiente"
          opcao1="producao"
          opcao2="homologacao"
          opcao3="dev"
          onChange={onChangeLink}
        />
        <Select
          type="Ordenar Por"
          opcao1="Level"
          opcao2="Frequência"
          onChange={onChangeOrder}
        />
        <Select
          type="Buscar Por"
          opcao1="Level"
          opcao2="Descrição"
          opcao3="Origem"
          onChange={onchangeBuscar}
        />
      </SelectContainer>

      <InputContainer>
        <Input type="text" placeholder="Search..." />
      </InputContainer>
    </Container>
  );
}
