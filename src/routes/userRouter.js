const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const path = require('path');
const usersValidations = require('../validations/usersValidations')
const uploadFile = require('../middleware/multerMiddleware')
const authMiddleware = require('../middleware/authMiddleware')
const guestMiddleware = require('../middleware/guestMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

router.get('/index', adminMiddleware, userController.index)
router.get('/profile', guestMiddleware, userController.profile)
router.get('/register', authMiddleware, userController.register)
router.post('/create', uploadFile.single('photo'), usersValidations.store, userController.userRegister)
router.get('/login', authMiddleware, userController.login)
router.post('/login', userController.loginProcess)
router.get('/logout', userController.logout)
router.get('/:id', userController.edit)
router.put('/:id', uploadFile.single('photo'), usersValidations.update, userController.update)
router.delete('/:id', userController.destroy);

module.exports = router;