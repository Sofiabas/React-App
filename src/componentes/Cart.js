import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext'
import CartItem from './CartItem';

const Cart = () => {
    const {cart, precioTotal} = useCartContext (); 
 if (cart.length === 0) {
        return (
            <>
              <div>  
     <h1 className='tamanio'> Carrito de Compras</h1>
  </div>
            <p> Su carrito esta vacio </p>
            <Link to= "/"> Hacer Compra</Link>
            </>
        );
    } 
  return (
    <>
      <div>  
     <h1 className='tamanio'> Carrito de Compras</h1>
  </div>
    { cart.map (product => <CartItem key={product.id} product={product}/>)
    }
    <p>
        Total = $ {precioTotal()}
    </p>
    </>
  )
}

export default Cart