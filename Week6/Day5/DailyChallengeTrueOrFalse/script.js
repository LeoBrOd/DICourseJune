function allTruthy() {
  const args = Array.from(arguments);
  let result = args.every((e) => e === true);
  return result;
}
console.log(allTruthy(true, true, true));
console.log(allTruthy(true, false, true));
console.log(allTruthy(5, 4, 3, 2, 1, 0));
