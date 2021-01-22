const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/catalog', controller.catalog);
router.get('/create', controller.create);
router.get('/:id', controller.show);
router.post('/', controller.store);
router.get('/:id/edit', controller.edit);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

router.get('/shoppingCart', controller.shoppingCart);


module.exports = router;