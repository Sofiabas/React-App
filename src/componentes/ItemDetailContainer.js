import React, {useEffect,useState} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const [data,setData]=useState ([]);
    const {detalleId}= useParams();
    useEffect(()=>{
    const querydatabase = getFirestore();
    const queryDoc = doc(querydatabase, 'productos', detalleId)
    getDoc(queryDoc)
    .then(res => setData({id: res.id, ...res.data()}))
      },[detalleId])

  return (
    <ItemDetail data={data}/>
  );
}

export default ItemDetailContainer