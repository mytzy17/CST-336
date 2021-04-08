//to import express
var express = require("express");
var app = express();
app.engine('html', require('ejs').renderFile);

//routes
app.get("/", function(req,res){
    res.render("index.html");
});

app.get("/mercury", function(req,res){
    // res.send("This will be Mercury web page!");
    res.render("mercury.html");
});

app.get("/venus", function(req,res){
    // res.send("This will be Venus web page!");
    res.render("venus.html");
})

app.get("/earth", function(req,res){
    res.render("earth.html");
})

app.get("/bye", function(req,res){
    res.render("bye.html");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is running...");
});