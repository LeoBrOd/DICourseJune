const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/json");
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  res.json(user);
  res.end();
});

server.listen(3000);
