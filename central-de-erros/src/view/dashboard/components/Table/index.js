import React from "react";
import styled from "styled-components";

export const Table = styled.table`
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
`;
export const TR = styled.tr`
  display: grid;
  /* grid-template-columns: minmax(50px, 150px) 4fr 1fr;  */
  grid-template-columns: minmax(90px, 90px) minmax(150px, 1500px) minmax(
      90px,
      90px
    );
  margin: 0 auto;
  margin: 1rem 0;
  padding: 3px;

  :nth-child(even) {
    background-color: #f2f2f2;
  }
`;
const TD = styled.td`
  padding: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  :nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TBody = styled.tbody``;

const P = styled.p`
  margin: 0;
  word-wrap: break-word;
`;

const PB = styled.p`
  margin: 0;
  word-wrap: break-word;
  font-weight: 500;
`;

const THead = styled.thead``;

const TH = styled.th`
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: #2d74b5;
  color: white;
  height: 50px;
`;

export function TableBody({ index, data, level, descricao, origem, eventos }) {
  return (
    <Table>
      <TBody>
        <TR index={index}>
          <TD>{level}</TD>
          <TD>
            <PB>{descricao}</PB>
            <P>{origem}</P>
            <P>{data}</P>
          </TD>
          <TD>{eventos}</TD>
        </TR>
      </TBody>
    </Table>
  );
}

export function TableHead() {
  return (
    <Table>
      <THead>
        <TR>
          <TH>LEVEL</TH>
          <TH>LOG</TH>
          <TH>EVENTOS</TH>
        </TR>
      </THead>
    </Table>
  );
}
