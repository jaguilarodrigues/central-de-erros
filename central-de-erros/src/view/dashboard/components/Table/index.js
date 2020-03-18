import React from "react";
import styled from "styled-components";

export const Table = styled.table`
  text-align: center;
  width: 100%;
`;
export const TR = styled.tr`
  display: grid;
  grid-template-columns: minmax(50px, 150px) 4fr 1fr;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;
const TD = styled.td``;

const TBody = styled.tbody``;

const P = styled.p``;

export default function TableBody({ data, level, descricao, origem, eventos }) {
  return (
    <Table>
      <TBody>
        <TR>
          <TD>{level}</TD>
          <TD>
            <P>{descricao}</P>
            <P>{origem}</P>
            <P>{data}</P>
          </TD>
          <TD>{eventos}</TD>
        </TR>
      </TBody>
    </Table>
  );
}
