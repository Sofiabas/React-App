import React, {useState} from 'react'
import './ItemDetail.css';
import ItemCount from '../componentes/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext';

const ItemDetail = ({data}) => {
const [gotoCarrito,setgotoCarrito]= useState(false);
const {addItem} = useCartContext ();

  const onAdd=(quantity)=>{
    setgotoCarrito(true);
    addItem (data,quantity);
    }

  return (
    <div class="card" style={{ width: "18rem" }}>
    <img src={data.image} class="card-img-top" alt="termo boca"></img>
    <div class="card-body">
      <h1 class="card-title">{data.title}</h1>
      <p class="card-text">{data.detalle} </p>
      <span>{data.price} </span>
      <p>Stock Disponible</p>
      {
        gotoCarrito
        ? <Link to='/cart'> Finalizar tu compra</Link>
        :<ItemCount stock={30} initial={1} onAdd={onAdd} /> 
      }
     
    </div>
  </div>
  )
}

export default ItemDetail;

