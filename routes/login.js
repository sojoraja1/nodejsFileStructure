const express = require('express');
const router = express.Router()
const loginController = require('../controller/loginController')
router.get('/login',loginController);

module.exports = router;