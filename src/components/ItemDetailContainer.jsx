import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import '../styles/itemdetailcontainer.scss';
import {getProductById} from '../services/firestore.js';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const {itemId} = useParams();

    useEffect(() => {
        getProductById(itemId).then((resolve) => {
            setProduct(resolve);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [itemId]);

    return (
        <section className="item-detail-container">
            <ItemDetail item={product} />
        </section>
    );
};

export default ItemDetailContainer;