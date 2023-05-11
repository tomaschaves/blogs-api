/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.STRING,
      published: DataTypes.STRING,
      updated: DataTypes.STRING,
  }, {
      timestamps: false,
      tableName: 'blog_posts', // temos que colocar o nome da tabela em camelCase?
      underscored: true,
    });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, 
      {
        foreignKey: 'id',
        as: 'user',
      });
  }
  return BlogPost;
};