// Exercise 1 : Nested Functions

// let landscape = function () {
//   let result = "";

//   let flat = function (x) {
//     for (let count = 0; count < x; count++) {
//       result = result + "_";
//     }
//   };

//   let mountain = function (x) {
//     result = result + "/";
//     for (
//       let counter = 0;
//       counter < x;
//       counter++
//     ) {
//       result = result + "'";
//     }
//     result = result + "\\";
//   };

//   flat(4);
//   mountain(4);
//   flat(4);

//   return result;
// };

// landscape();

// 1. I think it will show us ____/''''\\____ Cause it will execute three functions one after another and after return result of all together

// 2

landscape = () => {
  let result = "";

  flat = (x) => {
    for (let count = 0; count < x; count++) {
      result = result + "_";
    }
  };

  mountain = (x) => {
    result = result + "/";
    for (
      let counter = 0;
      counter < x;
      counter++
    ) {
      result = result + "'";
    }
    result = result + "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

landscape();

// Exercise 2 : Closure

const addTo = (x) => (y) => x + y;
let addToTen = addTo(10);
addToTen(3);

// I thought it would be undefined, but actual ahswer is 13

// Exercise 3 : Currying

const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);

// I think that answer is 31

// Exercise 4 : Currying

const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12);

// I think that answer is 17

// Exercise 5 : Composing

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);

// if I understand well then answer gonna be 16
