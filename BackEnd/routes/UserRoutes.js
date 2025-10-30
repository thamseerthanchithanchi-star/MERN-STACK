const express = require('express')
const { Register, Login } = require('../Contollers/user.Ctrl')
  


const userRouter = express.Router()

// crud operation ; http request method
//create ; post
//read ;get
//update ; put
//delete ; delete
userRouter.post('/register',Register)
userRouter.post('/login', Login)


module.exports = userRouter