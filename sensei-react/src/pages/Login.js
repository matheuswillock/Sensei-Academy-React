import React from "react";
import academiaImg from '../assets/images/academia.svg';

import '../assets/Style/Main.css';
import '../assets/Style/partials/PageLogin.css';

export function Login() {
  return(
    <div  id="page-login">

      <div className="content">

        <form action=""  method="POST">

          <span>Entre na Academia</span>

          <img 
          src={academiaImg} alt="Academia Ninja" 
          />
            
          <div className="input-field">

            <input 
              id="input-field-username"        
              type="text" 
              name="username"
              placeholder="Usuario"
              required
            />

            <input 
              type="password" 
              name="password" 
              id="input-field-password" 
              placeholder="Senha"
              required
            />
              
          </div>

          <button className="btn-submit" type="submit" >
            Entrar
          </button>

        </form>

        <div className="separator"></div>

        <div id="register-group-btn" >
            <a className="register-btn" href="/">
              Cadastre-se
            </a>
            
            <a className="register-btn" href="/">
              Esqueceu a sua senha?
            </a>
        </div>

      </div>

    </div>
  );
  
}

