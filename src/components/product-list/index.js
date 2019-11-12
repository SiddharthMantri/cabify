import React, { Fragment } from 'react';
import Product from '../product';


const ProductList = props => {
    return (
        <Fragment>
            <ul class="products-list tableHead">
                <li class="products-list-title row">
                    <div class="col-product">Product details</div>
                    <div class="col-quantity">Quantity</div>
                    <div class="col-price">Price</div>
                    <div class="col-total">Total</div>
                </li>
            </ul>
            <Product />
        </Fragment>
    )
}
export default ProductList;