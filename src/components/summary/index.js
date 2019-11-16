import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../store/context';

const Summary = props => {
    const { state } = useContext(Context);
    const [itemCount, setItemCount] = useState(0);
    let { cart = {}, undiscounted = 0, grossTotal = 0, appliedRules = {} } = state;
    
    return (
        <aside className="summary">
            <h1 className="main">Order Summary</h1>
            <ul className="summary-items wrapper border">
                <li>
                    <span className="summary-items-number">{itemCount} Items</span>
                    <span className="summary-items-price">{undiscounted}<span className="currency">€</span></span>
                </li>
            </ul>
            <div className="summary-discounts wrapper-half border">
                <h2>Discounts</h2>
                <ul>
                    {Object.keys(appliedRules).map((rule, index)=>(
                        <li><span>{rule}</span><span>-{appliedRules[rule].savings}€</span></li>
                    ))}
                </ul>
            </div>
            <div className="summary-total wrapper">
                <ul>
                    <li>
                        <span className="summary-total-cost">Total cost</span>
                        <span className="summary-total-price">{grossTotal}€</span>
                    </li>
                </ul>
                <button type="submit">Checkout</button>
            </div>
        </aside>
    )
}
export default Summary;