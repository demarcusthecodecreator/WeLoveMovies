const express = require("express");

const reviews = require('../controllers/review')

const router = express.Router();

router.route('/:reviewId')
    .delete(reviews.deleteReviews)
    .put(reviews.updateReviews)

module.exports = router;