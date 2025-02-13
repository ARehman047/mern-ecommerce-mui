const Cart = require('../models/cart.model')
const CartItem = require('../models/cartItem.model');
const Product = require('../models/product.model');

const createCart = async(user) => {
     try {
         const cart = new Cart({user});
     
         const createdCart = await cart.save();
     
         return createdCart;

     } catch (error) {
        throw new Error(error.message)
     }
}

const findUserCart = async(userId) => {
    try {
        
        let cart = await Cart.findOne({user: userId});
        let cartItems = await CartItem.find({cart:cart._id}).populate('product');
        cart.cartItems = cartItems;

        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItem = 0;

        for (let cartItem of cart.cartItems) {    
            totalPrice += cartItem.product.price * cartItem.quantity;
            totalDiscountedPrice += cartItem.product.discountedPrice * cartItem.quantity;
            totalItem += cartItem.quantity;
        }

        cart.totalPrice = totalPrice;
        cart.totalItem = totalItem;
        cart.discount = totalPrice - totalDiscountedPrice;
        cart.totalDiscountedPrice = totalDiscountedPrice;

        if(!cart){
            return res.status(404).send({message: "User has no Cart"})
        }

        return cart;

    } catch (error) {
        throw new Error(error.message);
    }
}

const addToCart = async(userId, req) => {
    try {
        
        const cart = await Cart.findOne({user:userId});
        const product = await Product.findById(req.productId)

        const isProductAlreadyPresent = await Cart.findOne({cart:cart._id, product:product._id, user:userId});
        if(!isProductAlreadyPresent){
            const cartItem = new CartItem({
                product: product._id,
                cart: cart._id,
                size: req.size,
                quantity: 1,
                price: product.price,
                discountedPrice: product.discountedPrice,
                userId: userId
            })

            const cartItemCreated = await cartItem.save();
            cart.cartItems.push(cartItemCreated);
            await cart.save();
            return "Item added to Cart";
        }

    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {createCart, findUserCart, addToCart};