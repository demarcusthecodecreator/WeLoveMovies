exports.up = function (knex, Promise) {
    return knex.schema.createTable('theaters', function (t) {
        t.increments('theater_id').primary();
        t.string('name');
        t.string('address_line_1');
        t.string('address_line_2');
        t.string('city');
        t.string('state');
        t.string('zip');
        t.timestamps(true, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('theaters');
};