import React, {useEffect,useState} from 'react';
import ItemDetail from '../componentes/ItemDetail';

const prod = 
    {id:1, image:"https://res.cloudinary.com/deqsgq7p0/image/upload/v1659969905/React%20App/termo_boca_ryqaes.jpg", title: "Termo Boca" , describe: "Termo de acero inoxidable forrado con vinilo laminado mate/brilloso. Capacidad: 500ml. No incluye mate", price:"$2100"};

export const ItemDetailContainer = () => {
    const [data,setData]=useState ([]);
    useEffect(()=>{
        const getData = new Promise (resolve => {
          setTimeout(()=> {
            resolve (prod);
          },2000);
        });
        getData.then(res => setData (res))
      },[])

  return (
    <ItemDetail data={data}/>
  );
}

export default ItemDetailContainer