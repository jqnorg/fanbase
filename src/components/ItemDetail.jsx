import React from "react";
import "../styles/itemdetail.scss";

function ItemDetail({item}) {

    return (
        <div className="item-detail">
            <img src={item.image} className="item__image" alt={item.name} />
            <div className="item__title">{item.title}</div>
            <p className="item__category">{item.category}</p>
            <p className="item__description">{item.description}</p>
            <div className="item__price">${item.price}</div>
            <button className="item__button">Add to cart</button>
        </div>
    )

}

export default ItemDetail;