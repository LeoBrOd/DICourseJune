let sentence = prompt("What`s your opinion?");
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
if (wordBad > wordNot){
    let res = sentence.replace(sentence.slice(wordNot,wordBad+3), "good")
    console.log(res);
}
else {
    console.log(sentence);
}