import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import '../styles/itemlistcontainer.scss';
import { getProducts, getProductsByCategory } from "../services/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
      if (categoryId) {
        getProductsByCategory(categoryId)
          .then((resolve) => {
            setProducts(resolve);
          })
          .catch((error) => {
            console.log(error);
          });
        } else {
          getProducts()
          .then((resolve) => {
            setProducts(resolve);
          })
          .catch((error) => {
            console.log(error);
          });
        }
      }, [categoryId]);

    return (
         <section className="item-list-container">
             <ItemList items={products} />
         </section>
    );
};

export default ItemListContainer;