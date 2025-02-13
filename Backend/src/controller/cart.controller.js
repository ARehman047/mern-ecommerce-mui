const cartService = require('../services/cart.service')

const findUserCart = async(req, res) => {
    try {
        const cart = await cartService.findUserCart(req.user._id);
        return res.status(200).send(cart)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const addItemToCart = async(req, res) => {
    try {
        const cartItem = await cartService.addToCart(req.user._id, req.body);
        return res.status(200).send(cartItem)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports = {findUserCart, addItemToCart};