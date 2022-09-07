import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContext";
import CartItem from "../CartItem/CartItem";
import { CTable, CTableRow, CTableHead, CTableHeaderCell } from "@coreui/react";
import { Button } from "@mui/material";
import { AddShoppingCart} from "@mui/icons-material";
import './Cart.css';

const Cart = () => {
  const { cart, precioTotal } = useCartContext();
  if (cart.length === 0) {
    return (
      <>
        <div>
          <h1 className="tamanio"> Carrito de Compras</h1>
        </div>
        <p> Su carrito esta vacio </p>
      <Button variant="contained" color="success" startIcon={<AddShoppingCart />}>  <Link to="/" className="style"> Hacer Compra</Link> </Button>
      </>
    );
  }
  return (
    <>
      <div>
        <h1 className="tamanio mt-2"> Carrito de Compras</h1>
        <CTable >
          <CTableHead>
            <CTableRow color="dark">
              <CTableHeaderCell className="w"  >Detalle</CTableHeaderCell>
              <CTableHeaderCell className="w">Producto</CTableHeaderCell>
              <CTableHeaderCell className="w">Cantidad</CTableHeaderCell>
              <CTableHeaderCell className="align-content-center" >Precio</CTableHeaderCell>
              <CTableHeaderCell className="align-content-center">Subtotal</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
        </CTable>
      </div>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <p className="tamanio">Total = $ {precioTotal()}</p>
      <div>
      <Link className="btn btn-primary my-5 mx-3" to="/registro">
        {" "}
        Realiza tu compra{" "}
      </Link>
     <Link to='/' className="btn btn-primary my-5"> Volver al Inicio </Link>
      </div>
    </>
  );
};

export default Cart;
