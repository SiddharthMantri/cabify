import React, { useContext, useState } from 'react';
import { Context } from '../../store/context';


const ProductRow = ({ name, price, code, imgUrl, imgXlUrl }) => {
    const { state, modal: { setOpen = () => { }, setData = () => { } } } = useContext(Context);
    let { scan, cart = {}, remove, addByQuantity } = state;
    let contextQty = cart[code] ? cart[code].qty : 0;
    const [qty, setQty] = useState(contextQty);
    const productInCart = cart[code] ? cart[code] : {};
    const handleUpdateQty = type => e => {
        let value = 0;
        let currentValue = parseInt(qty);
        if (!isNaN(currentValue)) {
            if (type === 'reduce') {
                value = parseInt(qty) <= 0 ? 0 : parseInt(qty) - 1;
                remove(code);
            } else {
                value = parseInt(qty) + 1;
                scan(code);
            }
        }
        setQty(value);
    }
    const handleInputChange = e => {
        let intValue = e.target.validity.valid ? e.target.value : qty;
        addByQuantity(code, intValue);
        setQty(intValue);
    }
    const handleBlur = e => {
        if (e.target.value === "") {
            setQty(0);
        }
    }
    const handleModalClick = () => {
        setOpen(true);
        setData({ name, price, code, imgUrl, imgXlUrl });
    }
    return (
        <li className="product row">
            <div className="col-product">
                <figure className="product-image">
                    <img src={imgUrl} alt={code} />
                    <div className="product-description">
                        <h1 onClick={handleModalClick}>{name}</h1>
                        <p className="product-code">Product code {code}</p>
                    </div>
                </figure>
            </div>
            <div className="col-quantity">
                <button className="count" onClick={handleUpdateQty('reduce')}>-</button>
                <input type="text" pattern={"[0-9]{1,3}"} className="product-quantity" value={qty} onChange={handleInputChange} onBlur={handleBlur} />
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