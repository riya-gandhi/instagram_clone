// messagesController.js
const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/', async (req, res) => {
    const { sender_id, receiver_id, message_text } = req.body;

    try {
        const query = 'INSERT INTO messages (sender_id, receiver_id, message_text) VALUES (?, ?, ?)';
        await db.promise().execute(query, [sender_id, receiver_id, message_text]);

        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending message' });
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const query = `
            SELECT * FROM messages
            WHERE sender_id = ? OR receiver_id = ?
            ORDER BY sent_at DESC
        `;
        const [rows, fields] = await db.promise().execute(query, [userId, userId]);

        res.status(200).json({ messages: rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching messages' });
    }
});

module.exports = router;
