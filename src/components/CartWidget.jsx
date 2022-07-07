import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import '../styles/cartwidget.scss';

function CartWidget() {
    return(
        <div className="cart-widget">
            <FontAwesomeIcon icon={faShoppingCart}/>
            <div className="qty-display">1</div>
        </div>
    );
}

export default CartWidget;