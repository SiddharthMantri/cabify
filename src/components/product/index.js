import React from 'react';



const Product = props => {
    return (
        <li className="product row">
            <div className="col-product">
                <figure className="product-image">
                    <img src="img/shirt.png" alt="Shirt" />
                    <div className="product-description">
                        <h1>Shirt</h1>
                        <p className="product-code">Product code X7R2OPX</p>
                    </div>
                </figure>
            </div>
            <div className="col-quantity">
                <button className="count">-</button>
                <input type="text" className="product-quantity" value="3" />
                <button className="count">+</button>
            </div>
            <div className="col-price">
                <span className="product-price">20</span>
                <span className="product-currency currency">€</span>
            </div>
            <div className="col-total">
                <span className="product-price">60</span>
                <span className="product-currency currency">€</span>
            </div>
        </li>
    )
}

export default Product;