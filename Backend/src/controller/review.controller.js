const reviewService = require('../services/review.service');

const createReview = async(req, res) => {
    try {
        const review = await reviewService.createReview(req.body, req.user);
        return res.status(200).send({review});
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const getAllReviews = async(req, res) => {
    try {
        const reviews = await reviewService.getAllReviews(req.params.id);
        return res.status(200).send({reviews});
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

module.exports = {createReview, getAllReviews}