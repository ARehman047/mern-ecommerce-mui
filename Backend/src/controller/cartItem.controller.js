const cartItemService = require('../services/cartItem.service');

const updateCartItem = async(req, res) => {
    const user = req.user;
    try {
        const updatedCartItem = await cartItemService.updateCartItem(user._id, req.params.id, req.body);
        return res.status(200).send(updatedCartItem)

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const removeCartItem = async(req, res) => {
    try {
        await cartItemService.removeCartItem(req.user._id, req.params.id);
        return res.status(200).send('Item is removed from the Cart')

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports = {updateCartItem, removeCartItem}