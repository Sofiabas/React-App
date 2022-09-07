import CartWidget from "./CartWidget/CartWidget";
import Brand from "./Brand/Brand";
import React from "react";
import {NavLink} from 'react-router-dom';

function NavBar(){
return (
<html>
    <head>
<title> INICIO DE EUREKA </title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
</head>
<body class="bg-light text-black">
    <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
    <div class="container">
      <NavLink to='/'> <Brand/> </NavLink>
      <div class="collapse navbar-collapse" id="navbarsExample07">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NavLink className={"nav-link active"} to='/'> Inicio </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className={"nav-link"} to='/category/termos'>Termos</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className={"nav-link"} to='/category/tazon'>Tazones</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className={"nav-link"} to='/category/mate'>Mates</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className={"nav-link"} to='/category/cartuchera'>Cartucheras</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className={"nav-link"} to='/category/botella'>Botellas</NavLink>
          </li>
        </ul>
        <div>
      <NavLink class="nav-link" to='/cart'> <CartWidget/> </NavLink>
        </div>
      </div>
    </div>
  </nav>
  </header>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</body>
</html>
)
}

export default NavBar;
     
     
   