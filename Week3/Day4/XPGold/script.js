//Exercise 1
let lang = prompt("What language do you prefer to use?").toLowerCase()
switch (lang) {
    case "french":
        alert("Bonjour")
        break;
    case "english":
        alert("Hello")
        break;
    case "hebrew":
        alert("Shalom")
        break;
    default: alert("01110011 01101111 01110010 01110010 01111001")
        break;
}
//Exercise 2 
let grade = parseInt(prompt("Lets put your grade here..."))
switch (true) {
    case (grade>90):
        console.log("A");
        break;
    case (grade<=90) && (grade>80):
        console.log("B");
        break;
    case (grade<=80) && (grade>70):
        console.log("C");
        break;
    default:"D"
        break;
}

//Exercise 3
let word = prompt("Lets choose a verb...").toLowerCase()
let num = word.length
let suf = "ing" 
switch(true){
    case (!word.endsWith(suf) && (num>=3)):
        console.log(`${word}ing`);
        break;
    case (word.endsWith(suf) && (num>=3)):
        console.log(`${word}ly`);
        break;
    default: 
    console.log(word)}