import React from 'react'

const GuessedWord = ({answer, guessed}) => {
    return (
        <div className="word">
            {guessed.map(letter => {
                return (
                    <span className="letter">
                        {answer.includes(letter) ? letter : ""}
                    </span>
                    
                )
            })}
        </div>
        
    )
}

export default GuessedWord
