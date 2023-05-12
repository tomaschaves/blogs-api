const { BlogPost, User, PostCategory } = require('../models');

const createPost = async (title, content, email) => {
  const { dataValues: { id: userId } } = await User.findOne({ where: { email } });

  const { dataValues: { id } } = await BlogPost
    .create({ title, content, userId });
  const { dataValues: { published, updated } } = await BlogPost.findOne({ where: { id } });

  const objectToReturn = {
    id,
    title,
    content,
    userId,
    updated,
    published,
  };    
  return { type: 201, message: objectToReturn };
};

const associatePost = async (postId, ids) => {
    const arrayToInsert = [];
    ids.forEach((element) => arrayToInsert.push({ postId, id: element }));

    await Promise.all(arrayToInsert.map((element) => 
      PostCategory.create({ postId: element.postId, categoryId: element.id })));
};

module.exports = { createPost, associatePost };