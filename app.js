
const express = require("express");
const ejs = require("ejs");
// const _ = require("lodash");

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get('/', function(req, res){
   res.render("home");
});

app.get('/chat', function(req, res){
   res.render("chat");
});

app.get('/event', function(req, res){
   res.render("event");
});

app.get('/about', function(req, res){
   res.render("about");
});





app.listen(3000, function() {
  console.log("Server started on port 3000");
});
