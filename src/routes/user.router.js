const express = require('express');
const userController = require('../controllers/user.controller');
const { checkLength,
  checkEmail, checkExistence, checkToken } = require('../middlewares/validations');

const userRouter = express.Router();
userRouter.post('/', checkLength, checkEmail, checkExistence, userController.postUser);
userRouter.get('/', checkToken, userController.getAllUsers);
userRouter.get('/:id', checkToken, userController.getUser);
// rotas do projeto anterior para modelo futuro
// loginRouter.post('/', loginController.insertProduct);
// loginRouter.delete('/:id', loginController.deleteProduct);

module.exports = userRouter;
