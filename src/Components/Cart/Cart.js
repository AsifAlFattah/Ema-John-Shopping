import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = ({cart,clearCart}) => {

    

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = Math.round(total * 0.05);

    

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <div className='cart-content'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: ${total+shipping+tax}</h4>
            </div>
            <div className='btn-grp'>
                <button className='clear-btn' onClick={clearCart}><p>Clear Cart &nbsp;<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></p></button> <br/ >
                <button className='review-btn' onClick={clearCart}><p>Place Order &nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></p></button>
            </div>
        </div>
    );
};

export default Cart;