import {React, useEffect, useState} from "react"
import ItemList from "./ItemList";
import '../styles/itemlistcontainer.scss'

function ItemListContainer(props) {
    const [products, setProducts] = useState([
        {
          "id": "1",
          "title": "Lionel Messi Signed Jersey",
          "description": "Barcelona 2015 Champions League Jersey signed by Lionel Messi" ,
          "price": "1600",
          "image": "https://res.cloudinary.com/dptvtsotj/image/upload/v1655347885/messi2015_gbmloz.png"
      },
      {
          "id": "2",
          "title": "Michael Jordan Signed Jersey",
          "description": "Bulls's last championship jersey signed by Michael Jordan" ,
          "price": "1300",
          "image": "https://res.cloudinary.com/dptvtsotj/image/upload/v1655347885/jordanbulls_zykm38.png"
      },
      {
          "id": "3",
          "title": "Benzema Signed Jersey",
          "description": "Real Madrid's 2022 Champions League jersey signed by Benzema",
          "price": "1250",
          "image": "https://res.cloudinary.com/dptvtsotj/image/upload/v1655347884/benzema2022_akjfqv.png"
      }
      ]);

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
                }, 1000);
                });
                getProducts.then(products => {
                    setProducts(products);
                    });
                    getProducts
                        .then((resolve) => {
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

}

export default ItemListContainer;