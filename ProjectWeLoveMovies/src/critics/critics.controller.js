const service = require("./critics.service");



// const title = (req, res, next) => {
//   const title = req.params.title
// }



function list(req, res,critics) {
    console.log('critics controller');

    service.list().then(critics=>{
  
      res.json({ data: critics });
    })
  }



// function read(req, res) {
//   service.read(req.params.movie_id).then(movies=>{
//     res.json(movies)
//   })
// }

// function create(req, res) {
//   console.log('create')
//   res.json({ data: service.create() });
// }


module.exports = {
  // theatersList,
  list,
  
  // read,
// create
};
