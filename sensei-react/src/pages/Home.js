import logoHome from '../assets/images/logo-home.svg';
import login from '../assets/images/login.svg';
import jirayaSensei from '../assets/images/jiraya-sensei.svg';;

function Home() {
  return (

    <div id="page-landing">
      <div id="container">

        <div class="header-content" >
          <a href="">
            <img src={logoHome} alt="Home imagem" />
          </a>

          <a class="login-btn" href="./login.html">            
            
            <p>
                Login 
            </p>

            <img 
                src={login} 
                alt="Entrar"
            />
            
          </a>
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

        <a className="study" href="./page-search.html">
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


export default Home;