// Exercise 1 / Part 1
function infoAboutMe() {
  console.log("Hi, my name is Leonid and i like this course")
}
infoAboutMe()

// Exercise 1 / Part 2
function infoAboutPerson(personName, personAge, personFavoriteColor)
{console.log(` Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`)};
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

// Exercise 2
function calculateTip(){
    let bill = Number(prompt("what's summ of your bill?"))
    let tip = 0 
    switch (true) {
        case (bill>50 & bill<200):
             tip = bill*0.15
        break;
        case (bill>50):
            tip = bill*0.1
        break;
        default:
            tip = bill*0.2
        break;
        }
    console.log(`Bill = ${bill},tip = ${tip}, Total Bill Amount = ${bill+tip}`);
    }
calculateTip()


// Exercise 3
let array = []
function isDivisible(divisor){
    for(i=divisor; i<=500; i++)
    if(i % divisor === 0)
    {array.push(i)}
    return i}
isDivisible(23)
console.log(array)
console.log(array.reduce((a, b) => a + b, 0))

// Exercise 4
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  
let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana", "orange","apple"]

function myBill(){
    let sum = []
for (let i = 0; i < shoppingList.length; i++) {
       if (shoppingList[i] in stock) {
            if (stock[shoppingList[i]]>0){
                sum.push(prices[shoppingList[i]])
                stock[shoppingList[i]]=stock[shoppingList[i]]-1
            };
        }
    }
    console.log(sum.reduce((a, b) => a + b, 0));
    console.log(stock);
}
myBill()


// Exercise 5
let change = [0.25, 0.10, 0.05, 0.01]
function changeEnough(itemPrice, amountOfChange) {
    for (let i = 0; i < change.length; i++) {
        amountOfChange[i]=amountOfChange[i]*change[i]
    }
    if (itemPrice < amountOfChange.reduce((a, b) => a + b, 0)) {
        return true
    } 
    else 
    {return false}
}
changeEnough(4.25, [25, 20, 5, 0])
changeEnough(14.11, [2,100,0,0])
changeEnough(0.75, [0,0,20,5])

// Exercise 6
function hotelCost() {
    let req = Number(prompt("How many nights would you like to stay in the hotel? "))
    return !isNaN(req)
    ? `${req*140}$`
    : hotelCost()
}
function planeRideCost() {
    let req2 = prompt("Where do you wanna go? ").toLowerCase()
   if (/^[a-z]+$/i.test(req2)) {
        switch (true) {
            case req2 == "london":
            return "183$"
            case req2 == "paris":
            return "220$"
            default:
            return "300$" 
        }
   } 
   else {
       planeRideCost()
   } 
}
let car = 40
function rentalCarCost() {
    let req3 = Number(prompt("How many days would you like to rent tthe car? "))
    switch (true) {
        case !isNaN(req3)>10:
            return `${(0.95*req3*car).toFixed(2)}$`
        case !isNaN(req3)<=10:
            return `${req3*car}$`
        default:
            rentalCarCost()
            break;
    }
}
function totalVacationCost() {
   console.log( `The car cost: ${hotelCost()} 
The hotel cost: ${planeRideCost()}
The plane tickets cost: ${rentalCarCost()}`)
}

totalVacationCost()
