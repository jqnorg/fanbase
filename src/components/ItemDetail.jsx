import React from "react";
import "../styles/itemdetail.scss";
import ItemCount from "./ItemCount"
import {Link} from "react-router-dom";

function ItemDetail({item}) {
    const [isAddedToCart, setAddedToCart] = React.useState(false);
    function handleOnAdd() {
        setAddedToCart(true);
        console.log('hp;a');
    }

    return (
        <div className="item-detail">
            <div className="item__image">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="item__info">
                <div className="item__title">{item.title}</div>
                <p className="item__category">{item.category}</p>
                <p className="item__description">{item.description}</p>
                <div className="item__price">${item.price}</div>
                {isAddedToCart 
                    ?  <Link className="item__cartlink" to="/cart">Ir al carrito</Link>
                    :  <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd} />
                }
            </div>
        </div>
    )

}

export default ItemDetail;