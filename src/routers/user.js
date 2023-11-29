var express = require('express');
const userController = require('../controller/users.js');
const { getAllusers, createNewUsers } = require('../controller/users.js');

var router = express.Router();

//CREATE - POST
router.post('/', userController.createNewUsers);

//READ - GET
router.get('/', userController.getAllusers);

//UPDATE - PATCH
router.patch('/:id', userController.updateAllUsers); 

//DELATE - delate
router.delete('/:id', userController.deleteUser)

module.exports = router;