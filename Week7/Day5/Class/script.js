// Task 1
// create a function called pangram - get the sentence as an input
// A pangram is a sentence that contains all the letter of tha alphabet

// return true/pangram if the sentense contains all
// rturn false/not pangram if not
// "The quick brown fox jumps over the lazy dog"
// "We promptly judged antique ivory buckles for the prize"

const pangram = (s) => {
    let alphabet = "abcdefghijklmnopqrstuvyxyz";
    let lowercase = s.toLowerCase().split(' ').join('');
    for(let i = 0; i < alphabet.length; i++){
      if(lowercase.indexOf(alphabet[i]) === -1){
        return 'not pangram' // false
      }
    }
    return 'pangram' // true
  }
console.log(pangram("The quick brown fox jumps over the lazy dog"));
console.log(pangram("We promptly judged antique ivory buckles for the prize"));

