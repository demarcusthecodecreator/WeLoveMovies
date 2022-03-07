const req = require("express/lib/request");
const knex = require("../db/connection");

// read by Id
function read(id) {
    return knex("reviews").where('review_id', id).first();
}

//update
function update(id, content, reviews) {
    return knex("reviews").where('review_id', id).update({
        content: content
    })
}

function critics(id, critics) {
    return knex.select('*').from('critics').whereIn('critic_id', function () {
        this.select('critic_id').from('reviews').where('review_id', id)
    })
}

// delete a review by ID
function destroy(id) {
    return knex('reviews').where('review_id', id).del()
}


module.exports = {
    read,
    critics,
    destroy,
    update,
};
