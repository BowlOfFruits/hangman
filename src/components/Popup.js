import React, { useEffect } from 'react';

const Popup = ({answer, guess, mistake}) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
  
    if (guess.join("") === answer) {
      finalMessage = "Congratulations! You won! 😃";
    
    } 
    else if (mistake >= 6) {
        finalMessage = "Oh no! You lost. 😕"
        finalMessageRevealWord = "The word was: ${answer}";
    }
  
    return (
      <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
        <div className="popup">
          <h2>{finalMessage}</h2>
          <h3>{finalMessageRevealWord}</h3>
        </div>
      </div>
    )
  }
  
  export default Popup