// imports
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from './pages/Home'
import { Login } from './pages/Login';
import { Search } from './pages/Search';

function App() {
  return (

    <BrowserRouter>
      <Route path="/" exact component={ Home } />
      <Route path="/login" component={ Login } />
      <Route path="/search" component={ Search } />
    </BrowserRouter>

  );

}

export default App;
