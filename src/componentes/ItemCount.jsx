import React,{useState} from "react";

const ClickCounter = ({stock,initial,onAdd} ) =>{
    const [click,setClick] = useState(initial);

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
        <button  disabled={click <= 0 } onClick={()=> onAdd(click)} class="btn btn-success">Añadido al Carrito</button>
        </div>
        </>
    )
}

export default ClickCounter;