const express = require('express');
const commentRoute = require('./comment.route');

const router = express.Router();

const { validateId, validateFields, } = require('../middlewares/post.middleware');

const post = require('../controllers/post.controller');

router.use('/:postId/comments', commentRoute);

router.get('/', post.getAllPosts);
router.get('/:id', validateId, post.getPostById);
router.post('/', validateFields, post.createPost);
router.delete('/:id', validateId, post.deletePost);

module.exports = router;