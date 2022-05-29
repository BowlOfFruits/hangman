import React, { useEffect, useState } from 'react';
import './App.css';
import randomWord from './Words.js';
import Figure from './components/Figure.js'
import GuessedWord from './components/GuessedWord';
import Popup from './components/Popup.js'

function App() {
  const [mistake, setMistake] = useState(0);
  const [guessed, setGuessed] = useState([]);
  let answer = randomWord();

  const handleGuess = e => {
    let letter = e.target.value;
    setGuessed(currentLetters => [...currentLetters, letter]);
    setMistake(answer.includes(letter) ? answer + 0 : answer + 1);
  }


  const generateButtons = () => {
    return "abcdefghjklmnopqrstuvwxyz".split("").map(letter => (
      <button
        class='btn btn-lg btn-primary m-2'
        key={letter}
        value={letter}
        onClick={handleGuess}
        disabled={guessed.includes(letter)}
      >
        {letter}
      </button>
    ));
  }

  

  return (
    <>
      <div className="game-container">
        <Figure wrongCount={mistake} />
        <GuessedWord answer={answer} guessed={guessed} />
        <button>{generateButtons()}</button>
      </div>
      <Popup answer={answer} guess={guessed} mistake={mistake} />
    </>
  );
  
}

export default App;