// followsController.js
const express = require('express');
const router = express.Router();

router.post('/follow/:userId', async (req, res) => {
    const followerId = req.user.id; // Assuming authenticated user's ID is retrieved from token
    const followeeId = req.params.userId;

    try {
        const query = 'INSERT INTO follows (follower_id, followee_id) VALUES (?, ?)';
        await db.promise().execute(query, [followerId, followeeId]);

        res.status(201).json({ message: 'Followed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error following user' });
    }
});

router.delete('/unfollow/:userId', async (req, res) => {
    const followerId = req.user.id; // Assuming authenticated user's ID is retrieved from token
    const followeeId = req.params.userId;

    try {
        const query = 'DELETE FROM follows WHERE follower_id = ? AND followee_id = ?';
        await db.promise().execute(query, [followerId, followeeId]);

        res.status(200).json({ message: 'Unfollowed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error unfollowing user' });
    }
});

module.exports = router;
