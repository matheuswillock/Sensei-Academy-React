import React from "react";

// import Img
import HeaderSearch from '../components/HeaderSearch'
import SenseiItem from '../components/SenseiItem';
import kakashiImg from '../assets/images/kakashi.svg'

import '../assets/Style/Main.css';
import '../assets/Style/partials/PageSearch.css';


export function Search() {
  return(
    <div id="page-search">

    <div id="container">
       <HeaderSearch />
      <main>

        <SenseiItem 
          img={kakashiImg}
          usernameSensei="Kakashi-Sensei"
          title="Kakashi-Sensei"
          specialist="Programação"
          description="Aprenda as mais de 1001 técnicas do mercado de programação."

        />

      </main>

    </div>

  </div>
  );
}

