import React from 'react'
import {Link} from 'react-router-dom';

const Item = ({info}) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
    <img src={info.image} class="card-img-top" alt="termo boca"></img>
    <div class="card-body">
      <h1 class="card-title">{info.title}</h1>
      <Link to={`/item/${info.id}`}class="btn btn-success">Detalle</Link>
    </div>
  </div>
  )
}

export default Item