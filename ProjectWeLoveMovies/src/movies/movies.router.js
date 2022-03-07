const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

console.log(methodNotAllowed)

router
.route("/")
.get(controller.read)
.all(methodNotAllowed)

router
.route("/:id")
.get(controller.readId)
.all(methodNotAllowed)


router
.route("/:id/theaters")
.get(controller.theater_with_movies)
.all(methodNotAllowed)

router
.route("/:id/reviews")
.get(controller.criticreview)
.all(methodNotAllowed)




module.exports = router;