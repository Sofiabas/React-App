import React from 'react'

const Item = ({info}) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
    <img src={info.image} class="card-img-top" alt="termo boca"></img>
    <div class="card-body">
      <h1 class="card-title">{info.title}</h1>
      <p class="card-text">Termo de acero inoxidable forrado con vinilo laminado mate/brilloso </p>
      <button class="btn btn-success">Añadir al Carrito</button>
    </div>
  </div>
  )
}

export default Item