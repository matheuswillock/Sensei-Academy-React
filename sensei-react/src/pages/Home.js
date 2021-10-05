import React from "react";
import { Link, useHistory } from 'react-router-dom';
import login from '../assets/images/login.svg';
import jirayaSensei from '../assets/images/jiraya-sensei.svg';
import LogoHomeImg from '../assets/images/logo-home.svg';

// import LogoHome from '../components/LogoHome'

import '../assets/Style/Main.css';
import '../assets/Style/partials/PageLanding.css';

export function Home() {

  const history = useHistory();

  function navegateToLogin() {
    history.push('/login')
  }

  function navegateToSearch() {
    // history.push('/search')
    history.push('/search')
  }

  return (

    <div id="page-landing">
      <div id="container">

        <div class="header-content" >
          
          <Link to="/">
            <img src={ LogoHomeImg } alt="Logo Home"/>  
          </Link>

          <Link onClick={navegateToLogin} class="login-btn" >            
            
            <p>
              Login 
            </p>

            <img 
              src={login} 
              alt="Entrar"
            />
            
          </Link>
        </div>

        <div className="logo-container">

          <h2>
            Sensei
          </h2>

          <p>
            Encontre o seu.
          </p> 

        </div>  

        <img 
          className="image-principal" 
          src={jirayaSensei} 
          alt="Jiraya Sensei" 
        />   

        <div className="buttons-container">

          <a href="Search" onClick={navegateToSearch} className="study" >
            Estudar
          </a>

          <a className="give-classes" href="./give-classes.html">
            Ensinar
          </a>

        </div> 

        <div className="comments">

          Revolucione o mundo ninja.

        </div>


      </div>
    </div>



  );
}

// export default Home;
