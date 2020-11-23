//require
const fs = require('fs');
const path = require('path');

//requiring the json -- for loop too confusing
const notes = JSON.parce(fs.readFileSync('db/db.json', 'utf8'));

//module -- make this short and sweet
module.exports = function(app)  {
    //get
    app.get('/api/notes', function(req, res)    {
        res.json(notes);
    });

    //post
    app.post('/api/notes', function(req, res)   {
        notes.push(req.body);
        res.json(notes);
    })

    //delete
    app.delete('api/notes/:id', function(req, res)  {
        notes.length = 0;
        waitListData.length = 0;
        res.json({ ok: true });
    });
};