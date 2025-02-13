const express = require('express')
const router = express.Router();
const authenticate = require('../middleware/authenticate');

const carItemController = require('../controller/cartItem.controller');

router.put('/:id', authenticate, carItemController.updateCartItem);
router.delete('/:id', authenticate, carItemController.removeCartItem);

module.exports = router;