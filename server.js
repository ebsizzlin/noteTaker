//require
const express = require("express");
const path = require("path");

//server app
const PORT = process.env.PORT || 3000;

const app = express();

//read
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//js require
const apiRoutes = require('routes/apiRoutes');
const htmlRoutes = require('routes/htmlRoutes');

//public folder
app.use(express.static('public'));

//listener
app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});