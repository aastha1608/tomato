import { createContext, useEffect, useState } from "react";
import {food_list} from '../assets/assets';

export const StoreContext=createContext(null);

export const StoreContextProvider=(props)=>{
    const [cartItems,setcartItems]=useState({});
    const addToCart=(itemId)=>{
        if(!cartItems[itemId])
        {
            setcartItems((prev)=>({...prev,[itemId]:1}))
        }
        else
        {
            setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    useEffect(()=>{
        console.log("cartItems",cartItems);
    },[cartItems])
    return <StoreContext.Provider value={{food_list,cartItems,addToCart,removeFromCart}}>{props.children}</StoreContext.Provider>
}
