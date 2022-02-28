const knex = require('../db/connection')

exports.deleteReviews = async (request, response) => {
    try {
        const data = { ...request.params }

        const review = await knex.select()
            .from('reviews')
            .where({ review_id: data.reviewId })
            .first();

        if (!review) {
            return response.status(404).send({
                "error": "Review cannot be found."
            })
        }

        await knex('reviews')
            .where('review_id', data.reviewId)
            .del()

        return response.status(204).json({})
    } catch (error) {
        console.error(error)
    }
}

exports.updateReviews = async (request, response) => {
    try {
        const params = { ...request.params }
        const body = { ...request.body }

        let review = await knex.select()
            .from('reviews')
            .where({ review_id: params.reviewId })
            .first();

        if (!review) {
            return response.status(404).send({
                "error": "Review cannot be found."
            })
        }

        await knex('reviews')
            .where({ review_id: params.reviewId })
            .update({
                ...body.data
            })

        review = await knex.select()
            .from('reviews')
            .where({ review_id: params.reviewId })
            .first();

        const critic = await knex.select()
            .from('critics')
            .where({ critic_id: review.critic_id })
            .first()

        return response.json({ data: { ...review, critic } })
    } catch (error) {
        console.error(error)
    }
}