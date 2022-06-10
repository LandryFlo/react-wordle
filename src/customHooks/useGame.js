import { useState } from "react"

const useGame = (answer) => {
  const [gameTurn, setGameTurn] = useState(0)
  const [currentInput, setCurrentInput] = useState('')
  const [inputs, setInputs] = useState([...Array(6)])
  const [pastInputs, setPastInputs] = useState([])
  const [isCorrect, setIsCorrect] = useState(false)
  const [usedLetters, setUsedLetters] = useState({})

  const formattedUserInput = () => {
    let answerArr = [...answer]

    let formattedInput = [...currentInput].map((letter) => {
      return {key: letter, color: 'grey'}
    })

    formattedInput.forEach((letter, i) => {
      if(answerArr[i] === letter.key) {
        formattedInput[i].color = 'green'
        answerArr[i] = null
      }
    })

    formattedInput.forEach((letter, i) => {
      if(answerArr.includes(letter.key) && letter !== 'green') {
        formattedInput[i].color = 'yellow'
        answerArr[answerArr.indexOf(letter.key)] = null
      }
    })

    return formattedInput
  }

  const newUserInput = (inputFormatted) => {
    if(currentInput === answer) {
      setIsCorrect(true)
    }

    setInputs((prevInputs) => {
      let newInputs = [...prevInputs]
      newInputs[gameTurn] = inputFormatted
      return newInputs
    })

    setPastInputs((prevPastInputs) => {
      return [...prevPastInputs, currentInput]
    })

    setGameTurn((prevGameTurn) => {
      return prevGameTurn + 1
    })

    setUsedLetters((prevUsedLetters) => {
      let newLetters = {...prevUsedLetters}

      inputFormatted.forEach((letter) => {
        let color = newLetters[letter.key]

        if(letter.color === 'green'){
          newLetters[letter.key] = 'green'
          return
        }

        if(letter.color === 'yellow' && color !== 'green'){
          newLetters[letter.key] = 'yellow'
          return
        }

        if(letter.color === 'grey' && color !== 'green' && color !== 'yellow'){
          newLetters[letter.key] = 'grey'
          return
        }
      })

      return newLetters

    })

    setCurrentInput('')
  }


  const handlePress = ({key}) => {

    if(key === 'Enter') {

      if(gameTurn > 5) {
        return
      }

      if(pastInputs.includes(currentInput)){
        return
      }

      if(currentInput.length !== 5){
        return
      }

      const inputFormatted = formattedUserInput()
      newUserInput(inputFormatted)
    }

    if (key === 'Backspace') {
      setCurrentInput((prev) =>{
         return prev.slice(0, -1)
      })
      return
    }

    if(/^[A-Za-z]$/.test(key)){
      if(currentInput.length < 5) {
        setCurrentInput((prev) => {
          return prev + key
        })
      }
    }
  }

  return {gameTurn, currentInput, inputs, isCorrect, usedLetters, handlePress}

}

export default useGame
