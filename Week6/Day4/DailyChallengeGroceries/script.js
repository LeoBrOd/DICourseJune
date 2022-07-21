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
}
displayGroceries()

let cloneGroceries =() => {
let user = client
client = 'Betty'
let shopping = groceries;
groceries.totalPrice = "35$";
groceries.other.payed = false;
}

cloneGroceries()




