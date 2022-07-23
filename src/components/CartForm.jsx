import React, {useState} from 'react';
import '../styles/cartform.scss';
import swal from 'sweetalert';
import {useForm} from 'react-hook-form'

function CartForm({cart, totalCartPrice, createBuyOrder, clearCart}) {
    const [client, setClient] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    },)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        handleBuyOrder();
    }

    const handleChange = (evt) => {
        const field = evt.target.name;
        const value = evt.target.value;

        setClient({
            ...client,
            [field]: value,
        })
    }

    function handleBuyOrder() {
        const orderData = {
          client,
          items: cart,
          total: totalCartPrice(),
        };

        createBuyOrder(orderData).then((createOrderData) => {
            clearCart();
            console.log("Your order has been succesfully created: " + createOrderData)
            swal("Order completed", "Your order has been created", "success");
        });
    }

    return (
        <div className="form-wrapper">
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='form__title'>Complete your order</h3>
                <div className="form__input">
                    <label htmlFor="clientname">Name</label>
                    <input onChange={handleChange} name="name" maxLength={32} {...register("name", {required: "This field is required", minLength: {value: 8, message: "Minimum 8 characters required."}, maxLength: {value: 31, message: "Max length reached"}})} />
                    <p className='error-message'>
                        {errors?.name?.message}
                    </p>
                </div>
                <div className="form__input">
                    <label htmlFor="clientemail">Email</label>
                    <input onChange={handleChange} name="email" maxLength={32} {...register("email", {required: "This field is required", minLength: {value: 8, message: "Minimum 8 characters required."}, maxLength: {value: 31, message: "Max length reached"}, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email, must contain @"}})} />
                    <p className='error-message'>
                        {errors?.email?.message}
                    </p>
                </div>
                <div className="form__input">
                    <label htmlFor="phone">Phone</label>
                    <input onChange={handleChange} name="phone" type="number" {...register("phone", {required: "This field is required", minLength: {value: 8, message: "Minimum 8 characters required."}})} />
                    <p className='error-message'>
                        {errors?.phone?.message}
                    </p>
                </div>
                <div className="form__input">
                    <label htmlFor="clientaddress">Address</label>
                    <input onChange={handleChange} name="address" {...register("address", {required: "This field is required", minLength: {value: 8, message: "Minimum 8 characters required."}})} />
                    <p className='error-message'>{errors?.address?.message}</p>
                </div>
                <input type="submit" className='form__button' value={"Complete Purchase"}/>
            </form>
        </div>
    )
}

export default CartForm;