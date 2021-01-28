const express = require('express');
const path = require('path');
const router = express.Router();
const controller = require('../controllers/productController');

const multer  = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'/../../public/img/'))
    },
    filename: function (req, file, cb) {
      cb(null, 'product-' + Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })


router.get('/create', controller.create);
router.get('/catalog', controller.catalog);
router.get('/:id', controller.show);
router.post('/create', upload.single('photo'), controller.store);
router.get('/:id/edit', controller.edit);
router.put('/:id', upload.single('photo'), controller.update);
router.delete('/:id', controller.destroy);

router.get('/shoppingCart', controller.shoppingCart);


module.exports = router;