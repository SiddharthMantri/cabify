import React from 'react';
import './App.css';
import AppWrapper from './components/app-wrapper';
import Provider from './store/provider';

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
