/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', {
      id: DataTypes.INTEGER,
      display_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
  }, {
      timestamps: false,
      tableName: 'users',
    });

    User.associate = (models) => {
      User.hasMany(models.BlogPost, 
        {
          as: 'user_id',
          foreignKey: 'BlogPost',
        });
    }
  
  return User;
};