const { User } = require('../models');

const postUser = (displayName, email, password, image) => {
    User.create({ displayName, email, password, image });
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return allUsers;
};

module.exports = { postUser, getAllUsers };