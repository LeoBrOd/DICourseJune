// generateButton = document.getElementById(
//   "generateButton"
// );

const arr = [
  {
    id: 0,
    author: "William James",
    quote:
      "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",
    likes: 0,
  },
  {
    id: 1,
    author: "Will Rogers",
    quote:
      "Even if you are on the right track, you will get run over if you just sit there.",
    likes: 0,
  },
  {
    id: 2,
    author: "Winston Churchill",
    quote:
      "Courage is the first of human qualities because it is the quality which guarantees all others.",
    likes: 0,
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
  newObjectFromInput.likes = 0;
  let newObjectToInput = Object.assign(
    {},
    newObjectFromInput
  );
  arr.push(newObjectToInput);
  console.log(arr);
  e.target.reset();
});

numberPlus.addEventListener("click", (e) => {
  buttonPlus = document.getElementById(
    "resultToPrint"
  );
  arr.forEach((element) => {
    let lengthOfString = element.quote.length;
    let resultToPrint = `Quote #${
      element.id + 1
    } is ${lengthOfString} characters long`;
    document.getElementById(
      "resultToPrint"
    ).innerHTML = resultToPrint;
    // newdiv = document.createElement("div");
    // newdiv.setAttribute("id", "div_demo");
    // newdiv.innerHTML = resultToPrint;
    // buttonPlus.appendChild(newdiv);
  });
});

numberMinus.addEventListener("click", (e) => {
  buttonMinus = document.getElementById(
    "resultToPrint"
  );
  arr.forEach((element) => {
    let cleanString = element.quote.replace(
      /\s/g,
      ""
    );
    //console.log(cleanString);
    let lengthOfStringMinus = cleanString.length;
    let resultToPrint = `Quote #${
      element.id + 1
    } is ${lengthOfStringMinus} characters long`;
    document.getElementById(
      "resultToPrint"
    ).innerHTML = resultToPrint;
    // newdiv = document.createElement("div");
    // newdiv.setAttribute("id", "div_demo");
    // newdiv.innerHTML = resultToPrint;
    // buttonMinus.appendChild(newdiv);
  });
});

numberWords.addEventListener("click", (e) => {
  buttonWords = document.getElementById(
    "resultToPrint"
  );
  arr.forEach((element) => {
    let cleanString = element.quote.split(" ");
    //console.log(cleanString);
    let lengthOfStringWords = cleanString.length;
    let resultToPrint = `Quote #${
      element.id + 1
    } is ${lengthOfStringWords} words long`;
    document.getElementById(
      "resultToPrint"
    ).innerHTML = resultToPrint;
    // newdiv = document.createElement("div");
    // newdiv.setAttribute("id", "div_demo");
    // newdiv.innerHTML = resultToPrint;
    // buttonWords.appendChild(newdiv);
  });
});
