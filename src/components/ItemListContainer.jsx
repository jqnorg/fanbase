import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import '../styles/itemlistcontainer.scss';
import {products} from "../data/products"

const ItemListContainer = () => {
    const [productsList, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(productsList);
          }, 600);
        });

        getProducts.then((resolve) => {
            setProducts(resolve);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return (
         <section className="item-list-container">
             <ItemList items={products} />
         </section>
    );
};

export default ItemListContainer;