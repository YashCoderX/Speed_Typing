import React from 'react';
import './TypingChallenge.css';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypeChallenge from '../TypeChallenge/TypeChallenge';

const TypingChallenge = ({
	selectedParagraph,
	words,
	characters,
	wpm,
	timeRemaining,
	timerStarted,
	testInfo,
	onInputChange,
}) => {
	return (
		<div className="typing-challenge-container">
			{/* Details Section */}

			<div className="details-container">
				{/* Words Typed */}
				<ChallengeDetailsCard cardName="Words" cardValue={words} />
				{/* Charaters Typed */}
				<ChallengeDetailsCard cardName="Characters" cardValue={characters} />
				{/* Speed */}
				<ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
			</div>
			{/* Actual Challenge */}
			<div className="typewriter-container">
				<TypeChallenge
					selectedParagraph={selectedParagraph}
					timeRemaining={timeRemaining}
					timerStarted={timerStarted}
					testInfo={testInfo}
					onInputChange={onInputChange}
				/>
			</div>
		</div>
	);
};

export default TypingChallenge;
