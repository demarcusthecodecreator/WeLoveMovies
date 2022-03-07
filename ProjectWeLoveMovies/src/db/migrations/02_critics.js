exports.up = function(knex, Promise) {
    return knex.schema.createTable('critics', function(t) {
        t.increments('critic_id').primary();
        t.string('preferred_name');
        t.string('surname');
        t.string('organization_name');
        t.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('critics');
};