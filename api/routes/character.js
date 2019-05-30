const express = require('express');
const characters = require('../controllers/character');

const router = express.Router();

router.get('/:character', characters.getCharacter);

module.exports = router;