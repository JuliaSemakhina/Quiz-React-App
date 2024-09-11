import React from 'react'
import MainMenu from './components/MainMenu'
import EndScreen from './components/EndScreen'
import Quiz from './components/Quiz'
import { useGlobalContext } from './context'

function App() {
  const { gameState } = useGlobalContext();
  
  return (
    <div className="app">
      <h1>Quiz App</h1>
      {gameState === 'menu' && <MainMenu />}
      {gameState === 'quiz' && <Quiz />}
      {gameState === 'endscreen' && <EndScreen />}
    </div>
  )
}

export default App