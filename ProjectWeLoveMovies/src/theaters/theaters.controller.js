const res = require("express/lib/response");
const service = require("./theaters.service");



function list(req, res, params) {
  service.list().then(theaters => {
    service.list2().then(movies => {
      service.movies_theaters_movieId().then(movies_theaters => {
        service.movies_theaters_theaterId().then(movies_theaters => {
          theaters.map((v) => {
            v.movies = []
          })
          movies_theaters.map((v) => {
            var theaterRow = theaters.find((theater) => theater.theater_id === v.theater_id);
            var movieRow = movies.find((movie) => movie.movie_id === v.movie_id);
            theaterRow.movies.push(movieRow)
          })
          res.json({ data: theaters })
        })
      })
    })
  })
}


module.exports = {
  list
};
