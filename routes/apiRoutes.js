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