import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';

import './style.css';

function NovoSusuario() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const [msg, setMsg] = useState();
  const [carregando, setCarregando] = useState();

  function Cadastrar() {
    setCarregando(1);
    setMsgTipo(null);

    // Validação de informação de dados valida se há email e senha 
    if (!email || !senha) {
      setCarregando(0);
      setMsgTipo('erro');
      setMsg('Você precisa informar o email e senha para efetuar o cadastro');
      return;
    }
    // Faz validações para fazer o cadastro do usuário pegando dados do retorno
    firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
      setCarregando(0);
      setMsgTipo('sucesso');
    }).catch(erro => {
      setCarregando(0);
      setMsgTipo('erro');
      switch (erro.message) {
        case 'Password should be at least 6 characters':
          setMsg('A Senha deve ter pelo menos 6 caracteres');
          break;
        case 'The email address is already in use by another account.':
          setMsg('Este email já está sendo utilizado por outro usuário!');
          break;
        case 'The email address is badly formatted.':
          setMsg('O Formato do email é inválido.');
          break;
        default:
          setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
          break;
      }
    })
  }

  return (
    <div className="form-cadastro">
      <form className="form-login text-center  mx-auto mt-5">
        <h1 className="h3 mb-3 text-balck font-weight-bold">Cadastro</h1>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope"></i></span>
          </div>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email" />
        </div>


        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><i class="fa fa-key"></i></span>
          </div>
          <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" placeholder="Senha" />
        </div>

        {
          carregando ? <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading...</span></div>
            : <button onClick={Cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro" >Cadastrar</button>
        }

        <div className="msg-login text-black text-center my-5">
          {msgTipo === 'sucesso' && <span><strong>WOW!</strong>Usuário Cadastrado com Sucesso</span>}
          {msgTipo === 'erro' && <span><strong>Ops!</strong> {msg}</span>}
        </div>

      </form>
    </div>
  );
};

export default NovoSusuario;