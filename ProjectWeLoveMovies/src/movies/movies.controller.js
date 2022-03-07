const service = require("./movies.service");

// GET /movies
function list(req, res) {
    service.list().then(movies => {
        res.json({ data: movies });
    })
}

// GET /movies?is_showing=true
function read(req, res, next) {
    if (req.query.is_showing) {
        service.read(req.query.is_showing).then(movies_theaters => {
            res.json({ data: movies_theaters })
        })
    }
    else {
        service.readAll().then(movies => {
            res.json({ data: movies })
        })
    }
}


// GET /movies/:movieId
// GET /movies/:movieId (incorrect ID)
function readId(req, res, next) {
    service.readId(req.params.id).then(movies => {
        if (movies) {
            res.json({ data: movies })
        } else {
            res.status(404)
            res.json({
                error: `Movie cannot be found.`,
            });
            next()
        }
    })
}


// GET /movies/:movieId/theaters
function theater_with_movies(req, res, next) {
    service.theater_with_movies(req.params.id).then(theaters => {
        theaters.sort((a, b) => {
            return a.theater_id - b.theater_id;
        });
        res.json({ data: theaters })
    })
}


// GET /movies/:movieId/reviews (With critic details)
function criticreview(req, res, next) {
    service.criticreview(req.params.id).then(reviews => {
        service.critics(req.params.id).then(critics => {
            reviews.map((v) => {
                var criticId = v.critic_id
                var critic = critics.find((critic) => critic.critic_id === criticId);
                v.critic = critic
            })

            res.json({ data: reviews })
        })
    })
}

module.exports = {
    list,
    read,
    readId,
    theater_with_movies,
    criticreview,
};
