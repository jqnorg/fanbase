import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import '../styles/cartwidget.scss';
import cartContext from '../context/CartContext';
import { useContext } from 'react';

function CartWidget() {
    const {quantityInCart} = useContext(cartContext);
    return(
        <div className="cart-widget" style={{textDecoration: 'none'}}>
            <FontAwesomeIcon icon={faShoppingCart}/>
            {quantityInCart() > 0 && <div className="qty-display">{quantityInCart()}</div> }
        </div>
    );
}

export default CartWidget;