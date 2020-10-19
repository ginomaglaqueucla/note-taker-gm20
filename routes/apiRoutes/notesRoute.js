const  notes  = require('../../db/db');
const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.get('/notes/:id', (req, res) => {
  console.log("efger");
  console.log(req.params.id);
  const id = req.params.id;
  const result = notes.filter(note => notes.id === id)[0];
  console.log(result);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();
  const newNote = req.body;
  notes.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notes, null, 2)
  );
  console.log(notes);
  res.json(notes);
  
});

module.exports  = router;