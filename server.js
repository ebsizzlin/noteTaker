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

//tutor help
const notes = JSON.parce(fs.readFileSync('db/db.json', 'utf8'));

//module
module.exports = function(app)  {
    //get
    app.get('/api/notes', function(req, res)    {
        res.json(notes);
    });

    //post
    app.post('/api/notes', function(req, res)   {
        notes.push(req.body);
        res.json('saved');
    })

    //delete
    app.delete('api/notes/:id', function(req, res)  {

    })
}