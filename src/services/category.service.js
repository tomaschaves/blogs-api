const { Category } = require('../models');

const postCategory = async (name) => {
  const categoryInserted = await Category.create({ name });
  return categoryInserted.id;
};

module.exports = { postCategory };