const { createToken } = require('../auth/authorizationFunction');
const loginService = require('../services/login.service');

const logInUser = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await loginService.logInUser(email, password);

  if (type) {
    return res.status(type).json(message);
  }

  const token = createToken({ email });
  
  return res.status(200).json({ token });
};

module.exports = { logInUser };