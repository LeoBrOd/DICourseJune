
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
switch(true) {
case (num>2 && num%2 === 0 && num% 5 === 0): 
str.replace("oo", (letter.repeat(num))).toUpperCase()+"!"
break
case (num>2 && num%2 === 0):
str.replace("oo", (letter.repeat(num)))+"!"
break
case (num>2 && num% 5 === 0): 
str.replace("oo", (letter.repeat(num))).toUpperCase()
break
case (num>2): 
str.replace("oo", (letter.repeat(num)))
break
default: str
}


[str.slice(0, 1), letter.repeat(num), str.slice(2)].join('')
num>2 
? str.replace("oo", (letter.repeat(num)))
: str
num% 2 === 0 
? str+"!"
: num% 5 === 0
? str.toUpperCase()
: str.toUpperCase()+"!"