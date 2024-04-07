const express = require('express');

const router = express.Router({mergeParams: true});

const { validFields, validPostExists, validId, validCommentExistisInThisPost } = require('../middlewares/comment.middleware');
const coomentController = require('../controllers/comment.controller');

router.post('/', validFields, validPostExists, coomentController.addComment);
router.delete('/:commentId',validPostExists, validId, validCommentExistisInThisPost, coomentController.deleteComment);

module.exports = router;