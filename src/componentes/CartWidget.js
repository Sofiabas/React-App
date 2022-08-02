import React from 'react'
import './CartWidget.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";


function CartWidget() {
  return (
    <div>
<FontAwesomeIcon icon={faCartShopping } className="colorCarrito" />
    </div>
  )
}

export default CartWidget