const { User } = require('../models');

const postUser = (displayName, email, password, image) => {
  User.create({ displayName, email, password, image });
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return allUsers;
};

const getUser = async (id) => {
  const user = await User.findOne({
    where: { id }, attributes: { exclude: ['password'] },
  });
  return user;
};

module.exports = { postUser, getAllUsers, getUser };