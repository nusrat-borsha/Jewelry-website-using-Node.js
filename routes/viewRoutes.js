const express = require('express');
const viewController = require('../controllers/viewController');
const router= express.Router();

router
  .route('/') 
  .get(viewController.getIndex);

router
  .route('/all-collections') 
  .get(viewController.getAllCollection);

router
  .route('/all-collections/:category') 
  .get(viewController.getJewelBasedOnCategory);


module.exports = router;