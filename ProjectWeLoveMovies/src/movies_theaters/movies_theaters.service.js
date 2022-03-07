const knex = require("../db/connection");

function list(req, res) {
    return knex("movies_theaters")
}


module.exports = {
    list,
};
