import React, { Fragment, useContext } from "react";
import { Context } from "../../App";


const Checkout = props => {
  const { state } = useContext(Context);

  const { scan, cart, internalCart, grossTotal, undiscounted } = state;

  const addItem = code => e => {
    scan(code);
  };

  return (
    <Fragment>
      <div>items in cart: {cart.length}</div>
      <div>{cart.map(c => `${c.code} | ${c.price} ,`)}</div>
      <div>{internalCart.map(c => `${c.code} | ${c.price} ,`)}</div>
      <div>
        <button onClick={addItem("TSHIRT")}>Add Tee to cart</button>
        <button onClick={addItem("CAP")}>Add Cap to cart</button>
      </div>
      <div>Total cost: {grossTotal}</div>
      <div>Undiscounted: {undiscounted}</div>
    </Fragment>
  );
};
export default Checkout;
