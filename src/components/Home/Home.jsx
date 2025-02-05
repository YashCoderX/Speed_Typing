import React from 'react';
import './Home.css';
import flash from './../../assets/flash.png';
import TypeWriter from 'typewriter-effect';

const Home = () => {
	return (
		<div className="home-container">
			<div data-aos="fade-right" className="home-left">
				<h1 className="home-header">Can you type...</h1>
				<div className="typewrite-container">
					<TypeWriter
						options={{
							strings: ['Fast?', 'Correct?', 'Quick?'],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
			</div>
			<div className="home-right">
				<img
					data-aos="fade-left"
					className="flash-image"
					src={flash}
					alt="hero"
				/>
			</div>
		</div>
	);
};

export default Home;
