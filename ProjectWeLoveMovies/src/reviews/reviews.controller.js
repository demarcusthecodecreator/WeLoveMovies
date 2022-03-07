const service = require("./reviews.service");

// read with Id
function read(req, res, params) {
    service.read(req.params.id).then(reviews => {
        res.json({ data: reviews });
    })
}

// delete a review by ID
function destroy(req, res, param) {
    var requestedId = req.params.id
    service.read(req.params.id).then(reviews => {

        if (reviews) {
            service.destroy(req.params.id).then(() => {
                res.status(204)
                res.send('No Content')
            })
        }
        else {
            res.status(404)
            res.send({
                "error": "Review cannot be found."
            });
        }
    })
}

// Update review and return review with critic 
function update(req, res, params) {
    service.read(req.params.id).then(reviews => {
        if (reviews) {
            service.update(req.params.id, req.body.data.content).then(reviews => {
                var reviews = reviews[0]

                service.critics(req.params.id).then(critics => {
                    
                    service.read(req.params.id).then(reviews => {
                      
                        reviews.critic = critics[0]
                        res.send({data:reviews})
                    })
                })
            })
        } else {
            res.status(404)
            res.send({
                "error": "Review cannot be found."
            });
        }
    })
}



module.exports = {
    read: [read],
    destroy,
    update
};
