import React from "react";
import { Link } from 'react-router-dom';
import LogoHomeImg from '../assets/images/logo-home.svg';


export default function LogoHome() {
  return (
    <Link href="/">
      <img src={ LogoHomeImg } alt="Logo Home"/>  
    </Link>
  );
  
}