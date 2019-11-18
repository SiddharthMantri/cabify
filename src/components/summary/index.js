import React, { useContext } from 'react';
import { Context } from '../../store/context';
import ItemList from './item-list';
import DiscountList from './discount-list';

const Summary = props => {
    const { state } = useContext(Context);
    let { cart = {}, undiscounted = 0, grossTotal = 0, appliedRules = {}, cartQty = 0 } = state;

    return (
        <aside className="summary">
            <h1 className="main">Order Summary</h1>
            <ul className="summary-items wrapper">
                <li>
                    <span className="summary-items-number">{cartQty} Items</span>
                    <span className="summary-items-price">{undiscounted}<span className="currency">€</span></span>
                </li>
            </ul>
            {cartQty > 0 &&
                <div className="summary-discounts wrapper-half border" style={{ padding: "0px 0px 24px 0px", flexGrow: 1 }}>
                    <ul>
                        {Object.keys(cart).map((item, index) => (<ItemList key={index} item={cart[item]} />))}
                    </ul>
                </div>
            }
            {Object.keys(appliedRules).length > 0 &&
                <div className="summary-discounts wrapper-half border">
                    <h2>Discounts</h2>
                    <ul>
                        {Object.keys(appliedRules).map((name, index) => <DiscountList key={index} name={name} rule={appliedRules[name]} />)}
                    </ul>
                </div>
            }
            <div className="summary-total wrapper">
                <h1 className="summary-total-cost">
                    <span>Total Cost</span>
                    <span className="summary-total-price">{grossTotal}€</span>
                </h1>
                <button type="submit">Checkout</button>
            </div>
        </aside>
    )
}
export default Summary;