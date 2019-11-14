import React, { Fragment } from 'react';
import Summary from '../summary';
import ShoppingCart from '../shopping-cart';



const AppWrapper = props => {
    return (
        <Fragment>
            <ShoppingCart />
            <Summary />
        </Fragment>
    )
}
export default AppWrapper;