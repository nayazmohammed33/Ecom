import React from 'react'
import { createContext,useContext,useState } from "react";
import { CartContext } from './CartContext';
const CartProvider = ({children}) => {
    const [cartitems,setCartItems] = useState([]);

  const addToCart=(item)=>{
    setCartItems(preitem=> [...preitem,item]);
    console.log(cartitems);
  }

  const removeFromCart=(id)=>{
    console.log(cartitems.title);
    setCartItems(preitem=>preitem.filter(cartitem=>cartitem.id !== id));
  }
  return (
    <CartContext.Provider value={{cartitems,addToCart,removeFromCart}}>{children}</CartContext.Provider>
  )
}

export default CartProvider