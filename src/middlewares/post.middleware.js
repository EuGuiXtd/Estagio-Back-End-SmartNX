const { Post } = require('../models');

const validateId = async (req, res, next) => {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    next();
}

const validateFields = async (req, res, next) => {
    const { user, title, text } = req.body;
    if (!user || !title || !text) return res.status(400).json({ error: 'Missing fields' });
    next();
}

module.exports = {
    validateId,
    validateFields,
};