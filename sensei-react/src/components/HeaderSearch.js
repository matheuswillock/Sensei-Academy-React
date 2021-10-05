import React from 'react';

import borutoPerfilImg from '../assets/images/boruto-uzumaki.svg';
import logoHome from '../assets/images/logo-home.svg';
import SearchForm from "../components/SearchForm";


function HeaderSearch() {
  return(

    <header className="page-header">

      <div className="top-bar-container">

        <a href="/">
          <img src={logoHome} alt="Home"/>  
        </a>

        <a className="header-perfil-content" href="login">
          <img src={borutoPerfilImg} alt="Perfil-Boruto"/>
          <p>Boruto</p>
        </a>

      </div>

      <div className="header-content">

        <strong>
          Senseis
          <br/>
          Disponíveis
        </strong>

        <SearchForm />

      </div>

    </header>

  );
}

export default HeaderSearch;