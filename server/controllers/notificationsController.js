// notificationsController.js
const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/', async (req, res) => {
    const { user_id, notification_text } = req.body;

    try {
        const query = 'INSERT INTO notifications (user_id, notification_text) VALUES (?, ?)';
        await db.promise().execute(query, [user_id, notification_text]);

        res.status(201).json({ message: 'Notification sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending notification' });
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const query = 'SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC';
        const [rows, fields] = await db.promise().execute(query, [userId]);

        res.status(200).json({ notifications: rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching notifications' });
    }
});

module.exports = router;
