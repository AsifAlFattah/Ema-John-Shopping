import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart, deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , []);

    useEffect( () =>{
        
        const storedCart = getStoredCart();
        const savedCart = [];

        for(const id in storedCart){
            const addedProduct = products.find(product => product.id===id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);

    }, [products]);

    const handleAddToCart = (selectedProduct) =>{
        let newCart = [...cart];
        const exists = cart.find(product => product.id===selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...newCart, selectedProduct];
            console.log('Not exists part');
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
            console.log('exists part');
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    };

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    };

    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                            product={product}
                            key={product.id}
                            handleAddToCart={handleAddToCart}
                            ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                    cart={cart}
                    clearCart={clearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;