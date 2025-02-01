import React from 'react';
import logo from '../../assets/logo.png';
import './Nav.css';

const Nav = () => {
	return (
		<div className="nav-container">
			<div className="nav-left">
				<img className="flash-logo" src={logo} alt="logo" />
				<p className="flash-logo-text">SpeedTyping</p>
			</div>
			<div className="nav-right">
				<a
					target="_blank"
					rel="noreferrer"
					className="github-link"
					href="https://github.com/YashCoderX"
				>
					@YashAgarwal
				</a>
			</div>
		</div>
	);
};

export default Nav;
