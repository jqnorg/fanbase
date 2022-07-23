import {React, useState} from "react";
import '../styles/itemcount.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import swal from "sweetalert";

function ItemCount({stock, initial, onAdd}) {
    const [quantity, setQuantity ] = useState(initial);


    function handleAdd() {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }else {
            swal("Sorry, we don't have that many in stock", "error");
        }
    }

    function handleSubtract() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function addToCart() {
        onAdd(quantity);
        swal("Added to cart", "Your item was added to cart.", "success");
    }

    return(
        <div className="item-count">
            <div className="item-count-box">
                <span className="count-button" id="item-count-minus" onClick={handleSubtract}>-</span>
                <div className="qty-display">{quantity}</div>
                <span className="count-button" id="item-count-plus" onClick={handleAdd}>+</span>
            </div>
            <div className="item-count__button">
                <FontAwesomeIcon icon={faShoppingCart} className="item__button" onClick={addToCart}/>
            </div>
        </div>
    )
}


export default ItemCount;