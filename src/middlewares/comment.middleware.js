const { Comment, Post } = require('../models');

const validId = async (req, res, next) => {
    const { commentId } = req.params;
    const comment = await Comment.findByPk(commentId);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    next();
}

const validFields = async (req, res, next) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Missing fields' });
    next();
}

const validPostExists = async (req, res, next) => {
    const { postId } = req.params;
    const post = await Post.findByPk(postId);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    next();
}

module.exports = {
    validId,
    validFields,
    validPostExists,
};