import React from "react";
import {createContext, useEffect, useState} from "react"

const cartContext = createContext();

export function CartContextProvider(props){

    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            alert('This item is already in cart.');
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    function isInCartContext(id) {
        return cart.some(item => item.id === id);
    }

    const clearCart = () => {
        setCart([]);
    };


    return <cartContext.Provider value={{cart, isInCartContext, addToCart, clearCart}}>
        {props.children}
    </cartContext.Provider>
}

export default cartContext;
