const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/register', userController.register)
router.post('/register', userController.store)
router.get('/edit', userController.edit)
router.post('/edit', userController.update)
router.get('/login', userController.login)

module.exports = router;