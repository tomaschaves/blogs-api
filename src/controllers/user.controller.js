const { createToken } = require('../auth/authorizationFunction');
const userService = require('../services/user.service');

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;   
  userService.postUser(displayName, email, password, image);
  
  const token = createToken({ email });
  
  return res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers();
  return res.status(200).json(allUsers);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUser(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(user);
};

module.exports = { postUser, getAllUsers, getUser };