// likesController.js
const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/posts/:postId/like', async (req, res) => {
    const { postId } = req.params;
    const { user_id } = req.body;

    try {
        const query = 'INSERT INTO likes (post_id, user_id) VALUES (?, ?)';
        await db.promise().execute(query, [postId, user_id]);

        res.status(201).json({ message: 'Post liked successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error liking post' });
    }
});

router.delete('/posts/:postId/unlike', async (req, res) => {
    const { postId } = req.params;
    const { user_id } = req.body;

    try {
        const query = 'DELETE FROM likes WHERE post_id = ? AND user_id = ?';
        await db.promise().execute(query, [postId, user_id]);

        res.status(200).json({ message: 'Post unliked successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error unliking post' });
    }
});

module.exports = router;
