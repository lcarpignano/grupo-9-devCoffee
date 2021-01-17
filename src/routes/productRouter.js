const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/catalog', productController.catalog);

router.get('/shoppingCart', productController.shoppingCart);

router.get('/product', productController.product);

router.get('/createEditProduct', productController.createEditProduct);
router.post('/createEditProduct', productController.createEditProduct)



module.exports = router;