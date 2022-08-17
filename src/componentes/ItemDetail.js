import React from 'react'
import './ItemDetail.css';

const ItemDetail = ({data}) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
    <img src={data.image} class="card-img-top" alt="termo boca"></img>
    <div class="card-body">
      <h1 class="card-title">{data.title}</h1>
      <p class="card-text">{data.detalle} </p>
      <span>{data.price} </span>
      <p>Stock Disponible</p>
      <button class="btn btn-success">Añadir al Carrito</button>
    </div>
  </div>
  )
}

export default ItemDetail;

