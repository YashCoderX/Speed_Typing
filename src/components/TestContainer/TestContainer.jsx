import React from 'react';
import './TestContainer.css';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallenge from '../TypingChallenge/TypingChallenge';

const TestContainer = ({
	selectedParagraph,
	words,
	characters,
	wpm,
	timeRemaining,
	timerStarted,
	testInfo,
	onInputChange,
	startAgain,
}) => {
	return (
		<div className="test-container">
			{timeRemaining > 0 ? (
				<div data-aos=" fade-up" className="typing-challenege-container">
					<TypingChallenge
						selectedParagraph={selectedParagraph}
						timeRemaining={timeRemaining}
						timerStarted={timerStarted}
						words={words}
						characters={characters}
						wpm={wpm}
						testInfo={testInfo}
						onInputChange={onInputChange}
					/>
				</div>
			) : (
				<div className="try-again-container">
					<TryAgain
						words={words}
						characters={characters}
						wpm={wpm}
						startAgain={startAgain}
					/>
				</div>
			)}
		</div>
	);
};

export default TestContainer;
