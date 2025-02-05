import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				{/* {Nav section} */}
				<Nav />

				{/* {Landing section} */}
				<Home />

				{/* {Challenge section} */}

				{/* {Footer section} */}
			</div>
		);
	}
}

export default App;
