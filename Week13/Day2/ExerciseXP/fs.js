// Exercise 1 : Reading From A File In Node.JS

const fs = require("fs");
fs.readFile("text.txt", function (err, data) {
  if (err) return console.log(err);
  console.log(data.toString());
});

// Exercise 2 : Writing Files With Node JS

fs.writeFile(
  "./data.txt",
  "Bla bla bla",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

fs.appendFile(
  "./data.txt",
  " Buy orange juice",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

fs.unlink("./data.txt", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("deleted");
});
