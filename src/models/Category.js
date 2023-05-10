/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category', {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
  }, {
      timestamps: false,
      tableName: 'category',
    });
  return Category;
};