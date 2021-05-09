const express = require('express');
const router = express.Router();
const apiProductsController = require('../controllers/apiProductsController')

router.get('/', apiProductsController.getCatalog)
router.get('/categories', apiProductsController.getCategories)
router.get('/search', apiProductsController.searchProduct)
router.get('/:id', apiProductsController.getProduct)
router.post('/', apiProductsController.createProduct)
router.patch('/:id', apiProductsController.editProduct)
router.delete('/:id', apiProductsController.destroyProduct)


module.exports = router;