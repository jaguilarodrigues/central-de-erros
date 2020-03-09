import React from "react";
import "./index.css";

function BodyTable({ level, descricao, eventos }) {
  return (
    <div>
      <table className="table">
        <tbody>
          <tr className="table2">
            <td>
              {/* <input type="checkbox"></input> */}
              {level}
            </td>
            <td>{descricao}</td>
            <td>{eventos}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BodyTable;
