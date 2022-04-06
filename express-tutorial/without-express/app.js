console.log("Express Tutorial without express package");
const { readFileSync } = require("fs");
const http = require("http");

const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  console.log("user hit the server");
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(homePage);
  }
});

server.listen(5000);
