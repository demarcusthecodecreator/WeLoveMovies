exports.up = function(knex, Promise) {
    return knex.schema.createTable('reviews', function(t) {
        t.increments('review_id').primary();
        t.text('content');
        t.integer('score');
        t.integer('critic_id').references('critic_id').inTable('critics');
        t.integer('movie_id').references('movie_id').inTable('movies');
        t.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('reviews');
};