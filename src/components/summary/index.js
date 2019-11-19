import React, { useContext, Fragment } from 'react';
import { Context } from '../../store/context';
import DiscountList from './discount-list';

const Summary = () => {
    const { state } = useContext(Context);
    let { undiscounted = 0, grossTotal = 0, appliedRules = {}, cartQty = 0 } = state;

    return (
        <aside className="summary">
            <h1 className="main">Order Summary</h1>
            <ul className="summary-items wrapper border" >
                <li>
                    <span className="summary-items-number">{cartQty} Items</span>
                    <span className="summary-items-price">{undiscounted}<span className="currency">€</span></span>
                </li>
            </ul>
            <div className="summary-discounts wrapper-half">
                {Object.keys(appliedRules).length > 0 &&
                    <Fragment>
                        <h2>Discounts</h2>
                        <ul>
                            {Object.keys(appliedRules).map((name, index) => <DiscountList key={index} name={name} rule={appliedRules[name]} />)}
                        </ul>
                    </Fragment>
                }
            </div>
            <div className="summary-total wrapper">
                <h1 className="summary-total-cost">
                    <span>Total Cost</span>
                    <span className="summary-total-price">{grossTotal} €</span>
                </h1>
                <button type="submit">Checkout</button>
            </div>
        </aside>
    )
}
export default Summary;