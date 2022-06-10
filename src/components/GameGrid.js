import React from 'react'
import GameRow from './GameRow'

export default function GameGrid({currentInput, inputs, gameTurn}) {
  return (
    <div>
      {inputs.map((input, i) => {
        if(gameTurn === i) {
          return <GameRow key={i} currentInput={currentInput} />
        }
        return <GameRow key={i} input={input} />
      })}
    </div>
  )
}
