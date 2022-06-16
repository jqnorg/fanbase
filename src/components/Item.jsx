import React from "react";
import '../styles/item.scss';

    function Item({item}) {
        return (
            <div className="item">
                <img src={item.image} className="item__image" alt={item.name} />
                <div className="item__title">{item.title}</div>
                <div className="item__description">
                    <p>{item.description}</p>
                </div>
                <div className="item__price">${item.price}</div>
                <button className="item__button">Add to cart</button>
            </div>
        );
    }

export default Item;