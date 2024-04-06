const CommentService = require('../services/comment.service');

const addComment = async (req, res) => {
    try {
        const { postId } = req.params;
        const { user, body } = req.body;
        const comment = await CommentService.addComment(postId, user, body);
        return res.status(201).json(comment);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await CommentService.deleteComment(id);
        return res.status(200).json(comment);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    addComment,
    deleteComment,
};