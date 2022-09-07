import React from 'react'
import { useCartContext } from '../../CartContext'
import './CartItem.css';
import { CTable, CTableRow,CTableHeaderCell,CTableBody,CTableDataCell } from '@coreui/react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CartItem = ({product}) => {
    const {removeItem} = useCartContext();
    function handleSubmit(evt){
      evt.preventDefault();
          const MySwal = withReactContent(Swal)
         MySwal.fire({
          position: 'top-end',
            icon: 'error',
            width:'200px',
            title: <strong>Has eliminado {product.title} del  carrito</strong>,
            showConfirmButton: false,
            timer: 1500
            })
         setTimeout(() => {
          removeItem(product.id)
      }, 1500);
    }
  return (
    <div className='CartItem'>
       <CTable>
  <CTableBody>
    <CTableRow >
      <CTableHeaderCell scope="row"  className='align w'> <img src={product.image} alt={product.title} className="CartImg"/> </CTableHeaderCell>
      <CTableDataCell  className='colSpan: 2 w'>{product.title}</CTableDataCell>
      <CTableDataCell  className='colSpan: 2 w'>{product.quantity}</CTableDataCell>
      <CTableDataCell  className='colSpan: 2 w'>$ {product.price}</CTableDataCell>
      <CTableDataCell  className='colSpan: 2 w'>$ {product.quantity * product.price}</CTableDataCell>
      <IconButton  className='colSpan: 2 ' onClick={handleSubmit} > <Delete fontSize="small" /></IconButton>
    </CTableRow>
  </CTableBody>
</CTable>
</div>            
  )
}
export default CartItem
