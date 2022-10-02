const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

router.get('/alluser', userController.getAllUser)
router.post('/add', userController.addUser)
router.put('/update/:id', userController.updateUsers)
router.get('/detail/:id', userController.detailUsers)
router.delete('/delete/:id', userController.deleteUsers)

module.exports = router