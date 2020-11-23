//require
const fs = require('fs');
const path = require('path');

//module -- make this short and sweet
module.exports = function(app)  {
    //get
    app.get('/api/notes', function(req, res)    {
        const writeNotes = newNotes('./db/db.json', 'utf8', (err, data) =>   {
            if (err) throw err;
            return data
        })
        res.json(writeNotes);
    });

    //post
    app.post('/api/notes', function(req, res)   {
        writeNotes.push(req.body);
        // write(notes)
        res.json(true);
    })

    //delete
    app.delete('api/notes/:id', function(req, res)  {
        writeNotes.length = 0;
        res.json({ ok: true });
    });
};