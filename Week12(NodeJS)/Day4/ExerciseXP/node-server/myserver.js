const http = require("http");
http
  .createServer(function (req, res) {
    res.write(`<h1>This is my first response</h1>
    <h2>This is my second response</h2>
    <p>This is my third response</p>`);
    res.end();
  })
  .listen(3000);
