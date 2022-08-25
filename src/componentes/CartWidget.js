import React from 'react';
import './CartWidget.css';
import { useCartContext } from '../CartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";


export const CartWidget = () => {
  const {productoTotal} = useCartContext ();
  return (
    <div>
      <span className="numeroCarrito"> {productoTotal() || '' } </span>
<FontAwesomeIcon icon={faCartShopping } className="colorCarrito" />
    </div>
  )
}

export default CartWidget