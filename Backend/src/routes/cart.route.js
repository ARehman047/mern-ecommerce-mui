const express = require('express')
const router = express.Router();
const authenticate = require('../middleware/authenticate');

const cartController = require('../controller/cart.controller');

router.get('/', authenticate, cartController.findUserCart);
router.put('/add', authenticate, cartController.addItemToCart);

module.exports = router;