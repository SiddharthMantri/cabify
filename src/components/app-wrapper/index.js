import React, { Fragment, useContext } from 'react';
import Summary from '../summary';
import ShoppingCart from '../shopping-cart';
import Modal from '../modal';
import { Context } from '../../store/context';



const AppWrapper = props => {
    const { modal: { open = false } } = useContext(Context);
    return (
        <Fragment>
            {!open ?
                <Fragment>
                    <ShoppingCart />
                    <Summary />
                </Fragment>:
                <Modal />
            }
        </Fragment>
    )
}
export default AppWrapper;