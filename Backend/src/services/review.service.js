const Review = require('../models/review.model');
const productService = require ('../services/product.service');

const createReview = async(reqData, user) => {
    const product = await productService.findProductById(reqData.productId);
    const review = new Review({
        user: user._id,
        product: product._id,
        review: reqData.review,
        createdAt: new Date()    
    })

    await product.save();
    return await review.save();
}

const getAllReviews = async(productId) => {
    return await Review.find({product:productId}).populate('user');
}

module.exports = {createReview, getAllReviews}