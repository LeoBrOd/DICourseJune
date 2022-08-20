// 1rst Daily Challenge
let word1 = ["banna", "apple", "kiwi"];
let word2 = ["banna", 32, "kiwi"];
let word3 = [
  "apple",
  "pear",
  "banana",
  "melon",
  "kiwi",
];

const makeAllCaps = (arr) => {
  return new Promise((res, rej) => {
    let caps = arr.map((item) => {
      if (typeof item === "string") {
        return item.toUpperCase();
      } else {
        rej(
          "Error, At least one item is not a string"
        );
      }
    });
    res(caps);
  });
};

const sortWords = (arr) => {
  return new Promise((res, rej) => {
    if (arr.length > 4) {
      res(arr.sort());
    } else {
      rej("Error, Array is too small");
    }
  });
};
async function a() {
  await makeAllCaps(word1)
    .then((res) => {
      return sortWords(res);
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });

  await makeAllCaps(word2)
    .then((res) => {
      return sortWords(res);
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });

  await makeAllCaps(word3)
    .then((res) => {
      return sortWords(res);
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
}
a();

// 2nd Daily Challenge
let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

const toJs = (morse) => {
  return new Promise((res, rej) => {
    let morseJS = JSON.parse(morse);
    if (Object.keys(morseJS).length === 0) {
      rej("The JSON string is empty");
    } else {
      res(morseJS);
    }
  });
};

const toMorse = (morseJS) => {
  //   function getInput() {
  //     var input = document.getElementById("input");
  //     return input
  //   }
  //   getInput()
  //   morseTranslation = input.value.toLowerCase();
  const morseTranslation = prompt(
    "Choose your sentence"
  )
    .toLowerCase()
    .split("");
  console.log(morseTranslation);
  console.log(Object.keys(morseJS));
  return new Promise((res, rej) => {
    morseTranslation.forEach(
      (item, i, morseTranslation) => {
        if (item in morseJS) {
          morseTranslation[i] = morseJS[item];
        } else {
          rej(
            "One of element of string does not exist in morse"
          );
        }
      }
    );
    res(morseTranslation);
  });
};

const joinWords = (morseTranslation) => {
  return morseTranslation.join("\n");
};

toJs(morse)
  .then((res) => {
    return toMorse(res);
  })
  .then((res) => {
    console.log(joinWords(res));
  })
  .catch((e) => {
    console.log(e);
  });

const getValueInput = () => {
  let inputValue = document.getElementById(
    "domTextElement"
  ).value;
  document.getElementById(
    "valueInput"
  ).innerHTML = inputValue;
};
