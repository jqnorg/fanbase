import { useContext } from "react";
import cartContext from "../context/CartContext";
import CartForm from "./CartForm";
import "../styles/cartview.scss"
import { useState } from "react";
import { createBuyOrder } from "../services/firestore";

function CartView() {
    const {cart, totalCartPrice, removeItemById, clearCart} = useContext(cartContext);
    const [formStatus, setFormStatus] = useState(false);

    function toggleFormStatus() {
        if (formStatus === false) {
            setFormStatus(true);
        }else {
            setFormStatus(false);
        }
    }

    return (
        <>
        <div className="cart-wrapper">
            <div className="cart-items">
                <div className="cart-item">
                    <span className="quantity-title">Quantity</span>
                    <span className="total-title">Subtotal</span>
                </div>
            {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                    <img src={item.image} className="cart-item__image" alt=""/>
                    <div className="cart-item__info">
                        <span className="cart-item__name">{item.title}</span>
                    </div>
                    <span className="cart-item__info">{item.qnty}</span>
                    <span className="cart-item__info">${item.price * item.qnty}</span>
                    <span className="remove-item" onClick={() => removeItemById(item.id)}>x</span>
                </div>
            ))}
            </div>
            <div className="cart-interact">
                <div className="cart-info">
                    <span className="cart-info__item">Total a pagar: ${totalCartPrice()}</span>
                    <button className="cart-info__dform" onClick={() => toggleFormStatus()}>Continue to checkout</button>
                </div>
            </div>

            {formStatus && <CartForm cart={cart} totalCartPrice={totalCartPrice} clearCart={clearCart} createBuyOrder={createBuyOrder}/>}
        </div>
        
        </>
    )
}

export default CartView;