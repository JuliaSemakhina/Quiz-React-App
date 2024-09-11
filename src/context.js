import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
 const [gameState, setGameState] = useState("menu");
 const [filter, setFilter] = useState("easy");
 const [score, setScore] = useState(0);
 const [questionArray, setQuestionArray] = useState(0);

  return (
  <AppContext.Provider 
  value={{ gameState,
    setGameState,
    score,
    setScore,
    setFilter,
    filter,
    setQuestionArray,
    questionArray
   }}
   >
  {children}
  </AppContext.Provider>
  )
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }