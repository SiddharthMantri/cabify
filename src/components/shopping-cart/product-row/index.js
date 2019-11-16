import React, { useContext, useState, useEffect, useMemo } from 'react';
import { Context } from '../../../store/context';


const ProductRow = ({ name, price, code }) => {
    const { state } = useContext(Context);
    const [qty, setQty] = useState(0);
    let { scan, cart = {}, remove } = state;

    const productInCart = cart[code] ? cart[code] : {}

    const handleUpdateQty = type => e => {
        let value = 0;
        if (type === 'reduce') {
            value = parseInt(qty) <= 0 ? 0 : parseInt(qty) - 1
            remove(code);
        } else {
            value = parseInt(qty) + 1;
            scan(code);
        }
        setQty(value);
    }
    useEffect(()=>{
        console.log(state);
    }, [state])

    return (
        <li className="product row">
            <div className="col-product">
                <figure className="product-image">
                    <img src="img/shirt.png" alt="Shirt" />
                    <div className="product-description">
                        <h1>{name}</h1>
                        <p className="product-code">Product code {code}</p>
                    </div>
                </figure>
            </div>
            <div className="col-quantity">
                <button className="count" onClick={handleUpdateQty('reduce')}>-</button>
                <input type="text" className="product-quantity" value={qty} onChange={()=>{}} />
                <button className="count" onClick={handleUpdateQty('increase')}>+</button>
            </div>
            <div className="col-price">
                <span className="product-price">{price}</span>
                <span className="product-currency currency">€</span>
            </div>
            <div className="col-total">
                <span className="product-price">{productInCart.undiscounted || 0}</span>
                <span className="product-currency currency">€</span>
            </div>
        </li>
    )
}
export default ProductRow;