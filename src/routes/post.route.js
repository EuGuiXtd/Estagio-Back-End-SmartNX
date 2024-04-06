const express = require('express');

const router = express.Router();

const postMiddleware = require('../middlewares/post.middleware');

const post = require('../controllers/post.controller');

router.get('/', post.getAllPosts);
router.get('/:id', postMiddleware.validateId, post.getPostById);
router.post('/', postMiddleware.validateFields, post.createPost);
router.delete('/:id', postMiddleware.validateId, post.deletePost);

module.exports = router;