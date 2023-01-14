import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    //console.log(props.product);
    const {name, img, seller, price, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p> <br />
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={ () => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart &nbsp;<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </p>
            </button>
        </div>
    );
};

export default Product;