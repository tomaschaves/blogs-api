const { createToken } = require('../auth/authorizationFunction');
const userService = require('../services/user.service');

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;   
  await userService.postUser(displayName, email, password, image);
  
  const token = createToken({ email });
  
  return res.status(201).json({ token });
};

module.exports = { postUser };