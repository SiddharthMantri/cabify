import { useState, useMemo, useCallback, useEffect } from "react";
import Checkout from "../data/Checkout";

export const useCheckout = (initData = {}) => {
    const checkout = new Checkout(initData);
    const {
        cart = [],
        internalCart = [],
        products = [],
        pricingRules = [],
        appliedRules = [],
        grossTotal = 0,
        scan = () => { },
        total = () => { },
        updateCheckout = () => { },
        undiscounted
    } = checkout;
    const performUpdate = applyFunction => item => {
        applyFunction(item);
        let newState = updateCheckout(cart);
        let { cart: newStateCart, undiscounted } = newState;
        setState({
            ...defaultState,
            newStateCart,
            grossTotal: newState.grossTotal,
            appliedRules: newState.appliedRules,
            total: newState.total,
            undiscounted
        });
    };
    const defaultState = {
        cart,
        internalCart,
        products,
        pricingRules,
        appliedRules,
        grossTotal,
        scan: performUpdate(scan),
        undiscounted
    };

    let [state, setState] = useState(defaultState);

    return { state };
};
