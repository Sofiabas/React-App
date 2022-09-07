import React, {useState} from 'react'
import './ItemDetail.css';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../CartContext';
import { Button } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const ItemDetail = ({data}) => {
const [gotoCarrito,setgotoCarrito]= useState(false);
const {addItem} = useCartContext ();

  const onAdd=(quantity)=>{
    setgotoCarrito(true);
    addItem (data,quantity);
    }

  return (
   <div className=' container container-fluid '>
      <img src={data.image} class="mt img" alt=""></img>
    <div className='posicion'>
  <div >
  <h1 className='tipo'>{data.title}</h1>
   <p className='tamanio'>{data.detalle} </p>
  <span className='font'> $ {data.price} </span>
  <p className='place tamanio'>Stock Disponible</p>
  {
    gotoCarrito
    ? <Button variant="outlined" startIcon={<ShoppingCartCheckoutIcon />}><Link to='/cart'  className='btn'> Finalizar tu compra</Link></Button>
    :<ItemCount stock={30} initial={1} onAdd={onAdd} /> 
 }
   </div>
   <Button variant="text" startIcon={<ArrowCircleLeftIcon />}><Link to='/'  className=''> Volver al Inicio</Link></Button>
   </div>
   </div>
  )
}

export default ItemDetail;

