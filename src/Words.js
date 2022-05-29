var programming_languages = [
	"pythonista",
	"javascript",
]

function randomWord() {
  return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}

export default randomWord 
