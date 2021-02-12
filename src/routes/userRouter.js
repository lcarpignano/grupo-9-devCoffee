const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const path = require('path');
const usersValidations = require('../validations/usersValidations')
const uploadFile = require('../middleware/multerMiddleware')

router.get('/index', userController.index)
router.get('/register', userController.register)
router.post('/register', uploadFile.single('photo'), usersValidations.store, userController.store)
router.get('/login', userController.login)
router.post('/login', userController.loginProcess)
router.get('/:id/edit', userController.edit)
router.put('/:id', uploadFile.single('photo'), usersValidations.update, userController.update)
router.delete('/:id', userController.destroy);

module.exports = router;