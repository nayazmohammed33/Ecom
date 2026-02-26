import { createContext,useContext } from "react";
export const CartContext = createContext({
    cartitems:[],
    addToCart:()=>{},
    removeFromCart:()=>{},
});

export const useCartContext = () => {
    return useContext(CartContext);
};
