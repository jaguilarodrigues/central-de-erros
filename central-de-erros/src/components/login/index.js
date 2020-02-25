import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';



function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();


  function logar() {
    firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
      setMsgTipo('sucesso')
    }).catch(erro => {
      setMsgTipo('erro')
    });
  }

  return (
    <div className="login-content">
      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          <img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope"></i></span>
          </div>
          <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control" placeholder="Email" />
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><i class="fa fa-key"></i></span>
          </div>
          <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control" placeholder="Senha" />
        </div>

        <button onClick={logar} className="btn-login btn btn-lg btn-block" type="button">Logar</button>

        <div className="msg-login text-white text-center my-5">
          {msgTipo === 'sucesso' && <span><strong>WOW!</strong> Você está conectado</span>}
          {msgTipo === 'erro' && <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos !</span>}
        </div>


        <div className="opcoes-login mt-5 text-center">
          <a href="#" className="mx-2">Recuperar Senha</a>
          <span className="text-white">&#9733;</span>
          <Link to='novousuario' className="mx-2">Quero Cadastrar</Link>
        </div>
      </form>
    </div >
  );
}

export default Login;



