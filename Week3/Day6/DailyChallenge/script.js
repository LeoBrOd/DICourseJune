// Exercise 1
for (let i = 0; i <= 6; i++) {
    console.log("* ".repeat(i));
}

// Exercise 1 Version 2
for (let i = 0; i <= 6; i++) {
    for (let n = 0; n < i; n++) {
        star += "* " 
    }
    star +="\n"
}
console.log(star);

// Exercise 1
for (let i = 0; i <= 6; i++) {
    for (let n = 6; n > i; n--) {
        star += "* " 
    }
    star +="\n"
}
console.log(star);

// Exercise 2 Version 1 
const numbers = [5,0,9,1,7,4,2,6,3,8]
let arr = numbers.toString()
let arr2 = numbers.join("")
numbers.sort()
numbers.reverse()
console.log(numbers);

// Exercise 2 Version 2
const numbers = [5,0,9,1,7,4,2,6,3,8]
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
    if (numbers[j]>numbers[j+1]) {
        let newArr = numbers[j]
        numbers[j] = numbers[j+1]
        numbers[j+1] = newArr
    }
}}
console.log(numbers);

