const { filterByQuery } = require('../../lib/notes');
const { notes } = require('../../db/db');
const router = require('express').Router();

router.get('/notes', (req, res) => {
  // let results = db;
  console.log(notes);
  res.json(notes);
});

// router.get('/notes/:title', (req, res) => {
//   const result = findById(req.params.id, animals);
//   if (result) {
//     res.json(result);
//   } else {
//     res.send(404);
//   }
// });

router.post('/notes', (req, res) => {
  res.json(notes);
  
});

module.exports  = router;