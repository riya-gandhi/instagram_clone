// commentsController.js
const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/posts/:postId/comment', async (req, res) => {
    const { postId } = req.params;
    const { user_id, comment_text } = req.body;

    try {
        const query = 'INSERT INTO comments (post_id, user_id, comment_text) VALUES (?, ?, ?)';
        await db.promise().execute(query, [postId, user_id, comment_text]);

        res.status(201).json({ message: 'Comment added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding comment' });
    }
});

module.exports = router;
