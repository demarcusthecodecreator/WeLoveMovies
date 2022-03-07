const knex = require("../db/connection");

// theaters list
function list(req, res, theaters) {
  return knex("theaters")
}

// movies list
function list2(req, res, movies) {
  return knex("movies")
}

// movies id in movies_theater table
function movies_theaters_movieId() {
  return knex.select('movie_id').from('movies_theaters')
}


// theater_id & movie_id in movies_theater table
function movies_theaters_theaterId() {
  return knex.select('theater_id','movie_id').from('movies_theaters')
}

module.exports = {
  list,
  list2,
  movies_theaters_movieId,
  movies_theaters_theaterId,
};
