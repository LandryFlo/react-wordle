import React from 'react'

export default function GameRow({input, currentInput}) {

  if(input) {
    return (
      <div className='gridrow old'>
        {input.map((letter, i) => (
          <div key={i} className={letter.color}>{letter.key}</div>
        ))}
      </div>
    )
  }

  if(currentInput) {
    let inputLetters = currentInput.split('')

    return (
      <div className='gridrow new'>
        {inputLetters.map((letter, i) => (
          <div key={i} className="full">{letter}</div>
        ))}
        {[...Array(5 - inputLetters.length)].map((value, index) => (
          <div key={index}></div>
        ))}
      </div>
    )
  }
  
  return (
    <div className='gridrow'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
