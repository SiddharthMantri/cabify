import React from 'react';
import ProductList from './product-list';



const ShoppingCart = props => {
    return (
        <section className="products">
            <h1 className="main">Shopping cart</h1>
            <ul className="products-list tableHead">
                <li className="products-list-title row">
                    <div className="col-product">Product details</div>
                    <div className="col-quantity">Quantity</div>
                    <div className="col-price">Price</div>
                    <div className="col-total">Total</div>
                </li>
            </ul>   
            <ProductList />
        </section>
    )
}
export default ShoppingCart