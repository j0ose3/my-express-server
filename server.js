// jshint esversion:6
const express = require('express'); //require the express package

const app = express();

//here we are setting up a request on the root. This is a GET request
app.get("/", (req, res) => {
  res.send("<h1> Hello world </h1>"); //we respond with the hello world in html
});

app.get("/contact", (req, res) => {
  res.send("<h2> Contact me at j0ose3x7@gmail.com </h2>");
});

app.get("/about", (req, res) => {
  res.send("My name is Jose, I'm the greatest mofcker alive today and I love bitches");
});

// here we listen to a certain port number for our server
app.listen(3000, () =>{
  console.log("Server started on port 3000");
});
