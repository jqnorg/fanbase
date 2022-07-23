import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import '../styles/itemlistcontainer.scss';
import { getProducts, getProductsByCategory } from "../services/firestore";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import NotFoundPage from "../pages/NotFound";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (categoryId) {
        getProductsByCategory(categoryId)
          .then((resolve) => {
            setProducts(resolve);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
        } else {
          getProducts()
          .then((resolve) => {
            setProducts(resolve);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          })
        }
      }, [categoryId]);

    if(loading) {
      return (
        <section className="item-list-container">
          <ClipLoader
            color="hsla(211, 96%, 62%, 1)"
            cssOverride={{
              'position': 'fixed',
              'top': '50%',
              'left': "50%",
              'transform': 'translate(-50%, -50%)'
            }}
            loading
            size={100}
            speedMultiplier={0.6}
          />
        </section>
      )
    }

    if(products) {
      return (
           <section className="item-list-container">
               <ItemList items={products} />
           </section>
      );
    }else {
      <NotFoundPage/>
    }
};

export default ItemListContainer;