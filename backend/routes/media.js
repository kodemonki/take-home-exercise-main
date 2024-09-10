const express = require('express');
const router = express.Router();
const media = require('../services/media');

router.get('/', function(req, res) {
  try {
    const data = media.getData();
    res.status(200).json(data);
  } catch(error) {
    console.error(`Error fetching media `, error.message);
    res.status(500).json({message: error.message});
  }
});

module.exports = router;
