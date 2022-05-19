/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Jay Pravinkumar Chaudhari Student ID: 147268205 Date: 2022-05-19
*
*  Heroku Web App URL: https://shrouded-temple-48685.herokuapp.com/
*
*  GitHub Repository URL: https://github.com/JayAtSeneca/helloworld
*
********************************************************************************/ 
var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Jay Pravinkumar Chaudhari -147268205");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);