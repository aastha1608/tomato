import { createContext, useState } from "react";
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
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const key in cartItems)
        {
            if(cartItems[key]>0)
            {
                let foodInfo=food_list.find((product)=>product._id===key);
                totalAmount+=foodInfo.price*cartItems[key];  
            }      
        }
        return totalAmount;
    }
    return <StoreContext.Provider value={{food_list,cartItems,addToCart,removeFromCart,getTotalCartAmount}}>{props.children}</StoreContext.Provider>
}
