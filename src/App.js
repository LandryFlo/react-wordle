import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'

function App() {

  const gameAnswers = [
    {"id": 1, "word": "focus"},
    {"id": 2, "word": "group"},
    {"id": 3, "word": "heart"},
    {"id": 4, "word": "issue"},
    {"id": 5, "word": "japan"},
    {"id": 6, "word": "level"},
    {"id": 7, "word": "money"},
    {"id": 8, "word": "motor"},
    {"id": 9, "word": "north"},
    {"id": 10, "word": "paper"},
    {"id": 11, "word": "pilot"},
    {"id": 12, "word": "press"},
    {"id": 13, "word": "prize"},
    {"id": 14, "word": "river"},
    {"id": 15, "word": "shape"}
  ]
  const [answer, setAnswer] = useState(null)
  const randomAnswer = gameAnswers[Math.floor(Math.random()*gameAnswers.length)]
  
  useEffect(() => {
    setAnswer(randomAnswer.word)
  }, [setAnswer, randomAnswer])

  return (
    <div className="App">
      <h1>Wordle</h1>
      {answer && <Wordle answer={answer} />}
    </div>
  )
}

export default App
