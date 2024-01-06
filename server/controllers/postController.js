const express = require('express');
const router = express.Router();

router.post('/create', async (req, res) => {
    const { user_id, caption, image_url } = req.body;

    try {
        const query = 'INSERT INTO posts (user_id, caption, image_url) VALUES (?, ?, ?)';
        await db.promise().execute(query, [user_id, caption, image_url]);

        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating post' });
    }
});

router.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM posts';
        const [rows, fields] = await db.promise().query(query);

        res.status(200).json({ posts: rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving posts' });
    }
});


router.put('/:postId', async (req, res) => {
    const postId = req.params.postId;
    const { caption, image_url } = req.body;

    try {
        const query = 'UPDATE posts SET caption = ?, image_url = ? WHERE id = ?';
        await db.promise().execute(query, [caption, image_url, postId]);

        res.status(200).json({ message: 'Post updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating post' });
    }
});

router.delete('/:postId', async (req, res) => {
    const postId = req.params.postId;

    try {
        const query = 'DELETE FROM posts WHERE id = ?';
        await db.promise().execute(query, [postId]);

        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting post' });
    }
});

router.get('/feed', async (req, res) => {
    const userId = req.user.id;

    try {
        const query = `
            SELECT p.*
            FROM posts p
            INNER JOIN follows f ON p.user_id = f.followee_id
            WHERE f.follower_id = ?
            ORDER BY p.created_at DESC
        `;
        const [rows, fields] = await db.promise().execute(query, [userId]);

        res.status(200).json({ feed: rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching feed' });
    }
});



module.exports = router;
