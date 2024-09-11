import React from 'react'
import { useGlobalContext } from '../context'

const MainMenu=()=> {
	const { setGameState, filter, setFilter} = useGlobalContext();

    const onQuizFilterChange = (e)=>{
        setFilter(e.target.value);
        console.log(e.target.value);
    }

        return (
            <div className="container menu">
               <button className='btn' onClick={()=>setGameState("quiz")}>Start Quiz</button>
               <div className='category'>
                             <h2>Select Category:</h2>
               <select value={filter} aria-placeholder='category' onChange={onQuizFilterChange}>
                <option value="easy">Easy</option>
                <option value="difficult">Difficult</option>
               </select>
               </div>
            </div>
        )
}

export default MainMenu