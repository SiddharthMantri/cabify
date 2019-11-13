import React, { Fragment, useEffect, useState } from "react";
import BulkDiscount from "../../data/BulkDiscount";
import TwoForOneDiscount from "../../data/TwoForOneDiscount";
import { products } from "../../data/products";
import { useCheckout } from "../../hooks/useCheckout";

const bulkRule = new BulkDiscount("TSHIRT", 3, 1, products);
const twoRule = new TwoForOneDiscount("CAP", 2);

const Checkout = props => {
  let [cart, scan, total, reset] = useCheckout([bulkRule, twoRule]);
  const addToCart = e => {
    scan("TSHIRT");
  };
  const addCap = e => {
    scan("CAP");
  };
  const resetCart = e => {
    reset();
  };
  return (
    <Fragment>
      <div>items in cart: {cart.length}</div>
      <div>{cart.map(c => `${c.price} ,`)}</div>
      <div>
        <button onClick={addToCart}>Add Tee to cart</button>
        <button onClick={addCap}>Add Cap to cart</button>
      </div>
      <div>Total cost: {total}</div>
      <button onClick={resetCart}>Reset</button>
    </Fragment>
  );
};
export default Checkout;
