import React, {useEffect,useState} from 'react'
import ItemCount from '../componentes/ItemCount';
import './ItemListContainer.css';
import ItemList from '../componentes/ItemList';


const prod = [
{id:1, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1659969905/React%20App/termo_boca_ryqaes.jpg", title: "Termo Boca" },
{id:2, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1659969906/React%20App/termo_rojo_efs9sl.jpg", title: "Termo Rojo" },
{id:3, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1659969905/React%20App/termo_river_kg7tmf.jpg", title: "Termo River" },
{id:4, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1659969905/React%20App/termo_racing_ip5eaz.jpg", title: "Termo Racing" },
{id:5, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1659969905/React%20App/termo_sanlo_qfafky.jpg", title: "Termo San Lorenzo" },
];

function ItemListContainer(props) {
const [data,setData]=useState ([]);
useEffect(()=>{
  const getData = new Promise (resolve => {
    setTimeout(()=> {
      resolve (prod);
    },2000);
  });
  getData.then(res => setData (res))
},[])

const onAdd=(quantity)=>{
console.log(`Añadio ${quantity} unidades`);
}
  return (
    <>
    <h1 className='titulo'>{props.greeting} Titulo de Prueba </h1>
    <div><ItemCount stock={30} initial={1} onAdd={onAdd} /> 
    </div>
    <ItemList data={data}/>
    </>
  )
}
export default ItemListContainer
