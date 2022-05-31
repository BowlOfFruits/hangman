import React, { useState } from 'react';
import './App.css';
import randomWord from './Words.js';
import Figure from './components/Figure.js'
import GuessedWord from './components/GuessedWord';
import Popup from './components/Popup.js'

function App() {
  const [mistake, setMistake] = useState(0);
  const [guessed, setGuessed] = useState([]);
  const [answer, setAnswer] = useState(randomWord());

  const handleGuess = e => {
    let letter = e.target.value;
    setGuessed(guessed.add(letter));
    setMistake(answer.includes(letter) ? mistake + 0 : mistake + 1);
  }

  const resetButton = () => {
    setMistake(0);
    setGuessed([]);
    setAnswer(randomWord());
  }


  const generateButtons = () => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button
        class='btn btn-lg btn-primary m-2'
        key={letter}
        value={letter}
        onClick={handleGuess}
        disabled={guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  return (
    <>
      <div className="game-container">
        <h1 className="text-center">Hangman</h1>
        <div className="float-right">Word Length: {answer.length}</div>
        <div className="float-right">Wrong Guesses: {mistake} of 6</div>
        <Figure wrongCount={mistake} />
        <GuessedWord answer={answer} guessed={guessed} />
        <button>{generateButtons()}</button>
      </div>
      <Popup answer={answer} guess={guessed} mistake={mistake} reset={resetButton} />
    </>
  );
  
}

export default App;