// Part I
const largeNumber = require("./main.js");
const now = require("./main.js");
const b = 5;
const sum = b + largeNumber;
console.log(sum);

// Part II

// const host = 'localhost';
// const port = 3000;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");
};

const http = require("http");
const server = http.createServer((req, res) => {
  console.log("I'm listening");
  res.end(`<html><body><p>My Module is ${sum}</p></body></html>
  <html><body><h1>Hi there at the frontend</h1></body></html>`);
});

server.listen(3000);

// Part III

const secondServer = http.createServer(
  (req, res) => {
    res.end(
      `<html><body><p>The date and time are currently:${now}</p></body></html>`
    );
  }
);

secondServer.listen(8080);
