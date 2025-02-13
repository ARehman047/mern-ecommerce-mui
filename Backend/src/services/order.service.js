const Address = require('../models/address.model');
const Cart = require('../models/cart.model');
const CartItem = require('../models/cartItem.model');
const Order = require('../models/order.model')
const OrderItem = require('../models/orderItem.model')
const cartService = require('../services/cart.service');

const createOrder = async (user, shippingAddress) => {
    let address;

    if (shippingAddress._id) {
        let addressAlreadyExists = await Address.findById(shippingAddress._id);
        address = addressAlreadyExists;
    } else {
        address = new Address(shippingAddress);
        address.user = user;
        await address.save();

        user.address.push(address);


        await user.save();
    }

    const cart = await cartService.findUserCart(user._id);
    const orderItems = []

    for (const item of cart.cartItems) {
        const orderItem = new OrderItem({
            price: item.price,
            product: item.product,
            quantity: item.quantity,
            size: item.size,
            userId: item.userId,
            discountedPrice: item.discountedPrice
        })

        const createdOrderItem = await orderItem.save();
        orderItems.push(createdOrderItem)
    }

    const createdOrder = new Order({
        user,
        orderItems,
        totalPrice: cart.totalPrice,
        totalDiscountedPrice: cart.totalDiscountedPrice,
        discount: cart.discount,
        totalItem: cart.totalItem,
        shippingAddress: address,
    })

    const savedOrder = await createdOrder.save();

    const { acknowledged } = await CartItem.deleteMany({ "cart": cart._id })
    console.log(acknowledged);

    if (acknowledged) {
        cart.cartItems = []
        await cart.save()
    }

    return savedOrder;
}

const placeOrder = async (orderId) => {
    const order = await findOrderById(orderId);

    order.orderStatus = 'placed';
    order.paymentDetails.status = 'completed';

    return await order.save();
}

const confirmedOrder = async (orderId) => {
    const order = await findOrderById(orderId);

    order.orderStatus = 'confirmed';

    return await order.save();
}

const shippedOrder = async (orderId) => {
    const order = await findOrderById(orderId);

    order.orderStatus = 'shipped';

    return await order.save();
}

const deliveredOrder = async (orderId) => {
    const order = await findOrderById(orderId);

    order.orderStatus = 'delivered';

    return await order.save();
}

const cancelledOrder = async (orderId) => {
    const order = await findOrderById(orderId);

    order.orderStatus = 'cancelled';

    return await order.save();
}

const findOrderById = async (orderId) => {
    const order = await Order.findById(orderId).populate('user')
        .populate({ path: 'orderItems', populate: { path: 'product' } }).populate('shippingAddress');

    return order;
}

const usersOrderHistory = async (userId) => {
    try {

        const orders = await Order.find({ user: userId, orderStatus: 'placed' })
            .populate({ path: 'orderItems', populate: { path: 'product' } }).lean()

        return orders

    } catch (error) {
        throw new Error(error.message);
    }
}

const getAllOrders = async () => {
    return await Order.find()
        .populate({ path: 'orderItems', populate: { path: 'product' } }).lean()
}

const deleteOrder = async (orderId) => {
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order);
}

module.exports = { findOrderById, createOrder, placeOrder, confirmedOrder, shippedOrder, deliveredOrder, cancelledOrder, usersOrderHistory, getAllOrders, deleteOrder }