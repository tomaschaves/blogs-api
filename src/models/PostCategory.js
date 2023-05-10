/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory', {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
  }, {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    });

    PostCategory.associate = ({ BlogPost, Category }) => {
      BlogPost.belongsToMany(Category, { // o blogpost passa por meio da postcategory para se relacionar ao category. a FK chega no postcategory e pergunta 'quem eu sou?' e o próprio PostCategory diz 'você se chama 'postId'
        foreignKey: 'postId',
        through: PostCategory,
        as: 'Categories',
        // já a otherKey, 
        otherKey: 'categoryId',
      });
      Category.belongsToMany(BlogPost, { // mesma coisa, só que invertido
        foreignKey: 'categoryId',
        through: PostCategory,
        as: 'Posts',
        otherKey: 'postId',
      });
    };
  
  return PostCategory;
};