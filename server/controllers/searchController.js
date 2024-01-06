// searchController.js
const express = require('express');
const router = express.Router();
const db = require('./db');

// Search Users by Username
router.get('/users', async (req, res) => {
    const { username } = req.query;

    try {
        const query = 'SELECT * FROM users WHERE username LIKE ?';
        const [rows, fields] = await db.promise().execute(query, [`%${username}%`]);

        res.status(200).json({ users: rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error searching users' });
    }
});

// Search Posts by Caption or Hashtag
router.get('/posts', async (req, res) => {
    const { query } = req.query;

    try {
        const postQuery = `
            SELECT * FROM posts
            WHERE caption LIKE ? OR caption LIKE ? 
            OR caption LIKE ? OR caption LIKE ?
        `;
        const [rows, fields] = await db.promise().execute(postQuery, [
            `%${query}%`,
            `%#${query}%`,
            `#${query}%`,
            `%#${query}`,
        ]);

        res.status(200).json({ posts: rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error searching posts' });
    }
});

module.exports = router;
