import React from "react";
import styled from "styled-components";
import Select from "../../components/Select";

const Container = styled.div`
  padding: 20px 40px;
  display: flex;
  background-color: aquamarine;
  width: 100%;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 200px;
  margin-right: 10px;
`;
const Limits = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default function Filter({
  onChangeLink,
  onChangeOrder,
  onchangeBuscar
}) {
  return (
    <Container>
      <Select
        opcao1="producao"
        opcao2="homologacao"
        opcao3="dev"
        onChange={onChangeLink}
      />
      <Select
        opcao1="Ordenar Por"
        opcao2="Level"
        opcao3="Frequência"
        onChange={onChangeOrder}
      />
      <Select
        opcao1="Buscar Por"
        opcao2="Level"
        opcao3="Descrição"
        opcao4="Origem"
        onChange={onchangeBuscar}
      />

      <Limits>
        <Input type="text" placeholder="Search..." />
      </Limits>
    </Container>
  );
}
