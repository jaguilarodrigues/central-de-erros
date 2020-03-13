import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";

function BodyTable({ level, descricao, eventos }) {
  // const { erroAmbiente } = useSelector(({ erros }) => erros);

  // console.log("erroAmbiente", erroAmbiente);
  return (
    <div>
      {/* {erroAmbiente.map(err => ( */}
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
      {/* ))} */}
    </div>
  );
}

export default BodyTable;
