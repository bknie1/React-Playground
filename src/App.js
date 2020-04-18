import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rando from './Rando';

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<h1>React Playground</h1>
				<Rando maxNum={7} />
			</div>
		</div>
	);
}

export default App;
