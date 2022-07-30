// Exercise 1
let sum = (num1, num2) => {
  return num1 + num2;
};

// Exercise 2 : Kg And Grams
// Function Expression
let convert = function (weightInKg) {
  return weightInKg * 1000;
};
console.log(convert(5));

// Function Declaration
function convertToGrams(weightInKg) {
  return weightInKg * 1000;
}
console.log(convertToGrams(5));

// Arrow Function
let convertArrow = (weightInKg) => {
  return weightInKg * 1000;
};
console.log(convertArrow(5));

// Exercise 3 : Fortune Teller

(function () {
  let jobTitle = "Developer";
  let geographicLocation = "Israel";
  let partnersName = "Adi";
  let numberOfChildren = "5";
  const newdiv = document.createElement("div");
  newdiv.innerHTML = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;
  document.body.appendChild(newdiv);
})();

// Exercise 4 : Welcome

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const placeToPut =
    document.getElementById("placeToPut");
  const newdiv = document.createElement("div");
  const inputValue =
    document.getElementById("nameInput").value;
  newdiv.setAttribute("class", "navbar-brand");
  newdiv.innerHTML = `Hi, ${inputValue} !`;
  placeToPut.appendChild(newdiv);
  e.target.reset();
});

//  Exercise 5 : Juice Bar
const sizeOfBeverage = "";
const makeJuice = function (sizeOfBeverage) {
  let ingredients = [];
  const addIngredients = function (
    firstIngredient,
    secondIngredient,
    thirdIngredient
  ) {
    const newEl = document.createElement("div");
    newEl.innerHTML = `The client wants a ${sizeOfBeverage} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`;
    document.body.appendChild(newEl);
    ingredients.push(
      firstIngredient,
      secondIngredient,
      thirdIngredient
    );
    const displayJuice = function (
      firstIngredient,
      secondIngredient,
      thirdIngredient
    ) {
      const newEl = document.createElement("div");
      newEl.innerHTML = `The client wants a ${sizeOfBeverage} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`;
      document.body.appendChild(newEl);
    };
    displayJuice("honey", "cranberry", "ginger");
    //console.log(ingredients);
  };
  addIngredients("orange", "lime", "nana");
};
makeJuice("medium");
