const express = require('express');
const categoryController = require('../controllers/category.controller');
const { checkToken, checkCategoryNameLength } = require('../middlewares/validations');

const categoryRouter = express.Router();
categoryRouter.post('/', checkToken, checkCategoryNameLength, categoryController.postCategory);
categoryRouter.get('/', checkToken, categoryController.getAllCategories);
// userRouter.get('/:id', checkToken, userController.getUser);

module.exports = categoryRouter;
