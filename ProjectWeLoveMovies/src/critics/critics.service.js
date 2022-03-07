const knex = require("../db/connection");



function list(req, res, movies) {
  
  return knex("critics")
}




// function read(movies) {
//   return knex("movies").select("*").where({ movies_id }).first();
// }

// function create(theaters) {
//   return knex("theaters").insert({
//     name: "",
//     address_line_1: "801 C St.",
//     address_line_2: "",
//     city: "Vancouver",
//     state: "WA",
//     zip: "98660",
//   })
  

// }


// function read(movies) {
//   return knex("movies").select("*").where({ movies_id }).first();
// }

// function readHighestRating() {
//   // your solution here
//   return knex("restaurants")
//     .select(knex.raw('max(rating)')).first()
// }



// function averageRating() {
//   // your solution here

//     return knex("restaurants")
//     .select(knex.raw('avg(rating)')).first()
// }

// function count() {
//   // your solution here
//   return knex("restaurants")
//     .select(knex.raw('count(*)::integer')).first()
// }

// function create(newRestaurant) {
//   return knex("restaurants")
//     .insert(newRestaurant, "*")
//     .then((createdRecords) => createdRecords[0]);
// }




// function destroy(restaurant_id) {
//   return knex("restaurants").where({ restaurant_id }).del();
// }





// function update(updatedRestaurant) {
//   return knex("restaurants")
//     .select("*")
//     .where({ restaurant_id: updatedRestaurant.restaurant_id })
//     .update(updatedRestaurant, "*");
// }

module.exports = {
  // averageRating,
  // count,
  // create,
  // delete: destroy,
  list,

  // read,
  // readHighestRating,
  // update,
};
