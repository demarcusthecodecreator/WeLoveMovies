const { select } = require("../db/connection");
const knex = require("../db/connection");


// All objects display
function list(req, res) {
    return knex("movies")
}

// only display is_showing  
function read(is_showing) {
    return knex("movies").whereIn('movie_id', function () {
        this.select('movie_id').from('movies_theaters').where("is_showing", is_showing);
    })
}

function readAll() {
    return knex("movies")
}

// get by id
function readId(id) {
    return knex('movies').where('movie_id', id).first()
}

// is_showing == true
function theater_with_movies(id, is_showing) {
    return knex.select('*').from('theaters').whereIn('theater_id', function () {
        this.select('theater_id').from('movies_theaters').where('movie_id', id).orWhere('is_showing', true)
    })
}


// reviews for the movie, including all the critic
function criticreview(id) {
       return knex.select('*').from('reviews').where('movie_id', id)
}

// critics with id in reviews table
function critics(id){
    return knex.select('*').from('critics').whereIn('critic_id', function () {
        this.select('critic_id').from('reviews').where('movie_id', id)
    })
}

module.exports = {
    list,
    read,
    readId,
    readAll,
    theater_with_movies,
    criticreview,
    critics
};
