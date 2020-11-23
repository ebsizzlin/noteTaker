//require
const express = require("express");
const path = require("path");
const fs = require('fs');

//express
const PORT = process.env.PORT || 3000;
const app = express();

//read
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//js require
const apiRoutes = require('routes/apiRoutes');
const htmlRoutes = require('routes/htmlRoutes');

//listener
app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});