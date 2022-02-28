const knex = require('../db/connection')

exports.getMovies = async (request, response) => {
  try {
    let movies = []

    if (request.query.is_showing) {
      const movieIds = await knex.select('movie_id')
        .from('movies_theaters')
        .where({ is_showing: true })
        .groupBy('movie_id')
        .orderBy('movie_id')

      movies = await knex.select('movies.movie_id', 'movies.title', 'movies.runtime_in_minutes', 'movies.rating', 'movies.description', 'movies.image_url')
        .from('movies')
        .whereIn('movie_id', movieIds.map(val => val.movie_id))

      return response.json({ data: movies })
    }

    movies = await knex.select('movie_id', 'title', 'runtime_in_minutes', 'rating', 'description', 'image_url')
      .from('movies')

    return response.json({ data: movies })
  } catch (error) {
    console.error(error)
  }
}

exports.getMovie = async (request, response) => {
  try {
    const data = { ...request.params }

    let movie = await knex.select('movie_id', 'title', 'runtime_in_minutes', 'rating', 'description', 'image_url', 'created_at', 'updated_at')
      .from('movies')
      .where({ movie_id: data.movieId })
      .first();

    if (!movie) {
      return response.status(404).send({
        "error": "Movie cannot be found."
      })
    }

    return response.json({ data: movie })
  } catch (error) {
    console.error(error)
  }
}

exports.getTheatersByMovieId = async (request, response) => {
  try {
    const data = { ...request.params }

    let theaters = await knex.select()
      .from('theaters')
      .innerJoin('movies_theaters', 'theaters.theater_id', 'movies_theaters.theater_id')
      .where({ movie_id: data.movieId })

    return response.json({ data: theaters })
  } catch (error) {
    console.error(error)
  }
}


exports.getReviewsByMovieId = async (request, response) => {
  try {
    const data = { ...request.params }
    const values = []

    let reviews = await knex.select()
      .from('reviews')
      .where({ movie_id: data.movieId })

    for (let review of reviews) {
      const critic = await knex.select()
        .from('critics')
        .where({ critic_id: review.critic_id })
        .first()

      values.push({ ...review, critic })
    }

    return response.json({ data: values })
  } catch (error) {
    console.error(error)
  }
}
