// generateButton = document.getElementById(
//   "generateButton"
// );

const arr = [
  {
    id: 0,
    author: "William James",
    quote:
      "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",
  },
  {
    id: 1,
    author: "Will Rogers",
    quote:
      "Even if you are on the right track, you will get run over if you just sit there.",
  },
  {
    id: 2,
    author: "Winston Churchill",
    quote:
      "Courage is the first of human qualities because it is the quality which guarantees all others.",
  },
];

let currentIndex = 0;
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * max + min);
};
const uniqueIndex = (arr, previousIndex) => {
  let newIndex;
  do {
    newIndex = generateRandomNumber(
      0,
      arr.length
    );
  } while (newIndex === previousIndex);
  return newIndex;
};
generateButton.addEventListener("click", (e) => {
  currentIndex = uniqueIndex(arr, currentIndex);
  let quote = arr[currentIndex].quote;
  let author = arr[currentIndex].author;
  document.getElementById("quote").innerHTML =
    quote;
  document.getElementById("author").innerHTML =
    author;
  console.log(currentIndex);
});

let newObjectFromInput = {};

submit.addEventListener("submit", (e) => {
  e.preventDefault(); // stop reload
  newObjectFromInput.id = arr.length;
  newObjectFromInput.author =
    document.getElementById("authorInput").value;
  newObjectFromInput.quote =
    document.getElementById("quoteInput").value;
  let newObjectToInput = Object.assign(
    {},
    newObjectFromInput
  );
  arr.push(newObjectToInput);
  console.log(arr);
  e.target.reset();
});
