const { User } = require('../models');

const checkLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email.length === 0 || password.length === 0) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return next();
};

const checkLength = async (req, res, next) => {
  const { displayName, password } = req.body;
  
  if (displayName.length < 8 || !displayName) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  
  if (password.length < 6 || !password) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  return next();
};

const checkEmail = (req, res, next) => {
  const { email } = req.body;
  const regexEmail = /\S+@\S+\.\S+/;
  const validateEmailRegex = regexEmail.test(email);

  if (email === undefined || !validateEmailRegex) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  return next();
};

const checkExistence = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });

  if (user !== null) {
    return res.status(409).json({ message: 'User already registered' });
  }
  return next();
};

module.exports = { checkLogin, checkLength, checkEmail, checkExistence };