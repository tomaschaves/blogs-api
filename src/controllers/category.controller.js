const categoryService = require('../services/category.service');

const postCategory = async (req, res) => {
  const { name } = req.body;
  const id = await categoryService.postCategory(name);
  return res.status(201).json({ id, name });
};

const getAllCategories = async (req, res) => {
  const allCategories = await categoryService.getAllCategories();
  return res.status(200).json(allCategories);
};

module.exports = { postCategory, getAllCategories };