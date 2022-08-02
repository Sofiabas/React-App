import React from 'react'
import './ItemListContainer.css';

function ItemListContainer(props) {
  return (
    <h1 className='titulo'>{props.greeting} Titulo de Prueba </h1>
  )
}

export default ItemListContainer