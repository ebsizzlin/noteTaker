//require
const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')

//express
const app = express();
const PORT = process.env.PORT || 8080;

//read
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//js activation
apiRoutes(app);
htmlRoutes(app);

//listener
app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});