import React from 'react';
import './TypeChallenge.css';
import TestLetter from '../TestLetter/TestLetter';

const TypeChallenge = ({
	timeRemaining,
	timerStarted,
	testInfo,
	onInputChange,
}) => {
	console.log('Test info', testInfo);
	return (
		<div className="typing-challenge">
			<div className="timer-container">
				<p className="timer">
					00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
				</p>
				<p className="timer-info">
					{!timerStarted && 'Start typing to start the test'}
				</p>
			</div>
			<div className="textarea-container">
				<div className="textarea-left">
					<div className="textarea test-paragraph">
						{testInfo.map((individualLetterInfo, index) => {
							return (
								<TestLetter
									key={index}
									individualLetterInfo={individualLetterInfo}
								/>
							);
						})}
					</div>
				</div>
				<div className="textarea-right">
					<textarea
						onChange={(e) => onInputChange(e.target.value)}
						className="textarea"
						placeholder="Start typing here"
					></textarea>
				</div>
			</div>
		</div>
	);
};

export default TypeChallenge;
