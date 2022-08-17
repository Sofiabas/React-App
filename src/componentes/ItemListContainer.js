import React, {useEffect,useState} from 'react'
import ItemCount from '../componentes/ItemCount';
import './ItemListContainer.css';
import ItemList from '../componentes/ItemList';
import {useParams} from 'react-router-dom';

const prod = [
{id:1, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1659969905/React%20App/termo_boca_ryqaes.jpg", title: "Termo Boca", category:"termos" },
{id:2, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1659969906/React%20App/termo_rojo_efs9sl.jpg", title: "Termo Rojo", category:"termos" },
{id:3, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1659969905/React%20App/termo_river_kg7tmf.jpg", title: "Termo River", category:"termos" },
{id:4, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1659969905/React%20App/termo_racing_ip5eaz.jpg", title: "Termo Racing", category:"termos" },
{id:5, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1659969905/React%20App/termo_sanlo_qfafky.jpg", title: "Termo San Lorenzo", category:"termos" },
{id:6, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1660694283/React%20App/281584451_372860568198269_2732199964281514007_n_vzbyn0.jpg", title: "Tazon Bob Esponja", category:"tazon" },
{id:7, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1660694284/React%20App/283092275_413023300407000_2414640642470956209_n_j8iiiu.jpg", title: "Tazon Pato", category:"tazon" },
];

function ItemListContainer(props) {
const [data,setData]=useState ([]);

const {categoryId}= useParams();

useEffect(()=>{
  const getData = new Promise (resolve => {
    setTimeout(()=> {
      resolve (prod);
    },2000);
  });
  if (categoryId) {
    getData.then(res => setData(res.filter (termos => termos.category === categoryId)));
  } else {getData.then(res => setData (res))} 
},[categoryId])

const onAdd=(quantity)=>{
console.log(`Añadio ${quantity} unidades`);
}
  return (
    <>
    <h1 className='titulo'>{props.greeting} Eureka</h1>
    <div><ItemCount stock={30} initial={1} onAdd={onAdd} /> 
    </div>
    <ItemList data={data}/>
    </>
  )
}
export default ItemListContainer
