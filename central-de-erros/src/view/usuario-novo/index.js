import React, { useState } from 'react';
import { toast } from 'react-toastify';
import firebase from '../../config/firebase';
import 'firebase/auth';

import './style.css';

function NovoSusuario() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [carregando, setCarregando] = useState();

  function Cadastrar() {
    setCarregando(1);
    if (!email) {
      toast.error('Email deve ser informado !');
      setCarregando(0);
    } else if (!senha) {
      toast.error('Senha deve ser informada !');
      setCarregando(0);
    } else {
      // Faz validações para fazer o cadastro do usuário pegando dados do retorno
      firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
        setCarregando(0);
        toast.success('Usuário Cadastrado com sucesso !');
      }).catch(erro => {
        setCarregando(0);
        switch (erro.message) {
          case 'Password should be at least 6 characters':
            toast.error('A Senha deve ter pelo menos 6 caracteres');
            setCarregando(0);
            break;
          case 'The email address is already in use by another account.':
            toast.error('Este email já está sendo utilizado por outro usuário!');
            setCarregando(0);
            break;
          case 'The email address is badly formatted.':
            toast.error('O Formato do email é inválido.');
            setCarregando(0);
            break;
          default:
            toast.error('Não foi possível cadastrar. Tente novamente mais tarde!');
            setCarregando(0);
            break;
        }
      })
    }
  }

  return (
    <div className="form-cadastro">
      <form className="form-login text-center  mx-auto mt-5">
        <div className="label-cadastro">
          <h3 className="mb-2 text-white font-weight-bold"><i class="fa fa-user-plus"></i> Cadastro de Usuários</h3>
          <hr />
        </div>
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

      </form>
    </div>
  );
};

export default NovoSusuario;