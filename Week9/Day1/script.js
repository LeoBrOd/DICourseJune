// // Exercise 1
// // Write a function that takea a number as an argument and returns a Promise
// // that tests if the value is less or greater than 10
// // value > 10 - resolve
// // value < 10 - reject
// // get the reasult from the Promise

// // Daniel
// function number(num) {
//   return new Promise((resolve, reject) => {
//     if (num > 10) {
//       resolve("Bigger than 10");
//     } else {
//       reject("Smaller than 10");
//     }
//   });
// }

// number(12)
//   .then((e) => {
//     console.log(e);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// // Exercise 2
// // Write two functions that use Promises that you can chain!
// // The first function, makeAllCaps(),
// // will take in an array of words and capitalize them,
// // and then the second function, sortWords(),
// // will sort the words in alphabetical order.
// // If the array contains anything but strings,
// // it should throw an error.

// // ['banna','apple','kiwi']

// // ['banna',32,'kiwi']

// // // function makeAllCaps(arr) {
// // //     arr.forEach(e => {
// // //         e=e.toUpperCase()
// // //     });
// // //     return arr
// // // }

// // // function sortWords(arr) {
// // //     return new Promise((resolve, reject) => {
// // //         const check = arr => arr.every(i => (typeof i === "string"))
// // //       if (num > 10) {
// // //         resolve("Bigger than 10");
// // //       } else {
// // //         reject("Smaller than 10");
// // //       }
// // //     });
// // //   }

// // //   number(12)
// // //     .then((e) => {
// // //       console.log(e);
// // //     })
// // //     .catch((e) => {
// // //       console.log(e);
// // //     })

// // Teacher example
// let words = ["banna", "apple", "kiwi"];
// let word2 = ["banna", 32, "kiwi"];

// const makeAllCaps = (arr) => {
//   return new Promise((res, rej) => {
//     let caps = arr.map((item) => {
//       if (typeof item === "string") {
//         return item.toUpperCase();
//       } else {
//         rej(
//           "Error, At least one item id not a string"
//         );
//       }
//     });
//     res(caps);
//   });
// };

// const sortWords = (arr) => {
//   return new Promise((res, rej) => {
//     if (arr) {
//       res(arr.sort());
//     } else {
//       rej("Error, can not sort");
//     }
//   });
// };
// makeAllCaps(words)
//   .then((res) => {
//     return sortWords(res);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// makeAllCaps(word2)
//   .then((res) => {
//     return sortWords(res);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// #5) Use Promise.all to fetch all of these people
// from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a
// catch block as well.
const urls = [
  "https://swapi.dev/api/people/1/",
  "https://swapi.dev/api/people/2/",
  "https://swapi.dev/api/people/3/",
];
// #6) Change one of your urls above to make it
// incorrect and fail the promise
// does your catch block handle it?

const getUrls = (arr) =>{

}

const myPromise = new Promise(function(resolve, reject) {
    const req = new XMLHttpRequest();
    req.open('GET', urls[0]);
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject("Error" + req.status);
      }
    };
    req.send();
    req.responseType='json'
  });
  
  myPromise.then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
  );