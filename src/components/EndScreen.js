import React from 'react'
import { useGlobalContext } from '../context'
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";

const EndScreen=()=> {
	const { score, setScore, setGameState, questionArray } = useGlobalContext();
	const restartQuiz =()=>{
		setScore(0);
		setGameState('menu');
	}

        return (
            <div className="endscreen container">
                <h1>Quiz Finished</h1>           
                <h3> {score} / {questionArray.length}</h3>
                <p><span>{ score > 3 ? "You're doing well! Winner" : "You lose! Try again"}</span></p>
                <div>
                   { score > 3 ? <IoMdThumbsUp /> : <IoMdThumbsDown /> } 
                </div>
                <button className='btn end-btn' onClick={restartQuiz}>Restart Quiz</button>
            </div>
        )
}

export default EndScreen