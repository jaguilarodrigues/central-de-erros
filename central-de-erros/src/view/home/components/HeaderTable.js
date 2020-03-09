import React from "react";
import "./index.css";

function HeaderTable({ level, descricao, eventos }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="table2">
            <th>
              <input type="checkbox"></input>LEVEL
            </th>
            <th>LOG</th>
            <th>EVENTOS</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default HeaderTable;
