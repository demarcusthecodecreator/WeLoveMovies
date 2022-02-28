const express = require("express");

const moviesRoutes = require('./movies')
const reviewsRoutes = require('./reviews')
const theatersRoutes = require('./theaters')

const router = express.Router();

router.use('/movies', moviesRoutes)
router.use('/reviews', reviewsRoutes)
router.use('/theaters', theatersRoutes)

module.exports = router;