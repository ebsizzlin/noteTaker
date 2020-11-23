//require
const fs = require('fs');

//start module
module.exports = (app) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', utf8));

    //get
    app.get('/api/notes', (req, res) => {
        res.json(notes);
    });

    //post
    app.post('/api/notes', (req, res) => {
        var createNotes = req.body;
        var noteData = (notes.length).toString();

        createNotes.id = noteData;; //.id = unique identification
        notes.push(createNotes);

        //writeFile, stringify, throw errors
        fs.writeFileSync('./db/db.json', JSON.stringify(notes), function(err)   {
            if (err) throw (err);
        });

        //res the notes
        res.json(notes);
    });

    //delete
    app.delete('/api/notes/:id', function(req, res) {
        var deleteNotes = req.params.id;
        var noteNum = 0;

        notes = notes.filter(current => { //.filter = creates an array
            return current.id != deleteNotes;
        });

        for (current of notes)  {
            current.id = noteNum.toString();
            noteNum++;
        };

        //writeFile, stringify
        fs.writeFileSync('./db/db.json', JSON.stringify(notes));

        //res the notes
        res.json(notes);
    })
}