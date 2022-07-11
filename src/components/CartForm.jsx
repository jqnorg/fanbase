import React, {useState} from 'react';
import '../styles/cartform.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function CartForm({cart, totalCartPrice, createBuyOrder, clearCart}) {
    const [client, setClient] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        country: ""
    },)

    const handleChange = (evt) => {
        const field = evt.target.name;
        const value = evt.target.value;

        setClient({
            ...createBuyOrder,
            [field]: value,
        })
    }

    function handleBuyOrder(evt) {
        evt.preventDefault();
        const orderData = {
          client,
          items: cart,
          total: totalCartPrice(),
        };

        createBuyOrder(orderData).then((createOrderData) => {
            clearCart();
            console.log("Your order has been succesfully created: " + createOrderData)
        });
    }

    return (
        <form className='form'>
            <h3 className='form__title'>Complete your order</h3>
            <div className="form__input">
                <label htmlFor="clientname">Name</label>
                <input onChange={handleChange} name="name" />
            </div>
            <div className="form__input">
                <label htmlFor="clientemail">Email</label>
                <input onChange={handleChange} name="email" />
            </div>
            <div className="form__input">
                <label htmlFor="phone">Phone</label>
                <input onChange={handleChange} name="phone" />
            </div>
            <div className="form__input">
                <label htmlFor="clientcountry">Country</label>
                <input onChange={handleChange} name="country" />
            </div>
            <div className="form__input">
                <label htmlFor="clientaddress">Address</label>
                <input onChange={handleChange} name="address" />
            </div>
            <button onClick={handleBuyOrder} className='form__button'>Complete Purchase <FontAwesomeIcon icon={faCaretRight}/></button>
        </form>
    )
}

export default CartForm;