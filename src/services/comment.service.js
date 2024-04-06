const { Comment } = require('../models');
const postController = require('./post.service');

const addComment = async (postId, user, body) => {
    const comment = await Comment.create({ postId, user, body });
    const posts = await postController.getAllPosts();
    return posts;
}

const deleteComment = async (id) => {
    const comment = await Comment.findByPk(id);
    await comment.destroy();
    const posts = await postController.getAllPosts();
    return posts;
}

module.exports = {
    addComment,
    deleteComment,
};