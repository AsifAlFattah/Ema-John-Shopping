import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <div className='cart-content'>
                <p>Selected Items: {cart.length}</p>
            </div>
            
        </div>
    );
};

export default Cart;