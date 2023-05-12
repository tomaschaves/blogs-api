const postsService = require('../services/posts.service');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { data: { email } } = req.user;
  const { type, message } = await postsService.createPost(title, content, email, categoryIds);
  await postsService.associatePost(message.id, categoryIds);

  return res.status(type).json(message);
};

module.exports = { createPost };