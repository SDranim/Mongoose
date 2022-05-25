const express = require('express');
const { addUser, getUsers, deleteUser, updateUser, getone } = require('../controllers/usercontrollers');

const userRouter = express.Router();

// method post 
userRouter.post('/addUser',addUser);
// method get
userRouter.get('/getall',getUsers)
// method delete
userRouter.delete('/delete/:id',deleteUser)
//method put
userRouter.put('/update/:id',updateUser)
//getone
userRouter.get('/user/:id',getone)



module.exports = userRouter;
