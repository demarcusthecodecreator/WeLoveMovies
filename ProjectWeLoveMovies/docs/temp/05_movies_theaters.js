exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies_theaters', function(t) {
        t.integer('movie_id').references('movie_id').inTable('movies');
        t.integer('theater_id').references('theater_id').inTable('theaters');
        t.boolean('is_showing');
        t.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('movies_theaters');
};