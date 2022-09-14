const fs = require("fs");

fs.readFile(
  "./RightLeft.txt",
  function (err, data) {
    if (err) {
      throw err;
    } else {
      let chars = data.toString().split("");
      let right = 0;
      let left = 0;

      function ifMinus(side) {
        if (side === -1) {
          console.log(`${i}steps to the ${side}`);
        }
      }

      for (let i = 0; i < chars.length - 1; i++) {
        const step = chars[i];
        if (step === ">") {
          ifMinus(right);
          right++;
        } else {
          ifMinus(left);
          left++;
        }
      }
      if (left > right) {
        console.log(
          `${left - right} steps to the left`
        );
      } else {
        console.log(
          `${right - left} steps to the right`
        );
      }
    }
  }
);
