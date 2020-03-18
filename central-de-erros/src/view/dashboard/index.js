// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import "./style.css";
// import { Link } from "react-router-dom";
// import Options from "./components/Options";
// import Buttons from "./components/Buttons";
// import HeaderTable from "./components/HeaderTable";
// import BodyTable from "./components/BodyTable";
// import api from "../../api";

// function Home({ handleSelected }) {
//   const { erroAmbiente } = useSelector(({ erros }) => erros);
//   const dispatch = useDispatch();
//   const history = useHistory();

//   useEffect(() => {
//     api().then(datas => {
//       dispatch({ type: "GET_ERROS", payload: datas });
//     });
//   }, []);

//   handleSelected = e => {
//     const valor = e.target.value;
//     console.log(valor);

//     if (valor == 0) {
//       history.push("/producao");
//     }
//     if (valor == 1) {
//       history.push("/homologacao");
//     }
//     if (valor == 2) {
//       history.push("/dev");
//     }
//   };

//   return (
//     <div>
//       <Link to="/Login">sair</Link>
//       <h4>Bem vindo usuário</h4>
//       <Options onChangeLink={handleSelected} />

//       <Buttons />
//       <HeaderTable />
//       <h2>Painel de Erros, ecolha uma opção</h2>
//       <Link to="/producao"> Produção</Link>
//     </div>
//   );
// }

// export default Home;
