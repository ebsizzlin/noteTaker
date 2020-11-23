//require
const fs = require('fs');
const path = require('path');
const data = require('../db/db.json', 'utf8'); //call json

//write function for json to callback (attempt)
function write(notes)   {
    notes = JSON.stringify(notes);
    fs.writeFileSync("./db/db.json", notes, function(err)   {
        if(err) {
            return console.log(err);
        };
    });
};

//module -- make this short and sweet
module.exports = function(app)  {
    //get
    app.get('/api/notes', function(req, res)    {
        res.json(notes);
    });

    //post
    app.post('/api/notes', function(req, res)   {
        data.push(req.body);
        write(notes)
        res.json(notes);
    })

    //delete
    app.delete('api/notes/:id', function(req, res)  {
        notes.length = 0;
        res.json({ ok: true });
    });
};