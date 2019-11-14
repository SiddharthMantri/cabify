import React, { createContext } from 'react';
import './App.css';
import Checkout from './components/checkout';
import BulkDiscount from './data/BulkDiscount';
import TwoForOneDiscount from './data/TwoForOneDiscount';
import { products } from './data/products';
import { useCheckout } from './hooks/useCheckout';
import AppWrapper from './components/app-wrapper';


const bulkRule = new BulkDiscount("TSHIRT", 3, 1, products);
const twoRule = new TwoForOneDiscount("CAP", 2);

export const Context = createContext();

const Provider = ({ children }) => {
	const { state } = useCheckout({
		pricingRules: [bulkRule, twoRule],
		products
	});
	return <Context.Provider value={{ state }}>{children}</Context.Provider>;
};

function App() {
	return (
		<div className="App">
			<Provider>
				<AppWrapper />
			</Provider>
		</div>
	);
}

export default App;
