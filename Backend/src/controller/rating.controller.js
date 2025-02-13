const ratingService = require('../services/rating.service.js');

const createRating = async(req, res) => {
    try {
        const rating = await ratingService.createRating(req.body, req.user);
        return res.status(200).send({rating});
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const getAllRatings = async(req, res) => {
    try {
        const ratings = await ratingService.getAllRatings(req.params.id);
        return res.status(200).send({ratings});
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

module.exports = {createRating, getAllRatings}