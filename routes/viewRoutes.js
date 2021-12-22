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
  .route('/category/:id') ;
  //.get(viewController.getSingleJewel);


module.exports = router;