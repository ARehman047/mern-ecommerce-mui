const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

const addressController = require('../controller/address.controller');

router.get('/:addressId', authenticate, addressController.getAddressById);

module.exports = router;
