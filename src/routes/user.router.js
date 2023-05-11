const express = require('express');
const userController = require('../controllers/user.controller');
const { checkLength,
  checkEmail, checkExistence, checkToken } = require('../middlewares/validations');

const userRouter = express.Router();
userRouter.post('/', checkLength, checkEmail, checkExistence, userController.postUser);
userRouter.get('/', checkToken, userController.getAllUsers);
userRouter.get('/:id', checkToken, userController.getUser);

module.exports = userRouter;
