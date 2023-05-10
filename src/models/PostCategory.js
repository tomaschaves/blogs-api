/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory', {
      post_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
  }, {
      timestamps: false,
      tableName: 'users',
    });

    PostCategory.associate = ({ BlogPost, Category }) => {
      BlogPost.belongsToMany(Category, {
        foreignKey: 'post_id',
      });
      Category.belongsToMany(BlogPost, {
        foreignKey: 'category_id',
      });
    };
  
  return PostCategory;
};