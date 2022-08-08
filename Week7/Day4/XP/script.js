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
