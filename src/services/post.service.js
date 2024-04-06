const { Post, Comment } = require('../models');

const getAllPosts = async () => {
    const posts = await Post.findAll({
        include: { model: Comment, as: 'comments' },
    });
    return posts;
};

const getPostById = async (id) => {
    const post = await Post.findByPk(id, {
        include: { model: Comment, as: 'comments' },
    });
    return post;
}

const createPost = async (user, body) => {
    const post = await Post.create({ user, body });
    return post;
}

const deletePost = async (id) => {
    const post = await Post.findByPk(id);
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