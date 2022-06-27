let firstWord = "Scva"
let secondWord = "Jaript"
let newFirstWord = firstWord.replace(firstWord.substring(0,2),secondWord.substring(0,2))
let newSecondWord = secondWord.replace(secondWord.substring(0,2),firstWord.substring(0,2))
let result = newFirstWord.concat(" ", newSecondWord)
console.log(result)
