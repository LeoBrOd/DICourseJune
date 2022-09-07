const today = new Date();
const newYear = new Date("January, 01, 2023");
function daysLeftTillNewYear() {
  const dayCount =
    (newYear - today) / (1000 * 60 * 60 * 24);
  const ms =
    (dayCount - Math.round(dayCount)) *
    (1000 * 60 * 60 * 24);
  const hoursCount = new Date(ms)
    .toISOString()
    .slice(11, 19);
  return `The 1st January is in ${Math.round(
    dayCount
  )} days and ${hoursCount} hours`;
}
// console.log(daysLeftTillNewYear());

// const birthday = new Date ("August, 13, 1991")
// function minutesOfTheCurrentLife() {
//     const ms = (today - birthday)
//     console.log(ms);
//     const minutesCount = new Date(ms)
//     return `Users already spend on Earth ${minutesCount.getMinutes()}:${minutesCount.getSeconds()} minutes`
// }

const birthday = new Date("August, 13, 1991");
function minutesOfTheCurrentLife() {
  const ms = today - birthday;
  var minutes = Math.floor(ms / 60000);
  var seconds = ((ms % 60000) / 1000).toFixed(0);
  return `User already spend on Earth ${minutes}:${seconds} minutes`;
}

module.exports = {
  daysLeftTillNewYear: daysLeftTillNewYear(),
  minutesOfTheCurrentLife:
    minutesOfTheCurrentLife(),
};
