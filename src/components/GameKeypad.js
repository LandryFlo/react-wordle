import React from 'react'

export default function GameKeypad({usedLetters}) {

  const letters =  [
    {"key": "a"},
    {"key": "b"},
    {"key": "c"},
    {"key": "d"},
    {"key": "e"},
    {"key": "f"},
    {"key": "g"},
    {"key": "h"},
    {"key": "i"},
    {"key": "j"},
    {"key": "k"},
    {"key": "l"},
    {"key": "m"},
    {"key": "n"},
    {"key": "o"},
    {"key": "p"},
    {"key": "q"},
    {"key": "r"},
    {"key": "s"},
    {"key": "t"},
    {"key": "u"},
    {"key": "v"},
    {"key": "w"},
    {"key": "x"},
    {"key": "y"},
    {"key": "z"}
  ]

  return (
    <div className='gamekeypad'>
      {letters.map((letter) => {
        const letterColor = usedLetters[letter.key]
        return (
          <div key={letter.key} className={letterColor}>{letter.key}</div>
        )
      })}
    </div>
  )
}
