let addressNumber = "98"
let addressStreet = "Emek Haula"
let country = "Israel"
let globalAddress = `I live in ${addressStreet} ${addressNumber}, in ${country}`
console.log(globalAddress);


let pets = ["cat", "dog", "fish", "rabbit", "cow"];
pets.push("horse");
pets.splice(3,1);
console.log(pets[1]);
console.log(pets);
console.log(pets.length)