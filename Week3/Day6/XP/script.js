//Exercise 1 Part 1
let people = ["Greg", "Mary", "Devon", "James"];
people.shift()
people.splice(2, 1, "Jason")
people.push("Leo")
console.log(people.indexOf("Mary"));
console.log(people.slice(1));
console.log(people.indexOf("Foo"))
let last = people[(people.length)-1]
console.log(last);

//Exercise 1 Part 2
people.forEach(i => 
    console.log(i)
    )

for (let i = 0; i <=people.indexOf("Jason"); i++) {
    console.log(people[i]); 
}
let search = ""
i=0
do {
    i+= 1
    search = people[i]
} while (search !=="Jason");
console.log(search);

//Exercise 2
let colors = ["green", "white", "blue", "red", "purple"]
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i+1} choice is ${colors[i]}`);  
}
let suf = ["st", "nd", "rd", "th", "th"]
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i+1}${suf[i]} choice is ${colors[i]}`);  
}

//Exercise 3
    do {
        question = parseInt(prompt("Please choose number..." ))
    } while (question<10 || isNaN(question));
    console.log(question);

// Exercise 4
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
let floors = Object.keys(building.numberOfAptByFloor) 
console.log(building.numberOfFloors);
console.log(`${floors[0]} - ${building.numberOfAptByFloor.firstFloor} apt, ${floors[2]} - ${building.numberOfAptByFloor.thirdFloor} apt`);
console.log(`Second tenant is ${building.nameOfTenants[1]} and he has ${building.numberOfRoomsAndRent.dan[0]} rooms`)

if (building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]>
    building.numberOfRoomsAndRent.dan[1]) { building.numberOfRoomsAndRent.dan[1] = 1200
}
console.log(building.numberOfRoomsAndRent.dan[1]);

//Exercise 5
let family = {
    dad: [1959, "painting"],
    mom: [1960, "music"],
    sun: [1991, "travelling"]
}

let keys = Object.keys(family)
for (let i = 0; i < keys.length; i++) {
    const element = keys[i];
    console.log(element);
}
let values = Object.values(family)
for (let i = 0; i < values.length; i++) {
    const element = values[i];
    console.log(element);
}

//Exercise 6
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  let detKeys = Object.keys(details)
  let detValues = Object.values(details)
  for (let i = 0; i < detValues.length; i++) {
  console.log(`${detKeys[0]} ${detValues[0]} ${detKeys[1]} ${detValues[1]} ${detKeys[2]} ${detValues[2]}`);
  }

// Exercise 7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"].sort()
let secretWord = names.map((firstLetter) =>firstLetter[0]).join("")
console.log(secretWord);