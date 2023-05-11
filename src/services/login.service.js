const { User } = require('../models');

const logInUser = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });  
  if (user === null) {
    return { type: 400, message: { message: 'Invalid fields' } };
  }
  return { type: null, message: '' };
};

module.exports = { logInUser };