const { User } = require('../models');

const postUser = async (displayName, email, password, image) => {
    User.create({ displayName, email, password, image });
};

module.exports = { postUser };