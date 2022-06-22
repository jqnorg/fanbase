import React, {useState, useEffect} from "react";
import '../styles/itemdetailcontainer.scss';
import {products} from "../data/products"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(products[1]);
          }, 600);
        });

        getProduct.then((resolve) => {
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