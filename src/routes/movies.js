const express = require("express");

const movies = require('../controllers/movie')

const router = express.Router();

router.route('/').get(movies.getMovies);

router.route('/:movieId').get(movies.getMovie)

router.route('/:movieId/theaters').get(movies.getTheatersByMovieId)

router.route('/:movieId/reviews').get(movies.getReviewsByMovieId)

module.exports = router;