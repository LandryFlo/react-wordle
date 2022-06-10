import React, { useEffect, useState } from 'react'
import useGame from '../customHooks/useGame'
import EndGameModal from './EndGameModal'
import GameGrid from './GameGrid'
import GameKeypad from './GameKeypad'

export default function Wordle({answer}) {
  const { currentInput, handlePress, inputs, isCorrect, gameTurn, usedLetters } = useGame(answer)
  const [endGame, setEndGame] = useState(false)


  useEffect(() => {
    window.addEventListener('keyup', handlePress)

    if(isCorrect){
      setTimeout(() => setEndGame(true), 2500)
      window.removeEventListener('keyup', handlePress)
    }

    if(gameTurn > 5) {
      setTimeout(() => setEndGame(true), 2500)
      window.removeEventListener('keyup', handlePress)
    }

    return () => window.removeEventListener('keyup', handlePress)
  }, [handlePress, isCorrect, gameTurn])

  return (
    <div>
      <GameGrid currentInput={currentInput} inputs={inputs} gameTurn={gameTurn} />
      <GameKeypad usedLetters={usedLetters} />
      {endGame && <EndGameModal isCorrect={isCorrect} gameTurn={gameTurn} answer={answer} />}
    </div>
  )
}
