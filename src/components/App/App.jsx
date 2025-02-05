import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

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
				<Footer />
			</div>
		);
	}
}

export default App;
