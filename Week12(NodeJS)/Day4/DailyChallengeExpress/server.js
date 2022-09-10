const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.listen(3000);

app.get("/aboutMe/:hobby", function (req, res) {
  const hobby = req.params.hobby;
  isNaN(hobby)
    ? res.send(`<h1>${hobby}</h1>`)
    : res.sendStatus(404);
});

app.use(
  "/form",
  express.static(__dirname + "/public")
);

app.use(
  "/pic",
  express.static(__dirname + "/public/img.html")
);

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/formdata", (req, res) => {
  res.send(
    `User: ${req.body.name}, email: ${req.body.email} sent you a message: "${req.body.message}"`
  );
});
