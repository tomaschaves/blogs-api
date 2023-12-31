const { User } = require('../models');
const { Category } = require('../models');
const { verifyToken } = require('../auth/authorizationFunction');

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

const checkToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const user = verifyToken(token);
    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

const checkCategoryNameLength = async (req, res, next) => {
  const { name } = req.body;
  
  if (name === undefined || name.length === 0) {
    return res.status(400)
      .json({ message: '"name" is required' });
  }
  
  return next();
};

const checkCategoryFields = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const fields = [];
  fields.push(title, content, categoryIds);
  const fieldsUndefined = fields.every((field) => field !== undefined || field);
  if (!(fieldsUndefined)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const fieldsLengthZero = fields.every((field) => field.length !== 0);

  if (!(fieldsLengthZero)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return next();
};

const checkCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;
  const responseFromDB = await Category.findAll({ attributes: { exclude: ['name'] } });
  const allCategoriesFromDB = responseFromDB.map((category) => category.dataValues.id);
  const equalCategories = categoryIds.every((category) => allCategoriesFromDB.includes(category));

  if (!equalCategories) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  return next();
};

module.exports = { checkLogin,
  checkLength,
  checkEmail,
  checkExistence,
  checkToken,
  checkCategoryNameLength,
  checkCategoryFields,
  checkCategoryIds,
};