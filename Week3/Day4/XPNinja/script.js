//Exercise 1
let fBday = parseInt(prompt("Choose 1st person birth year..."))
let sBday = parseInt(prompt("Choose 2nd person birth year..."))
let fAge = (year)=> fBday-year
let sAge = (year)=> sBday-year
if (fBday<sBday) { 
   let curYear = sBday
   for (curYear; (sAge(curYear)*2!==(fAge(curYear))); curYear++) {}
   console.log(curYear);
} else {
   let curYear = fBday
   for (curYear; (fAge(curYear)*2!==(sAge(curYear))); curYear++) {}
   console.log(curYear);
}

//Exercise 2/2
let zipCode = prompt("Put your zipcode please...")
function checkIf(zipCode){
   for (let i = zipCode.length - 1; i >= 0; i--) {
     let codeValue = zipCode.charCodeAt(i);
     if (codeValue=Number) 
     alert("success")
   }
   alert("error")
 }

//Exercise 2/2
let zipCode = prompt("Put your zipcode please...")
if (zipCode.length=5 && zipCode.match(/^[0-9]+$/)) {
   alert("success");
}
else {
   alert("error");
}

//Exercise 3
let secretWord = prompt("Please select a word...")
console.log(secretWord.replaceAll(/[aeiou]/g , ""));
let newSecretWord = secretWord.replace(/[aeiou]/g ,replacement => ({'a':1, 'e':2, 'i':3, 'o':4, 'u':5 })[replacement])
console.log(newSecretWord);
