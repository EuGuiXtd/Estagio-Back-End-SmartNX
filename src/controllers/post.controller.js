const PostService = require('../services/post.service');

const getAllPosts = async (_req, res) => {
    try {
        const posts = await PostService.getAllPosts();
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await PostService.getPostById(id);
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const createPost = async (req, res) => {
    try {
        const { user, title, text } = req.body;
        const post = await PostService.createPost(user, title, text);
        return res.status(201).json(post);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await PostService.deletePost(id);
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllPosts,
    createPost,
    getPostById,
    deletePost,
};