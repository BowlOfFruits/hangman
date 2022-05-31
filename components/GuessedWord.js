import React from 'react'

const GuessedWord = ({answer, guessed}) => {
    return (
        <div className="word">
            {answer.split("").map((letter, i) => {
                return (
                    <span className="letter" key={i}>
                        {guessed.has(letter) ? letter : ""}
                    </span>
                    
                )
            })}
        </div>
        
    )
}

export default GuessedWord
