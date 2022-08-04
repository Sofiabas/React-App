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
        <h1>CONTADOR DE CLICK</h1>
        <h2> Clicks:{click}</h2>
        <button disabled={click >= stock} onClick={incremento} class="btn btn-primary">+</button>
        <button disabled={click <=1 } onClick={decremento} class="btn btn-primary">-</button>
        <button onClick={()=> setClick(0)} class="btn btn-danger">Reseteo</button>
        <div>
        <button  disabled={click <= 0 } onClick={()=> onAdd(click)} class="btn btn-success">Añadido al Carrito</button>
        </div>
        </>
    )
}

export default ClickCounter;