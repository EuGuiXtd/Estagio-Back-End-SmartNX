const { Post, Comment } = require('../models');

const getAllPosts = async () => {
    const posts = await Post.findAll({
        include: { model: Comment, as: 'comments' },
    });
    return posts;
};

const getPostById = async (postId) => {
    const post = await Post.findByPk(postId, {
        include: { model: Comment, as: 'comments' },
    });
    return post;
}

const createPost = async (user, title, text) => {
    const post = await Post.create({ user, title, text });
    return post;
}

const deletePost = async (postId) => {
    const post = await Post.findByPk(postId);
    await post.destroy();
    const posts = await getAllPosts();
    return posts;
}

module.exports = {
    getAllPosts,
    createPost,
    getPostById,
    deletePost,
};