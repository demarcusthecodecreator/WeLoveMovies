const express = require("express");

const theaters = require('../controllers/theater')

const router = express.Router();

router.route('/').get(theaters.getAllTheaters);

module.exports = router;