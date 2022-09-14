const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const products_router = require("./routs/products.js");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", products_router);

app.listen(process.env.PORT || 8080, () => {
  console.log(
    `run on port ${process.env.PORT || 8080}`
  );
});

app.use(
  "/",
  express.static(__dirname + "/public")
);
