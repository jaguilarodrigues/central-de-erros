import React from "react";
import styled from "styled-components";
import { Table, TR } from "../Table";

const THead = styled.thead``;

const TH = styled.th``;

export default function TableHead({}) {
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
