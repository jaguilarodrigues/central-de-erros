import React, { useState } from 'react';
import './style.css';
import imagelogo from '../../images/buglogo.png'

import firebase from '../../config/firebase';
import 'firebase/auth';
import { toast } from 'react-toastify';


function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  function logar() {
    if (!email) {
      toast.error('Email não informado !');
    } else if (!senha) {
      toast.error('Senha não informada !');
    } else {
      firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
        toast.success('Login efetuado com sucesso !');
      }).catch(erro => {
        toast.error('Email e/ou senha inválidos !');
      });
    }
  }

  return (
    <div className="login-content">



      <div className="logo-content">
        <img className="logo" src={imagelogo} alt="logotipo" />
      </div>

      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold"><i class="fa fa-lock"></i> Login</h1>
          <h5 className="text-white">Central de Erros</h5>
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
          <input onChange={(s) => setSenha(s.target.value)} type="password" id="inputPassword" className="form-control" placeholder="Senha" />
        </div>

        <button onClick={logar} className="btn-login btn btn-lg btn-block" type="button">Logar</button>
      </form>

      <div className="opcoes-login text-center">
        <a href="#" className="mx-2">Esqueceu sua senha ?</a>
      </div>
    </div >
  );
}

export default Login;



