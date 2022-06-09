import React from "react"
function ItemListContainer(props) {
    return (
        <section className="item-list-container">
            <h3>Welcome to our store, {props.name}.</h3>
        </section>
    );
}

export default ItemListContainer;