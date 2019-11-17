import React from 'react';
import ProductList from './product-list';



const ShoppingCart = props => (
    <section className="products">
        <h1 className="main">Shopping cart</h1>        
        <ProductList />
    </section>
)
export default ShoppingCart