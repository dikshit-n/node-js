console.log("Express tutorial with express package");

// const path = require("path");
const express = require("express");
const app = express();

// setup static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  // res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
  res.status(200).send("Welcome to our server");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

// app.get();

app.all("*", (req, res) => {
  res.setHeader("content-type", "text/html");
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(5000, () => console.log("Server started at port 5000..."));

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
