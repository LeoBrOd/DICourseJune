//Exercise1
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift()
fruits.sort()
fruits.push("kiwi")
fruits.splice(0,1)
fruits.reverse()
console.log(fruits)

//Exercise2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let citrus = moreFruits[1][1][0]
console.log(citrus);
