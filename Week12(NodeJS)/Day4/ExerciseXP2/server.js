// Exercise 1 : Express & JSON

const express = require("express");

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("run on port 3000");
});

app.use(
  "/",
  express.static(__dirname + "/public")
);

app.get("/getUser", (req, res) => {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  console.log(user);
  res.json(user);
});

// Exercise 2 : Express & Parameters

app.get("/user/:id", function (req, res) {
  const id = { id: req.params.id };
  res.json(id);
});

// Exercise 3: Express & Static Files

app.use(
  "/about",
  express.static(__dirname + "/public/about.html")
);
