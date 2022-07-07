import React from "react";
import {createContext, useEffect, useState} from "react"

const cartContext = createContext();

export function CartContextProvider(props){

    const [cart, setCart] = useState([]);

    function isInCart(id) {
        return cart.some((item) => item.id === id);
    };

    function addToCart(item, quantity) {
        if (isInCart(item.id)) {
            alert('This item is already in cart.');
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    function removeItemById(id) {
        let updateCart = cart.filter((item) => item.id !== id);
        setCart(updateCart);
    }


    function totalCartPrice() {
        let cartTotal = 0;
        cart.forEach((item) => (cartTotal = cartTotal + item.quantity * item.price))
    }

    function quantityInCart() {
        let cartQuantity = 0;
        cart.forEach((item) => (cartQuantity = cartQuantity + item.quantity));
        return cartQuantity
    }

    function clearCart() {
        setCart([]);
    };

    return (
        <cartContext.Provider value={{cart, isInCart, addToCart, clearCart, removeItemById, totalCartPrice}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext;
