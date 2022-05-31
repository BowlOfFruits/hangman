import React from 'react';

const Popup = ({answer, guess, mistake, reset}) => {
    let finalMessage = "";
    let finalMessageRevealWord = "";
  
    if (guess.join("") == answer) {
      finalMessage = "Congratulations! You won! 😃";
    
    } 
    else if (mistake >= 6) {
        finalMessage = "Oh no! You lost. 😕"
        finalMessageRevealWord = `The word was: ${answer}`;
    }
  
    return (
      <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
        <div className="popup">
          <h2>{finalMessage}</h2>
          <h3>{finalMessageRevealWord}</h3>
          <button className='btn btn-info' onClick={reset}>Restart</button>
        </div>
      </div>
    )
  }
  
  export default Popup