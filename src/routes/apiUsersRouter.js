const express = require('express');
const router = express.Router();
const apiUsersController = require('../controllers/apiUsersController');

router.get('/index', apiUsersController.index)

module.exports = router;