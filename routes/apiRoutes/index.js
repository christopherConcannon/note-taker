const router = require('express').Router();

const { saveNote } = require('../../lib/notes');
const notes = require('../../db/db.json');

// console.log(saveNote);


// API routes
router.get('/notes', (req, res) => {
  res.json(notes);
  
});

router.post('/notes', (req, res) => {
  // call function to save note to db
	const newNote = req.body;
  saveNote(newNote);
	
});

module.exports = router;
