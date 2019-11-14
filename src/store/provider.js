import React from 'react';
import { useCheckout } from '../hooks/useCheckout';
import { Context } from './context';
import { setup } from './setup';





const Provider = ({ children }) => {
	const { state } = useCheckout(setup);
	return (
        <Context.Provider value={{ state }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;