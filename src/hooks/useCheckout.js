import { useState } from "react";
import Checkout from "../models/Checkout";

export const useCheckout = (initData = {}) => {
    const checkout = new Checkout(initData);

    const { cart = {}, internalCart = {}, products = {}, pricingRules = {}, appliedRules = {}, grossTotal = 0, scan = () => { }, updateCheckout = () => { }, undiscounted, addByQuantity, remove, cartQty = 0 } = checkout;
    const stateUpdate = newState => {
        let { cart: newStateCart, undiscounted } = newState;
        setState({
            ...defaultState,
            cart: newStateCart,
            grossTotal: newState.grossTotal,
            appliedRules: newState.appliedRules,
            total: newState.total,
            undiscounted,
            cartQty: newState.cartQty
        });
    }
    const performUpdate = applyFunction => item => {
        applyFunction(item);
        let newState = updateCheckout(cart);
        stateUpdate(newState);

    };
    const updateByQty = applyFunction => (item, qty) => {
        applyFunction(item, qty);
        let newState = updateCheckout(cart);
        stateUpdate(newState);
    };
    const defaultState = {
        cart,
        internalCart,
        products,
        pricingRules,
        appliedRules,
        grossTotal,
        scan: performUpdate(scan),
        undiscounted,
        addByQuantity: updateByQty(addByQuantity),
        remove: performUpdate(remove),
        cartQty
    };

    let [state, setState] = useState(defaultState);
    return { state };
};
