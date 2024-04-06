const express = require('express');

const router = express.Router();

const commentMiddleware = require('../middlewares/comment.middleware');
const coomentController = require('../controllers/comment.controller');

router.post('/:postId', commentMiddleware.validFields, commentMiddleware.validPostExists, coomentController.addComment);
router.delete('/:id', commentMiddleware.validId, coomentController.deleteComment);

module.exports = router;