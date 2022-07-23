import React from "react";
import {createContext, useState} from "react"

const cartContext = createContext();

export function CartContextProvider(props){

    const [cart, setCart] = useState([]);

    function isInCart(id) {
        return cart.some((item) => item.id === id);
    };

    function addToCart(item, quantity) {
        if (isInCart(item.id)) {
          const idToAdd = item.id;
          let itemToAdd = cart.find((eachItem) => eachItem.id === idToAdd);
          itemToAdd.qnty += quantity;
    
          let newCart = cart.filter((eachItem) => eachItem.id !== item.id);
          setCart([...newCart, { ...itemToAdd }]);
        } else {
            if(quantity === 0){
                alert("Select the quantity to add this item");
            }else {
                setCart([...cart, { ...item, qnty: quantity }]);
            }
        }
      }

    function removeItemById(id) {
        let updateCart = cart.filter((item) => item.id !== id);
        setCart(updateCart);
    }


    function totalCartPrice() {
        let cartTotal = 0
        cart.forEach((item) => (cartTotal = cartTotal + item.qnty * item.price));
        return cartTotal;
    }

    function quantityInCart() {
        let cartQuantity = 0;
        cartQuantity = cart.length;
        return cartQuantity;
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <cartContext.Provider value={{cart, isInCart, addToCart, clearCart, removeItemById, totalCartPrice, quantityInCart}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext;
