//require
const express = require('express');
const path = require('path');

//express
const app = express();
const PORT = process.env.PORT || 3000;

//read
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//js require
require('./routes/apiRoutes');
require('./routes/htmlRoutes');

//listener
app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});