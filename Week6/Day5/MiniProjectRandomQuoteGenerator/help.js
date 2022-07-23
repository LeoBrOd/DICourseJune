let numbers = [];
arr.forEach((e) => {
  numbers.push(e.id);
});
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * max + min);
};
const uniqueIndex = (numbers, previousIndex) => {
  let newIndex;
  do {
    newIndex = generateRandomNumber(
      0,
      numbers.length
    );
  } while (newIndex === previousIndex);
  return newIndex;
};
let currentIndex = 0;

currentIndex = uniqueIndex(numbers, currentIndex);