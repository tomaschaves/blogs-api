const categoryService = require('../services/category.service');

const postCategory = async (req, res) => {
  const { name } = req.body;
  const id = await categoryService.postCategory(name);
  return res.status(201).json({ id, name });
};

module.exports = { postCategory };