const CartItem = require('../models/cartItem.model');
const userService = require('../services/user.service');

const updateCartItem = async(userId, cartItemId, cartItemData) => {
    try {
        
        const item = await findCartItemById(cartItemId);
        const user = await userService.getUserById(userId);

        if(!item){
            throw new Error('Cart item not found');
        }

        if(!user){
            throw new Error('No user Exists with this Id');
        }

        if(user._id.toString() === userId.toString()){

            console.log(item);

            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.discountedPrice * item.quantity;
            const updatedCartItem = await item.save();
            return updatedCartItem;
        } else {
            throw new Error("This cart item cannot be Added");
        }

    } catch (error) {
        throw new Error(error.message);
    }
}

const removeCartItem = async(userId, cartItemId) => {
    try {

        const item = await findCartItemById(cartItemId);
        const user = await userService.getUserById(userId);

        if(!item){
            throw new Error('Cart item not found');
        }

        if(!user){
            throw new Error('No user Exists with this Id');
        }

        if(user._id.toString() === item.userId.toString()){
            await CartItem.findByIdAndDelete(cartItemId);
        } else {
            throw new Error("You cannot remove another users item");
        }

        

    } catch (error) {
        throw new Error(error.message);

    }
}

const findCartItemById = async(cartItemId) => {
    try {

        const item = await CartItem.findById(cartItemId).populate('product');

        if(item){
            return item;
        } else{
            throw new Error("Cart item does not exist")
        }

    } catch (error) {
        throw new Error(error.message);

    }
}

module.exports = {updateCartItem, removeCartItem, findCartItemById};