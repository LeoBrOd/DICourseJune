let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let displayGroceries = () => {
    groceries.fruits.forEach(e => {
        console.log(e);
    });
    //groceries.fruits.forEach(console.log)
}
//displayGroceries()

let cloneGroceries =() => {
let user = client
client = 'Betty'
console.log(user);
let shopping = groceries;
groceries.totalPrice = "35$";
groceries.other.payed = false;
console.log(shopping);
}

cloneGroceries()




