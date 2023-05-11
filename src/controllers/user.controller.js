const { createToken } = require('../auth/authorizationFunction');
const userService = require('../services/user.service');

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;   
  await userService.postUser(displayName, email, password, image);
  
  const token = createToken({ email });
  
  return res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers();
  return res.status(200).json(allUsers);
};

module.exports = { postUser, getAllUsers };