const express = require('express');
const path = require('path');
const router = express.Router();
const controller = require('../controllers/productController');
const uploadFile = require('../middleware/multerMiddleware')


router.get('/create', controller.create);
router.post('/create', uploadFile.single('photo'), controller.store);
router.get('/catalog', controller.catalog);
router.get('/index', controller.index);
router.get('/:id', controller.show);
router.get('/:id/edit', controller.edit);
router.put('/:id', uploadFile.single('photo'), controller.update);
router.delete('/:id', controller.destroy);

router.get('/shoppingCart', controller.shoppingCart);


module.exports = router;