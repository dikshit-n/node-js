// const logger = require("./logger");

// console.log(logger);

const path = require("path");
var pathObj = path.parse(__filename);

// console.log(path, pathObj);

const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

const fs = require("fs");

const files = fs.readdirSync("./");
// console.log(files);

fs.readdir("./", (err, files) => {
  if (err) console.log("Error ", err);
  else console.log("Result ", files);
});

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// Register an event listener
// emitter.on("logMessage", function (arg) {
//   console.log("Listener called ", arg);
// });

// Raise an event
// emitter.emit("logMessage", { id: 1, url: "http://" });

// emitter.on("logging", (message) => {
//   console.log(message);
// });

// emitter.emit("logging", "Hello");

const Logger = require("./logger");
const logger = new Logger();

logger.on("logMessage", (message) => console.log(message));

// logger.log("Hello Guys");

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});
server.on("connection", (socket) => console.log("New Connection..."));
server.listen(3000);
console.log("Listening on port 3000...");

path.join("/content", "subfolder", "test.tsx");
