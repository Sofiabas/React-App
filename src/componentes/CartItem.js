import React from 'react'
import { useCartContext } from '../CartContext'
import './CartItem.css';

const CartItem = ({product}) => {
    const {removeItem} = useCartContext();
  return (
    <div className='CartItem'>
         <img src={product.image} alt={product.title} class="img-fluid d-none d-md-block rounded mb-2 shadow "/> 
         <div>
         <p>Titulo: {product.title} </p>
         <p>Cantidad: {product.quantity} </p>
         <p>Precio: $ {product.price} </p>
         <p>Subtotal:$ {product.quantity * product.price} </p>
         <button onClick={() => removeItem(product.id)}> Eliminar del carrito</button>
         </div>  
          </div>        
  )
}

export default CartItem