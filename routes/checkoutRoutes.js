const express = require('express');
const checkoutController = require('../controllers/checkoutController');
const router= express.Router();

router
   .get('/checkout-session/:id',
   checkoutController.getCheckoutSession
);

module.exports = router;