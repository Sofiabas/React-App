import React,{useState, useContext} from 'react';
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
const addItem = (item , quantity) => {
    if (isInCart(item.id)){
        setCart(cart.map(producto => {
            return producto.id === item.id ? {...producto, quantity: producto.quantity + quantity} : producto
        }));
    } else {
        setCart ([...cart, {...item,quantity}]);
    }
}
console.log('carrito:', cart);

    const clear = () => setCart([]);
    const isInCart = (id) => cart.find(producto=> producto.id === id ) ? true : false;
    const removeItem = (id) => setCart (cart.filter (producto => producto.id !==id));

  return (
    <CartContext.Provider value= {{
        clear, 
        isInCart,
        removeItem,
        addItem
   }}>
{children}
    </CartContext.Provider>
  )
}

export default CartProvider