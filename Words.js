var programming_languages = [
	"pythonista",
	"javascriptqweq",
]

function randomWord() {
  return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}

export default randomWord 
