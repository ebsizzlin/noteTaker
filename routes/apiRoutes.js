//require
const fs = require('fs');
const writeNotes = ('./db/db.json')

module.exports = function(app)  {
    //get
    app.get('/api/notes', function(req, res)    {
        writeNotes
            .newNotes()
            .then(notes => res.json(notes))
            .catch(err => res.status(500).json(err)); //status(500) is the error response, the "catch" is like notify of error
    });

    //post
    app.post('/api/notes', function(req, res)   {
        writeNotes
            .addNote(req.body) //add note
            .then((notes) => res.json(notes))
            .catch(err => res.status(500).json(err));
    });

    //delete
    app.delete('api/notes/:id', function(req, res)  {
        writeNotes
            .removeNote(req.params.id)
            .then(() => res.json({ ok: true }))
            .catch(err => res.status(500).json(err));
    });
};

// //module
// module.exports = function(app)  {
//     //get
//     app.get('/api/notes', function(req, res)    {
//         const writeNotes = newNotes('./db/db.json', 'utf8', (err, data) =>   {
//             if (err) throw err;
//             return data
//         })
//         res.json(writeNotes);
//     });

//     //post
//     app.post('/api/notes', function(req, res)   {
//         writeNotes.push(req.body);
//         res.json(true);
//     })

//     //delete
//     app.delete('api/notes/:id', function(req, res)  {
//         writeNotes.length = 0;
//         res.json({ ok: true });
//     });
// };

//use 'router' variable instead and export w module at the end?