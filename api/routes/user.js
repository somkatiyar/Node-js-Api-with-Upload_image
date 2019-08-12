const express = require('express');
const router = express.Router()
const userController = require('../controller/user')




router.post('/create', userController.userCreate);
router.post('/users', userController.userFind);











module.exports = router;





