const environment = "development";
// console.log(environment)
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

module.exports = knex;
