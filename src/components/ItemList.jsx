import React from "react";
import Item from "./Item";
import '../styles/itemlist.scss';

const ItemList = ({items}) => {
    return (
        <div className="item-list">
          {items.map(item => {
            return (
              <Item key={item.id} item={item} />
            );
          })}
        </div>
    );
  };


export default ItemList;