// exploreController.js
const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/posts', async (req, res) => {
    try {
        const query = 'SELECT * FROM posts ORDER BY created_at DESC LIMIT 50'; // Adjust query as needed
        const [rows, fields] = await db.promise().query(query);

        res.status(200).json({ posts: rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching explore posts' });
    }
});

router.get('/users', async (req, res) => {
    try {
        const query = 'SELECT * FROM users ORDER BY RAND() LIMIT 50'; // Retrieve random users
        const [rows, fields] = await db.promise().query(query);

        res.status(200).json({ users: rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching explore users' });
    }
});

module.exports = router;
