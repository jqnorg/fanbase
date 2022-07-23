import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import '../styles/itemdetailcontainer.scss';
import {getProductById} from '../services/firestore.js';
import ItemDetail from "./ItemDetail";
import ClipLoader from "react-spinners/ClipLoader";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const {itemId} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(itemId).then((resolve) => {
            setProduct(resolve);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          })
      }, [itemId]);

    if(loading) {
        return (
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
        )
    }

    return (
        <section className="item-detail-container">
            <ItemDetail item={product} />
        </section>
    );
};

export default ItemDetailContainer;