//require
const fs = require('fs');
var uniqid = require('uniqid');

//start module
module.exports = (app) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    
    //get
    app.get('/api/notes', (req, res) => {
        console.log('get route');
        res.json(notes);
    });

    //post
    app.post('/api/notes', (req, res) => {
        var createNotes = req.body;
        // var noteData = (notes.length).toString();

        createNotes.id = uniqid();
        //.id = calls on something unique in the app, used to get the specifid id -- here, it's creating a new note with the specific info the user has entered
        notes.push(createNotes);

        //writeFile, stringify, throw errors
        fs.writeFileSync('./db/db.json', JSON.stringify(notes), function(err)   {
            if (err) throw (err);
        });

        //res the notes
        res.json(notes);
    });

    //delete -- all help from BCS, review 11/21 class & async
    app.delete('/api/notes/:id', (req, res) => {
        const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
        var deleteNotes = req.params.id;
        //.params is a shortcut to use when calling a method, dont have to create an array
        var noteNum = 0;
        console.log(notes);
        notes = notes.filter(thisNote => {
            //.filter = creates a a new array that contaisn a subset of elements of a previous array -- here, it removes the note the user is deleting from the previous array
            return thisNote.id !== deleteNotes;
        });

        for (thisNote of notes)  {
            thisNote.id = noteNum.toString();
            noteNum++;
        };

        //writeFile, stringify
        fs.writeFileSync('./db/db.json', JSON.stringify(notes));

        //res the notes
        res.json(notes);
    });
};