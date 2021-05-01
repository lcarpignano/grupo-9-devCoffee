const express = require('express');
const router = express.Router();
const apiUsersController = require('../controllers/apiUsersController')


router.get('/profile', guestMiddleware, apiUsersController.profile)
router.get('/register', authMiddleware, apiUsersController.register)
router.post('/register', uploadFile.single('photo'), usersValidations.store, apiUsersController.userRegister)
router.get('/login', authMiddleware, apiUsersController.login)
router.post('/login', apiUsersController.loginProcess)
router.get('/logout', apiUsersController.logout)
router.get('/:id', apiUsersController.edit) //aca sacamos /edit
router.patch('/:id', uploadFile.single('photo'), usersValidations.update, apiUsersController.update)
router.delete('/:id', apiUsersController.destroy);


/* 
router.get('/', apiController.getCatalog)
router.get('/search', apiController.searchProduct)
router.get('/:id', apiController.getProduct)
router.post('/', apiController.createProduct)
router.patch('/:id', apiController.editProduct)
router.delete('/:id', apiController.destroyProduct)
 */

module.exports = router;