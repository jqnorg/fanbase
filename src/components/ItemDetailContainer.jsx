import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import '../styles/itemdetailcontainer.scss';
import {products} from "../data/products"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const {itemId} = useParams();

    console.log(products[itemId]);

    function getProduct() {
      return new Promise((resolve, reject) => {
        const itemResult = products.find(item => item.id === itemId);
        setTimeout(() => {
          resolve(itemResult);
        }, 500);
      });
    }

    useEffect(() => {
        getProduct().then((resolve) => {
            setProduct(resolve);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return (
        <section className="item-detail-container">
            <ItemDetail item={product} />
        </section>
    );
};

export default ItemDetailContainer;