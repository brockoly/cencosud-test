const express = require('express');
const houses = require('../controllers/houses');

const router = express.Router();

router.get('/:page/:size', houses.getHouses);

module.exports = router;