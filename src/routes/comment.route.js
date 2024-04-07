const express = require('express');

const router = express.Router({mergeParams: true});

const { validFields, validPostExists, validId } = require('../middlewares/comment.middleware');
const coomentController = require('../controllers/comment.controller');

router.post('/', validFields, validPostExists, coomentController.addComment);
router.delete('/:id',validPostExists, validId, coomentController.deleteComment);

module.exports = router;