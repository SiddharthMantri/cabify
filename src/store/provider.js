import React from 'react';
import { useCheckout } from '../hooks/useCheckout';
import { Context } from './context';
import { setup } from './setup';
import { useModal } from '../hooks/useModal';
import PropTypes from 'prop-types';




const Provider = ({ children }) => {
    const { state } = useCheckout(setup);
    const [open, data, setOpen, setData] = useModal();
    let modal = { open, data, setOpen, setData };
    return (
        <Context.Provider value={{ state, modal }}>
            {children}
        </Context.Provider>
    );
};
Provider.propTypes = {
    children: PropTypes.node
}
export default Provider;