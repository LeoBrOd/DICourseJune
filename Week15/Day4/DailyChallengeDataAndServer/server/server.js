const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  bodyParser.urlencoded({ extended: false })
);
app.use(bodyParser.json());

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `on port ${process.env.PORT || 5000}`
  );
});

app.get("/api/hello", (req, res) => {
  const message = "Hello from Express";
  res.send({ message });
});

app.post("/api/world", (req, res) => {
  const inputText = req.body.inputText;
  const outputText = `I received your POST request. This is what you sent me: ${inputText}`;
  console.log(req.body);
  res.send({ outputText });
});
