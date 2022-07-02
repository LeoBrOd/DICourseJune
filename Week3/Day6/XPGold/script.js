//Exerciuse 1
let numbers = [123, 8409, 100053, 333333333, 7]
for (let i = 0; i < numbers.length; i++) {
numbers[i]%3===0
?console.log("true")
:console.log("false")
}

//Exercise 2
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
  let studentName = prompt("Please input your name ... ").toLowerCase()
if (studentName in guestList) {
    console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`);
} else {
    console.log("Hi! I'm a guest.");
}

//Exercise 3
let age = [20,5,12,43,98,55];
let sum=0
for (let i = 0; i < age.length; i++){
sum += age[i]
}
console.log(sum);

for (let i = 0; i < age.length; i++) {
if (age[i]>age[i-1]) {
    max=age[i]}
}
console.log(max);
