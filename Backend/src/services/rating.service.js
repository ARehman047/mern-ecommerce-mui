const Rating = require('../models/rating.model');
const productService = require ('./product.service');

const createRating = async(reqData, user) => {
    const product = await productService.findProductById(reqData.productId);
    const rating = new Rating({
        user: user._id,
        product: product._id,
        rating: reqData.rating,
        createdAt: new Date()    
    })

    await product.save();
    return await rating.save();
}

const getAllRatings = async(productId) => {
    return await Rating.find({product:productId});
}

module.exports = {createRating, getAllRatings};