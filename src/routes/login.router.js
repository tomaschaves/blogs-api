const express = require('express');
const loginController = require('../controllers/login.controller');
const { checkLogin } = require('../middlewares/validations');

const loginRouter = express.Router();
loginRouter.post('/', checkLogin, loginController.logInUser);
// rotas do projeto anterior para modelo futuro
// loginRouter.get('/:id', loginController.getProductById);
// loginRouter.post('/', loginController.insertProduct);
// loginRouter.put('/:id', loginController.updateProduct);
// loginRouter.delete('/:id', loginController.deleteProduct);

module.exports = loginRouter;
