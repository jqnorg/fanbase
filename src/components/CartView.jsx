import { useContext } from "react";
import cartContext from "../context/CartContext";
import { createBuyOrder } from "../services/firestore";
import CartForm from "./CartForm";
import "../styles/cartview.scss"

function CartView() {
    const {cart, totalCartPrice, removeItemById, clearCart} = useContext(cartContext);

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
                        <span className="cart-item__price">${item.price}</span>
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
                </div>
                <button className="cart-button">Complete Order</button>
            </div>
        </div>
        <CartForm cart={cart} totalCartPrice={totalCartPrice} clearCart={clearCart} createBuyOrder={createBuyOrder}></CartForm>
        
        </>
    )
}

export default CartView;