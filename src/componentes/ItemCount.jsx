import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import './ItemCount.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ClickCounter = ({stock,initial,onAdd} ) =>{
    const [click,setClick] = useState(initial);
    function handleSubmit(evt){
        evt.preventDefault();
            const MySwal = withReactContent(Swal)
           MySwal.fire({
            position: 'top-end',
              icon: 'success',
              width:'150px',
              title: <strong>Agregado al carrito</strong>,
              showConfirmButton: false,
              timer: 1500
              })
           setTimeout(() => {
            onAdd(click)
        }, 1500);
        }
   const incremento= ()=> {
    setClick(click+1);
   }

   const decremento= ()=> {
    setClick(click-1);
   }
       return(
        <>
         <button disabled={click <=1 } onClick={decremento} class="btn btn-primary">-</button>
        <span> Cantidad:{click}</span>
        <button disabled={click >= stock} onClick={incremento} class="btn btn-primary">+</button>
        <div>
        <Button disabled={click <= 0 } startIcon={< AddIcon />} onClick={handleSubmit }  class="btn btn-success m-4">Añadir al Carrito</Button>
        </div>
        </>
    )
}

export default ClickCounter;