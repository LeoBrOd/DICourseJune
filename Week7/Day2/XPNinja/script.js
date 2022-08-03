// Exercise 1 : Dog Competition
const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Cuty",
    age: 5,
    type: "rabbit",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
  {
    name: "Rex",
    age: 10,
    type: "dog",
  },
];

// data.forEach(e => {
//     if (e.type==="dog") {
//         e.age=+e.age
//         console.log(e.age);
//     }
// });
const filter = data.filter(
  (item) => item.type === "dog"
);
console.log(filter);
const sumDogAge = filer.reduce(
  (total, item) => total + item.age,
  0
);
console.log(sumDogAge);

// Exercise 2 : Email

const userEmail3 =
  " cannotfillemailformcorrectly@gmail.com ";
userEmail3.trim();
console.log(userEmail3);

// Exercise 3 : Employees #3

// Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.
// Example: { 'Bradley Bouley': 'Full Stack Resident' }
// Hint: Step one, create an empty object.

let users = [
  {
    firstName: "Bradley",
    lastName: "Bouley",
    role: "Full Stack Resident",
  },
  {
    firstName: "Chloe",
    lastName: "Alnaji",
    role: "Full Stack Resident",
  },
  {
    firstName: "Jonathan",
    lastName: "Baughn",
    role: "Enterprise Instructor",
  },
  {
    firstName: "Michael",
    lastName: "Herman",
    role: "Lead Instructor",
  },
  {
    firstName: "Robert",
    lastName: "Hajek",
    role: "Full Stack Resident",
  },
  {
    firstName: "Wes",
    lastName: "Reid",
    role: "Instructor",
  },
  {
    firstName: "Zach",
    lastName: "Klabunde",
    role: "Instructor",
  },
];

// Exercise 4 : Array To Object
// Instructions
// Using this array const letters = ['x', 'y', 'z', 'z'];

// Use a for loop to get this output { x: 1, y: 1, z: 2 };
// Use the reduce() method to get this output { x: 1, y: 1, z: 2 };
