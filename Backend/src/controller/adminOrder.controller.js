const orderService = require('../services/order.service');

const getAllOrders = async(req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        return res.status(200).send({orders});
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const confirmedOrders = async(req, res) => {
    try {
        const orders = await orderService.confirmedOrder(req.params.orderId);
        return res.status(200).send({orders});
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const shippedOrders = async(req, res) => {
    try {
        const orders = await orderService.shippedOrder(req.params.orderId);
        return res.status(200).send({orders});
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const deliveredOrders = async(req, res) => {
    try {
        const orders = await orderService.deliveredOrder(req.params.orderId);
        return res.status(200).send({orders});
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const cancelledOrders = async(req, res) => {
    try {
        const orders = await orderService.cancelledOrder(req.params.orderId);
        return res.status(200).send({orders});
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const deleteOrders = async(req, res) => {
    try {
        const orders = await orderService.deleteOrder(req.params.orderId);
        return res.status(200).send({orders});
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

module.exports = {getAllOrders, confirmedOrders, shippedOrders,deliveredOrders, cancelledOrders, deleteOrders};