// Exercise 1 : Location

const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// Answer will be - I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2: Display Student Info

function displayStudentInfo(objUser) {
  const { first, last } = objUser;
  return `Your full name is ${first} ${last}`;
}

console.log(
  displayStudentInfo({
    first: "Elie",
    last: "Schoppik",
  })
);

// Exercise 3: User & Id // didn't finish

const users = {
  user1: 18273,
  user2: 92833,
  user3: 90315,
};
const {} = users;

// Exercise 4 : Person Class

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);

// it will log - object

// Exercise 5 : Dog Class

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// I think it will be #3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
}

// Exercise 6 : Challenges

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

// [2] === [2] it will give us false
// {} === {} it will give us false

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number); // 4 cause we changed object1
console.log(object3.number); // 4 cause we changed object1
console.log(object4.number); // 5 it has it's own value of number, and it's different scope

class Animal {
  constructor(nameOfTheAnimal, type, color) {
    this.nameOfTheAnimal = nameOfTheAnimal;
    this.type = type;
    this.color = color;
  }
  sound() {
    return ` I'm a ${this.type}, named ${this.nameOfTheAnimal} and I'm ${this.color}`;
  }
}
class Mamal extends Animal {
  constructor(
    nameOfTheAnimal,
    type,
    color,
    soundOfTheAnimal
  ) {
    super(nameOfTheAnimal, type, color);
    this.soundOfTheAnimal = soundOfTheAnimal;
  }
  sound(soundOfTheAnimal) {
    return `${soundOfTheAnimal} I'm a ${this.type}, named ${this.nameOfTheAnimal} and I'm ${this.color}`;
  }
}
let cowLily = new Mamal(
  "Lily",
  "cow",
  "brown and white"
);
console.log(cowLily.sound("moooo"));
