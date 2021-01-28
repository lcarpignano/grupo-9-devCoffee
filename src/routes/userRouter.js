const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

const multer  = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
       // Mejor usar algo como esto en lugar de Date.now()
        // https://www.npmjs.com/package/uuidv4
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage })

router.get('/', userController.index);
router.get('/register', userController.register)
router.post('/register', upload.single('image'), userController.store)
router.get('/:id/edit', userController.edit)
router.put('/:id', upload.single('image'), userController.update)
router.delete('/:id', userController.destroy);
router.get('/login', userController.login)

module.exports = router;