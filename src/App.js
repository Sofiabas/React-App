
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Footer from './componentes/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CartWidget from './componentes/CartWidget';
import CartProvider from './CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>    
 <CartProvider>
     <NavBar/> 
     <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:detalleId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartWidget/>}/>
      </Routes>
</CartProvider>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
