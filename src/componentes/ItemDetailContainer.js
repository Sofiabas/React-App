import React, {useEffect,useState} from 'react';
import ItemDetail from '../componentes/ItemDetail';
import {useParams} from 'react-router-dom';

const prod = [
    {id:1, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1659969905/React%20App/termo_boca_ryqaes.jpg", title: "Termo Boca" , detalle: "Termo de acero inoxidable forrado con vinilo laminado mate/brilloso. Capacidad: 500ml. No incluye mate", price:"$2100",category:"termos"},
{id:2, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1659969906/React%20App/termo_rojo_efs9sl.jpg", title: "Termo Rojo", detalle: "Termo de acero inoxidable forrado con vinilo laminado mate/brilloso. Capacidad: 500ml. No incluye mate", price:"$2100", category:"termos" },
{id:3, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1659969905/React%20App/termo_river_kg7tmf.jpg", title: "Termo River", detalle: "Termo de acero inoxidable forrado con vinilo laminado mate/brilloso. Capacidad: 500ml. No incluye mate", price:"$2100", category:"termos" },
{id:4, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1659969905/React%20App/termo_racing_ip5eaz.jpg", title: "Termo Racing", detalle: "Termo de acero inoxidable forrado con vinilo laminado mate/brilloso. Capacidad: 500ml. No incluye mate", price:"$2100", category:"termos" },
{id:5, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1659969905/React%20App/termo_sanlo_qfafky.jpg", title: "Termo San Lorenzo", detalle: "Termo de acero inoxidable forrado con vinilo laminado mate/brilloso. Capacidad: 500ml. No incluye mate", price:"$2100", category:"termos" },
{id:6, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1660694283/React%20App/281584451_372860568198269_2732199964281514007_n_vzbyn0.jpg", detalle: "Tazón de ceramica con manija. Apto para microondas. Diametro:12cm", price:"$860", title: "Tazon Bob Esponja", category:"tazon" },
{id:7, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1660694284/React%20App/283092275_413023300407000_2414640642470956209_n_j8iiiu.jpg", detalle: "Tazón de ceramica con manija. Apto para microondas. Diametro:12cm", price:"$860", title: "Tazon Pato", category:"tazon" },
];

export const ItemDetailContainer = () => {
    const [data,setData]=useState ([]);
    const {detalleId}= useParams();
    useEffect(()=>{
        const getData = new Promise (resolve => {
          setTimeout(()=> {
            resolve (prod);
          },2000);
        });
        getData.then(res => setData (res.find(producto => producto.id === parseInt (detalleId))));
      },[])

  return (
    <ItemDetail data={data}/>
  );
}

export default ItemDetailContainer