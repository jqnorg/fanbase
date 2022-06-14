import React from "react"
import ItemCount from "./ItemCount"

function ItemListContainer(props) {
    return (
        <section className="item-list-container">
            <h3>Welcome to our store, {props.name}.</h3>
            <ItemCount stock="5" initial="1" />
        </section>
    );
}

export default ItemListContainer;