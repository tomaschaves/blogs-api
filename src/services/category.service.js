const { Category } = require('../models');

const postCategory = async (name) => {
  const categoryInserted = await Category.create({ name });
  return categoryInserted.id;
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

module.exports = { postCategory, getAllCategories };