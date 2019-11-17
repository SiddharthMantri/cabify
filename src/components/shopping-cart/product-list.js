import React, { useContext, Fragment } from 'react';
import { Context } from '../../store/context'
import ProductRow from './product-row';

const ProductList = props => {
    const { state: { products = [] } } = useContext(Context);
    return (
        <Fragment>
            <ul className="products-list tableHead">
                <li className="products-list-title row">
                    <div className="col-product">Product details</div>
                    <div className="col-quantity">Quantity</div>
                    <div className="col-price">Price</div>
                    <div className="col-total">Total</div>
                </li>
            </ul>
            <ul className="products-list">
                {products.map((p, i) => <ProductRow key={i} {...p} />)}
            </ul>
        </Fragment>
    )
}
export default ProductList;