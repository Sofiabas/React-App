import React, {useEffect,useState} from 'react'
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import Grid from '@mui/material/Grid';
import {useParams} from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

function ItemListContainer(props) {
const [data,setData]=useState ([]);

const {categoryId}= useParams();

useEffect(()=>{
  const querydatabase = getFirestore();
    const queryCollection = collection(querydatabase,'productos')
    if (categoryId) { const queryFilter = query(queryCollection, where ('category', '==', categoryId))
      getDocs(queryFilter)
      .then(res => setData(res.docs.map (producto => ({id: producto.id, ...producto.data()}))))
} else {getDocs(queryCollection)
  .then(res => setData(res.docs.map (producto => ({id: producto.id, ...producto.data()}))))}
 },[categoryId])


  return (
  <>
    <h1 className='titulo mt-3'  >{props.greeting} Eureka - Tienda de Regalos</h1>
    <Grid container rowSpacing={1} spacing={2}  >
    <ItemList data={data}/>
    </Grid>
    </>
  )
}
export default ItemListContainer
