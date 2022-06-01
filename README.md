# Hangman

## Introduction
This game allows you to revisit childhood memories through the game, Hangman.

## How to play
Currently, there 2 words, "pythonista" and "javascriptqweq". You may add more words in Words.js, in the "programming_languages" list. All lowercase letters to be used.

To play the game, open up terminal and type "npm start". You may type your guess using the keyboard on the screen, and the letters you guessed will disappear on the keyboard. 

If the letter is inside the word, it will appear on the screen. If not, the mistake count will increase by 1, which is shown on the top left hand corner. If there are 6 mistakes, a popup will appear and you can reset the game from there.

## Bugs
Letters of each guess are appended to the list, guessed. They are then joined together and used to check against the answer. So if the letters aren't guessed in order, the win condition will not be triggered. -> Can consider using a set instead of a list, and find another way to check against answer instead of joining them together

## Preview
![Desktop view](https://user-images.githubusercontent.com/98690678/170909307-b752899e-df10-4cfc-b714-2ac741ee9c56.PNG)
![win](https://user-images.githubusercontent.com/98690678/170909316-af6b2b1f-6fdf-48bc-886c-50d252e2d8c1.PNG)





