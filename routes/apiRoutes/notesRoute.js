const { filterByQuery } = require('../../lib/notes');
const { db } = require('../../db/db');
const router = require('express').Router();

router.get('/notes', (req, res) => {
  let results = notes;
  console.log(results);
  res.json(results);
});

module.exports  = router;