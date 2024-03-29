import React from 'react'
import Twitter from './IconosSocial/Twitter'

function Footer() {
  return (
<html lang="es">
<body className="d-flex h-100 text-center fondo back">
      <div class="container-fluid">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg class="bi" width="30" height="24">
              </svg>
            </a>
            <span class="text-dark">&copy; 2022 Sofia Basile </span>
          </div>
         <Twitter/>
        </footer>
      </div>     
</body>
</html>
  )
}

export default Footer