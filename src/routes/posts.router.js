const express = require('express');
const postsController = require('../controllers/posts.controller');
const { checkToken, checkCategoryFields, checkCategoryIds } = require('../middlewares/validations');

const postsRouter = express.Router();
postsRouter.post(
  '/', 
  checkToken,
  checkCategoryFields, 
  checkCategoryIds, 
  postsController.createPost,
);

module.exports = postsRouter;
