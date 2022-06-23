import React from "react";
import {Link} from "react-router-dom";
import '../styles/item.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import ItemCount from "./ItemCount";

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
                    <div className="item__interact">
                        <ItemCount/>
                        <button className="item__button"><FontAwesomeIcon icon={faShoppingCart}/></button>
                    </div>
                </div>
            </Link>
        );
    }

export default Item;