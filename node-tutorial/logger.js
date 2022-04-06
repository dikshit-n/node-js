var url = "http://mylogger.io/log";

const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);
    this.emit("logMessage", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
