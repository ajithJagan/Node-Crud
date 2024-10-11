const express = require("express"); //minimal web application framework for building web and mobile applications
const express_handlebar = require("express-handlebars");// a templating engine for Express.js that enables you to render dynamic HTML pages.
const body_parser = require("body-parser"); //Request body
const mysql = require("mysql");


require("dotenv").config();  //fro load the ENV variable to the data from run time


const app = express(); //create an instance of the express application
const port = process.env.PORT || 5000;


app.use(body_parser.urlencoded({extend: false})); //app.use for request and response body
app.use(body_parser.json);

// static files
app.use(express.static("images"));

app.get('/aji',(req, res)=>{
    console.log("This is request from user",req);
    res = req +"This is response ";
    return res;

})


app.listen(port, () => {
    console.log("Port Running in : " + port)
})
