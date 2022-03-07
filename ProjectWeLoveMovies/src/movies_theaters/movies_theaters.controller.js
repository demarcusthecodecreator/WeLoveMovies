const service = require("./movies_theaters.service");

function list(req, res) {
    service.list().then(movies_theaters => {
        res.json({ data: movies_theaters });
    })
}


module.exports = {
    list,
};
