import {React, useState} from "react";
import '../styles/itemcount.scss';

function ItemCount({stock, initial, onAdd}) {
    const [quantity, setQuantity ] = useState(0);

    function handleAdd() {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }else {
            alert("Sorry, we don't have that many in stock.");
        }
    }

    function handleSubtract() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    return(
        <div className="item-count">
            <div className="item-count-box">
                <span className="count-button" id="item-count-minus" onClick={handleSubtract}>-</span>
                <div className="qty-display">{quantity}</div>
                <span className="count-button" id="item-count-plus" onClick={handleAdd}>+</span>
            </div>
            <button className="item-count-button-add" onClick={() => onAdd(quantity)}>Add to Cart</button>   
        </div>
    )
}


export default ItemCount;