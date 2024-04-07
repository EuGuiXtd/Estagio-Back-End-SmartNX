const { Comment } = require('../models');
const postController = require('./post.service');

const addComment = async (postId, user, text) => {
    const comment = await Comment.create({ postId, user, text });
    const post = await postController.getPostById(comment.postId);
    return post;
}

const deleteComment = async (commentId) => {
    const comment = await Comment.findByPk(commentId);
    await comment.destroy();
    const post = await postController.getPostById(comment.postId);
    return post;
}

module.exports = {
    addComment,
    deleteComment,
};