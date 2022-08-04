import React from 'react'
import ItemCount from '../componentes/ItemCount';
import './ItemListContainer.css';


function ItemListContainer(props) {

const onAdd=(quantity)=>{
console.log(`Añadio ${quantity} unidades`);
}
  return (
    <>
    <h1 className='titulo'>{props.greeting} Titulo de Prueba </h1>
    <div><ItemCount stock={30} initial={1} onAdd={onAdd} /> 
    </div>
    </>
  )
}
export default ItemListContainer
