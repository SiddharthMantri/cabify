import { useState } from "react";
import Checkout from "../models/Checkout";

export const useCheckout = (initData = {}) => {
    /**
     * Initializes the Checkout class with initial data of pricingRules and products
     */
    const checkout = new Checkout(initData);

    //Destructuring the checkout clas to create a local state

    const { cart = {}, internalCart = {}, products = {}, pricingRules = {}, appliedRules = {}, grossTotal = 0, scan = () => { }, updateCheckout = () => { }, undiscounted, addByQuantity, remove, cartQty = 0 } = checkout;

    /**
     * 
     * @param  newState 
     * Function that updates state and the hook to the provider
     */

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
    /**
     * Currying the scan function to update an item in the cart
     */
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

    /**
     * Setting initial state
     */
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

    /**
     * Creatingn initial state hook
     */

    let [state, setState] = useState(defaultState);
    return { state };
};
