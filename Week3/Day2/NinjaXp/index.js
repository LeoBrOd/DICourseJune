
// Exercise1
5 >= 1  // true
0 === 1 // false
4 <= 1  // false
1 != 1  // false
"A" > "B"   // false
"B" < "C"   // false
"a" > "A"   // false
"b" < "A"   // false
true === false // false
true != true // false

//Exercise2
let array = []
function sum(){
    for (i=num; i++)
    if(i % divisor === 0)
    {array.push(i)}
    return i}
isDivisible(23)
console.log(array)
console.log(array.reduce((a, b) => a + b, 0))

// Exercise3
let sentences = prompt("Put your sentences...").toLowerCase()
for (let i = 0; i < sentences.length; i++) {
    if (sentences.indexOf("nemo")>=0) {console.log(`I found Nemo at ${(sentences.indexOf("nemo")+1)}`)
         }
    else{ console.log("I can`t find Nemo")
    }
}

// Exercise4
let num = parseInt(prompt("Choose your number..."))
let str = "Boom"
let letter = "o"
switch(num) {
case num>2: str.replace("0")
break
default: str
}
