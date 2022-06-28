import React from "react";
import {Link} from "react-router-dom";
import '../styles/item.scss';

    const Item = ({item}) => {
        const detailUrl = `/product/${item.id}`;
        return (
            <Link to={detailUrl} style={{color: 'white', textDecoration: 'none'}}>
                <div className="item">
                    <img src={item.image} className="item__image" alt={item.name} />
                    <div className="item__title">{item.title}</div>
                    <div className="item__description">
                        <p>{item.description}</p>
                    </div>
                    <div className="item__price">${item.price}</div>
                </div>
            </Link>
        );
    }

export default Item;