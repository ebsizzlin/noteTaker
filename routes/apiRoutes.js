//require
const fs = require('fs');

//module
module.exports = function(app)  {
    //tutor help
    var notes = JSON.parce(fs.readFileSync('db/db.json', 'utf8'));

    //get
    app.get()

    //post
    app.post

    //delete
    app.delete
}