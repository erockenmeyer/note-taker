// npm modules & other variables
const router = require('express').Router();
const fs = require('fs');
const { nanoid } = require('nanoid');
const path = require('path');
const notes = require('../../db/db.json');

// base api/get all notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// add new note
router.post('/notes', (req, res) => {
    let note = req.body;

    // set unique id for note using nanoid
    note.id = nanoid();

    // check that there is actually a note (title & text)
    if (!note.title || !note.text) {
        res.status(400).send('Please add something to your note before saving.');
    } else {
        notes.push(note);
        fs.writeFileSync(
            path.join(__dirname, '../../db/db.json'),
            JSON.stringify(notes, null, 2)
        );
        res.json(note);
    }
})

module.exports = router;