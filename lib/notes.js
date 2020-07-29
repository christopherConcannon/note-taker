const path = require('path');
const fs = require('fs');

const notes = require('../db/db.json');


const saveNote = note => {
  const newNote = {
    title: note.title,
    text: note.text,
    id: notes.length
  }
  notes.push(newNote);
  console.log(notes);
  // write to .json file (add to database)
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2)
  );

}


module.exports = { saveNote };
