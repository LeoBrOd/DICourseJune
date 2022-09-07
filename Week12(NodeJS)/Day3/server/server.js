// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("Hello, I got the request!");
//   console.log(req.headers);
//   console.log(req.url);
//   console.log(req.method);
//   res.end("Hello from my first website");
// });

// server.listen(5555);

// crud
// get -> get request - retrieve data, read data
// post -> create a new data
// put -> upfate data
// delete

// Post -> http:// localhost:5000/user -> Body
// Get -> http:// localhost:5000/user -> Read data
// Put -> http:// localhost:5000/user -> Update
// Delete -> http:// localhost:5000/user -> Delete

const express = require("express");
const cors = require("cors");
const products = require("./modules/data.js");

const app = express();
app.use(cors());

app.listen(5000, () =>
  console.log("run on port 5000")
);

app.use(
  "/",
  express.static(__dirname + "/public")
);

app.get("/api/products", (req, res) => {
  res.json(products);
});

// app.get("/about", (req, res) => {
//   res.sendFile(__dirname + "/public/about.html");
// });

app.get("/api/products/search", (req, res) => {
  const name = req.query.q;
  const products_result = products.filter(
    (item) => {
      return item.name
        .toLowerCase()
        .includes(name.toLowerCase());
    }
  );
  res.json(products_result);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find(
    (item) => item.id == id
  );
  if (!product) {
    return res.status(404).send("Not found");
    // return res.status(404).json('{msg:Not found}')
  }
  res.json(product);
});
