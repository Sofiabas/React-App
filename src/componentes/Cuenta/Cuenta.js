import React from 'react';
import './Cuenta.css'

const Cuenta = () => {
  return (
    <html lang="en">
    <body class="text-center">    
<main class="form-signin w-100 m-auto">
  <form>
    <h1 class="h3 mb-3 fw-normal"> Inicia Sesion</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Contraseña</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Recuerdame
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</main>
</body>
</html>

  )
}

export default Cuenta