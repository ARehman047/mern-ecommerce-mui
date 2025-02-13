const express = require('express')
const router = express.Router();

const orderController = require('../controller/adminOrder.controller');
const authenticate = require('../middleware/authenticate');

router.get('/', authenticate, orderController.getAllOrders);
router.put('/:orderId/confirmed', authenticate, orderController.confirmedOrders);
router.put('/:orderId/shipped', authenticate, orderController.shippedOrders);
router.put('/:orderId/delivered', authenticate, orderController.deliveredOrders);
router.put('/:orderId/cancelled', authenticate, orderController.cancelledOrders);
router.delete('/:orderId/delete', authenticate, orderController.deleteOrders);

module.exports = router;