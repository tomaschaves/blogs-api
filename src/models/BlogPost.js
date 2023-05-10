/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost', {
      id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      user_id: DataTypes.STRING,
      published: DataTypes.STRING,
      updated: DataTypes.STRING,
  }, {
      timestamps: false,
      tableName: 'blog_posts',
    });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, 
      {
        as: 'user',
      });
  }
  return BlogPost;
};