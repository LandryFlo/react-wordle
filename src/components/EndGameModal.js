import React from 'react'

export default function EndGameModal({isCorrect, gameTurn, answer}) {
  return (
    <div className='gameModal'>
      {isCorrect && (
        <div>
          <h1>Congratulations, you have won !!!!</h1>
          <p className="answer">{answer}</p>
          <p>You found the solution in {gameTurn} tries 🥳</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>oops! you have reached the maximum number of attempts 🤦‍♂️</h1>
          <p>The right answer was <span className="answer">{answer}</span></p>
        </div>
      )}

    </div>
  )
}
