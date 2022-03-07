exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies', function(t) {
        t.increments('movie_id').primary();
        t.string('title');
        t.integer('runtime_in_minutes');
        t.string('rating');
        t.text('description');
        t.string('image_url');
        // t.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('movies');
};