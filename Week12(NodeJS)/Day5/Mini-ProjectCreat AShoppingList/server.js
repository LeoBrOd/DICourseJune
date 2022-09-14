const express = require("express");
const app = express();
app.use(express.static("public"));
app.listen(3000);

// app.get("/", (req, res) => {
//     const item = req.body.item
//     const amount = req.body.amount
//   res.write(`<h3>${item}:${amount}</h3>`);
// });


