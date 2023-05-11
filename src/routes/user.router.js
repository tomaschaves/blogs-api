const express = require('express');
const userController = require('../controllers/user.controller');
const { checkLength, checkEmail, checkExistence } = require('../middlewares/validations');

const userRouter = express.Router();
userRouter.post('/', checkLength, checkEmail, checkExistence, userController.postUser);
// rotas do projeto anterior para modelo futuro
// loginRouter.get('/:id', loginController.getProductById);
// loginRouter.post('/', loginController.insertProduct);
// loginRouter.put('/:id', loginController.updateProduct);
// loginRouter.delete('/:id', loginController.deleteProduct);

module.exports = userRouter;
