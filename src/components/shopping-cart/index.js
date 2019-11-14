import React from 'react';
import ProductList from './product-list';



const ShoppingCart = props => {
    return (
        <section class="products">
            <h1 class="main">Shopping cart</h1>
            <ul class="products-list tableHead">
                <li class="products-list-title row">
                    <div class="col-product">Product details</div>
                    <div class="col-quantity">Quantity</div>
                    <div class="col-price">Price</div>
                    <div class="col-total">Total</div>
                </li>
            </ul>
            <ProductList />
        </section>
    )
}
export default ShoppingCart