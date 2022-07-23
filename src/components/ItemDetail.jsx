import React from "react";
import "../styles/itemdetail.scss";
import ItemCount from "./ItemCount"
import {Link} from "react-router-dom";
import {useContext} from "react";
import cartContext from "../context/CartContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import NotFoundPage from "../pages/NotFound";

function ItemDetail({item}) {
    const {addToCart, removeItemById, isInCart} = useContext(cartContext);

    function handleOnAdd(quantity) {
        addToCart(item,quantity);
    }

    if(item.image) {
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
                    {isInCart(item.id) 
                        ?  <Link className="item__cartlink" to="/cart">Ir al carrito</Link>
                        :  <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd} />
                    }
    
                    {isInCart(item.id) && <FontAwesomeIcon icon={faXmark} className="item__button" id="button-remove" onClick={() => removeItemById(item.id)}/>}
                </div>
            </div>
        );
    }else {
        return (
            <NotFoundPage/>
        )
    }
    

}

export default ItemDetail;