import React, { useState, useEffect } from 'react'
import { Questions } from '../data'
import { useGlobalContext } from '../context'
import { motion } from "framer-motion";

const Quiz = () => {
	const { score, setScore, setGameState, filter, setQuestionArray } = useGlobalContext();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [activeButton, setActiveButton] = useState(null);
	const [questions, setQuestions] = useState(null);

	const filteredQ = Questions.filter((quest) => quest.difficulty === filter);

	let questionText = filteredQ[currentQuestion].promt;
	let choices = filteredQ[currentQuestion].answerOptions;

	useEffect(() => {
		const shuffledQuestions = shuffle(choices);
		setQuestions(shuffledQuestions);
	}, [choices]);

	const shuffle = (arr) => {
		let i = arr.length;
		while (--i > 0) {
			let randIndex = Math.floor(Math.random() * (i + 1));
			[arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
		}
		return arr;
	};

	const containers = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.4,
				staggerChildren: 0.2
			}
		}
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1
		}
	};

	const nextQuestion = () => {
		setCurrentQuestion(currentQuestion + 1);
		setActiveButton(null);
	}

	const finishQuiz = () => {
		setGameState("endscreen")
		setQuestionArray(filteredQ)
	}

	const correctAnswer = (answer, id) => {
		if (answer === true) {
			setScore(score + 1);
		}
		setActiveButton(id);
	}

	return (
		<div className="quiz container">
			<div className='title'>
				<h2>Question <span>{currentQuestion + 1}</span> / {filteredQ.length}</h2>
			</div>
			<h2>{questionText}</h2>
			<motion.div className='options containers'
				variants={containers}
				initial="hidden"
				animate="visible"
			>
				{choices.map((answerOption, index) => (
					<motion.button
						variants={item}
						disabled={activeButton === answerOption.id ? true : false}
						className={activeButton === answerOption.id && answerOption.isCorrect === false ? 'incorrect item' : activeButton === answerOption.id ? "correct item" : ""}
						key={index++}
						onClick={() => correctAnswer(answerOption.isCorrect, answerOption.id)
						}
					>{answerOption.optionText}</motion.button>
				))}

				{currentQuestion === filteredQ.length - 1 ? (
					<button disabled={activeButton === null} className='btn end-btn' onClick={finishQuiz}>Finish Quiz</button>
				) :
					(<button disabled={activeButton === null} className='btn end-btn' onClick={nextQuestion}>Next Question</button>
					)}
			</motion.div>
		</div>
	)
}

export default Quiz

