import { useContext } from "react";
import cartContext from "../context/CartContext";
import "../styles/cartview.scss"

function CartView() {
    const {cart} = useContext(cartContext);

    return (
        <>
        <div className="cart-wrapper">
            <div className="cart-items">
            {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                    <img src={item.image} className="cart-item__image"/>
                    <span className="cart-item__name">{item.title}</span>
                    <span className="cart-item__price">{item.price}</span>
                    <span className="cart-item__quantity">Quantity: {item.qnty}</span>
                    <p id="removeFromClass" onClick={clearCart}>x</p>
                </div>
            ))}
            </div>
            <div className="cart-interact">
            <button className="cart-button">Finalizar compra</button>
            </div>
        </div>
        
        </>
    )
}

export default CartView;