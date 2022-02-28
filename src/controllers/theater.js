const knex = require('../db/connection')

exports.getAllTheaters = async (request, response) => {
    try {
        const theaters = await knex.select()
            .from('theaters')

        const data = []

        for (let theater of theaters) {
            const movies = await knex.select()
                .from('movies')
                .innerJoin('movies_theaters', 'movies.movie_id', 'movies_theaters.movie_id')
                .where({ theater_id: theater.theater_id })

            data.push({ ...theater, movies })
        }

        return response.json({ data })
    } catch (error) {
        console.error(error)
    }
}